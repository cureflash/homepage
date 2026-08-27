from pathlib import Path


def replace_once(path, old, new):
    p = Path(path)
    text = p.read_text(encoding='utf-8')
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{path}: expected one match, got {count}: {old[:80]!r}')
    p.write_text(text.replace(old, new), encoding='utf-8')


helper = Path('scripts/science_worksheet_helpers.py')
text = helper.read_text(encoding='utf-8')
text = text.replace(
    "    'half-product-last-square',\n    'linear-plus-half-quadratic',\n}",
    "    'half-product-last-square',\n    'linear-plus-half-quadratic',\n    'square-over-double',\n    'double-quotient',\n}",
)
text = text.replace(
    "        return linear_rate * time + 0.5 * acceleration * time ** 2\n    raise ValueError(f'unsupported formula relation: {relation}')",
    "        return linear_rate * time + 0.5 * acceleration * time ** 2\n    if relation == 'square-over-double':\n        if len(inputs) != 2:\n            raise ValueError('square-over-double needs exactly numerator and divisor')\n        numerator, divisor = inputs\n        if numerator < 0 or divisor <= 0:\n            raise ValueError('square-over-double requires nonnegative numerator and positive divisor')\n        return numerator ** 2 / (2 * divisor)\n    if relation == 'double-quotient':\n        if len(inputs) != 2:\n            raise ValueError('double-quotient needs exactly numerator and divisor')\n        numerator, divisor = inputs\n        if divisor == 0:\n            raise ValueError('double-quotient divisor must not be zero')\n        return 2 * numerator / divisor\n    raise ValueError(f'unsupported formula relation: {relation}')",
    1,
)
text = text.replace(
    "        raise ValueError(f'unsupported solve_for for linear-plus-half-quadratic: {solve_for}')\n    raise ValueError(f'unsupported formula relation: {relation}')",
    "        raise ValueError(f'unsupported solve_for for linear-plus-half-quadratic: {solve_for}')\n    if relation == 'square-over-double':\n        if len(input_names) != 2:\n            raise ValueError('square-over-double needs exactly two inputs')\n        numerator_name, divisor_name = input_names\n        if solve_for == numerator_name:\n            radicand = 2 * values[result_name] * values[divisor_name]\n            if radicand < 0:\n                raise ValueError('cannot solve square-over-double with negative radicand')\n            return sqrt(radicand)\n        if solve_for == divisor_name:\n            if values[result_name] == 0:\n                raise ValueError('cannot solve square-over-double divisor with zero result')\n            return values[numerator_name] ** 2 / (2 * values[result_name])\n    if relation == 'double-quotient':\n        if len(input_names) != 2:\n            raise ValueError('double-quotient needs exactly two inputs')\n        numerator_name, divisor_name = input_names\n        if solve_for == numerator_name:\n            return values[result_name] * values[divisor_name] / 2\n        if solve_for == divisor_name:\n            if values[result_name] == 0:\n                raise ValueError('cannot solve double-quotient divisor with zero result')\n            return 2 * values[numerator_name] / values[result_name]\n    raise ValueError(f'unsupported formula relation: {relation}')",
    1,
)
text = text.replace(
    "        if solve_for == input_names[-1]:\n            raise ValueError('time inversion is intentionally unsupported for linear-plus-half-quadratic')\n    if result_name not in variables",
    "        if solve_for == input_names[-1]:\n            raise ValueError('time inversion is intentionally unsupported for linear-plus-half-quadratic')\n    if relation in {'square-over-double', 'double-quotient'}:\n        if len(input_names) != 2 or len(set(input_names)) != 2:\n            raise ValueError(f'{relation} needs two unique inputs')\n    if result_name not in variables",
    1,
)
marker = "            raise ValueError(f'unsupported solve_for for linear-plus-half-quadratic: {solve_for}')\n        raise ValueError(f'unsupported formula relation: {relation}')"
replacement = "            raise ValueError(f'unsupported solve_for for linear-plus-half-quadratic: {solve_for}')\n        if relation == 'square-over-double':\n            if len(input_names) != 2:\n                raise ValueError('square-over-double needs exactly two inputs')\n            numerator_name, divisor_name = input_names\n            if solve_for == numerator_name:\n                radicand = 2 * known[result_name] * known[divisor_name]\n                if radicand < 0:\n                    raise ValueError('cannot solve square-over-double with negative radicand')\n                return sqrt(radicand)\n            if solve_for == divisor_name:\n                if known[result_name] == 0:\n                    raise ValueError('cannot solve square-over-double divisor with zero result')\n                return known[numerator_name] ** 2 / (2 * known[result_name])\n        if relation == 'double-quotient':\n            if len(input_names) != 2:\n                raise ValueError('double-quotient needs exactly two inputs')\n            numerator_name, divisor_name = input_names\n            if solve_for == numerator_name:\n                return known[result_name] * known[divisor_name] / 2\n            if solve_for == divisor_name:\n                if known[result_name] == 0:\n                    raise ValueError('cannot solve double-quotient divisor with zero result')\n                return 2 * known[numerator_name] / known[result_name]\n        raise ValueError(f'unsupported formula relation: {relation}')"
if text.count(marker) != 1:
    raise SystemExit(f'helper compute marker count={text.count(marker)}')
text = text.replace(marker, replacement)
helper.write_text(text, encoding='utf-8')

projectile = Path('scripts/science_physics_projectile.py')
text = projectile.read_text(encoding='utf-8')
if not text.endswith('}\n'):
    raise SystemExit('projectile file ending changed')
addition = '''    "oblique-projectile-maximum-height": {
        "title": "物理 斜方投射 最高点の高さ",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-maximum-height",
        "formula": "H = v₀ᵧ² / (2g)（投射点からの高さ、空気抵抗を無視）",
        "seeds": tuple(range(7201, 7216)),
        "spec": {
            "id": "physics-oblique-projectile-maximum-height",
            "relation": "square-over-double",
            "result": "maximum_height",
            "inputs": ["initial_vertical_velocity", "gravity"],
            "variables": {
                "maximum_height": {"label": "斜方投射（空気抵抗なし）の投射点から最高点までの高さ H", "unit": "m"},
                "initial_vertical_velocity": {"label": "初速度の上向き鉛直成分 v₀ᵧ", "unit": "m/s", "values": [9.8, 14.7, 19.6, 24.5, 29.4, 34.3, 39.2]},
                "gravity": {"label": "重力加速度の大きさ g", "unit": "m/s²", "values": [9.8]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-maximum-height": {"solve_for": "maximum_height", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視した斜方投射で、最高点の鉛直速度が0になることから H = v₀ᵧ²/(2g) を使い、投射点から最高点までの高さを求めます。g = 9.8 m/s² です。"},
            "reverse-initial-vertical-velocity": {"solve_for": "initial_vertical_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視した斜方投射で、投射点から最高点までの高さから H = v₀ᵧ²/(2g) を使って初速度の上向き鉛直成分を逆算します。g = 9.8 m/s² です。"},
        },
    },
    "oblique-projectile-same-height-flight-time": {
        "title": "物理 斜方投射 同高度への全飛行時間",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-same-height-flight-time",
        "formula": "T = 2v₀ᵧ / g（投射点と同じ高さに戻るまで、空気抵抗を無視）",
        "seeds": tuple(range(7216, 7231)),
        "spec": {
            "id": "physics-oblique-projectile-same-height-flight-time",
            "relation": "double-quotient",
            "result": "total_flight_time",
            "inputs": ["initial_vertical_velocity", "gravity"],
            "variables": {
                "total_flight_time": {"label": "斜方投射（空気抵抗なし）が投射点と同じ高さに戻るまでの全飛行時間 T", "unit": "s"},
                "initial_vertical_velocity": {"label": "初速度の上向き鉛直成分 v₀ᵧ", "unit": "m/s", "values": [9.8, 14.7, 19.6, 24.5, 29.4, 34.3, 39.2]},
                "gravity": {"label": "重力加速度の大きさ g", "unit": "m/s²", "values": [9.8]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-total-flight-time": {"solve_for": "total_flight_time", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視し、投射点と着地点が同じ高さの斜方投射について、T = 2v₀ᵧ/g から全飛行時間を求めます。g = 9.8 m/s² です。"},
            "reverse-initial-vertical-velocity": {"solve_for": "initial_vertical_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視し、投射点と着地点が同じ高さの斜方投射について、全飛行時間から T = 2v₀ᵧ/g を使って初速度の上向き鉛直成分を逆算します。g = 9.8 m/s² です。"},
        },
    },
    "oblique-projectile-same-height-horizontal-range": {
        "title": "物理 斜方投射 同高度への水平到達距離",
        "unit": "様々な運動：平面運動と放物運動",
        "skill": "oblique-projectile-same-height-horizontal-range",
        "formula": "R = v₀ₓT（投射点と同じ高さに戻るまで、空気抵抗を無視）",
        "seeds": tuple(range(7231, 7241)),
        "spec": {
            "id": "physics-oblique-projectile-same-height-horizontal-range",
            "relation": "product",
            "result": "horizontal_range",
            "inputs": ["initial_horizontal_velocity", "total_flight_time"],
            "variables": {
                "horizontal_range": {"label": "斜方投射（空気抵抗なし）が投射点と同じ高さに戻るまでの水平到達距離 R", "unit": "m"},
                "initial_horizontal_velocity": {"label": "初速度の水平成分 v₀ₓ", "unit": "m/s", "values": [5, 7.5, 10, 12.5, 15, 20, 25, 30]},
                "total_flight_time": {"label": "投射点と同じ高さに戻るまでの全飛行時間 T", "unit": "s", "values": [1, 2, 3, 4, 5, 6, 7, 8]},
            },
            "tolerance": 1e-9,
        },
        "modes": {
            "basic-horizontal-range": {"solve_for": "horizontal_range", "worksheet_mode": "calculation-basic", "description": "空気抵抗を無視し、投射点と着地点が同じ高さの斜方投射について、水平方向の等速運動 R = v₀ₓT から水平到達距離を求めます。"},
            "reverse-initial-horizontal-velocity": {"solve_for": "initial_horizontal_velocity", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視し、投射点と着地点が同じ高さの斜方投射について、水平到達距離と全飛行時間から初速度の水平成分を逆算します。"},
            "reverse-total-flight-time": {"solve_for": "total_flight_time", "worksheet_mode": "calculation-reverse", "description": "空気抵抗を無視し、投射点と着地点が同じ高さの斜方投射について、水平到達距離と初速度の水平成分から全飛行時間を逆算します。"},
        },
    },
'''
projectile.write_text(text[:-2] + addition + '}\n', encoding='utf-8')

reltest = Path('tests/test_science_formula_relations.py')
text = reltest.read_text(encoding='utf-8')
footer = '\n\nif __name__ == "__main__":\n    unittest.main()\n'
if text.count(footer) != 1:
    raise SystemExit('relation-test footer changed')
methods = '''
    def test_square_over_double_direct_and_reverse(self):
        spec = {
            "id": "test-square-over-double", "relation": "square-over-double",
            "result": "h", "inputs": ["v", "g"],
            "variables": {
                "h": {"label": "h", "unit": "m"},
                "v": {"label": "v", "unit": "m/s", "values": [9.8, 19.6, 29.4]},
                "g": {"label": "g", "unit": "m/s²", "values": [9.8]},
            }, "tolerance": 1e-9,
        }
        for solve_for in ("h", "v", "g"):
            for problem in generate_formula_drill(spec, 9910, 20, solve_for=solve_for):
                known = problem["known"]
                if solve_for == "h": expected = known["v"] ** 2 / (2 * known["g"])
                elif solve_for == "v": expected = (2 * known["h"] * known["g"]) ** 0.5
                else: expected = known["v"] ** 2 / (2 * known["h"])
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertTrue(validate_science_problem(problem))

    def test_double_quotient_direct_and_reverse(self):
        spec = {
            "id": "test-double-quotient", "relation": "double-quotient",
            "result": "t", "inputs": ["v", "g"],
            "variables": {
                "t": {"label": "t", "unit": "s"},
                "v": {"label": "v", "unit": "m/s", "values": [9.8, 19.6, 29.4]},
                "g": {"label": "g", "unit": "m/s²", "values": [9.8]},
            }, "tolerance": 1e-9,
        }
        for solve_for in ("t", "v", "g"):
            for problem in generate_formula_drill(spec, 9911, 20, solve_for=solve_for):
                known = problem["known"]
                if solve_for == "t": expected = 2 * known["v"] / known["g"]
                elif solve_for == "v": expected = known["t"] * known["g"] / 2
                else: expected = 2 * known["v"] / known["t"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertTrue(validate_science_problem(problem))

    def test_new_relation_wrong_arity_is_rejected(self):
        for relation in ("square-over-double", "double-quotient"):
            spec = {
                "id": "bad", "relation": relation, "result": "r", "inputs": ["x"],
                "variables": {"r": {"label": "r"}, "x": {"label": "x", "values": [1]}},
            }
            with self.assertRaisesRegex(ValueError, "two unique inputs"):
                generate_formula_drill(spec, 9912, 1, solve_for="r")
'''
reltest.write_text(text.replace(footer, '\n' + methods + footer), encoding='utf-8')

testp = Path('tests/test_science_physics_projectile.py')
text = testp.read_text(encoding='utf-8')
text = text.replace('def test_eight_checkpoints_total_two_hundred_forty_variants(self):', 'def test_eleven_checkpoints_total_three_hundred_thirty_variants(self):')
text = text.replace('self.assertEqual(len(batches), 240)', 'self.assertEqual(len(batches), 330)')
text = text.replace('self.assertEqual(len(hashes), 240)', 'self.assertEqual(len(hashes), 330)')
text = text.replace('self.assertEqual(len(set(hashes)), 240)', 'self.assertEqual(len(set(hashes)), 330)')
old = '''                elif topic_key == "oblique-projectile-time-to-highest-point":
                    expected = known["initial_vertical_velocity"] / known["gravity"] if solve_for == "time_to_highest_point" else known["gravity"] * known["time_to_highest_point"]
                else:
                    self.fail(topic_key)'''
new = '''                elif topic_key == "oblique-projectile-time-to-highest-point":
                    expected = known["initial_vertical_velocity"] / known["gravity"] if solve_for == "time_to_highest_point" else known["gravity"] * known["time_to_highest_point"]
                elif topic_key == "oblique-projectile-maximum-height":
                    expected = known["initial_vertical_velocity"] ** 2 / (2 * known["gravity"]) if solve_for == "maximum_height" else (2 * known["maximum_height"] * known["gravity"]) ** 0.5
                elif topic_key == "oblique-projectile-same-height-flight-time":
                    expected = 2 * known["initial_vertical_velocity"] / known["gravity"] if solve_for == "total_flight_time" else known["total_flight_time"] * known["gravity"] / 2
                elif topic_key == "oblique-projectile-same-height-horizontal-range":
                    if solve_for == "horizontal_range": expected = known["initial_horizontal_velocity"] * known["total_flight_time"]
                    elif solve_for == "initial_horizontal_velocity": expected = known["horizontal_range"] / known["total_flight_time"]
                    else: expected = known["horizontal_range"] / known["initial_horizontal_velocity"]
                else:
                    self.fail(topic_key)'''
if text.count(old) != 1:
    raise SystemExit('projectile independent calculation marker changed')
text = text.replace(old, new)
old = '''        peak_time = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-time-to-highest-point"]
        self.assertEqual(peak_time["spec"]["relation"], "product")
        self.assertEqual(peak_time["spec"]["variables"]["gravity"]["values"], [9.8])'''
new = old + '''
        maximum_height = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-maximum-height"]
        self.assertEqual(maximum_height["spec"]["relation"], "square-over-double")
        self.assertEqual(maximum_height["spec"]["variables"]["gravity"]["values"], [9.8])
        flight_time = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-same-height-flight-time"]
        self.assertEqual(flight_time["spec"]["relation"], "double-quotient")
        self.assertEqual(flight_time["spec"]["variables"]["gravity"]["values"], [9.8])
        self.assertTrue(all("同じ高さ" in mode["description"] for mode in flight_time["modes"].values()))
        range_topic = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-same-height-horizontal-range"]
        self.assertEqual(range_topic["spec"]["relation"], "product")
        self.assertTrue(all("同じ高さ" in mode["description"] for mode in range_topic["modes"].values()))'''
if text.count(old) != 1:
    raise SystemExit('projectile curriculum marker changed')
testp.write_text(text.replace(old, new), encoding='utf-8')

workflow = Path('.github/workflows/science-physics-publish.yml')
text = workflow.read_text(encoding='utf-8')
text = text.replace('assert len(rows) == 240, len(rows)', 'assert len(rows) == 330, len(rows)')
text = text.replace("Counter({'numeric': 240})", "Counter({'numeric': 330})")
text = text.replace("Counter({'calculation-reverse': 140, 'calculation-basic': 100})", "Counter({'calculation-reverse': 190, 'calculation-basic': 140})")
text = text.replace("              'oblique-projectile-time-to-highest-point': 30,\n", "              'oblique-projectile-time-to-highest-point': 30,\n              'oblique-projectile-maximum-height': 30,\n              'oblique-projectile-same-height-flight-time': 30,\n              'oblique-projectile-same-height-horizontal-range': 30,\n")
text = text.replace("Counter({'様々な運動：平面運動と放物運動': 240})", "Counter({'様々な運動：平面運動と放物運動': 330})")
text = text.replace("assert len({x['content_hash'] for x in rows}) == 240", "assert len({x['content_hash'] for x in rows}) == 330")
text = text.replace("print('Formal Physics 240-PDF catalog validation: OK')", "print('Formal Physics 330-PDF catalog validation: OK')")
text = text.replace("git commit -m 'Publish 60 formal Physics oblique-projectile worksheets'", "git commit -m 'Publish 90 formal Physics oblique-projectile worksheets'")
workflow.write_text(text, encoding='utf-8')
