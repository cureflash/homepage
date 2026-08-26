"""Physics Basics wave-quantity topics for the shared worksheet factory.

The current MEXT Physics Basics commentary includes the basic quantities of a wave
travelling in a straight line: wavelength, frequency, and propagation speed. This
first wave batch keeps to that quantitative core and uses coherent SI units:
v in m/s, f in Hz, and wavelength λ in m. The shared product relation directly
represents v = fλ, so no shared generator relation is introduced here.
"""

PHYSICS_BASIC_WAVE_PROBLEM_COUNT = 20

PHYSICS_BASIC_WAVE_TOPICS = {
    "wave-speed-frequency-wavelength": {
        "title": "物理基礎 波の速さ・振動数・波長",
        "unit": "様々な物理現象とエネルギーの利用：波",
        "skill": "wave-speed-frequency-wavelength",
        "formula": "v = f λ",
        "seeds": tuple(range(6771, 6781)),
        "spec": {
            "id": "physics-basic-wave-speed-frequency-wavelength",
            "relation": "product",
            "result": "wave_speed",
            "inputs": ["frequency", "wavelength"],
            "variables": {
                "wave_speed": {"label": "波の速さ v", "unit": "m/s"},
                "frequency": {
                    "label": "振動数 f",
                    "unit": "Hz",
                    "values": [1, 2, 4, 5, 10, 20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500],
                },
                "wavelength": {
                    "label": "波長 λ",
                    "unit": "m",
                    "values": [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.2, 1.5, 2, 2.5, 4, 5, 8, 10],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-wave-speed": {
                "solve_for": "wave_speed",
                "worksheet_mode": "calculation-basic",
                "description": "振動数と波長から v = fλ を使って波の速さを求める基本反復です。",
            },
            "reverse-frequency": {
                "solve_for": "frequency",
                "worksheet_mode": "calculation-reverse",
                "description": "波の速さと波長から v = fλ を使って振動数を求める基本逆算です。",
            },
            "reverse-wavelength": {
                "solve_for": "wavelength",
                "worksheet_mode": "calculation-reverse",
                "description": "波の速さと振動数から v = fλ を使って波長を求める基本逆算です。",
            },
        },
    },
}
