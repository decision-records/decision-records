#!/usr/bin/env python3
"""Builds locales/en-us/index.md, the English locale's landing page, from the top-level README.md.
Links into locales/en-us/ become relative to the locale root; links to other top-level paths
(spec, skills, the website) become GitHub URLs. With --check, only verifies the file is current."""
import os, re, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
REPO = 'https://github.com/decision-records/decision-records'
OUT = os.path.join(ROOT, 'locales/en-us/index.md')


def convert(match):
    label, href = match.group(1), match.group(2)
    if re.match(r'^([a-z][a-z0-9+.-]*:|//|#)', href, re.I):
        return match.group(0)
    if href.startswith('locales/en-us/'):
        return f'[{label}]({href[len("locales/en-us/"):]})'
    kind = 'tree' if '.' not in os.path.basename(href) or href.endswith('.github.io') else 'blob'
    return f'[{label}]({REPO}/{kind}/main/{href.strip("/")})'


text = open(os.path.join(ROOT, 'README.md'), encoding='utf-8').read()
text = re.sub(r'^<!--.*?-->\s*', '', text, count=1, flags=re.S)  # drop the metadata header
text = re.sub(r'(?<!!)\[([^\]]*)\]\(([^)\s]+)\)', convert, text)
if '--check' in sys.argv:
    ok = os.path.isfile(OUT) and open(OUT, encoding='utf-8').read() == text
    sys.exit(0 if ok else 1)
open(OUT, 'w', encoding='utf-8').write(text)
print(f'Wrote {os.path.relpath(OUT, ROOT)}')
