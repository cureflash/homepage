"""Formal-course Physics topics for uniform circular motion.

All checkpoints use scalar magnitudes with learner-visible definitions. The
centripetal acceleration and force are explicitly the inward radial magnitudes,
so no hidden sign convention is required. Existing reversible `product`
relations are reused throughout.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics: uniform circular-motion speed, period, angular velocity, centripetal
acceleration, centripetal force, with centrifugal force also mentioned.
"""

PHYSICS_CIRCULAR_MOTION_PROBLEM_COUNT = 20

_RADII = [0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0]
_ANGULAR_SPEEDS = [0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0]
_TIMES = [0.5, 0.8, 1.0, 1.25, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0]
_LINEAR_SPEEDS = [0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0]
_MASSES = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0]
_ACCELERATIONS = [0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0, 12.0]

PHYSICS_CIRCULAR_MOTION_TOPICS = {
    "circular-linear-speed-angular-speed-radius": {
        "title": "物理 等速円運動：速さ・半径・角速度",
        "unit": "様々な運動：円運動と単振動",
        "skill": "circular-linear-speed-angular-speed-radius",
        "formula": "v = rω",
        "seeds": tuple(range(7431, 7441)),
        "spec": {
            "id": "physics-circular-linear-speed-angular-speed-radius",
            "relation": "product",
            "result": "linear_speed",
            "inputs": ["radius", "angular_speed"],
            "variables": {
                "linear_speed": {"label": "等速円運動の速さ v", "unit": "m/s"},
                "radius": {"label": "円運動の半径 r", "unit": "m", "values": _RADII},
                "angular_speed": {"label": "角速度 ω", "unit": "rad/s", "values": _ANGULAR_SPEEDS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-speed": {"solve_for": "linear_speed", "worksheet_mode": "calculation-basic", "description": "等速円運動で、半径 r と角速度 ω から v = rω を使って速さ v を求めます。"},
            "reverse-radius": {"solve_for": "radius", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、速さ v と角速度 ω から v = rω を使って半径 r を逆算します。"},
            "reverse-angular-speed": {"solve_for": "angular_speed", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、速さ v と半径 r から v = rω を使って角速度 ω を逆算します。"},
        },
    },
    "circular-angular-displacement": {
        "title": "物理 等速円運動：角変位・角速度・時間",
        "unit": "様々な運動：円運動と単振動",
        "skill": "circular-angular-displacement",
        "formula": "θ = ωt",
        "seeds": tuple(range(7441, 7451)),
        "spec": {
            "id": "physics-circular-angular-displacement",
            "relation": "product",
            "result": "angular_displacement",
            "inputs": ["angular_speed", "time"],
            "variables": {
                "angular_displacement": {"label": "回転した角度 θ", "unit": "rad"},
                "angular_speed": {"label": "一定の角速度 ω", "unit": "rad/s", "values": _ANGULAR_SPEEDS},
                "time": {"label": "回転した時間 t", "unit": "s", "values": _TIMES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-angle": {"solve_for": "angular_displacement", "worksheet_mode": "calculation-basic", "description": "等速円運動で、一定の角速度 ω と時間 t から θ = ωt を使って回転した角度 θ を求めます。"},
            "reverse-angular-speed": {"solve_for": "angular_speed", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、回転した角度 θ と時間 t から θ = ωt を使って角速度 ω を逆算します。"},
            "reverse-time": {"solve_for": "time", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、回転した角度 θ と角速度 ω から θ = ωt を使って時間 t を逆算します。"},
        },
    },
    "circular-centripetal-acceleration": {
        "title": "物理 等速円運動：向心加速度",
        "unit": "様々な運動：円運動と単振動",
        "skill": "circular-centripetal-acceleration",
        "formula": "a = vω（向心加速度の大きさ）",
        "seeds": tuple(range(7451, 7461)),
        "spec": {
            "id": "physics-circular-centripetal-acceleration",
            "relation": "product",
            "result": "centripetal_acceleration",
            "inputs": ["linear_speed", "angular_speed"],
            "variables": {
                "centripetal_acceleration": {"label": "中心向きの加速度の大きさ a", "unit": "m/s²"},
                "linear_speed": {"label": "等速円運動の速さ v", "unit": "m/s", "values": _LINEAR_SPEEDS},
                "angular_speed": {"label": "角速度 ω", "unit": "rad/s", "values": _ANGULAR_SPEEDS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-acceleration": {"solve_for": "centripetal_acceleration", "worksheet_mode": "calculation-basic", "description": "等速円運動で、向心加速度が中心向きであることを確認し、その大きさを a = vω から求めます。"},
            "reverse-speed": {"solve_for": "linear_speed", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、中心向きの加速度の大きさ a と角速度 ω から a = vω を使って速さ v を逆算します。"},
            "reverse-angular-speed": {"solve_for": "angular_speed", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、中心向きの加速度の大きさ a と速さ v から a = vω を使って角速度 ω を逆算します。"},
        },
    },
    "circular-centripetal-force": {
        "title": "物理 等速円運動：向心力",
        "unit": "様々な運動：円運動と単振動",
        "skill": "circular-centripetal-force",
        "formula": "F = ma（向心力の大きさ）",
        "seeds": tuple(range(7461, 7471)),
        "spec": {
            "id": "physics-circular-centripetal-force",
            "relation": "product",
            "result": "centripetal_force",
            "inputs": ["mass", "centripetal_acceleration"],
            "variables": {
                "centripetal_force": {"label": "中心向きの合力（向心力）の大きさ F", "unit": "N"},
                "mass": {"label": "物体の質量 m", "unit": "kg", "values": _MASSES},
                "centripetal_acceleration": {"label": "中心向きの加速度の大きさ a", "unit": "m/s²", "values": _ACCELERATIONS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-force": {"solve_for": "centripetal_force", "worksheet_mode": "calculation-basic", "description": "等速円運動で、中心向きの合力である向心力の大きさ F を F = ma から求めます。"},
            "reverse-mass": {"solve_for": "mass", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、向心力の大きさ F と向心加速度の大きさ a から F = ma を使って質量 m を逆算します。"},
            "reverse-acceleration": {"solve_for": "centripetal_acceleration", "worksheet_mode": "calculation-reverse", "description": "等速円運動で、向心力の大きさ F と質量 m から F = ma を使って向心加速度の大きさ a を逆算します。"},
        },
    },
}
