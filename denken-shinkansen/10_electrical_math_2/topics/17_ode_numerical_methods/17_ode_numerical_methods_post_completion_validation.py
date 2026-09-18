from math import exp


def euler(rhs, y0, h, steps):
    y = y0
    values = [y]
    for _ in range(steps):
        y = y + h * rhs(y)
        values.append(y)
    return values


# Case A: scalar initial-value problem. Fresh values not used in the teaching examples.
a_h01 = euler(lambda y: -2.0 * y, 1.0, 0.10, 3)
a_h005 = euler(lambda y: -2.0 * y, 1.0, 0.05, 6)
a_exact = exp(-0.6)
a_err_h01 = abs(a_h01[-1] - a_exact)
a_err_h005 = abs(a_h005[-1] - a_exact)

assert a_h01 == [1.0, 0.8, 0.64, 0.512]
assert abs(a_h005[-1] - 0.531441) < 1e-12
assert a_err_h005 < a_err_h01


# Case B: educational RL transient. Use Euler and compare against the analytic answer.
def rl_current(h):
    V = 50.0
    R = 5.0
    L = 1.0
    i = 0.0
    t = 0.0
    values = [i]
    while t < 0.2 - 1e-12:
        i = i + h * ((V - R * i) / L)
        t += h
        values.append(i)
    return values


b_h005 = rl_current(0.05)
b_h0025 = rl_current(0.025)
b_exact = 10.0 * (1.0 - exp(-1.0))
b_err_h005 = abs(b_h005[-1] - b_exact)
b_err_h0025 = abs(b_h0025[-1] - b_exact)

assert abs(b_h005[-1] - 6.8359375) < 1e-12
assert abs(b_h0025[-1] - 6.5639108419418335) < 1e-12
assert b_err_h0025 < b_err_h005
assert 0.0 < b_h005[-1] < 10.0


# Case C: educational train model. Both state variables use the same step-start values.
m = 2.0e5
f_traction = 1.0e5
resistance_coeff = 500.0
h = 10.0
v = 0.0
x = 0.0
train = []

for step in range(3):
    dvdt = (f_traction - resistance_coeff * v) / m
    v_next = v + h * dvdt
    x_next = x + h * v
    v, x = v_next, x_next
    train.append((10 * (step + 1), v, x))

expected_train = [
    (10, 5.0, 0.0),
    (20, 9.875, 50.0),
    (30, 14.628125, 148.75),
]

for actual, expected in zip(train, expected_train):
    assert actual[0] == expected[0]
    assert abs(actual[1] - expected[1]) < 1e-12
    assert abs(actual[2] - expected[2]) < 1e-12


print("Case A h=0.10:", a_h01)
print("Case A h=0.05 final:", a_h005[-1])
print("Case A exact:", a_exact)
print("Case A errors:", a_err_h01, a_err_h005)
print("Case B h=0.05 final:", b_h005[-1])
print("Case B h=0.025 final:", b_h0025[-1])
print("Case B exact:", b_exact)
print("Case B errors:", b_err_h005, b_err_h0025)
print("Case C:", train)
print("PASS")
