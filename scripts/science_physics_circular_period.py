"""Formal-course Physics checkpoint for circular-motion period.

The learner-visible convention is pi = 3.14 and the relation is
omega = 2*pi/T.  The fixed pi value is represented as an explicit sampled
input with a single allowed value so the existing reversible
`double-quotient` relation can be reused without a hidden constant.
"""

PHYSICS_CIRCULAR_PERIOD_PROBLEM_COUNT = 20

_PI_VALUES = [3.14]
_PERIODS = [0.5, 0.8, 1.0, 1.25, 1.57, 2.0, 2.5, 3.14, 4.0, 5.0, 6.28, 8.0]

PHYSICS_CIRCULAR_PERIOD_TOPICS = {
    "circular-period-angular-speed": {
        "title": "物理 等速円運動：周期と角速度",
        "unit": "様々な運動：円運動と単振動",
        "skill": "circular-period-angular-speed",
        "formula": "ω = 2π/T（π = 3.14）",
        "seeds": tuple(range(7471, 7481)),
        "spec": {
            "id": "physics-circular-period-angular-speed",
            "relation": "double-quotient",
            "result": "angular_speed",
            "inputs": ["pi", "period"],
            "variables": {
                "angular_speed": {"label": "角速度 ω", "unit": "rad/s"},
                "pi": {"label": "円周率 π（このプリントでは 3.14）", "unit": "", "values": _PI_VALUES},
                "period": {"label": "1回転の周期 T", "unit": "s", "values": _PERIODS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-angular-speed": {
                "solve_for": "angular_speed",
                "worksheet_mode": "calculation-basic",
                "description": "等速円運動で、円周率を π=3.14 として、周期 T から ω = 2π/T を使って角速度 ω を求めます。",
            },
            "reverse-period": {
                "solve_for": "period",
                "worksheet_mode": "calculation-reverse",
                "description": "等速円運動で、円周率を π=3.14 として、角速度 ω から ω = 2π/T を使って周期 T を逆算します。",
            },
        },
    },
}
