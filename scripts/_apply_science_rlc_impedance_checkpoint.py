from pathlib import Path


def replace_once(path, old, new):
    p = Path(path)
    text = p.read_text(encoding='utf-8')
    if text.count(old) != 1:
        raise RuntimeError(f'{path}: expected exactly one match, found {text.count(old)} for {old[:80]!r}')
    p.write_text(text.replace(old, new, 1), encoding='utf-8')


# Shared relation: direct-only because inverse branches are ambiguous after squaring/rounding.
helper = 'scripts/science_worksheet_helpers.py'
replace_once(
    helper,
    "    'doppler-same-line',\n}",
    "    'doppler-same-line',\n    'sqrt-square-plus-difference-square',\n}",
)
replace_once(
    helper,
    "        return round(source_frequency * numerator_speed / denominator_speed, 1)\n    raise ValueError(f'unsupported formula relation: {relation}')",
    "        return round(source_frequency * numerator_speed / denominator_speed, 1)\n    if relation == 'sqrt-square-plus-difference-square':\n        if len(inputs) != 3:\n            raise ValueError('sqrt-square-plus-difference-square needs exactly base, first term, and second term')\n        base, first_term, second_term = inputs\n        if base < 0 or first_term < 0 or second_term < 0:\n            raise ValueError('sqrt-square-plus-difference-square requires nonnegative magnitude inputs')\n        return round(sqrt(base ** 2 + (first_term - second_term) ** 2), 2)\n    raise ValueError(f'unsupported formula relation: {relation}')",
)
replace_once(
    helper,
    "    if relation == 'doppler-same-line':\n        if len(input_names) != 4 or len(set(input_names)) != 4:\n            raise ValueError('doppler-same-line needs four unique inputs')\n        if solve_for != result_name:\n            raise ValueError('doppler-same-line inverse generation is intentionally unsupported after rounding')\n    if result_name not in variables",
    "    if relation == 'doppler-same-line':\n        if len(input_names) != 4 or len(set(input_names)) != 4:\n            raise ValueError('doppler-same-line needs four unique inputs')\n        if solve_for != result_name:\n            raise ValueError('doppler-same-line inverse generation is intentionally unsupported after rounding')\n    if relation == 'sqrt-square-plus-difference-square':\n        if len(input_names) != 3 or len(set(input_names)) != 3:\n            raise ValueError('sqrt-square-plus-difference-square needs three unique inputs')\n        if solve_for != result_name:\n            raise ValueError('sqrt-square-plus-difference-square inverse generation is intentionally unsupported because inverse branches can be ambiguous')\n    if result_name not in variables",
)

# Relation regression tests.
relation_test = 'tests/test_science_formula_relations.py'
replace_once(
    relation_test,
    "\n\nif __name__ == \"__main__\":\n    unittest.main()\n",
    '''\n    def test_sqrt_square_plus_difference_square_direct_rounding_and_inverse_rejection(self):\n        spec = {\n            "id": "test-sqrt-square-plus-difference-square",\n            "relation": "sqrt-square-plus-difference-square",\n            "result": "z",\n            "inputs": ["r", "xl", "xc"],\n            "variables": {\n                "z": {"label": "Z", "unit": "Ω"},\n                "r": {"label": "R", "unit": "Ω", "values": [30, 40]},\n                "xl": {"label": "XL", "unit": "Ω", "values": [20, 50]},\n                "xc": {"label": "XC", "unit": "Ω", "values": [10, 35]},\n            },\n            "tolerance": 1e-9,\n        }\n        for problem in generate_formula_drill(spec, 9930, 20, solve_for="z"):\n            known = problem["known"]\n            expected = round((known["r"] ** 2 + (known["xl"] - known["xc"]) ** 2) ** 0.5, 2)\n            self.assertEqual(problem["answer"], expected)\n            self.assertTrue(validate_science_problem(problem))\n        for target in ("r", "xl", "xc"):\n            with self.assertRaisesRegex(ValueError, "inverse generation"):\n                generate_formula_drill(spec, 9931, 1, solve_for=target)\n        wrong = {**spec, "inputs": ["r", "xl"]}\n        with self.assertRaisesRegex(ValueError, "three unique inputs"):\n            generate_formula_drill(wrong, 9932, 1, solve_for="z")\n        negative = {**spec, "variables": {**spec["variables"], "r": {"label": "R", "values": [-1]}}}\n        with self.assertRaisesRegex(ValueError, "nonnegative magnitude inputs"):\n            generate_formula_drill(negative, 9933, 1, solve_for="z")\n\n\nif __name__ == "__main__":\n    unittest.main()\n''',
)

# Add one safe 30-PDF direct-calculation checkpoint to the existing AC registry.
ac = 'scripts/science_physics_ac_basics.py'
replace_once(
    ac,
    "_REACTANCE_CONCEPT_SEEDS = tuple(range(8161, 8171))\n",
    "_REACTANCE_CONCEPT_SEEDS = tuple(range(8161, 8171))\n_RLC_IMPEDANCE_SEEDS = tuple(range(8171, 8201))\n",
)
p = Path(ac)
text = p.read_text(encoding='utf-8')
if not text.endswith("    },\n}\n"):
    raise RuntimeError('unexpected AC topic registry ending')
entry = '''    "ac-series-rlc-impedance-numeric": _formula_topic(\n        "物理 交流：直列RLCのインピーダンス", "ac-series-rlc-impedance-numeric",\n        "直列RLC回路では Z=√(R²+(XL-XC)²)。R、XL、XC、Zの単位はΩ。答えは小数第2位まで求める。",\n        "impedance", ["resistance", "inductive_reactance", "capacitive_reactance"],\n        {"impedance": {"label": "インピーダンス Z", "unit": "Ω"}, "resistance": {"label": "抵抗 R", "unit": "Ω", "values": _RESISTANCE_OHM}, "inductive_reactance": {"label": "コイルのリアクタンス XL", "unit": "Ω", "values": _REACTANCE_OHM}, "capacitive_reactance": {"label": "コンデンサーのリアクタンス XC", "unit": "Ω", "values": _REACTANCE_OHM}},\n        _RLC_IMPEDANCE_SEEDS,\n        {"basic-impedance": {"solve_for": "impedance", "worksheet_mode": "calculation-basic", "description": "R、XL、XCから直列RLC回路のインピーダンスを小数第2位まで求めます。"}},\n        relation="sqrt-square-plus-difference-square",\n    ),\n'''
text = text[:-2] + entry + "}\n"
p.write_text(text, encoding='utf-8')

# Extend AC regression expectations and independently recompute the new direct answers.
ac_test = 'tests/test_science_physics_ac_basics.py'
replace_once(ac_test, 'def test_eight_checkpoints_total_240_variants(self):', 'def test_nine_checkpoints_total_270_variants(self):')
replace_once(ac_test, 'self.assertEqual(len(batches), 240)', 'self.assertEqual(len(batches), 270)')
replace_once(
    ac_test,
    '            "ac-reactance-rlc-concepts": 40,\n        })',
    '            "ac-reactance-rlc-concepts": 40,\n            "ac-series-rlc-impedance-numeric": 30,\n        })',
)
replace_once(ac_test, 'self.assertEqual(len(hashes), 240)', 'self.assertEqual(len(hashes), 270)')
replace_once(
    ac_test,
    '            "ac-series-rlc-reactance-difference-numeric",\n        }',
    '            "ac-series-rlc-reactance-difference-numeric",\n            "ac-series-rlc-impedance-numeric",\n        }',
)
replace_once(
    ac_test,
    '                else:\n                    if solve_for == "net_reactance":',
    '                elif topic_key == "ac-series-rlc-reactance-difference-numeric":\n                    if solve_for == "net_reactance":',
)
replace_once(
    ac_test,
    '                    else:\n                        expected = k["inductive_reactance"] - k["net_reactance"]\n                self.assertAlmostEqual(problem["answer"], expected)',
    '                    else:\n                        expected = k["inductive_reactance"] - k["net_reactance"]\n                else:\n                    expected = round((k["resistance"] ** 2 + (k["inductive_reactance"] - k["capacitive_reactance"]) ** 2) ** 0.5, 2)\n                self.assertAlmostEqual(problem["answer"], expected)',
)
replace_once(ac_test, "        self.assertEqual(len(set(hashes)), 240)\n", "        self.assertEqual(len(set(hashes)), 270)\n")
replace_once(
    ac_test,
    '            elif topic_key == "ac-series-rlc-reactance-difference-numeric":\n                for problem in problems:\n                    self.assertTrue(all(value >= 0 for name, value in problem["known"].items() if name != "net_reactance"))',
    '            elif topic_key == "ac-series-rlc-reactance-difference-numeric":\n                for problem in problems:\n                    self.assertTrue(all(value >= 0 for name, value in problem["known"].items() if name != "net_reactance"))\n            elif topic_key == "ac-series-rlc-impedance-numeric":\n                for problem in problems:\n                    self.assertGreaterEqual(problem["answer"], problem["known"]["resistance"])\n                    self.assertTrue(all(value >= 0 for value in problem["known"].values()))',
)

# Publication workflow: prospective catalog now has +30 numeric/basic RLC worksheets.
wf = '.github/workflows/science-physics-publish.yml'
replace_once(wf, 'assert len(rows) == 3000, len(rows)', 'assert len(rows) == 3030, len(rows)')
replace_once(wf, "Counter({'numeric': 2080, 'accepted-set': 920})", "Counter({'numeric': 2110, 'accepted-set': 920})")
replace_once(wf, "'calculation-basic': 750,", "'calculation-basic': 780,")
replace_once(
    wf,
    "          assert skills['ac-reactance-rlc-concepts'] == 40\n",
    "          assert skills['ac-reactance-rlc-concepts'] == 40\n          assert skills['ac-series-rlc-impedance-numeric'] == 30\n",
)
replace_once(wf, "assert units['電気と磁気：交流の基本'] == 240", "assert units['電気と磁気：交流の基本'] == 270")
replace_once(wf, "assert len({x['content_hash'] for x in rows}) == 3000", "assert len({x['content_hash'] for x in rows}) == 3030")
replace_once(wf, "print('Formal Physics 3000-PDF catalog validation: OK')", "print('Formal Physics 3030-PDF catalog validation: OK')")
replace_once(wf, "git commit -m 'Publish 120 formal Physics AC reactance worksheets'", "git commit -m 'Publish 30 formal Physics RLC impedance worksheets'")

# Remove temporary bootstrap files from the resulting implementation commit.
Path('scripts/_apply_science_rlc_impedance_checkpoint.py').unlink()
Path('.github/workflows/_science-rlc-bootstrap.yml').unlink()
print('RLC impedance checkpoint source transformation complete')
