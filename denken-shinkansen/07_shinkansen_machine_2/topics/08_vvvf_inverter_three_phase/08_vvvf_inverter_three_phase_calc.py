from __future__ import annotations

import cmath
import math
from dataclasses import dataclass
from pathlib import Path
from typing import Sequence


@dataclass(frozen=True)
class InverterParams:
    dc_link_v: float = 600.0
    modulation_index: float = 0.90
    fundamental_hz: float = 50.0
    carrier_hz: float = 1500.0
    samples_per_fundamental: int = 4096

    @property
    def duration_s(self) -> float:
        return 1.0 / self.fundamental_hz

    @property
    def sample_rate_hz(self) -> float:
        return self.samples_per_fundamental * self.fundamental_hz

    @property
    def carrier_ratio(self) -> float:
        return self.carrier_hz / self.fundamental_hz


PARAMS = InverterParams()


def triangle_unit(phase_cycles: float) -> float:
    """Symmetric triangular carrier in [-1, +1], period 1 cycle."""
    x = phase_cycles % 1.0
    return 1.0 - 4.0 * abs(x - 0.5)


def radix2_fft(values: Sequence[complex]) -> list[complex]:
    """In-place style radix-2 FFT implemented with the Python standard library."""
    n = len(values)
    if n == 0 or n & (n - 1):
        raise ValueError("FFT length must be a non-zero power of two")

    out = [complex(v) for v in values]
    j = 0
    for i in range(1, n):
        bit = n >> 1
        while j & bit:
            j ^= bit
            bit >>= 1
        j ^= bit
        if i < j:
            out[i], out[j] = out[j], out[i]

    length = 2
    while length <= n:
        wlen = cmath.exp(-2j * math.pi / length)
        half = length // 2
        for start in range(0, n, length):
            w = 1.0 + 0.0j
            for offset in range(half):
                u = out[start + offset]
                v = out[start + offset + half] * w
                out[start + offset] = u + v
                out[start + offset + half] = u - v
                w *= wlen
        length <<= 1
    return out


def rms_harmonic(fft_values: Sequence[complex], harmonic: int) -> float:
    n = len(fft_values)
    if harmonic <= 0 or harmonic >= n // 2:
        raise ValueError("harmonic must be in the positive single-sided FFT range")
    return math.sqrt(2.0) * abs(fft_values[harmonic]) / n


def simulate(params: InverterParams = PARAMS) -> dict[str, list[float]]:
    n = params.samples_per_fundamental
    dt = 1.0 / params.sample_rate_hz
    ed = params.dc_link_v
    k = params.modulation_index
    f1 = params.fundamental_hz
    fc = params.carrier_hz

    t: list[float] = []
    carrier: list[float] = []
    ref_u: list[float] = []
    ref_v: list[float] = []
    ref_w: list[float] = []
    sw_u: list[float] = []
    sw_v: list[float] = []
    sw_w: list[float] = []
    vu: list[float] = []
    vv: list[float] = []
    vw: list[float] = []
    vuv: list[float] = []
    vvw: list[float] = []
    vwu: list[float] = []

    for i in range(n):
        ti = i * dt
        theta = 2.0 * math.pi * f1 * ti
        c = triangle_unit(fc * ti)
        ru = k * math.sin(theta)
        rv = k * math.sin(theta - 2.0 * math.pi / 3.0)
        rw = k * math.sin(theta + 2.0 * math.pi / 3.0)
        su = 1.0 if ru >= c else -1.0
        sv = 1.0 if rv >= c else -1.0
        sw = 1.0 if rw >= c else -1.0
        u = 0.5 * ed * su
        v = 0.5 * ed * sv
        w = 0.5 * ed * sw

        t.append(ti)
        carrier.append(c)
        ref_u.append(ru)
        ref_v.append(rv)
        ref_w.append(rw)
        sw_u.append(su)
        sw_v.append(sv)
        sw_w.append(sw)
        vu.append(u)
        vv.append(v)
        vw.append(w)
        vuv.append(u - v)
        vvw.append(v - w)
        vwu.append(w - u)

    return {
        "t": t,
        "carrier": carrier,
        "ref_u": ref_u,
        "ref_v": ref_v,
        "ref_w": ref_w,
        "sw_u": sw_u,
        "sw_v": sw_v,
        "sw_w": sw_w,
        "vu": vu,
        "vv": vv,
        "vw": vw,
        "vuv": vuv,
        "vvw": vvw,
        "vwu": vwu,
    }


def reconstruct_harmonic(fft_values: Sequence[complex], harmonic: int) -> list[float]:
    n = len(fft_values)
    xh = fft_values[harmonic]
    return [(2.0 / n) * (xh * cmath.exp(2j * math.pi * harmonic * i / n)).real for i in range(n)]


def _polyline_points(xs: Sequence[float], ys: Sequence[float], sx, sy, max_points: int = 180) -> str:
    step = max(1, (len(xs) + max_points - 1) // max_points)
    return " ".join(f"{sx(xs[i]):.2f},{sy(ys[i]):.2f}" for i in range(0, len(xs), step))


def write_waveform_svg(
    path: Path,
    *,
    title: str,
    subtitle: str,
    x: Sequence[float],
    series: Sequence[tuple[str, Sequence[float], str]],
    y_min: float,
    y_max: float,
    x_label: str,
    y_label: str,
) -> None:
    width, height = 1100, 620
    left, right, top, bottom = 92, 35, 82, 76
    pw, ph = width - left - right, height - top - bottom
    x0, x1 = min(x), max(x)

    def sx(value: float) -> float:
        return left + (value - x0) / (x1 - x0) * pw

    def sy(value: float) -> float:
        return top + (y_max - value) / (y_max - y_min) * ph

    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="white"/>',
        f'<text x="{width/2:.0f}" y="32" text-anchor="middle" font-family="sans-serif" font-size="24">{title}</text>',
        f'<text x="{width/2:.0f}" y="56" text-anchor="middle" font-family="sans-serif" font-size="13">{subtitle}</text>',
    ]

    for i in range(7):
        xv = x0 + (x1 - x0) * i / 6.0
        xx = sx(xv)
        parts.append(f'<line x1="{xx:.1f}" y1="{top}" x2="{xx:.1f}" y2="{top+ph}" stroke="#e5e7eb"/>')
        parts.append(f'<text x="{xx:.1f}" y="{top+ph+24}" text-anchor="middle" font-family="sans-serif" font-size="13">{xv:.2f}</text>')
    for i in range(7):
        yv = y_min + (y_max - y_min) * i / 6.0
        yy = sy(yv)
        parts.append(f'<line x1="{left}" y1="{yy:.1f}" x2="{left+pw}" y2="{yy:.1f}" stroke="#e5e7eb"/>')
        parts.append(f'<text x="{left-10}" y="{yy+5:.1f}" text-anchor="end" font-family="sans-serif" font-size="13">{yv:.1f}</text>')

    parts.append(f'<rect x="{left}" y="{top}" width="{pw}" height="{ph}" fill="none" stroke="#111827" stroke-width="1.2"/>')
    for idx, (label, y, color) in enumerate(series):
        points = _polyline_points(x, y, sx, sy)
        parts.append(f'<polyline points="{points}" fill="none" stroke="{color}" stroke-width="2"/>')
        lx, ly = left + 18 + idx * 220, top + 20
        parts.append(f'<line x1="{lx}" y1="{ly}" x2="{lx+30}" y2="{ly}" stroke="{color}" stroke-width="3"/>')
        parts.append(f'<text x="{lx+38}" y="{ly+5}" font-family="sans-serif" font-size="13">{label}</text>')

    parts.extend([
        f'<text x="{left+pw/2:.1f}" y="{height-20}" text-anchor="middle" font-family="sans-serif" font-size="16">{x_label}</text>',
        f'<text x="25" y="{top+ph/2:.1f}" transform="rotate(-90 25 {top+ph/2:.1f})" text-anchor="middle" font-family="sans-serif" font-size="16">{y_label}</text>',
        '</svg>',
    ])
    path.write_text("\n".join(parts), encoding="utf-8")


def write_switching_svg(path: Path, data: dict[str, list[float]], params: InverterParams = PARAMS) -> None:
    # First 4 ms: enough to see carrier comparison and all three gate states.
    limit_s = 0.004
    count = next((i for i, ti in enumerate(data["t"]) if ti >= limit_s), len(data["t"]))
    x_ms = [1000.0 * ti for ti in data["t"][:count]]
    c = data["carrier"][:count]
    ru = data["ref_u"][:count]
    su = [1.45 + 0.22 * x for x in data["sw_u"][:count]]
    sv = [2.05 + 0.22 * x for x in data["sw_v"][:count]]
    sw = [2.65 + 0.22 * x for x in data["sw_w"][:count]]
    write_waveform_svg(
        path,
        title="Sinusoidal PWM switching waveforms",
        subtitle=(
            f"assumed teaching values: Ed={params.dc_link_v:.0f} V, k={params.modulation_index:.2f}, "
            f"f1={params.fundamental_hz:.0f} Hz, fc={params.carrier_hz/1000:.1f} kHz"
        ),
        x=x_ms,
        series=[
            ("carrier", c, "#6b7280"),
            ("U reference", ru, "#2563eb"),
            ("U switch", su, "#dc2626"),
            ("V switch", sv, "#16a34a"),
            ("W switch", sw, "#9333ea"),
        ],
        y_min=-1.1,
        y_max=3.1,
        x_label="time [ms]",
        y_label="normalized value / shifted switch state",
    )


def write_spectrum_svg(
    path: Path,
    line_fft: Sequence[complex],
    params: InverterParams = PARAMS,
    max_harmonic: int = 60,
) -> None:
    harmonics = list(range(1, max_harmonic + 1))
    rms_values = [rms_harmonic(line_fft, h) for h in harmonics]
    fundamental = rms_values[0]
    pct = [100.0 * v / fundamental for v in rms_values]

    width, height = 1100, 620
    left, right, top, bottom = 92, 35, 82, 76
    pw, ph = width - left - right, height - top - bottom
    y_max = max(105.0, max(pct) * 1.08)

    def sx(h: int) -> float:
        return left + (h - 0.5) / max_harmonic * pw

    def sy(value: float) -> float:
        return top + (1.0 - value / y_max) * ph

    bar_w = max(2.0, pw / max_harmonic * 0.64)
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="white"/>',
        f'<text x="{width/2:.0f}" y="32" text-anchor="middle" font-family="sans-serif" font-size="24">Line-voltage FFT / harmonic components</text>',
        f'<text x="{width/2:.0f}" y="56" text-anchor="middle" font-family="sans-serif" font-size="13">one 50 Hz period; fc/f1={params.carrier_ratio:.0f}; magnitude normalized to fundamental RMS</text>',
    ]
    for yv in [0, 20, 40, 60, 80, 100]:
        yy = sy(yv)
        parts.append(f'<line x1="{left}" y1="{yy:.1f}" x2="{left+pw}" y2="{yy:.1f}" stroke="#e5e7eb"/>')
        parts.append(f'<text x="{left-10}" y="{yy+5:.1f}" text-anchor="end" font-family="sans-serif" font-size="13">{yv}</text>')
    for h, value in zip(harmonics, pct):
        x = sx(h)
        y = sy(value)
        color = "#2563eb" if h == 1 else ("#dc2626" if h % 3 == 0 else "#6b7280")
        parts.append(f'<rect x="{x-bar_w/2:.2f}" y="{y:.2f}" width="{bar_w:.2f}" height="{top+ph-y:.2f}" fill="{color}"/>')
    for h in [1, 10, 20, 30, 40, 50, 60]:
        x = sx(h)
        parts.append(f'<text x="{x:.1f}" y="{top+ph+24}" text-anchor="middle" font-family="sans-serif" font-size="13">{h}</text>')
    parts.extend([
        f'<rect x="{left}" y="{top}" width="{pw}" height="{ph}" fill="none" stroke="#111827" stroke-width="1.2"/>',
        f'<text x="{left+pw/2:.1f}" y="{height-20}" text-anchor="middle" font-family="sans-serif" font-size="16">harmonic order n (n x {params.fundamental_hz:.0f} Hz)</text>',
        f'<text x="25" y="{top+ph/2:.1f}" transform="rotate(-90 25 {top+ph/2:.1f})" text-anchor="middle" font-family="sans-serif" font-size="16">RMS / fundamental [%]</text>',
        f'<text x="{left+18}" y="{top+20}" font-family="sans-serif" font-size="13">blue: fundamental; red: triplen orders; gray: other harmonics</text>',
        '</svg>',
    ])
    path.write_text("\n".join(parts), encoding="utf-8")


def run_checks(data: dict[str, list[float]], params: InverterParams = PARAMS) -> dict[str, float]:
    n = params.samples_per_fundamental
    if n & (n - 1):
        raise AssertionError("sample count must be a power of two")
    if not math.isclose(params.carrier_ratio, round(params.carrier_ratio), abs_tol=1e-12):
        raise AssertionError("carrier/fundamental ratio must be integral for leakage-free one-period FFT")

    assert set(data["sw_u"]) <= {-1.0, 1.0}
    assert set(data["sw_v"]) <= {-1.0, 1.0}
    assert set(data["sw_w"]) <= {-1.0, 1.0}
    expected_phase = {-params.dc_link_v / 2.0, params.dc_link_v / 2.0}
    expected_line = {-params.dc_link_v, 0.0, params.dc_link_v}
    assert set(data["vu"]) <= expected_phase
    assert set(data["vv"]) <= expected_phase
    assert set(data["vw"]) <= expected_phase
    assert set(data["vuv"]) <= expected_line
    assert set(data["vvw"]) <= expected_line
    assert set(data["vwu"]) <= expected_line
    assert all(math.isclose(a - b, c, abs_tol=1e-12) for a, b, c in zip(data["vu"], data["vv"], data["vuv"]))

    phase_fft = radix2_fft(data["vu"])
    line_fft = radix2_fft(data["vuv"])
    v1_phase_rms = rms_harmonic(phase_fft, 1)
    v1_line_rms = rms_harmonic(line_fft, 1)
    v1_phase_theory = params.modulation_index * params.dc_link_v / (2.0 * math.sqrt(2.0))
    v1_line_theory = math.sqrt(3.0) * v1_phase_theory
    fundamental_error_pct = 100.0 * abs(v1_line_rms - v1_line_theory) / v1_line_theory

    # With synchronized natural-sampled SPWM, finite-sample comparison should remain close to the linear-range formula.
    assert fundamental_error_pct < 1.0
    assert abs(v1_line_rms / v1_phase_rms - math.sqrt(3.0)) < 0.02

    triplen_pct = {}
    for h in (3, 6, 9):
        value = 100.0 * rms_harmonic(line_fft, h) / v1_line_rms
        triplen_pct[h] = value
        assert value < 0.5

    # In three-phase line voltage, common carrier components cancel strongly;
    # the dominant first carrier-group sidebands appear here at h=28 and h=32.
    h28 = 100.0 * rms_harmonic(line_fft, 28) / v1_line_rms
    h32 = 100.0 * rms_harmonic(line_fft, 32) / v1_line_rms
    assert max(h28, h32) > 10.0

    print(f"sample rate = {params.sample_rate_hz:.1f} Hz, carrier ratio = {params.carrier_ratio:.0f}")
    print(f"phase fundamental RMS: FFT={v1_phase_rms:.3f} V, theory={v1_phase_theory:.3f} V")
    print(f"line fundamental RMS:  FFT={v1_line_rms:.3f} V, theory={v1_line_theory:.3f} V")
    print(f"fundamental error = {fundamental_error_pct:.3f} %")
    print("triplen line-voltage harmonics (% of fundamental): " + ", ".join(f"h{h}={triplen_pct[h]:.4f}%" for h in (3, 6, 9)))
    print(f"carrier-group sidebands: h28={h28:.2f}%, h32={h32:.2f}%")

    return {
        "phase_fundamental_rms": v1_phase_rms,
        "phase_theory_rms": v1_phase_theory,
        "line_fundamental_rms": v1_line_rms,
        "line_theory_rms": v1_line_theory,
        "fundamental_error_pct": fundamental_error_pct,
        "h3_pct": triplen_pct[3],
        "h6_pct": triplen_pct[6],
        "h9_pct": triplen_pct[9],
        "h28_pct": h28,
        "h32_pct": h32,
    }


def generate_outputs(outdir: Path, data: dict[str, list[float]], params: InverterParams = PARAMS) -> None:
    t_ms = [1000.0 * ti for ti in data["t"]]
    line_fft = radix2_fft(data["vuv"])
    fundamental = reconstruct_harmonic(line_fft, 1)

    write_switching_svg(outdir / "08_switching_waveforms.svg", data, params)

    write_waveform_svg(
        outdir / "08_phase_voltage_waveforms.svg",
        title="Three-phase pole voltages",
        subtitle=f"two-level pole voltages: +/-Ed/2 = +/-{params.dc_link_v/2:.0f} V (teaching assumptions)",
        x=t_ms,
        series=[
            ("v_uO", data["vu"], "#2563eb"),
            ("v_vO", data["vv"], "#dc2626"),
            ("v_wO", data["vw"], "#16a34a"),
        ],
        y_min=-0.60 * params.dc_link_v,
        y_max=0.60 * params.dc_link_v,
        x_label="time [ms]",
        y_label="pole voltage [V]",
    )

    write_waveform_svg(
        outdir / "08_line_voltage_waveforms.svg",
        title="Three-phase line voltages",
        subtitle="v_uv=v_uO-v_vO; line voltage takes 0 and +/-Ed",
        x=t_ms,
        series=[
            ("v_uv", data["vuv"], "#2563eb"),
            ("v_vw", data["vvw"], "#dc2626"),
            ("v_wu", data["vwu"], "#16a34a"),
        ],
        y_min=-1.15 * params.dc_link_v,
        y_max=1.15 * params.dc_link_v,
        x_label="time [ms]",
        y_label="line voltage [V]",
    )

    write_waveform_svg(
        outdir / "08_fundamental_waveform.svg",
        title="PWM line voltage and extracted fundamental",
        subtitle="fundamental reconstructed from FFT bin n=1 over exactly one 50 Hz period",
        x=t_ms,
        series=[
            ("v_uv PWM", data["vuv"], "#9ca3af"),
            ("fundamental", fundamental, "#2563eb"),
        ],
        y_min=-1.15 * params.dc_link_v,
        y_max=1.15 * params.dc_link_v,
        x_label="time [ms]",
        y_label="voltage [V]",
    )

    write_spectrum_svg(outdir / "08_fft_harmonics.svg", line_fft, params)


def main() -> None:
    outdir = Path(__file__).resolve().parent
    data = simulate(PARAMS)
    run_checks(data, PARAMS)
    generate_outputs(outdir, data, PARAMS)
    print("Generated 5 SPEC-defined PWM / voltage / fundamental / FFT SVG outputs.")


if __name__ == "__main__":
    main()
