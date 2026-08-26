"""Physics Basics string-vibration drills for the shared worksheet factory.

The current MEXT Physics Basics commentary includes string vibration and normal
modes under `音と振動`. This first string checkpoint uses only the simplest
unambiguous model: a string fixed at both ends, vibrating in its fundamental
mode. Then λ = 2L and v = fλ, so v = 2Lf. The existing shared `product`
relation is sufficient; no new formula relation is introduced here.
"""

PHYSICS_BASIC_STRING_PROBLEM_COUNT = 20

PHYSICS_BASIC_STRING_TOPICS = {
    "string-fundamental-vibration-speed-length": {
        "title": "物理基礎 弦の基本振動",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "string-fundamental-vibration",
        "formula": "v = 2 L f",
        "seeds": tuple(range(6891, 6901)),
        "spec": {
            "id": "physics-basic-string-fundamental-vibration-speed-length",
            "relation": "product",
            "result": "string_wave_speed",
            "inputs": ["string_fundamental_factor", "fundamental_frequency", "string_length"],
            "variables": {
                "string_wave_speed": {"label": "弦を伝わる波の速さ v", "unit": "m/s"},
                "string_fundamental_factor": {"label": "両端固定・基本振動の係数", "values": [2]},
                "fundamental_frequency": {"label": "基本振動数 f", "unit": "Hz", "values": [100]},
                "string_length": {"label": "弦の長さ L", "unit": "m", "values": [round(x / 100, 2) for x in range(50, 101, 2)]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-string-wave-speed": {
                "solve_for": "string_wave_speed",
                "worksheet_mode": "calculation-basic",
                "description": "両端を固定した弦の基本振動について、λ=2L と v=fλ から v=2Lf を使い、弦を伝わる波の速さ v を求める基本反復です。",
            },
            "reverse-string-length": {
                "solve_for": "string_length",
                "worksheet_mode": "calculation-reverse",
                "description": "両端を固定した弦の基本振動について、v=2Lf から弦の長さ L を求める基本逆算です。",
            },
        },
    },
    "string-fundamental-vibration-frequency": {
        "title": "物理基礎 弦の基本振動",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "string-fundamental-vibration",
        "formula": "v = 2 L f",
        "seeds": tuple(range(6911, 6921)),
        "spec": {
            "id": "physics-basic-string-fundamental-vibration-frequency",
            "relation": "product",
            "result": "string_wave_speed",
            "inputs": ["string_fundamental_factor", "fundamental_frequency", "string_length"],
            "variables": {
                "string_wave_speed": {"label": "弦を伝わる波の速さ v", "unit": "m/s"},
                "string_fundamental_factor": {"label": "両端固定・基本振動の係数", "values": [2]},
                "fundamental_frequency": {"label": "基本振動数 f", "unit": "Hz", "values": list(range(80, 201, 5))},
                "string_length": {"label": "弦の長さ L", "unit": "m", "values": [1.0]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "reverse-fundamental-frequency": {
                "solve_for": "fundamental_frequency",
                "worksheet_mode": "calculation-reverse",
                "description": "両端を固定した弦の基本振動について、v=2Lf から基本振動数 f を求める基本逆算です。",
            },
        },
    },
}
