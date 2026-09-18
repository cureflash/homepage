from fractions import Fraction


def one_variable_boundary_case():
    """Minimize f(x)=(x-3)^2+1 on 0<=x<=2."""
    def f(x):
        return (x - 3) ** 2 + 1

    stationary = Fraction(3, 1)
    assert not (Fraction(0, 1) <= stationary <= Fraction(2, 1))
    assert f(Fraction(0, 1)) == 10
    assert f(Fraction(2, 1)) == 2
    return Fraction(2, 1), Fraction(2, 1)


def equality_constrained_case():
    """Minimize F=x^2+2y^2+4x+2y subject to x+y=12."""
    x = Fraction(23, 3)
    y = Fraction(13, 3)
    lam = Fraction(-58, 3)

    assert x + y == 12
    assert 2 * x + 4 + lam == 0
    assert 4 * y + 2 + lam == 0
    assert x >= 0 and y >= 0

    objective = x * x + 2 * y * y + 4 * x + 2 * y
    assert objective == Fraction(407, 3)

    # Independent check by eliminating y=12-x:
    # phi(x)=3x^2-46x+312, phi'(x)=6x-46.
    assert 6 * x - 46 == 0
    assert 3 * x * x - 46 * x + 312 == objective
    assert objective < 312  # x=0, y=12
    assert objective < 432  # x=12, y=0

    marginal_x = 2 * x + 4
    marginal_y = 4 * y + 2
    assert marginal_x == marginal_y == Fraction(58, 3)
    return x, y, lam, objective


def train_connection_surrogate():
    """Dimensionless conceptual allocation under a fixed aggregate condition."""
    # Minimize E=u^2+3v^2 subject to u+v=10.
    u = Fraction(15, 2)
    v = Fraction(5, 2)
    assert u + v == 10
    assert 2 * u == 6 * v
    energy = u * u + 3 * v * v
    assert energy == 75
    assert energy < 100  # equal split and (10,0) are both 100
    assert energy < 300  # (0,10)
    return u, v, energy


def main():
    x1, f1 = one_variable_boundary_case()
    x, y, lam, obj = equality_constrained_case()
    u, v, energy = train_connection_surrogate()

    print("CASE_A PASS", "x=", float(x1), "f=", float(f1))
    print(
        "CASE_B PASS",
        "x=", float(x),
        "y=", float(y),
        "lambda=", float(lam),
        "F=", float(obj),
    )
    print("CASE_C PASS", "u=", float(u), "v=", float(v), "E=", float(energy))
    print("ALL PASS")


if __name__ == "__main__":
    main()
