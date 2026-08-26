"""Mechanical-energy conservation drills for formal course 物理基礎.

The learner-facing labels explicitly state the MEXT-aligned condition that the
first conservation drills treat motion without friction or air resistance.
The existing shared ``sum`` relation is sufficient: the conserved mechanical
energy before the motion equals the kinetic plus potential energy afterward.
"""

PHYSICS_BASIC_CONSERVATION_PROBLEM_COUNT = 20

PHYSICS_BASIC_CONSERVATION_TOPICS = {
    "mechanical-energy-conservation": {
        "title": "物理基礎 力学的エネルギー保存",
        "unit": "物体の運動とエネルギー：力学的エネルギー",
        "skill": "mechanical-energy-conservation",
        "formula": "E = K + U（摩擦・空気抵抗がない場合）",
        "seeds": tuple(range(6741, 6751)),
        "spec": {
            "id": "physics-basic-mechanical-energy-conservation",
            "relation": "sum",
            "result": "initial_mechanical_energy",
            "inputs": ["final_kinetic_energy", "final_potential_energy"],
            "variables": {
                "initial_mechanical_energy": {
                    "label": "摩擦・空気抵抗がないとき保存される初めの力学的エネルギー E",
                    "unit": "J",
                },
                "final_kinetic_energy": {
                    "label": "その後の運動エネルギー K",
                    "unit": "J",
                    "values": [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200],
                },
                "final_potential_energy": {
                    "label": "その後の位置エネルギー U",
                    "unit": "J",
                    "values": [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-conserved-energy": {
                "solve_for": "initial_mechanical_energy",
                "worksheet_mode": "calculation-basic",
                "description": "摩擦・空気抵抗がない場合に力学的エネルギーが保存されるとして、その後の運動エネルギーと位置エネルギーから保存される力学的エネルギー E = K + U を求める基本反復です。",
            },
            "reverse-final-kinetic": {
                "solve_for": "final_kinetic_energy",
                "worksheet_mode": "calculation-reverse",
                "description": "摩擦・空気抵抗がない場合に力学的エネルギーが保存されるとして、初めの力学的エネルギーとその後の位置エネルギーから、その後の運動エネルギーを求める基本逆算です。",
            },
            "reverse-final-potential": {
                "solve_for": "final_potential_energy",
                "worksheet_mode": "calculation-reverse",
                "description": "摩擦・空気抵抗がない場合に力学的エネルギーが保存されるとして、初めの力学的エネルギーとその後の運動エネルギーから、その後の位置エネルギーを求める基本逆算です。",
            },
        },
    },
}
