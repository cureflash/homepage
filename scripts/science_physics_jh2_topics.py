"""Structured junior-high grade-2 physics topics for the shared worksheet factory."""

JH2_PHYSICS_FORMULA_TOPICS = {
    "ohms-law": {
        "title": "中2理科 オームの法則",
        "unit": "電流とその利用",
        "skill": "ohms-law",
        "formula": "V = I × R",
        "spec": {
            "id": "jh2-physics-ohms-law",
            "relation": "product",
            "result": "V",
            "inputs": ["I", "R"],
            "variables": {
                "V": {"label": "電圧 V", "unit": "V"},
                "I": {
                    "label": "電流 I",
                    "unit": "A",
                    "values": [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.5, 2],
                },
                "R": {
                    "label": "抵抗 R",
                    "unit": "Ω",
                    "values": [2, 4, 5, 10, 20, 25, 40, 50],
                },
            },
        },
        "modes": {
            "basic": {
                "solve_for": "V",
                "worksheet_mode": "calculation-basic",
                "description": "V = I × R を使い、電流と抵抗から電圧を求める基本反復です。",
            },
            "reverse-current": {
                "solve_for": "I",
                "worksheet_mode": "calculation-reverse",
                "description": "V = I × R を使い、電圧と抵抗から電流を求める基本逆算です。",
            },
            "reverse-resistance": {
                "solve_for": "R",
                "worksheet_mode": "calculation-reverse",
                "description": "V = I × R を使い、電圧と電流から抵抗を求める基本逆算です。",
            },
        },
    },
}

JH2_PHYSICS_SEEDS = (6201, 6202, 6203)
JH2_PHYSICS_PROBLEM_COUNT = 20
