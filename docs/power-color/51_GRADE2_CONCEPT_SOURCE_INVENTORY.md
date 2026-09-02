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
   - official Grade 2 TOC confirms scope/order;
   - Plus Colors and MEGASOFT independently agree on the retained nonvisual intersection: bicolor/bicolore is a clear-contrast two-color scheme; tricolor/tricolore is a clear-contrast three-color scheme; bicolore is also called bicolor;
   - exact hue differences, PCCS tone boundaries, saturation thresholds, achromatic placement, RGB/HEX, monitor values and image appearance are excluded;
   - audit: `docs/power-color/audits/2026-09-01-grade2-bicolor-tricolor.md`.
11. `pc2.scheme.hue_circle_division`
   - current official Grade 2 sample explicitly tests split complementary and pentad, permits achromatic colors in hexad, and states that two dyads can form a tetrad;
   - Plus Colors, supervised by a Color Certification Level 1 coordinator and citing the 2020 revised official text, explicitly fixes the retained nonvisual rules for dyad, split complementary, tetrad, PCCS pentad and hexad;
   - no image appearance, RGB/HEX, monitor value, inferred polygon geometry or unstated tone restriction is used;
   - audit: `docs/power-color/audits/2026-09-02-grade2-hue-circle-division.md`.

All eleven skills above are runtime-promoted record-identically. Grade 2 runtime frontier is 132 verified / pending 0.

12. `pc2.image.image_scheme_keywords`
   - current official Grade 2 TOC confirms the ten image-scheme labels and exact scope/order;
   - Plus Colors explicitly maps the ten labels to characteristic image words and cites the 2020 revised official text under Level 1 coordinator supervision;
   - current official Level 1 second-stage sample independently confirms `ダイナミック = 強い・はっきりした・派手な`;
   - retained questions are text-semantic only; no color appearance, RGB/HEX, monitor value or inferred image geometry;
   - authoring 12/12 verified, pending 0, awaiting runtime promotion;
   - audit: `docs/power-color/audits/2026-09-02-grade2-image-scheme-keywords.md`.

## Current official-text scope inventory

The current official Grade 2 TOC frontier is now after image-based schemes. Remaining later topics include:
- visual/media, fashion, interior and landscape color coordination;
- conventional color names;
- PCCS tone-by-value appendix.

The TOC establishes scope and search order only. Do not generate a micro-skill from a TOC label unless the answer rule is explicit in acceptable authority.

## Removed / blocked routes

- Do not recreate `pc2.image.color_image_rules` without current explicit first-party authority.
- Do not reconstruct official image choices from pixels or screenshots.
- Do not infer monitor-facing colors without approved display references.
- Do not broaden any resolved scheme beyond its independently corroborated text-only intersection.
- The stale incomplete `power-color-grade2-tonal-promotion` branch is not authority.

## Exact next order

1. Grade 2 runtime frontier is 132 verified / pending 0 across eleven promoted skills.
2. Promote the independently verified `pc2.image.image_scheme_keywords` 12-question batch record-identically, extending runtime 132 → 144 after gates pass.
3. Then continue to Visual Design, without inferring answers from images, RGB/HEX or monitor values.
