"""Physics Basics heat topics for the shared worksheet factory.

The current MEXT Physics Basics commentary explicitly includes heat and temperature,
heat capacity, specific heat capacity (specific heat), and conservation of heat
quantity. These first drills stay at formula-understanding/substitution level and
use coherent SI units: Q in J, m in kg, c in J/(kg·K), C in J/K, and temperature
change ΔT in K. Using K for the temperature difference keeps the first family on
one coherent unit convention without introducing a unit-conversion exercise. The
shared product relation is sufficient for both Q = mcΔT and Q = CΔT, so no shared
generator relation is introduced here.
"""

PHYSICS_BASIC_HEAT_PROBLEM_COUNT = 20

PHYSICS_BASIC_HEAT_TOPICS = {
    "specific-heat-quantity": {
        "title": "物理基礎 熱量・比熱",
        "unit": "様々な物理現象とエネルギーの利用：熱",
        "skill": "specific-heat-quantity",
        "formula": "Q = m c ΔT",
        "seeds": tuple(range(6751, 6761)),
        "spec": {
            "id": "physics-basic-specific-heat-quantity",
            "relation": "product",
            "result": "heat_quantity",
            "inputs": ["mass", "specific_heat", "temperature_change"],
            "variables": {
                "heat_quantity": {"label": "加えた熱量 Q", "unit": "J"},
                "mass": {"label": "物体の質量 m", "unit": "kg", "values": [0.1, 0.2, 0.25, 0.5, 0.8, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5]},
                "specific_heat": {"label": "比熱容量（比熱）c", "unit": "J/(kg·K)", "values": [400, 500, 800, 900, 1000, 1200, 2000, 2500, 4200]},
                "temperature_change": {"label": "温度変化 ΔT", "unit": "K", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-heat-quantity": {
                "solve_for": "heat_quantity",
                "worksheet_mode": "calculation-basic",
                "description": "質量・比熱容量（比熱）・温度変化から Q = mcΔT を使って加えた熱量を求める基本反復です。",
            },
            "reverse-mass": {
                "solve_for": "mass",
                "worksheet_mode": "calculation-reverse",
                "description": "熱量・比熱容量（比熱）・温度変化から Q = mcΔT を使って物体の質量を求める基本逆算です。",
            },
            "reverse-specific-heat": {
                "solve_for": "specific_heat",
                "worksheet_mode": "calculation-reverse",
                "description": "熱量・質量・温度変化から Q = mcΔT を使って比熱容量（比熱）を求める基本逆算です。",
            },
            "reverse-temperature-change": {
                "solve_for": "temperature_change",
                "worksheet_mode": "calculation-reverse",
                "description": "熱量・質量・比熱容量（比熱）から Q = mcΔT を使って温度変化を求める基本逆算です。",
            },
        },
    },
    "heat-capacity": {
        "title": "物理基礎 熱容量",
        "unit": "様々な物理現象とエネルギーの利用：熱",
        "skill": "heat-capacity",
        "formula": "Q = C ΔT",
        "seeds": tuple(range(6761, 6771)),
        "spec": {
            "id": "physics-basic-heat-capacity",
            "relation": "product",
            "result": "heat_quantity",
            "inputs": ["heat_capacity", "temperature_change"],
            "variables": {
                "heat_quantity": {"label": "加えた熱量 Q", "unit": "J"},
                "heat_capacity": {"label": "熱容量 C", "unit": "J/K", "values": [50, 100, 150, 200, 250, 400, 500, 800, 1000, 1200, 1500, 2000, 2500, 4200]},
                "temperature_change": {"label": "温度変化 ΔT", "unit": "K", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-heat-quantity": {
                "solve_for": "heat_quantity",
                "worksheet_mode": "calculation-basic",
                "description": "熱容量と温度変化から Q = CΔT を使って加えた熱量を求める基本反復です。",
            },
            "reverse-heat-capacity": {
                "solve_for": "heat_capacity",
                "worksheet_mode": "calculation-reverse",
                "description": "熱量と温度変化から Q = CΔT を使って熱容量を求める基本逆算です。",
            },
        },
    },
}
