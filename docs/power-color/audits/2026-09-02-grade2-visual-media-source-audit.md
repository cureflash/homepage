# Power Color Grade 2 — Visual / Media source audit

Checked: 2026-09-02

## Authority reviewed

Primary:
- Color Certification Association current Grade 2 page / sample: https://www.aft.or.jp/pages/feature/exam2
- Color Certification Association current official Grade 2 text TOC: https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf

Auditable professional corroboration:
- Adobe current color-model documentation: https://helpx.adobe.com/jp/creative-cloud/apps/colors/understand-color-modes.html

## Visual Design frontier

The current official Grade 2 TOC places `ビジュアルデザインの色彩` immediately after image-based schemes and lists `ビジュアルデザインとは` and `ビジュアルデザインと色彩` on p.078.

The public first-party material reviewed does not expose a sufficiently explicit answer rule for this chapter beyond scope labels. Therefore no `pc2.visual.*` question is authored from this frontier. In particular, no rule is inferred from figures, screenshots, color appearance, RGB/HEX values, or unstated geometry.

Status: scope-confirmed, authoring blocked pending an explicit auditable nonvisual rule.

## Next safe official-text topic: Media Design

The current official Grade 2 TOC explicitly lists `メディアデザインの色彩`, including `画面や印刷における色表現` and `カラーマネジメントの基本`.

The current official Grade 2 sample independently confirms that CMY are the subtractive-mixing primaries and asks for the abbreviation `CMY`.

Adobe's current professional documentation explicitly corroborates the nonvisual model rules retained here:
- RGB combines red, green and blue light and is an additive model.
- RGB is used for television/computer displays.
- Full-intensity RGB light produces white.
- CMYK is a subtractive model based on cyan, magenta and yellow colorants, with black (K) added in practical four-color process printing.
- CMYK is used when preparing process-color print output.

## Retained authoring boundary

Create only text-choice questions about model identity, primaries, additive/subtractive classification, display-vs-print usage, full-intensity RGB producing white, and the practical role of K in CMYK process printing.

Exclude:
- any exact RGB/HEX values;
- any question requiring a monitor swatch or image appearance;
- any device-specific gamut judgment from an image;
- screenshot sampling;
- inferred geometry or unlisted color relations.

Candidate micro-skill: `pc2.media.rgb_cmyk_models`.
