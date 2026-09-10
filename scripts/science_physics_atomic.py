"""Formal Physics atomic-physics checkpoints.

The first progression covers the photon hypothesis with mechanically verifiable
coefficient calculations for E=hν. Scientific-notation exponents are kept
learner-visible while the shared formula generator operates on their decimal
coefficients.
"""

PHYSICS_ATOMIC_PROBLEM_COUNT = 20
_PHOTON_ENERGY_SEEDS = tuple(range(8201, 8231))

_PLANCK_COEFFICIENT = [6.63]
_FREQUENCY_COEFFICIENT = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0]

PHYSICS_ATOMIC_TOPICS = {
    "atomic-photon-energy-numeric": {
        "generator": "formula",
        "title": "物理 原子：光子のエネルギー",
        "unit": "原子：光子とエネルギー",
        "skill": "atomic-photon-energy-numeric",
        "formula": (
            "光子のエネルギーは E=hν。h=6.63×10^-34 J·s とし、"
            "周波数 ν=a×10^14 Hz、光子エネルギー E=b×10^-20 J と表す。"
            "E=hν の関係から指定された係数を求める。"
        ),
        "seeds": _PHOTON_ENERGY_SEEDS,
        "spec": {
            "id": "physics-atomic-photon-energy-numeric",
            "relation": "product",
            "result": "energy_coefficient",
            "inputs": ["planck_coefficient", "frequency_coefficient"],
            "variables": {
                "energy_coefficient": {
                    "label": "光子エネルギー E の係数",
                    "unit": "×10^-20 J",
                },
                "planck_coefficient": {
                    "label": "プランク定数 h の係数",
                    "unit": "×10^-34 J·s",
                    "values": _PLANCK_COEFFICIENT,
                },
                "frequency_coefficient": {
                    "label": "周波数 ν の係数",
                    "unit": "×10^14 Hz",
                    "values": _FREQUENCY_COEFFICIENT,
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-energy": {
                "solve_for": "energy_coefficient",
                "worksheet_mode": "calculation-basic",
                "description": "E=hν を使い、光子のエネルギーを科学的記数法の係数で求めます。",
            },
            "reverse-frequency": {
                "solve_for": "frequency_coefficient",
                "worksheet_mode": "calculation-reverse",
                "description": "E=hν を使い、光子のエネルギーから周波数を科学的記数法の係数で求めます。",
            },
        },
    },
}
