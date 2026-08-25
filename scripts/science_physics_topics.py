"""Structured science topic definitions for the shared worksheet factory.

Keep this module content-only: generation, validation, PDF rendering, and catalog
publication remain in the shared worksheet infrastructure.
"""

JH1_PHYSICS_FORMULA_TOPICS = {
    "spring-extension": {
        "title": "中1理科 ばねの伸びと力",
        "unit": "力の働き",
        "skill": "spring-extension-force",
        "formula": "x = F × k",
        "spec": {
            "id": "jh1-physics-spring-extension",
            "relation": "product",
            "result": "x",
            "inputs": ["F", "k"],
            "variables": {
                "x": {"label": "x", "unit": "cm"},
                "F": {
                    "label": "F",
                    "unit": "N",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
                },
                "k": {
                    "label": "k",
                    "unit": "cm/N",
                    "values": [1, 2, 3, 4, 5],
                },
            },
        },
        "modes": {
            "basic": {
                "solve_for": "x",
                "worksheet_mode": "calculation-basic",
                "description": "x = F × k を使い、力と1 Nあたりのばねの伸びから伸びを求める基礎反復です。",
            },
            "reverse": {
                "solve_for": "F",
                "worksheet_mode": "calculation-reverse",
                "description": "x = F × k を使い、ばねの伸びと1 Nあたりの伸びから力を逆算する基礎反復です。",
            },
        },
    },
    "mass-newton": {
        "title": "中1理科 質量と重力の大きさ",
        "unit": "力の働き",
        "skill": "mass-newton-basic",
        "formula": "m = F × 100",
        "spec": {
            "id": "jh1-physics-mass-newton",
            "relation": "product",
            "result": "m",
            "inputs": ["F", "c"],
            "variables": {
                "m": {"label": "m", "unit": "g"},
                "F": {
                    "label": "F",
                    "unit": "N",
                    "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
                },
                "c": {"label": "c", "unit": "g/N", "values": [100]},
            },
        },
        "modes": {
            "basic": {
                "solve_for": "m",
                "worksheet_mode": "calculation-basic",
                "description": "中学理科の近似 100 g ≒ 1 N を使い、重力の大きさから質量を求める基礎反復です。",
            },
            "reverse": {
                "solve_for": "F",
                "worksheet_mode": "calculation-reverse",
                "description": "中学理科の近似 100 g ≒ 1 N を使い、質量から重力の大きさを求める基礎反復です。",
            },
        },
    },
}


_FORCE_TERM_ITEMS = [
    {
        "left": "力の大きさの単位",
        "right": ["ニュートン（N）", "ニュートン", "N"],
    },
    {
        "left": "1 Nの力",
        "right": ["質量約100 gの物体に働く重力と同じ大きさの力"],
    },
    {
        "left": "質量",
        "right": ["場所によって変わらない量"],
    },
    {
        "left": "重さ",
        "right": ["物体に働く重力の大きさ"],
    },
    {
        "left": "質量を測る器具",
        "right": ["てんびん"],
    },
    {
        "left": "力の大きさを測る器具",
        "right": ["ばねばかり"],
    },
    {
        "left": "力の3要素",
        "right": ["大きさ・向き・作用点"],
    },
    {
        "left": "2力がつり合うときの大きさ",
        "right": ["等しい"],
    },
    {
        "left": "2力がつり合うときの向き",
        "right": ["反対向き"],
    },
    {
        "left": "2力がつり合うときの位置関係",
        "right": ["同一直線上にある"],
    },
]

_FORCE_TF_ITEMS = [
    {"item": "質量", "property": "場所によって変わらない量である"},
    {"item": "重さ", "property": "物体に働く重力の大きさである"},
    {"item": "てんびん", "property": "質量を測るために使う"},
    {"item": "ばねばかり", "property": "力の大きさを測るために使う"},
    {"item": "ニュートン（N）", "property": "力の大きさの単位である"},
    {"item": "力", "property": "大きさ・向き・作用点という要素をもつ"},
]

_FORCE_FILL_ITEMS = [
    {"template": "力の大きさの単位を{answer}という。", "answer": ["ニュートン（N）", "ニュートン", "N"]},
    {"template": "1 Nは、質量約{answer}の物体に働く重力と同じ大きさである。", "answer": ["100 g", "100g"]},
    {"template": "場所によって変わらない物体の量を{answer}という。", "answer": ["質量"]},
    {"template": "物体に働く重力の大きさを{answer}という。", "answer": ["重さ"]},
    {"template": "質量は{answer}を使って測る。", "answer": ["てんびん"]},
    {"template": "力の大きさは{answer}などを使って測る。", "answer": ["ばねばかり"]},
    {"template": "力の3要素は、大きさ・向き・{answer}である。", "answer": ["作用点"]},
    {"template": "2力がつり合うとき、2力の大きさは{answer}。", "answer": ["等しい"]},
    {"template": "2力がつり合うとき、2力の向きは{answer}。", "answer": ["反対向き", "反対"]},
    {"template": "2力がつり合うとき、2力は{answer}にある。", "answer": ["同一直線上"]},
]

JH1_PHYSICS_RETRIEVAL_TOPICS = {
    "force-concepts": {
        "title": "中1理科 力の基本事項",
        "unit": "力の働き",
        "skill": "force-basic-retrieval",
        "modes": {
            "forward": {
                "label": "用語→内容",
                "worksheet_mode": "retrieval-forward",
                "description": "力・質量・重さ・2力のつり合いなどの基本事項を、用語や問いから答える反復です。",
                "spec": {
                    "mode": "forward",
                    "left_label": "問い",
                    "right_label": "答え",
                    "items": _FORCE_TERM_ITEMS,
                },
            },
            "reverse": {
                "label": "内容→用語",
                "worksheet_mode": "retrieval-reverse",
                "description": "力・質量・重さ・2力のつり合いなどの基本事項を、説明から逆向きに取り出す反復です。",
                "spec": {
                    "mode": "reverse",
                    "left_label": "問い",
                    "right_label": "説明",
                    "items": _FORCE_TERM_ITEMS,
                },
            },
            "tf": {
                "label": "正誤",
                "worksheet_mode": "retrieval-tf",
                "description": "力・質量・重さ・測定器具・単位の基本事項を○×で繰り返し確認します。",
                "spec": {
                    "mode": "tf",
                    "items": _FORCE_TF_ITEMS,
                },
            },
            "fill": {
                "label": "穴埋め",
                "worksheet_mode": "retrieval-fill",
                "description": "力の基本事項を短い穴埋めで繰り返し取り出す練習です。",
                "spec": {
                    "mode": "fill",
                    "items": _FORCE_FILL_ITEMS,
                },
            },
        },
    },
}


JH1_PHYSICS_SEEDS = (6101, 6102, 6103)
JH1_PHYSICS_RETRIEVAL_SEEDS = (6201, 6202, 6203)
JH1_PHYSICS_PROBLEM_COUNT = 20
