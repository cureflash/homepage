import math


def bisection(f, a, b, tol):
    fa = f(a)
    fb = f(b)
    assert fa * fb < 0
    n = 0

    while (b - a) / 2 > tol:
        c = (a + b) / 2
        fc = f(c)
        if fc == 0:
            a = b = c
            n += 1
            break
        if fa * fc < 0:
            b = c
            fb = fc
        else:
            a = c
            fa = fc
        n += 1

    x = (a + b) / 2
    return n, x, (b - a) / 2, f(x)


def newton(f, df, x0, tol, max_iter=100):
    x = x0
    for n in range(1, max_iter + 1):
        d = df(x)
        if d == 0:
            raise ZeroDivisionError("Newton update denominator is zero")
        x = x - f(x) / d
        residual = f(x)
        if abs(residual) <= tol:
            return n, x, residual
    raise RuntimeError("Newton method did not converge within max_iter")


# Case A: bisection and tolerance
f = lambda x: math.cos(x) - x
n_a, x_a, half_width_a, residual_a = bisection(f, 0.0, 1.0, 1e-6)
assert n_a == 19
assert half_width_a <= 1e-6
assert abs(residual_a) < 1e-6

# Case B: Newton method, initial-value dependence, derivative-zero condition
g = lambda x: x**3 - 7 * x + 6
dg = lambda x: 3 * x**2 - 7
n_b1, x_b1, residual_b1 = newton(g, dg, 0.5, 1e-12)
n_b2, x_b2, residual_b2 = newton(g, dg, 2.5, 1e-12)
assert n_b1 == 5 and abs(x_b1 - 1.0) < 1e-12
assert n_b2 == 5 and abs(x_b2 - 2.0) < 1e-12
assert abs(dg(math.sqrt(7 / 3))) < 1e-12

# Case C: educational one-variable power-angle relation
p = 1.7
k = 3.0
h = lambda delta: k * math.sin(delta) - p
dh = lambda delta: k * math.cos(delta)
n_c, delta_c, residual_c = newton(h, dh, 0.4, 1e-12)
delta_exact = math.asin(p / k)
assert n_c == 4
assert 0 < delta_c < math.pi / 2
assert abs(residual_c) <= 1e-12
assert abs(delta_c - delta_exact) < 1e-12

print("Case A", n_a, x_a, half_width_a, residual_a)
print("Case B1", n_b1, x_b1, residual_b1)
print("Case B2", n_b2, x_b2, residual_b2)
print("Case C", n_c, delta_c, residual_c)
print("PASS")
