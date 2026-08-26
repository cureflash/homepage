import json
import random
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SKILLS = {'decimal-div-one-digit': {'title': '小数÷1桁整数（1/100の位まで・割り切れる）'}}
SEEDS = (6001, 6102, 6203)
PROBLEM_COUNT = 20
UNIT_TITLE = '小数÷整数'


def independent_answer(problem):
    units, divisor = problem['dividend_units'], problem['divisor']
    assert units % divisor == 0
    return units // divisor


def validate_problem(problem):
    assert 1 <= problem['dividend_units'] <= 9999
    assert 2 <= problem['divisor'] <= 9
    assert problem['dividend_units'] % 10 != 0
    assert independent_answer(problem) == problem['answer_units']


def generate(seed, count=PROBLEM_COUNT):
    rng = random.Random(seed)
    problems, seen = [], set()
    while len(problems) < count:
        divisor = rng.randint(2, 9)
        answer_units = rng.randint(1, 4999)
        units = divisor * answer_units
        if units > 9999 or units % 10 == 0:
            continue
        key = (units, divisor)
        if key in seen:
            continue
        problem = {'dividend_units': units, 'divisor': divisor, 'answer_units': answer_units}
        validate_problem(problem)
        problems.append(problem); seen.add(key)
    return problems


def decimal_text(units):
    return f'{units // 100}.{units % 100:02d}'


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4); w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black); c.setFont(FONT, 18); c.drawString(45, h - 55, title)
        c.setFont(FONT, 10); c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________'); c.setFont(FONT, 14)
        for i, p in enumerate(problems):
            x = 55 + (i // 10) * 260; y = h - 120 - (i % 10) * 63
            c.setFillColor(colors.black); c.drawString(x, y, str(i + 1))
            c.drawString(x + 28, y, f"{decimal_text(p['dividend_units'])} ÷ {p['divisor']} = □")
            if answer_mode:
                c.setFillColor(colors.red); c.drawString(x + 28, y - 20, f"こたえ：{decimal_text(independent_answer(p))}")
        if not answer_mode: c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root); catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'; out.mkdir(parents=True, exist_ok=True)
    existing = {e['id'] for e in catalog}; published = 0
    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'e4-{skill}-{variant:02d}'
            if wid in existing: continue
            problems = generate(seed); content_hash = normalized_hash(problems)
            assert all(e['content_hash'] != content_hash for e in catalog)
            filename = f'{wid}.pdf'; render_pdf(out / filename, spec['title'], problems)
            catalog.append({'id': wid, 'school_level': 'elementary', 'grade': 4, 'subject': '算数', 'unit': UNIT_TITLE,
                'skill': skill, 'problem_count': PROBLEM_COUNT, 'seed': seed, 'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '1/100の位までの小数を1桁整数で割る、割り切れる計算を20問反復します。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-04/{filename}', 'content_hash': content_hash,
                'difficulty': 'basic', 'worksheet_series': 'focused', 'worksheet_format': 'decimal-horizontal', 'answer_type': 'numeric'})
            existing.add(wid); published += 1
    validate_catalog(catalog, root); catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 decimal division worksheets')

if __name__ == '__main__': publish(sys.argv[1] if len(sys.argv) > 1 else '.')
