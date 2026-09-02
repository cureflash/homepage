# Power Color — Grade 2 execution plan

Checked: 2026-09-02

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

When public first-party material confirms Grade 2 scope but does not expose the detailed nonvisual rule, an auditable professional secondary source may be used only when the rule is explicit and independently corroborated. Secondary sources never authorize monitor RGB/HEX or image-derived answers.

Rules:
1. Use only facts that can be independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## Current runtime frontier

Grade 2 runtime is 192 verified / pending 0 across sixteen promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Completed Grade 2 checkpoints

- [x] `pc2.foundation.official_sample_facts`: 12 verified and promoted.
- [x] `pc2.scheme.triad_hue_positions`: 12 verified and promoted.
- [x] `pc2.munsell.notation_components`: 12 verified and promoted.
- [x] `pc2.scheme.natural_complex_harmony`: 12 verified and promoted.
- [x] `pc2.scheme.dominant_color_tone`: 12 verified and promoted.
- [x] `pc2.scheme.tone_on_tone`: 12 verified and promoted.
- [x] `pc2.scheme.tone_in_tone`: 12 verified and promoted.
- [x] `pc2.scheme.tonal`: 12 verified and promoted.
- [x] `pc2.scheme.camaieu_faux_camaieu`: 12 verified and promoted.
- [x] `pc2.scheme.bicolor_tricolor`: 12 verified and promoted; runtime 108 → 120.
- [x] `pc2.scheme.hue_circle_division`: 12 verified and promoted; runtime 120 → 132.
- [x] `pc2.image.image_scheme_keywords`: 12 verified and promoted; runtime 132 → 144.
- [x] `pc2.media.rgb_cmyk_models`: 12 verified and promoted; runtime 144 → 156.
- [x] `pc2.media.color_management_profiles`: 12 verified and promoted; runtime 156 → 168.
- [x] `pc2.media.image_basics`: 12 verified and promoted; runtime 168 → 180.
- [x] `pc2.fashion.basic_trend_color_classification`: 12 verified and promoted; runtime 180 → 192.
- [x] Runtime exact-equality/full-fingerprint/shared-engine gates cover all sixteen promoted skills.

## Visual Design

- [x] Current official Grade 2 TOC confirms `ビジュアルデザインの色彩` follows image-based schemes and contains `ビジュアルデザインとは` / `ビジュアルデザインと色彩`.
- [x] Audit current public first-party material for an explicit text-only answer rule.
- [ ] Authoring remains blocked: the reviewed public first-party material exposes scope labels but not a sufficiently explicit nonvisual judgment rule. Do not infer from figures, screenshots, image appearance, RGB/HEX or unstated geometry.
- [x] Record the blocker in `docs/power-color/audits/2026-09-02-grade2-visual-media-source-audit.md` and continue to the next official-text topic rather than repeating the same unresolved route.

## Media Design — RGB / CMYK text-only slice

- [x] Current official Grade 2 TOC explicitly lists `メディアデザインの色彩`, including `画面や印刷における色表現` and `カラーマネジメントの基本`.
- [x] Current official Grade 2 sample confirms CMY as the subtractive-mixing primaries.
- [x] Current Adobe professional documentation explicitly corroborates RGB = additive red/green/blue light used for displays, full-intensity RGB = white, and CMYK = subtractive cyan/magenta/yellow plus black for process printing.
- [x] Fix `pc2.media.rgb_cmyk_models` to those explicit text-only rules only; exclude exact RGB/HEX values, swatches, image appearance, screenshot sampling and device-specific visual judgments.
- [x] Generate pending-first 12 text-choice questions and independently re-derive every answer before accepting proposed answers.
- [x] 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Promote record-identically to runtime 144 → 156 with exact-equality/full-fingerprint/shared-engine gates.

## Media Design — color-management profiles text-only slice

- [x] Current official Grade 2 TOC explicitly lists `カラーマネジメントの基本` at p.086.
- [x] Current Adobe professional documentation explicitly fixes the retained nonvisual rules for ICC/color profiles, monitor/document profiles, profile-based device translation, embedded-profile purpose, and Assign Profile versus Convert to Profile.
- [x] Exclude RGB/HEX display values, swatches, monitor-facing color identification, screenshots, calibration values, rendering-intent judgments and inferred diagram geometry.
- [x] Generate pending-first 12 text-choice questions and independently re-derive every answer before accepting proposed answers.
- [x] 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Promote record-identically to runtime 156 → 168 with exact-equality/full-fingerprint/shared-engine gates.

## Media Design — computer image basics text-only slice

- [x] Current official Grade 2 text scope places `コンピュータにおける画像の基本` next in Media Design.
- [x] Current Adobe professional documentation explicitly fixes the retained nonvisual rules: raster = pixel grid and resolution-dependent; raster enlargement can lose detail; vector = mathematically defined points/lines/curves/shapes and scales with crisp edges; photographs are a standard raster use case; logos/technical illustrations are standard vector use cases.
- [x] Exclude image appearance judgments, RGB/HEX values, monitor-facing judgments, screenshots, sampled pixels, unstated geometry, device-specific resolution targets and compression-quality judgments.
- [x] Generate pending-first 12 text-choice questions and independently re-derive every answer before accepting proposed answers.
- [x] 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Promote record-identically to runtime 168 → 180 and extend exact-equality/full-fingerprint/shared-engine gates.

## Fashion — basic/trend color classification text-only slice

- [x] Current official Grade 2 TOC places `ファッションカラーの分類` immediately after Media Design at p.090.
- [x] Current Grade 2 official sample page confirms fashion color coordination is within the tested professional-application scope.
- [x] Auditable specialist secondary material referencing the 2020-revised official text explicitly defines basic colors as repeatedly used standard colors independent of fashion trends and trend colors as varying with era/season.
- [x] Current JAFCA first-party material independently confirms publication of fashion trend-color information.
- [x] Fix the accepted rule boundary in `docs/power-color/audits/2026-09-02-grade2-fashion-color-classification.md`; exclude universal claims about example hues, current displayed trend-color judgments, fashion-photo appearance, RGB/HEX, sampled pixels and unstated style geometry.
- [x] Create `pc2.fashion.basic_trend_color_classification` as a pending-first 12-question text-choice batch and independently re-solve every record.
- [x] 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Run the dedicated schema/full-fingerprint/answer-position/shared-renderer authoring gate; PR #520 passed Power Color CI and merged to main.
- [x] Promote the 12 verified records record-identically to runtime 180 → 192.
- [x] Change the dedicated gate to exact runtime equality and extend full-fingerprint/coverage/shared Power TOEIC engine gates to all sixteen promoted skills.

## Fashion — blocked remainder

- [x] `ファッションの分類` p.091: scope/order confirmed, but no sufficiently explicit auditable deterministic category mapping was exposed. Audit: `docs/power-color/audits/2026-09-02-grade2-fashion-classification-source-audit.md`.
- [x] `ファッションの配色` p.095: scope/order confirmed, but reviewed public accepted authority does not expose the specific deterministic p.095 rule set. Generic fashion advice, area-ratio heuristics, example hues and visual styling are not adequate substitutes. Audit: `docs/power-color/audits/2026-09-02-grade2-fashion-coordination-source-audit.md`.
- [x] `ファッションにおける配色の事例` p.096: scope/order confirmed, but the public example set and exact example-to-rule mapping are not exposed. Do not reconstruct from photographs, screenshots, RGB/HEX, sampled pixels, remembered textbook examples or unstated geometry. Audit: `docs/power-color/audits/2026-09-02-grade2-fashion-examples-source-audit.md`.
- [ ] These topics remain authoring-blocked unless future explicit auditable authority is acquired.

## Interior — concept establishment p.104 source audit

- [x] Current official Grade 2 TOC places `インテリア概念の成立` at p.104 and the p.105 color/zoning topics immediately after it.
- [x] Current Interior Industry Association first-party material was reviewed. It explicitly describes modern interior-coordinator roles and workflow, but does not establish the Grade 2 textbook's historical/conceptual p.104 propositions.
- [x] Record blocker in `docs/power-color/audits/2026-09-02-grade2-interior-concept-source-audit.md` rather than importing modern professional descriptions as textbook history.
- [ ] p.104 authoring remains blocked unless a future explicit auditable rule source is acquired.

## Exact next start point

Continue current official Grade 2 text order at `インテリア色彩の考え方` p.105, then `インテリア空間の分類とゾーニング` p.105. Acquire an explicit auditable nonvisual answer rule before authoring. Keep Visual Design, Fashion p.091/p.095/p.096, and `インテリア概念の成立` p.104 source-blocked, and keep all Grade 3 source/display gates unchanged.
