# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-02

## Current first-party authority

Use the current Color Certification Association Grade 2 page:
`https://www.aft.or.jp/pages/feature/exam2`

Use the current official Grade 2 text table of contents for scope only:
`https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

Current JCRI first-party Munsell references:
- `https://www.jcri.jp/square/tool` — `Munsell Separation`, explicitly parses `H V/C`;
- `https://www.jcri.jp/product/hvc_color_training` — explicitly identifies H/V/C as hue/value/chroma;
- `https://www.jcri.jp/product/digital_color_manual` — current Munsell notation examples.

Current JAFCA first-party fashion-trend reference:
- `https://jafca.org/membership/` — explicitly confirms JAFCA Fashion Color trend information is issued twice per year with season-ahead updates.

Current Interior Industry Association first-party references:
- `https://www.interior.or.jp/ic/about_ic/` — current interior-coordinator role/workflow;
- `https://www.interior.or.jp/association/` — current association purpose and residential-interior scope.

## Runtime-promoted nonvisual skills

1. `pc2.foundation.official_sample_facts`
2. `pc2.scheme.triad_hue_positions`
3. `pc2.munsell.notation_components`
4. `pc2.scheme.natural_complex_harmony`
5. `pc2.scheme.dominant_color_tone`
6. `pc2.scheme.tone_on_tone`
7. `pc2.scheme.tone_in_tone`
8. `pc2.scheme.tonal`
9. `pc2.scheme.camaieu_faux_camaieu`
10. `pc2.scheme.bicolor_tricolor`
11. `pc2.scheme.hue_circle_division`
12. `pc2.image.image_scheme_keywords`
13. `pc2.media.rgb_cmyk_models`
14. `pc2.media.color_management_profiles`
15. `pc2.media.image_basics`
16. `pc2.fashion.basic_trend_color_classification`

All sixteen skills are runtime-promoted record-identically. Grade 2 runtime frontier is 192 verified / pending 0.

## Previously resolved slices

### `pc2.fashion.basic_trend_color_classification`
- current official Grade 2 TOC places `ファッションカラーの分類` at p.090;
- accepted secondary/first-party intersection explicitly fixes the narrow basic-color versus trend-color distinction;
- universal example-hue claims, current displayed trend-color judgments, fashion-photo appearance, RGB/HEX, sampled pixels and unstated style geometry are excluded;
- 12/12 independently verified and promoted record-identically; runtime 180 → 192.

### `pc2.media.rgb_cmyk_models`
- current official Grade 2 TOC confirms Media Design and specifically `画面や印刷における色表現` / `カラーマネジメントの基本`;
- current official Grade 2 sample explicitly confirms CMY as the subtractive-mixing primaries;
- current Adobe professional documentation fixes RGB additive-light/display and CMYK subtractive/process-print rules;
- exact RGB/HEX values, swatches, screenshots, image appearance and device-specific visual judgments are excluded;
- 12/12 independently verified and promoted record-identically.

### `pc2.media.color_management_profiles`
- current official Grade 2 TOC explicitly confirms `カラーマネジメントの基本`;
- current Adobe professional documentation explicitly fixes the retained text-only rules for ICC/color profiles, monitor/document profiles, profile-based translation, embedded-profile purpose, and Assign Profile versus Convert to Profile;
- RGB/HEX display values, swatches, monitor-facing identification, screenshots, calibration values, rendering-intent judgments and inferred geometry are excluded;
- 12/12 independently verified, A/B/C/D = 3/3/3/3, and promoted record-identically.

### `pc2.media.image_basics`
- current official Grade 2 text scope confirms `コンピュータにおける画像の基本` in Media Design;
- current Adobe professional documentation explicitly fixes raster as a pixel grid / resolution-dependent representation and vector as a mathematically defined representation based on points, lines, curves and shapes;
- image appearance judgments, RGB/HEX values, monitor-facing judgments, screenshots, sampled pixels, unstated geometry, device-specific resolution targets and compression-quality judgments are excluded;
- 12/12 independently verified, A/B/C/D = 3/3/3/3, and promoted record-identically; runtime 168 → 180.

## Current official-text source frontier

- Visual Design: scope-confirmed, but current public first-party material reviewed does not expose a sufficiently explicit nonvisual answer rule, so `pc2.visual.*` authoring remains blocked rather than inferred.
- Media Design: RGB/CMYK, color-management profiles, and computer-image basics are promoted.
- Fashion: `ファッションカラーの分類` narrow basic/trend slice is promoted. `ファッションの分類` p.091, `ファッションの配色` p.095, and `ファッションにおける配色の事例` p.096 are source-blocked after explicit audits because accepted public authority does not expose deterministic nonvisual mappings for those textbook sections.
- Interior: `インテリア概念の成立` p.104 is source-blocked. Current Interior Industry Association first-party material defines modern professional roles/workflow but does not establish the official-text historical/conceptual propositions. The next source-acquisition frontier is `インテリア色彩の考え方` p.105, followed by `インテリア空間の分類とゾーニング` p.105.
- Remaining later topics include interior coordination/element color composition/style, landscape color coordination, conventional color names, and the PCCS tone-by-value appendix.

The TOC establishes scope and search order only. Do not generate a micro-skill from a TOC label unless the answer rule is explicit in acceptable authority.

## Current blocker audits

- `docs/power-color/audits/2026-09-02-grade2-visual-media-source-audit.md`
- `docs/power-color/audits/2026-09-02-grade2-fashion-classification-source-audit.md`
- `docs/power-color/audits/2026-09-02-grade2-fashion-coordination-source-audit.md`
- `docs/power-color/audits/2026-09-02-grade2-fashion-examples-source-audit.md`
- `docs/power-color/audits/2026-09-02-grade2-interior-concept-source-audit.md`

## Removed / blocked routes

- Do not recreate `pc2.image.color_image_rules` without current explicit first-party authority.
- Do not reconstruct official image choices from pixels or screenshots.
- Do not infer monitor-facing colors without approved display references.
- Do not broaden any resolved scheme beyond its independently corroborated text-only intersection.
- Do not author Visual Design terminology from scope labels alone; acquire an explicit auditable rule first.
- Do not turn example fashion hues into universal basic/trend classifications.
- Do not convert generic fashion area-ratio advice or outfit styling tips into Grade 2 p.095 facts.
- Do not reconstruct p.096 fashion examples from images, remembered textbook content, RGB/HEX or sampled pixels.
- Do not substitute modern interior-coordinator role descriptions for the textbook's p.104 historical/conceptual propositions.
- The stale incomplete `power-color-grade2-tonal-promotion` branch is not authority.

## Exact next order

1. Grade 2 runtime frontier is 192 verified / pending 0 across sixteen promoted skills.
2. Keep Visual Design, Fashion p.091/p.095/p.096, and Interior p.104 source-blocked unless future explicit auditable deterministic authority is acquired.
3. Continue source acquisition at `インテリア色彩の考え方` p.105, then `インテリア空間の分類とゾーニング` p.105.
4. Author only after fixing an explicit nonvisual answer rule; then use pending-first → independent QA → schema/full-fingerprint/coverage/answer-position/shared-renderer gates → record-identical promotion.
5. Keep all Grade 3 source/display gates unchanged.
