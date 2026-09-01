# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-01

## Current first-party authority

Use the current Color Certification Association Grade 2 page:
`https://www.aft.or.jp/pages/feature/exam2`

Use the current official Grade 2 text table of contents for scope only:
`https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

Current JCRI first-party Munsell references used in this checkpoint:
- `https://www.jcri.jp/square/tool` — `Munsell Separation`, explicitly parses `H V/C` into hue numeric, hue letters, value numeric, slash and chroma numeric;
- `https://www.jcri.jp/product/hvc_color_training` — explicitly identifies H/V/C as hue/value/chroma;
- `https://www.jcri.jp/product/digital_color_manual` — current page publishes concrete Munsell notation examples used by the drills.

## Source-resolved nonvisual skills

1. `pc2.foundation.official_sample_facts`
   - hexad may use achromatic color;
   - two dyads can form a tetrad;
   - subtractive-primary notation is CMY;
   - three evenly positioned hues on the PCCS hue circle form a triad;
   - Question 1 explicitly names tone-in-tone, split complementary, pentad and tonal schemes as identification targets.

2. `pc2.scheme.triad_hue_positions`
   - the current official Grade 2 sample explicitly states that three hues whose positions are evenly spaced on the PCCS hue circle form a triad;
   - the existing source-confirmed PCCS structure fixes the hue circle at 24 positions;
   - therefore the nonvisual Grade 2 drill may derive an 8-position interval (`24 / 3 = 8`) modulo 24;
   - no image choice, display color, RGB/HEX, or unstated diagram geometry is needed.

3. `pc2.munsell.notation_components`
   - official Grade 2 TOC confirms Munsell hue/value/chroma/notation are in scope;
   - JCRI explicitly defines the H/V/C attributes and the `H V/C` field decomposition;
   - concrete notation strings used in questions are taken only from current JCRI-published examples;
   - no monitor color or reconstructed Munsell color is used;
   - 12 verified records are promoted record-identically in the 36-question Grade 2 runtime frontier on the current branch.

## Current official-text scope inventory

The current official Grade 2 text table of contents confirms these Power Color-relevant areas are in scope, but the TOC alone does not authorize deriving their detailed rules:

- Munsell color system: hue, hue circle, value, chroma, notation, color solid;
- color harmony and natural-order harmony;
- natural harmony and complex harmony;
- dominant schemes;
- dominant-color and dominant-tone schemes;
- tone-on-tone, tone-in-tone and tonal schemes;
- camaieu / faux-camaieu;
- bicolor / tricolor;
- hue-circle division schemes;
- image-based schemes including elegant, casual, classic, clear, chic, dynamic, warm natural, fresh natural, modern and romantic;
- visual/media color design and screen/print color expression;
- fashion, interior and landscape color coordination;
- conventional color names;
- PCCS tone-by-value appendix.

This establishes source-search order only. Do not generate a micro-skill from a TOC label unless current first-party text states the rule needed to determine answers.

## Removed / blocked routes

The previous `pc2.image.color_image_rules` route is not supported by the current official Grade 2 page inspected on 2026-09-01. Its authoring batch and gate are removed from the active corpus. Do not recreate it unless a current auditable first-party source explicitly supplies those rules.

`pc2.scheme.natural_harmony_text` is not present on the current official Grade 2 sample page. The TOC confirms natural harmony is in scope, but not its detailed rule. Do not generate it from memory or stale samples.

Question 1 A-D require judging illustrated PCCS arrangements; do not reconstruct their answer choices from pixels or screenshots. Question 2 C requires choosing among illustrated colors; do not derive it from screen appearance. Monitor-facing color reconstruction remains prohibited without approved display references.

## Exact next order

1. Merge the 36-question Munsell runtime promotion after CI is green.
2. Continue first-party material in official-text order after Munsell notation.
3. Do not generate another skill unless its full nonvisual answer rule is explicit in current first-party material.
