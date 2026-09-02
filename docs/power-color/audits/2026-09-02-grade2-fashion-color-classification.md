# Grade 2 fashion-color classification source audit

Checked: 2026-09-02

## Scope authority

Current Color Certification Association Grade 2 official-text TOC places `ファッションの色彩と配色` immediately after Media Design and lists `ファッションカラーの分類` first at p.090:

- https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf

The current official Grade 2 sample page also states that Grade 2 tests the fundamentals of color coordination in fields including fashion:

- https://www.aft.or.jp/pages/feature/exam2

These first-party sources establish current Grade 2 scope/order, but the public TOC does not itself expose the detailed definitions used inside `ファッションカラーの分類`.

## Explicit nonvisual rule evidence

Auditable specialist secondary evidence:

- Plus Colors, `ファッションカラーとスタイル＆イメージ`
  - https://pluscolors.net/color_knowledge/color_style_image/
  - article supervision: a Color Certification Grade 1 color coordinator;
  - cites the 2020-revised Color Certification official text as a reference;
  - explicitly defines `ベーシックカラー` as standard colors repeatedly used regardless of fashion trends;
  - explicitly states that `トレンドカラー` changes with era/season and that JAFCA publishes trend-color information.

Current first-party corroboration from the Japan Fashion Color Association (JAFCA):

- https://jafca.org/membership/
  - explicitly provides `JAFCAファッションカラー` trend-color information twice per year;
  - publishes a first速報 about 1.5 years before the actual season, a full palette later, and an update about half a year before the actual season.

A current fashion-education curriculum independently places `ベーシックカラー` and `トレンドカラー` together in fashion-industry color planning:

- Bunka Fashion College 2024 curriculum overview
  - https://www.bunka-fc.ac.jp/_wp/wp-content/themes/bunka/doc/2-3-13.pdf
  - lists both `ベーシックカラー` and `トレンドカラー` under design color planning.

## Accepted rule boundary

The next safe nonvisual micro-skill may use only this intersection:

1. `ベーシックカラー`: a repeatedly used standard-color category that is not defined by the current fashion trend.
2. `トレンドカラー`: a fashion color-trend category whose content changes with era/season.
3. JAFCA publishes fashion trend-color information; this fact may be used only as institutional/context knowledge, not as authority for any particular displayed color.

Working skill ID: `pc2.fashion.basic_trend_color_classification`.

## Explicit exclusions

Do not generate answers from:

- the appearance of fashion photographs, swatches, screenshots or sample outfits;
- RGB/HEX values or sampled pixels;
- a claim that a specific hue is always a basic color, because the specialist source explicitly notes that practical basic-color sets vary by industry/field;
- a claim that a particular current color is a trend color unless a separate current auditable source is fixed for that exact proposition;
- unstated style/image geometry or visual impression;
- monitor-facing color identification.

## Decision

`ファッションカラーの分類` is source-resolved only for the narrow text-only basic-color versus trend-color classification above. Broader fashion-style/image/color judgments remain unresolved until separately sourced.

## Exact next start point

Create `pc2.fashion.basic_trend_color_classification` pending-first authoring from the fixed three-rule boundary above, then independently re-solve every record before any verification or runtime promotion.
