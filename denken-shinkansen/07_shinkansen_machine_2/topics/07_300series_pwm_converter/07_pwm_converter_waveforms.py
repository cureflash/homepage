from __future__ import annotations

import math
from pathlib import Path
from xml.etree import ElementTree as ET

SAMPLES = 801
CYCLES = 2.0
CARRIER_RATIO = 20
MODULATION = 0.80
CURRENT_PU = 0.85
DC_RIPPLE_PU = 0.02


def triangle_unit(phase_cycles: float) -> float:
    x = phase_cycles % 1.0
    return 4.0 * abs(x - 0.5) - 1.0


def make_samples() -> dict[str, list[tuple[float, float]]]:
    ac_voltage = []
    pwm_voltage = []
    ac_current = []
    dc_link_voltage = []
    reference = []
    carrier = []

    for i in range(SAMPLES):
        t_pu = CYCLES * i / (SAMPLES - 1)  # fundamental cycles
        theta = 2.0 * math.pi * t_pu
        v_ac = math.sin(theta)
        v_ref = MODULATION * math.sin(theta)
        v_carrier = triangle_unit(CARRIER_RATIO * t_pu)
        v_pwm = 1.0 if v_ref >= v_carrier else -1.0
        i_ac = CURRENT_PU * math.sin(theta)
        # Conceptual single-phase DC-link ripple only. Magnitude is illustrative, not a 300-series actual value.
        v_dc = 1.0 + DC_RIPPLE_PU * math.cos(2.0 * theta)

        ac_voltage.append((t_pu, v_ac))
        pwm_voltage.append((t_pu, v_pwm))
        ac_current.append((t_pu, i_ac))
        dc_link_voltage.append((t_pu, v_dc))
        reference.append((t_pu, v_ref))
        carrier.append((t_pu, v_carrier))

    return {
        "ac_voltage": ac_voltage,
        "pwm_voltage": pwm_voltage,
        "ac_current": ac_current,
        "dc_link_voltage": dc_link_voltage,
        "reference": reference,
        "carrier": carrier,
    }


def svg_waveform(
    path: Path,
    *,
    title: str,
    y_label: str,
    points: list[tuple[float, float]],
    y_min: float,
    y_max: float,
    note: str,
    step: bool = False,
    overlays: list[tuple[str, list[tuple[float, float]], str]] | None = None,
) -> None:
    width, height = 960, 520
    left, right, top, bottom = 88, 28, 78, 76
    plot_w = width - left - right
    plot_h = height - top - bottom

    def sx(x: float) -> float:
        return left + x / CYCLES * plot_w

    def sy(y: float) -> float:
        return top + (y_max - y) / (y_max - y_min) * plot_h

    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="white"/>',
        f'<text x="{width/2:.0f}" y="34" text-anchor="middle" font-family="sans-serif" font-size="24">{title}</text>',
        f'<text x="{width/2:.0f}" y="57" text-anchor="middle" font-family="sans-serif" font-size="13">{note}</text>',
    ]

    for k in range(9):
        x = CYCLES * k / 8
        xx = sx(x)
        parts.append(f'<line x1="{xx:.1f}" y1="{top}" x2="{xx:.1f}" y2="{top+plot_h}" stroke="#e5e7eb" stroke-width="1"/>')
        parts.append(f'<text x="{xx:.1f}" y="{top+plot_h+24}" text-anchor="middle" font-family="sans-serif" font-size="12">{x:.2f}</text>')
    for k in range(5):
        y = y_min + (y_max-y_min) * k / 4
        yy = sy(y)
        parts.append(f'<line x1="{left}" y1="{yy:.1f}" x2="{left+plot_w}" y2="{yy:.1f}" stroke="#e5e7eb" stroke-width="1"/>')
        parts.append(f'<text x="{left-10}" y="{yy+4:.1f}" text-anchor="end" font-family="sans-serif" font-size="12">{y:.2f}</text>')

    if y_min < 0 < y_max:
        parts.append(f'<line x1="{left}" y1="{sy(0):.1f}" x2="{left+plot_w}" y2="{sy(0):.1f}" stroke="#9ca3af" stroke-width="1.4"/>')

    parts.extend([
        f'<line x1="{left}" y1="{top+plot_h}" x2="{left+plot_w}" y2="{top+plot_h}" stroke="black" stroke-width="1.4"/>',
        f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top+plot_h}" stroke="black" stroke-width="1.4"/>',
        f'<text x="{left+plot_w/2:.1f}" y="{height-20}" text-anchor="middle" font-family="sans-serif" font-size="15">Time t / T (fundamental periods)</text>',
        f'<text x="23" y="{top+plot_h/2:.1f}" transform="rotate(-90 23 {top+plot_h/2:.1f})" text-anchor="middle" font-family="sans-serif" font-size="15">{y_label}</text>',
    ])

    if step:
        compressed = [points[0]]
        for idx in range(1, len(points)):
            x, y = points[idx]
            _, y_prev = points[idx - 1]
            if y != y_prev:
                compressed.append((x, y_prev))
                compressed.append((x, y))
        if compressed[-1][0] != points[-1][0]:
            compressed.append(points[-1])
        points_attr = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in compressed)
    else:
        stride = max(1, len(points) // 240)
        plotted = points[::stride]
        if plotted[-1] != points[-1]:
            plotted.append(points[-1])
        points_attr = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in plotted)
    parts.append(f'<polyline points="{points_attr}" fill="none" stroke="#2563eb" stroke-width="2.6"/>')

    if overlays:
        for label, overlay_points, color in overlays:
            stride = max(1, len(overlay_points) // 400)
            plotted_overlay = overlay_points[::stride]
            if plotted_overlay[-1] != overlay_points[-1]:
                plotted_overlay.append(overlay_points[-1])
            overlay_attr = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in plotted_overlay)
            parts.append(f'<polyline points="{overlay_attr}" fill="none" stroke="{color}" stroke-width="1.4"/>')
        x0, y0 = left + 18, top + 20
        for idx, (label, _, color) in enumerate(overlays):
            yy = y0 + idx * 22
            parts.append(f'<line x1="{x0}" y1="{yy}" x2="{x0+30}" y2="{yy}" stroke="{color}" stroke-width="2"/>')
            parts.append(f'<text x="{x0+38}" y="{yy+4}" font-family="sans-serif" font-size="12">{label}</text>')

    parts.append('</svg>')
    path.write_text("\n".join(parts), encoding="utf-8")


def run_checks(samples: dict[str, list[tuple[float, float]]]) -> None:
    ac = [y for _, y in samples["ac_voltage"]]
    pwm = [y for _, y in samples["pwm_voltage"]]
    cur = [y for _, y in samples["ac_current"]]
    vdc = [y for _, y in samples["dc_link_voltage"]]
    ref = [y for _, y in samples["reference"]]
    car = [y for _, y in samples["carrier"]]

    assert all(math.isfinite(v) for seq in (ac, pwm, cur, vdc, ref, car) for v in seq)
    assert min(ac) >= -1.0000001 and max(ac) <= 1.0000001
    assert set(pwm) == {-1.0, 1.0}
    assert min(car) >= -1.0000001 and max(car) <= 1.0000001
    assert max(abs(v) for v in ref) <= MODULATION + 1e-12
    assert abs(sum(vdc) / len(vdc) - 1.0) < 5e-5
    assert abs(min(vdc) - (1.0 - DC_RIPPLE_PU)) < 5e-5
    assert abs(max(vdc) - (1.0 + DC_RIPPLE_PU)) < 5e-5

    dot = sum(a * b for a, b in zip(ac, cur))
    norm = math.sqrt(sum(a*a for a in ac) * sum(b*b for b in cur))
    assert dot / norm > 0.999999

    # PWM must switch repeatedly and its low-frequency content must have the same sign as the reference.
    transitions = sum(1 for a, b in zip(pwm, pwm[1:]) if a != b)
    assert transitions > 40
    sin_coeff = 2.0 / len(pwm) * sum(
        y * math.sin(2.0 * math.pi * (CYCLES * i / (SAMPLES - 1)))
        for i, y in enumerate(pwm)
    )
    assert sin_coeff > 0.5

    print(f"samples={SAMPLES}")
    print(f"carrier_ratio={CARRIER_RATIO} (illustrative normalized ratio)")
    print(f"modulation={MODULATION:.2f}")
    print(f"PWM transitions={transitions}")
    print(f"PWM fundamental sine coefficient~{sin_coeff:.3f}")
    print(f"AC voltage/current correlation={dot/norm:.6f}")
    print(f"DC link mean={sum(vdc)/len(vdc):.6f}, min={min(vdc):.6f}, max={max(vdc):.6f}")


def main() -> None:
    outdir = Path(__file__).resolve().parent
    samples = make_samples()
    run_checks(samples)

    svg_waveform(
        outdir / "07_ac_voltage_waveform.svg",
        title="AC-side voltage waveform (normalized)",
        y_label="v_s / V_s,pk",
        points=samples["ac_voltage"],
        y_min=-1.15,
        y_max=1.15,
        note="Conceptual normalized waveform; no 300-series actual voltage or frequency is asserted.",
    )
    svg_waveform(
        outdir / "07_pwm_voltage_waveform.svg",
        title="PWM converter voltage waveform (normalized switching step)",
        y_label="v_pwm / V_step",
        points=samples["pwm_voltage"],
        y_min=-1.25,
        y_max=1.25,
        note="Illustrative SPWM: m=0.80 and carrier ratio=20 are drawing parameters, not 300-series actual values.",
        step=True,
        overlays=[
            ("reference m sin(wt)", samples["reference"], "#dc2626"),
            ("triangular carrier", samples["carrier"], "#16a34a"),
        ],
    )
    svg_waveform(
        outdir / "07_ac_current_waveform.svg",
        title="AC-side current waveform at unity power factor (normalized)",
        y_label="i_s / I_s,pk",
        points=samples["ac_current"],
        y_min=-1.15,
        y_max=1.15,
        note="Unity-power-factor example: current fundamental is in phase with AC voltage; amplitude is normalized.",
    )
    svg_waveform(
        outdir / "07_dc_link_voltage_waveform.svg",
        title="DC-link voltage waveform (normalized conceptual ripple)",
        y_label="E_d / E_d,avg",
        points=samples["dc_link_voltage"],
        y_min=0.965,
        y_max=1.035,
        note="DC component with illustrative 2% double-frequency ripple; ripple magnitude is not a 300-series actual value.",
    )

    for name in [
        "07_ac_voltage_waveform.svg",
        "07_pwm_voltage_waveform.svg",
        "07_ac_current_waveform.svg",
        "07_dc_link_voltage_waveform.svg",
    ]:
        ET.parse(outdir / name)
        print(f"{name}: XML parse PASS")


if __name__ == "__main__":
    main()
