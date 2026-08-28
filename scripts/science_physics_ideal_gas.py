"""Formal-course Physics numerical checkpoints for ideal-gas state relations.

All three checkpoints use the shared reversible product-over-divisor relation.
The learner sees every physical quantity used by the equation.  Temperatures
are absolute temperatures in kelvin; no Celsius conversion is hidden.  The
molar gas constant is explicitly fixed to the school-calculation approximation
R = 8.31 kPa·L/(mol·K), consistent with the exact SI value
8.314462618... J/(mol·K) and 1 kPa·L = 1 J.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics, gas molecular motion: ideal-gas state equation including Boyle's and
Charles's laws, absolute temperature, molecular kinetic energy, internal
energy, and the first law of thermodynamics.
"""

PHYSICS_IDEAL_GAS_PROBLEM_COUNT = 20
_STATE_SEEDS = tuple(range(7661, 7671))
_BOYLE_SEEDS = tuple(range(7671, 7681))
_CHARLES_SEEDS = tuple(range(7681, 7691))

_R = 8.31
_AMOUNT_VALUES = [0.5, 1.0, 1.5, 2.0, 2.5]
_ABSOLUTE_TEMPERATURE_VALUES = [200, 400, 800]
# Multiples of 8.31 L keep p=nRT/V outputs finite and readable.
_STATE_VOLUME_VALUES = [8.31, 16.62, 24.93, 33.24, 41.55]
_PRESSURE_VALUES = [80, 100, 120, 160, 200]
_BOYLE_VOLUME_VALUES = [1, 2, 4, 5, 10]
_CHARLES_VOLUME_VALUES = [10, 20, 30, 40, 50]

PHYSICS_IDEAL_GAS_TOPICS = {
    "ideal-gas-state-equation-numeric": {
        "generator": "formula",
        "title": "物理 気体分子の運動：理想気体の状態方程式",
        "unit": "様々な運動：気体分子の運動",
        "skill": "ideal-gas-state-equation-numeric",
        "formula": "pV = nRT（Tは絶対温度、R = 8.31 kPa·L/(mol·K)、p>0, V>0, n>0, T>0）",
        "seeds": _STATE_SEEDS,
        "spec": {
            "id": "physics-ideal-gas-state-equation",
            "relation": "product-over-divisor",
            "result": "pressure",
            "inputs": ["amount", "gas_constant", "absolute_temperature", "volume"],
            "variables": {
                "pressure": {"label": "圧力 p", "unit": "kPa"},
                "amount": {"label": "物質量 n", "unit": "mol", "values": _AMOUNT_VALUES},
                "gas_constant": {"label": "気体定数 R", "unit": "kPa·L/(mol·K)", "values": [_R]},
                "absolute_temperature": {"label": "絶対温度 T", "unit": "K", "values": _ABSOLUTE_TEMPERATURE_VALUES},
                "volume": {"label": "体積 V", "unit": "L", "values": _STATE_VOLUME_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-pressure": {"solve_for": "pressure", "worksheet_mode": "calculation-basic", "description": "pV=nRT を用い、物質量・気体定数・絶対温度・体積から圧力 p を求めます。R=8.31 kPa·L/(mol·K) を明示します。"},
            "reverse-amount": {"solve_for": "amount", "worksheet_mode": "calculation-reverse", "description": "pV=nRT を用い、圧力・体積・気体定数・絶対温度から物質量 n を逆算します。"},
            "reverse-temperature": {"solve_for": "absolute_temperature", "worksheet_mode": "calculation-reverse", "description": "pV=nRT を用い、圧力・体積・物質量・気体定数から絶対温度 T(K) を逆算します。"},
            "reverse-volume": {"solve_for": "volume", "worksheet_mode": "calculation-reverse", "description": "pV=nRT を用い、圧力・物質量・気体定数・絶対温度から体積 V を逆算します。"},
        },
    },
    "boyle-law-numeric": {
        "generator": "formula",
        "title": "物理 気体分子の運動：ボイルの法則",
        "unit": "様々な運動：気体分子の運動",
        "skill": "boyle-law-numeric",
        "formula": "p₁V₁ = p₂V₂（同じ量の気体、絶対温度一定、各圧力・体積は正）",
        "seeds": _BOYLE_SEEDS,
        "spec": {
            "id": "physics-boyle-law",
            "relation": "product-over-divisor",
            "result": "final_pressure",
            "inputs": ["initial_pressure", "initial_volume", "final_volume"],
            "variables": {
                "final_pressure": {"label": "変化後の圧力 p₂", "unit": "kPa"},
                "initial_pressure": {"label": "変化前の圧力 p₁", "unit": "kPa", "values": _PRESSURE_VALUES},
                "initial_volume": {"label": "変化前の体積 V₁", "unit": "L", "values": _BOYLE_VOLUME_VALUES},
                "final_volume": {"label": "変化後の体積 V₂", "unit": "L", "values": _BOYLE_VOLUME_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-final-pressure": {"solve_for": "final_pressure", "worksheet_mode": "calculation-basic", "description": "同じ量の気体を絶対温度一定で変化させ、p₁V₁=p₂V₂ から変化後の圧力を求めます。"},
            "reverse-initial-pressure": {"solve_for": "initial_pressure", "worksheet_mode": "calculation-reverse", "description": "絶対温度一定の p₁V₁=p₂V₂ から変化前の圧力を逆算します。"},
            "reverse-initial-volume": {"solve_for": "initial_volume", "worksheet_mode": "calculation-reverse", "description": "絶対温度一定の p₁V₁=p₂V₂ から変化前の体積を逆算します。"},
            "reverse-final-volume": {"solve_for": "final_volume", "worksheet_mode": "calculation-reverse", "description": "絶対温度一定の p₁V₁=p₂V₂ から変化後の体積を逆算します。"},
        },
    },
    "charles-law-numeric": {
        "generator": "formula",
        "title": "物理 気体分子の運動：シャルルの法則",
        "unit": "様々な運動：気体分子の運動",
        "skill": "charles-law-numeric",
        "formula": "V₁/T₁ = V₂/T₂（同じ量の気体、圧力一定、T₁,T₂は絶対温度Kで正）",
        "seeds": _CHARLES_SEEDS,
        "spec": {
            "id": "physics-charles-law",
            "relation": "product-over-divisor",
            "result": "final_volume",
            "inputs": ["initial_volume", "final_temperature", "initial_temperature"],
            "variables": {
                "final_volume": {"label": "変化後の体積 V₂", "unit": "L"},
                "initial_volume": {"label": "変化前の体積 V₁", "unit": "L", "values": _CHARLES_VOLUME_VALUES},
                "final_temperature": {"label": "変化後の絶対温度 T₂", "unit": "K", "values": _ABSOLUTE_TEMPERATURE_VALUES},
                "initial_temperature": {"label": "変化前の絶対温度 T₁", "unit": "K", "values": _ABSOLUTE_TEMPERATURE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-final-volume": {"solve_for": "final_volume", "worksheet_mode": "calculation-basic", "description": "同じ量の気体を圧力一定で変化させ、V₁/T₁=V₂/T₂ から変化後の体積を求めます。温度はKで扱います。"},
            "reverse-initial-volume": {"solve_for": "initial_volume", "worksheet_mode": "calculation-reverse", "description": "圧力一定の V₁/T₁=V₂/T₂ から変化前の体積を逆算します。温度はKで扱います。"},
            "reverse-final-temperature": {"solve_for": "final_temperature", "worksheet_mode": "calculation-reverse", "description": "圧力一定の V₁/T₁=V₂/T₂ から変化後の絶対温度を逆算します。"},
            "reverse-initial-temperature": {"solve_for": "initial_temperature", "worksheet_mode": "calculation-reverse", "description": "圧力一定の V₁/T₁=V₂/T₂ から変化前の絶対温度を逆算します。"},
        },
    },
}
