# Power Color — Grade 3 relation-boundary authority audit

Checked: 2026-09-01

## Question being resolved
Before `pc3.relation.tone_difference` or named hue-difference classes are encoded, Power Color needs current authoritative evidence for the exact Grade 3 classification boundaries. The existing source contract prohibits inferring these boundaries from the appearance of the PCCS tone map or from secondary study sites.

## First-party evidence
Japan Color Research Institute's official 2022 business report documents a PCCS COLOR CALC extension for calculating 配色形式. The report states that, after RGB or Munsell input is converted, the software can show how selected colors relate and can extract PCCS 配色形式/配色技法.

Official source:
- https://www.jcri.jp/wp-content/uploads/2024/11/2022-jigyohokoku.pdf
- relevant section: (7) 配色ソフトの開発, report pages 5–6

The official sample output shown in that report contains concrete classifications among three input colors:
- hue 19 / tone `b`
- hue 17 / tone `lt`
- hue 16 / tone `lt`

The displayed pairwise results include:
- `類似色相配色`
- `隣接色相配色`
- `同一トーン配色`
- `類似トーン配色`

JCRI's current product page for PCCS Color Calc remains live and identifies the software as a JCRI-made PCCS conversion/aggregation product:
- https://www.jcri.jp/product/pccs_color_calc

JCRI's official color-slide product description independently lists `対照色相配色事例` and `同一・類似トーン配色事例`:
- https://www.jcri.jp/product/cd_rom_color_slide

JCRI's current PCCS seminar page also explicitly includes `色彩調和とPCCS配色形式` as an instructional unit, reinforcing that the relation/scheme framework remains current:
- https://www.jcri.jp/news/news-seminar-250508_2

## 2026-09-01 current Color Certification Association recheck
The current official Grade 3 sample page was rechecked directly:
- https://www.aft.or.jp/pages/feature/exam3

It explicitly tests the following named schemes in Grade 3:
- `同一トーン配色`
- `対照トーン配色`
- `同一色相配色`
- `中差色相配色`
- `明度のグラデーション`

The current official sample also states that the value-gradient answer is characterized by changing lightness stepwise. The page warns that displayed colors may differ depending on monitor environment, which remains consistent with the project's prohibition on treating arbitrary monitor RGB as exam-print ground truth.

The official Grade-level page was also rechecked:
- https://www.aft.or.jp/pages/feature/level

It continues to describe Grade 3 as learning PCCS theoretically and using it to create systematic color schemes. The Association's official-text page states that examination questions are based on official-text content and that the official text and examination colors are aligned:
- https://www.aft.or.jp/pages/official-product-orders/index.html

## Official Grade 3 text table-of-contents checkpoint
The current Association-hosted official Grade 3 text table of contents was opened directly from the Grade-level page and visually checked as a PDF:
- https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf

It fixes the current authoritative chapter locations for the remaining relation work:
- `色相を手がかりにした配色` starts at p.71.
- `色相に共通性がある配色` starts at p.72.
- `色相にやや違いがある配色` starts at p.78.
- `色相に対照性がある配色` starts at p.80.
- `トーンを手がかりにした配色` starts at p.84.
- `トーン共通の配色` starts at p.84.
- `トーン対照の配色` starts at p.88.
- `色相とトーンを組みあわせた配色` starts at p.90.
- `アクセントカラー`, `セパレーション`, and `グラデーション` are explicitly included at pp.92, 94, and 96.

This is useful narrowing evidence: the missing hue-class rules must be acquired from the official text's pp.72–83 range, and the missing tone-common/contrast rules from pp.84–89. The public TOC itself does not expose the tables or exact pair-membership rules, so it does not authorize encoding them.

## What this evidence establishes
It establishes:
- the named hue/tone relation classes are genuine first-party PCCS categories;
- JCRI has implemented deterministic classification logic for them;
- the current Grade 3 examination scope explicitly includes `対照トーン配色` and `中差色相配色`;
- the current official Grade 3 text dedicates specific sections to hue-common/slightly-different/contrast and tone-common/contrast schemes;
- the exact source-page acquisition target is now narrowed to pp.72–89 of the current official Grade 3 text;
- the current Grade 3 scope still expects PCCS-based systematic color-scheme discrimination;
- monitor-rendered colors are explicitly not guaranteed to reproduce examination colors exactly.

## What remains unavailable in located public first-party material
The current public Association/JCRI pages and public official-text TOC still do not expose:
- the complete numeric hue-difference boundary table for every named class;
- the complete tone-pair membership/boundary table, including the exact `対照トーン配色` rule;
- a complete current public table sufficient to derive all Grade 3 named relation answers without relying on the official text/card materials;
- current representative PCCS display values sufficient for monitor-facing drills.

The 2022 software sample rows and current public Grade 3 sample images are not sufficient to reverse-engineer all boundaries safely. Screenshot sampling, tone-map geometry, third-party study tables, and detailed-PCCS substitution remain prohibited.

## Decision
- Keep `pc3.relation.tone_difference` blocked for full implementation.
- Keep named hue-difference classification blocked for full implementation.
- Do not infer missing boundaries from common textbook rules, third-party sites, sample-image appearance, tone-map geometry, or the detailed-PCCS revision algorithm.
- Preserve the already verified numeric circular hue-difference drill because it depends only on the source-confirmed 24-position hue circle and arithmetic, not on named-class boundaries.
- Treat the generic public-web source route as exhausted for this checkpoint. The remaining authoritative acquisition target is the current official Grade 3 text at pp.72–89, equivalent official card/manual material, or current licensed PCCS Color Calc/related first-party output that explicitly exposes the complete boundaries or pair memberships.

This checkpoint narrows the blocker from a broad source search to exact official-text page ranges while preserving the no-inference gate.