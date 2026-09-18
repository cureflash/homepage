def case_a():
    # One-variable constrained optimization.
    # J(x)=(x-5)^2+2 on 0<=x<=4: stationary point x=5 is infeasible.
    j0 = (0 - 5) ** 2 + 2
    j4 = (4 - 5) ** 2 + 2
    derivative_at_left = 2 * (0 - 5)
    derivative_at_right = 2 * (4 - 5)
    assert derivative_at_left < 0 and derivative_at_right < 0
    assert j4 < j0
    assert j4 == 3
    return 4, j4


def case_b():
    # Interior two-variable equality-constrained optimum.
    # C=P1^2+3*P2^2, P1+P2=16.
    # Lagrange conditions give P1=3*P2.
    p2 = 16 / 4
    p1 = 3 * p2
    cost = p1**2 + 3 * p2**2

    # Independent one-variable check:
    # C(P1)=4*P1^2-96*P1+768, dC/dP1=8*P1-96.
    derivative = 8 * p1 - 96
    second_derivative = 8
    assert p1 + p2 == 16
    assert derivative == 0
    assert second_derivative > 0
    assert p1 == 12 and p2 == 4
    assert cost == 192
    return p1, p2, cost


def case_c():
    # Educational dimensionless train-operation allocation model.
    # E=2*u^2+v^2, fixed allocation constraint u+v=15,
    # with 0<=u<=4 and 11<=v<=15.
    # Equality-only stationary candidate is u=5, v=10 and is infeasible.
    u_stationary = 5
    v_stationary = 10
    assert not (0 <= u_stationary <= 4 and 11 <= v_stationary <= 15)

    # v=15-u gives E(u)=3*u^2-30*u+225 on 0<=u<=4.
    # dE/du=6*u-30 < 0 throughout the feasible interval,
    # so the minimum is the right boundary u=4, v=11.
    u = 4
    v = 11
    energy_index = 2 * u**2 + v**2
    derivative_at_left = 6 * 0 - 30
    derivative_at_right = 6 * 4 - 30
    other_boundary = 2 * 0**2 + 15**2
    assert derivative_at_left < 0 and derivative_at_right < 0
    assert u + v == 15
    assert 0 <= u <= 4 and 11 <= v <= 15
    assert energy_index == 153
    assert energy_index < other_boundary
    return u, v, energy_index


if __name__ == "__main__":
    print("Case A", case_a())
    print("Case B", case_b())
    print("Case C", case_c())
    print("PASS")
