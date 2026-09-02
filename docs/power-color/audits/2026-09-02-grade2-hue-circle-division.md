# Grade 2 hue-circle division source audit — 2026-09-02

## Scope authority

Current Color Certification Association Grade 2 sample:
- https://www.aft.or.jp/pages/feature/exam2
- explicitly tests スプリットコンプリメンタリー and ペンタード;
- explicitly states that ヘクサード may use achromatic colors;
- explicitly states that two ダイアード can form a テトラード;
- official sample answers confirm those statements.

## Detailed nonvisual rule authority

Plus Colors, article last updated 2024-12-21:
- https://pluscolors.net/color_knowledge/division/
- supervised by a Color Certification Level 1 coordinator;
- cites the 2020 revised Color Certification official text;
- explicitly states:
  - dyad = two complementary hues; PCCS hue difference 12;
  - split complementary = one hue plus both neighboring hues of its complement;
  - tetrad = four equal hue-circle divisions; adjacent PCCS hue difference 6; two complementary pairs;
  - PCCS pentad = triad plus white and black because 24 hues cannot be divided evenly by five;
  - hexad = six equal divisions; PCCS hue difference 4; three complementary pairs; tetrad plus white and black is also valid.

## Retained generation boundary

Allowed: text-only questions directly re-derived from the explicit rules above.

Excluded: image appearance, screenshot geometry, RGB/HEX, monitor values, inferred polygon geometry, unstated tone restrictions, or any extension beyond the explicit rules.

Result: `pc2.scheme.hue_circle_division` is source-resolved for a 12-question text-only authoring batch.
