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

All twelve skills above are runtime-promoted record-identically. Grade 2 runtime frontier is 144 verified / pending 0.

13. `pc2.media.rgb_cmyk_models`
   - current official Grade 2 TOC confirms Media Design and specifically `画面や印刷における色表現` / `カラーマネジメントの基本`;
   - current official Grade 2 sample explicitly confirms CMY as the subtractive-mixing primaries;
   - current Adobe professional documentation explicitly fixes the retained text-only rules: RGB = additive red/green/blue light used for displays; full-intensity RGB = white; CMYK = subtractive cyan/magenta/yellow with black added for practical four-color process printing;
   - exact RGB/HEX values, swatches, screenshots, image appearance, device-specific visual judgments and inferred geometry are excluded;
   - authoring 12/12 verified, pending 0, A/B/C/D = 3/3/3/3; not yet runtime-promoted;
   - audit: `docs/power-color/audits/2026-09-02-grade2-visual-media-source-audit.md`.

## Current official-text scope inventory

The current official Grade 2 TOC frontier is now inside the Visual / Media block:
- Visual Design: scope-confirmed, but current public first-party material reviewed does not expose a sufficiently explicit nonvisual answer rule, so `pc2.visual.*` authoring is blocked rather than inferred.
- Media Design: `pc2.media.rgb_cmyk_models` is source-resolved and verified; later Media Design subtopics remain unreviewed.
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

1. Grade 2 runtime frontier is 144 verified / pending 0 across twelve promoted skills.
2. Promote verified `pc2.media.rgb_cmyk_models` record-identically to runtime 156 and extend exact-equality/full-fingerprint/shared-engine gates.
3. Keep Visual Design source-blocked; do not repeat the same scope-only route until new explicit authority is available.
4. Do not infer answers from images, RGB/HEX values, monitor values, screenshots or unstated geometry.
