# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-01

## Authority

Current first-party authority is the Color Certification Association Grade 2 page and the currently linked official sample PDF `https://www.aft.or.jp/images/exam2.pdf`.

The current Association page states that Grade 2 develops higher-level color-scheme / image-expression skills on top of Grade 3 and covers practical lighting, media design, landscape and other application fields. The currently published answer keys are:

- sample (1): A=4, B=1, C=2, D=4, E=3, F=3
- sample (2): A=3, B=2, C=1, D=1, E=4, F=2

## Source-rebase finding

PR #483 created `grade2-authoring-official-sample-facts-0001-0012.json` from a previously observed Grade 2 sample whose content included hexad/dyad/CMY facts. That content is not present in the current official PDF now linked by the Association. Therefore that 12-question batch must not be runtime-promoted under the current-source contract. Its answers are not being declared false; its claimed current-source authority is stale/unresolved.

Do not use the PR #483 batch as production evidence unless the exact former first-party sample is independently recovered and its authority/version is auditable.

## Current deterministic non-visual inventory

Facts below are recoverable from the current sample text plus the published answer key without reading the illustrated colors:

1. `pc2.image.color_image_rules`
   - clear image: the correct current-sample statement centers on `p` / `lt` tones and combines them with white.
   - elegant image: the correct current-sample statement uses `p` / `ltg` as base tones, purple-family hues, and suppressed lightness difference.
   - sports image: the current-sample correct statement uses `p` / `lt` tones.
   - elegant representative tone: `ltg`.
   - urban central color: basic color.

2. `pc2.scheme.natural_harmony_text`
   - current sample (2) D marks as correct that a coordination may be called natural harmony even when hue difference is large.
   - keep separate from image-color rules.

3. `pc2.fashion.basic_trend_relation`
   - current sample (2) A marks as correct that basic colors can become trend colors depending on the era.
   - this is lower priority because Power Color is restricted to color-identification / representation / scheme-adjacent material.

## Blocked current-sample items

- sample (1) A-D require judging illustrated colors and are not eligible for text-only derivation.
- any monitor-facing reconstruction of those illustrations is prohibited.
- no RGB/HEX sampling from the PDF or screenshots.

## Exact next order

1. Generate/QA/promote `pc2.image.color_image_rules` from the five source-confirmed text facts above.
2. Then evaluate `pc2.scheme.natural_harmony_text` as a separate micro-skill if enough non-template learning value can be produced from explicit current authority.
3. Continue official-text topic inventory; do not revive the PR #483 batch without recovered auditable authority.
