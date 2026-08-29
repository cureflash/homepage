"""Formal Physics electromagnetic-induction follow-up checkpoints.

Covers self-induction, mutual induction and the remaining core concepts before
advancing to AC circuits. Numerical questions ask only for magnitudes and keep
all quantities, units and sign/direction scope learner-visible.
"""

PHYSICS_INDUCTION_FOLLOWUP_PROBLEM_COUNT = 20
_SELF_SEEDS = tuple(range(8061, 8071))
_MUTUAL_SEEDS = tuple(range(8071, 8081))
_CONCEPT_SEEDS = tuple(range(8081, 8091))

_INDUCTANCE_H = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 2.0]
_MUTUAL_INDUCTANCE_H = [0.05, 0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.0]
_CURRENT_CHANGE_A = [0.2, 0.4, 0.5, 1.0, 2.0, 4.0, 5.0]
_TIME_S = [0.1, 0.2, 0.25, 0.5, 1.0, 2.0]

_PAIRS = [
    {"left": "自己誘導", "right": ["コイル自身の電流変化により、その変化を妨げる向きの誘導起電力が生じる現象である"]},
    {"left": "自己インダクタンス L", "right": ["自己誘導起電力の大きさを |E|=L|ΔI|/Δt と表す比例定数で、単位は H である"]},
    {"left": "相互誘導", "right": ["一方のコイルの電流変化により、磁束を介して他方のコイルに誘導起電力が生じる現象である"]},
    {"left": "相互インダクタンス M", "right": ["相互誘導起電力の大きさを |E2|=M|ΔI1|/Δt と表す比例定数で、単位は H である"]},
    {"left": "交流発電機", "right": ["コイルを貫く磁束を周期的に変化させて交流の起電力を発生させる"]},
    {"left": "誘導起電力の向き", "right": ["電流や磁束の変化を妨げる向きになることをレンツの法則で判断する"]},
]
_FILL = [
    {"template": "自己誘導起電力の大きさは、自己インダクタンスLを用いて {answer} と表される。", "answer": ["L|ΔI|/Δt", "L |ΔI| / Δt"]},
    {"template": "自己インダクタンスと相互インダクタンスのSI単位はともに {answer} である。", "answer": ["H", "ヘンリー", "H（ヘンリー）"]},
    {"template": "一方のコイルの電流変化によって他方のコイルに誘導起電力が生じる現象を {answer} という。", "answer": ["相互誘導"]},
    {"template": "相互誘導起電力の大きさは、相互インダクタンスMを用いて {answer} と表される。", "answer": ["M|ΔI1|/Δt", "M |ΔI1| / Δt"]},
    {"template": "コイルを貫く磁束を周期的に変化させて交流を発生させる装置を {answer} という。", "answer": ["交流発電機"]},
]
_TF = [
    {"item": "自己誘導", "property": "コイル自身の電流変化によって誘導起電力が生じる"},
    {"item": "自己インダクタンスL", "property": "SI単位はH（ヘンリー）である"},
    {"item": "相互誘導", "property": "一方のコイルの電流変化が他方のコイルに誘導起電力を生じさせる"},
    {"item": "相互インダクタンスM", "property": "SI単位はH（ヘンリー）である"},
    {"item": "交流発電機", "property": "磁束の周期的変化を利用して交流の起電力を発生させる"},
]


def _numeric_topic(title, skill, coefficient_key, coefficient_label, coefficient_values, formula, seeds):
    return {
        "generator": "formula", "title": title, "unit": "電気と磁気：電磁誘導", "skill": skill,
        "formula": formula, "seeds": seeds,
        "spec": {
            "id": f"physics-{skill}", "relation": "product-over-divisor", "result": "emf",
            "inputs": [coefficient_key, "current_change", "time_interval"],
            "variables": {
                "emf": {"label": "誘導起電力の大きさ |E|", "unit": "V"},
                coefficient_key: {"label": coefficient_label, "unit": "H", "values": coefficient_values},
                "current_change": {"label": "電流変化の大きさ |ΔI|", "unit": "A", "values": _CURRENT_CHANGE_A},
                "time_interval": {"label": "電流が変化した時間 Δt", "unit": "s", "values": _TIME_S},
            }, "tolerance": 1e-9,
        },
        "modes": {
            "basic-emf": {"solve_for": "emf", "worksheet_mode": "calculation-basic", "description": "誘導起電力の大きさを求めます。"},
            "reverse-inductance": {"solve_for": coefficient_key, "worksheet_mode": "calculation-reverse", "description": "誘導起電力、電流変化、時間からインダクタンスを逆算します。"},
            "reverse-current-change": {"solve_for": "current_change", "worksheet_mode": "calculation-reverse", "description": "誘導起電力、インダクタンス、時間から電流変化の大きさを逆算します。"},
            "reverse-time": {"solve_for": "time_interval", "worksheet_mode": "calculation-reverse", "description": "誘導起電力、インダクタンス、電流変化から時間を逆算します。"},
        },
    }


PHYSICS_INDUCTION_FOLLOWUP_TOPICS = {
    "induction-self-inductance-numeric": _numeric_topic(
        "物理 電磁誘導：自己誘導", "induction-self-inductance-numeric", "inductance",
        "自己インダクタンス L", _INDUCTANCE_H, "自己誘導起電力の大きさ |E|=L|ΔI|/Δt。|E|[V]、L[H]、|ΔI|[A]、Δt[s]。向きはレンツの法則で別途判断し、この数値問題は大きさだけを扱う。", _SELF_SEEDS),
    "induction-mutual-inductance-numeric": _numeric_topic(
        "物理 電磁誘導：相互誘導", "induction-mutual-inductance-numeric", "mutual_inductance",
        "相互インダクタンス M", _MUTUAL_INDUCTANCE_H, "相互誘導起電力の大きさ |E2|=M|ΔI1|/Δt。|E2|[V]、M[H]、|ΔI1|[A]、Δt[s]。向きはレンツの法則で別途判断し、この数値問題は大きさだけを扱う。", _MUTUAL_SEEDS),
    "induction-followup-concepts": {
        "generator": "retrieval", "title": "物理 電磁誘導：自己誘導・相互誘導・交流発電", "unit": "電気と磁気：電磁誘導",
        "skill": "induction-followup-concepts", "seeds": _CONCEPT_SEEDS,
        "modes": {
            "forward": {"label": "項目→内容", "worksheet_mode": "retrieval-forward", "description": "自己誘導・相互誘導・交流発電の基本を確認します。", "spec": {"mode": "forward", "left_label": "項目", "right_label": "内容", "items": _PAIRS}},
            "reverse": {"label": "内容→項目", "worksheet_mode": "retrieval-reverse", "description": "説明から自己誘導・相互誘導などの項目を答えます。", "spec": {"mode": "reverse", "left_label": "項目", "right_label": "内容", "items": _PAIRS}},
            "fill": {"label": "穴埋め", "worksheet_mode": "retrieval-fill", "description": "式・単位・現象名を穴埋めで確認します。", "spec": {"mode": "fill", "items": _FILL}},
            "tf": {"label": "正誤", "worksheet_mode": "retrieval-tf", "description": "自己誘導・相互誘導・交流発電の基本を○×で確認します。", "spec": {"mode": "tf", "items": _TF}},
        },
    },
}
