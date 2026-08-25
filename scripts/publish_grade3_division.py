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


GRADE3_DIVISION_SKILLS = {
    'division-exact-2digit-1digit': {
        'title': '2桁 ÷ 1桁（割り切れる）',
        'remainder': False,
    },
    'division-remainder-1digit': {
        'title': '1桁で割るわり算（あまりあり）',
        'remainder': True,
    },
}
SEEDS = (3701, 3802, 3903)
PROBLEM_COUNT = 20
UNIT_TITLE = 'わり算'


def independent_division_answer(problem):
    a, b = problem['a'], problem['b']
    return a // b, a % b


def candidates(skill):
    if skill == 'division-exact-2digit-1digit':
        # Include genuinely third-grade two-digit division, not only inverse九九.
        out = []
        for divisor in range(2, 10):
            for quotient in range(10, 50):
                dividend = divisor * quotient
                if 10 <= dividend <= 99:
                    out.append((dividend, divisor))
        return out
    if skill == 'division-remainder-1digit':
        # Basic remainder division whose quotient is found with one multiplication-table fact.
        out = []
        for divisor in range(2, 10):
            for quotient in range(1, 10):
                for remainder in range(1, divisor):
                    dividend = divisor * quotient + remainder
                    if 10 <= dividend <= 99:
                        out.append((dividend, divisor))
        return out
    raise ValueError(skill)


def validate_grade3_division_problem(skill, problem):
    assert problem['type'] == 'div'
    a, b = problem['a'], problem['b']
    assert 10 <= a <= 99
    assert 2 <= b <= 9
    q, r = independent_division_answer(problem)
    assert q == problem['quotient']
    assert r == problem['remainder']
    if skill == 'division-exact-2digit-1digit':
        assert r == 0
        assert q >= 10
    elif skill == 'division-remainder-1digit':
        assert 1 <= q <= 9
        assert 1 <= r < b
    else:
        raise ValueError(skill)


def generate_grade3_division(skill, seed, count=PROBLEM_COUNT):
    pool = candidates(skill)
    rng = random.Random(seed)
    rng.shuffle(pool)
    chosen = pool[:count]
    assert len(chosen) == count
    problems = []
    for a, b in chosen:
        q, r = divmod(a, b)
        problem = {
            'type': 'div',
            'a': a,
            'b': b,
            'quotient': q,
            'remainder': r,
            'answer': q if r == 0 else f'{q} あまり {r}',
        }
        validate_grade3_division_problem(skill, problem)
        problems.append(problem)
    assert len({(p['a'], p['b']) for p in problems}) == count
    return problems


def problem_text(problem):
    return f"{problem['a']} ÷ {problem['b']} = □"


def answer_text(problem):
    q, r = independent_division_answer(problem)
    return str(q) if r == 0 else f'{q} あまり {r}'


def render_division_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.setFont(FONT, 14)
        for i, problem in enumerate(problems):
            col = i // 10
            row = i % 10
            x = 55 + col * 260
            y = h - 120 - row * 63
            c.setFillColor(colors.black)
            c.drawString(x, y, str(i + 1))
            c.drawString(x + 28, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.drawString(x + 28, y - 20, f'こたえ：{answer_text(problem)}')
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-03'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE3_DIVISION_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e3-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade3_division(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_division_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 3,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '小学3年の1位数で割る除法を20問くり返すプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-03/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'answer_type': 'numeric',
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-3 division worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
