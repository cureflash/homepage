# Grade 2 Media Design — color-management source audit

Checked: 2026-09-02

## Official scope authority

Current Color Certification Association Grade 2 text TOC:
- https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- Media Design explicitly includes `カラーマネジメントの基本` at p.086, after `画面や印刷における色表現`.

The TOC is used only to establish Grade 2 scope/order, not to infer detailed answers.

## Auditable nonvisual rule authority

Current Adobe professional documentation:
- https://helpx.adobe.com/photoshop/using/color-managing-documents--printing.html
  - accurate ICC-compliant profiles are required for precise, consistent color management;
  - monitor profiles describe monitor color reproduction;
  - document profiles define a document RGB/CMYK color space;
  - a CMS uses device/document profiles to translate color between spaces.
- https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/embed-color-profiles.html (updated 2026-02-23)
  - embedded profiles help maintain consistent color when files move between devices/applications.
- https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/change-color-profile-for-documents.html (updated 2026-02-23)
  - Assign Profile does not change document color values; it changes how the values are interpreted;
  - Convert to Profile converts to a selected destination profile and tags the document with that profile.
- https://helpx.adobe.com/uk/acrobat/using/color-management.html
  - a CMS compares source/output color spaces and translates using color profiles;
  - ICC is the cross-platform profile standard.

## Retained micro-skill

`pc2.media.color_management_profiles`

Retain only explicit text-semantic rules about:
- purpose of color management;
- ICC/color-profile role;
- monitor/document profiles;
- source/output translation;
- embedded-profile purpose;
- Assign Profile versus Convert to Profile.

Exclude:
- RGB/HEX numeric display values;
- swatches or image appearance judgments;
- monitor-facing color identification;
- screenshots;
- device-specific calibration values;
- rendering-intent judgments not required by the retained rules;
- any inference from diagrams or unstated geometry.
