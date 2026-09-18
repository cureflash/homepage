"""Topic 18 pre-production numerical validation.

Validate only the fixed scope for Topic 18: bisection, Newton's method,
convergence, initial-value dependence, and tolerance.  The equations are
educational benchmarks, not Shinkansen measured-value models.
"""

from math import sqrt
from typing import Callable, List, Tuple


def benchmark_f(x: float) -> float:
    return x**3 - x - 2.0


def benchmark_df(x: float) -> float:
    return 3.0 * x**2 - 1.0


def bisection(
    f: Callable[[float], float],
    a: float,
    b: float,
    tolerance: float,
    max_iterations: int = 100,
) -> Tuple[float, int, float, float]:
    fa = f(a)
    fb = f(b)
    if fa * fb >= 0.0:
        raise ValueError("initial interval must bracket a sign-changing root")

    for iteration in range(1, max_iterations + 1):
        c = (a + b) / 2.0
        fc = f(c)
        half_width = (b - a) / 2.0
        if half_width <= tolerance or abs(fc) <= tolerance:
            return c, iteration, half_width, abs(fc)
        if fa * fc < 0.0:
            b = c
            fb = fc
        else:
            a = c
            fa = fc

    raise RuntimeError("bisection did not converge within max_iterations")


def newton(
    f: Callable[[float], float],
    df: Callable[[float], float],
    x0: float,
    tolerance: float,
    max_iterations: int = 50,
) -> Tuple[float, int, float]:
    x = x0
    for iteration in range(1, max_iterations + 1):
        derivative = df(x)
        if abs(derivative) < 1e-14:
            raise ZeroDivisionError("Newton derivative is zero or too small")
        x_next = x - f(x) / derivative
        residual = abs(f(x_next))
        if residual <= tolerance:
            return x_next, iteration, residual
        x = x_next

    raise RuntimeError("Newton method did not converge within max_iterations")


def multi_root_f(x: float) -> float:
    return x**3 - x


def multi_root_df(x: float) -> float:
    return 3.0 * x**2 - 1.0


def main() -> None:
    tolerance_bisect = 1e-6
    root_b, iterations_b, half_width_b, residual_b = bisection(
        benchmark_f, 1.0, 2.0, tolerance_bisect
    )

    tolerance_newton = 1e-10
    root_n, iterations_n, residual_n = newton(
        benchmark_f, benchmark_df, 1.5, tolerance_newton
    )

    root_from_02, iterations_02, residual_02 = newton(
        multi_root_f, multi_root_df, 0.2, tolerance_newton
    )
    root_from_08, iterations_08, residual_08 = newton(
        multi_root_f, multi_root_df, 0.8, tolerance_newton
    )

    # Fixed checkpoints used by the pre-production gate.
    assert iterations_b == 20
    assert abs(root_b - 1.5213804244995117) < 1e-15
    assert half_width_b <= tolerance_bisect
    assert iterations_n == 3
    assert abs(root_n - 1.5213797068045751) < 1e-15
    assert residual_n <= tolerance_newton

    # Initial-value dependence: the same equation converges to different roots.
    assert abs(root_from_02) < 1e-10
    assert abs(root_from_08 - 1.0) < 1e-10

    # A Newton start with f'(x)=0 is not admissible for the update formula.
    derivative_zero_point = 1.0 / sqrt(3.0)
    assert abs(multi_root_df(derivative_zero_point)) < 1e-14

    print("benchmark: f(x)=x^3-x-2")
    print(
        f"bisection [1,2]: root={root_b:.15f}, iterations={iterations_b}, "
        f"half_width={half_width_b:.12e}, residual={residual_b:.12e}"
    )
    print(
        f"Newton x0=1.5: root={root_n:.15f}, iterations={iterations_n}, "
        f"residual={residual_n:.12e}"
    )
    print("initial-value dependence: g(x)=x^3-x")
    print(
        f"Newton x0=0.2: root={root_from_02:.15f}, iterations={iterations_02}, "
        f"residual={residual_02:.12e}"
    )
    print(
        f"Newton x0=0.8: root={root_from_08:.15f}, iterations={iterations_08}, "
        f"residual={residual_08:.12e}"
    )
    print(
        f"derivative-zero checkpoint x=1/sqrt(3): "
        f"f'={multi_root_df(derivative_zero_point):.12e}"
    )


if __name__ == "__main__":
    main()
