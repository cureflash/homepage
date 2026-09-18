import cmath
import math


def dft(samples):
    """Direct DFT for validation only; no FFT implementation details are introduced."""
    n_total = len(samples)
    return [
        sum(
            samples[n] * cmath.exp(-2j * math.pi * k * n / n_total)
            for n in range(n_total)
        )
        for k in range(n_total)
    ]


def traction_energy_case():
    """Educational constant-force model; all numbers are assumptions, not train data."""
    m = 4000.0
    f_traction = 12000.0
    f_resistance = 2000.0
    f_grade = 0.0
    dt = 1.0
    steps = 4

    acceleration = (f_traction - f_resistance - f_grade) / m
    assert math.isclose(acceleration, 2.5)

    velocity = [0.0]
    for _ in range(steps):
        velocity.append(velocity[-1] + acceleration * dt)
    assert velocity == [0.0, 2.5, 5.0, 7.5, 10.0]

    distance = sum(
        0.5 * (velocity[n] + velocity[n + 1]) * dt for n in range(steps)
    )
    assert math.isclose(distance, 20.0)

    traction_energy = sum(
        0.5
        * (f_traction * velocity[n] + f_traction * velocity[n + 1])
        * dt
        for n in range(steps)
    )
    traction_work = f_traction * distance
    resistance_work = f_resistance * distance
    delta_kinetic = 0.5 * m * (velocity[-1] ** 2 - velocity[0] ** 2)

    assert math.isclose(traction_energy, traction_work)
    assert math.isclose(traction_energy, 240000.0)
    assert math.isclose(resistance_work, 40000.0)
    assert math.isclose(delta_kinetic, 200000.0)
    assert math.isclose(traction_energy, delta_kinetic + resistance_work)

    return acceleration, velocity, distance, traction_energy


def regenerative_sign_case():
    """Mechanical-side sign check; recovered electrical energy is not claimed."""
    m = 4000.0
    f_regen = -4000.0
    dt = 1.0
    steps = 4

    acceleration = f_regen / m
    velocity = [10.0]
    for _ in range(steps):
        velocity.append(velocity[-1] + acceleration * dt)
    assert velocity == [10.0, 9.0, 8.0, 7.0, 6.0]

    distance = sum(
        0.5 * (velocity[n] + velocity[n + 1]) * dt for n in range(steps)
    )
    signed_energy = sum(
        0.5 * (f_regen * velocity[n] + f_regen * velocity[n + 1]) * dt
        for n in range(steps)
    )
    delta_kinetic = 0.5 * m * (velocity[-1] ** 2 - velocity[0] ** 2)

    assert math.isclose(distance, 32.0)
    assert math.isclose(signed_energy, -128000.0)
    assert math.isclose(signed_energy, delta_kinetic)
    recovered_mechanical_magnitude = -signed_energy
    assert math.isclose(recovered_mechanical_magnitude, 128000.0)

    return velocity, distance, signed_energy, recovered_mechanical_magnitude


def first_order_model_case():
    """Check Euler step-size behavior against the analytic first-order response."""
    mass = 4.0
    damping = 1.0
    force = 8.0
    t_end = 4.0

    exact = force / damping * (1.0 - math.exp(-damping * t_end / mass))
    values = []
    errors = []

    for dt in (1.0, 0.5, 0.25):
        velocity = 0.0
        for _ in range(round(t_end / dt)):
            velocity += dt * (force - damping * velocity) / mass
        values.append(velocity)
        errors.append(abs(velocity - exact))

    assert errors[0] > errors[1] > errors[2]

    tau = mass / damping
    steady = force / damping
    assert math.isclose(tau, 4.0)
    assert math.isclose(steady, 8.0)

    # Analytic time response corresponding to G(s)=1/(Ms+D) under a force step.
    t = 2.0
    velocity = force / damping * (1.0 - math.exp(-damping * t / mass))
    derivative = force / mass * math.exp(-damping * t / mass)
    assert math.isclose(mass * derivative + damping * velocity, force, rel_tol=1e-12)

    return exact, values, errors, tau, steady


def sampled_harmonic_case():
    """Band-limited harmonic surrogate used to verify sampling and DFT bins."""
    fs = 80.0
    sample_count = 8
    fundamental = 10.0
    third_harmonic = 30.0

    # The retained components satisfy the sampling condition.
    assert fs > 2.0 * third_harmonic

    samples = [
        math.sin(2.0 * math.pi * fundamental * n / fs)
        + (1.0 / 3.0) * math.sin(2.0 * math.pi * third_harmonic * n / fs)
        for n in range(sample_count)
    ]
    spectrum = dft(samples)
    amplitudes = [
        2.0 * abs(spectrum[k]) / sample_count for k in range(sample_count // 2 + 1)
    ]

    # Delta-f = 10 Hz: k=1 is 10 Hz, k=3 is 30 Hz.
    assert math.isclose(amplitudes[1], 1.0, abs_tol=1e-12)
    assert math.isclose(amplitudes[3], 1.0 / 3.0, abs_tol=1e-12)
    assert max(amplitudes[0], amplitudes[2], amplitudes[4]) < 1e-12

    return amplitudes


def main():
    a, velocity, distance, energy = traction_energy_case()
    regen_velocity, regen_distance, regen_signed, regen_magnitude = regenerative_sign_case()
    exact, values, errors, tau, steady = first_order_model_case()
    amplitudes = sampled_harmonic_case()

    print("CASE_A PASS", "a=", a, "v=", velocity, "x=", distance, "E=", energy)
    print(
        "CASE_B PASS",
        "v=", regen_velocity,
        "x=", regen_distance,
        "signed_E=", regen_signed,
        "regen_magnitude=", regen_magnitude,
    )
    print(
        "CASE_C PASS",
        "exact=", exact,
        "Euler=", values,
        "errors=", errors,
        "tau=", tau,
        "steady=", steady,
    )
    print("CASE_D PASS", "amplitudes=", amplitudes)
    print("ALL PASS")


if __name__ == "__main__":
    main()
