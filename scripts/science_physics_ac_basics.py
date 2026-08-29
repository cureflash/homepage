"""Formal Physics AC-circuit checkpoints.

Covers sinusoidal RMS voltage, pure-resistor AC relationships, coil/capacitor
reactance, series-RLC net reactance, and finite-answer AC fundamentals. All
numerical relationships are learner-visible and reuse existing formula helpers.
"""

PHYSICS_AC_BASICS_PROBLEM_COUNT = 20
_RMS_SEEDS = tuple(range(8091, 8101))
_RESISTOR_SEEDS = tuple(range(8101, 8111))
_POWER_SEEDS = tuple(range(8111, 8121))
_CONCEPT_SEEDS = tuple(range(8121, 8131))
_INDUCTIVE_REACTANCE_SEEDS = tuple(range(8131, 8141))
_CAPACITIVE_REACTANCE_SEEDS = tuple(range(8141, 8151))
_RLC_REACTANCE_SEEDS = tuple(range(8151, 8161))
_REACTANCE_CONCEPT_SEEDS = tuple(range(8161, 8171))
_RLC_IMPEDANCE_SEEDS = tuple(range(8171, 8201))

_SQRT2_APPROX = [1.414]
_TWO_PI_APPROX = [6.28]
_RMS_VOLTAGE_V = [10, 20, 25, 50, 100, 120, 200]
_CURRENT_A = [0.1, 0.2, 0.25, 0.5, 1.0, 2.0, 4.0]
_RESISTANCE_OHM = [5, 10, 20, 25, 50, 100]
_VOLTAGE_V = [5, 10, 20, 25, 50, 100, 120, 200]
_FREQUENCY_HZ = [10, 20, 25, 50, 60, 100]
_INDUCTANCE_H = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5]
_OMEGA_C_PER_OHM = [0.005, 0.01, 0.02, 0.025, 0.05, 0.1, 0.2]
_REACTANCE_OHM = [5, 10, 20, 25, 40, 50, 80, 100]

_PAIRS = [
    {"left": "交流", "right": ["電圧や電流の大きさと向きが周期的に変化する電気である"]},
    {"left": "周期 T", "right": ["交流が1回の変化を繰り返すのにかかる時間で、単位はsである"]},
    {"left": "周波数 f", "right": ["1秒間に繰り返す回数で、単位はHzである"]},
    {"left": "実効値", "right": ["抵抗で同じ発熱効果を生じる直流の値と対応させた交流の値である"]},
    {"left": "抵抗だけの交流回路", "right": ["電圧と電流は同位相で、実効値について V=IR が成り立つ"]},
    {"left": "正弦波交流の最大値と実効値", "right": ["最大値は実効値の√2倍である"]},
]
_FILL = [
    {"template": "交流が1回の変化を繰り返す時間を {answer} という。", "answer": ["周期", "周期T"]},
    {"template": "交流の周波数のSIで用いる単位は {answer} である。", "answer": ["Hz", "ヘルツ", "Hz（ヘルツ）"]},
    {"template": "周期Tと周波数fの関係は {answer} である。", "answer": ["f=1/T", "f = 1/T", "T=1/f", "T = 1/f"]},
    {"template": "正弦波交流では、最大値は実効値の {answer} 倍である。", "answer": ["√2", "ルート2", "sqrt(2)"]},
    {"template": "抵抗だけの交流回路では、電圧と電流は {answer} である。", "answer": ["同位相", "同じ位相"]},
]
_TF = [
    {"item": "交流", "property": "電圧や電流の大きさと向きが周期的に変化する"},
    {"item": "周波数", "property": "単位はHzである"},
    {"item": "周期Tと周波数f", "property": "f=1/Tの関係がある"},
    {"item": "正弦波交流", "property": "最大値は実効値の√2倍である"},
    {"item": "抵抗だけの交流回路", "property": "電圧と電流は同位相である"},
]

_REACTANCE_PAIRS = [
    {"left": "コイルのリアクタンス XL", "right": ["XL=ωL=2πfLで、周波数が高いほど大きくなる"]},
    {"left": "コンデンサーのリアクタンス XC", "right": ["XC=1/(ωC)=1/(2πfC)で、周波数が高いほど小さくなる"]},
    {"left": "直列RLC回路のインピーダンス Z", "right": ["Z=√(R²+(XL-XC)²)で表される"]},
    {"left": "直列RLC回路の共振", "right": ["XL=XCとなり、インピーダンスはRに等しくなる"]},
    {"left": "コイルだけの交流回路", "right": ["電流は電圧より位相が遅れる"]},
    {"left": "コンデンサーだけの交流回路", "right": ["電流は電圧より位相が進む"]},
]
_REACTANCE_FILL = [
    {"template": "角周波数をω、自己インダクタンスをLとすると、コイルのリアクタンスは {answer} である。", "answer": ["XL=ωL", "X_L=ωL", "XL = ωL"]},
    {"template": "角周波数をω、電気容量をCとすると、コンデンサーのリアクタンスは {answer} である。", "answer": ["XC=1/(ωC)", "X_C=1/(ωC)", "XC = 1/(ωC)"]},
    {"template": "直列RLC回路でXL=XCのとき、インピーダンスZは {answer} に等しい。", "answer": ["R", "抵抗R"]},
    {"template": "周波数fが高くなると、コイルのリアクタンスXLは {answer} 。", "answer": ["大きくなる", "増加する"]},
    {"template": "周波数fが高くなると、コンデンサーのリアクタンスXCは {answer} 。", "answer": ["小さくなる", "減少する"]},
]
_REACTANCE_TF = [
    {"item": "コイルのリアクタンス", "property": "周波数が高いほど大きくなる"},
    {"item": "コンデンサーのリアクタンス", "property": "周波数が高いほど小さくなる"},
    {"item": "直列RLC回路の共振", "property": "XL=XCとなる"},
    {"item": "直列RLC回路のインピーダンス", "property": "Z=√(R²+(XL-XC)²)で表される"},
    {"item": "コイルだけの交流回路", "property": "電流は電圧より位相が遅れる"},
    {"item": "コンデンサーだけの交流回路", "property": "電流は電圧より位相が進む"},
]


def _formula_topic(title, skill, formula, result, inputs, variables, seeds, modes, relation="product"):
    return {
        "generator": "formula",
        "title": title,
        "unit": "電気と磁気：交流の基本",
        "skill": skill,
        "formula": formula,
        "seeds": seeds,
        "spec": {
            "id": f"physics-{skill}",
            "relation": relation,
            "result": result,
            "inputs": inputs,
            "variables": variables,
            "tolerance": 1e-9,
        },
        "modes": modes,
    }


PHYSICS_AC_BASICS_TOPICS = {
    "ac-sinusoidal-rms-voltage-numeric": _formula_topic(
        "物理 交流：正弦波交流の実効値", "ac-sinusoidal-rms-voltage-numeric",
        "正弦波交流では Vmax=√2 Veff。計算では問題に示す √2≈1.414 を用いる。Vmax[V]、Veff[V]。",
        "peak_voltage", ["sqrt2_factor", "rms_voltage"],
        {"peak_voltage": {"label": "電圧の最大値 Vmax", "unit": "V"}, "sqrt2_factor": {"label": "√2 の近似値", "unit": "", "values": _SQRT2_APPROX}, "rms_voltage": {"label": "電圧の実効値 Veff", "unit": "V", "values": _RMS_VOLTAGE_V}},
        _RMS_SEEDS,
        {"basic-peak": {"solve_for": "peak_voltage", "worksheet_mode": "calculation-basic", "description": "正弦波交流の実効値から最大値を求めます。"}, "reverse-rms": {"solve_for": "rms_voltage", "worksheet_mode": "calculation-reverse", "description": "正弦波交流の最大値から実効値を逆算します。"}},
    ),
    "ac-resistor-ohm-rms-numeric": _formula_topic(
        "物理 交流：抵抗だけの交流回路", "ac-resistor-ohm-rms-numeric",
        "抵抗だけの交流回路では実効値について Veff=Ieff R。Veff[V]、Ieff[A]、R[Ω]。",
        "rms_voltage", ["rms_current", "resistance"],
        {"rms_voltage": {"label": "電圧の実効値 Veff", "unit": "V"}, "rms_current": {"label": "電流の実効値 Ieff", "unit": "A", "values": _CURRENT_A}, "resistance": {"label": "抵抗 R", "unit": "Ω", "values": _RESISTANCE_OHM}},
        _RESISTOR_SEEDS,
        {"basic-voltage": {"solve_for": "rms_voltage", "worksheet_mode": "calculation-basic", "description": "抵抗だけの交流回路で電圧の実効値を求めます。"}, "reverse-current": {"solve_for": "rms_current", "worksheet_mode": "calculation-reverse", "description": "電圧の実効値と抵抗から電流の実効値を逆算します。"}, "reverse-resistance": {"solve_for": "resistance", "worksheet_mode": "calculation-reverse", "description": "電圧・電流の実効値から抵抗を逆算します。"}},
    ),
    "ac-resistor-average-power-numeric": _formula_topic(
        "物理 交流：抵抗で消費する平均電力", "ac-resistor-average-power-numeric",
        "抵抗だけの交流回路で平均電力は P=Veff Ieff。P[W]、Veff[V]、Ieff[A]。",
        "power", ["rms_voltage", "rms_current"],
        {"power": {"label": "平均電力 P", "unit": "W"}, "rms_voltage": {"label": "電圧の実効値 Veff", "unit": "V", "values": _VOLTAGE_V}, "rms_current": {"label": "電流の実効値 Ieff", "unit": "A", "values": _CURRENT_A}},
        _POWER_SEEDS,
        {"basic-power": {"solve_for": "power", "worksheet_mode": "calculation-basic", "description": "抵抗で消費する平均電力を実効値から求めます。"}, "reverse-voltage": {"solve_for": "rms_voltage", "worksheet_mode": "calculation-reverse", "description": "平均電力と電流の実効値から電圧の実効値を逆算します。"}, "reverse-current": {"solve_for": "rms_current", "worksheet_mode": "calculation-reverse", "description": "平均電力と電圧の実効値から電流の実効値を逆算します。"}},
    ),
    "ac-core-concepts": {
        "generator": "retrieval", "title": "物理 交流：基本事項", "unit": "電気と磁気：交流の基本", "skill": "ac-core-concepts", "seeds": _CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "交流・周期・周波数・実効値の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "説明から交流の基本用語を答えます。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "交流の基本式・単位・位相を穴埋めで確認します。", "spec": {"mode": "fill", "items": _FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "交流の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _TF}},
        },
    },
    "ac-inductive-reactance-numeric": _formula_topic(
        "物理 交流：コイルのリアクタンス", "ac-inductive-reactance-numeric",
        "コイルのリアクタンスは XL=ωL=2πfL。計算では問題に示す 2π≈6.28 を用いる。XL[Ω]、f[Hz]、L[H]。",
        "inductive_reactance", ["two_pi_factor", "frequency", "inductance"],
        {"inductive_reactance": {"label": "コイルのリアクタンス XL", "unit": "Ω"}, "two_pi_factor": {"label": "2π の近似値", "unit": "", "values": _TWO_PI_APPROX}, "frequency": {"label": "周波数 f", "unit": "Hz", "values": _FREQUENCY_HZ}, "inductance": {"label": "自己インダクタンス L", "unit": "H", "values": _INDUCTANCE_H}},
        _INDUCTIVE_REACTANCE_SEEDS,
        {"basic-reactance": {"solve_for": "inductive_reactance", "worksheet_mode": "calculation-basic", "description": "周波数と自己インダクタンスからコイルのリアクタンスを求めます。"}, "reverse-frequency": {"solve_for": "frequency", "worksheet_mode": "calculation-reverse", "description": "コイルのリアクタンスと自己インダクタンスから周波数を逆算します。"}, "reverse-inductance": {"solve_for": "inductance", "worksheet_mode": "calculation-reverse", "description": "コイルのリアクタンスと周波数から自己インダクタンスを逆算します。"}},
    ),
    "ac-capacitive-reactance-numeric": _formula_topic(
        "物理 交流：コンデンサーのリアクタンス", "ac-capacitive-reactance-numeric",
        "コンデンサーのリアクタンスは XC=1/(ωC)。ここでは問題に示す積 ωC[1/Ω] を用いて XC=1/(ωC) を計算する。",
        "capacitive_reactance", ["numerator_one", "omega_c_product"],
        {"capacitive_reactance": {"label": "コンデンサーのリアクタンス XC", "unit": "Ω"}, "numerator_one": {"label": "分子の定数 1", "unit": "", "values": [1]}, "omega_c_product": {"label": "積 ωC", "unit": "1/Ω", "values": _OMEGA_C_PER_OHM}},
        _CAPACITIVE_REACTANCE_SEEDS,
        {"basic-reactance": {"solve_for": "capacitive_reactance", "worksheet_mode": "calculation-basic", "description": "問題に示されたωCからコンデンサーのリアクタンスを求めます。"}, "reverse-omega-c": {"solve_for": "omega_c_product", "worksheet_mode": "calculation-reverse", "description": "コンデンサーのリアクタンスから積ωCを逆算します。"}},
        relation="product-over-divisor",
    ),
    "ac-series-rlc-reactance-difference-numeric": _formula_topic(
        "物理 交流：直列RLCのリアクタンス差", "ac-series-rlc-reactance-difference-numeric",
        "直列RLC回路ではリアクタンス差を X=XL-XC とする。X>0は誘導性、X<0は容量性。X、XL、XCの単位はΩ。",
        "net_reactance", ["inductive_reactance", "capacitive_reactance"],
        {"net_reactance": {"label": "リアクタンス差 X=XL-XC", "unit": "Ω"}, "inductive_reactance": {"label": "コイルのリアクタンス XL", "unit": "Ω", "values": _REACTANCE_OHM}, "capacitive_reactance": {"label": "コンデンサーのリアクタンス XC", "unit": "Ω", "values": _REACTANCE_OHM}},
        _RLC_REACTANCE_SEEDS,
        {"basic-net": {"solve_for": "net_reactance", "worksheet_mode": "calculation-basic", "description": "XLとXCから直列RLC回路のリアクタンス差を求めます。"}, "reverse-xl": {"solve_for": "inductive_reactance", "worksheet_mode": "calculation-reverse", "description": "リアクタンス差とXCからXLを逆算します。"}, "reverse-xc": {"solve_for": "capacitive_reactance", "worksheet_mode": "calculation-reverse", "description": "XLとリアクタンス差からXCを逆算します。"}},
        relation="difference",
    ),
    "ac-reactance-rlc-concepts": {
        "generator": "retrieval", "title": "物理 交流：リアクタンスと直列RLC", "unit": "電気と磁気：交流の基本", "skill": "ac-reactance-rlc-concepts", "seeds": _REACTANCE_CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "リアクタンス・インピーダンス・共振の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _REACTANCE_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "説明から交流回路の用語を答えます。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _REACTANCE_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "リアクタンスと直列RLCの基本式を穴埋めで確認します。", "spec": {"mode": "fill", "items": _REACTANCE_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "リアクタンス・位相・共振の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _REACTANCE_TF}},
        },
    },
    "ac-series-rlc-impedance-numeric": _formula_topic(
        "物理 交流：直列RLCのインピーダンス", "ac-series-rlc-impedance-numeric",
        "直列RLC回路では Z=√(R²+(XL-XC)²)。R、XL、XC、Zの単位はΩ。答えは小数第2位まで求める。",
        "impedance", ["resistance", "inductive_reactance", "capacitive_reactance"],
        {"impedance": {"label": "インピーダンス Z", "unit": "Ω"}, "resistance": {"label": "抵抗 R", "unit": "Ω", "values": _RESISTANCE_OHM}, "inductive_reactance": {"label": "コイルのリアクタンス XL", "unit": "Ω", "values": _REACTANCE_OHM}, "capacitive_reactance": {"label": "コンデンサーのリアクタンス XC", "unit": "Ω", "values": _REACTANCE_OHM}},
        _RLC_IMPEDANCE_SEEDS,
        {"basic-impedance": {"solve_for": "impedance", "worksheet_mode": "calculation-basic", "description": "R、XL、XCから直列RLC回路のインピーダンスを小数第2位まで求めます。"}},
        relation="sqrt-square-plus-difference-square",
    ),
}
