"""Formal-course Physics numerical checkpoints for electric field and potential.

The current MEXT formal Physics electricity section covers charge/electric
field, the force between charges, and the relationship between electric field,
electric potential, and electrostatic potential energy.  These drills keep the
inverse-distance quantities and sign conventions learner-visible so every
answer can be independently recomputed with the existing reversible ``product``
relation; no hidden square-root or distance transformation is introduced.

For compact school-level arithmetic, charge is expressed in microcoulombs and
scaled output units are used explicitly:
- F[mN] = 9 |q1[μC]| |q2[μC]| (1/r²[m⁻²])
- E[kN/C] = 9 |Q[μC]| (1/r²[m⁻²])
- V[kV] = 9 Q[μC] (1/r[m⁻¹])
These are exactly the usual point-charge relations with
k ≈ 9.0×10^9 N·m²/C² after the stated unit conversions.
"""

PHYSICS_ELECTRIC_FIELD_POTENTIAL_PROBLEM_COUNT = 20
_COULOMB_SEEDS = tuple(range(7881, 7891))
_ELECTRIC_FIELD_SEEDS = tuple(range(7891, 7901))
_ELECTRIC_POTENTIAL_SEEDS = tuple(range(7901, 7911))
_POTENTIAL_ENERGY_SEEDS = tuple(range(7911, 7921))

_COULOMB_COEFFICIENT = [9.0]
_CHARGE_MAGNITUDES_UC = [1, 2, 3, 4, 5, 6]
_SIGNED_CHARGES_UC = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]
_INVERSE_SQUARE_VALUES = [1, 0.25, 0.0625, 0.04, 0.01]
_INVERSE_DISTANCE_VALUES = [1, 0.5, 0.25, 0.2, 0.1]
_POTENTIAL_VALUES_KV = [-54, -36, -27, -18, -9, 9, 18, 27, 36, 54]

PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS = {
    "electric-coulomb-force-numeric": {
        "generator": "formula",
        "title": "物理 電場・電位：クーロン力の基本計算",
        "unit": "電気と磁気：電場・電位",
        "skill": "electric-coulomb-force-numeric",
        "formula": "F=k|q₁q₂|/r²。k≈9.0×10^9 N·m²/C²。μCとmを用いると F[mN]=9|q₁[μC]||q₂[μC]|(1/r²[m⁻²])",
        "seeds": _COULOMB_SEEDS,
        "spec": {
            "id": "physics-electric-coulomb-force",
            "relation": "product",
            "result": "force",
            "inputs": ["scaled_coulomb_constant", "charge_1_magnitude", "charge_2_magnitude", "inverse_square_distance"],
            "variables": {
                "force": {"label": "静電気力の大きさ F", "unit": "mN"},
                "scaled_coulomb_constant": {"label": "μC・m・mN用の係数", "unit": "", "values": _COULOMB_COEFFICIENT},
                "charge_1_magnitude": {"label": "電荷1の大きさ |q₁|", "unit": "μC", "values": _CHARGE_MAGNITUDES_UC},
                "charge_2_magnitude": {"label": "電荷2の大きさ |q₂|", "unit": "μC", "values": _CHARGE_MAGNITUDES_UC},
                "inverse_square_distance": {"label": "電荷間距離の逆2乗 1/r²", "unit": "m⁻²", "values": _INVERSE_SQUARE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-force": {"solve_for": "force", "worksheet_mode": "calculation-basic", "description": "クーロンの法則から静電気力の大きさを求めます。電荷の符号ではなく大きさを用います。"},
            "reverse-charge": {"solve_for": "charge_1_magnitude", "worksheet_mode": "calculation-reverse", "description": "静電気力、もう一方の電荷、1/r²から未知の電荷の大きさを逆算します。"},
            "reverse-inverse-square": {"solve_for": "inverse_square_distance", "worksheet_mode": "calculation-reverse", "description": "静電気力と二つの電荷の大きさから1/r²を逆算します。"},
        },
    },
    "electric-point-charge-field-numeric": {
        "generator": "formula",
        "title": "物理 電場・電位：点電荷がつくる電界",
        "unit": "電気と磁気：電場・電位",
        "skill": "electric-point-charge-field-numeric",
        "formula": "E=k|Q|/r²。μCとmを用いると E[kN/C]=9|Q[μC]|(1/r²[m⁻²])。ここでは電界の大きさを扱う",
        "seeds": _ELECTRIC_FIELD_SEEDS,
        "spec": {
            "id": "physics-electric-point-charge-field",
            "relation": "product",
            "result": "electric_field",
            "inputs": ["scaled_coulomb_constant", "source_charge_magnitude", "inverse_square_distance"],
            "variables": {
                "electric_field": {"label": "電界の大きさ E", "unit": "kN/C"},
                "scaled_coulomb_constant": {"label": "μC・m・kN/C用の係数", "unit": "", "values": _COULOMB_COEFFICIENT},
                "source_charge_magnitude": {"label": "点電荷の大きさ |Q|", "unit": "μC", "values": _CHARGE_MAGNITUDES_UC},
                "inverse_square_distance": {"label": "点電荷からの距離の逆2乗 1/r²", "unit": "m⁻²", "values": _INVERSE_SQUARE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-field": {"solve_for": "electric_field", "worksheet_mode": "calculation-basic", "description": "点電荷がつくる電界の大きさ E=k|Q|/r² を計算します。"},
            "reverse-source-charge": {"solve_for": "source_charge_magnitude", "worksheet_mode": "calculation-reverse", "description": "電界の大きさと1/r²から点電荷の大きさを逆算します。"},
            "reverse-inverse-square": {"solve_for": "inverse_square_distance", "worksheet_mode": "calculation-reverse", "description": "電界の大きさと点電荷の大きさから1/r²を逆算します。"},
        },
    },
    "electric-point-charge-potential-numeric": {
        "generator": "formula",
        "title": "物理 電場・電位：点電荷がつくる電位",
        "unit": "電気と磁気：電場・電位",
        "skill": "electric-point-charge-potential-numeric",
        "formula": "無限遠を電位0とし V=kQ/r。μCとmを用いると V[kV]=9Q[μC](1/r[m⁻¹])。QとVの符号は一致する",
        "seeds": _ELECTRIC_POTENTIAL_SEEDS,
        "spec": {
            "id": "physics-electric-point-charge-potential",
            "relation": "product",
            "result": "electric_potential",
            "inputs": ["scaled_coulomb_constant", "source_charge", "inverse_distance"],
            "variables": {
                "electric_potential": {"label": "電位 V（無限遠を0）", "unit": "kV"},
                "scaled_coulomb_constant": {"label": "μC・m・kV用の係数", "unit": "", "values": _COULOMB_COEFFICIENT},
                "source_charge": {"label": "点電荷 Q", "unit": "μC", "values": _SIGNED_CHARGES_UC},
                "inverse_distance": {"label": "点電荷からの距離の逆数 1/r", "unit": "m⁻¹", "values": _INVERSE_DISTANCE_VALUES},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-potential": {"solve_for": "electric_potential", "worksheet_mode": "calculation-basic", "description": "無限遠を0として V=kQ/r を計算し、電荷の符号を電位に反映します。"},
            "reverse-source-charge": {"solve_for": "source_charge", "worksheet_mode": "calculation-reverse", "description": "電位と1/rから点電荷Qを符号付きで逆算します。"},
            "reverse-inverse-distance": {"solve_for": "inverse_distance", "worksheet_mode": "calculation-reverse", "description": "電位と点電荷から正の1/rを逆算します。"},
        },
    },
    "electric-potential-energy-numeric": {
        "generator": "formula",
        "title": "物理 電場・電位：電位と静電気力による位置エネルギー",
        "unit": "電気と磁気：電場・電位",
        "skill": "electric-potential-energy-numeric",
        "formula": "U=qV。q[μC] と V[kV] を用いると U[mJ]=q[μC]V[kV]。Uの符号はqとVの符号で決まる",
        "seeds": _POTENTIAL_ENERGY_SEEDS,
        "spec": {
            "id": "physics-electric-potential-energy",
            "relation": "product",
            "result": "potential_energy",
            "inputs": ["charge", "electric_potential"],
            "variables": {
                "potential_energy": {"label": "静電気力による位置エネルギー U", "unit": "mJ"},
                "charge": {"label": "電荷 q", "unit": "μC", "values": _SIGNED_CHARGES_UC},
                "electric_potential": {"label": "電位 V", "unit": "kV", "values": _POTENTIAL_VALUES_KV},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-energy": {"solve_for": "potential_energy", "worksheet_mode": "calculation-basic", "description": "U=qVから静電気力による位置エネルギーを符号付きで求めます。"},
            "reverse-charge": {"solve_for": "charge", "worksheet_mode": "calculation-reverse", "description": "位置エネルギーと電位から電荷qを符号付きで逆算します。"},
            "reverse-potential": {"solve_for": "electric_potential", "worksheet_mode": "calculation-reverse", "description": "位置エネルギーと電荷から電位Vを符号付きで逆算します。"},
        },
    },
}
