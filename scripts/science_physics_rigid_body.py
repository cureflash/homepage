"""Formal-course Physics topics for rigid-body equilibrium.

This module covers machine-verifiable rigid-body checkpoints: force moment,
weight moment, couple moment, signed net moment about one pivot, and two-force
moment equilibrium. Lever-arm geometry is learner-visible. For signed moments
the convention is explicitly counterclockwise positive and clockwise negative.

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
            "id": "physics-rigid-body-force-moment", "relation": "product", "result": "moment", "inputs": ["force", "lever_arm"],
            "variables": {
                "moment": {"label": "支点まわりの力のモーメントの大きさ M", "unit": "N·m"},
                "force": {"label": "腕に垂直にはたらく力 F", "unit": "N", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
                "lever_arm": {"label": "支点から力の作用線までの垂直距離 d", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2, 1.5, 2.0]},
            }, "tolerance": 1e-9,
        },
        "modes": {
            "basic-moment": {"solve_for": "moment", "worksheet_mode": "calculation-basic", "description": "支点から力の作用線までの垂直距離を腕 d とし、腕に垂直にはたらく力について M = Fd から力のモーメントの大きさを求めます。"},
            "reverse-force": {"solve_for": "force", "worksheet_mode": "calculation-reverse", "description": "力のモーメントの大きさ M と腕 d から、腕に垂直にはたらく力 F を M = Fd で逆算します。"},
            "reverse-lever-arm": {"solve_for": "lever_arm", "worksheet_mode": "calculation-reverse", "description": "力のモーメントの大きさ M と力 F から、支点から力の作用線までの垂直距離 d を M = Fd で逆算します。"},
        },
    },
    "rigid-body-weight-moment": {
        "title": "物理 剛体 重力によるモーメント", "unit": "様々な運動：剛体のつり合い", "skill": "rigid-body-weight-moment", "formula": "M = mgd（重力は腕に垂直、g = 9.8 m/s²）", "seeds": tuple(range(7311, 7321)),
        "spec": {"id": "physics-rigid-body-weight-moment", "relation": "product", "result": "moment", "inputs": ["mass", "gravity", "lever_arm"], "variables": {
            "moment": {"label": "支点まわりの重力による力のモーメントの大きさ M", "unit": "N·m"},
            "mass": {"label": "物体の質量 m", "unit": "kg", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
            "gravity": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
            "lever_arm": {"label": "支点から重力の作用線までの垂直距離 d", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2]},
        }, "tolerance": 1e-9},
        "modes": {
            "basic-weight-moment": {"solve_for": "moment", "worksheet_mode": "calculation-basic", "description": "重力加速度を9.8 m/s²とし、重力 mg の作用線までの垂直距離 d から M = mgd で支点まわりのモーメントの大きさを求めます。"},
            "reverse-mass": {"solve_for": "mass", "worksheet_mode": "calculation-reverse", "description": "重力加速度を9.8 m/s²とし、重力によるモーメント M と垂直距離 d から質量 m を M = mgd で逆算します。"},
            "reverse-lever-arm": {"solve_for": "lever_arm", "worksheet_mode": "calculation-reverse", "description": "重力加速度を9.8 m/s²とし、重力によるモーメント M と質量 m から作用線までの垂直距離 d を M = mgd で逆算します。"},
        },
    },
    "rigid-body-couple-moment": {
        "title": "物理 剛体 偶力のモーメント", "unit": "様々な運動：剛体のつり合い", "skill": "rigid-body-couple-moment", "formula": "N = Fℓ（大きさFの平行で逆向きの2力）", "seeds": tuple(range(7321, 7331)),
        "spec": {"id": "physics-rigid-body-couple-moment", "relation": "product", "result": "couple_moment", "inputs": ["force", "line_separation"], "variables": {
            "couple_moment": {"label": "偶力のモーメントの大きさ N", "unit": "N·m"},
            "force": {"label": "平行で逆向きな2力それぞれの大きさ F", "unit": "N", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
            "line_separation": {"label": "2力の作用線間の垂直距離 ℓ", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2, 1.5, 2.0]},
        }, "tolerance": 1e-9},
        "modes": {
            "basic-couple-moment": {"solve_for": "couple_moment", "worksheet_mode": "calculation-basic", "description": "大きさが等しく平行で逆向きな2力からなる偶力について、2力の作用線間の垂直距離 ℓ を使い N = Fℓ で偶力のモーメントの大きさを求めます。"},
            "reverse-force": {"solve_for": "force", "worksheet_mode": "calculation-reverse", "description": "偶力のモーメント N と2力の作用線間の垂直距離 ℓ から、それぞれの力の大きさ F を N = Fℓ で逆算します。"},
            "reverse-line-separation": {"solve_for": "line_separation", "worksheet_mode": "calculation-reverse", "description": "偶力のモーメント N とそれぞれの力の大きさ F から、2力の作用線間の垂直距離 ℓ を N = Fℓ で逆算します。"},
        },
    },
    "rigid-body-signed-net-moment": {
        "title": "物理 剛体 符号付きモーメント",
        "unit": "様々な運動：剛体のつり合い",
        "skill": "rigid-body-signed-net-moment",
        "formula": "M_net = M_CCW - M_CW（反時計回りを正、時計回りを負）",
        "seeds": tuple(range(7331, 7341)),
        "spec": {
            "id": "physics-rigid-body-signed-net-moment",
            "relation": "difference",
            "result": "net_moment",
            "inputs": ["counterclockwise_moment", "clockwise_moment"],
            "variables": {
                "net_moment": {"label": "支点まわりの正味のモーメント M_net（反時計回りを正、時計回りを負）", "unit": "N·m"},
                "counterclockwise_moment": {"label": "反時計回りのモーメントの大きさ M_CCW（正方向）", "unit": "N·m", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30, 36, 40, 50]},
                "clockwise_moment": {"label": "時計回りのモーメントの大きさ M_CW（負方向）", "unit": "N·m", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30, 36, 40, 50]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-net-moment": {"solve_for": "net_moment", "worksheet_mode": "calculation-basic", "description": "反時計回りを正、時計回りを負とする符号規約で、M_net = M_CCW - M_CW から支点まわりの正味のモーメントを求めます。"},
            "reverse-counterclockwise-moment": {"solve_for": "counterclockwise_moment", "worksheet_mode": "calculation-reverse", "description": "反時計回りを正、時計回りを負とする符号規約で、正味のモーメントと時計回りモーメントから反時計回りモーメントの大きさを逆算します。"},
            "reverse-clockwise-moment": {"solve_for": "clockwise_moment", "worksheet_mode": "calculation-reverse", "description": "反時計回りを正、時計回りを負とする符号規約で、正味のモーメントと反時計回りモーメントから時計回りモーメントの大きさを逆算します。"},
        },
    },
    "rigid-body-two-force-moment-balance": {
        "title": "物理 剛体 2力のモーメントのつり合い",
        "unit": "様々な運動：剛体のつり合い",
        "skill": "rigid-body-two-force-moment-balance",
        "formula": "F₁d₁ = F₂d₂（反時計回りを正、時計回りを負、正味のモーメント0）",
        "seeds": tuple(range(7341, 7351)),
        "spec": {
            "id": "physics-rigid-body-two-force-moment-balance",
            "relation": "equal-products",
            "result": "left_force",
            "inputs": ["left_arm", "right_force", "right_arm"],
            "variables": {
                "left_force": {"label": "反時計回りにはたらく左側の力 F₁", "unit": "N"},
                "left_arm": {"label": "支点から左側の力 F₁ の作用線までの垂直距離 d₁", "unit": "m", "values": [0.25, 0.5, 1.0, 2.0]},
                "right_force": {"label": "時計回りにはたらく右側の力 F₂", "unit": "N", "values": [8, 12, 16, 20, 24, 32, 40, 48, 64, 80]},
                "right_arm": {"label": "支点から右側の力 F₂ の作用線までの垂直距離 d₂", "unit": "m", "values": [0.25, 0.5, 1.0, 2.0]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "balance-left-force": {"solve_for": "left_force", "worksheet_mode": "calculation-basic", "description": "反時計回りを正、時計回りを負とし、正味のモーメントが0である2力のつり合い F₁d₁ = F₂d₂ から左側の力 F₁ を求めます。"},
            "balance-left-arm": {"solve_for": "left_arm", "worksheet_mode": "calculation-reverse", "description": "反時計回りを正、時計回りを負とし、正味のモーメントが0である2力のつり合い F₁d₁ = F₂d₂ から左側の腕 d₁ を逆算します。"},
            "balance-right-force": {"solve_for": "right_force", "worksheet_mode": "calculation-reverse", "description": "反時計回りを正、時計回りを負とし、正味のモーメントが0である2力のつり合い F₁d₁ = F₂d₂ から右側の力 F₂ を逆算します。"},
            "balance-right-arm": {"solve_for": "right_arm", "worksheet_mode": "calculation-reverse", "description": "反時計回りを正、時計回りを負とし、正味のモーメントが0である2力のつり合い F₁d₁ = F₂d₂ から右側の腕 d₂ を逆算します。"},
        },
    },
}