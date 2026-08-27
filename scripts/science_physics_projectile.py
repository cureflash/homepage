"""Formal-course Physics topics for plane motion and projectile motion.

The module covers basic horizontal projection and machine-verifiable oblique
projection checkpoints. Air resistance is explicitly excluded. For oblique
projection the vertical sign convention is upward-positive and the vertical
acceleration is fixed at -9.8 m/s² where signed acceleration is used.
Trigonometric ratios are supplied as learner-visible known values so answers
can be recomputed only from values shown on the worksheet.

Curriculum basis: MEXT High School Course of Study Commentary, Science / Math,
Physics (1) Various motions: horizontal and oblique projectile motion is
understood by decomposing motion into horizontal and vertical components.
"""

PHYSICS_PROJECTILE_PROBLEM_COUNT = 20

PHYSICS_PROJECTILE_TOPICS = {
    "horizontal-projectile-horizontal-motion": {
        "title": "物理 水平投射 水平方向の運動",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "horizontal-projectile-horizontal-motion",
        "formula": "x = vₓt（空気抵抗を無視）",
        "seeds": tuple(range(7101, 7111)),
        "spec": {
            "id": "physics-horizontal-projectile-horizontal-motion",
            "relation": "product",
            "result": "horizontal_displacement",
            "inputs": ["horizontal_velocity", "time"],
            "variables": {
                "horizontal_displacement": {"label": "水平投射（空気抵抗なし）の水平方向の移動距離 x", "unit": "m"},
                "horizontal_velocity": {"label": "水平方向の速度 vₓ", "unit": "m/s", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30]},
                "time": {"label": "投射後の時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-horizontal-displacement": {"solve_for": "horizontal_displacement", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した水平投射を水平方向と鉛直方向に分解し、水平方向では等速運動 x = vₓt として移動距離を求めます。"},
            "reverse-horizontal-velocity": {"solve_for": "horizontal_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した水平投射の水平方向について、移動距離と時間から一定の水平速度 vₓ を逆算します。"},
            "reverse-time": {"solve_for": "time", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した水平投射の水平方向について、移動距離と一定の水平速度から投射後の時間を逆算します。"},
        },
    },
    "horizontal-projectile-vertical-displacement": {
        "title": "物理 水平投射 鉛直方向の落下距離",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "horizontal-projectile-vertical-displacement",
        "formula": "y = 1/2 gt²（下向きの距離、空気抵抗を無視）",
        "seeds": tuple(range(7111, 7126)),
        "spec": {
            "id": "physics-horizontal-projectile-vertical-displacement",
            "relation": "half-product-last-square",
            "result": "vertical_drop",
            "inputs": ["gravity", "time"],
            "variables": {
                "vertical_drop": {"label": "水平投射（空気抵抗なし）で投射点から下向きに落下した距離 y", "unit": "m"},
                "gravity": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
                "time": {"label": "投射後の時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-drop": {"solve_for": "vertical_drop", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した水平投射を成分分解し、鉛直方向は初速度0の落下運動として y = 1/2 gt² から下向きの落下距離を求めます。重力加速度は9.8 m/s²です。"},
            "reverse-time": {"solve_for": "time", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した水平投射の鉛直成分について、下向きの落下距離から y = 1/2 gt² を使って投射後の時間を逆算します。重力加速度は9.8 m/s²です。"},
        },
    },
    "horizontal-projectile-vertical-velocity": {
        "title": "物理 水平投射 鉛直方向の速度",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "horizontal-projectile-vertical-velocity",
        "formula": "vᵧ = gt（下向きの速さ、空気抵抗を無視）",
        "seeds": tuple(range(7126, 7141)),
        "spec": {
            "id": "physics-horizontal-projectile-vertical-velocity",
            "relation": "product",
            "result": "vertical_velocity",
            "inputs": ["gravity", "time"],
            "variables": {
                "vertical_velocity": {"label": "水平投射（空気抵抗なし）の下向き鉛直速度の大きさ vᵧ", "unit": "m/s"},
                "gravity": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
                "time": {"label": "投射後の時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-velocity": {"solve_for": "vertical_velocity", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した水平投射を成分分解し、鉛直方向は初速度0の等加速度運動として vᵧ = gt から下向きの速度の大きさを求めます。重力加速度は9.8 m/s²です。"},
            "reverse-time": {"solve_for": "time", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した水平投射の鉛直成分について、下向きの速度の大きさから vᵧ = gt を使って投射後の時間を逆算します。重力加速度は9.8 m/s²です。"},
        },
    },
    "oblique-projectile-initial-horizontal-component": {
        "title": "物理 斜方投射 初速度の水平成分",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-initial-horizontal-component",
        "formula": "v₀ₓ = v₀ cosθ（空気抵抗を無視、三角比は問題に表示）",
        "seeds": tuple(range(7141, 7151)),
        "spec": {
            "id": "physics-oblique-projectile-initial-horizontal-component",
            "relation": "product",
            "result": "initial_horizontal_velocity",
            "inputs": ["initial_speed", "cos_theta"],
            "variables": {
                "initial_horizontal_velocity": {"label": "斜方投射（空気抵抗なし）の初速度の水平成分 v₀ₓ", "unit": "m/s"},
                "initial_speed": {"label": "斜方投射の初速度の大きさ v₀", "unit": "m/s", "values": [10, 12, 14, 16, 18, 20, 24, 30, 36, 40]},
                "cos_theta": {"label": "投射角 θ の cosθ（30°・45°・60°相当の値を問題に表示）", "values": [0.5, 0.7071067811865476, 0.8660254037844386]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-horizontal-component": {"solve_for": "initial_horizontal_velocity", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した斜方投射を水平・鉛直成分に分解し、問題に示された cosθ を使って v₀ₓ = v₀ cosθ から初速度の水平成分を求めます。"},
            "reverse-initial-speed": {"solve_for": "initial_speed", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射について、初速度の水平成分と問題に示された cosθ から初速度の大きさ v₀ を逆算します。"},
            "reverse-cos-theta": {"solve_for": "cos_theta", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射について、初速度の大きさと水平成分から cosθ を逆算します。30°・45°・60°相当の三角比を扱います。"},
        },
    },
    "oblique-projectile-initial-vertical-component": {
        "title": "物理 斜方投射 初速度の鉛直成分",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-initial-vertical-component",
        "formula": "v₀ᵧ = v₀ sinθ（空気抵抗を無視、三角比は問題に表示）",
        "seeds": tuple(range(7151, 7161)),
        "spec": {
            "id": "physics-oblique-projectile-initial-vertical-component",
            "relation": "product",
            "result": "initial_vertical_velocity",
            "inputs": ["initial_speed", "sin_theta"],
            "variables": {
                "initial_vertical_velocity": {"label": "斜方投射（空気抵抗なし）の初速度の上向き鉛直成分 v₀ᵧ", "unit": "m/s"},
                "initial_speed": {"label": "斜方投射の初速度の大きさ v₀", "unit": "m/s", "values": [10, 12, 14, 16, 18, 20, 24, 30, 36, 40]},
                "sin_theta": {"label": "投射角 θ の sinθ（30°・45°・60°相当の値を問題に表示）", "values": [0.5, 0.7071067811865476, 0.8660254037844386]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-component": {"solve_for": "initial_vertical_velocity", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した斜方投射を水平・鉛直成分に分解し、問題に示された sinθ を使って v₀ᵧ = v₀ sinθ から初速度の上向き鉛直成分を求めます。"},
            "reverse-initial-speed": {"solve_for": "initial_speed", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射について、初速度の鉛直成分と問題に示された sinθ から初速度の大きさ v₀ を逆算します。"},
            "reverse-sin-theta": {"solve_for": "sin_theta", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射について、初速度の大きさと上向き鉛直成分から sinθ を逆算します。30°・45°・60°相当の三角比を扱います。"},
        },
    },
    "oblique-projectile-vertical-velocity": {
        "title": "物理 斜方投射 鉛直速度",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-vertical-velocity",
        "formula": "vᵧ = v₀ᵧ - gt（上向きを正、空気抵抗を無視）",
        "seeds": tuple(range(7161, 7171)),
        "spec": {
            "id": "physics-oblique-projectile-vertical-velocity",
            "relation": "offset-product",
            "result": "vertical_velocity",
            "inputs": ["initial_vertical_velocity", "vertical_acceleration", "time"],
            "variables": {
                "vertical_velocity": {"label": "斜方投射（空気抵抗なし）の鉛直速度 vᵧ（上向きを正）", "unit": "m/s"},
                "initial_vertical_velocity": {"label": "初速度の上向き鉛直成分 v₀ᵧ", "unit": "m/s", "values": [9.8, 14.7, 19.6, 24.5, 29.4, 34.3, 39.2]},
                "vertical_acceleration": {"label": "鉛直加速度 aᵧ（上向きを正）", "unit": "m/s²", "values": [-9.8]},
                "time": {"label": "投射後の時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-velocity": {"solve_for": "vertical_velocity", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した斜方投射で上向きを正とし、鉛直加速度 aᵧ = -9.8 m/s² として vᵧ = v₀ᵧ + aᵧt から鉛直速度を求めます。"},
            "reverse-initial-vertical-velocity": {"solve_for": "initial_vertical_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射で上向きを正とし、時刻 t の鉛直速度から初速度の鉛直成分 v₀ᵧ を逆算します。鉛直加速度は -9.8 m/s² です。"},
            "reverse-time": {"solve_for": "time", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射で上向きを正とし、初速度の鉛直成分と時刻 t の鉛直速度から経過時間を逆算します。鉛直加速度は -9.8 m/s² です。"},
        },
    },
    "oblique-projectile-vertical-displacement": {
        "title": "物理 斜方投射 鉛直変位",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-vertical-displacement",
        "formula": "y = v₀ᵧt + 1/2 aᵧt²（上向きを正、空気抵抗を無視）",
        "seeds": tuple(range(7171, 7186)),
        "spec": {
            "id": "physics-oblique-projectile-vertical-displacement",
            "relation": "linear-plus-half-quadratic",
            "result": "vertical_displacement",
            "inputs": ["initial_vertical_velocity", "vertical_acceleration", "time"],
            "variables": {
                "vertical_displacement": {"label": "斜方投射（空気抵抗なし）の投射点からの鉛直変位 y（上向きを正）", "unit": "m"},
                "initial_vertical_velocity": {"label": "初速度の上向き鉛直成分 v₀ᵧ", "unit": "m/s", "values": [19.6, 24.5, 29.4, 34.3, 39.2]},
                "vertical_acceleration": {"label": "鉛直加速度 aᵧ（上向きを正）", "unit": "m/s²", "values": [-9.8]},
                "time": {"label": "投射後の時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-displacement": {"solve_for": "vertical_displacement", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した斜方投射で上向きを正とし、y = v₀ᵧt + 1/2 aᵧt²、aᵧ = -9.8 m/s² から投射点に対する鉛直変位を求めます。"},
            "reverse-initial-vertical-velocity": {"solve_for": "initial_vertical_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射で上向きを正とし、鉛直変位と経過時間から y = v₀ᵧt + 1/2 aᵧt² を使って初速度の鉛直成分を逆算します。aᵧ = -9.8 m/s² です。"},
        },
    },
    "oblique-projectile-time-to-highest-point": {
        "title": "物理 斜方投射 最高点到達時間",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-time-to-highest-point",
        "formula": "v₀ᵧ = gt最高点（最高点で vᵧ = 0、空気抵抗を無視）",
        "seeds": tuple(range(7186, 7201)),
        "spec": {
            "id": "physics-oblique-projectile-time-to-highest-point",
            "relation": "product",
            "result": "initial_vertical_velocity",
            "inputs": ["gravity", "time_to_highest_point"],
            "variables": {
                "initial_vertical_velocity": {"label": "斜方投射（空気抵抗なし）の初速度の上向き鉛直成分 v₀ᵧ", "unit": "m/s"},
                "gravity": {"label": "重力加速度の大きさ g", "unit": "m/s²", "values": [9.8]},
                "time_to_highest_point": {"label": "投射から最高点に達するまでの時間 t", "unit": "s", "values": [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-time-to-highest-point": {"solve_for": "time_to_highest_point", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した斜方投射で、最高点では鉛直速度が0になることから v₀ᵧ = gt を使い、最高点に達するまでの時間を求めます。g = 9.8 m/s² です。"},
            "reverse-initial-vertical-velocity": {"solve_for": "initial_vertical_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射で、最高点に達するまでの時間から v₀ᵧ = gt を使って初速度の鉛直成分を逆算します。g = 9.8 m/s² です。"},
        },
    },
}
