import json
import random
import sys
from collections import Counter
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SKILL = 'large-number-place-value'
TITLE = '億・兆の位取り'
UNIT_TITLE = '大きな数'
SEEDS = (8907, 9008, 9109)
PROBLEM_COUNT = 20
PLACES = (
    (10**4, '万'),
    (10**5, '十万'),
    (10**6, '百万'),
    (10**7, '千万'),
    (10**8, '億'),
    (10**9, '十億'),
    (10**10, '百億'),
    (10**11, '千億'),
    (10**12, '兆'),
)


def independent_answer(problem):
    if problem['type'] == 'place-digit':
        return (problem['number'] // problem['place']) % 10
    if problem['type'] == 'compose-four-groups':
        return (
            problem['cho'] * 10**12
            + problem['oku'] * 10**8
            + problem['man'] * 10**4
            + problem['ones']
        )
    raise AssertionError(problem['type'])


def validate_problem(problem):
    assert independent_answer(problem) == problem['answer']
    if problem['type'] == 'place-digit':
        assert 10**8 <= problem['number'] <= 9_999_999_999_999
        assert problem['place'] in {value for value, _ in PLACES}
        assert 0 <= problem['answer'] <= 9
    elif problem['type'] == 'compose-four-groups':
        assert 1 <= problem['cho'] <= 9
        assert all(0 <= problem[key] <= 9999 for key in ('oku', 'man', 'ones'))
        assert 10**12 <= problem['answer'] <= 9_999_999_999_999
    else:
        raise AssertionError(problem['type'])


def generate(seed):
    rng = random.Random(seed)
    problems = []
    used = set()
    place_values = [value for value, _ in PLACES]
    for index in range(PROBLEM_COUNT):
        if index < 12:
            while True:
                number = rng.randint(100_000_000, 9_999_999_999_999)
                place = place_values[index % len(place_values)]
                key = ('place-digit', number, place)
                if key not in used:
                    used.add(key)
                    break
            problem = {'type': 'place-digit', 'number': number, 'place': place}
        else:
            while True:
                values = (rng.randint(1, 9), rng.randint(0, 9999), rng.randint(0, 9999), rng.randint(0, 9999))
                key = ('compose-four-groups',) + values
                if key not in used:
                    used.add(key)
                    break
            cho, oku, man, ones = values
            problem = {'type': 'compose-four-groups', 'cho': cho, 'oku': oku, 'man': man, 'ones': ones}
        problem['answer'] = independent_answer(problem)
        validate_problem(problem)
        problems.append(problem)
    rng.shuffle(problems)
    return problems


def place_label(place):
    return dict(PLACES)[place]


def problem_text(problem):
    if problem['type'] == 'place-digit':
        return f"{problem['number']:,} の {place_label(problem['place'])}の位の数字は □"
    return f"{problem['cho']}兆 {problem['oku']}億 {problem['man']}万 {problem['ones']} を数字で書くと □"


def answer_text(problem):
    answer = independent_answer(problem)
    return f'{answer:,}' if problem['type'] == 'compose-four-groups' else str(answer)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, height - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(width - 45, height - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, height - 78, 'なまえ：____________________________')
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275
            y = height - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.setFont(FONT, 9 if problem['type'] == 'place-digit' else 8.5)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 9)
                c.drawString(x + 24, y - 19, f'こたえ：{answer_text(problem)}')
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'
    out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for variant, seed in enumerate(SEEDS, 1):
        wid = f'e4-{SKILL}-{variant:02d}'
        if wid in existing:
            continue
        problems = generate(seed)
        content_hash = normalized_hash(problems)
        assert all(entry['content_hash'] != content_hash for entry in catalog)
        filename = f'{wid}.pdf'
        render_pdf(out / filename, TITLE, problems)
        catalog.append({
            'id': wid,
            'school_level': 'elementary',
            'grade': 4,
            'subject': '算数',
            'unit': UNIT_TITLE,
            'skill': SKILL,
            'problem_count': PROBLEM_COUNT,
            'seed': seed,
            'variant': variant,
            'title': f'{TITLE} {variant:02d}',
            'description': '億・兆を含む大きな整数について、位の数字と4桁ごとの数のまとまりから数字を構成する練習20問です。2ページ目は同じ配置に赤字で解答を加えています。',
            'url': f'materials/worksheets/elementary/grade-04/{filename}',
            'content_hash': content_hash,
            'difficulty': 'basic',
            'worksheet_series': 'focused',
            'worksheet_format': 'large-number-place-value',
            'answer_type': 'numeric',
        })
        existing.add(wid)
        published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 large-number place-value worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
