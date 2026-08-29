"""Formal-course Physics electromagnetic-induction checkpoints.

The current MEXT formal Physics curriculum treats electromagnetic induction in
the electricity and magnetism section. These first checkpoints cover Faraday's
law, motional emf, and core induction concepts while keeping every numerical
quantity and sign/direction convention learner-visible. Shared formula helpers
are reused without changing the common generator.
"""

PHYSICS_ELECTROMAGNETIC_INDUCTION_PROBLEM_COUNT = 20
_FARADAY_SEEDS = tuple(range(8031, 8041))
_MOTIONAL_EMF_SEEDS = tuple(range(8041, 8051))
_CONCEPT_SEEDS = tuple(range(8051, 8061))

_TURNS = [1, 2, 5, 10, 20, 50, 100]
_FLUX_CHANGE_WB = [0.01, 0.02, 0.04, 0.05, 0.1, 0.2]
_TIME_S = [0.1, 0.2, 0.25, 0.5, 1.0, 2.0]
_MAGNETIC_FLUX_DENSITY_T = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0]
_ROD_LENGTH_M = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0]
_SPEED_M_PER_S = [0.5, 1, 2, 4, 5, 8, 10]

_INDUCTION_PAIRS = [
    {"left": "電磁誘導", "right": ["回路を貫く磁束が変化すると、その変化を妨げる向きに誘導起電力が生じる現象である"]},
    {"left": "ファラデーの電磁誘導の法則", "right": ["N巻コイルでは誘導起電力の大きさが N|ΔΦ|/Δt で表される"]},
    {"left": "レンツの法則", "right": ["誘導電流は、その誘導電流がつくる磁界が磁束の変化を妨げる向きに流れる"]},
    {"left": "磁束 Φ", "right": ["一様な磁界が面に垂直なら Φ=BS で表され、単位は Wb（ウェーバ）である"]},
    {"left": "磁束が時間的に変化しない閉回路", "right": ["電磁誘導による誘導起電力は0である"]},
    {"left": "磁界中を磁界・導体棒の両方に垂直に動く導体棒", "right": ["導体棒の両端に大きさ Blv の運動起電力が生じる"]},
    {"left": "導体棒の運動起電力", "right": ["磁束密度B、棒の長さl、速さvが互いに垂直な条件では Blv で表される"]},
    {"left": "誘導起電力の向き", "right": ["磁束の増減と回路の向きを確認し、レンツの法則で決める"]},
]

_INDUCTION_FILL = [
    {"template": "N巻コイルを貫く磁束がΔtの間にΔΦだけ変化するとき、誘導起電力の大きさは {answer} である。", "answer": ["N|ΔΦ|/Δt", "N |ΔΦ| / Δt"]},
    {"template": "誘導電流がつくる磁界は、もとの磁束の変化を{answer}向きになる。", "answer": ["妨げる", "妨げる向き"]},
    {"template": "磁束Φの単位は{answer}である。", "answer": ["Wb", "ウェーバ", "Wb（ウェーバ）"]},
    {"template": "磁束が時間的に変化しなければ、電磁誘導による誘導起電力は{answer}である。", "answer": ["0", "0 V"]},
    {"template": "磁界・導体棒・速度が互いに垂直なとき、運動起電力の大きさは {answer} である。", "answer": ["Blv", "B l v"]},
    {"template": "誘導電流の向きを決める法則を{answer}という。", "answer": ["レンツの法則"]},
]

_INDUCTION_TF = [
    {"item": "電磁誘導", "property": "回路を貫く磁束の変化によって誘導起電力が生じる現象である"},
    {"item": "レンツの法則", "property": "誘導電流がつくる磁界は磁束の変化を妨げる向きになる"},
    {"item": "N巻コイルの誘導起電力の大きさ", "property": "平均的にはN|ΔΦ|/Δtで求められる"},
    {"item": "磁束Φ", "property": "単位はWb（ウェーバ）である"},
    {"item": "磁束が時間的に変化しない閉回路", "property": "電磁誘導による誘導起電力は0である"},
    {"item": "磁界・棒・速度が互いに垂直な導体棒", "property": "運動起電力の大きさはBlvである"},
]

PHYSICS_ELECTROMAGNETIC_INDUCTION_TOPICS = {
    "induction-faraday-average-emf-numeric": {
        "generator": "formula",
        "title": "物理 電磁誘導：ファラデーの法則",
        "unit": "電気と磁気：電磁誘導",
        "skill": "induction-faraday-average-emf-numeric",
        "formula": "誘導起電力の大きさ E=N|ΔΦ|/Δt。E[V]、N[巻]、|ΔΦ|[Wb]、Δt[s]。向きはこの数値問題では扱わず大きさだけを求める。",
        "seeds": _FARADAY_SEEDS,
        "spec": {
            "id": "physics-induction-faraday-average-emf",
            "relation": "product-over-divisor",
            "result": "emf",
            "inputs": ["turns", "flux_change", "time_interval"],
            "variables": {
                "emf": {"label": "誘導起電力の大きさ E", "unit": "V"},
                "turns": {"label": "コイルの巻数 N", "unit": "巻", "values": _TURNS},
                "flux_change": {"label": "1巻あたりの磁束変化の大きさ |ΔΦ|", "unit": "Wb", "values": _FLUX_CHANGE_WB},
                "time_interval": {"label": "磁束が変化した時間 Δt", "unit": "s", "values": _TIME_S},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-emf": {"solve_for": "emf", "worksheet_mode": "calculation-basic", "description": "E=N|ΔΦ|/Δtから誘導起電力の大きさを求めます。"},
            "reverse-turns": {"solve_for": "turns", "worksheet_mode": "calculation-reverse", "description": "E、|ΔΦ|、Δtからコイルの巻数Nを逆算します。"},
            "reverse-flux-change": {"solve_for": "flux_change", "worksheet_mode": "calculation-reverse", "description": "E、N、Δtから1巻あたりの磁束変化の大きさ|ΔΦ|を逆算します。"},
            "reverse-time": {"solve_for": "time_interval", "worksheet_mode": "calculation-reverse", "description": "E、N、|ΔΦ|から磁束が変化した時間Δtを逆算します。"},
        },
    },
    "induction-motional-emf-perpendicular-numeric": {
        "generator": "formula",
        "title": "物理 電磁誘導：導体棒の運動起電力",
        "unit": "電気と磁気：電磁誘導",
        "skill": "induction-motional-emf-perpendicular-numeric",
        "formula": "磁界・導体棒・速度が互いに垂直な場合の運動起電力の大きさ E=Blv。B[T]、l[m]、v[m/s]、E[V]",
        "seeds": _MOTIONAL_EMF_SEEDS,
        "spec": {
            "id": "physics-induction-motional-emf-perpendicular",
            "relation": "product",
            "result": "emf",
            "inputs": ["magnetic_flux_density", "rod_length", "speed"],
            "variables": {
                "emf": {"label": "導体棒の両端に生じる起電力の大きさ E", "unit": "V"},
                "magnetic_flux_density": {"label": "磁束密度 B", "unit": "T", "values": _MAGNETIC_FLUX_DENSITY_T},
                "rod_length": {"label": "磁界中にある導体棒の長さ l", "unit": "m", "values": _ROD_LENGTH_M},
                "speed": {"label": "導体棒の速さ v", "unit": "m/s", "values": _SPEED_M_PER_S},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-emf": {"solve_for": "emf", "worksheet_mode": "calculation-basic", "description": "互いに垂直な条件でE=Blvから運動起電力の大きさを求めます。"},
            "reverse-flux-density": {"solve_for": "magnetic_flux_density", "worksheet_mode": "calculation-reverse", "description": "E、l、vから磁束密度Bを逆算します。"},
            "reverse-length": {"solve_for": "rod_length", "worksheet_mode": "calculation-reverse", "description": "E、B、vから導体棒の長さlを逆算します。"},
            "reverse-speed": {"solve_for": "speed", "worksheet_mode": "calculation-reverse", "description": "E、B、lから導体棒の速さvを逆算します。"},
        },
    },
    "induction-core-concepts": {
        "generator": "retrieval",
        "title": "物理 電磁誘導：基本概念",
        "unit": "電気と磁気：電磁誘導",
        "skill": "induction-core-concepts",
        "seeds": _CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "電磁誘導・ファラデーの法則・レンツの法則の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _INDUCTION_PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "電磁誘導の法則や条件を説明から一意に取り出します。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _INDUCTION_PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "電磁誘導の式・単位・向きを穴埋めで確認します。", "spec": {"mode": "fill", "items": _INDUCTION_FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "電磁誘導と運動起電力の基本を○×で確認します。", "spec": {"mode": "tf", "items": _INDUCTION_TF}},
        },
    },
}
