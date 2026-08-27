"""Formal-course Physics topics for rigid-body equilibrium.

This module starts the rigid-body equilibrium sequence with three narrow,
machine-verifiable checkpoints: the magnitude of a force moment, the moment of
a weight about a pivot, and the magnitude of a couple.  Forces are taken
perpendicular to the stated lever arm so that the learner-visible relation is a
simple product.  Rotation-sign conventions and multi-force equilibrium are
reserved for the next checkpoint rather than being mixed into these drills.

Curriculum basis: MEXT High School Course of Study Commentary, Science / Math,
Physics (1) Various motions: plane motion and equilibrium of rigid bodies.
"""

PHYSICS_RIGID_BODY_PROBLEM_COUNT = 20

PHYSICS_RIGID_BODY_TOPICS = {
    "rigid-body-force-moment": {
        "title": "物理 剛体 力のモーメント",
        "unit": "様々な運動：剛体のつり合い",
        "skill": "rigid-body-force-moment",
        "formula": "M = Fd（力は腕に垂直）",
        "seeds": tuple(range(7301, 7311)),
        "spec": {
            "id": "physics-rigid-body-force-moment",
            "relation": "product",
            "result": "moment",
            "inputs": ["force", "lever_arm"],
            "variables": {
                "moment": {"label": "支点まわりの力のモーメントの大きさ M", "unit": "N·m"},
                "force": {"label": "腕に垂直にはたらく力 F", "unit": "N", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
                "lever_arm": {"label": "支点から力の作用線までの垂直距離 d", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2, 1.5, 2.0]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-moment": {"solve_for": "moment", "worksheet_mode": "calculation-basic", "description": "支点から力の作用線までの垂直距離を腕 d とし、腕に垂直にはたらく力について M = Fd から力のモーメントの大きさを求めます。"},
            "reverse-force": {"solve_for": "force", "worksheet_mode": "calculation-reverse", "description": "力のモーメントの大きさ M と腕 d から、腕に垂直にはたらく力 F を M = Fd で逆算します。"},
            "reverse-lever-arm": {"solve_for": "lever_arm", "worksheet_mode": "calculation-reverse", "description": "力のモーメントの大きさ M と力 F から、支点から力の作用線までの垂直距離 d を M = Fd で逆算します。"},
        },
    },
    "rigid-body-weight-moment": {
        "title": "物理 剛体 重力によるモーメント",
        "unit": "様々な運動：剛体のつり合い",
        "skill": "rigid-body-weight-moment",
        "formula": "M = mgd（重力は腕に垂直、g = 9.8 m/s²）",
        "seeds": tuple(range(7311, 7321)),
        "spec": {
            "id": "physics-rigid-body-weight-moment",
            "relation": "product",
            "result": "moment",
            "inputs": ["mass", "gravity", "lever_arm"],
            "variables": {
                "moment": {"label": "支点まわりの重力による力のモーメントの大きさ M", "unit": "N·m"},
                "mass": {"label": "物体の質量 m", "unit": "kg", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
                "gravity": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
                "lever_arm": {"label": "支点から重力の作用線までの垂直距離 d", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-weight-moment": {"solve_for": "moment", "worksheet_mode": "calculation-basic", "description": "重力加速度を9.8 m/s²とし、重力 mg の作用線までの垂直距離 d から M = mgd で支点まわりのモーメントの大きさを求めます。"},
            "reverse-mass": {"solve_for": "mass", "worksheet_mode": "calculation-reverse", "description": "重力加速度を9.8 m/s²とし、重力によるモーメント M と垂直距離 d から質量 m を M = mgd で逆算します。"},
            "reverse-lever-arm": {"solve_for": "lever_arm", "worksheet_mode": "calculation-reverse", "description": "重力加速度を9.8 m/s²とし、重力によるモーメント M と質量 m から作用線までの垂直距離 d を M = mgd で逆算します。"},
        },
    },
    "rigid-body-couple-moment": {
        "title": "物理 剛体 偶力のモーメント",
        "unit": "様々な運動：剛体のつり合い",
        "skill": "rigid-body-couple-moment",
        "formula": "N = Fℓ（大きさFの平行で逆向きの2力）",
        "seeds": tuple(range(7321, 7331)),
        "spec": {
            "id": "physics-rigid-body-couple-moment",
            "relation": "product",
            "result": "couple_moment",
            "inputs": ["force", "line_separation"],
            "variables": {
                "couple_moment": {"label": "偶力のモーメントの大きさ N", "unit": "N·m"},
                "force": {"label": "平行で逆向きな2力それぞれの大きさ F", "unit": "N", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
                "line_separation": {"label": "2力の作用線間の垂直距離 ℓ", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2, 1.5, 2.0]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-couple-moment": {"solve_for": "couple_moment", "worksheet_mode": "calculation-basic", "description": "大きさが等しく平行で逆向きな2力からなる偶力について、2力の作用線間の垂直距離 ℓ を使い N = Fℓ で偶力のモーメントの大きさを求めます。"},
            "reverse-force": {"solve_for": "force", "worksheet_mode": "calculation-reverse", "description": "偶力のモーメント N と2力の作用線間の垂直距離 ℓ から、それぞれの力の大きさ F を N = Fℓ で逆算します。"},
            "reverse-line-separation": {"solve_for": "line_separation", "worksheet_mode": "calculation-reverse", "description": "偶力のモーメント N とそれぞれの力の大きさ F から、2力の作用線間の垂直距離 ℓ を N = Fℓ で逆算します。"},
        },
    },
}
