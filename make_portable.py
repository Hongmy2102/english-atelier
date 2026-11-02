"""Generate a portable HTML copy using only the Python standard library."""
from pathlib import Path
import re
from html import escape
root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + (root / 'style.css').read_text(encoding='utf-8') + '\n</style>')
for filename in ['content.js', 'lessons.js', 'phonetics.js', 'pronunciation.js', 'app.js']:
    script = (root / filename).read_text(encoding='utf-8')
    script = re.sub(r'</script', lambda m: '<\\/script', script, flags=re.IGNORECASE)
    html = html.replace(f'<script src="{filename}" defer></script>', '')
    html = html.replace('</body>', f'<script>\n{script}\n</script></body>')
notice = root / 'THIRD_PARTY_NOTICES.md'
if notice.exists():
    html = html.replace('href="THIRD_PARTY_NOTICES.md"', 'href="#ipa-license"')
    license_html = '<details class="study-disclosure license-disclosure" id="ipa-license"><summary>Nguồn và giấy phép dữ liệu IPA</summary><pre>' + escape(notice.read_text(encoding='utf-8')) + '</pre></details>'
    html = html.replace('</main>', license_html + '</main>')
(root / 'English-Atelier.html').write_text(html, encoding='utf-8')
print('Generated English-Atelier.html')
