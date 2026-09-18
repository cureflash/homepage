"""Topic 17 pre-production numerical validation.

Benchmark the explicit Euler update on the normalized first-order initial-value
problem y'=-y, y(0)=1.  This is an educational RC/RL-type decay model, not a
Shinkansen measured-value model.
"""

from math import exp


def euler_decay(h: float, t_end: float = 1.0, y0: float = 1.0) -> float:
    steps_float = t_end / h
    steps = round(steps_float)
    if abs(steps_float - steps) > 1e-12:
        raise ValueError("t_end must be an integer multiple of h")

    y = y0
    for _ in range(steps):
        y = y + h * (-y)
    return y


def main() -> None:
    exact = exp(-1.0)
    hs = (0.5, 0.25, 0.125, 0.0625)
    rows = []

    for h in hs:
        y = euler_decay(h)
        abs_error = abs(y - exact)
        rel_error_percent = abs_error / exact * 100.0
        rows.append((h, y, abs_error, rel_error_percent))

    # Independent hand-calculation checkpoint for h=0.25:
    # 1 -> 0.75 -> 0.5625 -> 0.421875 -> 0.31640625
    assert abs(rows[1][1] - 0.31640625) < 1e-15

    # The fixed pre-production gate requires smaller h to move the Euler value
    # toward the known analytic solution for this benchmark.
    errors = [row[2] for row in rows]
    assert all(errors[i + 1] < errors[i] for i in range(len(errors) - 1))

    print(f"analytic y(1) = {exact:.12f}")
    print("h        Euler y(1)      abs error        rel error [%]")
    for h, y, abs_error, rel_error_percent in rows:
        print(f"{h:<8g} {y:>14.12f} {abs_error:>14.12f} {rel_error_percent:>14.9f}")


if __name__ == "__main__":
    main()
