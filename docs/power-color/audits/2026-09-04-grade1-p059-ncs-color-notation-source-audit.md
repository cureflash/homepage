# Power Color Grade 1 — p.059 NCS「色の表示方法」source audit

Date: 2026-09-04
Status: `SECONDARY_CORROBORATION_REQUIRED`

## Official scope
The current AFT Grade 1 official textbook table of contents places p.059 `NCS — 色の表示方法` after p.058 `等色相面での色の表示` and before p.059 `色立体と色票集`. The public AFT material establishes heading/order only; unpublished textbook wording, figures, examples, notation layout, and display colours are not reconstructed.

## Audited authority
1. AFT current official Grade 1 textbook table of contents — scope/order only.
2. NCS Colour current official `Learn the NCS System` page — explicit NCS notation example `NCS S 1040-R20B`, where nuance `1040` means 10% blackness and 40% chromaticness and hue `R20B` denotes red with 20% blue.
3. NCS Colour current official `Colour harmonies` page — explicit whiteness relation `100% - (S + C) = whiteness%` and worked example nuance `3010`: 30 + 10 = 40, hence whiteness 60.
4. NCS official NCS+ support FAQ — explicit search example `S 5020 R50B`: blackness 50, chromaticness 20, hue R50B.

## Accepted deterministic nonvisual fact families
- In an NCS nuance code, the first pair of digits denotes blackness and the second pair denotes chromaticness, as directly exemplified by current NCS first-party material.
- Whiteness is calculated as `100 - (blackness + chromaticness)`.
- For nuance `3010`, whiteness is 60%.
- `S 5020 R50B` corresponds to blackness 50, chromaticness 20, hue R50B; this is used only as a text-code interpretation example, not as a display-colour judgment.

## Excluded / blocked
- Exact unpublished AFT figure geometry, notation typography/layout, worked examples, or exhaustive notation rules.
- Any RGB/HEX/display value, swatch appearance, monitor-facing colour judgment, or inference from NCS website images.
- Claims that these externally corroborated facts exhaust the AFT p.059 body text.

## Authoring decision
Authoring may proceed only for the four accepted deterministic text-only fact families above. Keep the topic classified `SECONDARY_CORROBORATION_REQUIRED` because AFT public authority does not expose the textbook body.
