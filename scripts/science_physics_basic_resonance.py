"""Finite-answer retrieval topics for Physics Basics sound resonance.

The shared science retrieval generator owns generation and answer validation.  This
module is intentionally content-only.
"""

PHYSICS_BASIC_RESONANCE_PROBLEM_COUNT = 20
PHYSICS_BASIC_RESONANCE_SEEDS = tuple(range(10901, 10911))

_RESONANCE_PAIR_ITEMS = [
    {
        "left": "共振",
        "right": ["物体に固有振動数と同じ振動数の周期的な力を加えると、振幅が大きくなる現象"],
    },
    {
        "left": "共鳴",
        "right": ["気柱などが特定の振動数の音を受けて大きく振動する現象"],
    },
    {
        "left": "固有振動数",
        "right": ["物体や気柱などが自由に振動するときに示す、その系に固有の振動数"],
    },
    {
        "left": "共振が起こる基本条件",
        "right": ["外力の振動数が物体の固有振動数と一致すること"],
    },
]

_RESONANCE_TF_ITEMS = [
    {"item": "固有振動数の単位", "property": "Hzで表す"},
    {"item": "共振時の外力の振動数", "property": "物体の固有振動数と一致する"},
    {"item": "共振時の振幅", "property": "大きくなる"},
    {"item": "共振を起こす力", "property": "周期的に変化する外力である"},
    {"item": "共鳴する気柱", "property": "特定の振動数の音を受けて大きく振動する"},
]

_RESONANCE_FILL_ITEMS = [
    {
        "template": "物体にその{answer}と同じ振動数の周期的な力を加えると、共振が起こりやすい。",
        "answer": ["固有振動数"],
    },
    {
        "template": "共振が起こると、物体の振動の{answer}が大きくなる。",
        "answer": ["振幅"],
    },
    {
        "template": "物体や気柱などが自由に振動するときに示す、その系に固有の振動数を{answer}という。",
        "answer": ["固有振動数"],
    },
    {
        "template": "気柱などが特定の振動数の音を受けて大きく振動する現象を{answer}という。",
        "answer": ["共鳴"],
    },
    {
        "template": "固有振動数の単位には{answer}を用いる。",
        "answer": ["Hz", "ヘルツ"],
    },
    {
        "template": "共振の基本では、外力の振動数と物体の固有振動数が{answer}とき、振幅が大きくなる。",
        "answer": ["一致する", "等しい"],
    },
]

PHYSICS_BASIC_RESONANCE_TOPICS = {
    "resonance-concepts": {
        "generator": "retrieval",
        "title": "物理基礎 音と振動 共振・共鳴",
        "unit": "様々な物理現象とエネルギーの利用：音と振動",
        "skill": "resonance-and-natural-frequency",
        "problem_count": PHYSICS_BASIC_RESONANCE_PROBLEM_COUNT,
        "seeds": PHYSICS_BASIC_RESONANCE_SEEDS,
        "modes": {
            "forward": {
                "label": "用語→内容",
                "worksheet_mode": "retrieval-forward",
                "description": "共振・共鳴・固有振動数と共振条件を、用語から内容へ取り出す基礎反復です。",
                "spec": {
                    "mode": "forward",
                    "left_label": "用語",
                    "right_label": "内容",
                    "items": _RESONANCE_PAIR_ITEMS,
                },
            },
            "reverse": {
                "label": "内容→用語",
                "worksheet_mode": "retrieval-reverse",
                "description": "共振・共鳴・固有振動数と共振条件を、説明から用語へ逆向きに取り出す基礎反復です。",
                "spec": {
                    "mode": "reverse",
                    "left_label": "用語",
                    "right_label": "内容",
                    "items": _RESONANCE_PAIR_ITEMS,
                },
            },
            "fill": {
                "label": "穴埋め",
                "worksheet_mode": "retrieval-fill",
                "description": "共振・共鳴・固有振動数の基本事項を短い穴埋めで確認します。",
                "spec": {"mode": "fill", "items": _RESONANCE_FILL_ITEMS},
            },
            "tf": {
                "label": "正誤",
                "worksheet_mode": "retrieval-tf",
                "description": "共振条件、振幅、固有振動数、気柱の共鳴について○×で確認します。",
                "spec": {"mode": "tf", "items": _RESONANCE_TF_ITEMS},
            },
        },
    },
}
