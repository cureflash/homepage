#!/usr/bin/env python3
"""Topic 12: multiple-train constant-power load sweep.

All numeric values below are educational assumed values reused from
12_multiple_train_load_explanation.md Example 11.3. They are not actual
N700S or Shinkansen traction-power equipment values.

The implemented model stays inside the Topic 12 fixed scope:
    balanced three-phase source -- series Z -- aggregated constant-power load
The train count n is swept and the receiving-end node voltage and three-phase
line loss are calculated. No unbalance, compensation, reverse power flow,
fault, protection, stability, or later-topic control model is introduced.
"""

from __future__ import annotations

import csv
import math
from pathlib import Path
from typing import Iterable

OUT_DIR = Path(__file__).resolve().parent

# Educational assumed values (same as explanation Example 11.3)
VS_LL_V = 66_000.0
P_PER_TRAIN_W = 2_000_000.0
POWER_FACTOR = 0.90
R_PHASE_OHM = 0.50
X_PHASE_OHM = 1.00
N_MAX = 4


def calc_for_train_count(n: int) -> dict[str, float]:
    """Solve the high-voltage receiving-end solution for n equal loads."""
    if n < 0:
        raise ValueError("n must be non-negative")
    if not 0.0 < POWER_FACTOR <= 1.0:
        raise ValueError("POWER_FACTOR must be in (0, 1]")

    phi = math.acos(POWER_FACTOR)
    q_per_train_var = P_PER_TRAIN_W * math.tan(phi)

    p_total_w = n * P_PER_TRAIN_W
    q_total_var = n * q_per_train_var

    if n == 0:
        return {
            "train_count": float(n),
            "load_P_MW": 0.0,
            "load_Q_Mvar": 0.0,
            "receiving_voltage_kV": VS_LL_V / 1000.0,
            "voltage_drop_V": 0.0,
            "line_current_A": 0.0,
            "line_loss_kW": 0.0,
            "sending_P_MW": 0.0,
            "sending_Q_Mvar": 0.0,
        }

    # Balanced per-phase equivalent.
    vs_phase_v = VS_LL_V / math.sqrt(3.0)
    p_phase_w = p_total_w / 3.0
    q_phase_var = q_total_var / 3.0

    # Choose receiving-end phase voltage Vr as the positive real reference.
    # I = conj(S_phase / Vr)
    # Vs = Vr + (R+jX) I
    #
    # Let:
    #   A = R P_phase + X Q_phase
    #   B = X P_phase - R Q_phase
    # and y = Vr^2. Then:
    #   y^2 + (2A - Vs^2)y + (A^2+B^2) = 0
    a_v2 = R_PHASE_OHM * p_phase_w + X_PHASE_OHM * q_phase_var
    b_v2 = X_PHASE_OHM * p_phase_w - R_PHASE_OHM * q_phase_var
    c_v2 = vs_phase_v * vs_phase_v - 2.0 * a_v2
    discriminant_v4 = c_v2 * c_v2 - 4.0 * (a_v2 * a_v2 + b_v2 * b_v2)

    tol = 1e-9 * vs_phase_v**4
    if discriminant_v4 < -tol:
        raise ValueError(
            f"No real high-voltage solution for n={n} "
            f"(discriminant={discriminant_v4:.6e})"
        )
    discriminant_v4 = max(discriminant_v4, 0.0)

    vr_phase_sq_v2 = (c_v2 + math.sqrt(discriminant_v4)) / 2.0
    if vr_phase_sq_v2 <= 0.0:
        raise ValueError(f"Non-positive Vr^2 for n={n}")

    vr_phase_v = math.sqrt(vr_phase_sq_v2)
    vr_ll_v = math.sqrt(3.0) * vr_phase_v

    s_total_va = math.hypot(p_total_w, q_total_var)
    i_a = s_total_va / (math.sqrt(3.0) * vr_ll_v)

    p_loss_w = 3.0 * i_a * i_a * R_PHASE_OHM
    q_line_var = 3.0 * i_a * i_a * X_PHASE_OHM

    return {
        "train_count": float(n),
        "load_P_MW": p_total_w / 1e6,
        "load_Q_Mvar": q_total_var / 1e6,
        "receiving_voltage_kV": vr_ll_v / 1000.0,
        "voltage_drop_V": VS_LL_V - vr_ll_v,
        "line_current_A": i_a,
        "line_loss_kW": p_loss_w / 1000.0,
        "sending_P_MW": (p_total_w + p_loss_w) / 1e6,
        "sending_Q_Mvar": (q_total_var + q_line_var) / 1e6,
    }


def sweep() -> list[dict[str, float]]:
    return [calc_for_train_count(n) for n in range(N_MAX + 1)]


def write_csv(rows: Iterable[dict[str, float]], path: Path) -> None:
    rows = list(rows)
    fieldnames = list(rows[0].keys())
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            formatted = {}
            for key, value in row.items():
                if key == "train_count":
                    formatted[key] = str(int(value))
                else:
                    formatted[key] = f"{value:.6f}"
            writer.writerow(formatted)


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
    y_key: str,
    title: str,
    y_label: str,
) -> None:
    """Write a dependency-free SVG line graph."""
    width, height = 960, 540
    left, right, top, bottom = 92, 35, 54, 78
    plot_w = width - left - right
    plot_h = height - top - bottom

    xs = [r["train_count"] for r in rows]
    ys = [r[y_key] for r in rows]
    xmin, xmax = min(xs), max(xs)
    ymin, ymax = min(ys), max(ys)

    if math.isclose(ymin, ymax):
        pad = max(abs(ymin) * 0.05, 1.0)
        ymin -= pad
        ymax += pad
    else:
        pad = 0.08 * (ymax - ymin)
        ymin -= pad
        ymax += pad

    def sx(x: float) -> float:
        return left + (x - xmin) / (xmax - xmin) * plot_w if xmax != xmin else left

    def sy(y: float) -> float:
        return top + (ymax - y) / (ymax - ymin) * plot_h

    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="white"/>',
        f'<text x="{width/2:.1f}" y="30" text-anchor="middle" font-size="20" font-family="sans-serif">{_svg_escape(title)}</text>',
        f'<line x1="{left}" y1="{top+plot_h}" x2="{left+plot_w}" y2="{top+plot_h}" stroke="black"/>',
        f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top+plot_h}" stroke="black"/>',
    ]

    for n in range(int(xmin), int(xmax) + 1):
        xp = sx(float(n))
        parts += [
            f'<line x1="{xp:.2f}" y1="{top+plot_h}" x2="{xp:.2f}" y2="{top+plot_h+6}" stroke="black"/>',
            f'<text x="{xp:.2f}" y="{top+plot_h+24}" text-anchor="middle" font-size="12" font-family="sans-serif">{n}</text>',
        ]

    for i in range(6):
        yv = ymin + (ymax - ymin) * i / 5.0
        yp = sy(yv)
        parts += [
            f'<line x1="{left-6}" y1="{yp:.2f}" x2="{left}" y2="{yp:.2f}" stroke="black"/>',
            f'<text x="{left-10}" y="{yp+4:.2f}" text-anchor="end" font-size="12" font-family="sans-serif">{yv:.4g}</text>',
            f'<line x1="{left}" y1="{yp:.2f}" x2="{left+plot_w}" y2="{yp:.2f}" stroke="#dddddd" stroke-width="1"/>',
        ]

    parts += [
        f'<text x="{left+plot_w/2:.1f}" y="{height-24}" text-anchor="middle" font-size="14" font-family="sans-serif">simultaneous train count n</text>',
        f'<text x="23" y="{top+plot_h/2:.1f}" text-anchor="middle" font-size="14" font-family="sans-serif" transform="rotate(-90 23 {top+plot_h/2:.1f})">{_svg_escape(y_label)}</text>',
    ]

    points = " ".join(f"{sx(r['train_count']):.2f},{sy(r[y_key]):.2f}" for r in rows)
    parts.append(f'<polyline fill="none" stroke="#1f77b4" stroke-width="2.5" points="{points}"/>')

    for row in rows:
        x = sx(row["train_count"])
        y = sy(row[y_key])
        parts.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="4" fill="#1f77b4"/>')

    parts.append("</svg>")
    path.write_text("\n".join(parts) + "\n", encoding="utf-8")


def main() -> None:
    rows = sweep()

    write_csv(rows, OUT_DIR / "12_multiple_train_load_sweep.csv")
    write_svg(
        rows,
        OUT_DIR / "12_multiple_train_load_voltage.svg",
        "receiving_voltage_kV",
        "Topic 12: receiving-end voltage vs simultaneous train count",
        "receiving-end line voltage [kV]",
    )
    write_svg(
        rows,
        OUT_DIR / "12_multiple_train_load_loss.svg",
        "line_loss_kW",
        "Topic 12: three-phase line loss vs simultaneous train count",
        "three-phase line loss [kW]",
    )

    end = rows[-1]
    print(
        f"generated {len(rows)} points; n={int(end['train_count'])}: "
        f"Vr={end['receiving_voltage_kV']:.6f} kV, "
        f"I={end['line_current_A']:.6f} A, "
        f"Ploss={end['line_loss_kW']:.6f} kW"
    )


if __name__ == "__main__":
    main()
