import cmath
import math


def case_a():
    # Educational values only: traction -> motion -> distance -> energy balance.
    m = 6000.0
    f_traction = 21000.0
    f_resistance = 3000.0
    f_grade = 0.0
    v0 = 3.0
    dt = 1.0
    steps = 3

    acceleration = (f_traction - f_resistance - f_grade) / m
    velocities = [v0]
    for _ in range(steps):
        velocities.append(velocities[-1] + acceleration * dt)

    distance = sum(
        (velocities[i] + velocities[i + 1]) * dt / 2
        for i in range(steps)
    )
    traction_work = f_traction * distance
    resistance_work = f_resistance * distance
    delta_k = 0.5 * m * (velocities[-1] ** 2 - v0**2)

    powers = [f_traction * v for v in velocities]
    energy_from_power = sum(
        (powers[i] + powers[i + 1]) * dt / 2
        for i in range(steps)
    )

    assert acceleration == 3.0
    assert velocities == [3.0, 6.0, 9.0, 12.0]
    assert distance == 22.5
    assert traction_work == 472500.0
    assert resistance_work == 67500.0
    assert delta_k == 405000.0
    assert traction_work == delta_k + resistance_work
    assert energy_from_power == traction_work
    return distance, traction_work


def case_b():
    # First-order simplified control model and Euler-step convergence check.
    m = 5.0
    d = 2.0
    f = 20.0
    tau = m / d
    v_ss = f / d
    t_end = tau
    exact = v_ss * (1 - math.exp(-t_end / tau))

    def euler(dt):
        v = 0.0
        for _ in range(round(t_end / dt)):
            v += dt * (f - d * v) / m
        return v

    v_05 = euler(0.5)
    v_025 = euler(0.25)
    err_05 = abs(v_05 - exact)
    err_025 = abs(v_025 - exact)

    assert tau == 2.5
    assert v_ss == 10.0
    assert abs(exact - 6.321205588285577) < 1e-12
    assert abs(v_05 - 6.7232) < 1e-12
    assert abs(v_025 - 6.513215599) < 1e-12
    assert err_025 < err_05
    return exact, v_05, v_025


def case_c():
    # Regenerative sign convention plus sampled periodic components.
    m = 5000.0
    f_regen = -5000.0
    v0 = 12.0
    dt = 1.0
    steps = 4

    acceleration = f_regen / m
    velocities = [v0]
    for _ in range(steps):
        velocities.append(velocities[-1] + acceleration * dt)

    distance = sum(
        (velocities[i] + velocities[i + 1]) * dt / 2
        for i in range(steps)
    )
    signed_energy = f_regen * distance
    delta_k = 0.5 * m * (velocities[-1] ** 2 - v0**2)

    assert acceleration == -1.0
    assert velocities == [12.0, 11.0, 10.0, 9.0, 8.0]
    assert distance == 40.0
    assert signed_energy == -200000.0
    assert signed_energy == delta_k
    assert -signed_energy == 200000.0

    fs = 100.0
    n_samples = 8
    f1 = 12.5
    f3 = 37.5
    assert fs > 2 * f3
    assert fs / n_samples == 12.5

    samples = [
        math.sin(2 * math.pi * f1 * n / fs)
        + 0.4 * math.sin(2 * math.pi * f3 * n / fs)
        for n in range(n_samples)
    ]

    amplitudes = []
    for k in range(n_samples // 2 + 1):
        xk = sum(
            samples[n] * cmath.exp(-2j * math.pi * k * n / n_samples)
            for n in range(n_samples)
        )
        amplitude = abs(xk) / n_samples if k in (0, n_samples // 2) else 2 * abs(xk) / n_samples
        amplitudes.append(amplitude)

    assert abs(amplitudes[1] - 1.0) < 1e-12
    assert abs(amplitudes[3] - 0.4) < 1e-12
    assert abs(amplitudes[0]) < 1e-12
    assert abs(amplitudes[2]) < 1e-12
    assert abs(amplitudes[4]) < 1e-12
    return distance, signed_energy, amplitudes


if __name__ == "__main__":
    print("Case A", case_a())
    print("Case B", case_b())
    print("Case C", case_c())
    print("PASS")
