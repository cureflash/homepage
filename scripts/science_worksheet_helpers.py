import random
from math import prod, sqrt

SCIENCE_PROBLEM_TYPES = {
    'science-formula',
    'science-retrieval-pair',
    'science-retrieval-matching',
    'science-retrieval-classify',
    'science-retrieval-tf',
    'science-retrieval-fill',
    'science-retrieval-order',
}

FORMULA_RELATIONS = {
    'product',
    'sum',
    'difference',
    'offset-product',
    'half-product-last-square',
    'linear-plus-half-quadratic',
}


def _sample_value(rng, definition):
    if 'values' in definition:
        values = definition['values']
        if not values:
            raise ValueError('variable values must not be empty')
        return rng.choice(values)
    low = definition.get('min')
    high = definition.get('max')
    step = definition.get('step', 1)
    if low is None or high is None or step <= 0:
        raise ValueError('variable definition needs values or min/max with positive step')
    count = int(round((high - low) / step))
    if count < 0:
        raise ValueError('variable max must be >= min')
    return low + rng.randint(0, count) * step


def _relation_result(relation, inputs):
    if relation == 'product':
        return prod(inputs)
    if relation == 'sum':
        return sum(inputs)
    if relation == 'difference':
        if len(inputs) != 2:
            raise ValueError('difference relation needs exactly two inputs')
        return inputs[0] - inputs[1]
    if relation == 'offset-product':
        if len(inputs) < 3:
            raise ValueError('offset-product relation needs an offset and at least two factors')
        return inputs[0] + prod(inputs[1:])
    if relation == 'half-product-last-square':
        if len(inputs) < 2:
            raise ValueError('half-product-last-square needs at least one linear factor and one squared factor')
        return 0.5 * prod(inputs[:-1]) * inputs[-1] ** 2
    if relation == 'linear-plus-half-quadratic':
        if len(inputs) != 3:
            raise ValueError('linear-plus-half-quadratic needs exactly linear rate, acceleration, and time')
        linear_rate, acceleration, time = inputs
        return linear_rate * time + 0.5 * acceleration * time ** 2
    raise ValueError(f'unsupported formula relation: {relation}')


def _generation_formula_answer(relation, result_name, input_names, values, solve_for):
    if solve_for == result_name:
        return _relation_result(relation, [values[name] for name in input_names])
    if solve_for not in input_names:
        raise ValueError(f'unknown solve_for variable: {solve_for}')
    other_values = [values[name] for name in input_names if name != solve_for]
    if relation == 'product':
        denominator = prod(other_values)
        if denominator == 0:
            raise ValueError('cannot solve product relation with zero denominator')
        return values[result_name] / denominator
    if relation == 'sum':
        return values[result_name] - sum(other_values)
    if relation == 'difference':
        if len(input_names) != 2:
            raise ValueError('difference relation needs exactly two inputs')
        first_name, second_name = input_names
        if solve_for == first_name:
            return values[result_name] + values[second_name]
        return values[first_name] - values[result_name]
    if relation == 'offset-product':
        offset_name = input_names[0]
        factor_names = input_names[1:]
        if solve_for == offset_name:
            return values[result_name] - prod(values[name] for name in factor_names)
        other_factors = [name for name in factor_names if name != solve_for]
        denominator = prod(values[name] for name in other_factors)
        if denominator == 0:
            raise ValueError('cannot solve offset-product relation with zero denominator')
        return (values[result_name] - values[offset_name]) / denominator
    if relation == 'half-product-last-square':
        squared_name = input_names[-1]
        linear_names = input_names[:-1]
        if solve_for == squared_name:
            denominator = prod(values[name] for name in linear_names)
            if denominator == 0:
                raise ValueError('cannot solve half-product-last-square with zero denominator')
            squared_value = 2 * values[result_name] / denominator
            if squared_value < 0:
                raise ValueError('cannot solve half-product-last-square with negative square')
            return sqrt(squared_value)
        other_linear = [name for name in linear_names if name != solve_for]
        denominator = prod(values[name] for name in other_linear) * values[squared_name] ** 2
        if denominator == 0:
            raise ValueError('cannot solve half-product-last-square with zero denominator')
        return 2 * values[result_name] / denominator
    if relation == 'linear-plus-half-quadratic':
        if len(input_names) != 3:
            raise ValueError('linear-plus-half-quadratic needs exactly three inputs')
        linear_name, acceleration_name, time_name = input_names
        time = values[time_name]
        if solve_for == time_name:
            raise ValueError('time inversion is intentionally unsupported because the quadratic can have multiple roots')
        if time == 0:
            raise ValueError('cannot invert linear-plus-half-quadratic at zero time')
        if solve_for == linear_name:
            return (values[result_name] - 0.5 * values[acceleration_name] * time ** 2) / time
        if solve_for == acceleration_name:
            return 2 * (values[result_name] - values[linear_name] * time) / time ** 2
        raise ValueError(f'unsupported solve_for for linear-plus-half-quadratic: {solve_for}')
    raise ValueError(f'unsupported formula relation: {relation}')


def generate_formula_drill(spec, seed, count=20, solve_for=None):
    relation = spec['relation']
    result_name = spec['result']
    input_names = list(spec['inputs'])
    variables = spec['variables']
    solve_for = solve_for or spec.get('solve_for') or result_name
    if relation not in FORMULA_RELATIONS:
        raise ValueError(f'unsupported formula relation: {relation}')
    if relation == 'difference' and len(input_names) != 2:
        raise ValueError('difference relation needs exactly two inputs')
    if relation == 'offset-product' and len(input_names) < 3:
        raise ValueError('offset-product relation needs an offset and at least two factors')
    if relation == 'half-product-last-square':
        if len(input_names) < 2:
            raise ValueError('half-product-last-square needs at least two inputs')
        if len(set(input_names)) != len(input_names):
            raise ValueError('half-product-last-square input names must be unique')
    if relation == 'linear-plus-half-quadratic':
        if len(input_names) != 3 or len(set(input_names)) != 3:
            raise ValueError('linear-plus-half-quadratic needs three unique inputs')
        if solve_for == input_names[-1]:
            raise ValueError('time inversion is intentionally unsupported for linear-plus-half-quadratic')
    if result_name not in variables or any(name not in variables for name in input_names):
        raise ValueError('all formula variables need definitions')
    if solve_for not in [result_name, *input_names]:
        raise ValueError('solve_for must be the result or an input variable')

    rng = random.Random(seed)
    problems = []
    attempts = 0
    while len(problems) < count:
        attempts += 1
        if attempts > count * 200:
            raise ValueError('unable to generate enough valid formula problems')
        values = {name: _sample_value(rng, variables[name]) for name in input_names}
        result_value = _relation_result(relation, [values[name] for name in input_names])
        values[result_name] = result_value
        try:
            answer = _generation_formula_answer(relation, result_name, input_names, values, solve_for)
        except ValueError:
            continue
        known = {name: value for name, value in values.items() if name != solve_for}
        problem = {
            'type': 'science-formula',
            'formula_id': spec['id'],
            'relation': relation,
            'result': result_name,
            'inputs': input_names,
            'variables': variables,
            'known': known,
            'solve_for': solve_for,
            'answer': answer,
            'answer_spec': {
                'type': 'numeric',
                'value': answer,
                'tolerance': spec.get('tolerance', 0),
                **({'unit': variables[solve_for].get('unit')} if variables[solve_for].get('unit') else {}),
            },
        }
        validate_science_problem(problem)
        problems.append(problem)
    return problems


def _normalized_answers(value):
    if isinstance(value, str):
        values = [value]
    else:
        values = list(value)
    values = [str(item).strip() for item in values if str(item).strip()]
    if not values:
        raise ValueError('retrieval answer set must not be empty')
    return values


def _choice_text(values):
    return ' / '.join(str(value) for value in values)


def generate_retrieval_drill(spec, seed, count=20, mode=None):
    mode = mode or spec['mode']
    rng = random.Random(seed)
    items = spec['items']
    if not items:
        raise ValueError('retrieval items must not be empty')
    problems = []

    for _ in range(count):
        if mode in {'forward', 'reverse'}:
            item = rng.choice(items)
            left = item['left']
            right_values = _normalized_answers(item['right'])
            if mode == 'forward':
                prompt = f"{spec.get('left_label', '項目')}「{left}」に対応する{spec.get('right_label', '答え')}を書きなさい。"
                accepted = right_values
                source = {'left': left, 'right': right_values, 'direction': 'forward'}
            else:
                shown = rng.choice(right_values)
                prompt = f"{spec.get('right_label', '項目')}「{shown}」に対応する{spec.get('left_label', '答え')}を書きなさい。"
                accepted = [str(left)]
                source = {'left': left, 'right': right_values, 'shown': shown, 'direction': 'reverse'}
            problems.append(_retrieval_problem('science-retrieval-pair', prompt, accepted, source))

        elif mode == 'matching':
            sample_count = min(spec.get('pair_count', 4), len(items))
            selected = rng.sample(items, sample_count)
            lefts = [str(item['left']) for item in selected]
            rights = [rng.choice(_normalized_answers(item['right'])) for item in selected]
            shuffled = rights[:]
            rng.shuffle(shuffled)
            canonical = ' / '.join(f'{left}→{right}' for left, right in zip(lefts, rights))
            prompt = f"対応する組を答えなさい。左: {_choice_text(lefts)}　右: {_choice_text(shuffled)}"
            source = {'lefts': lefts, 'rights': rights, 'shown_rights': shuffled}
            problems.append(_retrieval_problem('science-retrieval-matching', prompt, [canonical], source))

        elif mode == 'classify':
            item = rng.choice(items)
            accepted = _normalized_answers(item['category'])
            prompt = f"「{item['item']}」を分類しなさい。"
            source = {'item': str(item['item']), 'category': accepted}
            problems.append(_retrieval_problem('science-retrieval-classify', prompt, accepted, source))

        elif mode == 'tf':
            item = rng.choice(items)
            true_property = str(item['property'])
            make_true = rng.choice((True, False)) or len(items) == 1
            if make_true:
                shown_property = true_property
            else:
                alternatives = [str(other['property']) for other in items if str(other['property']) != true_property]
                shown_property = rng.choice(alternatives) if alternatives else true_property
            prompt = f"「{item['item']}」について「{shown_property}」は正しいか。○か×で答えなさい。"
            answer = '○' if shown_property == true_property else '×'
            source = {'item': str(item['item']), 'true_property': true_property, 'shown_property': shown_property}
            problems.append(_retrieval_problem('science-retrieval-tf', prompt, [answer], source))

        elif mode == 'fill':
            item = rng.choice(items)
            accepted = _normalized_answers(item['answer'])
            template = str(item['template'])
            if '{answer}' not in template:
                raise ValueError('fill template must contain {answer}')
            prompt = template.replace('{answer}', '＿＿＿＿')
            source = {'template': template, 'accepted': accepted}
            problems.append(_retrieval_problem('science-retrieval-fill', prompt, accepted, source))

        elif mode == 'order':
            item = rng.choice(items)
            canonical = [str(step) for step in item['steps']]
            if len(canonical) < 2:
                raise ValueError('ordering item needs at least two steps')
            shown = canonical[:]
            rng.shuffle(shown)
            prompt = f"正しい順序に並べなさい: {_choice_text(shown)}"
            answer = ' → '.join(canonical)
            source = {'canonical': canonical, 'shown': shown}
            problems.append(_retrieval_problem('science-retrieval-order', prompt, [answer], source))
        else:
            raise ValueError(f'unsupported retrieval mode: {mode}')

    for problem in problems:
        validate_science_problem(problem)
    return problems


def _retrieval_problem(problem_type, prompt, accepted, source):
    accepted = _normalized_answers(accepted)
    return {
        'type': problem_type,
        'prompt': prompt,
        'source': source,
        'answer': accepted[0],
        'answer_spec': {'type': 'accepted-set', 'values': accepted},
    }


def compute_science_answer(problem):
    problem_type = problem['type']
    if problem_type == 'science-formula':
        relation = problem['relation']
        result_name = problem['result']
        input_names = problem['inputs']
        solve_for = problem['solve_for']
        known = problem['known']
        if solve_for == result_name:
            return _relation_result(relation, [known[name] for name in input_names])
        other_inputs = [name for name in input_names if name != solve_for]
        if relation == 'product':
            denominator = prod(known[name] for name in other_inputs)
            if denominator == 0:
                raise ValueError('cannot solve product relation with zero denominator')
            return known[result_name] / denominator
        if relation == 'sum':
            return known[result_name] - sum(known[name] for name in other_inputs)
        if relation == 'difference':
            if len(input_names) != 2:
                raise ValueError('difference relation needs exactly two inputs')
            first_name, second_name = input_names
            if solve_for == first_name:
                return known[result_name] + known[second_name]
            return known[first_name] - known[result_name]
        if relation == 'offset-product':
            offset_name = input_names[0]
            factor_names = input_names[1:]
            if solve_for == offset_name:
                return known[result_name] - prod(known[name] for name in factor_names)
            other_factors = [name for name in factor_names if name != solve_for]
            denominator = prod(known[name] for name in other_factors)
            if denominator == 0:
                raise ValueError('cannot solve offset-product relation with zero denominator')
            return (known[result_name] - known[offset_name]) / denominator
        if relation == 'half-product-last-square':
            squared_name = input_names[-1]
            linear_names = input_names[:-1]
            if solve_for == squared_name:
                denominator = prod(known[name] for name in linear_names)
                if denominator == 0:
                    raise ValueError('cannot solve half-product-last-square with zero denominator')
                squared_value = 2 * known[result_name] / denominator
                if squared_value < 0:
                    raise ValueError('cannot solve half-product-last-square with negative square')
                return sqrt(squared_value)
            other_linear = [name for name in linear_names if name != solve_for]
            denominator = prod(known[name] for name in other_linear) * known[squared_name] ** 2
            if denominator == 0:
                raise ValueError('cannot solve half-product-last-square with zero denominator')
            return 2 * known[result_name] / denominator
        if relation == 'linear-plus-half-quadratic':
            if len(input_names) != 3:
                raise ValueError('linear-plus-half-quadratic needs exactly three inputs')
            linear_name, acceleration_name, time_name = input_names
            time = known.get(time_name)
            if solve_for == time_name:
                raise ValueError('time inversion is intentionally unsupported because the quadratic can have multiple roots')
            if time == 0:
                raise ValueError('cannot invert linear-plus-half-quadratic at zero time')
            if solve_for == linear_name:
                return (known[result_name] - 0.5 * known[acceleration_name] * time ** 2) / time
            if solve_for == acceleration_name:
                return 2 * (known[result_name] - known[linear_name] * time) / time ** 2
            raise ValueError(f'unsupported solve_for for linear-plus-half-quadratic: {solve_for}')
        raise ValueError(f'unsupported formula relation: {relation}')

    source = problem['source']
    if problem_type == 'science-retrieval-pair':
        return source['right'][0] if source['direction'] == 'forward' else source['left']
    if problem_type == 'science-retrieval-matching':
        return ' / '.join(f'{left}→{right}' for left, right in zip(source['lefts'], source['rights']))
    if problem_type == 'science-retrieval-classify':
        return source['category'][0]
    if problem_type == 'science-retrieval-tf':
        return '○' if source['shown_property'] == source['true_property'] else '×'
    if problem_type == 'science-retrieval-fill':
        return source['accepted'][0]
    if problem_type == 'science-retrieval-order':
        return ' → '.join(source['canonical'])
    raise ValueError(problem_type)


def validate_science_problem(problem):
    if problem['type'] not in SCIENCE_PROBLEM_TYPES:
        raise ValueError(f"unsupported science problem type: {problem['type']}")
    recomputed = compute_science_answer(problem)
    spec = problem['answer_spec']
    if spec['type'] == 'numeric':
        tolerance = spec.get('tolerance', 0)
        if abs(recomputed - spec['value']) > tolerance:
            raise AssertionError('science numerical answer failed independent recomputation')
        if abs(problem['answer'] - recomputed) > tolerance:
            raise AssertionError('science stored numerical answer failed validation')
    elif spec['type'] == 'accepted-set':
        normalized = {str(value).strip() for value in spec['values']}
        if str(recomputed).strip() not in normalized:
            raise AssertionError('science retrieval answer failed independent recomputation')
        if str(problem['answer']).strip() not in normalized:
            raise AssertionError('science stored retrieval answer failed validation')
    else:
        raise ValueError(f"unsupported science answer type: {spec['type']}")
    return True


def text_science_problem(problem):
    if problem['type'] == 'science-formula':
        variables = problem['variables']
        known_parts = []
        ordered_names = [problem['result'], *problem['inputs']]
        for name in ordered_names:
            if name not in problem['known']:
                continue
            definition = variables[name]
            label = definition.get('label', name)
            unit = definition.get('unit', '')
            known_parts.append(f"{label} = {problem['known'][name]}{(' ' + unit) if unit else ''}")
        target = variables[problem['solve_for']]
        target_label = target.get('label', problem['solve_for'])
        target_unit = target.get('unit', '')
        suffix = f"（{target_unit}）" if target_unit else ''
        return f"{', '.join(known_parts)} のとき、{target_label}{suffix}を求めなさい。"
    return problem['prompt']


def science_answer_text(problem):
    answer = compute_science_answer(problem)
    if problem['type'] == 'science-formula':
        unit = problem['variables'][problem['solve_for']].get('unit', '')
        if isinstance(answer, float) and answer.is_integer():
            answer = int(answer)
        return f"{answer}{(' ' + unit) if unit else ''}"
    return str(answer)
