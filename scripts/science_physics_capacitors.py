"""Formal-course Physics capacitor checkpoints.

Current MEXT Physics treats capacitor charging/discharging and capacitance,
relates parallel-plate capacitance to plate area and separation, touches on
series/parallel connection and dielectric effects, and connects capacitance
with electric field/potential difference.  Every numerical checkpoint below
keeps its unit scaling and algebra learner-visible so answers can be recomputed
independently with existing shared relations.
"""

PHYSICS_CAPACITOR_PROBLEM_COUNT = 20
_CHARGE_SEEDS = tuple(range(7921, 7931))
_PLATE_SEEDS = tuple(range(7931, 7941))
_ENERGY_SEEDS = tuple(range(7941, 7951))
_CONCEPT_SEEDS = tuple(range(7951, 7961))

_CAPACITANCE_UF = [0.5, 1, 2, 3, 4, 5, 10]
_VOLTAGE_V = [2, 3, 4, 5, 6, 8, 10, 12]
_HALF = [0.5]
_CHARGE_MC = [0.5, 1, 2, 3, 4, 5, 6]

# C[pF] = 0.885 * S[cm^2] / d[mm] approximates epsilon_0 S/d.
_EPSILON0_SCALED = [0.885]
_PLATE_AREA_CM2 = [10, 20, 30, 40, 50, 60]
_PLATE_GAP_MM = [1, 2, 4, 5]

_CAPACITOR_PAIRS = [
    {"left": "コンデンサーの充電", "right": ["極板間の電位差が生じ、電荷が蓄えられる"]},
    {"left": "コンデンサーの放電", "right": ["蓄えた電荷が回路を通って減少する"]},
    {"left": "電気容量 C", "right": ["蓄えた電気量 Q と電位差 V の関係 Q=CV で定義される"]},
    {"left": "平行板コンデンサーで極板面積を大きくする", "right": ["他条件一定なら電気容量は大きくなる"]},
    {"left": "平行板コンデンサーで極板間隔を大きくする", "right": ["他条件一定なら電気容量は小さくなる"]},
    {"left": "コンデンサーの並列接続", "right": ["合成容量は各電気容量の和になる"]},
    {"left": "コンデンサーの直列接続", "right": ["合成容量の逆数は各電気容量の逆数の和になる"]},
    {"left": "極板間に誘電体を入れる", "right": ["一般に電気容量は真空時より大きくなる"]},
]

_CAPACITOR_FILL = [
    {"template": "電気容量 C、電位差 V のコンデンサーに蓄えられる電気量は Q={answer} で表される。", "answer": ["CV", "C V"]},
    {"template": "平行板コンデンサーでは、他条件一定なら極板面積を大きくすると電気容量は{answer}なる。", "answer": ["大きく", "大きくなる"]},
    {"template": "平行板コンデンサーでは、他条件一定なら極板間隔を大きくすると電気容量は{answer}なる。", "answer": ["小さく", "小さくなる"]},
    {"template": "コンデンサーを並列接続したとき、合成容量は各電気容量の{answer}になる。", "answer": ["和"]},
    {"template": "コンデンサーを直列接続したとき、合成容量の{answer}は各電気容量の逆数の和になる。", "answer": ["逆数"]},
    {"template": "平行板コンデンサーの極板間に誘電体を入れると、一般に電気容量は{answer}なる。", "answer": ["大きく", "大きくなる"]},
]

_CAPACITOR_TF = [
    {"item": "コンデンサーの電気量と電位差", "property": "Q=CVで関係付けられる"},
    {"item": "平行板コンデンサーの極板面積", "property": "他条件一定なら大きいほど電気容量は大きい"},
    {"item": "平行板コンデンサーの極板間隔", "property": "他条件一定なら大きいほど電気容量は小さい"},
    {"item": "コンデンサーの並列接続", "property": "合成容量は各電気容量の和になる"},
    {"item": "コンデンサーの直列接続", "property": "合成容量の逆数は各電気容量の逆数の和になる"},
    {"item": "平行板コンデンサーと誘電体", "property": "極板間に誘電体を入れると一般に電気容量は増える"},
]

PHYSICS_CAPACITOR_TOPICS = {
    "capacitor-charge-voltage-numeric": {
        "generator": "formula",
        "title": "物理 コンデンサー：Q=CV の基本計算",
        "unit": "電気と磁気：コンデンサー",
        "skill": "capacitor-charge-voltage-numeric",
        "formula": "Q=CV。C[μF]×V[V]=Q[μC]",
        "seeds": _CHARGE_SEEDS,
        "spec": {
            "id": "physics-capacitor-charge-voltage",
            "relation": "product",
            "result": "charge",
            "inputs": ["capacitance", "voltage"],
            "variables": {
                "charge": {"label": "蓄えられる電気量 Q", "unit": "μC"},
                "capacitance": {"label": "電気容量 C", "unit": "μF", "values": _CAPACITANCE_UF},
                "voltage": {"label": "極板間の電位差 V", "unit": "V", "values": _VOLTAGE_V},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-charge": {"solve_for": "charge", "worksheet_mode": "calculation-basic", "description": "Q=CVから蓄えられる電気量を求めます。"},
            "reverse-capacitance": {"solve_for": "capacitance", "worksheet_mode": "calculation-reverse", "description": "QとVから電気容量Cを逆算します。"},
            "reverse-voltage": {"solve_for": "voltage", "worksheet_mode": "calculation-reverse", "description": "QとCから極板間の電位差Vを逆算します。"},
        },
    },
    "capacitor-parallel-plate-capacitance-numeric": {
        "generator": "formula",
        "title": "物理 コンデンサー：平行板の面積・間隔と電気容量",
        "unit": "電気と磁気：コンデンサー",
        "skill": "capacitor-parallel-plate-capacitance-numeric",
        "formula": "真空中で C=ε₀S/d。学校計算用に C[pF]=0.885 S[cm²]/d[mm] とする",
        "seeds": _PLATE_SEEDS,
        "spec": {
            "id": "physics-capacitor-parallel-plate-capacitance",
            "relation": "product-over-divisor",
            "result": "capacitance",
            "inputs": ["epsilon0_scaled", "plate_area", "plate_gap"],
            "variables": {
                "capacitance": {"label": "電気容量 C", "unit": "pF"},
                "epsilon0_scaled": {"label": "真空の誘電率の換算係数", "unit": "pF·mm/cm²", "values": _EPSILON0_SCALED},
                "plate_area": {"label": "極板面積 S", "unit": "cm²", "values": _PLATE_AREA_CM2},
                "plate_gap": {"label": "極板間隔 d", "unit": "mm", "values": _PLATE_GAP_MM},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-capacitance": {"solve_for": "capacitance", "worksheet_mode": "calculation-basic", "description": "C=ε₀S/dから真空中の平行板コンデンサーの電気容量を求めます。"},
            "reverse-area": {"solve_for": "plate_area", "worksheet_mode": "calculation-reverse", "description": "C、d、換算係数から極板面積Sを逆算します。"},
            "reverse-gap": {"solve_for": "plate_gap", "worksheet_mode": "calculation-reverse", "description": "C、S、換算係数から極板間隔dを逆算します。"},
        },
    },
    "capacitor-stored-energy-numeric": {
        "generator": "formula",
        "title": "物理 コンデンサー：蓄えられるエネルギー",
        "unit": "電気と磁気：コンデンサー",
        "skill": "capacitor-stored-energy-numeric",
        "formula": "U=(1/2)QV。Q[mC]×V[V] を用いると U[mJ]=0.5 QV",
        "seeds": _ENERGY_SEEDS,
        "spec": {
            "id": "physics-capacitor-stored-energy",
            "relation": "product",
            "result": "stored_energy",
            "inputs": ["half", "charge", "voltage"],
            "variables": {
                "stored_energy": {"label": "蓄えられるエネルギー U", "unit": "mJ"},
                "half": {"label": "係数 1/2", "unit": "", "values": _HALF},
                "charge": {"label": "蓄えられた電気量 Q", "unit": "mC", "values": _CHARGE_MC},
                "voltage": {"label": "極板間の電位差 V", "unit": "V", "values": _VOLTAGE_V},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-energy": {"solve_for": "stored_energy", "worksheet_mode": "calculation-basic", "description": "U=(1/2)QVから蓄えられるエネルギーを求めます。"},
            "reverse-charge": {"solve_for": "charge", "worksheet_mode": "calculation-reverse", "description": "UとVから蓄えられた電気量Qを逆算します。"},
        },
    },
    "capacitor-core-concepts": {
        "generator": "retrieval",
        "title": "物理 コンデンサー：性質・接続・誘電体",
        "unit": "電気と磁気：コンデンサー",
        "skill": "capacitor-core-concepts",
        "seeds": _CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "充放電、電気容量、平行板、接続、誘電体の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _CAPACITOR_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "コンデンサーの基本関係を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _CAPACITOR_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "電気容量、面積・間隔、接続、誘電体を穴埋めで確認します。", "spec": {"mode": "fill", "items": _CAPACITOR_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "コンデンサーの基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _CAPACITOR_TF}},
        },
    },
}
