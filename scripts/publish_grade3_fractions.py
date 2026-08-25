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


GRADE3_FRACTION_SKILLS = {
    'fraction-add-like-simple': {'title': '簡単な同分母分数のたし算', 'type': 'fraction-add'},
    'fraction-sub-like-simple': {'title': '簡単な同分母分数のひき算', 'type': 'fraction-sub'},
}
SEEDS = (4301, 4402, 4503)
PROBLEM_COUNT = 20
UNIT_TITLE = '簡単な分数のたし算・ひき算'
DENOMINATORS = tuple(range(3, 11))


def independent_fraction_answer(problem):
    if problem['type'] == 'fraction-add':
        return problem['a_num'] + problem['b_num'], problem['den']
    if problem['type'] == 'fraction-sub':
        return problem['a_num'] - problem['b_num'], problem['den']
    raise ValueError(problem['type'])


def fraction_text(num, den):
    return '1' if num == den else f'{num}/{den}'


def candidates(skill):
    ptype = GRADE3_FRACTION_SKILLS[skill]['type']
    out = []
    for den in DENOMINATORS:
        if ptype == 'fraction-add':
            for a in range(1, den):
                for b in range(1, den):
                    if a + b <= den:
                        out.append((a, b, den))
        else:
            for a in range(2, den):
                for b in range(1, a):
                    out.append((a, b, den))
    return out


def validate_grade3_fraction_problem(skill, problem):
    ptype = GRADE3_FRACTION_SKILLS[skill]['type']
    assert problem['type'] == ptype
    a, b, den = problem['a_num'], problem['b_num'], problem['den']
    assert den in DENOMINATORS
    assert 1 <= a < den and 1 <= b < den
    answer_num, answer_den = independent_fraction_answer(problem)
    assert answer_den == den
    assert answer_num == problem['answer_num']
    if ptype == 'fraction-add':
        assert 1 <= answer_num <= den
    else:
        assert a > b and 1 <= answer_num < den
    assert problem['answer'] == fraction_text(answer_num, den)


def generate_grade3_fractions(skill, seed, count=PROBLEM_COUNT):
    pool = candidates(skill)
    rng = random.Random(seed)
    rng.shuffle(pool)

    # Keep denominator practice broad: at least six different denominators per sheet.
    by_den = {den: [] for den in DENOMINATORS}
    for item in pool:
        by_den[item[2]].append(item)
    den_order = list(DENOMINATORS)
    rng.shuffle(den_order)
    chosen = []
    for den in den_order:
        if by_den[den]:
            chosen.append(by_den[den].pop())
    remaining = [item for den in DENOMINATORS for item in by_den[den]]
    rng.shuffle(remaining)
    chosen.extend(remaining[: count - len(chosen)])
    rng.shuffle(chosen)

    problems = []
    for a, b, den in chosen:
        ptype = GRADE3_FRACTION_SKILLS[skill]['type']
        answer_num = a + b if ptype == 'fraction-add' else a - b
        problem = {
            'type': ptype,
            'a_num': a,
            'b_num': b,
            'den': den,
            'answer_num': answer_num,
            'answer': fraction_text(answer_num, den),
        }
        validate_grade3_fraction_problem(skill, problem)
        problems.append(problem)
    assert len(problems) == count
    assert len({(p['a_num'], p['b_num'], p['den']) for p in problems}) == count
    assert len({p['den'] for p in problems}) >= 6
    return problems


def problem_text(problem):
    op = '+' if problem['type'] == 'fraction-add' else '-'
    return f"{problem['a_num']}/{problem['den']} {op} {problem['b_num']}/{problem['den']} = □"


def render_fraction_pdf(path, title, problems):
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
                answer_num, den = independent_fraction_answer(problem)
                c.setFillColor(colors.red)
                c.drawString(x + 28, y - 20, f"こたえ：{fraction_text(answer_num, den)}")
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

    for skill, spec in GRADE3_FRACTION_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e3-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade3_fractions(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_fraction_pdf(output_dir / filename, spec['title'], problems)
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
                'description': '小学3年で扱う簡単な同分母分数の加法・減法を20問くり返すプリントです。真分数どうしを扱い、加法は和が1までです。2ページ目は同じ問題配置に赤字で解答を加えています。',
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
    print(f'published {published} grade-3 fraction worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
