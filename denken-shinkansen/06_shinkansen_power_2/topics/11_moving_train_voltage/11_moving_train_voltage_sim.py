#!/usr/bin/env python3
"""Topic 11: single moving-load voltage calculation.

All numeric values below are educational assumed values reused from
11_moving_train_voltage_explanation.md Example 2. They are not actual
Shinkansen equipment values.

The model is the SPEC-fixed single moving load only:
    Vs -- Z(x) -- Vr -- S=P+jQ
No multiple-train load flow, compensation, reverse power flow, fault,
protection, stability, or other later-topic models are introduced.
"""

from __future__ import annotations

import csv
import math
from pathlib import Path
from typing import Iterable

OUT_DIR = Path(__file__).resolve().parent

# Educational assumed values (same as explanation Example 2)
VS_V = 25_000.0
P_W = 4_000_000.0
POWER_FACTOR = 0.90
R_PER_KM_OHM = 0.04
X_PER_KM_OHM = 0.06
X_MAX_KM = 12.0
STEP_KM = 0.1


def calc_at_position(x_km: float) -> dict[str, float]:
    """Solve the high-voltage receiving-end solution at one train position."""
    if x_km < 0:
        raise ValueError("x_km must be non-negative")
    if not 0.0 < POWER_FACTOR <= 1.0:
        raise ValueError("POWER_FACTOR must be in (0, 1]")

    phi = math.acos(POWER_FACTOR)
    q_load_var = P_W * math.tan(phi)
    s_abs_va = math.hypot(P_W, q_load_var)

    r_ohm = R_PER_KM_OHM * x_km
    x_ohm = X_PER_KM_OHM * x_km

    # With Vr chosen as the positive real reference:
    # Vs = Vr + {(RP+XQ) + j(XP-RQ)} / Vr
    a_v2 = r_ohm * P_W + x_ohm * q_load_var
    b_v2 = x_ohm * P_W - r_ohm * q_load_var
    c_v2 = VS_V * VS_V - 2.0 * a_v2
    discriminant_v4 = c_v2 * c_v2 - 4.0 * (a_v2 * a_v2 + b_v2 * b_v2)

    # Small negative values from floating-point roundoff are clamped to zero.
    tol = 1e-9 * VS_V**4
    if discriminant_v4 < -tol:
        raise ValueError(
            f"No real high-voltage solution at x={x_km:.3f} km "
            f"(discriminant={discriminant_v4:.6e})"
        )
    discriminant_v4 = max(discriminant_v4, 0.0)

    vr_sq_v2 = (c_v2 + math.sqrt(discriminant_v4)) / 2.0
    if vr_sq_v2 <= 0.0:
        raise ValueError(f"Non-positive Vr^2 at x={x_km:.3f} km")

    vr_v = math.sqrt(vr_sq_v2)
    i_a = s_abs_va / vr_v
    p_loss_w = i_a * i_a * r_ohm
    q_line_var = i_a * i_a * x_ohm

    return {
        "x_km": x_km,
        "pantograph_voltage_kV": vr_v / 1000.0,
        "line_current_A": i_a,
        "active_line_loss_kW": p_loss_w / 1000.0,
        "load_reactive_power_kvar": q_load_var / 1000.0,
        "line_reactive_power_kvar": q_line_var / 1000.0,
    }


def sweep() -> list[dict[str, float]]:
    count = int(round(X_MAX_KM / STEP_KM))
    return [calc_at_position(i * STEP_KM) for i in range(count + 1)]


def write_csv(rows: Iterable[dict[str, float]], path: Path) -> None:
    rows = list(rows)
    fieldnames = list(rows[0].keys())
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow({k: f"{v:.6f}" for k, v in row.items()})


def _svg_escape(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def write_svg(
    rows: list[dict[str, float]],
    path: Path,
    y_series: list[tuple[str, str]],
    title: str,
    y_label: str,
) -> None:
    """Write a dependency-free SVG line graph."""
    width, height = 960, 540
    left, right, top, bottom = 92, 35, 54, 78
    plot_w = width - left - right
    plot_h = height - top - bottom

    xs = [r["x_km"] for r in rows]
    ys_all = [r[key] for key, _ in y_series for r in rows]
    xmin, xmax = min(xs), max(xs)
    ymin, ymax = min(ys_all), max(ys_all)
    if math.isclose(ymin, ymax):
        pad = max(abs(ymin) * 0.05, 1.0)
        ymin -= pad
        ymax += pad
    else:
        pad = 0.06 * (ymax - ymin)
        ymin -= pad
        ymax += pad

    def sx(x: float) -> float:
        return left + (x - xmin) / (xmax - xmin) * plot_w if xmax != xmin else left

    def sy(y: float) -> float:
        return top + (ymax - y) / (ymax - ymin) * plot_h

    palette = ["#1f77b4", "#d62728", "#2ca02c", "#9467bd"]
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="white"/>',
        f'<text x="{width/2:.1f}" y="30" text-anchor="middle" font-size="20" font-family="sans-serif">{_svg_escape(title)}</text>',
        f'<line x1="{left}" y1="{top+plot_h}" x2="{left+plot_w}" y2="{top+plot_h}" stroke="black"/>',
        f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top+plot_h}" stroke="black"/>',
    ]

    # Five intervals on each axis.
    for i in range(6):
        xv = xmin + (xmax - xmin) * i / 5.0
        xp = sx(xv)
        parts += [
            f'<line x1="{xp:.2f}" y1="{top+plot_h}" x2="{xp:.2f}" y2="{top+plot_h+6}" stroke="black"/>',
            f'<text x="{xp:.2f}" y="{top+plot_h+24}" text-anchor="middle" font-size="12" font-family="sans-serif">{xv:.1f}</text>',
        ]
        yv = ymin + (ymax - ymin) * i / 5.0
        yp = sy(yv)
        parts += [
            f'<line x1="{left-6}" y1="{yp:.2f}" x2="{left}" y2="{yp:.2f}" stroke="black"/>',
            f'<text x="{left-10}" y="{yp+4:.2f}" text-anchor="end" font-size="12" font-family="sans-serif">{yv:.3g}</text>',
            f'<line x1="{left}" y1="{yp:.2f}" x2="{left+plot_w}" y2="{yp:.2f}" stroke="#dddddd" stroke-width="1"/>',
        ]

    parts += [
        f'<text x="{left+plot_w/2:.1f}" y="{height-24}" text-anchor="middle" font-size="14" font-family="sans-serif">train position x [km]</text>',
        f'<text x="23" y="{top+plot_h/2:.1f}" text-anchor="middle" font-size="14" font-family="sans-serif" transform="rotate(-90 23 {top+plot_h/2:.1f})">{_svg_escape(y_label)}</text>',
    ]

    for idx, (key, label) in enumerate(y_series):
        color = palette[idx % len(palette)]
        points = " ".join(f"{sx(r['x_km']):.2f},{sy(r[key]):.2f}" for r in rows)
        parts.append(f'<polyline fill="none" stroke="{color}" stroke-width="2.5" points="{points}"/>')
        lx = left + plot_w - 190
        ly = top + 22 + idx * 22
        parts += [
            f'<line x1="{lx}" y1="{ly-5}" x2="{lx+24}" y2="{ly-5}" stroke="{color}" stroke-width="3"/>',
            f'<text x="{lx+32}" y="{ly}" font-size="12" font-family="sans-serif">{_svg_escape(label)}</text>',
        ]

    parts.append("</svg>")
    path.write_text("\n".join(parts) + "\n", encoding="utf-8")


def main() -> None:
    rows = sweep()

    write_csv(rows, OUT_DIR / "11_moving_train_voltage_sweep.csv")
    write_svg(
        rows,
        OUT_DIR / "11_moving_train_voltage_pantograph_voltage.svg",
        [("pantograph_voltage_kV", "pantograph voltage")],
        "Topic 11: pantograph voltage vs train position",
        "pantograph voltage [kV]",
    )
    write_svg(
        rows,
        OUT_DIR / "11_moving_train_voltage_line_current.svg",
        [("line_current_A", "line current")],
        "Topic 11: line current vs train position",
        "line current [A]",
    )
    write_svg(
        rows,
        OUT_DIR / "11_moving_train_voltage_active_loss.svg",
        [("active_line_loss_kW", "active line loss")],
        "Topic 11: active line loss vs train position",
        "active line loss [kW]",
    )
    write_svg(
        rows,
        OUT_DIR / "11_moving_train_voltage_reactive_power.svg",
        [
            ("load_reactive_power_kvar", "load Q"),
            ("line_reactive_power_kvar", "line Q"),
        ],
        "Topic 11: reactive power vs train position",
        "reactive power [kvar]",
    )

    end = rows[-1]
    print(
        "generated 121 points; "
        f"x={end['x_km']:.1f} km: "
        f"Vr={end['pantograph_voltage_kV']:.6f} kV, "
        f"I={end['line_current_A']:.6f} A, "
        f"Ploss={end['active_line_loss_kW']:.6f} kW, "
        f"Qload={end['load_reactive_power_kvar']:.6f} kvar, "
        f"Qline={end['line_reactive_power_kvar']:.6f} kvar"
    )


if __name__ == "__main__":
    main()
