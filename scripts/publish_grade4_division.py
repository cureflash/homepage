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


GRADE4_DIVISION_SKILLS = {
    'division-2digit-divisor-exact': {
        'title': '2桁で割るわり算（割り切れる）',
        'remainder': False,
    },
    'division-2digit-divisor-remainder': {
        'title': '2桁で割るわり算（あまりあり）',
        'remainder': True,
    },
}
SEEDS = (4401, 4502, 4603)
PROBLEM_COUNT = 20
UNIT_TITLE = '2位数などで割る整数のわり算'


def independent_division_answer(problem):
    return divmod(problem['a'], problem['b'])


def candidates(skill):
    out = []
    for divisor in range(11, 100):
        for quotient in range(2, 30):
            if skill == 'division-2digit-divisor-exact':
                dividend = divisor * quotient
                if 22 <= dividend <= 999:
                    out.append((dividend, divisor))
            elif skill == 'division-2digit-divisor-remainder':
                # Use several deterministic remainders per divisor/quotient without
                # exploding the candidate pool. All are strictly smaller than divisor.
                remainder_candidates = {
                    1,
                    max(1, divisor // 3),
                    max(1, divisor // 2),
                    divisor - 1,
                }
                for remainder in sorted(remainder_candidates):
                    if not 1 <= remainder < divisor:
                        continue
                    dividend = divisor * quotient + remainder
                    if 22 <= dividend <= 999:
                        out.append((dividend, divisor))
            else:
                raise ValueError(skill)
    return out


def validate_grade4_division_problem(skill, problem):
    assert problem['type'] == 'div'
    dividend, divisor = problem['a'], problem['b']
    assert 22 <= dividend <= 999
    assert 11 <= divisor <= 99
    quotient, remainder = independent_division_answer(problem)
    assert quotient == problem['quotient']
    assert remainder == problem['remainder']
    assert divisor * quotient + remainder == dividend
    assert 0 <= remainder < divisor
    assert quotient >= 2
    if skill == 'division-2digit-divisor-exact':
        assert remainder == 0
    elif skill == 'division-2digit-divisor-remainder':
        assert 1 <= remainder < divisor
    else:
        raise ValueError(skill)


def generate_grade4_division(skill, seed, count=PROBLEM_COUNT):
    pool = candidates(skill)
    rng = random.Random(seed)
    rng.shuffle(pool)
    chosen = pool[:count]
    assert len(chosen) == count
    problems = []
    for dividend, divisor in chosen:
        quotient, remainder = divmod(dividend, divisor)
        problem = {
            'type': 'div',
            'a': dividend,
            'b': divisor,
            'quotient': quotient,
            'remainder': remainder,
            'answer': quotient if remainder == 0 else f'{quotient} あまり {remainder}',
        }
        validate_grade4_division_problem(skill, problem)
        problems.append(problem)
    assert len({(p['a'], p['b']) for p in problems}) == count
    return problems


def problem_text(problem):
    return f"{problem['a']} ÷ {problem['b']} = □"


def answer_text(problem):
    quotient, remainder = independent_division_answer(problem)
    return str(quotient) if remainder == 0 else f'{quotient} あまり {remainder}'


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
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE4_DIVISION_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e4-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade4_division(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_division_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 4,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '2桁の数で割る整数の除法を20問反復するプリントです。商と余りを独立再計算し、2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-04/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'horizontal',
                'answer_type': 'numeric',
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 two-digit-divisor worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
