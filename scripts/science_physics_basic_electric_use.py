"""Finite-answer retrieval topics for Physics Basics electricity use."""

PHYSICS_BASIC_ELECTRIC_USE_PROBLEM_COUNT = 20
PHYSICS_BASIC_ELECTRIC_USE_SEEDS = tuple(range(11101, 11111))

_ELECTRIC_USE_PAIR_ITEMS = [
    {"left": "交流", "right": ["電流の向きや大きさが周期的に変化する電流"]},
    {"left": "直流", "right": ["電流の向きが変化しない電流"]},
    {"left": "変圧器", "right": ["交流の電圧を上げたり下げたりする装置"]},
    {"left": "整流", "right": ["交流を直流に変換すること"]},
    {"left": "高い電圧で送電する主な理由", "right": ["同じ電力なら電流を小さくでき、送電線のジュール熱による損失を減らせるため"]},
    {"left": "発電機の基本的な仕組み", "right": ["電磁誘導を利用して電気エネルギーを得る"]},
    {"left": "電波の利用例", "right": ["ラジオ放送などの通信"]},
]

_ELECTRIC_USE_TF_ITEMS = [
    {"item": "交流", "property": "変圧器を用いて電圧を変えやすい"},
    {"item": "同じ電力を送るときの高電圧送電", "property": "送電線を流れる電流を小さくできる"},
    {"item": "送電線の電力損失", "property": "電気抵抗によるジュール熱として生じる"},
    {"item": "整流", "property": "交流を直流へ変換する"},
    {"item": "ラジオ放送", "property": "電磁波である電波を利用する"},
]

_ELECTRIC_USE_FILL_ITEMS = [
    {"template": "交流の電圧を上げたり下げたりする装置を{answer}という。", "answer": ["変圧器"]},
    {"template": "交流を直流に変換することを{answer}という。", "answer": ["整流"]},
    {"template": "同じ電力を送るなら、送電電圧を高くすると送電線を流れる{answer}を小さくできる。", "answer": ["電流"]},
    {"template": "送電線では電気抵抗のため、電気エネルギーの一部が{answer}として失われる。", "answer": ["ジュール熱"]},
    {"template": "発電機は基本的に{answer}を利用して電気エネルギーを得る。", "answer": ["電磁誘導"]},
    {"template": "ラジオ放送などの通信には、電磁波の一種である{answer}が利用される。", "answer": ["電波"]},
]

PHYSICS_BASIC_ELECTRIC_USE_TOPICS = {
    "electric-use-concepts": {
        "generator": "retrieval",
        "title": "物理基礎 電気 電気の利用",
        "unit": "様々な物理現象とエネルギーの利用：電気",
        "skill": "generation-transmission-and-electric-use",
        "problem_count": PHYSICS_BASIC_ELECTRIC_USE_PROBLEM_COUNT,
        "seeds": PHYSICS_BASIC_ELECTRIC_USE_SEEDS,
        "modes": {
            "forward": {
                "label": "問い→答え",
                "worksheet_mode": "retrieval-forward",
                "description": "交流・直流、変圧器、整流、発電、送電、電磁波利用の基本事項を取り出す反復です。",
                "spec": {"mode": "forward", "left_label": "問い", "right_label": "答え", "items": _ELECTRIC_USE_PAIR_ITEMS},
            },
            "reverse": {
                "label": "答え→問い",
                "worksheet_mode": "retrieval-reverse",
                "description": "発電・送電・電気利用の基本事項を説明から逆向きにも確認します。",
                "spec": {"mode": "reverse", "left_label": "問い", "right_label": "答え", "items": _ELECTRIC_USE_PAIR_ITEMS},
            },
            "fill": {
                "label": "穴埋め",
                "worksheet_mode": "retrieval-fill",
                "description": "発電・送電・交流の利用を短い穴埋めで確認します。",
                "spec": {"mode": "fill", "items": _ELECTRIC_USE_FILL_ITEMS},
            },
            "tf": {
                "label": "正誤",
                "worksheet_mode": "retrieval-tf",
                "description": "交流、変圧、送電損失、整流、電磁波利用について○×で確認します。",
                "spec": {"mode": "tf", "items": _ELECTRIC_USE_TF_ITEMS},
            },
        },
    },
}
