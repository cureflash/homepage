"""Formal-course Physics topics for momentum, impulse, conservation, and collisions.

These checkpoints stay in one-dimensional motion so every sign and answer is
mechanically unambiguous. The learner-visible positive direction is fixed in
each signed-velocity label. Collision follow-up also covers the MEXT-required
coefficient of restitution and change of mechanical energy with finite,
one-unknown numerical models.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics: momentum and impulse, momentum conservation in collisions/divisions,
collision/mechanical-energy change, and coefficient of restitution.
"""

PHYSICS_MOMENTUM_PROBLEM_COUNT = 20

_SIGNED_SPEEDS = [-12, -10, -8, -6, -5, -4, -3, 3, 4, 5, 6, 8, 10, 12]
_SIGNED_FORCES = [-40, -30, -24, -20, -16, -12, -10, -8, 8, 10, 12, 16, 20, 24, 30, 40]
_DURATIONS = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 1.25, 1.5, 2.0]
_SIGNED_MOMENTA = [-30, -24, -20, -18, -15, -12, -10, -8, -6, -5, -4, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30]
_MASSES = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
_RELATIVE_SPEEDS = [2, 4, 5, 6, 8, 10, 12, 16, 20]
_RESTITUTION_COEFFICIENTS = [0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0]
_INITIAL_KINETIC_ENERGIES = [120, 150, 180, 200, 240, 300, 360, 400]
_FINAL_KINETIC_ENERGIES = [20, 40, 60, 80, 100]

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
                "mass": {"label": "物体の質量 m", "unit": "kg", "values": _MASSES},
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
    "momentum-conservation-total-before-after": {
        "title": "物理 運動量保存：衝突前後の全運動量",
        "unit": "様々な運動：運動量と力積",
        "skill": "momentum-conservation-total-before-after",
        "formula": "P前=P後=p₁前+p₂前（右向きを正、左向きを負）",
        "seeds": tuple(range(7381, 7391)),
        "spec": {
            "id": "physics-momentum-conservation-total-before-after",
            "relation": "sum",
            "result": "final_total_momentum",
            "inputs": ["initial_momentum_1", "initial_momentum_2"],
            "variables": {
                "final_total_momentum": {"label": "衝突後の2物体の全運動量 P後（運動量保存により P前=P後、右向きを正、左向きを負）", "unit": "kg·m/s"},
                "initial_momentum_1": {"label": "衝突前の物体1の運動量 p₁前（右向きを正、左向きを負）", "unit": "kg·m/s", "values": _SIGNED_MOMENTA},
                "initial_momentum_2": {"label": "衝突前の物体2の運動量 p₂前（右向きを正、左向きを負）", "unit": "kg·m/s", "values": _SIGNED_MOMENTA},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-final-total": {"solve_for": "final_total_momentum", "worksheet_mode": "calculation-basic", "description": "外力の力積を無視できる1次元の2物体衝突で、右向きを正、左向きを負とし、運動量保存 P前=P後 と P前=p₁前+p₂前 から衝突後の全運動量を求めます。"},
            "reverse-initial-p1": {"solve_for": "initial_momentum_1", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、衝突後の全運動量と衝突前の物体2の運動量から、運動量保存を使って物体1の衝突前運動量を逆算します。"},
            "reverse-initial-p2": {"solve_for": "initial_momentum_2", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、衝突後の全運動量と衝突前の物体1の運動量から、運動量保存を使って物体2の衝突前運動量を逆算します。"},
        },
    },
    "momentum-conservation-final-object": {
        "title": "物理 運動量保存：衝突後の一方の運動量",
        "unit": "様々な運動：運動量と力積",
        "skill": "momentum-conservation-final-object",
        "formula": "p₂後 = P前 - p₁後（P前=P後、右向きを正、左向きを負）",
        "seeds": tuple(range(7391, 7401)),
        "spec": {
            "id": "physics-momentum-conservation-final-object",
            "relation": "difference",
            "result": "final_momentum_2",
            "inputs": ["initial_total_momentum", "final_momentum_1"],
            "variables": {
                "final_momentum_2": {"label": "衝突後の物体2の運動量 p₂後（右向きを正、左向きを負）", "unit": "kg·m/s"},
                "initial_total_momentum": {"label": "衝突前の2物体の全運動量 P前（運動量保存により P前=P後、右向きを正、左向きを負）", "unit": "kg·m/s", "values": _SIGNED_MOMENTA},
                "final_momentum_1": {"label": "衝突後の物体1の運動量 p₁後（右向きを正、左向きを負）", "unit": "kg·m/s", "values": _SIGNED_MOMENTA},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-final-p2": {"solve_for": "final_momentum_2", "worksheet_mode": "calculation-basic", "description": "外力の力積を無視できる1次元の2物体衝突で、運動量保存 P前=P後 と P後=p₁後+p₂後 から、衝突後の物体2の運動量を求めます。"},
            "reverse-initial-total": {"solve_for": "initial_total_momentum", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、衝突後の2物体の運動量から、運動量保存を使って衝突前の全運動量を逆算します。"},
            "reverse-final-p1": {"solve_for": "final_momentum_1", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、衝突前の全運動量と衝突後の物体2の運動量から、物体1の衝突後運動量を逆算します。"},
        },
    },
    "momentum-conservation-two-body-velocity": {
        "title": "物理 運動量保存：2物体の質量と速度",
        "unit": "様々な運動：運動量と力積",
        "skill": "momentum-conservation-two-body-velocity",
        "formula": "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂（右向きを正、左向きを負）",
        "seeds": tuple(range(7401, 7411)),
        "spec": {
            "id": "physics-momentum-conservation-two-body-velocity",
            "relation": "two-body-momentum-conservation",
            "result": "final_velocity_2",
            "inputs": ["mass_1", "initial_velocity_1", "mass_2", "initial_velocity_2", "final_velocity_1"],
            "variables": {
                "final_velocity_2": {"label": "衝突後の物体2の速度 v₂（右向きを正、左向きを負）", "unit": "m/s"},
                "mass_1": {"label": "物体1の質量 m₁", "unit": "kg", "values": _MASSES},
                "initial_velocity_1": {"label": "衝突前の物体1の速度 u₁（右向きを正、左向きを負）", "unit": "m/s", "values": _SIGNED_SPEEDS},
                "mass_2": {"label": "物体2の質量 m₂", "unit": "kg", "values": _MASSES},
                "initial_velocity_2": {"label": "衝突前の物体2の速度 u₂（右向きを正、左向きを負）", "unit": "m/s", "values": _SIGNED_SPEEDS},
                "final_velocity_1": {"label": "衝突後の物体1の速度 v₁（右向きを正、左向きを負）", "unit": "m/s", "values": _SIGNED_SPEEDS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-final-v2": {"solve_for": "final_velocity_2", "worksheet_mode": "calculation-basic", "description": "外力の力積を無視できる1次元の2物体衝突で、右向きを正、左向きを負とし、m₁u₁+m₂u₂=m₁v₁+m₂v₂ から衝突後の物体2の速度 v₂ を求めます。"},
            "reverse-initial-u1": {"solve_for": "initial_velocity_1", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、右向きを正、左向きを負とし、運動量保存から衝突前の物体1の速度 u₁ を逆算します。"},
            "reverse-initial-u2": {"solve_for": "initial_velocity_2", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、右向きを正、左向きを負とし、運動量保存から衝突前の物体2の速度 u₂ を逆算します。"},
            "reverse-final-v1": {"solve_for": "final_velocity_1", "worksheet_mode": "calculation-reverse", "description": "外力の力積を無視できる1次元の2物体衝突で、右向きを正、左向きを負とし、運動量保存から衝突後の物体1の速度 v₁ を逆算します。"},
        },
    },
    "collision-coefficient-of-restitution": {
        "title": "物理 衝突：はね返り係数",
        "unit": "様々な運動：運動量と力積",
        "skill": "collision-coefficient-of-restitution",
        "formula": "相対離れる速さ = e × 相対近づく速さ（0≦e≦1）",
        "seeds": tuple(range(7411, 7421)),
        "spec": {
            "id": "physics-collision-coefficient-of-restitution",
            "relation": "product",
            "result": "separation_relative_speed",
            "inputs": ["restitution_coefficient", "approach_relative_speed"],
            "variables": {
                "separation_relative_speed": {"label": "衝突後に2物体が相対的に離れる速さ", "unit": "m/s"},
                "restitution_coefficient": {"label": "はね返り係数 e", "values": _RESTITUTION_COEFFICIENTS},
                "approach_relative_speed": {"label": "衝突前に2物体が相対的に近づく速さ", "unit": "m/s", "values": _RELATIVE_SPEEDS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-separation-speed": {"solve_for": "separation_relative_speed", "worksheet_mode": "calculation-basic", "description": "1次元衝突について、近づく速さ・離れる速さをどちらも正の大きさで表し、相対離れる速さ=e×相対近づく速さから衝突後の相対速度の大きさを求めます。"},
            "reverse-restitution": {"solve_for": "restitution_coefficient", "worksheet_mode": "calculation-reverse", "description": "1次元衝突について、近づく速さ・離れる速さをどちらも正の大きさで表し、e=(相対離れる速さ)/(相対近づく速さ)からはね返り係数を逆算します。"},
            "reverse-approach-speed": {"solve_for": "approach_relative_speed", "worksheet_mode": "calculation-reverse", "description": "1次元衝突について、はね返り係数と衝突後に相対的に離れる速さから、衝突前に相対的に近づく速さを逆算します。"},
        },
    },
    "collision-kinetic-energy-loss": {
        "title": "物理 衝突：力学的エネルギーの減少",
        "unit": "様々な運動：運動量と力積",
        "skill": "collision-kinetic-energy-loss",
        "formula": "K減少 = K前 - K後（衝突前後の全運動エネルギー）",
        "seeds": tuple(range(7421, 7431)),
        "spec": {
            "id": "physics-collision-kinetic-energy-loss",
            "relation": "difference",
            "result": "kinetic_energy_loss",
            "inputs": ["initial_total_kinetic_energy", "final_total_kinetic_energy"],
            "variables": {
                "kinetic_energy_loss": {"label": "衝突による全運動エネルギーの減少量 K減少", "unit": "J"},
                "initial_total_kinetic_energy": {"label": "衝突前の2物体の全運動エネルギー K前", "unit": "J", "values": _INITIAL_KINETIC_ENERGIES},
                "final_total_kinetic_energy": {"label": "衝突後の2物体の全運動エネルギー K後", "unit": "J", "values": _FINAL_KINETIC_ENERGIES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-energy-loss": {"solve_for": "kinetic_energy_loss", "worksheet_mode": "calculation-basic", "description": "衝突前後の2物体の全運動エネルギーを比べ、K減少=K前-K後から衝突で減少した力学的エネルギーを求めます。運動量保存と運動エネルギー保存は同じ法則ではありません。"},
            "reverse-initial-energy": {"solve_for": "initial_total_kinetic_energy", "worksheet_mode": "calculation-reverse", "description": "衝突後の全運動エネルギーと減少量から、K減少=K前-K後を使って衝突前の全運動エネルギーを逆算します。"},
            "reverse-final-energy": {"solve_for": "final_total_kinetic_energy", "worksheet_mode": "calculation-reverse", "description": "衝突前の全運動エネルギーと減少量から、K減少=K前-K後を使って衝突後の全運動エネルギーを逆算します。"},
        },
    },
}
