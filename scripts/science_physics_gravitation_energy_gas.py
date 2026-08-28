"""Formal-course Physics checkpoints for gravitational potential energy and gas molecular motion.

The gravitational-potential-energy numeric checkpoint reuses the shared
reversible product relation by making the signed coefficient -G learner-visible:
U = (-G) m1 m2 (1/r), with U(infinity) = 0.  This preserves the negative sign
and reciprocal-distance dependence in the worksheet data rather than hiding
them inside generator state.

The retrieval checkpoints use finite, unambiguous answers for gravitational
potential energy and the first gas-molecular-motion concepts in the current
MEXT Physics sequence.
"""

PHYSICS_GRAV_ENERGY_GAS_PROBLEM_COUNT = 20
_POTENTIAL_SEEDS = tuple(range(7631, 7641))
_POTENTIAL_CONCEPT_SEEDS = tuple(range(7641, 7651))
_GAS_CONCEPT_SEEDS = tuple(range(7651, 7661))

_G = 6.67e-11
_NEGATIVE_G = -_G
_MASS_1_VALUES = [1_000_000, 2_000_000, 3_000_000, 4_000_000, 5_000_000]
_MASS_2_VALUES = [2_000_000, 3_000_000, 4_000_000, 5_000_000, 6_000_000]
_INVERSE_DISTANCE_VALUES = [1, 0.5, 0.25, 0.1, 0.05]

_POTENTIAL_PAIRS = [
    {"left": "万有引力による位置エネルギーの基準", "right": ["2物体が無限に離れた状態を0とする"]},
    {"left": "有限の正の距離にある2物体の万有引力による位置エネルギー", "right": ["無限遠を0とすると負になる"]},
    {"left": "万有引力による位置エネルギーと中心間距離", "right": ["U = -GMm/r で表される"]},
    {"left": "2物体を近づけたときの万有引力による位置エネルギー", "right": ["より小さくなり負の値の絶対値が大きくなる"]},
    {"left": "2物体を無限遠まで離したときの位置エネルギー", "right": ["0に近づく"]},
    {"left": "万有引力による位置エネルギーの大きさ", "right": ["GMm/r で与えられる"]},
]

_POTENTIAL_FILL = [
    {"template": "万有引力による位置エネルギーでは、2物体が無限に離れた状態を{answer}とする。", "answer": ["0", "ゼロ"]},
    {"template": "無限遠を0とすると、有限の正の距離 r にある2物体の位置エネルギー U は{answer}になる。", "answer": ["負", "負の値"]},
    {"template": "万有引力による位置エネルギーは U = {answer} と表される。", "answer": ["-GMm/r"]},
    {"template": "他の条件が同じなら2物体を近づけるほど、位置エネルギーはより{answer}なる。", "answer": ["小さく", "小さくなる"]},
    {"template": "2物体を無限遠まで離すと、万有引力による位置エネルギーは{answer}に近づく。", "answer": ["0", "ゼロ"]},
    {"template": "万有引力による位置エネルギーの絶対値は {answer} で与えられる。", "answer": ["GMm/r"]},
]

_POTENTIAL_TF = [
    {"item": "万有引力による位置エネルギー", "property": "無限遠を0とする基準を用いる"},
    {"item": "有限の正の距離にある2物体", "property": "無限遠を0とした万有引力による位置エネルギーは負である"},
    {"item": "万有引力による位置エネルギー", "property": "U = -GMm/r で表される"},
    {"item": "2物体を近づける操作", "property": "他条件が同じなら位置エネルギーをより小さくする"},
    {"item": "2物体を無限遠まで離す操作", "property": "万有引力による位置エネルギーを0に近づける"},
    {"item": "万有引力による位置エネルギーの絶対値", "property": "GMm/r で与えられる"},
]

_GAS_PAIRS = [
    {"left": "気体の圧力の微視的な起源", "right": ["気体分子が容器の壁に衝突すること"]},
    {"left": "理想気体の状態方程式", "right": ["pV = nRT"]},
    {"left": "ボイルの法則", "right": ["温度一定で圧力 p と体積 V の積が一定"]},
    {"left": "シャルルの法則", "right": ["圧力一定で体積 V は絶対温度 T に比例する"]},
    {"left": "気体分子1個あたりの平均運動エネルギー", "right": ["絶対温度に比例する"]},
    {"left": "理想気体全体の内部エネルギー", "right": ["絶対温度に比例して変化する"]},
]

_GAS_FILL = [
    {"template": "気体の圧力は、気体分子が容器の{answer}に衝突することと関連付けて理解する。", "answer": ["壁"]},
    {"template": "理想気体の状態方程式は {answer} と表される。", "answer": ["pV=nRT", "pV = nRT"]},
    {"template": "ボイルの法則では、温度一定のとき pV は{answer}である。", "answer": ["一定"]},
    {"template": "シャルルの法則では、圧力一定のとき体積 V は絶対温度 T に{answer}する。", "answer": ["比例"]},
    {"template": "気体分子1個あたりの平均運動エネルギーは、絶対温度に{answer}する。", "answer": ["比例"]},
    {"template": "理想気体全体の内部エネルギーは、絶対温度に{answer}して変化する。", "answer": ["比例"]},
]

_GAS_TF = [
    {"item": "気体の圧力", "property": "気体分子の容器壁への衝突と関連付けて説明できる"},
    {"item": "理想気体", "property": "状態方程式 pV = nRT を扱う"},
    {"item": "ボイルの法則", "property": "温度一定なら pV が一定である"},
    {"item": "シャルルの法則", "property": "圧力一定なら V は絶対温度 T に比例する"},
    {"item": "気体分子1個あたりの平均運動エネルギー", "property": "絶対温度に比例する"},
    {"item": "理想気体全体の内部エネルギー", "property": "絶対温度に比例して変化する"},
]

PHYSICS_GRAV_ENERGY_GAS_TOPICS = {
    "gravitational-potential-energy": {
        "generator": "formula",
        "title": "物理 万有引力：位置エネルギー U = -GMm/r",
        "unit": "様々な運動：万有引力",
        "skill": "gravitational-potential-energy",
        "formula": "U = -GMm/r = (-G)mM(1/r), U(∞)=0, G = 6.67×10^-11 N·m²/kg²",
        "seeds": _POTENTIAL_SEEDS,
        "spec": {
            "id": "physics-gravitational-potential-energy",
            "relation": "product",
            "result": "potential_energy",
            "inputs": ["negative_gravitational_constant", "mass_1", "mass_2", "inverse_distance"],
            "variables": {
                "potential_energy": {"label": "万有引力による位置エネルギー U（無限遠を0）", "unit": "J"},
                "negative_gravitational_constant": {"label": "係数 -G", "unit": "N·m²/kg²", "values": [_NEGATIVE_G]},
                "mass_1": {"label": "物体1の質量 m₁", "unit": "kg", "values": _MASS_1_VALUES},
                "mass_2": {"label": "物体2の質量 m₂", "unit": "kg", "values": _MASS_2_VALUES},
                "inverse_distance": {"label": "中心間距離の逆数 1/r（r>0）", "unit": "m⁻¹", "values": _INVERSE_DISTANCE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-potential": {"solve_for": "potential_energy", "worksheet_mode": "calculation-basic", "description": "無限遠を0とし、U = -GMm/r を符号付きで計算します。係数 -G と 1/r を問題に明示します。"},
            "reverse-mass": {"solve_for": "mass_1", "worksheet_mode": "calculation-reverse", "description": "負の位置エネルギー U、係数 -G、もう一方の質量、1/r から未知質量を逆算します。"},
            "reverse-inverse-distance": {"solve_for": "inverse_distance", "worksheet_mode": "calculation-reverse", "description": "位置エネルギー U、係数 -G、2物体の質量から正の 1/r を逆算します。"},
        },
    },
    "gravitational-potential-energy-concepts": {
        "generator": "retrieval",
        "title": "物理 万有引力：位置エネルギーの基本",
        "unit": "様々な運動：万有引力",
        "skill": "gravitational-potential-energy-concepts",
        "seeds": _POTENTIAL_CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "無限遠を0とする基準、負号、1/r依存を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _POTENTIAL_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "万有引力による位置エネルギーの基本関係を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _POTENTIAL_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "位置エネルギーの基準、符号、式を穴埋めで確認します。", "spec": {"mode": "fill", "items": _POTENTIAL_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "万有引力による位置エネルギーの基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _POTENTIAL_TF}},
        },
    },
    "gas-molecular-motion-core-concepts": {
        "generator": "retrieval",
        "title": "物理 気体分子の運動：圧力・状態方程式・温度",
        "unit": "様々な運動：気体分子の運動",
        "skill": "gas-molecular-motion-core-concepts",
        "seeds": _GAS_CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "気体分子の運動と圧力、状態方程式、絶対温度との基本関係を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _GAS_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "気体分子運動の基本関係を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _GAS_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "圧力、状態方程式、ボイル・シャルル、平均運動エネルギーを穴埋めで確認します。", "spec": {"mode": "fill", "items": _GAS_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "気体分子の運動・圧力・絶対温度の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _GAS_TF}},
        },
    },
}
