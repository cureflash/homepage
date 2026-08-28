"""Formal-course Physics checkpoints for quantitative SHM and pendulum periods.

The acceleration checkpoint is deliberately magnitude-only: |a| = omega^2 |x|.
Learner-visible text states that the acceleration direction is toward equilibrium,
so the sign relation a = -omega^2 x is not hidden. Period checkpoints use finite
retrieval for the formulas and qualitative dependencies; numeric square-root/pi
inversion remains deferred until a shared rounding/tolerance contract exists.
"""

PHYSICS_SHM_PERIODS_PROBLEM_COUNT = 20
_ACCEL_SEEDS = tuple(range(7521, 7531))
_SPRING_PERIOD_SEEDS = tuple(range(7531, 7541))
_PENDULUM_PERIOD_SEEDS = tuple(range(7541, 7551))

_OMEGA_SQUARED = [0.25, 1.0, 2.25, 4.0, 6.25, 9.0, 12.25, 16.0, 25.0]
_DISPLACEMENT_MAGNITUDES = [0.02, 0.04, 0.05, 0.08, 0.10, 0.12, 0.15, 0.20, 0.25, 0.30]

_SPRING_PERIOD_PAIRS = [
    {"left": "ばね振り子の周期公式", "right": ["T = 2π√(m/k)"]},
    {"left": "ばね定数が一定のとき質量mを大きくした場合", "right": ["周期Tは長くなる"]},
    {"left": "質量が一定のときばね定数kを大きくした場合", "right": ["周期Tは短くなる"]},
    {"left": "ばね振り子の周期を決める量", "right": ["質量mとばね定数k"]},
]

_SPRING_PERIOD_FILL = [
    {"template": "ばね振り子の周期は T = 2π√({answer}) と表される。", "answer": ["m/k"]},
    {"template": "ばね定数が一定なら、質量mが大きいほど周期Tは{answer}なる。", "answer": ["長く", "長くなる"]},
    {"template": "質量が一定なら、ばね定数kが大きいほど周期Tは{answer}なる。", "answer": ["短く", "短くなる"]},
    {"template": "ばね振り子の周期を決める基本量は質量mと{answer}である。", "answer": ["ばね定数k", "ばね定数"]},
]

_SPRING_PERIOD_TF = [
    {"item": "ばね振り子の周期", "property": "T = 2π√(m/k) で表される"},
    {"item": "ばね定数が一定のばね振り子", "property": "質量が大きいほど周期は長い"},
    {"item": "質量が一定のばね振り子", "property": "ばね定数が大きいほど周期は短い"},
    {"item": "ばね振り子の周期", "property": "質量mとばね定数kに依存する"},
]

_PENDULUM_PERIOD_PAIRS = [
    {"left": "振れ角が十分小さい単振り子の周期公式", "right": ["T = 2π√(l/g)"]},
    {"left": "重力加速度が一定のとき振り子の長さlを大きくした場合", "right": ["周期Tは長くなる"]},
    {"left": "同じ場所で単振り子のおもりの質量を変えた場合", "right": ["周期Tは変わらない"]},
    {"left": "振り子の長さが一定で重力加速度gを大きくした場合", "right": ["周期Tは短くなる"]},
]

_PENDULUM_PERIOD_FILL = [
    {"template": "振れ角が十分小さい単振り子の周期は T = 2π√({answer}) と表される。", "answer": ["l/g"]},
    {"template": "同じ場所では、振り子の長さlが大きいほど周期Tは{answer}なる。", "answer": ["長く", "長くなる"]},
    {"template": "単振り子の周期公式 T = 2π√(l/g) には、おもりの{answer}は含まれない。", "answer": ["質量", "質量m"]},
    {"template": "振り子の長さが一定なら、重力加速度gが大きいほど周期Tは{answer}なる。", "answer": ["短く", "短くなる"]},
]

_PENDULUM_PERIOD_TF = [
    {"item": "振れ角が十分小さい単振り子の周期", "property": "T = 2π√(l/g) で表される"},
    {"item": "同じ場所の単振り子", "property": "長さが大きいほど周期は長い"},
    {"item": "振れ角が十分小さい単振り子の周期", "property": "おもりの質量には依存しない"},
    {"item": "長さが一定の単振り子", "property": "重力加速度が大きいほど周期は短い"},
]

PHYSICS_SHM_PERIODS_TOPICS = {
    "simple-harmonic-acceleration-displacement-magnitude": {
        "generator": "formula",
        "title": "物理 単振動：変位と加速度の大きさ",
        "unit": "様々な運動：円運動と単振動",
        "skill": "simple-harmonic-acceleration-displacement-magnitude",
        "formula": "|a| = ω²|x|（このプリントは大きさのみ。加速度の向きは常につり合いの位置向き）",
        "seeds": _ACCEL_SEEDS,
        "spec": {
            "id": "physics-simple-harmonic-acceleration-displacement-magnitude",
            "relation": "product",
            "result": "acceleration_magnitude",
            "inputs": ["angular_speed_squared", "displacement_magnitude"],
            "variables": {
                "acceleration_magnitude": {"label": "加速度の大きさ |a|（向きはつり合いの位置向き）", "unit": "m/s²"},
                "angular_speed_squared": {"label": "角速度の2乗 ω²", "unit": "s⁻²", "values": _OMEGA_SQUARED},
                "displacement_magnitude": {"label": "つり合いの位置からの変位の大きさ |x|", "unit": "m", "values": _DISPLACEMENT_MAGNITUDES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-acceleration": {"solve_for": "acceleration_magnitude", "worksheet_mode": "calculation-basic", "description": "単振動の a=-ω²x を、大きさ |a|=ω²|x| として計算します。加速度の向きはつり合いの位置向きと明示します。"},
            "reverse-angular-speed-squared": {"solve_for": "angular_speed_squared", "worksheet_mode": "calculation-reverse", "description": "加速度と変位の大きさから ω² を逆算します。平方根によるωの逆算は行いません。"},
            "reverse-displacement": {"solve_for": "displacement_magnitude", "worksheet_mode": "calculation-reverse", "description": "加速度の大きさと ω² から変位の大きさ |x| を逆算します。方向は別に、つり合い位置向きと確認します。"},
        },
    },
    "spring-pendulum-period-concepts": {
        "generator": "retrieval",
        "title": "物理 単振動：ばね振り子の周期",
        "unit": "様々な運動：円運動と単振動",
        "skill": "spring-pendulum-period-concepts",
        "seeds": _SPRING_PERIOD_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "ばね振り子の周期公式 T=2π√(m/k) と質量・ばね定数への依存を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _SPRING_PERIOD_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "ばね振り子の周期公式と依存関係を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _SPRING_PERIOD_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "ばね振り子の周期公式と質量・ばね定数の影響を穴埋めで確認します。", "spec": {"mode": "fill", "items": _SPRING_PERIOD_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "ばね振り子の周期公式と依存関係を○×で確認します。", "spec": {"mode": "tf", "items": _SPRING_PERIOD_TF}},
        },
    },
    "simple-pendulum-period-concepts": {
        "generator": "retrieval",
        "title": "物理 単振動：単振り子の周期",
        "unit": "様々な運動：円運動と単振動",
        "skill": "simple-pendulum-period-concepts",
        "seeds": _PENDULUM_PERIOD_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "振れ角が十分小さい単振り子の周期公式 T=2π√(l/g) と基本依存関係を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _PENDULUM_PERIOD_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "単振り子の周期公式と長さ・質量・重力加速度への関係を逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _PENDULUM_PERIOD_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "単振り子の周期公式と長さ・質量・重力加速度への関係を穴埋めで確認します。", "spec": {"mode": "fill", "items": _PENDULUM_PERIOD_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "単振り子の周期公式と基本依存関係を○×で確認します。", "spec": {"mode": "tf", "items": _PENDULUM_PERIOD_TF}},
        },
    },
}
