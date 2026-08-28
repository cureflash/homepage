import json, tempfile
from pathlib import Path
from scripts.publish_jh3_factorization_roots import SKILLS, SEEDS, gen, independent_answer, validate_problem


def test_generators_are_deterministic_and_independently_validated():
    for skill,(_,count,_) in SKILLS.items():
        hashes=[]
        for seed in SEEDS:
            a=gen(skill,seed); b=gen(skill,seed)
            assert a==b
            assert len(a)==count
            assert len({json.dumps(p,sort_keys=True) for p in a})==count
            for p in a:
                validate_problem(p)
                assert tuple(p['answer'])==tuple(independent_answer(p))
            hashes.append(json.dumps(a,sort_keys=True))
        assert len(set(hashes))==len(SEEDS)


def test_mixed_series_has_balanced_operation_families():
    ps=gen('expansion-factorization-mixed-100',SEEDS[0])
    counts={}
    for p in ps: counts[p['type']]=counts.get(p['type'],0)+1
    assert counts=={
        'expand-square':20,
        'expand-difference':20,
        'factor-sum-product':20,
        'factor-square':20,
        'factor-difference':20,
    }


def test_radical_simplification_is_fully_reduced():
    for seed in SEEDS:
        for p in gen('simplify-radical',seed):
            k,m=independent_answer(p)
            assert k>=2 and m>1 and k*k*m==p['n']
            d=2
            while d*d<=m:
                assert m%(d*d)!=0
                d+=1
