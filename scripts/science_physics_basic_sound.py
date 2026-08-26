"""Physics Basics sound and air-column topics for the shared worksheet factory.

The current MEXT Physics Basics commentary places `音と振動` under waves and
requires understanding air-column resonance, string vibration, and sound-wave
properties. The first sound batch covers v = fλ. The next checkpoint adds the
fundamental resonance of a tube closed at one end. For that model, end correction
is explicitly ignored and λ = 4L, so v = 4Lf. The fixed factor 4 is represented
as a constant input to the existing shared `product` relation; no new shared
formula relation is required.
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
    "closed-pipe-fundamental-resonance-speed-length": {
        "title": "物理基礎 閉管の気柱共鳴",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "closed-pipe-fundamental-resonance",
        "formula": "v = 4 L f",
        "seeds": tuple(range(6811, 6821)),
        "spec": {
            "id": "physics-basic-closed-pipe-fundamental-resonance-speed-length",
            "relation": "product",
            "result": "sound_speed",
            "inputs": ["closed_pipe_factor", "source_frequency", "air_column_length"],
            "variables": {
                "sound_speed": {"label": "音波の速さ v", "unit": "m/s"},
                "closed_pipe_factor": {
                    "label": "閉管基本振動の係数",
                    "values": [4],
                },
                "source_frequency": {
                    "label": "音源の振動数 f",
                    "unit": "Hz",
                    "values": [250],
                },
                "air_column_length": {
                    "label": "気柱の長さ L",
                    "unit": "m",
                    "values": [
                        0.320, 0.321, 0.322, 0.323, 0.324, 0.325, 0.326, 0.327, 0.328, 0.329,
                        0.330, 0.331, 0.332, 0.333, 0.334, 0.335, 0.336, 0.337, 0.338, 0.339,
                        0.340, 0.341, 0.342, 0.343, 0.344, 0.345, 0.346, 0.347, 0.348, 0.349,
                        0.350, 0.351, 0.352, 0.353, 0.354, 0.355, 0.356, 0.357, 0.358, 0.359,
                    ],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-sound-speed": {
                "solve_for": "sound_speed",
                "worksheet_mode": "calculation-basic",
                "description": "一端が閉じた気柱の基本振動について、開口端補正を無視し、λ=4L と v=fλ から v=4Lf を使って音波の速さを求める基本反復です。",
            },
            "reverse-air-column-length": {
                "solve_for": "air_column_length",
                "worksheet_mode": "calculation-reverse",
                "description": "一端が閉じた気柱の基本振動について、開口端補正を無視し、v=4Lf から共鳴する気柱の長さ L を求める基本逆算です。",
            },
        },
    },
    "closed-pipe-fundamental-resonance-frequency": {
        "title": "物理基礎 閉管の気柱共鳴",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "closed-pipe-fundamental-resonance",
        "formula": "v = 4 L f",
        "seeds": tuple(range(6831, 6841)),
        "spec": {
            "id": "physics-basic-closed-pipe-fundamental-resonance-frequency",
            "relation": "product",
            "result": "sound_speed",
            "inputs": ["closed_pipe_factor", "source_frequency", "air_column_length"],
            "variables": {
                "sound_speed": {"label": "音波の速さ v", "unit": "m/s"},
                "closed_pipe_factor": {
                    "label": "閉管基本振動の係数",
                    "values": [4],
                },
                "source_frequency": {
                    "label": "音源の振動数 f",
                    "unit": "Hz",
                    "values": list(range(160, 181)),
                },
                "air_column_length": {
                    "label": "気柱の長さ L",
                    "unit": "m",
                    "values": [0.5],
                },
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "reverse-source-frequency": {
                "solve_for": "source_frequency",
                "worksheet_mode": "calculation-reverse",
                "description": "一端が閉じた気柱の基本振動について、開口端補正を無視し、v=4Lf から共鳴する音源の振動数 f を求める基本逆算です。",
            },
        },
    },
}
