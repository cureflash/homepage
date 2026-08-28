"""Formal-course Physics checkpoints for sound interference/diffraction and Doppler effect.

The current MEXT formal Physics sound subsection explicitly covers sound
interference/diffraction and the Doppler effect, with Doppler treated mainly for
observer and source moving on the same straight line. These first sound
checkpoints intentionally use the existing finite-answer retrieval generator.
Numerical Doppler formulas are deferred until their direction/sign convention is
specified and independently validated.
"""

PHYSICS_SOUND_PROBLEM_COUNT = 20
_SOUND_INTERFERENCE_SEEDS = tuple(range(7761, 7771))
_DOPPLER_SEEDS = tuple(range(7771, 7781))

_SOUND_INTERFERENCE_PAIRS = [
    {"left": "音の干渉", "right": ["複数の音波が重なり、強め合いや弱め合いが起こる現象"]},
    {"left": "クインケ管", "right": ["音の経路差を変えて干渉を調べる実験装置"]},
    {"left": "音の回折", "right": ["音波がすき間や障害物の端の後方へ回り込んで広がる現象"]},
    {"left": "音の回折が目立ちやすい条件", "right": ["波長がすき間や障害物の代表的な大きさに比べて大きい"]},
    {"left": "障害物の陰や角の向こうでも音が届く理由の一つ", "right": ["音波が回折するため"]},
    {"left": "音の屈折", "right": ["音の速さが場所によって変わると進行方向が曲がる現象"]},
]

_SOUND_INTERFERENCE_FILL = [
    {"template": "複数の音波が重なり、強め合いや弱め合いが起こる現象を音の{answer}という。", "answer": ["干渉"]},
    {"template": "音の経路差を変えて干渉を調べる実験装置として{answer}を用いることができる。", "answer": ["クインケ管"]},
    {"template": "音波がすき間や障害物の端の後方へ回り込んで広がる現象を{answer}という。", "answer": ["回折"]},
    {"template": "一般に波長がすき間の幅などに比べて大きいほど、音の{answer}は目立ちやすい。", "answer": ["回折"]},
    {"template": "音の速さが場所によって変わり進行方向が曲がる現象を音の{answer}という。", "answer": ["屈折"]},
]

_SOUND_INTERFERENCE_TF = [
    {"item": "音の干渉", "property": "複数の音波の重ね合わせによって強め合いや弱め合いが起こる"},
    {"item": "クインケ管", "property": "音の経路差を変えて干渉を調べるために使える"},
    {"item": "音の回折", "property": "音波がすき間や障害物の端の後方へ回り込んで広がる"},
    {"item": "音の回折", "property": "波長がすき間などの大きさに比べて大きいほど目立ちやすい"},
    {"item": "音の屈折", "property": "音の速さが場所によって変化すると起こり得る"},
]

_DOPPLER_PAIRS = [
    {"left": "音のドップラー効果", "right": ["音源と観測者の相対的な運動によって観測される振動数が変化する現象"]},
    {"left": "音源と観測者が近づく場合", "right": ["観測される振動数は静止時より高くなる"]},
    {"left": "音源と観測者が遠ざかる場合", "right": ["観測される振動数は静止時より低くなる"]},
    {"left": "音源が観測者へ近づくときの音源前方の波面間隔", "right": ["静止している音源の場合より狭くなる"]},
    {"left": "音源が観測者から遠ざかるときに観測者側へ届く波の波長", "right": ["静止している音源の場合より長くなる"]},
    {"left": "高校物理で中心に扱う音のドップラー効果", "right": ["観測者と音源が同一直線上を動く場合"]},
    {"left": "音源の運動とドップラー効果を結び付ける波の変化", "right": ["音源の前後で波長が変化する"]},
]

_DOPPLER_FILL = [
    {"template": "音源と観測者の相対的な運動によって観測される振動数が変化する現象を{answer}という。", "answer": ["ドップラー効果", "音のドップラー効果"]},
    {"template": "音源と観測者が近づくと、観測される振動数は静止時より{answer}なる。", "answer": ["高く", "高くなる"]},
    {"template": "音源と観測者が遠ざかると、観測される振動数は静止時より{answer}なる。", "answer": ["低く", "低くなる"]},
    {"template": "音源が観測者へ近づくと、音源前方の波面の間隔は静止時より{answer}なる。", "answer": ["狭く", "狭くなる"]},
    {"template": "高校物理では、観測者と音源が同一{answer}上を動く場合を中心にドップラー効果を扱う。", "answer": ["直線"]},
]

_DOPPLER_TF = [
    {"item": "音源と観測者が近づく場合", "property": "観測される振動数は静止時より高くなる"},
    {"item": "音源と観測者が遠ざかる場合", "property": "観測される振動数は静止時より低くなる"},
    {"item": "観測者へ近づく音源の前方", "property": "波面の間隔は静止音源の場合より狭くなる"},
    {"item": "音源が観測者から遠ざかる場合", "property": "観測者側へ届く波の波長は静止音源の場合より長くなる"},
    {"item": "高校物理の音のドップラー効果", "property": "観測者と音源が同一直線上を動く場合を中心に扱う"},
    {"item": "音源が動く場合のドップラー効果", "property": "音源の運動に伴う波長の変化と関連付けられる"},
]

PHYSICS_SOUND_TOPICS = {
    "sound-interference-diffraction-concepts": {
        "generator": "retrieval",
        "title": "物理 音：干渉と回折",
        "unit": "波：音",
        "skill": "sound-interference-diffraction-concepts",
        "seeds": _SOUND_INTERFERENCE_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "音の干渉、クインケ管、回折、屈折の基本事項を項目から確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _SOUND_INTERFERENCE_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "音の干渉・回折・屈折を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _SOUND_INTERFERENCE_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "音の干渉、クインケ管、回折、屈折を穴埋めで確認します。", "spec": {"mode": "fill", "items": _SOUND_INTERFERENCE_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "音の干渉と回折の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _SOUND_INTERFERENCE_TF}},
        },
    },
    "sound-doppler-core-concepts": {
        "generator": "retrieval",
        "title": "物理 音：ドップラー効果",
        "unit": "波：音",
        "skill": "sound-doppler-core-concepts",
        "seeds": _DOPPLER_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "音のドップラー効果、接近・遠ざかりと振動数・波長の変化を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _DOPPLER_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "音のドップラー効果を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _DOPPLER_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "接近・遠ざかりによる観測振動数や波面間隔の変化を穴埋めで確認します。", "spec": {"mode": "fill", "items": _DOPPLER_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "同一直線上の音源・観測者の運動を中心にドップラー効果を○×で確認します。", "spec": {"mode": "tf", "items": _DOPPLER_TF}},
        },
    },
}
