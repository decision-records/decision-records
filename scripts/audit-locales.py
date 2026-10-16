#!/usr/bin/env python3
"""Audit locales/: every locale has the same pages as the source locale (en-us), every README.md is a
symlink to the index.md beside it, no stray files, and every relative link and #anchor resolves.
Run from anywhere: python3 scripts/audit-locales.py (exit status 1 on any problem)."""
import os, re, sys, unicodedata, urllib.parse, collections

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(os.path.join(ROOT, 'locales'))
SRC = 'en-us'
SECS = ['guide', 'tutorial', 'template', 'examples', 'checklist', 'help']  # section peer ids come from SRC
problems = collections.defaultdict(list)


def peer(p):
    f = p + '/.locale-peer-id'
    return open(f).read().strip() if os.path.isfile(f) else ''


def slugify(text):
    text = re.sub(r'<[^>]+>', '', text.strip().lower())
    text = ''.join(c for c in text if unicodedata.category(c)[0] in 'LMN' or c in '-_ ')
    return text.replace(' ', '-')


def anchors(path):
    seen, out, fence = collections.Counter(), set(), False
    for line in open(path, encoding='utf-8'):
        if line.startswith('```'):
            fence = not fence
        m = not fence and re.match(r'^#{1,6}\s+(.+?)\s*#*\s*$', line)
        if m:
            s = slugify(re.sub(r'`|\*|\[([^\]]*)\]\([^)]*\)', lambda x: x.group(1) or '', m.group(1)))
            n = seen[s]
            seen[s] += 1
            out.add(s if n == 0 else f'{s}-{n}')
    for m in re.finditer(r'<(?:a|span)\s+(?:name|id)="([^"]+)"', open(path, encoding='utf-8').read()):
        out.add(m.group(1))
    return out


def content_dirs(root):
    """peer id -> relative dir, for every directory (section or page) under a locale."""
    out = {}
    for s in sorted(os.listdir(root)):
        sp = f'{root}/{s}'
        if not os.path.isdir(sp):
            continue
        if not peer(sp):
            continue  # placeholder directory (topics), not a section
        out[peer(sp)] = s
        for d in sorted(os.listdir(sp)):
            dp = f'{sp}/{d}'
            if os.path.isdir(dp) and os.path.isfile(f'{dp}/index.md'):
                out[peer(dp) or f'?{s}/{d}'] = f'{s}/{d}'
    return out


locales = sorted(x for x in os.listdir('.') if re.match(r'^[a-z]{2,3}-[a-z0-9]{2,3}(-[a-z0-9]{5,8})?$', x))
if SRC not in locales:
    sys.exit(f'source locale {SRC} missing')
src = content_dirs(SRC)

for loc in locales:
    mine = content_dirs(loc)
    for pid, rel in src.items():
        if pid not in mine:
            problems[loc].append(f'missing page (peer {pid}): {rel}')
    for pid, rel in mine.items():
        if pid not in src:
            problems[loc].append(f'stray page not in {SRC}: {rel}')
    if not os.path.isfile(f'{loc}/index.md'):
        problems[loc].append('missing root index.md')
    for dp, dns, fs in os.walk(loc):
        dns[:] = [d for d in dns if d != '.git']
        for f in fs:
            q = f'{dp}/{f}'
            if f == '.DS_Store':
                problems[loc].append(f'stray {q}')
            elif f == 'README.md' and (not os.path.islink(q) or os.readlink(q) != 'index.md'):
                problems[loc].append(f'README.md must be a symlink to index.md: {q}')
            elif os.path.islink(q) and f != 'README.md':
                problems[loc].append(f'unexpected symlink: {q}')
        # a content directory with index.md must also have the README.md symlink
        if 'index.md' in fs and 'README.md' not in fs:
            problems[loc].append(f'missing README.md symlink in {dp}')

    # links and anchors in every index.md
    cache = {}
    def anchors_of(p):
        if p not in cache:
            cache[p] = anchors(p)
        return cache[p]
    for dp, _, fs in os.walk(loc):
        if 'index.md' not in fs:
            continue
        page = f'{dp}/index.md'
        text = re.sub(r'```.*?```', '', open(page, encoding='utf-8').read(), flags=re.S)
        text = re.sub(r'`[^`\n]*`', '', text)
        for m in re.finditer(r'(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)', text):
            href = m.group(1)
            if re.match(r'^([a-z][a-z0-9+.-]*:|//)', href, re.I):
                continue
            target, _, frag = href.partition('#')
            target = urllib.parse.unquote(target)
            dest = page if not target else os.path.normpath(os.path.join(dp, target))
            if target and os.path.isdir(dest):
                dest = os.path.join(dest, 'index.md')
            if not os.path.exists(dest):
                problems[loc].append(f'broken link {href} in {page}')
            elif frag and dest.endswith('.md') and urllib.parse.unquote(frag) not in anchors_of(dest):
                problems[loc].append(f'broken anchor {href} in {page}')

# The source locale's root index.md is generated from the top-level README.md.
if os.system(f'python3 {ROOT}/scripts/build-english-variants.py --check') != 0:
    problems['variants'].append('a generated locale (en-001, en-gb, en-gb-oxendict, cy-001) is stale: run python3 scripts/build-english-variants.py')
if os.system(f'python3 {ROOT}/scripts/build-root-index.py --check') != 0:
    problems[SRC].append('index.md is stale: run python3 scripts/build-root-index.py')

for loc, ps in sorted(problems.items()):
    print(f'{loc}: {len(ps)} problem(s)')
    for p in ps[:40]:
        print('  ' + p)
print(f'{len(locales)} locale(s) audited; {sum(len(v) for v in problems.values())} problem(s)')
sys.exit(1 if problems else 0)
