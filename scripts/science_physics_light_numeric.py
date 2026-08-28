"""Formal-course Physics numerical checkpoints for basic optics.

The current MEXT formal Physics light subsection covers reflection/refraction
(including refractive index), then diffraction/interference including Young's
experiment and diffraction gratings. These drills keep every quantity used by
the algebra learner-visible. Trigonometric inverse solving is intentionally not
introduced: Snell/grating problems provide sin(theta) directly so the existing
transparent reversible formula helpers can validate answers independently.
"""

PHYSICS_LIGHT_NUMERIC_PROBLEM_COUNT = 20
_REFLECTION_SEEDS = tuple(range(7831, 7841))
_REFRACTIVE_INDEX_SEEDS = tuple(range(7841, 7851))
_SNELL_SEEDS = tuple(range(7851, 7861))
_YOUNG_SEEDS = tuple(range(7861, 7871))
_GRATING_SEEDS = tuple(range(7871, 7881))

_INCIDENT_ANGLES = [10, 20, 30, 40, 50, 60, 70]
_MEDIUM_SPEED_VALUES = [1.2e8, 1.5e8, 2.0e8, 2.4e8]
_REFRACTIVE_INDEX_VALUES = [1.2, 1.5, 2.0]
_SINE_VALUES = [0.2, 0.3, 0.4, 0.6]
_WAVELENGTH_MM_VALUES = [0.0004, 0.0005, 0.0006, 0.0007]
_SCREEN_DISTANCE_MM_VALUES = [500, 1000, 1500, 2000]
_SLIT_SPACING_MM_VALUES = [0.25, 0.5, 1.0]
_GRATING_SPACING_UM_VALUES = [1.0, 1.5, 2.0, 2.5]
_GRATING_SINE_VALUES = [0.2, 0.3, 0.4, 0.5, 0.6]
_ORDER_VALUES = [1, 2]

PHYSICS_LIGHT_NUMERIC_TOPICS = {
    "light-reflection-angle-numeric": {
        "generator": "formula",
        "title": "物理 光：反射角の基本計算",
        "unit": "波：光",
        "skill": "light-reflection-angle-numeric",
        "formula": "反射の法則：反射角 = 入射角（角度は境界面の法線から測る）",
        "seeds": _REFLECTION_SEEDS,
        "spec": {
            "id": "physics-light-reflection-angle",
            "relation": "product",
            "result": "reflection_angle",
            "inputs": ["incident_angle", "coefficient"],
            "variables": {
                "reflection_angle": {"label": "反射角", "unit": "°"},
                "incident_angle": {"label": "入射角（法線から）", "unit": "°", "values": _INCIDENT_ANGLES},
                "coefficient": {"label": "反射の法則の係数", "unit": "", "values": [1]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-reflection-angle": {
                "solve_for": "reflection_angle",
                "worksheet_mode": "calculation-basic",
                "description": "角度を境界面の法線から測り、反射の法則から反射角を求めます。",
            },
        },
    },
    "light-refractive-index-speed-numeric": {
        "generator": "formula",
        "title": "物理 光：屈折率と光の速さ",
        "unit": "波：光",
        "skill": "light-refractive-index-speed-numeric",
        "formula": "n = c / v（c=3.0×10^8 m/s、n>0、v>0）",
        "seeds": _REFRACTIVE_INDEX_SEEDS,
        "spec": {
            "id": "physics-light-refractive-index-speed",
            "relation": "product-over-divisor",
            "result": "refractive_index",
            "inputs": ["vacuum_speed", "medium_speed"],
            "variables": {
                "refractive_index": {"label": "屈折率 n", "unit": ""},
                "vacuum_speed": {"label": "真空中の光速 c", "unit": "m/s", "values": [3.0e8]},
                "medium_speed": {"label": "媒質中の光速 v", "unit": "m/s", "values": _MEDIUM_SPEED_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-refractive-index": {
                "solve_for": "refractive_index",
                "worksheet_mode": "calculation-basic",
                "description": "n=c/v を用い、真空中と媒質中の光速から屈折率を求めます。",
            },
            "reverse-medium-speed": {
                "solve_for": "medium_speed",
                "worksheet_mode": "calculation-reverse",
                "description": "n=c/v を用い、屈折率と真空中の光速から媒質中の光速を逆算します。",
            },
        },
    },
    "light-snell-law-sine-numeric": {
        "generator": "formula",
        "title": "物理 光：スネルの法則",
        "unit": "波：光",
        "skill": "light-snell-law-sine-numeric",
        "formula": "n1 sin i = n2 sin r（角度は法線から測り、sin i と sin r を数値で明示）",
        "seeds": _SNELL_SEEDS,
        "spec": {
            "id": "physics-light-snell-law-sine",
            "relation": "equal-products",
            "result": "sin_r",
            "inputs": ["refractive_index_2", "refractive_index_1", "sin_i"],
            "variables": {
                "sin_r": {"label": "sin r", "unit": ""},
                "refractive_index_2": {"label": "媒質2の屈折率 n2", "unit": "", "values": _REFRACTIVE_INDEX_VALUES},
                "refractive_index_1": {"label": "媒質1の屈折率 n1", "unit": "", "values": [1.0, 1.2, 1.5]},
                "sin_i": {"label": "入射角 i の sin i", "unit": "", "values": _SINE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-sin-r": {
                "solve_for": "sin_r",
                "worksheet_mode": "calculation-basic",
                "description": "n1 sin i=n2 sin r を用い、屈折率とsin iからsin rを求めます。角度は法線から測ります。",
            },
            "reverse-refractive-index-2": {
                "solve_for": "refractive_index_2",
                "worksheet_mode": "calculation-reverse",
                "description": "n1 sin i=n2 sin r から媒質2の屈折率n2を逆算します。",
            },
            "reverse-sin-i": {
                "solve_for": "sin_i",
                "worksheet_mode": "calculation-reverse",
                "description": "n1 sin i=n2 sin r からsin iを逆算します。",
            },
        },
    },
    "light-young-fringe-spacing-numeric": {
        "generator": "formula",
        "title": "物理 光：ヤングの干渉縞間隔",
        "unit": "波：光",
        "skill": "light-young-fringe-spacing-numeric",
        "formula": "Δx = λL/d（λ,L,d,Δx はすべて mm で統一、各量は正）",
        "seeds": _YOUNG_SEEDS,
        "spec": {
            "id": "physics-light-young-fringe-spacing",
            "relation": "product-over-divisor",
            "result": "fringe_spacing",
            "inputs": ["wavelength", "screen_distance", "slit_spacing"],
            "variables": {
                "fringe_spacing": {"label": "干渉縞の間隔 Δx", "unit": "mm"},
                "wavelength": {"label": "波長 λ", "unit": "mm", "values": _WAVELENGTH_MM_VALUES},
                "screen_distance": {"label": "二重スリットからスクリーンまでの距離 L", "unit": "mm", "values": _SCREEN_DISTANCE_MM_VALUES},
                "slit_spacing": {"label": "二つのスリットの間隔 d", "unit": "mm", "values": _SLIT_SPACING_MM_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-fringe-spacing": {
                "solve_for": "fringe_spacing",
                "worksheet_mode": "calculation-basic",
                "description": "Δx=λL/d を用い、波長・スクリーン距離・スリット間隔から干渉縞の間隔を求めます。",
            },
            "reverse-screen-distance": {
                "solve_for": "screen_distance",
                "worksheet_mode": "calculation-reverse",
                "description": "Δx=λL/d からスクリーンまでの距離Lを逆算します。",
            },
            "reverse-slit-spacing": {
                "solve_for": "slit_spacing",
                "worksheet_mode": "calculation-reverse",
                "description": "Δx=λL/d からスリット間隔dを逆算します。",
            },
        },
    },
    "light-diffraction-grating-numeric": {
        "generator": "formula",
        "title": "物理 光：回折格子",
        "unit": "波：光",
        "skill": "light-diffraction-grating-numeric",
        "formula": "d sin θ = mλ（d,λ は μm、mは正の整数、sin θ を数値で明示）",
        "seeds": _GRATING_SEEDS,
        "spec": {
            "id": "physics-light-diffraction-grating",
            "relation": "product-over-divisor",
            "result": "wavelength",
            "inputs": ["grating_spacing", "sin_theta", "order"],
            "variables": {
                "wavelength": {"label": "波長 λ", "unit": "μm"},
                "grating_spacing": {"label": "格子間隔 d", "unit": "μm", "values": _GRATING_SPACING_UM_VALUES},
                "sin_theta": {"label": "回折角 θ の sin θ", "unit": "", "values": _GRATING_SINE_VALUES},
                "order": {"label": "回折次数 m", "unit": "", "values": _ORDER_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-wavelength": {
                "solve_for": "wavelength",
                "worksheet_mode": "calculation-basic",
                "description": "d sinθ=mλ を用い、格子間隔・sinθ・回折次数から波長λを求めます。",
            },
            "reverse-grating-spacing": {
                "solve_for": "grating_spacing",
                "worksheet_mode": "calculation-reverse",
                "description": "d sinθ=mλ から格子間隔dを逆算します。",
            },
            "reverse-sin-theta": {
                "solve_for": "sin_theta",
                "worksheet_mode": "calculation-reverse",
                "description": "d sinθ=mλ からsinθを逆算します。",
            },
        },
    },
}
