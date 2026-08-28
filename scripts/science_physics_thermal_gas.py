"""Formal-course Physics checkpoints for molecular energy and thermodynamics.

The quantitative families reuse existing shared formula relations only.  The
Boltzmann constant is learner-visible at its exact SI value.  The ideal-gas
internal-energy family uses the same school-calculation gas constant already
used by the state-equation worksheets.  The first-law family fixes the sign
convention explicitly: Q is positive when heat enters the gas and W_on is
positive when external surroundings do work on the gas.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics, gas molecular motion: molecular mean kinetic energy and absolute
temperature, ideal-gas internal energy, gas state changes, and the first law of
thermodynamics.
"""

PHYSICS_THERMAL_GAS_PROBLEM_COUNT = 20
_MEAN_KE_SEEDS = tuple(range(7691, 7701))
_INTERNAL_ENERGY_SEEDS = tuple(range(7701, 7711))
_THERMAL_CONCEPT_SEEDS = tuple(range(7711, 7721))
_FIRST_LAW_SEEDS = tuple(range(7721, 7731))

_BOLTZMANN = 1.380649e-23
_R = 8.31
_TEMPERATURE_VALUES = [200, 300, 400, 500, 600, 800]
_AMOUNT_VALUES = [0.5, 1.0, 1.5, 2.0, 2.5]
_HEAT_VALUES = [-500, -300, -100, 100, 300, 500]
_WORK_ON_VALUES = [-400, -200, -100, 100, 200, 400]

_THERMAL_PAIRS = [
    {"left": "気体分子1個あたりの平均運動エネルギー", "right": ["絶対温度に比例する"]},
    {"left": "単原子分子理想気体の内部エネルギー U", "right": ["U = 3nRT/2"]},
    {"left": "熱力学第一法則（W_on は外部から気体にされた仕事）", "right": ["ΔU = Q + W_on"]},
    {"left": "Q > 0", "right": ["気体が外部から熱を受け取る"]},
    {"left": "Q < 0", "right": ["気体が外部へ熱を放出する"]},
    {"left": "W_on > 0", "right": ["外部が気体に仕事をする"]},
    {"left": "W_on < 0", "right": ["気体が外部に仕事をする"]},
]

_THERMAL_FILL = [
    {"template": "気体分子1個あたりの平均運動エネルギーは、絶対温度に{answer}する。", "answer": ["比例"]},
    {"template": "単原子分子理想気体の内部エネルギーは U = {answer} と表せる。", "answer": ["3nRT/2", "(3/2)nRT"]},
    {"template": "W_onを外部から気体にされた仕事とすると、熱力学第一法則は ΔU = {answer} である。", "answer": ["Q + W_on", "Q+W_on"]},
    {"template": "Q>0 は、気体が外部から熱を{answer}ことを表す。", "answer": ["受け取る"]},
    {"template": "W_on>0 は、外部が気体に仕事を{answer}ことを表す。", "answer": ["する"]},
]

_THERMAL_TF = [
    {"item": "気体分子1個あたりの平均運動エネルギー", "property": "絶対温度に比例する"},
    {"item": "単原子分子理想気体の内部エネルギー U", "property": "U = 3nRT/2 で表せる"},
    {"item": "熱力学第一法則（W_on は外部から気体にされた仕事）", "property": "ΔU = Q + W_on で表せる"},
    {"item": "Q > 0", "property": "気体が外部から熱を受け取ることを表す"},
    {"item": "Q < 0", "property": "気体が外部へ熱を放出することを表す"},
    {"item": "W_on > 0", "property": "外部が気体に仕事をすることを表す"},
    {"item": "W_on < 0", "property": "気体が外部に仕事をすることを表す"},
]

PHYSICS_THERMAL_GAS_TOPICS = {
    "molecular-mean-kinetic-energy-numeric": {
        "generator": "formula",
        "title": "物理 気体分子の運動：分子1個あたりの平均運動エネルギー",
        "unit": "様々な運動：気体分子の運動",
        "skill": "molecular-mean-kinetic-energy-numeric",
        "formula": "K̄ = (3/2)k_B T（k_B = 1.380649×10^-23 J/K、Tは絶対温度K）",
        "seeds": _MEAN_KE_SEEDS,
        "spec": {
            "id": "physics-molecular-mean-kinetic-energy",
            "relation": "product",
            "result": "mean_kinetic_energy",
            "inputs": ["three_halves", "boltzmann_constant", "absolute_temperature"],
            "variables": {
                "mean_kinetic_energy": {"label": "平均運動エネルギー K̄", "unit": "J"},
                "three_halves": {"label": "係数 3/2", "values": [1.5]},
                "boltzmann_constant": {"label": "ボルツマン定数 k_B", "unit": "J/K", "values": [_BOLTZMANN]},
                "absolute_temperature": {"label": "絶対温度 T", "unit": "K", "values": _TEMPERATURE_VALUES},
            },
            "tolerance": 1e-30,
        },
        "modes": {
            "basic-energy": {"solve_for": "mean_kinetic_energy", "worksheet_mode": "calculation-basic", "description": "K̄=(3/2)k_BT を用い、表示された正確なボルツマン定数と絶対温度から分子1個あたりの平均運動エネルギーを求めます。"},
        },
    },
    "ideal-gas-internal-energy-numeric": {
        "generator": "formula",
        "title": "物理 気体分子の運動：単原子分子理想気体の内部エネルギー",
        "unit": "様々な運動：気体分子の運動",
        "skill": "ideal-gas-internal-energy-numeric",
        "formula": "U = (3/2)nRT（R = 8.31 J/(mol·K)、Tは絶対温度K）",
        "seeds": _INTERNAL_ENERGY_SEEDS,
        "spec": {
            "id": "physics-ideal-gas-internal-energy",
            "relation": "product",
            "result": "internal_energy",
            "inputs": ["three_halves", "amount", "gas_constant", "absolute_temperature"],
            "variables": {
                "internal_energy": {"label": "内部エネルギー U", "unit": "J"},
                "three_halves": {"label": "係数 3/2", "values": [1.5]},
                "amount": {"label": "物質量 n", "unit": "mol", "values": _AMOUNT_VALUES},
                "gas_constant": {"label": "気体定数 R", "unit": "J/(mol·K)", "values": [_R]},
                "absolute_temperature": {"label": "絶対温度 T", "unit": "K", "values": _TEMPERATURE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-energy": {"solve_for": "internal_energy", "worksheet_mode": "calculation-basic", "description": "U=(3/2)nRT から単原子分子理想気体の内部エネルギーを求めます。"},
            "reverse-amount": {"solve_for": "amount", "worksheet_mode": "calculation-reverse", "description": "U=(3/2)nRT から物質量 n を逆算します。"},
            "reverse-temperature": {"solve_for": "absolute_temperature", "worksheet_mode": "calculation-reverse", "description": "U=(3/2)nRT から絶対温度 T を逆算します。"},
        },
    },
    "thermal-gas-core-concepts": {
        "generator": "retrieval",
        "title": "物理 気体分子の運動：平均運動エネルギー・内部エネルギー・熱力学第一法則",
        "unit": "様々な運動：気体分子の運動",
        "skill": "thermal-gas-core-concepts",
        "seeds": _THERMAL_CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "平均運動エネルギー、内部エネルギー、熱力学第一法則と符号規約を項目から確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _THERMAL_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "平均運動エネルギー、内部エネルギー、熱力学第一法則と符号規約を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _THERMAL_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "平均運動エネルギー、内部エネルギー、熱力学第一法則と符号規約を穴埋めで確認します。", "spec": {"mode": "fill", "items": _THERMAL_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "平均運動エネルギー、内部エネルギー、熱力学第一法則と符号規約を○×で確認します。", "spec": {"mode": "tf", "items": _THERMAL_TF}},
        },
    },
    "thermodynamics-first-law-numeric": {
        "generator": "formula",
        "title": "物理 気体分子の運動：熱力学第一法則",
        "unit": "様々な運動：気体分子の運動",
        "skill": "thermodynamics-first-law-numeric",
        "formula": "ΔU = Q + W_on（Q>0:吸熱、W_on>0:外部が気体にする仕事）",
        "seeds": _FIRST_LAW_SEEDS,
        "spec": {
            "id": "physics-thermodynamics-first-law",
            "relation": "sum",
            "result": "internal_energy_change",
            "inputs": ["heat_received", "work_on_gas"],
            "variables": {
                "internal_energy_change": {"label": "内部エネルギーの変化 ΔU", "unit": "J"},
                "heat_received": {"label": "気体が受け取る熱量 Q（放出は負）", "unit": "J", "values": _HEAT_VALUES},
                "work_on_gas": {"label": "外部から気体にされた仕事 W_on（気体が外部にする仕事は負）", "unit": "J", "values": _WORK_ON_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-delta-u": {"solve_for": "internal_energy_change", "worksheet_mode": "calculation-basic", "description": "ΔU=Q+W_on を用い、吸放熱と仕事の符号を含めて内部エネルギーの変化を求めます。"},
            "reverse-heat": {"solve_for": "heat_received", "worksheet_mode": "calculation-reverse", "description": "ΔU=Q+W_on から気体が受け取る熱量 Q を逆算します。"},
            "reverse-work": {"solve_for": "work_on_gas", "worksheet_mode": "calculation-reverse", "description": "ΔU=Q+W_on から外部から気体にされた仕事 W_on を逆算します。"},
        },
    },
}
