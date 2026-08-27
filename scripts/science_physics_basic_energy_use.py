"""Finite-answer retrieval topics for Physics Basics energy and its use."""

PHYSICS_BASIC_ENERGY_USE_PROBLEM_COUNT = 20


def _topic(title, skill, seeds, pairs, tf_items, fill_items, description):
    return {
        "generator": "retrieval",
        "title": title,
        "unit": "様々な物理現象とエネルギーの利用：エネルギーとその利用",
        "skill": skill,
        "problem_count": PHYSICS_BASIC_ENERGY_USE_PROBLEM_COUNT,
        "seeds": seeds,
        "modes": {
            "forward": {
                "label": "問い→答え",
                "worksheet_mode": "retrieval-forward",
                "description": description,
                "spec": {"mode": "forward", "left_label": "問い", "right_label": "答え", "items": pairs},
            },
            "reverse": {
                "label": "答え→問い",
                "worksheet_mode": "retrieval-reverse",
                "description": description + " 説明から名称も逆向きに確認します。",
                "spec": {"mode": "reverse", "left_label": "問い", "right_label": "答え", "items": pairs},
            },
            "fill": {
                "label": "穴埋め",
                "worksheet_mode": "retrieval-fill",
                "description": description + " 短い穴埋めで確認します。",
                "spec": {"mode": "fill", "items": fill_items},
            },
            "tf": {
                "label": "正誤",
                "worksheet_mode": "retrieval-tf",
                "description": description + " ○×で関係を確認します。",
                "spec": {"mode": "tf", "items": tf_items},
            },
        },
    }


_ENERGY_RESOURCES_PAIRS = [
    {"left": "水力発電", "right": ["高いところにある水の位置エネルギーを利用して水車を回し、発電機を動かす"]},
    {"left": "火力発電", "right": ["化石燃料の燃焼で得た熱で蒸気をつくり、タービンを回して発電機を動かす"]},
    {"left": "原子力発電", "right": ["ウランの核分裂で生じる熱を利用して蒸気をつくり、タービンを回して発電機を動かす"]},
    {"left": "太陽光発電", "right": ["太陽光を太陽電池で直接電気エネルギーに変換する"]},
    {"left": "風力発電", "right": ["風で羽根を回し、その回転で発電機を動かす"]},
    {"left": "物理基礎のエネルギー利用", "right": ["各種のエネルギーを電気エネルギーへ変換して利用することを中心に扱う"]},
]
_ENERGY_RESOURCES_TF = [
    {"item": "水力発電", "property": "水の位置エネルギーを利用して水車と発電機を動かす"},
    {"item": "火力発電", "property": "化石燃料の燃焼による熱を利用して蒸気をつくる"},
    {"item": "原子力発電", "property": "ウランの核分裂で生じる熱を利用して蒸気をつくる"},
    {"item": "太陽光発電", "property": "太陽電池で太陽光を直接電気エネルギーへ変換する"},
    {"item": "風力発電", "property": "風で羽根を回し発電機を動かす"},
]
_ENERGY_RESOURCES_FILL = [
    {"template": "水力発電では、高いところにある水の{answer}を利用して水車を回す。", "answer": ["位置エネルギー"]},
    {"template": "火力発電では、化石燃料の{answer}で得た熱を利用して蒸気をつくる。", "answer": ["燃焼"]},
    {"template": "原子力発電では、ウランの{answer}で生じる熱を利用する。", "answer": ["核分裂"]},
    {"template": "太陽光発電では、{answer}を用いて太陽光を直接電気エネルギーへ変換する。", "answer": ["太陽電池"]},
    {"template": "風力発電では、風で羽根を回し、その回転で{answer}を動かす。", "answer": ["発電機"]},
    {"template": "物理基礎では、各種のエネルギーを主に{answer}へ変換して利用することを扱う。", "answer": ["電気エネルギー"]},
]

_RADIATION_BASICS_PAIRS = [
    {"left": "α線", "right": ["ヘリウム原子核からなる粒子線"]},
    {"left": "β線", "right": ["原子核から飛び出す電子からなる粒子線"]},
    {"left": "γ線", "right": ["原子核から放出される電磁波"]},
    {"left": "中性子線", "right": ["電荷を持たない中性子からなる粒子線"]},
    {"left": "半減期", "right": ["放射能がはじめの半分になるまでの時間"]},
    {"left": "ベクレル（Bq）", "right": ["放射能の強さを表す単位"]},
    {"left": "グレイ（Gy）", "right": ["吸収線量を表す単位"]},
    {"left": "シーベルト（Sv）", "right": ["人体への影響を考慮した線量に用いる単位"]},
]
_RADIATION_BASICS_TF = [
    {"item": "α線", "property": "ヘリウム原子核からなる粒子線である"},
    {"item": "β線", "property": "原子核から飛び出す電子からなる粒子線である"},
    {"item": "γ線", "property": "原子核から放出される電磁波である"},
    {"item": "中性子線", "property": "電荷を持たない中性子からなる粒子線である"},
    {"item": "半減期", "property": "放射能がはじめの半分になるまでの時間である"},
    {"item": "ベクレル（Bq）", "property": "放射能の強さを表す単位である"},
    {"item": "グレイ（Gy）", "property": "吸収線量を表す単位である"},
    {"item": "シーベルト（Sv）", "property": "人体への影響を考慮した線量に用いる単位である"},
]
_RADIATION_BASICS_FILL = [
    {"template": "ヘリウム原子核からなる粒子線を{answer}という。", "answer": ["α線"]},
    {"template": "原子核から飛び出す電子からなる粒子線を{answer}という。", "answer": ["β線"]},
    {"template": "原子核から放出される電磁波を{answer}という。", "answer": ["γ線"]},
    {"template": "電荷を持たない中性子からなる粒子線を{answer}という。", "answer": ["中性子線"]},
    {"template": "放射能がはじめの半分になるまでの時間を{answer}という。", "answer": ["半減期"]},
    {"template": "放射能の強さを表す単位は{answer}である。", "answer": ["ベクレル", "Bq"]},
    {"template": "吸収線量を表す単位は{answer}である。", "answer": ["グレイ", "Gy"]},
    {"template": "人体への影響を考慮した線量に用いる単位は{answer}である。", "answer": ["シーベルト", "Sv"]},
]

_RADIATION_USE_PAIRS = [
    {"left": "医療での放射線利用", "right": ["X線撮影やCTによる診断、がんの治療など"]},
    {"left": "工業での放射線利用", "right": ["物を壊さず内部を調べる非破壊検査や厚さの測定など"]},
    {"left": "農業での放射線利用", "right": ["品種改良や害虫防除など"]},
    {"left": "原子力利用で安全面に求められること", "right": ["安全性を確保すること"]},
    {"left": "原子力利用で生じる廃棄物の課題", "right": ["放射性廃棄物を適切に処理・処分すること"]},
    {"left": "原子力施設を役目の終了後に解体する課題", "right": ["廃炉を安全に進めること"]},
]
_RADIATION_USE_TF = [
    {"item": "医療での放射線利用", "property": "X線撮影やCTによる診断、がんの治療などに利用される"},
    {"item": "工業での放射線利用", "property": "非破壊検査や厚さの測定などに利用される"},
    {"item": "農業での放射線利用", "property": "品種改良や害虫防除などに利用される"},
    {"item": "原子力利用の課題：安全", "property": "安全性を確保することが課題の一つである"},
    {"item": "原子力利用の課題：放射性廃棄物", "property": "適切な処理・処分が課題の一つである"},
    {"item": "原子力利用の課題：廃炉", "property": "役目を終えた施設の廃炉を安全に進めることが課題の一つである"},
]
_RADIATION_USE_FILL = [
    {"template": "医療では、放射線がX線撮影やCTによる{answer}などに利用される。", "answer": ["診断"]},
    {"template": "工業では、物を壊さず内部を調べる{answer}などに放射線が利用される。", "answer": ["非破壊検査"]},
    {"template": "農業では、放射線が作物の{answer}などに利用される。", "answer": ["品種改良"]},
    {"template": "原子力利用では、まず{answer}を確保することが重要な課題である。", "answer": ["安全性"]},
    {"template": "原子力利用では、{answer}を適切に処理・処分することが課題となる。", "answer": ["放射性廃棄物"]},
    {"template": "役目を終えた原子力施設については、{answer}を安全に進めることが課題となる。", "answer": ["廃炉"]},
]


PHYSICS_BASIC_ENERGY_USE_TOPICS = {
    "energy-resources-electric-conversion": _topic(
        "物理基礎 エネルギーとその利用 発電とエネルギー変換",
        "energy-resources-and-electric-conversion",
        tuple(range(11201, 11211)),
        _ENERGY_RESOURCES_PAIRS,
        _ENERGY_RESOURCES_TF,
        _ENERGY_RESOURCES_FILL,
        "水力・火力・原子力・太陽光・風力と電気エネルギーへの変換を反復します。",
    ),
    "radiation-basics": _topic(
        "物理基礎 エネルギーとその利用 放射線の基礎",
        "radiation-types-half-life-and-units",
        tuple(range(11301, 11311)),
        _RADIATION_BASICS_PAIRS,
        _RADIATION_BASICS_TF,
        _RADIATION_BASICS_FILL,
        "α線・β線・γ線・中性子線、半減期、放射線に関する基本単位を反復します。",
    ),
    "radiation-use-challenges": _topic(
        "物理基礎 エネルギーとその利用 放射線利用と原子力の課題",
        "radiation-use-and-nuclear-challenges",
        tuple(range(11401, 11411)),
        _RADIATION_USE_PAIRS,
        _RADIATION_USE_TF,
        _RADIATION_USE_FILL,
        "放射線の医療・工業・農業での利用と、原子力利用の基本的な課題を反復します。",
    ),
}
