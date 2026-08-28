"""Formal-course Physics retrieval checkpoints for light propagation and interference.

Current MEXT formal Physics places the light subsection after sound. It covers
light speed/wavelength, reflection, refraction, dispersion and polarization,
then diffraction/interference including Young's experiment, diffraction
gratings and thin-film interference. These checkpoints keep the first light
batch finite-answer and mechanically checkable before numerical optics families
are introduced.
"""

PHYSICS_LIGHT_PROBLEM_COUNT = 20
_LIGHT_PROPAGATION_SEEDS = tuple(range(7811, 7821))
_LIGHT_INTERFERENCE_SEEDS = tuple(range(7821, 7831))

_LIGHT_PROPAGATION_PAIRS = [
    {"left": "真空中の光の速さ", "right": ["約3.0×10^8 m/s"]},
    {"left": "光の反射の法則", "right": ["入射角と反射角が等しい"]},
    {"left": "光の屈折", "right": ["異なる媒質の境界で光の進行方向が変わる現象"]},
    {"left": "屈折率", "right": ["真空中の光速を媒質中の光速で割った量"]},
    {"left": "光の分散", "right": ["屈折率が波長によって異なるため光が波長ごとに分かれる現象"]},
    {"left": "偏光", "right": ["光の振動方向が特定の方向に限られた状態"]},
    {"left": "光のスペクトル", "right": ["光を波長や色の成分に分けて並べたもの"]},
]

_LIGHT_PROPAGATION_FILL = [
    {"template": "真空中の光の速さは約{answer}である。", "answer": ["3.0×10^8 m/s", "3.0×10^8m/s"]},
    {"template": "反射の法則では入射角と{answer}が等しい。", "answer": ["反射角"]},
    {"template": "異なる媒質の境界で光の進行方向が変わる現象を光の{answer}という。", "answer": ["屈折"]},
    {"template": "真空中の光速を媒質中の光速で割った量を{answer}という。", "answer": ["屈折率"]},
    {"template": "屈折率が波長によって異なるため光が波長ごとに分かれる現象を{answer}という。", "answer": ["分散", "光の分散"]},
    {"template": "光の振動方向が特定の方向に限られた状態を{answer}という。", "answer": ["偏光"]},
]

_LIGHT_PROPAGATION_TF = [
    {"item": "真空中の光の速さ", "property": "約3.0×10^8 m/sである"},
    {"item": "光の反射", "property": "入射角と反射角が等しい"},
    {"item": "光の屈折", "property": "異なる媒質の境界で進行方向が変わり得る"},
    {"item": "屈折率", "property": "真空中の光速を媒質中の光速で割って表せる"},
    {"item": "光の分散", "property": "屈折率の波長依存と関係する"},
    {"item": "偏光", "property": "光が横波であることと関係する"},
]

_LIGHT_INTERFERENCE_PAIRS = [
    {"left": "ヤングの干渉実験", "right": ["二つの細いすき間からの光を重ねて干渉縞を観察する実験"]},
    {"left": "ヤングの実験で明線になる基本条件", "right": ["二つの光の経路差が波長の整数倍になる"]},
    {"left": "ヤングの実験で暗線になる基本条件", "right": ["二つの光の経路差が波長の半整数倍になる"]},
    {"left": "回折格子", "right": ["多数の等間隔な細いすき間による回折と干渉を利用する素子"]},
    {"left": "薄膜干渉", "right": ["薄い膜の表面と裏面などで反射した光が重なって生じる干渉"]},
    {"left": "光路長", "right": ["媒質の屈折率とその中を進む幾何学的距離の積で表す量"]},
    {"left": "反射による位相変化", "right": ["薄膜干渉などの明暗条件を決めるときに考慮することがある"]},
]

_LIGHT_INTERFERENCE_FILL = [
    {"template": "二つの細いすき間からの光を重ねて干渉縞を観察する代表的な実験を{answer}という。", "answer": ["ヤングの干渉実験", "ヤングの実験"]},
    {"template": "ヤングの実験では、経路差が波長の整数倍のとき基本的に{answer}になる。", "answer": ["明線"]},
    {"template": "ヤングの実験では、経路差が波長の半整数倍のとき基本的に{answer}になる。", "answer": ["暗線"]},
    {"template": "多数の等間隔な細いすき間による回折と干渉を利用する素子を{answer}という。", "answer": ["回折格子"]},
    {"template": "薄い膜の表面と裏面などで反射した光が重なって生じる干渉を{answer}という。", "answer": ["薄膜干渉"]},
    {"template": "媒質の屈折率と幾何学的距離の積で表す量を{answer}という。", "answer": ["光路長"]},
]

_LIGHT_INTERFERENCE_TF = [
    {"item": "ヤングの干渉実験", "property": "二つの細いすき間からの光による干渉縞を扱う"},
    {"item": "ヤングの実験の明線", "property": "基本的に経路差が波長の整数倍となる位置に現れる"},
    {"item": "ヤングの実験の暗線", "property": "基本的に経路差が波長の半整数倍となる位置に現れる"},
    {"item": "回折格子", "property": "多数の等間隔な細いすき間による回折と干渉を利用する"},
    {"item": "薄膜干渉", "property": "膜の複数の境界で反射した光の重ね合わせと関係する"},
    {"item": "光路長", "property": "屈折率と幾何学的距離の積で表せる"},
    {"item": "薄膜干渉の反射", "property": "境界によっては位相変化を考慮する必要がある"},
]

PHYSICS_LIGHT_TOPICS = {
    "light-propagation-core-concepts": {
        "generator": "retrieval",
        "title": "物理 光：伝わり方・反射・屈折・分散・偏光",
        "unit": "波：光",
        "skill": "light-propagation-core-concepts",
        "seeds": _LIGHT_PROPAGATION_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "光速、反射、屈折、屈折率、分散、偏光、スペクトルを確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _LIGHT_PROPAGATION_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "光の伝わり方の基本事項を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _LIGHT_PROPAGATION_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "光速、反射、屈折、屈折率、分散、偏光を穴埋めで確認します。", "spec": {"mode": "fill", "items": _LIGHT_PROPAGATION_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "光の伝わり方の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _LIGHT_PROPAGATION_TF}},
        },
    },
    "light-diffraction-interference-concepts": {
        "generator": "retrieval",
        "title": "物理 光：回折と干渉",
        "unit": "波：光",
        "skill": "light-diffraction-interference-concepts",
        "seeds": _LIGHT_INTERFERENCE_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "ヤングの実験、回折格子、薄膜干渉、光路長、反射時の位相変化を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _LIGHT_INTERFERENCE_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "光の回折と干渉の基本事項を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _LIGHT_INTERFERENCE_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "ヤングの実験、回折格子、薄膜干渉、光路長を穴埋めで確認します。", "spec": {"mode": "fill", "items": _LIGHT_INTERFERENCE_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "光の回折と干渉の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _LIGHT_INTERFERENCE_TF}},
        },
    },
}
