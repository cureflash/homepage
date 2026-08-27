"""Physics Basics beat-frequency drills for the shared worksheet factory.

MEXT Physics Basics explicitly includes beats under sound-wave properties. For two
nearby source frequencies, this checkpoint labels the larger frequency f_high and
the smaller frequency f_low, so the beat frequency is
f_beat = f_high - f_low. Keeping the inputs ordered lets the existing shared
`difference` relation represent |f1-f2| without adding a new formula relation.
"""

PHYSICS_BASIC_BEATS_PROBLEM_COUNT = 20

PHYSICS_BASIC_BEATS_TOPICS = {
    "beat-frequency-high": {
        "title": "物理基礎 うなりの振動数",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "beat-frequency",
        "formula": "f_beat = f_high - f_low",
        "seeds": tuple(range(6931, 6941)),
        "spec": {
            "id": "physics-basic-beat-frequency-high",
            "relation": "difference",
            "result": "beat_frequency",
            "inputs": ["higher_frequency", "lower_frequency"],
            "variables": {
                "beat_frequency": {"label": "うなりの振動数 f_beat", "unit": "Hz"},
                "higher_frequency": {"label": "高い方の音の振動数 f_high", "unit": "Hz", "values": list(range(445, 456))},
                "lower_frequency": {"label": "低い方の音の振動数 f_low", "unit": "Hz", "values": [440]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-beat-frequency": {
                "solve_for": "beat_frequency",
                "worksheet_mode": "calculation-basic",
                "description": "近い2つの音の振動数について、高い方を f_high、低い方を f_low として f_beat=f_high-f_low からうなりの振動数を求める基本反復です。",
            },
            "reverse-higher-frequency": {
                "solve_for": "higher_frequency",
                "worksheet_mode": "calculation-reverse",
                "description": "うなりの振動数と低い方の音の振動数から、高い方の音の振動数を逆算する基本反復です。",
            },
        },
    },
    "beat-frequency-low": {
        "title": "物理基礎 うなりの振動数",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "beat-frequency",
        "formula": "f_beat = f_high - f_low",
        "seeds": tuple(range(6951, 6961)),
        "spec": {
            "id": "physics-basic-beat-frequency-low",
            "relation": "difference",
            "result": "beat_frequency",
            "inputs": ["higher_frequency", "lower_frequency"],
            "variables": {
                "beat_frequency": {"label": "うなりの振動数 f_beat", "unit": "Hz"},
                "higher_frequency": {"label": "高い方の音の振動数 f_high", "unit": "Hz", "values": [450]},
                "lower_frequency": {"label": "低い方の音の振動数 f_low", "unit": "Hz", "values": list(range(435, 446))},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "reverse-lower-frequency": {
                "solve_for": "lower_frequency",
                "worksheet_mode": "calculation-reverse",
                "description": "うなりの振動数と高い方の音の振動数から、低い方の音の振動数を逆算する基本反復です。",
            },
        },
    },
}
