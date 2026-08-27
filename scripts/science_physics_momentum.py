"""Formal-course Physics topics for momentum and impulse.

These checkpoints stay in one-dimensional motion so every sign and answer is
mechanically unambiguous. The learner-visible positive direction is fixed in
each variable label. The formulas are the standard p = mv, J = FΔt, and
Δp = FΔt forms, reusing the shared reversible product relation.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics: momentum and impulse, including that momentum change equals impulse.
"""

PHYSICS_MOMENTUM_PROBLEM_COUNT = 20

_SIGNED_SPEEDS = [-12, -10, -8, -6, -5, -4, -3, 3, 4, 5, 6, 8, 10, 12]
_SIGNED_FORCES = [-40, -30, -24, -20, -16, -12, -10, -8, 8, 10, 12, 16, 20, 24, 30, 40]
_DURATIONS = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 1.25, 1.5, 2.0]

PHYSICS_MOMENTUM_TOPICS = {
    "momentum-one-dimensional": {
        "title": "物理 運動量",
        "unit": "様々な運動：運動量と力積",
        "skill": "momentum-one-dimensional",
        "formula": "p = mv（右向きを正、左向きを負）",
        "seeds": tuple(range(7351, 7361)),
        "spec": {
            "id": "physics-momentum-one-dimensional",
            "relation": "product",
            "result": "momentum",
            "inputs": ["mass", "velocity"],
            "variables": {
                "momentum": {"label": "運動量 p（右向きを正、左向きを負）", "unit": "kg·m/s"},
                "mass": {"label": "物体の質量 m", "unit": "kg", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]},
                "velocity": {"label": "速度 v（右向きを正、左向きを負）", "unit": "m/s", "values": _SIGNED_SPEEDS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-momentum": {"solve_for": "momentum", "worksheet_mode": "calculation-basic", "description": "右向きを正、左向きを負とする1次元運動で、p = mv から物体の運動量 p を求めます。"},
            "reverse-mass": {"solve_for": "mass", "worksheet_mode": "calculation-reverse", "description": "右向きを正、左向きを負とする1次元運動で、運動量 p と速度 v から p = mv を使って質量 m を逆算します。"},
            "reverse-velocity": {"solve_for": "velocity", "worksheet_mode": "calculation-reverse", "description": "右向きを正、左向きを負とする1次元運動で、運動量 p と質量 m から p = mv を使って速度 v を逆算します。"},
        },
    },
    "impulse-one-dimensional": {
        "title": "物理 力積",
        "unit": "様々な運動：運動量と力積",
        "skill": "impulse-one-dimensional",
        "formula": "J = FΔt（右向きを正、左向きを負）",
        "seeds": tuple(range(7361, 7371)),
        "spec": {
            "id": "physics-impulse-one-dimensional",
            "relation": "product",
            "result": "impulse",
            "inputs": ["force", "duration"],
            "variables": {
                "impulse": {"label": "力積 J（右向きを正、左向きを負）", "unit": "N·s"},
                "force": {"label": "一定の力 F（右向きを正、左向きを負）", "unit": "N", "values": _SIGNED_FORCES},
                "duration": {"label": "力がはたらく時間 Δt", "unit": "s", "values": _DURATIONS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-impulse": {"solve_for": "impulse", "worksheet_mode": "calculation-basic", "description": "右向きを正、左向きを負とし、一定の力が時間 Δt はたらくとき、J = FΔt から力積 J を求めます。"},
            "reverse-force": {"solve_for": "force", "worksheet_mode": "calculation-reverse", "description": "右向きを正、左向きを負とし、力積 J と作用時間 Δt から J = FΔt を使って一定の力 F を逆算します。"},
            "reverse-duration": {"solve_for": "duration", "worksheet_mode": "calculation-reverse", "description": "右向きを正、左向きを負とし、力積 J と一定の力 F から J = FΔt を使って作用時間 Δt を逆算します。"},
        },
    },
    "momentum-change-from-impulse": {
        "title": "物理 力積による運動量変化",
        "unit": "様々な運動：運動量と力積",
        "skill": "momentum-change-from-impulse",
        "formula": "Δp = FΔt（力積は運動量の変化に等しい）",
        "seeds": tuple(range(7371, 7381)),
        "spec": {
            "id": "physics-momentum-change-from-impulse",
            "relation": "product",
            "result": "momentum_change",
            "inputs": ["force", "duration"],
            "variables": {
                "momentum_change": {"label": "運動量の変化 Δp（右向きを正、左向きを負）", "unit": "kg·m/s"},
                "force": {"label": "一定の力 F（右向きを正、左向きを負）", "unit": "N", "values": _SIGNED_FORCES},
                "duration": {"label": "力がはたらく時間 Δt", "unit": "s", "values": _DURATIONS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-momentum-change": {"solve_for": "momentum_change", "worksheet_mode": "calculation-basic", "description": "力積は運動量の変化に等しいことを使い、一定の力 F が時間 Δt はたらくとき Δp = FΔt から運動量の変化 Δp を求めます。"},
            "reverse-force": {"solve_for": "force", "worksheet_mode": "calculation-reverse", "description": "力積は運動量の変化に等しいことを使い、運動量の変化 Δp と作用時間 Δt から Δp = FΔt で力 F を逆算します。"},
            "reverse-duration": {"solve_for": "duration", "worksheet_mode": "calculation-reverse", "description": "力積は運動量の変化に等しいことを使い、運動量の変化 Δp と一定の力 F から Δp = FΔt で作用時間 Δt を逆算します。"},
        },
    },
}
