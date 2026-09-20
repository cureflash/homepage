from __future__ import annotations

import csv
import math
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Sequence
import xml.etree.ElementTree as ET


@dataclass(frozen=True)
class ModelParams:
    # Series-SPEC value
    catenary_voltage_v: float = 25_000.0

    # Educational assumptions fixed in 22_integrated_route_simulation.md
    transformer_rating_va: float = 12_000_000.0
    transformer_secondary_ll_v: float = 2_000.0
    transformer_no_load_loss_w: float = 45_000.0
    transformer_rated_load_loss_w: float = 110_000.0

    poles: int = 6
    r1_ohm: float = 0.020
    x1_50hz_ohm: float = 0.080
    r2_prime_ohm: float = 0.120
    x2_prime_50hz_ohm: float = 0.060
    xm_50hz_ohm: float = 2.50
    base_frequency_hz: float = 100.0

    wheel_diameter_m: float = 0.86
    gear_ratio: float = 2.50
    vehicle_mass_kg: float = 300_000.0
    running_resistance_n: float = 15_000.0

    kp_hz_per_mps: float = 0.10
    ki_hz_per_m: float = 0.001
    kd_hz_per_mps2: float = 0.0

    dt_s: float = 0.1
    end_time_s: float = 330.0


P = ModelParams()
SLIP_EPS = 1.0e-8
FREQ_EPS = 1.0e-12

CSV_COLUMNS = [
    "time_s",
    "speed_ref_mps",
    "speed_mps",
    "acceleration_mps2",
    "inverter_frequency_hz",
    "synchronous_speed_rpm",
    "motor_speed_rpm",
    "slip",
    "motor_current_a",
    "motor_torque_nm",
    "motor_output_kw",
    "wheel_speed_rpm",
    "traction_force_n",
    "consumption_power_kw",
    "regeneration_power_kw",
]

GRAPH_FILES = [
    "22_time_speed.svg",
    "22_time_acceleration.svg",
    "22_time_current.svg",
    "22_time_torque.svg",
    "22_time_power.svg",
    "22_time_regeneration_power.svg",
]


def speed_reference_mps(t_s: float) -> float:
    if t_s < 120.0:
        return 40.0 * t_s / 120.0
    if t_s < 180.0:
        return 40.0
    if t_s < 300.0:
        return 40.0 * (300.0 - t_s) / 120.0
    return 0.0


def motor_speed_from_vehicle_rpm(speed_mps: float) -> float:
    return 60.0 * P.gear_ratio * speed_mps / (math.pi * P.wheel_diameter_m)


def wheel_speed_from_motor_rpm(motor_speed_rpm: float) -> float:
    return motor_speed_rpm / P.gear_ratio


def vehicle_speed_from_motor_mps(motor_speed_rpm: float) -> float:
    return (
        math.pi
        * P.wheel_diameter_m
        * motor_speed_rpm
        / (60.0 * P.gear_ratio)
    )


def base_frequency_hz(speed_ref_mps: float) -> float:
    n_m_ref = motor_speed_from_vehicle_rpm(speed_ref_mps)
    return P.poles * n_m_ref / 120.0


def synchronous_speed_rpm(frequency_hz: float) -> float:
    return 120.0 * frequency_hz / P.poles


def reactance_at_frequency(x_50hz_ohm: float, frequency_hz: float) -> float:
    return x_50hz_ohm * frequency_hz / 50.0


def induction_motor_state(frequency_hz: float, vehicle_speed_mps: float) -> dict[str, float]:
    n_m = motor_speed_from_vehicle_rpm(vehicle_speed_mps)

    if frequency_hz <= FREQ_EPS:
        return {
            "synchronous_speed_rpm": 0.0,
            "motor_speed_rpm": n_m,
            "slip": 0.0,
            "motor_current_a": 0.0,
            "motor_torque_nm": 0.0,
            "motor_output_w": 0.0,
            "motor_input_w": 0.0,
        }

    n_s = synchronous_speed_rpm(frequency_hz)
    slip = (n_s - n_m) / n_s

    # Numerical guard only for r2'/s. The unmodified slip is saved to CSV.
    if abs(slip) < SLIP_EPS:
        slip_for_circuit = SLIP_EPS if slip >= 0.0 else -SLIP_EPS
    else:
        slip_for_circuit = slip

    scale = frequency_hz / 50.0
    x1 = P.x1_50hz_ohm * scale
    x2 = P.x2_prime_50hz_ohm * scale
    xm = P.xm_50hz_ohm * scale

    v_ll = P.transformer_secondary_ll_v * min(
        frequency_hz / P.base_frequency_hz, 1.0
    )
    v_phase = v_ll / math.sqrt(3.0)

    z1 = complex(P.r1_ohm, x1)
    z2 = complex(P.r2_prime_ohm / slip_for_circuit, x2)
    zm = complex(0.0, xm)
    z_parallel = 1.0 / (1.0 / z2 + 1.0 / zm)

    i1 = complex(v_phase, 0.0) / (z1 + z_parallel)
    air_gap_voltage = complex(v_phase, 0.0) - i1 * z1
    i2 = air_gap_voltage / z2

    p2_w = (
        3.0
        * abs(i2) ** 2
        * P.r2_prime_ohm
        / slip_for_circuit
    )
    omega_s = 2.0 * math.pi * n_s / 60.0
    torque_nm = p2_w / omega_s
    motor_output_w = (1.0 - slip_for_circuit) * p2_w
    motor_input_w = 3.0 * (
        complex(v_phase, 0.0) * i1.conjugate()
    ).real

    return {
        "synchronous_speed_rpm": n_s,
        "motor_speed_rpm": n_m,
        "slip": slip,
        "motor_current_a": abs(i1),
        "motor_torque_nm": torque_nm,
        "motor_output_w": motor_output_w,
        "motor_input_w": motor_input_w,
    }


def transformer_to_catenary_power_w(motor_input_w: float) -> tuple[float, float]:
    # Topic-22 source gives P_cu(x)=x^2 P_cu,N and does not introduce
    # another power-factor input. The integrated ideal-converter model
    # therefore uses active-power-equivalent load ratio |P_sec|/S_N.
    load_ratio = abs(motor_input_w) / P.transformer_rating_va
    loss_w = (
        P.transformer_no_load_loss_w
        + load_ratio**2 * P.transformer_rated_load_loss_w
    )
    catenary_power_w = motor_input_w + loss_w
    return catenary_power_w, loss_w


def simulate() -> list[dict[str, float]]:
    rows: list[dict[str, float]] = []
    speed_mps = 0.0
    integral_error_m = 0.0
    previous_error_mps = 0.0

    steps = int(round(P.end_time_s / P.dt_s)) + 1
    for k in range(steps):
        t_s = k * P.dt_s
        speed_ref = speed_reference_mps(t_s)
        error_mps = speed_ref - speed_mps

        integral_error_m += error_mps * P.dt_s
        derivative_error_mps2 = (
            0.0
            if k == 0
            else (error_mps - previous_error_mps) / P.dt_s
        )
        correction_hz = (
            P.kp_hz_per_mps * error_mps
            + P.ki_hz_per_m * integral_error_m
            + P.kd_hz_per_mps2 * derivative_error_mps2
        )
        inverter_frequency_hz = max(
            0.0, base_frequency_hz(speed_ref) + correction_hz
        )

        motor = induction_motor_state(
            inverter_frequency_hz, speed_mps
        )
        torque_nm = motor["motor_torque_nm"]
        traction_force_n = (
            2.0 * P.gear_ratio * torque_nm / P.wheel_diameter_m
        )
        acceleration_mps2 = (
            traction_force_n - P.running_resistance_n
        ) / P.vehicle_mass_kg

        catenary_power_w, _ = transformer_to_catenary_power_w(
            motor["motor_input_w"]
        )
        consumption_power_kw = max(catenary_power_w, 0.0) / 1000.0
        regeneration_power_kw = max(-catenary_power_w, 0.0) / 1000.0

        row = {
            "time_s": t_s,
            "speed_ref_mps": speed_ref,
            "speed_mps": speed_mps,
            "acceleration_mps2": acceleration_mps2,
            "inverter_frequency_hz": inverter_frequency_hz,
            "synchronous_speed_rpm": motor["synchronous_speed_rpm"],
            "motor_speed_rpm": motor["motor_speed_rpm"],
            "slip": motor["slip"],
            "motor_current_a": motor["motor_current_a"],
            "motor_torque_nm": torque_nm,
            "motor_output_kw": motor["motor_output_w"] / 1000.0,
            "wheel_speed_rpm": wheel_speed_from_motor_rpm(
                motor["motor_speed_rpm"]
            ),
            "traction_force_n": traction_force_n,
            "consumption_power_kw": consumption_power_kw,
            "regeneration_power_kw": regeneration_power_kw,
        }
        rows.append(row)

        speed_mps = max(
            0.0, speed_mps + acceleration_mps2 * P.dt_s
        )
        previous_error_mps = error_mps

    return rows


def write_csv(path: Path, rows: Sequence[dict[str, float]]) -> None:
    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        writer.writeheader()
        for row in rows:
            writer.writerow(
                {key: f"{row[key]:.6f}" for key in CSV_COLUMNS}
            )


def _polyline_points(
    values: Iterable[tuple[float, float]],
    sx,
    sy,
) -> str:
    return " ".join(
        f"{sx(x):.2f},{sy(y):.2f}" for x, y in values
    )


def svg_line_graph(
    path: Path,
    *,
    title: str,
    y_label: str,
    curves: Sequence[tuple[str, str, Sequence[tuple[float, float]]]],
    y_min: float,
    y_max: float,
) -> None:
    width, height = 1000, 620
    left, right, top, bottom = 95, 35, 78, 95
    plot_w = width - left - right
    plot_h = height - top - bottom
    x_min, x_max = 0.0, P.end_time_s

    if math.isclose(y_min, y_max):
        y_min -= 1.0
        y_max += 1.0
    y_span = y_max - y_min
    if y_min >= 0.0:
        y_min = 0.0
        y_max += 0.05 * y_span
    else:
        y_pad = 0.05 * y_span
        y_min -= y_pad
        y_max += y_pad

    def sx(x: float) -> float:
        return left + (x - x_min) / (x_max - x_min) * plot_w

    def sy(y: float) -> float:
        return top + (y_max - y) / (y_max - y_min) * plot_h

    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        (
            f'<svg xmlns="http://www.w3.org/2000/svg" '
            f'width="{width}" height="{height}" '
            f'viewBox="0 0 {width} {height}">'
        ),
        '<rect width="100%" height="100%" fill="white"/>',
        (
            f'<text x="{width/2:.0f}" y="34" text-anchor="middle" '
            f'font-family="sans-serif" font-size="24">{title}</text>'
        ),
        (
            f'<text x="{width/2:.0f}" y="57" text-anchor="middle" '
            f'font-family="sans-serif" font-size="12">'
            '25 kV is Series-SPEC value; remaining numeric constants are educational assumptions.</text>'
        ),
    ]

    for i in range(7):
        x = x_min + (x_max - x_min) * i / 6.0
        xx = sx(x)
        parts.append(
            f'<line x1="{xx:.1f}" y1="{top}" x2="{xx:.1f}" '
            f'y2="{top+plot_h}" stroke="#dddddd" stroke-width="1"/>'
        )
        parts.append(
            f'<text x="{xx:.1f}" y="{top+plot_h+25}" '
            f'text-anchor="middle" font-family="sans-serif" '
            f'font-size="13">{x:.0f}</text>'
        )

    for i in range(6):
        y = y_min + (y_max - y_min) * i / 5.0
        yy = sy(y)
        parts.append(
            f'<line x1="{left}" y1="{yy:.1f}" '
            f'x2="{left+plot_w}" y2="{yy:.1f}" '
            f'stroke="#dddddd" stroke-width="1"/>'
        )
        parts.append(
            f'<text x="{left-12}" y="{yy+5:.1f}" '
            f'text-anchor="end" font-family="sans-serif" '
            f'font-size="13">{y:.2f}</text>'
        )

    if y_min < 0.0 < y_max:
        yy0 = sy(0.0)
        parts.append(
            f'<line x1="{left}" y1="{yy0:.1f}" '
            f'x2="{left+plot_w}" y2="{yy0:.1f}" '
            f'stroke="#777777" stroke-width="1.2"/>'
        )

    parts.extend(
        [
            (
                f'<line x1="{left}" y1="{top+plot_h}" '
                f'x2="{left+plot_w}" y2="{top+plot_h}" '
                'stroke="black" stroke-width="1.4"/>'
            ),
            (
                f'<line x1="{left}" y1="{top}" x2="{left}" '
                f'y2="{top+plot_h}" stroke="black" stroke-width="1.4"/>'
            ),
            (
                f'<text x="{left+plot_w/2:.1f}" y="{height-33}" '
                'text-anchor="middle" font-family="sans-serif" '
                'font-size="16">Time [s]</text>'
            ),
            (
                f'<text x="25" y="{top+plot_h/2:.1f}" '
                f'transform="rotate(-90 25 {top+plot_h/2:.1f})" '
                'text-anchor="middle" font-family="sans-serif" '
                f'font-size="16">{y_label}</text>'
            ),
        ]
    )

    for idx, (label, color, values) in enumerate(curves):
        points = _polyline_points(values, sx, sy)
        parts.append(
            f'<polyline points="{points}" fill="none" '
            f'stroke="{color}" stroke-width="2.2"/>'
        )
        lx = left + 20
        ly = top + 18 + 23 * idx
        parts.append(
            f'<line x1="{lx}" y1="{ly}" x2="{lx+34}" y2="{ly}" '
            f'stroke="{color}" stroke-width="3"/>'
        )
        parts.append(
            f'<text x="{lx+43}" y="{ly+5}" '
            f'font-family="sans-serif" font-size="13">{label}</text>'
        )

    parts.append(
        (
            f'<text x="{left}" y="{height-11}" '
            'font-family="sans-serif" font-size="11">'
            'dt=0.1 s; M=300000 kg; D=0.86 m; gear=2.50; '
            'Kp=0.10, Ki=0.001, Kd=0; ideal converter/inverter model.</text>'
        )
    )
    parts.append("</svg>")
    path.write_text("\n".join(parts), encoding="utf-8")


def generate_graphs(outdir: Path, rows: Sequence[dict[str, float]]) -> None:
    times = [r["time_s"] for r in rows]

    def curve(column: str) -> list[tuple[float, float]]:
        return list(zip(times, [r[column] for r in rows]))

    graph_specs = [
        (
            "22_time_speed.svg",
            "Time - speed",
            "Speed [m/s]",
            [
                ("reference", "#555555", curve("speed_ref_mps")),
                ("vehicle", "#2563eb", curve("speed_mps")),
            ],
            min(r["speed_mps"] for r in rows),
            max(r["speed_ref_mps"] for r in rows),
        ),
        (
            "22_time_acceleration.svg",
            "Time - acceleration",
            "Acceleration [m/s^2]",
            [("vehicle", "#2563eb", curve("acceleration_mps2"))],
            min(r["acceleration_mps2"] for r in rows),
            max(r["acceleration_mps2"] for r in rows),
        ),
        (
            "22_time_current.svg",
            "Time - motor current",
            "Motor current [A]",
            [("motor current", "#2563eb", curve("motor_current_a"))],
            0.0,
            max(r["motor_current_a"] for r in rows),
        ),
        (
            "22_time_torque.svg",
            "Time - motor torque",
            "Motor torque [N m]",
            [("motor torque", "#2563eb", curve("motor_torque_nm"))],
            min(r["motor_torque_nm"] for r in rows),
            max(r["motor_torque_nm"] for r in rows),
        ),
        (
            "22_time_power.svg",
            "Time - consumption power",
            "Consumption power [kW]",
            [
                (
                    "consumption",
                    "#2563eb",
                    curve("consumption_power_kw"),
                )
            ],
            0.0,
            max(r["consumption_power_kw"] for r in rows),
        ),
        (
            "22_time_regeneration_power.svg",
            "Time - regeneration power",
            "Regeneration power [kW]",
            [
                (
                    "regeneration",
                    "#2563eb",
                    curve("regeneration_power_kw"),
                )
            ],
            0.0,
            max(r["regeneration_power_kw"] for r in rows),
        ),
    ]

    for filename, title, ylabel, curves, ymin, ymax in graph_specs:
        svg_line_graph(
            outdir / filename,
            title=title,
            y_label=ylabel,
            curves=curves,
            y_min=ymin,
            y_max=ymax,
        )


def run_checks(rows: Sequence[dict[str, float]]) -> None:
    assert len(rows) == 3301
    assert list(rows[0].keys()) == CSV_COLUMNS

    ns_error = 0.0
    slip_error = 0.0
    speed_error = 0.0
    force_error = 0.0
    accel_error = 0.0

    motoring_points = 0
    regeneration_points = 0

    for row in rows:
        f = row["inverter_frequency_hz"]
        if f > FREQ_EPS:
            ns_expected = 120.0 * f / P.poles
            ns_error = max(
                ns_error, abs(row["synchronous_speed_rpm"] - ns_expected)
            )
            slip_expected = (
                row["synchronous_speed_rpm"] - row["motor_speed_rpm"]
            ) / row["synchronous_speed_rpm"]
            slip_error = max(
                slip_error, abs(row["slip"] - slip_expected)
            )

        speed_expected = vehicle_speed_from_motor_mps(
            row["motor_speed_rpm"]
        )
        speed_error = max(
            speed_error, abs(row["speed_mps"] - speed_expected)
        )

        force_expected = (
            2.0
            * P.gear_ratio
            * row["motor_torque_nm"]
            / P.wheel_diameter_m
        )
        force_error = max(
            force_error, abs(row["traction_force_n"] - force_expected)
        )

        accel_expected = (
            row["traction_force_n"] - P.running_resistance_n
        ) / P.vehicle_mass_kg
        accel_error = max(
            accel_error,
            abs(row["acceleration_mps2"] - accel_expected),
        )

        assert row["speed_mps"] >= -1.0e-12
        assert not (
            row["consumption_power_kw"] > 1.0e-9
            and row["regeneration_power_kw"] > 1.0e-9
        )

        if (
            row["motor_torque_nm"] > 0.0
            and row["consumption_power_kw"] > 0.0
        ):
            motoring_points += 1
        if (
            row["slip"] < 0.0
            and row["motor_torque_nm"] < 0.0
            and row["regeneration_power_kw"] > 0.0
        ):
            regeneration_points += 1

    assert ns_error < 1.0e-9
    assert slip_error < 1.0e-12
    assert speed_error < 1.0e-12
    assert force_error < 1.0e-9
    assert accel_error < 1.0e-12
    assert motoring_points > 0
    assert regeneration_points > 0

    print(f"rows={len(rows)}")
    print(f"max synchronous-speed residual={ns_error:.3e} rpm")
    print(f"max slip residual={slip_error:.3e}")
    print(f"max speed-conversion residual={speed_error:.3e} m/s")
    print(f"max traction-force residual={force_error:.3e} N")
    print(f"max acceleration residual={accel_error:.3e} m/s^2")
    print(f"motoring points={motoring_points}")
    print(f"regeneration points={regeneration_points}")
    print(
        "max speed="
        f"{max(r['speed_mps'] for r in rows):.6f} m/s"
    )
    print(
        "max consumption="
        f"{max(r['consumption_power_kw'] for r in rows):.6f} kW"
    )
    print(
        "max regeneration="
        f"{max(r['regeneration_power_kw'] for r in rows):.6f} kW"
    )


def verify_generated_files(outdir: Path) -> None:
    csv_path = outdir / "22_integrated_route_simulation_results.csv"
    with csv_path.open("r", encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        header = next(reader)
        row_count = sum(1 for _ in reader)
    assert header == CSV_COLUMNS
    assert row_count == 3301

    for filename in GRAPH_FILES:
        graph_path = outdir / filename
        assert graph_path.exists()
        ET.parse(graph_path)

    print("CSV schema/rows=PASS; SVG XML=6/6 PASS")


def main() -> None:
    outdir = Path(__file__).resolve().parent
    rows = simulate()
    run_checks(rows)
    write_csv(
        outdir / "22_integrated_route_simulation_results.csv",
        rows,
    )
    generate_graphs(outdir, rows)
    verify_generated_files(outdir)
    print("Generated CSV and six Series-SPEC graphs (SVG).")


if __name__ == "__main__":
    main()
