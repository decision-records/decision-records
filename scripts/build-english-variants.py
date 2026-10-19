#!/usr/bin/env python3
"""Builds generated locales from their source locale.
English variants (en-001, en-gb, en-gb-oxendict) are respelled copies of locales/en-us: en-001 and en-gb use
British spelling with -ise; en-gb-oxendict is British with Oxford -ize. cy-001 is an exact copy of cy-gb.
Edit the source locales (en-us, cy-gb) only; the generated directories are overwritten.
With --check, verifies they are current."""
import os, re, sys, shutil, filecmp

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LOCALES = os.path.join(ROOT, 'locales')
SRC = 'en-us'
# Exact copies: generated locale -> source locale.
COPIES = {'cy-001': 'cy-gb', 'zh-001': 'zh-cn', 'hi-001': 'hi-in', 'ja-001': 'ja-jp'}

# (American stem, British stem); matched at a word start, case-preserving, suffix kept.
BRITISH = [('modeling', 'modelling'), ('modeled', 'modelled'), ('enrollment', 'enrolment'), ('enroll', 'enrol'),
           ('skeptic', 'sceptic'), ('favor', 'favour'), ('judgment', 'judgement'), ('labeled', 'labelled'),
           ('canceled', 'cancelled'), ('analyze', 'analyse'), ('center', 'centre'), ('behavior', 'behaviour'),
           ('color', 'colour')]
IZE = ['organiz', 'monetiz', 'summariz', 'standardiz', 'socializ', 'recogniz', 'realiz', 'prioritiz', 'optimiz',
       'hypothesiz', 'generaliz', 'finaliz', 'categoriz', 'customiz', 'formaliz', 'minimiz', 'maximiz', 'utiliz',
       'authoriz', 'centraliz', 'visualiz', 'characteriz', 'emphasiz', 'specializ', 'synchroniz', 'normaliz']
VARIANTS = {'en-001': BRITISH + [(s, s[:-1] + 's') for s in IZE],
            'en-gb': BRITISH + [(s, s[:-1] + 's') for s in IZE],
            'en-gb-oxendict': BRITISH}
# "analyze"/"center" etc. only change when they start a word.


def respell(text, pairs):
    def one(word_match):
        w = word_match.group(0)
        low = w.lower()
        for a, b in pairs:
            if low.startswith(a):
                out = b + low[len(a):]
                if w.isupper() and len(w) > 1:
                    return out.upper()
                return out[0].upper() + out[1:] if w[0].isupper() else out
        return w
    return re.sub(r"[A-Za-z]+", one, text)


def transform(text, pairs):
    """Respell prose only: not code, URLs, or link targets (except #fragments, which follow headings)."""
    keep = re.compile(r'(```.*?```|`[^`\n]*`|https?://[^\s)>\]]+|\]\((?!#)[^)\s]*\)|<!--.*?-->)', re.S)
    out, pos = [], 0
    for m in keep.finditer(text):
        out.append(respell(text[pos:m.start()], pairs))
        out.append(m.group(0))
        pos = m.end()
    out.append(respell(text[pos:], pairs))
    return ''.join(out)


def expected(loc):
    src = COPIES.get(loc, SRC)
    """relative path -> ('link', target) | ('file', bytes)"""
    files, base = {}, os.path.join(LOCALES, src)
    for dp, _, fs in os.walk(base):
        for f in fs:
            p = os.path.join(dp, f)
            rel = os.path.relpath(p, base)
            if f in ('.DS_Store', 'sitemap.xml'):
                continue
            if os.path.islink(p):
                files[rel] = ('link', os.readlink(p))
            elif f == 'index.md' and loc in VARIANTS:
                files[rel] = ('file', transform(open(p, encoding='utf-8').read(), VARIANTS[loc]).encode())
            else:
                files[rel] = ('file', open(p, 'rb').read())
    return files


def actual(loc):
    files, base = {}, os.path.join(LOCALES, loc)
    for dp, _, fs in os.walk(base):
        for f in fs:
            p = os.path.join(dp, f)
            rel = os.path.relpath(p, base)
            if f in ('.DS_Store', 'sitemap.xml'):
                continue
            files[rel] = ('link', os.readlink(p)) if os.path.islink(p) else ('file', open(p, 'rb').read())
    return files


bad = 0
for loc in [*VARIANTS, *COPIES]:
    want = expected(loc)
    if '--check' in sys.argv:
        if actual(loc) != want:
            print(f'{loc} is stale: run python3 scripts/build-english-variants.py')
            bad = 1
        continue
    shutil.rmtree(os.path.join(LOCALES, loc), ignore_errors=True)
    for rel, (kind, data) in want.items():
        p = os.path.join(LOCALES, loc, rel)
        os.makedirs(os.path.dirname(p), exist_ok=True)
        if kind == 'link':
            os.symlink(data, p)
        else:
            open(p, 'wb').write(data)
    print(f'Wrote locales/{loc} ({len(want)} files)')
sys.exit(bad)
