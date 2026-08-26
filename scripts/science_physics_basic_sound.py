"""Physics Basics sound-wave quantity topics for the shared worksheet factory.

The current MEXT Physics Basics commentary places `音と振動` under waves and
requires understanding air-column resonance, string vibration, and sound-wave
properties. This first sound batch stays at the basic sound-wave quantity layer:
v = fλ for sound speed, frequency, and wavelength. It deliberately reuses the
shared product relation instead of introducing a new generator relation.
"""

PHYSICS_BASIC_SOUND_PROBLEM_COUNT = 20

PHYSICS_BASIC_SOUND_TOPICS = {
    "sound-speed-frequency-wavelength": {
        "title": "物理基礎 音波の速さ・振動数・波長",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "sound-speed-frequency-wavelength",
        "formula": "v = f λ",
        "seeds": tuple(range(6781, 6791)),
        "spec": {
            "id": "physics-basic-sound-speed-frequency-wavelength",
            "relation": "product",
            "result": "sound_speed",
            "inputs": ["sound_frequency", "sound_wavelength"],
            "variables": {
                "sound_speed": {"label": "音波の速さ v", "unit": "m/s"},
                "sound_frequency": {
                    "label": "音の振動数 f",
                    "unit": "Hz",
                    "values": [100, 125, 160, 170, 200, 250, 320, 340, 400, 500, 640, 680, 800, 850, 1000],
                },
                "sound_wavelength": {
                    "label": "音波の波長 λ",
                    "unit": "m",
                    "values": [0.2, 0.25, 0.34, 0.4, 0.5, 0.68, 0.8, 1, 1.36, 1.6, 1.7, 2, 2.72, 3.2, 3.4],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-sound-speed": {
                "solve_for": "sound_speed",
                "worksheet_mode": "calculation-basic",
                "description": "音の振動数と波長から v = fλ を使って音波の速さを求める基本反復です。",
            },
            "reverse-sound-frequency": {
                "solve_for": "sound_frequency",
                "worksheet_mode": "calculation-reverse",
                "description": "音波の速さと波長から v = fλ を使って音の振動数を求める基本逆算です。",
            },
            "reverse-sound-wavelength": {
                "solve_for": "sound_wavelength",
                "worksheet_mode": "calculation-reverse",
                "description": "音波の速さと振動数から v = fλ を使って音波の波長を求める基本逆算です。",
            },
        },
    },
}
