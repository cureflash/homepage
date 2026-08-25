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
    "series-voltage": {
        "title": "中2理科 直列回路の電圧",
        "unit": "電流とその利用",
        "skill": "series-circuit-voltage",
        "formula": "V全体 = V1 + V2",
        "seeds": tuple(range(6221, 6231)),
        "spec": {
            "id": "jh2-physics-series-voltage",
            "relation": "sum",
            "result": "Vtotal",
            "inputs": ["V1", "V2"],
            "variables": {
                "Vtotal": {"label": "回路全体の電圧", "unit": "V"},
                "V1": {"label": "抵抗1の電圧", "unit": "V", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6]},
                "V2": {"label": "抵抗2の電圧", "unit": "V", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "Vtotal",
                "worksheet_mode": "calculation-basic",
                "description": "直列回路で、二つの抵抗に加わる電圧の和から回路全体の電圧を求める基本反復です。",
            },
        },
    },
    "parallel-current": {
        "title": "中2理科 並列回路の電流",
        "unit": "電流とその利用",
        "skill": "parallel-circuit-current",
        "formula": "I全体 = I1 + I2",
        "seeds": tuple(range(6231, 6241)),
        "spec": {
            "id": "jh2-physics-parallel-current",
            "relation": "sum",
            "result": "Itotal",
            "inputs": ["I1", "I2"],
            "variables": {
                "Itotal": {"label": "分岐前の電流", "unit": "A"},
                "I1": {"label": "枝1の電流", "unit": "A", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1]},
                "I2": {"label": "枝2の電流", "unit": "A", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "Itotal",
                "worksheet_mode": "calculation-basic",
                "description": "並列回路の分岐点で、二つの枝を流れる電流の和から分岐前の電流を求める基本反復です。",
            },
        },
    },
    "series-resistance": {
        "title": "中2理科 直列回路の合成抵抗",
        "unit": "電流とその利用",
        "skill": "series-combined-resistance",
        "formula": "R全体 = R1 + R2",
        "seeds": tuple(range(6241, 6251)),
        "spec": {
            "id": "jh2-physics-series-resistance",
            "relation": "sum",
            "result": "Rtotal",
            "inputs": ["R1", "R2"],
            "variables": {
                "Rtotal": {"label": "合成抵抗", "unit": "Ω"},
                "R1": {"label": "抵抗1", "unit": "Ω", "values": [2, 3, 4, 5, 6, 10, 15, 20, 25, 30, 40, 50]},
                "R2": {"label": "抵抗2", "unit": "Ω", "values": [2, 3, 4, 5, 6, 10, 15, 20, 25, 30, 40, 50]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "Rtotal",
                "worksheet_mode": "calculation-basic",
                "description": "二つの抵抗を直列につないだときの合成抵抗を、抵抗値の和から求める基本反復です。",
            },
        },
    },
    "electric-power": {
        "title": "中2理科 電力",
        "unit": "電流とその利用",
        "skill": "electric-power",
        "formula": "P = V × I",
        "seeds": tuple(range(6251, 6261)),
        "spec": {
            "id": "jh2-physics-electric-power",
            "relation": "product",
            "result": "P",
            "inputs": ["V", "I"],
            "variables": {
                "P": {"label": "電力 P", "unit": "W"},
                "V": {"label": "電圧 V", "unit": "V", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
                "I": {"label": "電流 I", "unit": "A", "values": [0.5, 1, 1.5, 2, 2.5, 3]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "P",
                "worksheet_mode": "calculation-basic",
                "description": "P = V × I を使い、電圧と電流から電力を求める基本反復です。",
            },
        },
    },
    "electric-energy": {
        "title": "中2理科 電力量",
        "unit": "電流とその利用",
        "skill": "electric-energy",
        "formula": "E = P × t",
        "seeds": tuple(range(6261, 6271)),
        "spec": {
            "id": "jh2-physics-electric-energy",
            "relation": "product",
            "result": "E",
            "inputs": ["P", "t"],
            "variables": {
                "E": {"label": "電力量 E", "unit": "J"},
                "P": {"label": "電力 P", "unit": "W", "values": [2, 5, 10, 20, 30, 40, 50, 60, 100]},
                "t": {"label": "時間 t", "unit": "s", "values": [1, 2, 3, 5, 10, 15, 20, 30, 60]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "E",
                "worksheet_mode": "calculation-basic",
                "description": "E = P × t を使い、電力と時間から電力量をジュールで求める基本反復です。",
            },
        },
    },
    "heat-quantity": {
        "title": "中2理科 電熱線の発熱量",
        "unit": "電流とその利用",
        "skill": "heat-quantity",
        "formula": "Q = P × t",
        "seeds": tuple(range(6271, 6281)),
        "spec": {
            "id": "jh2-physics-heat-quantity",
            "relation": "product",
            "result": "Q",
            "inputs": ["P", "t"],
            "variables": {
                "Q": {"label": "発生する熱量 Q", "unit": "J"},
                "P": {"label": "電熱線の電力 P", "unit": "W", "values": [5, 10, 20, 30, 40, 50, 60, 80, 100]},
                "t": {"label": "電流を流す時間 t", "unit": "s", "values": [1, 2, 3, 5, 10, 15, 20, 30, 60]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "Q",
                "worksheet_mode": "calculation-basic",
                "description": "電熱線で電気エネルギーが熱に変わる基本場面として、Q = P × t を使い発生する熱量をジュールで求めます。",
            },
        },
    },
}

JH2_PHYSICS_SEEDS = tuple(range(6201, 6211))
JH2_PHYSICS_PROBLEM_COUNT = 20
