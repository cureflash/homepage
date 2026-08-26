"""Physics Basics sound and air-column topics for the shared worksheet factory.

The current MEXT Physics Basics commentary places `音と振動` under waves and
requires understanding air-column resonance, string vibration, and sound-wave
properties. The first sound batch covers v = fλ. Air-column checkpoints use
unambiguous fundamental-mode models with end correction explicitly ignored:
λ = 4L for a tube closed at one end and λ = 2L for a tube open at both ends.
Both are represented with the existing shared `product` relation.
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
                "sound_frequency": {"label": "音の振動数 f", "unit": "Hz", "values": [100, 125, 160, 170, 200, 250, 320, 340, 400, 500, 640, 680, 800, 850, 1000]},
                "sound_wavelength": {"label": "音波の波長 λ", "unit": "m", "values": [0.2, 0.25, 0.34, 0.4, 0.5, 0.68, 0.8, 1, 1.36, 1.6, 1.7, 2, 2.72, 3.2, 3.4]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-sound-speed": {"solve_for": "sound_speed", "worksheet_mode": "calculation-basic", "description": "音の振動数と波長から v = fλ を使って音波の速さを求める基本反復です。"},
            "reverse-sound-frequency": {"solve_for": "sound_frequency", "worksheet_mode": "calculation-reverse", "description": "音波の速さと波長から v = fλ を使って音の振動数を求める基本逆算です。"},
            "reverse-sound-wavelength": {"solve_for": "sound_wavelength", "worksheet_mode": "calculation-reverse", "description": "音波の速さと振動数から v = fλ を使って音波の波長を求める基本逆算です。"},
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
                "closed_pipe_factor": {"label": "閉管基本振動の係数", "values": [4]},
                "source_frequency": {"label": "音源の振動数 f", "unit": "Hz", "values": [250]},
                "air_column_length": {"label": "気柱の長さ L", "unit": "m", "values": [round(x / 1000, 3) for x in range(320, 360)]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-sound-speed": {"solve_for": "sound_speed", "worksheet_mode": "calculation-basic", "description": "一端が閉じた気柱の基本振動について、開口端補正を無視し、λ=4L と v=fλ から v=4Lf を使って音波の速さを求める基本反復です。"},
            "reverse-air-column-length": {"solve_for": "air_column_length", "worksheet_mode": "calculation-reverse", "description": "一端が閉じた気柱の基本振動について、開口端補正を無視し、v=4Lf から共鳴する気柱の長さ L を求める基本逆算です。"},
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
                "closed_pipe_factor": {"label": "閉管基本振動の係数", "values": [4]},
                "source_frequency": {"label": "音源の振動数 f", "unit": "Hz", "values": list(range(160, 181))},
                "air_column_length": {"label": "気柱の長さ L", "unit": "m", "values": [0.5]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "reverse-source-frequency": {"solve_for": "source_frequency", "worksheet_mode": "calculation-reverse", "description": "一端が閉じた気柱の基本振動について、開口端補正を無視し、v=4Lf から共鳴する音源の振動数 f を求める基本逆算です。"},
        },
    },
    "open-pipe-fundamental-resonance-speed-length": {
        "title": "物理基礎 開管の気柱共鳴",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "open-pipe-fundamental-resonance",
        "formula": "v = 2 L f",
        "seeds": tuple(range(6851, 6861)),
        "spec": {
            "id": "physics-basic-open-pipe-fundamental-resonance-speed-length",
            "relation": "product",
            "result": "sound_speed",
            "inputs": ["open_pipe_factor", "source_frequency", "air_column_length"],
            "variables": {
                "sound_speed": {"label": "音波の速さ v", "unit": "m/s"},
                "open_pipe_factor": {"label": "開管基本振動の係数", "values": [2]},
                "source_frequency": {"label": "音源の振動数 f", "unit": "Hz", "values": [500]},
                "air_column_length": {"label": "気柱の長さ L", "unit": "m", "values": [round(x / 1000, 3) for x in range(320, 360)]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-sound-speed": {"solve_for": "sound_speed", "worksheet_mode": "calculation-basic", "description": "両端が開いた気柱の基本振動について、開口端補正を無視し、λ=2L と v=fλ から v=2Lf を使って音波の速さを求める基本反復です。"},
            "reverse-air-column-length": {"solve_for": "air_column_length", "worksheet_mode": "calculation-reverse", "description": "両端が開いた気柱の基本振動について、開口端補正を無視し、v=2Lf から共鳴する気柱の長さ L を求める基本逆算です。"},
        },
    },
    "open-pipe-fundamental-resonance-frequency": {
        "title": "物理基礎 開管の気柱共鳴",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "open-pipe-fundamental-resonance",
        "formula": "v = 2 L f",
        "seeds": tuple(range(6871, 6881)),
        "spec": {
            "id": "physics-basic-open-pipe-fundamental-resonance-frequency",
            "relation": "product",
            "result": "sound_speed",
            "inputs": ["open_pipe_factor", "source_frequency", "air_column_length"],
            "variables": {
                "sound_speed": {"label": "音波の速さ v", "unit": "m/s"},
                "open_pipe_factor": {"label": "開管基本振動の係数", "values": [2]},
                "source_frequency": {"label": "音源の振動数 f", "unit": "Hz", "values": list(range(320, 361))},
                "air_column_length": {"label": "気柱の長さ L", "unit": "m", "values": [0.5]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "reverse-source-frequency": {"solve_for": "source_frequency", "worksheet_mode": "calculation-reverse", "description": "両端が開いた気柱の基本振動について、開口端補正を無視し、v=2Lf から共鳴する音源の振動数 f を求める基本逆算です。"},
        },
    },
}
