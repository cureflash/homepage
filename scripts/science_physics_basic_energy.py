"""Physics Basics work and power topics for the shared worksheet factory.

The definitions stay inside formal course 物理基礎 and intentionally use only
shared product relations that are already independently recomputed by the
science worksheet helper. Work problems state the parallel-force/displacement
assumption explicitly so W = Fd is not used outside its basic one-dimensional
form.
"""

PHYSICS_BASIC_ENERGY_PROBLEM_COUNT = 20

PHYSICS_BASIC_ENERGY_TOPICS = {
    "work-parallel": {
        "title": "物理基礎 仕事",
        "unit": "物体の運動とエネルギー：力学的エネルギー",
        "skill": "work-parallel-force-displacement",
        "formula": "W = F × d（力と変位が平行）",
        "seeds": tuple(range(6691, 6701)),
        "spec": {
            "id": "physics-basic-work-parallel",
            "relation": "product",
            "result": "work",
            "inputs": ["force", "distance"],
            "variables": {
                "work": {"label": "仕事 W", "unit": "J"},
                "force": {"label": "変位と平行な力 F", "unit": "N", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]},
                "distance": {"label": "力と平行な変位 d", "unit": "m", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-work": {
                "solve_for": "work",
                "worksheet_mode": "calculation-basic",
                "description": "力と物体の変位が同じ向きで平行な場合に限定し、W = Fd から仕事を求める基本反復です。",
            },
            "reverse-force": {
                "solve_for": "force",
                "worksheet_mode": "calculation-reverse",
                "description": "力と変位が同じ向きで平行な場合に限定し、仕事と変位から W = Fd を使って力を求める基本逆算です。",
            },
            "reverse-distance": {
                "solve_for": "distance",
                "worksheet_mode": "calculation-reverse",
                "description": "力と変位が同じ向きで平行な場合に限定し、仕事と力から W = Fd を使って変位を求める基本逆算です。",
            },
        },
    },
    "work-rate": {
        "title": "物理基礎 仕事率",
        "unit": "物体の運動とエネルギー：力学的エネルギー",
        "skill": "work-rate",
        "formula": "W = P × t（P = W / t）",
        "seeds": tuple(range(6701, 6711)),
        "spec": {
            "id": "physics-basic-work-rate",
            "relation": "product",
            "result": "work",
            "inputs": ["power", "time"],
            "variables": {
                "work": {"label": "仕事 W", "unit": "J"},
                "power": {"label": "仕事率 P", "unit": "W", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 60, 80, 100]},
                "time": {"label": "時間 t", "unit": "s", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-work-rate": {
                "solve_for": "power",
                "worksheet_mode": "calculation-basic",
                "description": "一定時間に行った仕事から、P = W/t を使って仕事率を求める基本反復です。",
            },
            "reverse-time": {
                "solve_for": "time",
                "worksheet_mode": "calculation-reverse",
                "description": "仕事と仕事率から、W = Pt を使って仕事に要した時間を求める基本逆算です。",
            },
        },
    },
}
