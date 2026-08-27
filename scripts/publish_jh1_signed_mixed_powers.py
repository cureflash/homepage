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

SEEDS = (11404, 11505, 11606)
PROBLEM_COUNT = 20
SKILLS = {
    'signed-mixed-four-operations': ('正負の数の四則混合', 'mixed'),
    'signed-parentheses-powers': ('かっこ・累乗を含む計算', 'powers'),
}


def independent_answer(problem):
    t = problem['type']
    if t == 'mixed-a':
        assert problem['d'] != 0 and problem['c'] % problem['d'] == 0
        return problem['a'] + problem['b'] * (problem['c'] // problem['d']) - problem['e']
    if t == 'mixed-b':
        assert problem['b'] != 0 and problem['a'] % problem['b'] == 0
        return problem['a'] // problem['b'] - problem['c'] * problem['d'] + problem['e']
    if t == 'paren-square':
        return (problem['a'] + problem['b']) ** 2 - problem['c']
    if t == 'square-paren':
        return problem['a'] ** 2 - (problem['b'] - problem['c'])
    if t == 'paren-cube':
        return (problem['a'] - problem['b']) ** 3 + problem['c']
    if t == 'signed-square-mul':
        return problem['a'] * (problem['b'] ** 2) + problem['c']
    raise ValueError(t)


def validate_problem(problem):
    assert problem['type'] in {'mixed-a','mixed-b','paren-square','square-paren','paren-cube','signed-square-mul'}
    assert independent_answer(problem) == problem['answer']
    assert -1500 <= problem['answer'] <= 1500


def _nonzero(rng, lo=-12, hi=12):
    while True:
        n = rng.randint(lo, hi)
        if n != 0:
            return n


def generate(skill, seed):
    assert skill in SKILLS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        if SKILLS[skill][1] == 'mixed':
            if len(problems) % 2 == 0:
                d = _nonzero(rng, -9, 9)
                q = _nonzero(rng, -9, 9)
                p = {'type':'mixed-a','a':rng.randint(-20,20),'b':_nonzero(rng,-9,9),'c':d*q,'d':d,'e':rng.randint(-20,20)}
            else:
                b = _nonzero(rng, -9, 9)
                q = _nonzero(rng, -9, 9)
                p = {'type':'mixed-b','a':b*q,'b':b,'c':_nonzero(rng,-9,9),'d':_nonzero(rng,-9,9),'e':rng.randint(-20,20)}
        else:
            pattern = ('paren-square','square-paren','paren-cube','signed-square-mul')[len(problems) % 4]
            if pattern == 'paren-square':
                p = {'type':pattern,'a':rng.randint(-9,9),'b':rng.randint(-9,9),'c':rng.randint(-20,20)}
            elif pattern == 'square-paren':
                p = {'type':pattern,'a':rng.randint(-12,12),'b':rng.randint(-20,20),'c':rng.randint(-20,20)}
            elif pattern == 'paren-cube':
                p = {'type':pattern,'a':rng.randint(-5,5),'b':rng.randint(-5,5),'c':rng.randint(-20,20)}
            else:
                p = {'type':pattern,'a':_nonzero(rng,-8,8),'b':rng.randint(-8,8),'c':rng.randint(-20,20)}
        key = tuple((k, p[k]) for k in sorted(p))
        if key in seen:
            continue
        p['answer'] = independent_answer(p)
        if not -1500 <= p['answer'] <= 1500:
            continue
        validate_problem(p)
        seen.add(key)
        problems.append(p)
    return problems


def fmt(n):
    return f'({n})' if n < 0 else str(n)


def problem_text(p):
    t = p['type']
    if t == 'mixed-a':
        return f"{fmt(p['a'])} + {fmt(p['b'])} × {fmt(p['c'])} ÷ {fmt(p['d'])} − {fmt(p['e'])} = □"
    if t == 'mixed-b':
        return f"{fmt(p['a'])} ÷ {fmt(p['b'])} − {fmt(p['c'])} × {fmt(p['d'])} + {fmt(p['e'])} = □"
    if t == 'paren-square':
        return f"（{fmt(p['a'])} + {fmt(p['b'])}）² − {fmt(p['c'])} = □"
    if t == 'square-paren':
        return f"{fmt(p['a'])}² −（{fmt(p['b'])} − {fmt(p['c'])}）= □"
    if t == 'paren-cube':
        return f"（{fmt(p['a'])} − {fmt(p['b'])}）³ + {fmt(p['c'])} = □"
    if t == 'signed-square-mul':
        return f"{fmt(p['a'])} × {fmt(p['b'])}² + {fmt(p['c'])} = □"
    raise ValueError(t)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black); c.setFont(FONT, 18); c.drawString(45, h-55, title)
        c.setFont(FONT, 10); c.drawRightString(w-45, h-52, '解答' if answer_mode else '問題')
        c.drawString(45, h-78, '名前：____________________________')
        c.setFont(FONT, 10)
        for index, problem in enumerate(problems):
            x = 40 + (index // 10) * 280; y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black); c.drawString(x, y, str(index + 1)); c.drawString(x+22, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red); c.drawString(x+22, y-19, f"答え：{independent_answer(problem)}")
        if not answer_mode: c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root); catalog_path = root/'worksheets'/'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root/'materials'/'worksheets'/'junior-high'/'grade-01'; out.mkdir(parents=True, exist_ok=True)
    existing = {e['id'] for e in catalog}; published = 0
    for skill, (title, _) in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'jh1-{skill}-{variant:02d}'
            if wid in existing: continue
            problems = generate(skill, seed); content_hash = normalized_hash(problems)
            assert all(e['content_hash'] != content_hash for e in catalog)
            filename = f'{wid}.pdf'; render_pdf(out/filename, title, problems)
            catalog.append({'id':wid,'school_level':'junior-high','grade':1,'subject':'数学','unit':'正の数・負の数','skill':skill,'problem_count':PROBLEM_COUNT,'seed':seed,'variant':variant,'title':f'{title} {variant:02d}','description':f'中学1年の「{title}」を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-01/{filename}','content_hash':content_hash,'difficulty':'basic','worksheet_series':'focused','worksheet_format':'expression-horizontal','answer_type':'numeric'})
            existing.add(wid); published += 1
    validate_catalog(catalog, root); catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(f'published {published} junior-high grade-1 mixed/power worksheets')

if __name__ == '__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
