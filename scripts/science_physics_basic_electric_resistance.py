"""Finite-answer retrieval topics for Physics Basics electric resistance."""

PHYSICS_BASIC_ELECTRIC_RESISTANCE_PROBLEM_COUNT = 20
PHYSICS_BASIC_ELECTRIC_RESISTANCE_SEEDS = tuple(range(11001, 11011))

_RESISTANCE_PAIR_ITEMS = [
    {"left": "電気抵抗", "right": ["電流の流れにくさを表す量"]},
    {"left": "抵抗率", "right": ["物質の種類によって異なる、電気抵抗に関係する物質固有の量"]},
    {"left": "導体", "right": ["電流が流れやすい物質"]},
    {"left": "絶縁体", "right": ["電流が流れにくい物質"]},
    {"left": "金属中の電流の担い手", "right": ["自由電子"]},
    {"left": "同じ物質・同じ断面積で導体を長くしたときの抵抗", "right": ["長さに比例して大きくなる"]},
    {"left": "同じ物質・同じ長さで導体の断面積を大きくしたときの抵抗", "right": ["断面積に反比例して小さくなる"]},
]

_RESISTANCE_TF_ITEMS = [
    {"item": "同じ物質・同じ断面積の導体の電気抵抗", "property": "長さに比例する"},
    {"item": "同じ物質・同じ長さの導体の電気抵抗", "property": "断面積に反比例する"},
    {"item": "抵抗率", "property": "物質の種類によって異なる"},
    {"item": "金属中の電流", "property": "自由電子の流れによる"},
    {"item": "絶縁体", "property": "電流が流れにくい"},
]

_RESISTANCE_FILL_ITEMS = [
    {"template": "同じ物質・同じ断面積の導体では、電気抵抗は導体の{answer}に比例する。", "answer": ["長さ"]},
    {"template": "同じ物質・同じ長さの導体では、電気抵抗は導体の{answer}に反比例する。", "answer": ["断面積"]},
    {"template": "物質の種類によって異なる、電気抵抗に関係する物質固有の量を{answer}という。", "answer": ["抵抗率"]},
    {"template": "金属中の電流は{answer}の流れによる。", "answer": ["自由電子"]},
    {"template": "電流が流れやすい物質を{answer}という。", "answer": ["導体"]},
    {"template": "電流が流れにくい物質を{answer}という。", "answer": ["絶縁体"]},
]

PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS = {
    "electric-resistance-concepts": {
        "generator": "retrieval",
        "title": "物理基礎 電気 物質と電気抵抗",
        "unit": "様々な物理現象とエネルギーの利用：電気",
        "skill": "material-and-electric-resistance",
        "problem_count": PHYSICS_BASIC_ELECTRIC_RESISTANCE_PROBLEM_COUNT,
        "seeds": PHYSICS_BASIC_ELECTRIC_RESISTANCE_SEEDS,
        "modes": {
            "forward": {
                "label": "問い→答え",
                "worksheet_mode": "retrieval-forward",
                "description": "電気抵抗、抵抗率、導体、絶縁体、自由電子と導体の形状による抵抗変化を取り出す基礎反復です。",
                "spec": {"mode": "forward", "left_label": "問い", "right_label": "答え", "items": _RESISTANCE_PAIR_ITEMS},
            },
            "reverse": {
                "label": "答え→問い",
                "worksheet_mode": "retrieval-reverse",
                "description": "電気抵抗と抵抗率、導体の長さ・断面積との関係を逆向きにも確認します。",
                "spec": {"mode": "reverse", "left_label": "問い", "right_label": "答え", "items": _RESISTANCE_PAIR_ITEMS},
            },
            "fill": {
                "label": "穴埋め",
                "worksheet_mode": "retrieval-fill",
                "description": "物質と電気抵抗の基本事項を短い穴埋めで確認します。",
                "spec": {"mode": "fill", "items": _RESISTANCE_FILL_ITEMS},
            },
            "tf": {
                "label": "正誤",
                "worksheet_mode": "retrieval-tf",
                "description": "導体の長さ・断面積と抵抗、抵抗率、自由電子について○×で確認します。",
                "spec": {"mode": "tf", "items": _RESISTANCE_TF_ITEMS},
            },
        },
    },
}
