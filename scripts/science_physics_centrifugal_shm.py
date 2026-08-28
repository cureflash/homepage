"""Formal-course Physics checkpoints for centrifugal force and simple harmonic motion.

The conceptual checkpoints use the shared finite-answer retrieval generator so
reference frames and motion concepts remain learner-visible and mechanically
checkable. The spring checkpoint uses only the magnitude relation F = kx; its
labels explicitly state that the restoring force points toward equilibrium.

Curriculum basis: current MEXT High School Course of Study Commentary,
Physics: centrifugal force is mentioned with circular motion; simple harmonic
motion covers displacement, velocity, acceleration and restoring force, with
spring and simple pendulums included.
"""

PHYSICS_CENTRIFUGAL_SHM_PROBLEM_COUNT = 20
_CENTRIFUGAL_SEEDS = tuple(range(7491, 7501))
_SHM_CONCEPT_SEEDS = tuple(range(7501, 7511))
_SHM_SPRING_SEEDS = tuple(range(7511, 7521))

_CENTRIFUGAL_PAIRS = [
    {"left": "慣性系で等速円運動を保つ合力", "right": ["回転中心向きの向心力"]},
    {"left": "回転する座標系で導入する見かけの力", "right": ["遠心力"]},
    {"left": "遠心力の向き", "right": ["回転中心から外向き"]},
    {"left": "遠心力を導入して物体を静止として扱える座標系", "right": ["物体とともに回転する座標系", "回転座標系"]},
]

_CENTRIFUGAL_FILL = [
    {"template": "慣性系で等速円運動をする物体には、回転中心向きの合力である{answer}が働く。", "answer": ["向心力"]},
    {"template": "物体とともに回転する座標系では、回転中心から外向きの見かけの力として{answer}を導入できる。", "answer": ["遠心力"]},
    {"template": "遠心力は回転中心から見て{answer}向きに導入する。", "answer": ["外", "外向き"]},
    {"template": "遠心力を見かけの力として導入するのは、物体とともに回転する{answer}である。", "answer": ["座標系", "回転座標系"]},
]

_CENTRIFUGAL_TF = [
    {"item": "慣性系で等速円運動を保つ合力", "property": "回転中心向きである"},
    {"item": "回転座標系で導入する遠心力", "property": "回転中心から外向きである"},
    {"item": "遠心力", "property": "回転座標系で導入する見かけの力である"},
    {"item": "向心力と遠心力の区別", "property": "どの座標系で運動を記述するかを明示する必要がある"},
]

_SHM_PAIRS = [
    {"left": "単振動の復元力", "right": ["変位と反対向きで、物体をつり合いの位置へ戻そうとする力"]},
    {"left": "振幅", "right": ["つり合いの位置からの変位の最大値"]},
    {"left": "単振動で速さが最大になる位置", "right": ["つり合いの位置"]},
    {"left": "単振動で速さが0になる位置", "right": ["振動の両端", "最大変位の位置"]},
    {"left": "単振動の加速度", "right": ["変位と反対向きで、つり合いの位置へ向かう加速度"]},
    {"left": "単振動の周期", "right": ["同じ運動状態に戻るまでの時間"]},
]

_SHM_FILL = [
    {"template": "単振動では、物体をつり合いの位置へ戻そうとする力を{answer}という。", "answer": ["復元力"]},
    {"template": "単振動の振幅は、つり合いの位置からの変位の{answer}である。", "answer": ["最大値", "最大の大きさ"]},
    {"template": "単振動する物体の速さは、一般につり合いの位置で{answer}になる。", "answer": ["最大", "最大になる"]},
    {"template": "単振動する物体の速さは、振動の両端で{answer}になる。", "answer": ["0", "ゼロ"]},
    {"template": "単振動の加速度は、つり合いの位置に{answer}向きである。", "answer": ["向かう", "向かう向き"]},
    {"template": "同じ運動状態に戻るまでの時間を{answer}という。", "answer": ["周期"]},
]

_SHM_TF = [
    {"item": "単振動の復元力", "property": "つり合いの位置に向かう"},
    {"item": "単振動の振幅", "property": "つり合いの位置からの変位の最大値である"},
    {"item": "単振動する物体の速さ", "property": "つり合いの位置で最大になる"},
    {"item": "単振動する物体の速さ", "property": "振動の両端で0になる"},
    {"item": "単振動の加速度", "property": "つり合いの位置に向かう"},
    {"item": "単振動の周期", "property": "同じ運動状態に戻るまでの時間である"},
]

_SPRING_CONSTANTS = [5, 8, 10, 12, 15, 20, 25, 30, 40, 50]
_DISPLACEMENTS = [0.02, 0.04, 0.05, 0.08, 0.10, 0.12, 0.15, 0.20, 0.25, 0.30]

PHYSICS_CENTRIFUGAL_SHM_TOPICS = {
    "circular-centrifugal-frame-concepts": {
        "generator": "retrieval",
        "title": "物理 円運動：遠心力と座標系",
        "unit": "様々な運動：円運動と単振動",
        "skill": "circular-centrifugal-frame-concepts",
        "seeds": _CENTRIFUGAL_SEEDS,
        "modes": {
            "forward": {"label": "用語→内容", "worksheet_mode": "retrieval-forward", "description": "慣性系の向心力と回転座標系で導入する遠心力を、座標系を明示して区別します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _CENTRIFUGAL_PAIRS}},
            "reverse": {"label": "内容→用語", "worksheet_mode": "retrieval-reverse", "description": "向心力・遠心力・回転座標系を説明から逆向きに取り出し、座標系の混同を防ぎます。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _CENTRIFUGAL_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "向心力と遠心力の向き、遠心力を導入する座標系を穴埋めで確認します。", "spec": {"mode": "fill", "items": _CENTRIFUGAL_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "慣性系と回転座標系を区別しながら、向心力と遠心力の基本事項を○×で確認します。", "spec": {"mode": "tf", "items": _CENTRIFUGAL_TF}},
        },
    },
    "simple-harmonic-core-concepts": {
        "generator": "retrieval",
        "title": "物理 単振動：変位・速度・加速度・復元力",
        "unit": "様々な運動：円運動と単振動",
        "skill": "simple-harmonic-core-concepts",
        "seeds": _SHM_CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "単振動の振幅、周期、速度、加速度、復元力の基本関係を項目から取り出します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _SHM_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "単振動の振幅、周期、速度、加速度、復元力の基本関係を説明から逆向きに確認します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _SHM_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "単振動の変位・速度・加速度・復元力を、短い穴埋めで確認します。", "spec": {"mode": "fill", "items": _SHM_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "単振動の振幅、周期、速度、加速度、復元力について○×で確認します。", "spec": {"mode": "tf", "items": _SHM_TF}},
        },
    },
    "simple-harmonic-spring-restoring-force": {
        "generator": "formula",
        "title": "物理 単振動：ばねの復元力",
        "unit": "様々な運動：円運動と単振動",
        "skill": "simple-harmonic-spring-restoring-force",
        "formula": "F = kx（復元力の大きさ。向きはつり合いの位置向き）",
        "seeds": _SHM_SPRING_SEEDS,
        "spec": {
            "id": "physics-simple-harmonic-spring-restoring-force",
            "relation": "product",
            "result": "restoring_force",
            "inputs": ["spring_constant", "displacement"],
            "variables": {
                "restoring_force": {"label": "つり合いの位置向きの復元力の大きさ F", "unit": "N"},
                "spring_constant": {"label": "ばね定数 k", "unit": "N/m", "values": _SPRING_CONSTANTS},
                "displacement": {"label": "つり合いの位置からの変位の大きさ x", "unit": "m", "values": _DISPLACEMENTS},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-force": {"solve_for": "restoring_force", "worksheet_mode": "calculation-basic", "description": "ばね振り子で、復元力がつり合いの位置向きであることを明示し、その大きさ F = kx を求めます。"},
            "reverse-spring-constant": {"solve_for": "spring_constant", "worksheet_mode": "calculation-reverse", "description": "ばね振り子で、復元力の大きさ F と変位の大きさ x からばね定数 k を逆算します。"},
            "reverse-displacement": {"solve_for": "displacement", "worksheet_mode": "calculation-reverse", "description": "ばね振り子で、復元力の大きさ F とばね定数 k から変位の大きさ x を逆算します。"},
        },
    },
}
