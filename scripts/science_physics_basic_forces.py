"""Additional Physics Basics force topics for the shared worksheet factory.

These definitions stay inside the formal course 物理基礎 and use only formula
relations already independently validated by the shared science helper.
"""

PHYSICS_BASIC_FORCE_PROBLEM_COUNT = 20

PHYSICS_BASIC_FORCE_TOPICS = {
    "force-balance-opposed": {
        "title": "物理基礎 反対向き2力のつり合い",
        "unit": "物体の運動とエネルギー：様々な力とその働き",
        "skill": "opposed-force-balance",
        "formula": "F左 = F右 + 0（合力0 N）",
        "seeds": tuple(range(6671, 6681)),
        "spec": {
            "id": "physics-basic-opposed-force-balance",
            "relation": "sum",
            "result": "fleft",
            "inputs": ["fright", "fnetzero"],
            "variables": {
                "fleft": {"label": "左向きの力 F左（合力0 N）", "unit": "N"},
                "fright": {"label": "右向きの力 F右（合力0 N）", "unit": "N", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30, 40, 50]},
                "fnetzero": {"label": "合力", "unit": "N", "values": [0]},
            },
        },
        "modes": {
            "basic-left-force": {
                "solve_for": "fleft",
                "worksheet_mode": "calculation-basic",
                "description": "一直線上で右向きと左向きの2力だけが働き、合力が0 Nでつり合う場合に、右向きの力から左向きの力を求める基本反復です。",
            },
            "reverse-right-force": {
                "solve_for": "fright",
                "worksheet_mode": "calculation-reverse",
                "description": "一直線上で右向きと左向きの2力だけが働き、合力が0 Nでつり合う場合に、左向きの力から右向きの力を求める基本反復です。",
            },
        },
    },
    "kinetic-friction": {
        "title": "物理基礎 動摩擦力",
        "unit": "物体の運動とエネルギー：様々な力とその働き",
        "skill": "kinetic-friction",
        "formula": "F動 = μ' × N",
        "seeds": tuple(range(6681, 6691)),
        "spec": {
            "id": "physics-basic-kinetic-friction",
            "relation": "product",
            "result": "friction",
            "inputs": ["mu", "normal"],
            "variables": {
                "friction": {"label": "動摩擦力 F動", "unit": "N"},
                "mu": {"label": "動摩擦係数 μ'", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]},
                "normal": {"label": "垂直抗力 N", "unit": "N", "values": [4, 5, 8, 10, 12, 16, 20, 24, 25, 30, 40, 50, 60, 80, 100]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-friction": {
                "solve_for": "friction",
                "worksheet_mode": "calculation-basic",
                "description": "動いている物体について、与えられた動摩擦係数と垂直抗力から F動 = μ'N を使って動摩擦力を求める基本反復です。",
            },
            "reverse-coefficient": {
                "solve_for": "mu",
                "worksheet_mode": "calculation-reverse",
                "description": "動摩擦力と垂直抗力から、F動 = μ'N を使って動摩擦係数を求める基本逆算です。",
            },
            "reverse-normal-force": {
                "solve_for": "normal",
                "worksheet_mode": "calculation-reverse",
                "description": "動摩擦力と動摩擦係数から、F動 = μ'N を使って垂直抗力を求める基本逆算です。",
            },
        },
    },
}
