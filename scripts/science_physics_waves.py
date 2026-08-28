"""Formal-course Physics checkpoints for wave propagation, phase, and water-wave interference.

These checkpoints intentionally use the existing finite-answer retrieval generator.
They cover only machine-verifiable facts from the current MEXT formal Physics wave
scope: Huygens' principle, reflection/refraction, sinusoidal-wave expression and
phase, and water-wave interference/diffraction. Standing waves are not duplicated
here because the current MEXT commentary treats them in Physics Basics.
"""

PHYSICS_WAVES_PROBLEM_COUNT = 20
_PROPAGATION_SEEDS = tuple(range(7731, 7741))
_PHASE_SEEDS = tuple(range(7741, 7751))
_INTERFERENCE_SEEDS = tuple(range(7751, 7761))

_PROPAGATION_PAIRS = [
    {"left": "ホイヘンスの原理", "right": ["波面上の各点を二次波の波源と考え、その包絡面を次の波面とする"]},
    {"left": "水面波の反射", "right": ["入射角と反射角が等しい"]},
    {"left": "水面波が異なる深さの領域へ進むとき", "right": ["波の速さが変わると屈折が起こる"]},
    {"left": "波が境界を越えても波源が同じ場合の振動数", "right": ["変わらない"]},
    {"left": "同じ振動数の波で速さが変わったときの波長", "right": ["速さに比例して変わる"]},
    {"left": "屈折率", "right": ["二つの媒質での波の速さの比と関係する量"]},
    {"left": "波面", "right": ["同じ位相で振動している点を連ねた面"]},
]

_PROPAGATION_FILL = [
    {"template": "ホイヘンスの原理では、波面上の各点を新たな{answer}の波源と考える。", "answer": ["二次波"]},
    {"template": "水面波の反射では、入射角と{answer}が等しい。", "answer": ["反射角"]},
    {"template": "波が境界を越えて速さが変わっても、同じ波源からの波の{answer}は変わらない。", "answer": ["振動数"]},
    {"template": "同じ振動数のまま波の速さが変化すると、波長は速さに{answer}して変化する。", "answer": ["比例"]},
    {"template": "同じ位相で振動している点を連ねた面を{answer}という。", "answer": ["波面"]},
]

_PROPAGATION_TF = [
    {"item": "ホイヘンスの原理", "property": "波面上の各点を二次波の波源として次の波面を考える"},
    {"item": "水面波の反射", "property": "入射角と反射角が等しい"},
    {"item": "境界を越える波の振動数", "property": "波源が同じなら変わらない"},
    {"item": "同じ振動数で速さが変わる波", "property": "波長も速さに比例して変わる"},
    {"item": "波面", "property": "同じ位相で振動している点を連ねた面である"},
    {"item": "水面波の屈折", "property": "波の速さが変わる境界で起こり得る"},
]

_PHASE_PAIRS = [
    {"left": "正弦波の振幅 A", "right": ["変位の最大値"]},
    {"left": "正弦波の周期 T", "right": ["同じ振動状態を繰り返す時間間隔"]},
    {"left": "正弦波の波長 λ", "right": ["同じ位相の最も近い二点の距離"]},
    {"left": "正弦波の位相", "right": ["波の振動状態が周期のどの段階にあるかを表す量"]},
    {"left": "+x方向へ進む正弦波の代表式", "right": ["y = A sin 2π(t/T - x/λ)"]},
    {"left": "距離が波長 λ だけ離れた二点", "right": ["同位相になる"]},
    {"left": "距離が λ/2 だけ離れた二点", "right": ["逆位相になる"]},
]

_PHASE_FILL = [
    {"template": "正弦波で変位の最大値を{answer}という。", "answer": ["振幅"]},
    {"template": "同じ振動状態を繰り返す時間間隔を{answer}という。", "answer": ["周期"]},
    {"template": "同じ位相の最も近い二点の距離を{answer}という。", "answer": ["波長"]},
    {"template": "+x方向へ進む正弦波は代表的に y=A sin 2π(t/T {answer} x/λ) と表せる。", "answer": ["-"]},
    {"template": "距離が波長 λ だけ離れた二点は{answer}になる。", "answer": ["同位相"]},
    {"template": "距離が λ/2 だけ離れた二点は{answer}になる。", "answer": ["逆位相"]},
]

_PHASE_TF = [
    {"item": "振幅 A", "property": "変位の最大値を表す"},
    {"item": "周期 T", "property": "同じ振動状態を繰り返す時間間隔を表す"},
    {"item": "波長 λ", "property": "同じ位相の最も近い二点の距離を表す"},
    {"item": "+x方向へ進む正弦波", "property": "y=A sin 2π(t/T-x/λ) の形で表せる"},
    {"item": "λだけ離れた二点", "property": "同位相になる"},
    {"item": "λ/2だけ離れた二点", "property": "逆位相になる"},
]

_INTERFERENCE_PAIRS = [
    {"left": "波の干渉", "right": ["複数の波が重なって振幅が強め合ったり弱め合ったりする現象"]},
    {"left": "二つの同位相波源からの経路差が mλ の点", "right": ["強め合う"]},
    {"left": "二つの同位相波源からの経路差が (m+1/2)λ の点", "right": ["弱め合う"]},
    {"left": "水面波の回折", "right": ["すき間や障害物の端の後方へ波が回り込んで広がる現象"]},
    {"left": "回折が目立ちやすい条件", "right": ["波長がすき間の幅に比べて大きい"]},
    {"left": "二つの波源の間隔を変える操作", "right": ["水面波の干渉模様の間隔や形を変える"]},
    {"left": "波源の振動数を大きくして波の速さが一定の場合", "right": ["波長が短くなる"]},
]

_INTERFERENCE_FILL = [
    {"template": "複数の波が重なり、強め合いや弱め合いが起こる現象を{answer}という。", "answer": ["干渉"]},
    {"template": "同位相の二波源からの経路差が mλ の点では、波は{answer}。", "answer": ["強め合う"]},
    {"template": "同位相の二波源からの経路差が (m+1/2)λ の点では、波は{answer}。", "answer": ["弱め合う"]},
    {"template": "波がすき間や障害物の端の後方へ回り込んで広がる現象を{answer}という。", "answer": ["回折"]},
    {"template": "一般に波長がすき間の幅に比べて大きいほど、{answer}が目立ちやすい。", "answer": ["回折"]},
]

_INTERFERENCE_TF = [
    {"item": "波の干渉", "property": "重なった波が強め合ったり弱め合ったりする現象である"},
    {"item": "同位相二波源で経路差 mλ の点", "property": "波が強め合う"},
    {"item": "同位相二波源で経路差 (m+1/2)λ の点", "property": "波が弱め合う"},
    {"item": "水面波の回折", "property": "すき間や障害物の端の後方へ波が回り込んで広がる"},
    {"item": "回折", "property": "波長がすき間の幅に比べて大きいほど目立ちやすい"},
    {"item": "波の速さが一定で振動数を大きくした場合", "property": "波長は短くなる"},
]

PHYSICS_WAVES_TOPICS = {
    "wave-propagation-core-concepts": {
        "generator": "retrieval",
        "title": "物理 波：波の伝わり方・反射・屈折",
        "unit": "波：波の伝わり方",
        "skill": "wave-propagation-core-concepts",
        "seeds": _PROPAGATION_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "ホイヘンスの原理、波面、水面波の反射・屈折を項目から確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _PROPAGATION_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "ホイヘンスの原理、波面、水面波の反射・屈折を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _PROPAGATION_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "波の伝わり方、反射、屈折の基本関係を穴埋めで確認します。", "spec": {"mode": "fill", "items": _PROPAGATION_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "波の伝わり方、反射、屈折の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _PROPAGATION_TF}},
        },
    },
    "wave-sine-phase-core-concepts": {
        "generator": "retrieval",
        "title": "物理 波：正弦波の式と位相",
        "unit": "波：波の伝わり方",
        "skill": "wave-sine-phase-core-concepts",
        "seeds": _PHASE_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "正弦波の振幅・周期・波長・位相と代表的な波の式を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _PHASE_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "正弦波の式と位相を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _PHASE_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "正弦波の式、振幅、周期、波長、位相を穴埋めで確認します。", "spec": {"mode": "fill", "items": _PHASE_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "正弦波の式と位相の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _PHASE_TF}},
        },
    },
    "water-wave-interference-diffraction-concepts": {
        "generator": "retrieval",
        "title": "物理 波：水面波の干渉と回折",
        "unit": "波：波の伝わり方",
        "skill": "water-wave-interference-diffraction-concepts",
        "seeds": _INTERFERENCE_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "水面波の干渉、強め合い・弱め合い、回折を項目から確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _INTERFERENCE_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "水面波の干渉と回折を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _INTERFERENCE_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "水面波の干渉条件と回折を穴埋めで確認します。", "spec": {"mode": "fill", "items": _INTERFERENCE_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "水面波の干渉と回折の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _INTERFERENCE_TF}},
        },
    },
}
