from __future__ import annotations

import math
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


@dataclass(frozen=True)
class MotorParams:
    poles: int = 4
    phase_voltage_v: float = 200.0
    frequency_hz: float = 50.0
    r1_ohm: float = 0.20
    r2_ohm: float = 0.10
    x_at_50hz_ohm: float = 0.80

    @property
    def leakage_inductance_h(self) -> float:
        return self.x_at_50hz_ohm / (2.0 * math.pi * 50.0)


BASE = MotorParams()


def synchronous_speed_rpm(frequency_hz: float, poles: int) -> float:
    return 120.0 * frequency_hz / poles


def synchronous_omega(frequency_hz: float, poles: int) -> float:
    pole_pairs = poles / 2.0
    return 2.0 * math.pi * frequency_hz / pole_pairs


def reactance_ohm(frequency_hz: float, leakage_inductance_h: float) -> float:
    return 2.0 * math.pi * frequency_hz * leakage_inductance_h


def maximum_torque_slip(r1_ohm: float, r2_ohm: float, x_ohm: float) -> float:
    return r2_ohm / math.sqrt(r1_ohm**2 + x_ohm**2)


def maximum_torque_nm(
    phase_voltage_v: float,
    frequency_hz: float,
    poles: int,
    r1_ohm: float,
    x_ohm: float,
) -> float:
    omega_s = synchronous_omega(frequency_hz, poles)
    a = math.sqrt(r1_ohm**2 + x_ohm**2)
    return 3.0 * phase_voltage_v**2 / (2.0 * omega_s * (r1_ohm + a))


def torque_nm(
    slip: float,
    *,
    phase_voltage_v: float,
    frequency_hz: float,
    r2_ohm: float,
) -> float:
    x = reactance_ohm(frequency_hz, BASE.leakage_inductance_h)
    omega_s = synchronous_omega(frequency_hz, BASE.poles)
    y = r2_ohm / slip
    return (3.0 / omega_s) * phase_voltage_v**2 * y / ((BASE.r1_ohm + y) ** 2 + x**2)


def make_curve(
    *, phase_voltage_v: float, frequency_hz: float, r2_ohm: float, samples: int = 80
) -> list[tuple[float, float]]:
    # Ordinary motoring region only: 0 < s <= 1.
    points: list[tuple[float, float]] = []
    ns = synchronous_speed_rpm(frequency_hz, BASE.poles)
    for i in range(samples):
        slip = 1.0e-4 + (1.0 - 1.0e-4) * i / (samples - 1)
        speed = (1.0 - slip) * ns
        points.append(
            (speed, torque_nm(slip, phase_voltage_v=phase_voltage_v, frequency_hz=frequency_hz, r2_ohm=r2_ohm))
        )
    return points


def svg_graph(
    path: Path,
    *,
    title: str,
    curves: list[tuple[str, list[tuple[float, float]]]],
    markers: list[tuple[float, float]],
    x_max: float,
    y_max: float,
    note: str,
) -> None:
    width, height = 960, 600
    left, right, top, bottom = 90, 30, 70, 75
    plot_w = width - left - right
    plot_h = height - top - bottom

    def sx(x: float) -> float:
        return left + x / x_max * plot_w

    def sy(y: float) -> float:
        return top + (1.0 - y / y_max) * plot_h

    palette = ["#2563eb", "#ea580c", "#16a34a", "#9333ea"]
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="white"/>',
        f'<text x="{width/2:.0f}" y="34" text-anchor="middle" font-family="sans-serif" font-size="24">{title}</text>',
        f'<text x="{width/2:.0f}" y="56" text-anchor="middle" font-family="sans-serif" font-size="13">{note}</text>',
    ]

    for i in range(0, 7):
        x = x_max * i / 6
        xx = sx(x)
        parts.append(f'<line x1="{xx:.1f}" y1="{top}" x2="{xx:.1f}" y2="{top+plot_h}" stroke="#dddddd" stroke-width="1"/>')
        parts.append(f'<text x="{xx:.1f}" y="{top+plot_h+24}" text-anchor="middle" font-family="sans-serif" font-size="13">{x:.0f}</text>')
    for i in range(0, 6):
        y = y_max * i / 5
        yy = sy(y)
        parts.append(f'<line x1="{left}" y1="{yy:.1f}" x2="{left+plot_w}" y2="{yy:.1f}" stroke="#dddddd" stroke-width="1"/>')
        parts.append(f'<text x="{left-12}" y="{yy+5:.1f}" text-anchor="end" font-family="sans-serif" font-size="13">{y:.0f}</text>')

    parts.extend([
        f'<line x1="{left}" y1="{top+plot_h}" x2="{left+plot_w}" y2="{top+plot_h}" stroke="black" stroke-width="1.4"/>',
        f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top+plot_h}" stroke="black" stroke-width="1.4"/>',
        f'<text x="{left+plot_w/2:.1f}" y="{height-20}" text-anchor="middle" font-family="sans-serif" font-size="16">Rotor speed n [min^-1]</text>',
        f'<text x="25" y="{top+plot_h/2:.1f}" transform="rotate(-90 25 {top+plot_h/2:.1f})" text-anchor="middle" font-family="sans-serif" font-size="16">Electromagnetic torque T [N m]</text>',
    ])

    for idx, (label, curve) in enumerate(curves):
        color = palette[idx]
        points = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in curve)
        parts.append(f'<polyline points="{points}" fill="none" stroke="{color}" stroke-width="3"/>')
        lx, ly = left + 20, top + 20 + idx * 24
        parts.append(f'<line x1="{lx}" y1="{ly}" x2="{lx+34}" y2="{ly}" stroke="{color}" stroke-width="3"/>')
        parts.append(f'<text x="{lx+44}" y="{ly+5}" font-family="sans-serif" font-size="14">{label}</text>')

    for idx, (x, y) in enumerate(markers):
        color = palette[idx]
        parts.append(f'<circle cx="{sx(x):.1f}" cy="{sy(y):.1f}" r="5" fill="{color}"/>')

    parts.append('</svg>')
    path.write_text("\n".join(parts), encoding="utf-8")


def generate_graphs(outdir: Path) -> None:
    x50 = reactance_ohm(50.0, BASE.leakage_inductance_h)
    sm50 = maximum_torque_slip(BASE.r1_ohm, 0.10, x50)
    tm50 = maximum_torque_nm(200.0, 50.0, BASE.poles, BASE.r1_ohm, x50)
    ns50 = synchronous_speed_rpm(50.0, BASE.poles)
    nmax50 = (1.0 - sm50) * ns50

    svg_graph(
        outdir / "06_speed_torque.svg",
        title="Speed-torque characteristic (baseline)",
        curves=[("50 Hz, 200 V, r2'=0.10 ohm", make_curve(phase_voltage_v=200.0, frequency_hz=50.0, r2_ohm=0.10))],
        markers=[(nmax50, tm50)],
        x_max=1530.0,
        y_max=400.0,
        note=f"4 poles; r1=0.20 ohm; X50=0.80 ohm; max at s={sm50:.3f}, T={tm50:.1f} N m",
    )

    sm20 = maximum_torque_slip(BASE.r1_ohm, 0.20, x50)
    nmax20 = (1.0 - sm20) * ns50
    svg_graph(
        outdir / "06_rotor_resistance_comparison.svg",
        title="Rotor-resistance comparison: proportional shifting",
        curves=[
            ("r2'=0.10 ohm", make_curve(phase_voltage_v=200.0, frequency_hz=50.0, r2_ohm=0.10)),
            ("r2'=0.20 ohm", make_curve(phase_voltage_v=200.0, frequency_hz=50.0, r2_ohm=0.20)),
        ],
        markers=[(nmax50, tm50), (nmax20, tm50)],
        x_max=1530.0,
        y_max=400.0,
        note="V, f, r1 and X fixed; doubling r2' doubles s_m but leaves T_m unchanged",
    )

    tm160 = maximum_torque_nm(160.0, 50.0, BASE.poles, BASE.r1_ohm, x50)
    svg_graph(
        outdir / "06_voltage_comparison.svg",
        title="Voltage comparison: torque is proportional to V1^2",
        curves=[
            ("V1=200 V", make_curve(phase_voltage_v=200.0, frequency_hz=50.0, r2_ohm=0.10)),
            ("V1=160 V", make_curve(phase_voltage_v=160.0, frequency_hz=50.0, r2_ohm=0.10)),
        ],
        markers=[(nmax50, tm50), (nmax50, tm160)],
        x_max=1530.0,
        y_max=400.0,
        note=f"f and circuit constants fixed; T_m ratio={tm160/tm50:.2f}; s_m unchanged",
    )

    x60 = reactance_ohm(60.0, BASE.leakage_inductance_h)
    sm60 = maximum_torque_slip(BASE.r1_ohm, 0.10, x60)
    tm60 = maximum_torque_nm(200.0, 60.0, BASE.poles, BASE.r1_ohm, x60)
    ns60 = synchronous_speed_rpm(60.0, BASE.poles)
    nmax60 = (1.0 - sm60) * ns60
    svg_graph(
        outdir / "06_frequency_comparison.svg",
        title="Frequency comparison: V, R and L fixed",
        curves=[
            ("f=50 Hz, X=0.80 ohm", make_curve(phase_voltage_v=200.0, frequency_hz=50.0, r2_ohm=0.10)),
            ("f=60 Hz, X=0.96 ohm", make_curve(phase_voltage_v=200.0, frequency_hz=60.0, r2_ohm=0.10)),
        ],
        markers=[(nmax50, tm50), (nmax60, tm60)],
        x_max=1840.0,
        y_max=400.0,
        note="V=200 V, r1=0.20 ohm, r2'=0.10 ohm and leakage L fixed; X=2*pi*f*L",
    )


def run_checks() -> None:
    x50 = reactance_ohm(50.0, BASE.leakage_inductance_h)
    x60 = reactance_ohm(60.0, BASE.leakage_inductance_h)
    sm50 = maximum_torque_slip(BASE.r1_ohm, 0.10, x50)
    sm20 = maximum_torque_slip(BASE.r1_ohm, 0.20, x50)
    sm60 = maximum_torque_slip(BASE.r1_ohm, 0.10, x60)
    tm50 = maximum_torque_nm(200.0, 50.0, BASE.poles, BASE.r1_ohm, x50)
    tm20 = maximum_torque_nm(200.0, 50.0, BASE.poles, BASE.r1_ohm, x50)
    tm160 = maximum_torque_nm(160.0, 50.0, BASE.poles, BASE.r1_ohm, x50)
    tm60 = maximum_torque_nm(200.0, 60.0, BASE.poles, BASE.r1_ohm, x60)

    assert math.isclose(x50, 0.80, abs_tol=1e-12)
    assert math.isclose(x60, 0.96, abs_tol=1e-12)
    assert math.isclose(sm20 / sm50, 2.0, rel_tol=1e-12)
    assert math.isclose(tm20, tm50, rel_tol=1e-12)
    assert math.isclose(tm160 / tm50, 0.64, rel_tol=1e-12)
    assert abs(sm50 - 0.12127) < 1e-4
    assert abs(sm60 - 0.10198) < 1e-4
    assert abs(tm50 - 372.79) < 0.1
    assert abs(tm60 - 269.61) < 0.1

    print(f"50 Hz: ns={synchronous_speed_rpm(50.0, BASE.poles):.0f} min^-1, X={x50:.2f} ohm, sm={sm50:.5f}, Tm={tm50:.2f} N m")
    print(f"r2'=0.20 ohm: sm={sm20:.5f}, Tm={tm20:.2f} N m")
    print(f"160 V: Tm={tm160:.2f} N m (ratio={tm160/tm50:.2f})")
    print(f"60 Hz: ns={synchronous_speed_rpm(60.0, BASE.poles):.0f} min^-1, X={x60:.2f} ohm, sm={sm60:.5f}, Tm={tm60:.2f} N m")


def main() -> None:
    outdir = Path(__file__).resolve().parent
    run_checks()
    generate_graphs(outdir)
    print("Generated 4 SPEC-defined comparison graphs (SVG).")


if __name__ == "__main__":
    main()
