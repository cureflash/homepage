# Power Color — contrast-tone authority audit: JCRI pair-analyzer route

Checked: 2026-09-01

## Purpose
Determine whether a new level-1 route can elevate the conventional Grade 3 contrast-tone pair matrix without inferring from tone-map geometry, RGB/HEX, or level-3 study material.

## New first-party evidence

### JCRI 2022 annual report — 配色ソフトの開発
Source: https://www.jcri.jp/wp-content/uploads/2024/11/2022-jigyohokoku.pdf

The Japan Color Research Institute states that it was developing a color-scheme analysis program by extending `PCCS COLOR CALC` with pair/scheme classification and Hue-Tone plotting. The report states that RGB or Munsell input is converted and that the software then shows what kind of color scheme each color pair forms. The sample screen includes a `トーン配色` result column and demonstrates `類似トーン配色` and `同一トーン配色` judgments.

This is level-1 evidence that JCRI has an explicit machine classification path for PCCS tone relations. It is not, by itself, a complete 12-tone contrast-pair matrix: the public sample does not enumerate all chromatic tone combinations and does not show any complete contrast-tone table.

### Current JCRI PCCS Color Calc product page
Source: https://www.jcri.jp/product/pccs_color_calc

The current first-party page confirms that PCCS Color Calc is still an active JCRI-produced product sold by Japan Color Enterprise and that current versions may differ from the launch-era videos. This confirms that direct first-party software output remains a legitimate acquisition route, but the public product page does not expose the added pair-classification matrix.

## Acceptance decision
- Do not generate `pc3.relation.tone_difference` from the 2022 screenshot.
- Do not infer missing pair memberships from the plotted tone positions.
- Do not treat the existing level-3 candidate matrix as elevated merely because JCRI has a classifier.
- Treat direct output from the JCRI pair-analysis implementation, if obtainable for all 12 chromatic tones, as a level-1 authority route because the classification is performed by JCRI's own PCCS analysis implementation rather than reconstructed from appearance.

## Exact next evidence needed
Acquire one of the following:
1. direct JCRI pair-analysis output covering every unordered pair among the 12 chromatic tones; or
2. a first-party JCRI/Japan Color Enterprise table/manual that exposes the same pair classifications; or
3. the current official Grade 3 text rule/table.

For a software-output route, retain an auditable capture/export showing the input tone pair and returned `トーン配色` classification for every tested pair. Only after the full candidate matrix is independently cross-checked against that level-1 output may `pc3.relation.tone_difference` be generated.

## Result
Authority elevation is not complete. The blocker has narrowed from open-ended source discovery to acquisition of explicit JCRI pair-classifier output or an equivalent first-party table. No questions, RGB/HEX values, engine code, or runtime records were changed.
