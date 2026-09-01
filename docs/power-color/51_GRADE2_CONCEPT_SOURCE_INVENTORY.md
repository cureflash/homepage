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
   - public first-party scope material does not expose the detailed relation;
   - Rock Paint explicitly states the natural hue/lightness relation: yellow-near is lighter and blue-near is darker, and complex harmony reverses it;
   - Daiwa House independently states natural harmony as yellow-near higher lightness / blue-violet-near lower lightness, and complex harmony as the reverse;
   - only this independently matching lightness-direction rule is authorized;
   - no hue-difference limit, tone restriction, RGB/HEX, monitor color or diagram geometry is inferred.

5. `pc2.scheme.dominant_color_tone`
   - current official Grade 2 scope/TOC places advanced and dominant schemes in scope but does not expose the full text rule publicly;
   - ONCA independently states dominant color = same-to-similar hue unified, tone varied, 3+ colors; dominant tone = same-to-similar tone unified, hue varied, 3+ colors;
   - Color Basic Book is operated by a Color Certification Association certified color instructor and independently states dominant color = same hue (adjacent/similar may be included), tone free; dominant tone = hue free, same tone (similar may be included);
   - the authorized intersection for Power Color is only: dominant color uses hue as the unifying dimension and tone as the varying dimension; dominant tone uses tone as the unifying dimension and hue as the varying dimension; both are 3-or-more-color schemes;
   - do not infer visual examples, monitor values, or additional boundary rules beyond this intersection.

## Current official-text scope inventory

After Munsell, the current official Grade 2 TOC places the following Power Color-relevant subjects in order:
- color psychology / visual color effects;
- color harmony and natural-order harmony;
- natural harmony and complex harmony;
- dominant schemes;
- dominant-color and dominant-tone schemes;
- tone-on-tone, tone-in-tone and tonal schemes;
- camaieu / faux-camaieu;
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
- For natural/complex harmony, do not expand beyond the independently corroborated lightness-direction rule.
- For dominant schemes, do not expand beyond the independently corroborated hue-vs-tone unifying distinction and 3+ color condition without stronger explicit authority.

## Exact next order

1. `pc2.scheme.dominant_color_tone` has 12 independently verified text-only authoring records; run its dedicated gate and merge if green.
2. Promote only after authoring CI is green and runtime exact-equality/full-fingerprint/shared-engine gates are extended.
3. Then continue the official-text source inventory to tone-on-tone / tone-in-tone / tonal schemes.
