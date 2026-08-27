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

SEEDS = (11707, 11808, 11909)
PROBLEM_COUNT = 20
SKILLS = {
    'prime-identification': ('素数判定の基礎', 'prime-check'),
    'prime-factorization': ('素因数分解', 'factorization'),
}


def is_prime(n):
    if n < 2:
        return False
    d = 2
    while d * d <= n:
        if n % d == 0:
            return False
        d += 1
    return True


def factorize(n):
    assert n >= 2
    factors = []
    d = 2
    while d * d <= n:
        while n % d == 0:
            factors.append(d)
            n //= d
        d += 1
    if n > 1:
        factors.append(n)
    return factors


def factor_text(factors):
    counts = []
    for p in factors:
        if counts and counts[-1][0] == p:
            counts[-1] = (p, counts[-1][1] + 1)
        else:
            counts.append((p, 1))
    parts = []
    supers = {2:'²',3:'³',4:'⁴',5:'⁵',6:'⁶',7:'⁷',8:'⁸'}
    for p, count in counts:
        parts.append(str(p) if count == 1 else f"{p}{supers.get(count, '^'+str(count))}")
    return ' × '.join(parts)


def independent_answer(problem):
    if problem['type'] == 'prime-check':
        return '素数' if is_prime(problem['number']) else '素数ではない'
    if problem['type'] == 'factorization':
        return factor_text(factorize(problem['number']))
    raise ValueError(problem['type'])


def validate_problem(problem):
    assert problem['type'] in {'prime-check','factorization'}
    assert isinstance(problem['number'], int)
    if problem['type'] == 'prime-check':
        assert 2 <= problem['number'] <= 100
    else:
        assert 12 <= problem['number'] <= 300
        assert not is_prime(problem['number'])
    assert independent_answer(problem) == problem['answer']


def generate(skill, seed):
    assert skill in SKILLS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1013)
    problems, seen = [], set()
    kind = SKILLS[skill][1]
    if kind == 'prime-check':
        primes = [n for n in range(2, 101) if is_prime(n)]
        composites = [n for n in range(4, 101) if not is_prime(n)]
        targets = ['prime'] * 10 + ['composite'] * 10
        rng.shuffle(targets)
        for target in targets:
            pool = primes if target == 'prime' else composites
            while True:
                n = rng.choice(pool)
                if n not in seen:
                    seen.add(n)
                    break
            p = {'type':'prime-check','number':n}
            p['answer'] = independent_answer(p); validate_problem(p); problems.append(p)
    else:
        while len(problems) < PROBLEM_COUNT:
            n = rng.randint(12, 300)
            if n in seen or is_prime(n):
                continue
            seen.add(n)
            p = {'type':'factorization','number':n}
            p['answer'] = independent_answer(p); validate_problem(p); problems.append(p)
    return problems


def problem_text(problem):
    if problem['type'] == 'prime-check':
        return f"{problem['number']} は素数ですか。 □"
    return f"{problem['number']} を素因数分解すると □"


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black); c.setFont(FONT, 18); c.drawString(45, h-55, title)
        c.setFont(FONT, 10); c.drawRightString(w-45, h-52, '解答' if answer_mode else '問題')
        c.drawString(45, h-78, '名前：____________________________')
        c.setFont(FONT, 11)
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275; y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black); c.drawString(x, y, str(index + 1)); c.drawString(x+24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red); c.drawString(x+24, y-20, f"答え：{independent_answer(problem)}")
        if not answer_mode: c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root); catalog_path = root/'worksheets'/'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root/'materials'/'worksheets'/'junior-high'/'grade-01'; out.mkdir(parents=True, exist_ok=True)
    existing = {e['id'] for e in catalog}; published = 0
    for skill, (title, _) in SKILLS.items():
        answer_type = 'accepted-set'
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'jh1-{skill}-{variant:02d}'
            if wid in existing: continue
            problems = generate(skill, seed); content_hash = normalized_hash(problems)
            assert all(e['content_hash'] != content_hash for e in catalog)
            filename = f'{wid}.pdf'; render_pdf(out/filename, title, problems)
            catalog.append({'id':wid,'school_level':'junior-high','grade':1,'subject':'数学','unit':'正の数・負の数','skill':skill,'problem_count':PROBLEM_COUNT,'seed':seed,'variant':variant,'title':f'{title} {variant:02d}','description':f'中学1年の「{title}」を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-01/{filename}','content_hash':content_hash,'difficulty':'basic','worksheet_series':'focused','worksheet_format':'prime-drill','answer_type':answer_type})
            existing.add(wid); published += 1
    validate_catalog(catalog, root); catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(f'published {published} junior-high grade-1 prime worksheets')

if __name__ == '__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
