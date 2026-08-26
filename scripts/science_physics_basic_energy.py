"""Physics Basics work and mechanical-energy topics for the shared worksheet factory.

All definitions stay inside formal course 物理基礎. Work and gravitational
potential-energy drills use the independently validated shared product relation.
Kinetic and elastic potential energy use the shared half-product-last-square
relation so the actual speed/extension is sampled and squared by the helper;
no unrelated squared variable is introduced.
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
    "gravitational-potential": {
        "title": "物理基礎 重力による位置エネルギー",
        "unit": "物体の運動とエネルギー：力学的エネルギー",
        "skill": "gravitational-potential-energy",
        "formula": "U = mgh（基準面を U = 0 とする）",
        "seeds": tuple(range(6711, 6721)),
        "spec": {
            "id": "physics-basic-gravitational-potential",
            "relation": "product",
            "result": "potential_energy",
            "inputs": ["mass", "gravity", "height"],
            "variables": {
                "potential_energy": {"label": "重力による位置エネルギー U", "unit": "J"},
                "mass": {"label": "質量 m", "unit": "kg", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
                "gravity": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
                "height": {"label": "基準面からの高さ h", "unit": "m", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-potential-energy": {
                "solve_for": "potential_energy",
                "worksheet_mode": "calculation-basic",
                "description": "位置エネルギーの基準面を U = 0 と明示し、U = mgh から重力による位置エネルギーを求める基本反復です。",
            },
            "reverse-mass": {
                "solve_for": "mass",
                "worksheet_mode": "calculation-reverse",
                "description": "基準面からの高さと重力による位置エネルギーから、U = mgh を使って質量を求める基本逆算です。",
            },
            "reverse-height": {
                "solve_for": "height",
                "worksheet_mode": "calculation-reverse",
                "description": "質量と重力による位置エネルギーから、U = mgh を使って基準面からの高さを求める基本逆算です。",
            },
        },
    },
    "kinetic-energy": {
        "title": "物理基礎 運動エネルギー",
        "unit": "物体の運動とエネルギー：力学的エネルギー",
        "skill": "kinetic-energy",
        "formula": "K = 1/2 mv²",
        "seeds": tuple(range(6721, 6731)),
        "spec": {
            "id": "physics-basic-kinetic-energy",
            "relation": "half-product-last-square",
            "result": "kinetic_energy",
            "inputs": ["mass", "speed"],
            "variables": {
                "kinetic_energy": {"label": "運動エネルギー K", "unit": "J"},
                "mass": {"label": "質量 m", "unit": "kg", "values": [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]},
                "speed": {"label": "速さ v", "unit": "m/s", "values": [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-kinetic-energy": {
                "solve_for": "kinetic_energy",
                "worksheet_mode": "calculation-basic",
                "description": "質量と速さから K = 1/2 mv² を使って運動エネルギーを求める基本反復です。",
            },
            "reverse-mass": {
                "solve_for": "mass",
                "worksheet_mode": "calculation-reverse",
                "description": "運動エネルギーと速さから K = 1/2 mv² を使って質量を求める基本逆算です。",
            },
            "reverse-speed": {
                "solve_for": "speed",
                "worksheet_mode": "calculation-reverse",
                "description": "運動エネルギーと質量から K = 1/2 mv² を使って速さを求める基本逆算です。",
            },
        },
    },
    "elastic-potential": {
        "title": "物理基礎 弾性力による位置エネルギー",
        "unit": "物体の運動とエネルギー：力学的エネルギー",
        "skill": "elastic-potential-energy",
        "formula": "U = 1/2 kx²（自然長を x = 0 とする）",
        "seeds": tuple(range(6731, 6741)),
        "spec": {
            "id": "physics-basic-elastic-potential",
            "relation": "half-product-last-square",
            "result": "elastic_potential_energy",
            "inputs": ["spring_constant", "extension"],
            "variables": {
                "elastic_potential_energy": {"label": "弾性力による位置エネルギー U", "unit": "J"},
                "spring_constant": {"label": "ばね定数 k", "unit": "N/m", "values": [10, 20, 25, 40, 50, 80, 100, 120, 160, 200]},
                "extension": {"label": "自然長からの伸び・縮みの大きさ x", "unit": "m", "values": [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8, 1.0]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-elastic-potential-energy": {
                "solve_for": "elastic_potential_energy",
                "worksheet_mode": "calculation-basic",
                "description": "自然長を x = 0 とし、ばね定数と伸び・縮みの大きさから U = 1/2 kx² を使って弾性力による位置エネルギーを求める基本反復です。",
            },
            "reverse-spring-constant": {
                "solve_for": "spring_constant",
                "worksheet_mode": "calculation-reverse",
                "description": "弾性力による位置エネルギーと伸び・縮みの大きさから U = 1/2 kx² を使ってばね定数を求める基本逆算です。",
            },
            "reverse-extension": {
                "solve_for": "extension",
                "worksheet_mode": "calculation-reverse",
                "description": "弾性力による位置エネルギーとばね定数から U = 1/2 kx² を使って伸び・縮みの大きさを求める基本逆算です。",
            },
        },
    },
}
