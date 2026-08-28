"""Formal-course Physics electric-circuit checkpoints.

Current MEXT Physics treats basic laws of electric circuits and explicitly
includes temperature change of resistivity, source internal resistance, and
semiconductors in the scope. Numerical drills below keep circuit direction,
units, and algebra learner-visible and reuse existing shared relations.
"""

PHYSICS_CIRCUIT_PROBLEM_COUNT = 20
_RESISTIVITY_SEEDS = tuple(range(7961, 7971))
_INTERNAL_RESISTANCE_SEEDS = tuple(range(7971, 7981))
_KCL_SEEDS = tuple(range(7981, 7991))
_CONCEPT_SEEDS = tuple(range(7991, 8001))

_RESISTIVITY_OHM_MM2_PER_M = [0.017, 0.028, 0.05, 0.08, 0.1]
_LENGTH_M = [2, 5, 10, 20, 40, 50]
_AREA_MM2 = [0.5, 1, 2, 2.5, 4, 5]
_TERMINAL_VOLTAGE_V = [1.2, 2.4, 4.8, 6, 9, 12]
_INTERNAL_RESISTANCE_OHM = [0.1, 0.2, 0.5, 1, 2]
_CURRENT_A = [0.5, 1, 1.5, 2, 3]
_BRANCH_CURRENT_A = [0.5, 1, 1.5, 2, 2.5, 3]

_CIRCUIT_PAIRS = [
    {"left": "抵抗率 ρ", "right": ["物質の電気抵抗の性質を表す量で、導線では R=ρl/S と関係付けられる"]},
    {"left": "導線の長さ l を大きくする", "right": ["抵抗率と断面積が同じなら電気抵抗 R は大きくなる"]},
    {"left": "導線の断面積 S を大きくする", "right": ["抵抗率と長さが同じなら電気抵抗 R は小さくなる"]},
    {"left": "抵抗率の温度変化", "right": ["抵抗率は温度によって変化する"]},
    {"left": "電源の内部抵抗 r", "right": ["放電時の端子電圧 V と起電力 E を E=V+rI で関係付ける"]},
    {"left": "キルヒホッフの第1法則", "right": ["接続点に流れ込む電流の和と流れ出す電流の和は等しい"]},
    {"left": "キルヒホッフの第2法則", "right": ["閉回路を一周した電位差の代数和は0になる"]},
    {"left": "半導体", "right": ["電気伝導が温度や不純物などの条件によって大きく変化し得る物質"]},
]

_CIRCUIT_FILL = [
    {"template": "一様な導線の抵抗は、抵抗率ρ、長さl、断面積Sを用いて R={answer} と表される。", "answer": ["ρl/S", "ρ l/S"]},
    {"template": "抵抗率と断面積が一定なら、導線を長くすると抵抗は{answer}なる。", "answer": ["大きく", "大きくなる"]},
    {"template": "抵抗率と長さが一定なら、導線の断面積を大きくすると抵抗は{answer}なる。", "answer": ["小さく", "小さくなる"]},
    {"template": "放電中の電源で、起電力E、端子電圧V、内部抵抗r、電流Iの関係は E=V+{answer} である。", "answer": ["rI", "r I"]},
    {"template": "キルヒホッフの第1法則では、接続点に流れ込む電流の和と流れ出す電流の和は{answer}。", "answer": ["等しい"]},
    {"template": "キルヒホッフの第2法則では、閉回路を一周した電位差の代数和は{answer}になる。", "answer": ["0", "0 V"]},
]

_CIRCUIT_TF = [
    {"item": "一様な導線の抵抗", "property": "R=ρl/Sで表される"},
    {"item": "同じ材質・断面積の導線", "property": "長いほど抵抗は大きい"},
    {"item": "同じ材質・長さの導線", "property": "断面積が大きいほど抵抗は小さい"},
    {"item": "抵抗率", "property": "温度によって変化する"},
    {"item": "内部抵抗をもつ電源の放電", "property": "E=V+rIで端子電圧と起電力を関係付けられる"},
    {"item": "キルヒホッフの第1法則", "property": "接続点で流入電流の和と流出電流の和が等しい"},
    {"item": "キルヒホッフの第2法則", "property": "閉回路一周の電位差の代数和が0になる"},
]

PHYSICS_CIRCUIT_TOPICS = {
    "circuit-resistivity-geometry-numeric": {
        "generator": "formula",
        "title": "物理 電気回路：抵抗率・長さ・断面積",
        "unit": "電気と磁気：電気回路",
        "skill": "circuit-resistivity-geometry-numeric",
        "formula": "一様な導線で R=ρl/S。ρ[Ω·mm²/m]、l[m]、S[mm²] を用いる",
        "seeds": _RESISTIVITY_SEEDS,
        "spec": {
            "id": "physics-circuit-resistivity-geometry",
            "relation": "product-over-divisor",
            "result": "resistance",
            "inputs": ["resistivity", "length", "area"],
            "variables": {
                "resistance": {"label": "導線の抵抗 R", "unit": "Ω"},
                "resistivity": {"label": "抵抗率 ρ", "unit": "Ω·mm²/m", "values": _RESISTIVITY_OHM_MM2_PER_M},
                "length": {"label": "導線の長さ l", "unit": "m", "values": _LENGTH_M},
                "area": {"label": "導線の断面積 S", "unit": "mm²", "values": _AREA_MM2},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-resistance": {"solve_for": "resistance", "worksheet_mode": "calculation-basic", "description": "R=ρl/Sから一様な導線の抵抗を求めます。"},
            "reverse-resistivity": {"solve_for": "resistivity", "worksheet_mode": "calculation-reverse", "description": "R、l、Sから抵抗率ρを逆算します。"},
            "reverse-area": {"solve_for": "area", "worksheet_mode": "calculation-reverse", "description": "R、ρ、lから導線の断面積Sを逆算します。"},
        },
    },
    "circuit-internal-resistance-numeric": {
        "generator": "formula",
        "title": "物理 電気回路：電源の内部抵抗",
        "unit": "電気と磁気：電気回路",
        "skill": "circuit-internal-resistance-numeric",
        "formula": "放電時、電流Iの向きを電源から外部回路へ流れる向きとして E=V+rI",
        "seeds": _INTERNAL_RESISTANCE_SEEDS,
        "spec": {
            "id": "physics-circuit-internal-resistance",
            "relation": "offset-product",
            "result": "emf",
            "inputs": ["terminal_voltage", "internal_resistance", "current"],
            "variables": {
                "emf": {"label": "電源の起電力 E", "unit": "V"},
                "terminal_voltage": {"label": "放電時の端子電圧 V", "unit": "V", "values": _TERMINAL_VOLTAGE_V},
                "internal_resistance": {"label": "電源の内部抵抗 r", "unit": "Ω", "values": _INTERNAL_RESISTANCE_OHM},
                "current": {"label": "電源から外部回路へ流れる電流 I", "unit": "A", "values": _CURRENT_A},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-emf": {"solve_for": "emf", "worksheet_mode": "calculation-basic", "description": "放電時のE=V+rIから起電力を求めます。"},
            "reverse-terminal-voltage": {"solve_for": "terminal_voltage", "worksheet_mode": "calculation-reverse", "description": "放電時のE、r、Iから端子電圧Vを逆算します。"},
            "reverse-internal-resistance": {"solve_for": "internal_resistance", "worksheet_mode": "calculation-reverse", "description": "放電時のE、V、Iから内部抵抗rを逆算します。"},
        },
    },
    "circuit-kirchhoff-junction-numeric": {
        "generator": "formula",
        "title": "物理 電気回路：キルヒホッフ第1法則",
        "unit": "電気と磁気：電気回路",
        "skill": "circuit-kirchhoff-junction-numeric",
        "formula": "1つの接続点で Iin が流入し、I1、I2 が流出するとき Iin=I1+I2",
        "seeds": _KCL_SEEDS,
        "spec": {
            "id": "physics-circuit-kirchhoff-junction",
            "relation": "sum",
            "result": "incoming_current",
            "inputs": ["outgoing_current_1", "outgoing_current_2"],
            "variables": {
                "incoming_current": {"label": "接続点へ流れ込む電流 Iin", "unit": "A"},
                "outgoing_current_1": {"label": "接続点から流れ出す電流 I1", "unit": "A", "values": _BRANCH_CURRENT_A},
                "outgoing_current_2": {"label": "接続点から流れ出す電流 I2", "unit": "A", "values": _BRANCH_CURRENT_A},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-incoming-current": {"solve_for": "incoming_current", "worksheet_mode": "calculation-basic", "description": "流入1本・流出2本の接続点で流入電流を求めます。"},
            "reverse-outgoing-current": {"solve_for": "outgoing_current_1", "worksheet_mode": "calculation-reverse", "description": "流入電流と一方の流出電流から、もう一方の流出電流を求めます。"},
        },
    },
    "circuit-core-concepts": {
        "generator": "retrieval",
        "title": "物理 電気回路：抵抗率・内部抵抗・キルヒホッフ",
        "unit": "電気と磁気：電気回路",
        "skill": "circuit-core-concepts",
        "seeds": _CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "抵抗率、内部抵抗、キルヒホッフの法則、半導体の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _CIRCUIT_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "電気回路の基本法則を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _CIRCUIT_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "抵抗率、内部抵抗、キルヒホッフの関係を穴埋めで確認します。", "spec": {"mode": "fill", "items": _CIRCUIT_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "電気回路の基本法則を○×で確認します。", "spec": {"mode": "tf", "items": _CIRCUIT_TF}},
        },
    },
}
