"""Structured science topic definitions for the shared worksheet factory.

Keep this module content-only: generation, validation, PDF rendering, and catalog
publication remain in the shared worksheet infrastructure.
"""

JH1_PHYSICS_FORMULA_TOPICS = {
    "spring-extension": {
        "title": "中1理科 ばねの伸びと力",
        "unit": "力の働き",
        "skill": "spring-extension-force",
        "formula": "x = F × k",
        "spec": {
            "id": "jh1-physics-spring-extension",
            "relation": "product",
            "result": "x",
            "inputs": ["F", "k"],
            "variables": {
                "x": {"label": "x", "unit": "cm"},
                "F": {
                    "label": "F",
                    "unit": "N",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
                },
                "k": {
                    "label": "k",
                    "unit": "cm/N",
                    "values": [1, 2, 3, 4, 5],
                },
            },
        },
        "modes": {
            "basic": {
                "solve_for": "x",
                "worksheet_mode": "calculation-basic",
                "description": "x = F × k を使い、力と1 Nあたりのばねの伸びから伸びを求める基礎反復です。",
            },
            "reverse": {
                "solve_for": "F",
                "worksheet_mode": "calculation-reverse",
                "description": "x = F × k を使い、ばねの伸びと1 Nあたりの伸びから力を逆算する基礎反復です。",
            },
        },
    },
    "mass-newton": {
        "title": "中1理科 質量と重力の大きさ",
        "unit": "力の働き",
        "skill": "mass-newton-basic",
        "formula": "m = F × 100",
        "spec": {
            "id": "jh1-physics-mass-newton",
            "relation": "product",
            "result": "m",
            "inputs": ["F", "c"],
            "variables": {
                "m": {"label": "m", "unit": "g"},
                "F": {
                    "label": "F",
                    "unit": "N",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
                },
                "c": {"label": "c", "unit": "g/N", "values": [100]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "m",
                "worksheet_mode": "calculation-basic",
                "description": "中学理科の近似 100 g ≒ 1 N を使い、重力の大きさから質量を求める基礎反復です。",
            },
            "reverse": {
                "solve_for": "F",
                "worksheet_mode": "calculation-reverse",
                "description": "中学理科の近似 100 g ≒ 1 N を使い、質量から重力の大きさを求める基礎反復です。",
            },
        },
    },
}


JH1_PHYSICS_SEEDS = (6101, 6102, 6103)
JH1_PHYSICS_PROBLEM_COUNT = 20
