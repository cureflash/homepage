from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def patch(path, old, new):
    p = ROOT / path
    text = p.read_text(encoding='utf-8')
    if old not in text:
        raise RuntimeError(f'patch anchor not found in {path}: {old[:80]!r}')
    p.write_text(text.replace(old, new, 1), encoding='utf-8')


# Shared direct-only period relation. The result is rounded to 3 decimals; inverse
# generation is intentionally rejected because inverting a rounded period would
# amplify rounding error and make learner-visible answers non-canonical.
patch(
    'scripts/science_worksheet_helpers.py',
    "    'double-quotient',\n    'equal-products',",
    "    'double-quotient',\n    'two-pi-sqrt-ratio',\n    'equal-products',",
)
patch(
    'scripts/science_worksheet_helpers.py',
    "    if relation == 'equal-products':\n",
    "    if relation == 'two-pi-sqrt-ratio':\n"
    "        if len(inputs) != 3:\n"
    "            raise ValueError('two-pi-sqrt-ratio needs exactly numerator, divisor, and pi')\n"
    "        numerator, divisor, pi_value = inputs\n"
    "        if numerator <= 0 or divisor <= 0 or pi_value <= 0:\n"
    "            raise ValueError('two-pi-sqrt-ratio requires positive numerator, divisor, and pi')\n"
    "        return round(2 * pi_value * sqrt(numerator / divisor), 3)\n"
    "    if relation == 'equal-products':\n",
)
patch(
    'scripts/science_worksheet_helpers.py',
    "    if relation == 'equal-products':\n        if len(input_names) != 3 or len(set(input_names)) != 3:\n            raise ValueError('equal-products needs three unique inputs')\n",
    "    if relation == 'two-pi-sqrt-ratio':\n"
    "        if len(input_names) != 3 or len(set(input_names)) != 3:\n"
    "            raise ValueError('two-pi-sqrt-ratio needs three unique inputs')\n"
    "        if solve_for != result_name:\n"
    "            raise ValueError('two-pi-sqrt-ratio inverse generation is intentionally unsupported after rounding')\n"
    "    if relation == 'equal-products':\n"
    "        if len(input_names) != 3 or len(set(input_names)) != 3:\n"
    "            raise ValueError('equal-products needs three unique inputs')\n",
)

# Add two quantitative direct-calculation checkpoints to the existing SHM topic map.
p = ROOT / 'scripts/science_physics_shm_periods.py'
text = p.read_text(encoding='utf-8')
append = r'''

# Numeric period checkpoints use the same shared direct-only relation.  π=3.14
# is a learner-visible known value, and period answers are rounded to 0.001 s.
PHYSICS_SHM_PERIODS_TOPICS.update({
    "spring-pendulum-period-numeric": {
        "generator": "formula",
        "title": "物理 単振動：ばね振り子の周期 数値計算",
        "unit": "様々な運動：円運動と単振動",
        "skill": "spring-pendulum-period-numeric",
        "formula": "T = 2π√(m/k)（π=3.14、答えは0.001 sまで）",
        "seeds": tuple(range(7551, 7561)),
        "spec": {
            "id": "physics-spring-pendulum-period-numeric",
            "relation": "two-pi-sqrt-ratio",
            "result": "period",
            "inputs": ["mass", "spring_constant", "pi_value"],
            "variables": {
                "period": {"label": "周期 T（0.001 sまで）", "unit": "s"},
                "mass": {"label": "質量 m", "unit": "kg", "values": [0.10, 0.20, 0.40, 0.80, 1.25, 1.80, 2.50]},
                "spring_constant": {"label": "ばね定数 k", "unit": "N/m", "values": [5, 8, 10, 20, 25, 40, 50, 80]},
                "pi_value": {"label": "円周率 π", "values": [3.14]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-period": {
                "solve_for": "period",
                "worksheet_mode": "calculation-basic",
                "description": "π=3.14を用い、T=2π√(m/k)からばね振り子の周期を0.001 sまで求めます。丸め済み周期からの逆算は行いません。",
            },
        },
    },
    "simple-pendulum-period-numeric": {
        "generator": "formula",
        "title": "物理 単振動：単振り子の周期 数値計算",
        "unit": "様々な運動：円運動と単振動",
        "skill": "simple-pendulum-period-numeric",
        "formula": "T = 2π√(l/g)（振れ角が十分小さい。π=3.14、答えは0.001 sまで）",
        "seeds": tuple(range(7561, 7571)),
        "spec": {
            "id": "physics-simple-pendulum-period-numeric",
            "relation": "two-pi-sqrt-ratio",
            "result": "period",
            "inputs": ["length", "gravity", "pi_value"],
            "variables": {
                "period": {"label": "周期 T（振れ角が十分小さい。0.001 sまで）", "unit": "s"},
                "length": {"label": "振り子の長さ l（振れ角が十分小さい）", "unit": "m", "values": [0.10, 0.20, 0.40, 0.80, 1.00, 1.60, 2.50]},
                "gravity": {"label": "重力加速度 g", "unit": "m/s²", "values": [9.8]},
                "pi_value": {"label": "円周率 π", "values": [3.14]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-period": {
                "solve_for": "period",
                "worksheet_mode": "calculation-basic",
                "description": "振れ角が十分小さい条件で、π=3.14を用いT=2π√(l/g)から周期を0.001 sまで求めます。丸め済み周期からの逆算は行いません。",
            },
        },
    },
})
'''
if 'spring-pendulum-period-numeric' in text:
    raise RuntimeError('numeric period topics already exist')
p.write_text(text.rstrip() + append + '\n', encoding='utf-8')

# Extend shared formula relation regression tests.
patch(
    'tests/test_science_formula_relations.py',
    '\n\nif __name__ == "__main__":\n',
    r'''

    def test_two_pi_sqrt_ratio_direct_rounding_and_inverse_rejection(self):
        spec = {
            "id": "test-two-pi-sqrt-ratio", "relation": "two-pi-sqrt-ratio",
            "result": "t", "inputs": ["n", "d", "pi"],
            "variables": {
                "t": {"label": "t", "unit": "s"},
                "n": {"label": "n", "values": [0.1, 0.4, 1.6]},
                "d": {"label": "d", "values": [5, 10, 20]},
                "pi": {"label": "pi", "values": [3.14]},
            }, "tolerance": 1e-9,
        }
        for problem in generate_formula_drill(spec, 9920, 20, solve_for="t"):
            known = problem["known"]
            expected = round(2 * known["pi"] * (known["n"] / known["d"]) ** 0.5, 3)
            self.assertEqual(problem["answer"], expected)
            self.assertTrue(validate_science_problem(problem))
        for target in ("n", "d", "pi"):
            with self.assertRaisesRegex(ValueError, "inverse generation"):
                generate_formula_drill(spec, 9921, 1, solve_for=target)
        wrong = {**spec, "inputs": ["n", "d"]}
        with self.assertRaisesRegex(ValueError, "three unique inputs"):
            generate_formula_drill(wrong, 9922, 1, solve_for="t")


if __name__ == "__main__":
''',
)

# Extend SHM topic tests from 110 to 130 variants and independently recompute periods.
patch('tests/test_science_physics_shm_periods.py', 'def test_three_checkpoints_total_110_variants(self):', 'def test_five_checkpoints_total_130_variants(self):')
patch('tests/test_science_physics_shm_periods.py', 'self.assertEqual(len(batches), 110)', 'self.assertEqual(len(batches), 130)')
patch(
    'tests/test_science_physics_shm_periods.py',
    '            "simple-pendulum-period-concepts": 40,\n        })',
    '            "simple-pendulum-period-concepts": 40,\n            "spring-pendulum-period-numeric": 10,\n            "simple-pendulum-period-numeric": 10,\n        })',
)
patch('tests/test_science_physics_shm_periods.py', 'self.assertEqual(len(hashes), 110)', 'self.assertEqual(len(hashes), 130)')
patch('tests/test_science_physics_shm_periods.py', 'self.assertEqual(len(hashes), 110)', 'self.assertEqual(len(hashes), 130)')
patch(
    'tests/test_science_physics_shm_periods.py',
    '\n    def test_corrupted_answers_are_rejected(self):\n',
    r'''

    def test_numeric_period_visible_value_recalculation_and_contracts(self):
        for topic_key, numerator_name, divisor_name in (
            ("spring-pendulum-period-numeric", "mass", "spring_constant"),
            ("simple-pendulum-period-numeric", "length", "gravity"),
        ):
            topic = PHYSICS_SHM_PERIODS_TOPICS[topic_key]
            self.assertEqual(topic["spec"]["relation"], "two-pi-sqrt-ratio")
            text = json.dumps(topic, ensure_ascii=False)
            self.assertIn("π=3.14", text)
            self.assertIn("0.001 s", text)
            if topic_key.startswith("simple-pendulum"):
                self.assertIn("振れ角が十分小さい", text)
            mode = topic["modes"]["basic-period"]
            for seed in topic["seeds"]:
                for problem in generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"]):
                    known = problem["known"]
                    expected = round(2 * known["pi_value"] * (known[numerator_name] / known[divisor_name]) ** 0.5, 3)
                    self.assertEqual(problem["answer"], expected)
                    self.assertEqual(problem["answer_spec"]["value"], expected)
                    self.assertTrue(validate_science_problem(problem))

    def test_corrupted_answers_are_rejected(self):
''',
)

# Publisher workflow counts after 20 new numeric PDFs.
wf = ROOT / '.github/workflows/science-physics-publish.yml'
w = wf.read_text(encoding='utf-8')
repls = [
    ('assert len(rows) == 1140, len(rows)', 'assert len(rows) == 1160, len(rows)'),
    ("Counter({'numeric': 980, 'accepted-set': 160})", "Counter({'numeric': 1000, 'accepted-set': 160})"),
    ("'calculation-basic': 350,", "'calculation-basic': 370,"),
    ("              'simple-pendulum-period-concepts': 40,", "              'simple-pendulum-period-concepts': 40,\n              'spring-pendulum-period-numeric': 10,\n              'simple-pendulum-period-numeric': 10,"),
    ("'様々な運動：円運動と単振動': 360,", "'様々な運動：円運動と単振動': 380,"),
    ('assert len({x[\'content_hash\'] for x in rows}) == 1140', 'assert len({x[\'content_hash\'] for x in rows}) == 1160'),
    ("print('Formal Physics 1140-PDF catalog validation: OK')", "print('Formal Physics 1160-PDF catalog validation: OK')"),
    ("git commit -m 'Publish 110 formal Physics SHM acceleration and period worksheets'", "git commit -m 'Publish 20 formal Physics numeric pendulum period worksheets'"),
]
for old, new in repls:
    if old not in w:
        raise RuntimeError(f'workflow patch anchor missing: {old}')
    w = w.replace(old, new, 1)
wf.write_text(w, encoding='utf-8')

print('SHM numeric period patch applied')
