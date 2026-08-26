"""Structured Physics Basics motion and force topics for the shared worksheet factory.

This high-school batch stays with basic one-dimensional relations that the
shared science formula helper can independently recompute. It does not assign
the formal course to a fixed high-school grade.
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
                "vavg": {"label": "平均速度", "unit": "m/s", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
                "t": {"label": "時間 t", "unit": "s", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40]},
            },
        },
        "modes": {
            "basic-displacement": {"solve_for": "dx", "worksheet_mode": "calculation-basic", "description": "同一直線上を同じ正方向に運動する場合について、変位 = 平均速度 × 時間を使う基本反復です。"},
            "reverse-average-velocity": {"solve_for": "vavg", "worksheet_mode": "calculation-reverse", "description": "同一直線上を同じ正方向に運動する場合について、変位と時間から平均速度を求める基本逆算です。"},
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
                "a": {"label": "加速度 a", "unit": "m/s²", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
                "t": {"label": "時間 t", "unit": "s", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
            },
        },
        "modes": {
            "basic-acceleration": {"solve_for": "a", "worksheet_mode": "calculation-basic", "description": "加速度 = 速度変化 ÷ 時間を使い、直線運動の加速度を求める基本反復です。"},
            "reverse-velocity-change": {"solve_for": "dv", "worksheet_mode": "calculation-reverse", "description": "一定の加速度と時間から、その間の速度変化 Δv を求める基本反復です。"},
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
                "v0": {"label": "初速度 v0", "unit": "m/s", "values": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
                "dv": {"label": "速度変化 Δv", "unit": "m/s", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
            },
        },
        "modes": {
            "basic-final-velocity": {"solve_for": "v", "worksheet_mode": "calculation-basic", "description": "同じ正方向に速度が増す直線運動について、終速度 = 初速度 + 速度変化を使う基本反復です。"},
            "reverse-initial-velocity": {"solve_for": "v0", "worksheet_mode": "calculation-reverse", "description": "終速度と速度変化から初速度を求める、直線運動の基本逆算です。"},
        },
    },
    "uniform-acceleration": {
        "title": "物理基礎 等加速度直線運動",
        "unit": "物体の運動とエネルギー：運動の表し方",
        "skill": "uniform-acceleration-velocity",
        "formula": "v = v0 + a × t",
        "seeds": tuple(range(6631, 6641)),
        "spec": {
            "id": "physics-basic-uniform-acceleration-velocity",
            "relation": "offset-product",
            "result": "v",
            "inputs": ["v0", "a", "t"],
            "variables": {
                "v": {"label": "終速度 v", "unit": "m/s"},
                "v0": {"label": "初速度 v0", "unit": "m/s", "values": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
                "a": {"label": "加速度 a", "unit": "m/s²", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]},
                "t": {"label": "時間 t", "unit": "s", "values": [1, 2, 3, 4, 5, 6, 8, 10]},
            },
        },
        "modes": {
            "basic-final-velocity": {"solve_for": "v", "worksheet_mode": "calculation-basic", "description": "一定加速度で同じ正方向に運動するとき、v = v0 + at から終速度を求める基本反復です。"},
            "reverse-acceleration": {"solve_for": "a", "worksheet_mode": "calculation-reverse", "description": "初速度・終速度・時間から、v = v0 + at を使って加速度を求める基本逆算です。"},
            "reverse-time": {"solve_for": "t", "worksheet_mode": "calculation-reverse", "description": "初速度・終速度・加速度から、v = v0 + at を使って時間を求める基本逆算です。"},
        },
    },
    "free-fall-velocity": {
        "title": "物理基礎 自由落下の速度",
        "unit": "物体の運動とエネルギー：様々な力とその働き",
        "skill": "free-fall-velocity",
        "formula": "v = g × t",
        "seeds": tuple(range(6641, 6651)),
        "spec": {
            "id": "physics-basic-free-fall-velocity",
            "relation": "product",
            "result": "v",
            "inputs": ["g", "t"],
            "variables": {
                "v": {"label": "落下速度 v", "unit": "m/s"},
                "g": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
                "t": {"label": "落下時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-fall-velocity": {"solve_for": "v", "worksheet_mode": "calculation-basic", "description": "初速度0の自由落下について、重力加速度を9.8 m/s²として v = gt から速度を求める基本反復です。"},
            "reverse-fall-time": {"solve_for": "t", "worksheet_mode": "calculation-reverse", "description": "初速度0の自由落下について、速度と重力加速度から落下時間を求める基本逆算です。"},
        },
    },
    "net-force-1d": {
        "title": "物理基礎 1次元の合力",
        "unit": "物体の運動とエネルギー：様々な力とその働き",
        "skill": "one-dimensional-net-force",
        "formula": "F合 = F右 - F左（右向きを正）",
        "seeds": tuple(range(6651, 6661)),
        "spec": {
            "id": "physics-basic-one-dimensional-net-force",
            "relation": "difference",
            "result": "fnet",
            "inputs": ["fright", "fleft"],
            "variables": {
                "fnet": {"label": "合力 F合（右向きを正）", "unit": "N"},
                "fright": {"label": "右向きの力 F右", "unit": "N", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30]},
                "fleft": {"label": "左向きの力 F左", "unit": "N", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20]},
            },
        },
        "modes": {
            "basic-net-force": {"solve_for": "fnet", "worksheet_mode": "calculation-basic", "description": "右向きを正と定め、一直線上で反対向きに働く2力から符号付き合力を求める基本反復です。合力0 Nが力のつり合いにつながることを確認できます。"},
            "reverse-right-force": {"solve_for": "fright", "worksheet_mode": "calculation-reverse", "description": "右向きを正とする符号付き合力と左向きの力から、右向きの力を求める基本逆算です。"},
            "reverse-left-force": {"solve_for": "fleft", "worksheet_mode": "calculation-reverse", "description": "右向きを正とする符号付き合力と右向きの力から、左向きの力を求める基本逆算です。"},
        },
    },
    "newton-second-law": {
        "title": "物理基礎 運動方程式",
        "unit": "物体の運動とエネルギー：様々な力とその働き",
        "skill": "newton-second-law",
        "formula": "F = m × a",
        "seeds": tuple(range(6661, 6671)),
        "spec": {
            "id": "physics-basic-newton-second-law",
            "relation": "product",
            "result": "force",
            "inputs": ["mass", "acceleration"],
            "variables": {
                "force": {"label": "合力 F", "unit": "N"},
                "mass": {"label": "質量 m", "unit": "kg", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
                "acceleration": {"label": "加速度 a", "unit": "m/s²", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
            },
        },
        "modes": {
            "basic-force": {"solve_for": "force", "worksheet_mode": "calculation-basic", "description": "直線運動で物体に働く合力について、F = ma から合力を求める基本反復です。"},
            "reverse-mass": {"solve_for": "mass", "worksheet_mode": "calculation-reverse", "description": "直線運動で合力と加速度から、F = ma を使って質量を求める基本逆算です。"},
            "reverse-acceleration": {"solve_for": "acceleration", "worksheet_mode": "calculation-reverse", "description": "直線運動で合力と質量から、F = ma を使って加速度を求める基本逆算です。"},
        },
    },
}
