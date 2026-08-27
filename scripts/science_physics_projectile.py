"""Formal-course Physics topics for plane motion and projectile motion.

These first formal-Physics worksheets isolate the horizontal and vertical
components of a horizontal launch.  Air resistance is explicitly excluded and
g = 9.8 m/s² is used for the vertical component.  The formulas intentionally
reuse existing shared relations so the batch does not widen the shared solver.

Curriculum basis: MEXT High School Course of Study Commentary, Science / Math,
Physics (1) Various motions, projectile motion: horizontal and oblique
projectiles are analyzed by decomposing motion into horizontal and vertical
components.
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
                "horizontal_displacement": {
                    "label": "水平投射（空気抵抗なし）の水平方向の移動距離 x",
                    "unit": "m",
                },
                "horizontal_velocity": {
                    "label": "水平方向の速度 vₓ",
                    "unit": "m/s",
                    "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30],
                },
                "time": {
                    "label": "投射後の時間 t",
                    "unit": "s",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-horizontal-displacement": {
                "solve_for": "horizontal_displacement",
                "worksheet_mode": "calculation-basic",
                "description": "空気抵抗を無視した水平投射を水平方向と鉛直方向に分解し、水平方向では等速運動 x = vₓt として移動距離を求めます。",
            },
            "reverse-horizontal-velocity": {
                "solve_for": "horizontal_velocity",
                "worksheet_mode": "calculation-reverse",
                "description": "空気抵抗を無視した水平投射の水平方向について、移動距離と時間から一定の水平速度 vₓ を逆算します。",
            },
            "reverse-time": {
                "solve_for": "time",
                "worksheet_mode": "calculation-reverse",
                "description": "空気抵抗を無視した水平投射の水平方向について、移動距離と一定の水平速度から投射後の時間を逆算します。",
            },
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
                "vertical_drop": {
                    "label": "水平投射（空気抵抗なし）で投射点から下向きに落下した距離 y",
                    "unit": "m",
                },
                "gravity": {
                    "label": "重力加速度 g",
                    "unit": "m/s²",
                    "values": [9.8],
                },
                "time": {
                    "label": "投射後の時間 t",
                    "unit": "s",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-drop": {
                "solve_for": "vertical_drop",
                "worksheet_mode": "calculation-basic",
                "description": "空気抵抗を無視した水平投射を成分分解し、鉛直方向は初速度0の落下運動として y = 1/2 gt² から下向きの落下距離を求めます。重力加速度は9.8 m/s²です。",
            },
            "reverse-time": {
                "solve_for": "time",
                "worksheet_mode": "calculation-reverse",
                "description": "空気抵抗を無視した水平投射の鉛直成分について、下向きの落下距離から y = 1/2 gt² を使って投射後の時間を逆算します。重力加速度は9.8 m/s²です。",
            },
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
                "vertical_velocity": {
                    "label": "水平投射（空気抵抗なし）の下向き鉛直速度の大きさ vᵧ",
                    "unit": "m/s",
                },
                "gravity": {
                    "label": "重力加速度 g",
                    "unit": "m/s²",
                    "values": [9.8],
                },
                "time": {
                    "label": "投射後の時間 t",
                    "unit": "s",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-vertical-velocity": {
                "solve_for": "vertical_velocity",
                "worksheet_mode": "calculation-basic",
                "description": "空気抵抗を無視した水平投射を成分分解し、鉛直方向は初速度0の等加速度運動として vᵧ = gt から下向きの速度の大きさを求めます。重力加速度は9.8 m/s²です。",
            },
            "reverse-time": {
                "solve_for": "time",
                "worksheet_mode": "calculation-reverse",
                "description": "空気抵抗を無視した水平投射の鉛直成分について、下向きの速度の大きさから vᵧ = gt を使って投射後の時間を逆算します。重力加速度は9.8 m/s²です。",
            },
        },
    },
}
