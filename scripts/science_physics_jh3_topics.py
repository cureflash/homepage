"""Structured junior-high grade-3 physics topics for the shared worksheet factory."""

JH3_PHYSICS_FORMULA_TOPICS = {
    "speed": {
        "title": "中3理科 速さ",
        "unit": "運動とエネルギー",
        "skill": "speed",
        "formula": "d = v × t",
        "seeds": tuple(range(6401, 6411)),
        "spec": {
            "id": "jh3-physics-speed",
            "relation": "product",
            "result": "d",
            "inputs": ["v", "t"],
            "variables": {
                "d": {"label": "移動距離 d", "unit": "m"},
                "v": {"label": "速さ v", "unit": "m/s", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
                "t": {"label": "時間 t", "unit": "s", "values": [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "v",
                "worksheet_mode": "calculation-basic",
                "description": "速さ = 移動距離 ÷ 時間を使い、距離と時間から速さを求める基本反復です。",
            },
            "reverse-distance": {
                "solve_for": "d",
                "worksheet_mode": "calculation-reverse",
                "description": "距離 = 速さ × 時間を使い、速さと時間から移動距離を求める基本逆算です。",
            },
        },
    },
    "average-speed": {
        "title": "中3理科 平均の速さ",
        "unit": "運動とエネルギー",
        "skill": "average-speed",
        "formula": "D = v平均 × T",
        "seeds": tuple(range(6411, 6421)),
        "spec": {
            "id": "jh3-physics-average-speed",
            "relation": "product",
            "result": "D",
            "inputs": ["vavg", "T"],
            "variables": {
                "D": {"label": "全移動距離", "unit": "m"},
                "vavg": {"label": "平均の速さ", "unit": "m/s", "values": [1, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15]},
                "T": {"label": "全移動時間", "unit": "s", "values": [4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "vavg",
                "worksheet_mode": "calculation-basic",
                "description": "平均の速さ = 全移動距離 ÷ 全移動時間を使う基本反復です。",
            },
        },
    },
    "work": {
        "title": "中3理科 仕事",
        "unit": "運動とエネルギー",
        "skill": "mechanical-work",
        "formula": "W = F × d",
        "seeds": tuple(range(6421, 6431)),
        "spec": {
            "id": "jh3-physics-work",
            "relation": "product",
            "result": "W",
            "inputs": ["F", "d"],
            "variables": {
                "W": {"label": "仕事 W", "unit": "J"},
                "F": {"label": "力 F", "unit": "N", "values": [1, 2, 3, 4, 5, 6, 8, 10, 15, 20, 25, 30, 40, 50]},
                "d": {"label": "力の向きに動かした距離", "unit": "m", "values": [0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "W",
                "worksheet_mode": "calculation-basic",
                "description": "仕事 = 力 × 力の向きに動かした距離を使い、仕事をジュールで求める基本反復です。",
            },
            "reverse-force": {
                "solve_for": "F",
                "worksheet_mode": "calculation-reverse",
                "description": "仕事と移動距離から、物体に加えた力を求める基本逆算です。",
            },
        },
    },
    "power": {
        "title": "中3理科 仕事率",
        "unit": "運動とエネルギー",
        "skill": "mechanical-power",
        "formula": "W = P × t",
        "seeds": tuple(range(6431, 6441)),
        "spec": {
            "id": "jh3-physics-power",
            "relation": "product",
            "result": "W",
            "inputs": ["P", "t"],
            "variables": {
                "W": {"label": "仕事", "unit": "J"},
                "P": {"label": "仕事率 P", "unit": "W", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
                "t": {"label": "時間 t", "unit": "s", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "P",
                "worksheet_mode": "calculation-basic",
                "description": "仕事率 = 仕事 ÷ 時間を使い、単位時間当たりの仕事をワットで求める基本反復です。",
            },
        },
    },
}

JH3_PHYSICS_PROBLEM_COUNT = 20
