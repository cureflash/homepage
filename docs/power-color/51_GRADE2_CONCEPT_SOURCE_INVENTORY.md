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

6. `pc2.scheme.tone_on_tone`
   - current official Grade 2 TOC places tone-on-tone in scope;
   - ONCA explicitly defines tone-on-tone as same or similar hue with a comparatively large lightness difference;
   - Plus Colors, supervised by a Color Certification Level 1 coordinator and citing the official 2020 text, independently states same/adjacent/similar hue with a large lightness difference;
   - the authorized intersection is only: same-to-similar hue range + comparatively large lightness difference;
   - Plus Colors additionally states chroma alignment, but ONCA does not independently establish that condition, so Power Color does not encode it here;
   - no exact numeric hue boundary, tone-map geometry, RGB/HEX, monitor color or image appearance is inferred.

7. `pc2.scheme.tone_in_tone`
   - the current official Grade 2 sample explicitly includes tone-in-tone as an identification target, establishing present scope;
   - ONCA explicitly defines tone-in-tone as same tone with hue variation;
   - Plus Colors independently defines it as a dominant-tone-family scheme using the same tone, with hue selected freely; it additionally allows similar tones;
   - FOLK independently describes tone-in-tone as keeping tone aligned while using varied hues, and calls it an same-tone scheme;
   - the authorized intersection is only: same tone as the unifying dimension + hue variation;
   - do not encode the broader similar-tone allowance because it is not independently stated by all checked definitions;
   - no image choice, hue-distance boundary, RGB/HEX, monitor color or tone-map geometry is inferred.

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
- For tone-on-tone, do not encode chroma-equality or exact hue-distance limits from a single secondary source; retain only the independently corroborated same/similar-hue + large-lightness-difference intersection.
- For tone-in-tone, do not encode similar-tone allowance as a required/general rule from Plus Colors alone; retain only the independently shared same-tone + hue-variation intersection.

## Exact next order

1. Grade 2 runtime frontier is 72 verified / pending 0 through `pc2.scheme.tone_on_tone`.
2. `pc2.scheme.tone_in_tone` now has a complete auditable nonvisual intersection: same tone + hue variation. Author and independently QA a text-only batch, then merge only after dedicated Power Color CI.
3. Promote verified tone-in-tone records record-identically after authoring CI/merge.
4. Continue source inventory to tonal.
