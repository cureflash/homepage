"""Formal-course Physics magnetic-force checkpoints.

Current MEXT Physics treats current and magnetic fields, the force on a current
in a magnetic field, and explicitly touches on the Lorentz force. Numerical
drills below keep the perpendicular geometry, directions, quantities, and units
learner-visible and reuse the existing shared product relation.
"""

PHYSICS_MAGNETIC_FORCE_PROBLEM_COUNT = 20
_WIRE_FORCE_SEEDS = tuple(range(8001, 8011))
_LORENTZ_FORCE_SEEDS = tuple(range(8011, 8021))
_CONCEPT_SEEDS = tuple(range(8021, 8031))

_MAGNETIC_FLUX_DENSITY_T = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0]
_CURRENT_A = [0.5, 1, 1.5, 2, 3, 4, 5]
_WIRE_LENGTH_M = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0]
_CHARGE_MAGNITUDE_UC = [0.5, 1, 2, 4, 5, 10]
_SPEED_M_PER_S = [10, 20, 25, 40, 50, 80, 100, 200]

_MAGNETIC_FORCE_PAIRS = [
    {"left": "磁束密度 B", "right": ["磁界の強さを表す量の一つで、単位は T（テスラ）である"]},
    {"left": "磁界に垂直な直線電流が受ける力", "right": ["力の大きさは F=BIl で、力の向きは電流と磁界の両方に垂直である"]},
    {"left": "電流と磁界が平行な直線導線", "right": ["磁界から受ける力の大きさは0である"]},
    {"left": "ローレンツ力", "right": ["磁界中を運動する荷電粒子が磁界から受ける力である"]},
    {"left": "磁界に垂直に動く正電荷", "right": ["ローレンツ力は速度と磁界の両方に垂直な向きに働く"]},
    {"left": "磁界に垂直に動く負電荷", "right": ["同じ速度と磁界なら、ローレンツ力の向きは正電荷の場合と逆になる"]},
    {"left": "速度と磁界が平行な荷電粒子", "right": ["磁界から受けるローレンツ力の大きさは0である"]},
    {"left": "磁界に垂直に動く荷電粒子のローレンツ力", "right": ["力の大きさは F=|q|vB で表される"]},
]

_MAGNETIC_FORCE_FILL = [
    {"template": "電流Iの直線導線の長さlが磁束密度Bの磁界に垂直なとき、力の大きさは F={answer} である。", "answer": ["BIl", "B I l"]},
    {"template": "磁界に垂直な直線電流が受ける力の向きは、電流と磁界の{answer}に垂直である。", "answer": ["両方", "両方の方向"]},
    {"template": "電流と磁界が平行な直線導線が磁界から受ける力の大きさは{answer}である。", "answer": ["0", "0 N"]},
    {"template": "磁界中を運動する荷電粒子が磁界から受ける力を{answer}という。", "answer": ["ローレンツ力"]},
    {"template": "荷電粒子の速度と磁界が垂直なとき、ローレンツ力の大きさは F={answer} である。", "answer": ["|q|vB", "|q| v B"]},
    {"template": "同じ速度と磁界なら、負電荷のローレンツ力の向きは正電荷の場合と{answer}になる。", "answer": ["逆", "逆向き"]},
]

_MAGNETIC_FORCE_TF = [
    {"item": "磁束密度Bの単位", "property": "T（テスラ）である"},
    {"item": "磁界に垂直な直線電流", "property": "F=BIlの大きさの力を受ける"},
    {"item": "電流と磁界が平行な直線導線", "property": "磁界から受ける力の大きさは0である"},
    {"item": "ローレンツ力", "property": "磁界中を運動する荷電粒子に働く磁気力である"},
    {"item": "磁界に垂直に動く荷電粒子", "property": "ローレンツ力の大きさは|q|vBである"},
    {"item": "同じ速度と磁界中の正電荷と負電荷", "property": "ローレンツ力の向きは互いに逆である"},
    {"item": "速度と磁界が平行な荷電粒子", "property": "磁界から受けるローレンツ力の大きさは0である"},
]

PHYSICS_MAGNETIC_FORCE_TOPICS = {
    "magnetic-force-wire-perpendicular-numeric": {
        "generator": "formula",
        "title": "物理 磁場中の力：直線電流が受ける力",
        "unit": "電気と磁気：磁場中の力",
        "skill": "magnetic-force-wire-perpendicular-numeric",
        "formula": "一様な磁界と直線導線が垂直な場合の力の大きさ F=BIl。B[T]、I[A]、l[m]、F[N]",
        "seeds": _WIRE_FORCE_SEEDS,
        "spec": {
            "id": "physics-magnetic-force-wire-perpendicular",
            "relation": "product",
            "result": "force",
            "inputs": ["magnetic_flux_density", "current", "wire_length"],
            "variables": {
                "force": {"label": "導線が受ける力の大きさ F", "unit": "N"},
                "magnetic_flux_density": {"label": "磁束密度 B", "unit": "T", "values": _MAGNETIC_FLUX_DENSITY_T},
                "current": {"label": "直線導線を流れる電流 I", "unit": "A", "values": _CURRENT_A},
                "wire_length": {"label": "磁界中にある導線の長さ l", "unit": "m", "values": _WIRE_LENGTH_M},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-force": {"solve_for": "force", "worksheet_mode": "calculation-basic", "description": "磁界と導線が垂直な条件で F=BIl から力の大きさを求めます。"},
            "reverse-flux-density": {"solve_for": "magnetic_flux_density", "worksheet_mode": "calculation-reverse", "description": "F、I、lから磁束密度Bを逆算します。"},
            "reverse-current": {"solve_for": "current", "worksheet_mode": "calculation-reverse", "description": "F、B、lから電流Iを逆算します。"},
            "reverse-length": {"solve_for": "wire_length", "worksheet_mode": "calculation-reverse", "description": "F、B、Iから磁界中の導線の長さlを逆算します。"},
        },
    },
    "magnetic-force-lorentz-perpendicular-numeric": {
        "generator": "formula",
        "title": "物理 磁場中の力：ローレンツ力",
        "unit": "電気と磁気：磁場中の力",
        "skill": "magnetic-force-lorentz-perpendicular-numeric",
        "formula": "速度と一様な磁界が垂直な場合のローレンツ力の大きさ F=|q|vB。|q|[μC]、v[m/s]、B[T]、F[μN]（1 μC×m/s×T=1 μN）",
        "seeds": _LORENTZ_FORCE_SEEDS,
        "spec": {
            "id": "physics-magnetic-force-lorentz-perpendicular",
            "relation": "product",
            "result": "force",
            "inputs": ["charge_magnitude", "speed", "magnetic_flux_density"],
            "variables": {
                "force": {"label": "ローレンツ力の大きさ F", "unit": "μN"},
                "charge_magnitude": {"label": "電荷の大きさ |q|", "unit": "μC", "values": _CHARGE_MAGNITUDE_UC},
                "speed": {"label": "荷電粒子の速さ v", "unit": "m/s", "values": _SPEED_M_PER_S},
                "magnetic_flux_density": {"label": "磁束密度 B", "unit": "T", "values": _MAGNETIC_FLUX_DENSITY_T},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-force": {"solve_for": "force", "worksheet_mode": "calculation-basic", "description": "速度と磁界が垂直な条件で F=|q|vB からローレンツ力の大きさを求めます。"},
            "reverse-charge": {"solve_for": "charge_magnitude", "worksheet_mode": "calculation-reverse", "description": "F、v、Bから電荷の大きさ|q|を逆算します。"},
            "reverse-speed": {"solve_for": "speed", "worksheet_mode": "calculation-reverse", "description": "F、|q|、Bから荷電粒子の速さvを逆算します。"},
            "reverse-flux-density": {"solve_for": "magnetic_flux_density", "worksheet_mode": "calculation-reverse", "description": "F、|q|、vから磁束密度Bを逆算します。"},
        },
    },
    "magnetic-force-core-concepts": {
        "generator": "retrieval",
        "title": "物理 磁場中の力：電流・ローレンツ力の基本",
        "unit": "電気と磁気：磁場中の力",
        "skill": "magnetic-force-core-concepts",
        "seeds": _CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "電流が磁界から受ける力とローレンツ力の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _MAGNETIC_FORCE_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "磁気力の条件や性質を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _MAGNETIC_FORCE_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "磁気力の式・向き・条件を穴埋めで確認します。", "spec": {"mode": "fill", "items": _MAGNETIC_FORCE_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "電流が受ける力とローレンツ力の基本を○×で確認します。", "spec": {"mode": "tf", "items": _MAGNETIC_FORCE_TF}},
        },
    },
}
