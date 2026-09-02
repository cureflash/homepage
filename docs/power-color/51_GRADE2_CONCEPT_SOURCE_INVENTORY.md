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

## Source-resolved nonvisual skills

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
15. `pc2.media.image_basics` — source-resolved and independently verified in authoring; runtime promotion pending.

The first fourteen skills are runtime-promoted record-identically. Grade 2 runtime frontier is 168 verified / pending 0.

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
- 12/12 independently verified, A/B/C/D = 3/3/3/3, and promoted record-identically;
- audit: `docs/power-color/audits/2026-09-02-grade2-media-color-management.md`.

### `pc2.media.image_basics`
- current official Grade 2 text scope confirms `コンピュータにおける画像の基本` in Media Design;
- current Adobe professional documentation explicitly fixes raster as a pixel grid / resolution-dependent representation and vector as a mathematically defined representation based on points, lines, curves and shapes;
- Adobe explicitly states raster enlargement can lose detail while vector scaling can retain crisp edges, and gives photographs as a raster use case and logos/technical illustrations as vector use cases;
- image appearance judgments, RGB/HEX values, monitor-facing judgments, screenshots, sampled pixels, unstated geometry, device-specific resolution targets and compression-quality judgments are excluded;
- 12/12 independently verified, A/B/C/D = 3/3/3/3; runtime promotion pending;
- audit: `docs/power-color/audits/2026-09-02-grade2-image-basics.md`.

## Current official-text scope inventory

The current official Grade 2 TOC frontier is inside the Visual / Media block:
- Visual Design: scope-confirmed, but current public first-party material reviewed does not expose a sufficiently explicit nonvisual answer rule, so `pc2.visual.*` authoring remains blocked rather than inferred.
- Media Design: RGB/CMYK and color-management profile slices are promoted; computer-image basics is source-resolved and independently verified in authoring.
- Remaining later topics include fashion, interior and landscape color coordination, conventional color names, and the PCCS tone-by-value appendix.

The TOC establishes scope and search order only. Do not generate a micro-skill from a TOC label unless the answer rule is explicit in acceptable authority.

## Removed / blocked routes

- Do not recreate `pc2.image.color_image_rules` without current explicit first-party authority.
- Do not reconstruct official image choices from pixels or screenshots.
- Do not infer monitor-facing colors without approved display references.
- Do not broaden any resolved scheme beyond its independently corroborated text-only intersection.
- Do not author Visual Design terminology from scope labels alone; acquire an explicit auditable rule first.
- The stale incomplete `power-color-grade2-tonal-promotion` branch is not authority.

## Exact next order

1. Grade 2 runtime frontier is 168 verified / pending 0 across fourteen promoted skills.
2. Promote the independently verified `pc2.media.image_basics` 12-question batch record-identically to runtime 180.
3. Extend exact-equality/full-fingerprint/coverage/shared-engine gates.
4. Continue current official Grade 2 text order from the next source-resolvable nonvisual topic.
5. Keep Visual Design source-blocked and do not infer answers from images, RGB/HEX values, monitor values, screenshots or unstated geometry.
