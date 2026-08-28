"""Formal-course Physics checkpoints for universal gravitation and planetary motion.

The numerical checkpoint keeps the inverse-square term learner-visible as
``1/r^2`` and reuses the shared reversible product relation.  This avoids
hiding a squared-distance transformation inside the generator while still
practising the SI form of Newton's law of universal gravitation with
G = 6.67e-11 N m^2 / kg^2.

The retrieval checkpoints cover the same law and Kepler's three laws with
finite, unambiguous answers.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics, ``universal gravitation``: planetary motion (including Kepler's
laws), the law of universal gravitation, motion of planets/satellites, and
gravitational potential energy.
"""

PHYSICS_GRAVITATION_PROBLEM_COUNT = 20
_FORCE_SEEDS = tuple(range(7601, 7611))
_GRAVITATION_CONCEPT_SEEDS = tuple(range(7611, 7621))
_KEPLER_SEEDS = tuple(range(7621, 7631))

_G = 6.67e-11
_MASS_1_VALUES = [1_000_000, 2_000_000, 3_000_000, 4_000_000, 5_000_000]
_MASS_2_VALUES = [2_000_000, 3_000_000, 4_000_000, 5_000_000, 6_000_000]
_INVERSE_SQUARE_VALUES = [1, 0.25, 0.0625, 0.04, 0.01]

_GRAVITATION_PAIRS = [
    {"left": "万有引力の向き", "right": ["2物体を結ぶ直線上で互いに引き合う向き"]},
    {"left": "万有引力と2物体の質量", "right": ["2物体の質量の積に比例する"]},
    {"left": "万有引力と中心間距離", "right": ["中心間距離の2乗に反比例する"]},
    {"left": "万有引力定数 G", "right": ["約6.67×10^-11 N·m²/kg²"]},
    {"left": "中心間距離だけを2倍にしたときの万有引力", "right": ["元の1/4になる"]},
    {"left": "一方の質量だけを3倍にしたときの万有引力", "right": ["元の3倍になる"]},
]

_GRAVITATION_FILL = [
    {"template": "万有引力の大きさは、2物体の質量の{answer}に比例する。", "answer": ["積"]},
    {"template": "万有引力の大きさは、2物体の中心間距離の{answer}に反比例する。", "answer": ["2乗", "二乗"]},
    {"template": "万有引力は、2物体を結ぶ直線上で互いに{answer}向きに働く。", "answer": ["引き合う", "引き合う向き"]},
    {"template": "万有引力定数 G は、高校物理の基本計算では約{answer} N·m²/kg² として扱う。", "answer": ["6.67×10^-11", "6.67e-11"]},
    {"template": "他の条件を変えず中心間距離を2倍にすると、万有引力は元の{answer}になる。", "answer": ["1/4", "4分の1"]},
    {"template": "他の条件を変えず一方の質量を3倍にすると、万有引力は元の{answer}になる。", "answer": ["3倍"]},
]

_GRAVITATION_TF = [
    {"item": "万有引力", "property": "2物体の質量の積に比例する"},
    {"item": "万有引力", "property": "中心間距離の2乗に反比例する"},
    {"item": "万有引力", "property": "2物体を結ぶ直線上で互いに引き合う向きに働く"},
    {"item": "中心間距離を2倍にした場合", "property": "他条件が同じなら万有引力は1/4になる"},
    {"item": "一方の質量を3倍にした場合", "property": "他条件が同じなら万有引力は3倍になる"},
    {"item": "万有引力定数 G", "property": "高校物理の基本計算では約6.67×10^-11 N·m²/kg²を用いる"},
]

_KEPLER_PAIRS = [
    {"left": "ケプラー第1法則", "right": ["惑星の軌道は太陽を一つの焦点とする楕円である"]},
    {"left": "ケプラー第2法則", "right": ["太陽と惑星を結ぶ線分が等時間に描く面積は等しい"]},
    {"left": "ケプラー第3法則", "right": ["公転周期の2乗は軌道長半径の3乗に比例する"]},
    {"left": "ケプラー第2法則の面積速度", "right": ["一定である"]},
    {"left": "同じ中心天体を回る惑星の T²/a³", "right": ["一定である比として扱える"]},
    {"left": "軌道長半径が大きい惑星の公転周期", "right": ["第3法則から一般に長くなる"]},
]

_KEPLER_FILL = [
    {"template": "ケプラー第1法則では、惑星の軌道を太陽を一つの焦点とする{answer}とする。", "answer": ["楕円"]},
    {"template": "ケプラー第2法則では、太陽と惑星を結ぶ線分が等時間に描く{answer}が等しい。", "answer": ["面積"]},
    {"template": "ケプラー第2法則は、惑星の面積速度が{answer}であることを表す。", "answer": ["一定"]},
    {"template": "ケプラー第3法則では、公転周期 T の2乗は軌道長半径 a の{answer}に比例する。", "answer": ["3乗", "三乗"]},
    {"template": "同じ中心天体を回る惑星では、ケプラー第3法則から T²/a³ は{answer}として扱える。", "answer": ["一定", "一定の比"]},
    {"template": "同じ中心天体を回る惑星では、軌道長半径が大きいほど公転周期は一般に{answer}。", "answer": ["長くなる", "長い"]},
]

_KEPLER_TF = [
    {"item": "ケプラー第1法則", "property": "惑星の軌道を太陽を一つの焦点とする楕円として表す"},
    {"item": "ケプラー第2法則", "property": "太陽と惑星を結ぶ線分が等時間に描く面積は等しい"},
    {"item": "ケプラー第2法則", "property": "面積速度が一定であることを表す"},
    {"item": "ケプラー第3法則", "property": "公転周期の2乗は軌道長半径の3乗に比例する"},
    {"item": "同じ中心天体を回る惑星", "property": "T²/a³ を一定の比として扱える"},
    {"item": "軌道長半径が大きい惑星", "property": "第3法則から公転周期は一般に長くなる"},
]

PHYSICS_GRAVITATION_TOPICS = {
    "universal-gravitation-force": {
        "generator": "formula",
        "title": "物理 万有引力：F = Gm₁m₂/r²",
        "unit": "様々な運動：万有引力",
        "skill": "universal-gravitation-force",
        "formula": "F = Gm₁m₂/r² = Gm₁m₂(1/r²), G = 6.67×10^-11 N·m²/kg²",
        "seeds": _FORCE_SEEDS,
        "spec": {
            "id": "physics-universal-gravitation-force",
            "relation": "product",
            "result": "force",
            "inputs": ["gravitational_constant", "mass_1", "mass_2", "inverse_square_distance"],
            "variables": {
                "force": {"label": "万有引力の大きさ F", "unit": "N"},
                "gravitational_constant": {"label": "万有引力定数 G", "unit": "N·m²/kg²", "values": [_G]},
                "mass_1": {"label": "物体1の質量 m₁", "unit": "kg", "values": _MASS_1_VALUES},
                "mass_2": {"label": "物体2の質量 m₂", "unit": "kg", "values": _MASS_2_VALUES},
                "inverse_square_distance": {"label": "中心間距離の逆2乗 1/r²", "unit": "m⁻²", "values": _INVERSE_SQUARE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-force": {"solve_for": "force", "worksheet_mode": "calculation-basic", "description": "F = Gm₁m₂/r² を、G と 1/r² を明示したSI値から計算します。"},
            "reverse-mass": {"solve_for": "mass_1", "worksheet_mode": "calculation-reverse", "description": "万有引力 F、G、もう一方の質量、1/r² から未知の質量を逆算します。"},
            "reverse-inverse-square": {"solve_for": "inverse_square_distance", "worksheet_mode": "calculation-reverse", "description": "万有引力 F、G、2物体の質量から中心間距離の逆2乗 1/r² を逆算します。"},
        },
    },
    "universal-gravitation-core-concepts": {
        "generator": "retrieval",
        "title": "物理 万有引力：法則の基本",
        "unit": "様々な運動：万有引力",
        "skill": "universal-gravitation-core-concepts",
        "seeds": _GRAVITATION_CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "万有引力の向き、質量・距離への依存、G の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _GRAVITATION_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "万有引力の基本関係を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _GRAVITATION_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "万有引力の比例・反比例、向き、定数を穴埋めで確認します。", "spec": {"mode": "fill", "items": _GRAVITATION_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "万有引力の法則を○×で確認します。", "spec": {"mode": "tf", "items": _GRAVITATION_TF}},
        },
    },
    "kepler-laws-core-concepts": {
        "generator": "retrieval",
        "title": "物理 万有引力：ケプラーの法則",
        "unit": "様々な運動：万有引力",
        "skill": "kepler-laws-core-concepts",
        "seeds": _KEPLER_SEEDS,
        "modes": {
            "forward": {"label": "法則→内容", "worksheet_mode": "retrieval-forward", "description": "ケプラー第1・第2・第3法則の基本内容を確認します。", "spec": {"mode": "forward", "left_label": "法則・項目", "right_label": "内容", "items": _KEPLER_PAIRS}},
            "reverse": {"label": "内容→法則", "worksheet_mode": "retrieval-reverse", "description": "惑星運動の記述から対応するケプラー法則・項目を一意に取り出します。", "spec": {"mode": "reverse", "left_label": "法則・項目", "right_label": "内容", "items": _KEPLER_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "楕円軌道、面積速度、第3法則の T² と a³ の関係を穴埋めで確認します。", "spec": {"mode": "fill", "items": _KEPLER_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "ケプラーの3法則と基本的な帰結を○×で確認します。", "spec": {"mode": "tf", "items": _KEPLER_TF}},
        },
    },
}
