"""Finite-answer retrieval definitions for junior-high grade-3 physics.

The facts here stay within current MEXT JH3 `運動とエネルギー` treatment and
intentionally avoid high-school-only numerical energy formula drills.
"""

try:
    from scripts.science_worksheet_helpers import generate_retrieval_drill
    from scripts.worksheet_factory import validate
except ModuleNotFoundError:
    from science_worksheet_helpers import generate_retrieval_drill
    from worksheet_factory import validate

JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT = 10
JH3_PHYSICS_FORWARD_SEEDS = tuple(range(6501, 6511))
JH3_PHYSICS_REVERSE_SEEDS = tuple(range(6521, 6531))
JH3_PHYSICS_FILL_SEEDS = tuple(range(6541, 6551))

JH3_PHYSICS_CONCEPT_PAIRS = {
    "mode": "forward",
    "left_label": "用語",
    "right_label": "内容",
    "items": [
        {"left": "等速直線運動", "right": "速さが一定で一直線上を進む運動"},
        {"left": "合力", "right": "複数の力と同じ働きをする一つの力"},
        {"left": "分力", "right": "一つの力を分けたときの各力"},
        {"left": "力の合成", "right": "複数の力を同じ働きの一つの力に置き換えること"},
        {"left": "力の分解", "right": "一つの力を同じ働きの複数の力に分けること"},
        {"left": "慣性", "right": "力が働かない物体が運動状態を保とうとする性質"},
        {"left": "位置エネルギー", "right": "高い位置にある物体などがもつ力学的エネルギー"},
        {"left": "運動エネルギー", "right": "運動している物体がもつ力学的エネルギー"},
        {"left": "力学的エネルギー", "right": "位置エネルギーと運動エネルギーを合わせたもの"},
        {"left": "力学的エネルギーの保存", "right": "摩擦力などが働かないとき力学的エネルギーの総量が一定に保たれること"},
        {"left": "仕事", "right": "物体に加えた力とその力の向きに動いた距離の積で表す量"},
        {"left": "仕事率", "right": "単位時間当たりに行う仕事"},
    ],
}

JH3_PHYSICS_CONCEPT_FILL = {
    "mode": "fill",
    "items": [
        {"template": "物体に力が働かないとき、運動している物体は{answer}を続ける。", "answer": "等速直線運動"},
        {"template": "複数の力と同じ働きをする一つの力を{answer}という。", "answer": "合力"},
        {"template": "一つの力を同じ働きの複数の力に分けたとき、それぞれの力を{answer}という。", "answer": "分力"},
        {"template": "複数の力を同じ働きの一つの力に置き換えることを力の{answer}という。", "answer": "合成"},
        {"template": "一つの力を同じ働きの複数の力に分けることを力の{answer}という。", "answer": "分解"},
        {"template": "同じ質量なら、物体の位置が高いほど{answer}は大きい。", "answer": "位置エネルギー"},
        {"template": "同じ高さなら、物体の質量が大きいほど{answer}は大きい。", "answer": "位置エネルギー"},
        {"template": "同じ質量なら、物体の速さが大きいほど{answer}は大きい。", "answer": "運動エネルギー"},
        {"template": "同じ速さなら、物体の質量が大きいほど{answer}は大きい。", "answer": "運動エネルギー"},
        {"template": "運動エネルギーと位置エネルギーは相互に{answer}。", "answer": "移り変わる"},
        {"template": "摩擦力などが働かない場合、力学的エネルギーの総量は{answer}。", "answer": "保存される"},
        {"template": "単位時間当たりに行う仕事を{answer}という。", "answer": "仕事率"},
    ],
}


def generate_jh3_physics_retrieval(mode, seed):
    if mode == "forward":
        problems = generate_retrieval_drill(
            JH3_PHYSICS_CONCEPT_PAIRS, seed, JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT, mode="forward"
        )
    elif mode == "reverse":
        problems = generate_retrieval_drill(
            JH3_PHYSICS_CONCEPT_PAIRS, seed, JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT, mode="reverse"
        )
    elif mode == "fill":
        problems = generate_retrieval_drill(
            JH3_PHYSICS_CONCEPT_FILL, seed, JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT, mode="fill"
        )
    else:
        raise ValueError(f"unsupported JH3 retrieval mode: {mode}")
    validate(problems)
    return problems
