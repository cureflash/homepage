# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-01

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
   - hexad may use achromatic color;
   - two dyads can form a tetrad;
   - subtractive-primary notation is CMY;
   - three evenly positioned hues on the PCCS hue circle form a triad;
   - official sample explicitly names tone-in-tone, split complementary, pentad and tonal schemes as identification targets.

2. `pc2.scheme.triad_hue_positions`
   - current official Grade 2 sample states that three evenly spaced hues form a triad;
   - source-confirmed PCCS structure fixes 24 hue positions;
   - therefore the text-only rule uses an 8-position interval modulo 24.

3. `pc2.munsell.notation_components`
   - official Grade 2 TOC confirms Munsell hue/value/chroma/notation in scope;
   - JCRI explicitly defines H/V/C and the `H V/C` field decomposition;
   - concrete strings come only from current JCRI examples.

4. `pc2.scheme.natural_complex_harmony`
   - official Grade 2 TOC confirms natural harmony and complex harmony are in scope;
   - Rock Paint and Daiwa House independently agree on the lightness direction retained by Power Color: yellow-near lighter / blue-violet-near darker for natural harmony, reversed for complex harmony;
   - no hue-distance limit, tone restriction, RGB/HEX, monitor color or diagram geometry is inferred.

5. `pc2.scheme.dominant_color_tone`
   - current official Grade 2 scope places dominant schemes in scope;
   - independent explicit definitions support the retained intersection: dominant color uses hue as the unifying dimension and tone as the varying dimension; dominant tone uses tone as the unifying dimension and hue as the varying dimension; both are 3-or-more-color schemes.

6. `pc2.scheme.tone_on_tone`
   - current official Grade 2 scope places tone-on-tone in scope;
   - ONCA and Plus Colors independently support the retained intersection: same-to-similar hue range + comparatively large lightness difference;
   - no exact numeric hue boundary, tone-map geometry, RGB/HEX, monitor color or image appearance is inferred.

7. `pc2.scheme.tone_in_tone`
   - current official Grade 2 sample explicitly includes tone-in-tone as an identification target;
   - ONCA, Plus Colors and FOLK support the retained intersection: same tone as the unifying dimension + hue variation;
   - Plus Colors' broader similar-tone allowance is not encoded because it is not independently stated by all checked definitions.

8. `pc2.scheme.tonal`
   - current official Grade 2 sample explicitly includes tonal as an identification target;
   - Plus Colors explicitly defines tonal as combining intermediate/muddy colors from PCCS `d`, `sf`, `ltg`, `g`;
   - UTO's room independently defines tonal as combining the same four intermediate tones: soft, dull, light grayish and grayish;
   - the authorized intersection is only the four-tone membership `sf`, `d`, `ltg`, `g` and the fact that tonal combines these intermediate/muddy colors;
   - do not infer visual appearance, RGB/HEX, monitor values, tone-map geometry or additional numeric boundaries.

9. `pc2.scheme.camaieu_faux_camaieu`
   - current official Grade 2 TOC places camaieu / faux-camaieu in scope after tonal;
   - Plus Colors and ONCA independently support the retained nonvisual intersection: camaieu is almost monochromatic with extremely small hue/tone-related differences; faux-camaieu remains close but introduces slightly more variation, especially by shifting hue while keeping lightness/chroma differences small;
   - exact numeric PCCS hue-difference boundaries are deliberately not encoded because the independently checked sources do not publish the same numeric boundary;
   - audit: `docs/power-color/audits/2026-09-01-grade2-camaieu-faux-camaieu.md`.

## Current official-text scope inventory

After the resolved schemes, the current official Grade 2 TOC next includes:
- bicolor / tricolor;
- hue-circle division schemes;
- image-based schemes;
- visual/media, fashion, interior and landscape color coordination;
- conventional color names;
- PCCS tone-by-value appendix.

The TOC establishes scope and search order only. Do not generate a micro-skill from a TOC label unless the answer rule is explicit in acceptable authority.

## Removed / blocked routes

- Do not recreate `pc2.image.color_image_rules` without current explicit first-party authority.
- Do not reconstruct official image choices from pixels or screenshots.
- Do not infer monitor-facing colors without approved display references.
- Do not broaden any resolved scheme beyond its independently corroborated text-only intersection.

## Exact next order

1. Grade 2 runtime frontier is 84 verified / pending 0 through `pc2.scheme.tone_in_tone`.
2. `pc2.scheme.tonal` authoring is 12 checked / 12 verified / pending 0 with A/B/C/D = 3/3/3/3 and is still the first runtime-promotion checkpoint.
3. Complete the record-identical tonal promotion to runtime 96 and extend the shared-engine/full-fingerprint frontier.
4. `pc2.scheme.camaieu_faux_camaieu` is source-resolved and authoring-complete as a queued independent checkpoint: 12 checked / 12 verified / pending 0, A/B/C/D = 3/3/3/3. Promote it only after the tonal runtime checkpoint is complete.
