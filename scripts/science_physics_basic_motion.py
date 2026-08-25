"""Structured Physics Basics motion topics for the shared worksheet factory.

This first high-school batch intentionally stays with one-dimensional, same-direction
motion and relations that the existing shared product/sum helper can independently
recompute.  It does not assign the formal course to a fixed high-school grade.
"""

PHYSICS_BASIC_MOTION_PROBLEM_COUNT = 20

PHYSICS_BASIC_MOTION_TOPICS = {
    "displacement-average-velocity": {
        "title": "物理基礎 変位と平均速度",
        "unit": "物体の運動とエネルギー：運動の表し方",
        "skill": "displacement-average-velocity",
        "formula": "Δx = v平均 × t",
        "seeds": tuple(range(6601, 6611)),
        "spec": {
            "id": "physics-basic-displacement-average-velocity",
            "relation": "product",
            "result": "dx",
            "inputs": ["vavg", "t"],
            "variables": {
                "dx": {"label": "変位 Δx", "unit": "m"},
                "vavg": {
                    "label": "平均速度",
                    "unit": "m/s",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20],
                },
                "t": {
                    "label": "時間 t",
                    "unit": "s",
                    "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40],
                },
            },
        },
        "modes": {
            "basic-displacement": {
                "solve_for": "dx",
                "worksheet_mode": "calculation-basic",
                "description": "同一直線上を同じ正方向に運動する場合について、変位 = 平均速度 × 時間を使う基本反復です。",
            },
            "reverse-average-velocity": {
                "solve_for": "vavg",
                "worksheet_mode": "calculation-reverse",
                "description": "同一直線上を同じ正方向に運動する場合について、変位と時間から平均速度を求める基本逆算です。",
            },
        },
    },
    "acceleration": {
        "title": "物理基礎 加速度と速度変化",
        "unit": "物体の運動とエネルギー：運動の表し方",
        "skill": "acceleration-velocity-change",
        "formula": "Δv = a × t",
        "seeds": tuple(range(6611, 6621)),
        "spec": {
            "id": "physics-basic-acceleration",
            "relation": "product",
            "result": "dv",
            "inputs": ["a", "t"],
            "variables": {
                "dv": {"label": "速度変化 Δv", "unit": "m/s"},
                "a": {
                    "label": "加速度 a",
                    "unit": "m/s²",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10],
                },
                "t": {
                    "label": "時間 t",
                    "unit": "s",
                    "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20],
                },
            },
        },
        "modes": {
            "basic-acceleration": {
                "solve_for": "a",
                "worksheet_mode": "calculation-basic",
                "description": "加速度 = 速度変化 ÷ 時間を使い、直線運動の加速度を求める基本反復です。",
            },
            "reverse-velocity-change": {
                "solve_for": "dv",
                "worksheet_mode": "calculation-reverse",
                "description": "一定の加速度と時間から、その間の速度変化 Δv を求める基本反復です。",
            },
        },
    },
    "velocity-change": {
        "title": "物理基礎 初速度と速度変化",
        "unit": "物体の運動とエネルギー：運動の表し方",
        "skill": "initial-final-velocity",
        "formula": "v = v0 + Δv",
        "seeds": tuple(range(6621, 6631)),
        "spec": {
            "id": "physics-basic-initial-final-velocity",
            "relation": "sum",
            "result": "v",
            "inputs": ["v0", "dv"],
            "variables": {
                "v": {"label": "終速度 v", "unit": "m/s"},
                "v0": {
                    "label": "初速度 v0",
                    "unit": "m/s",
                    "values": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20],
                },
                "dv": {
                    "label": "速度変化 Δv",
                    "unit": "m/s",
                    "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20],
                },
            },
        },
        "modes": {
            "basic-final-velocity": {
                "solve_for": "v",
                "worksheet_mode": "calculation-basic",
                "description": "同じ正方向に速度が増す直線運動について、終速度 = 初速度 + 速度変化を使う基本反復です。",
            },
            "reverse-initial-velocity": {
                "solve_for": "v0",
                "worksheet_mode": "calculation-reverse",
                "description": "終速度と速度変化から初速度を求める、直線運動の基本逆算です。",
            },
        },
    },
}
