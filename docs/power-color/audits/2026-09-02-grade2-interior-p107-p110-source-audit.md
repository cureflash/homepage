# Grade 2 Interior p.107–110 source audit

Checked: 2026-09-02

## Authority

Primary scope/order authority is the current Color Certification Association official Grade 2 text table of contents:
- `https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

It places, in order:
1. `インテリア空間のカラーコーディネーション` p.107
2. `インテリアエレメントの色彩分類と色彩傾向` p.110
3. `インテリアエレメントの配色の考え方と技法` p.111

The TOC establishes scope/order only; it does not itself authorize detailed answer rules.

## p.107 — インテリア空間のカラーコーディネーション

Status: source-blocked for question generation.

A current-accessible Color Certification 2級 course listing corroborates that the topic covers color treatment of public/private/service spaces. A 2020-revision-aligned Udemy course likewise lists `パブリック空間の色彩`, `プライベート空間の色彩`, and `サービス空間の色彩` under this heading.

However, the reviewed public sources do not expose a sufficiently explicit deterministic nonvisual rule for what colors or coordination rules belong to each zone. Generating answers from room photographs, conventional impressions, hue stereotypes, RGB/HEX, or unstated examples would violate the project source/display gate.

Decision: do not author `pc2.interior.space_color_coordination` from p.107 at this time. Revisit only if a source explicitly fixes text-only answerable rules.

## p.110 — インテリアエレメントの色彩分類と色彩傾向

Status: source-resolved for the narrow three-role classification only.

The 2020-revision-aligned Color Certification 2級 course listing explicitly enumerates:
- ベースカラー（基調色）
- アソートカラー（配合色）
- アクセントカラー（強調色）

Current DAIKEN professional material independently corroborates the same three-role vocabulary and gives deterministic functional definitions:
- base color: the large-area/background color, typically walls/floor/ceiling, around 70%;
- assort color: the main/supporting color, around 25%;
- accent color: the small-area emphasis/theme color, around 5%.

A separate current housing/interior source independently corroborates the same 70/25/5 role split and the correspondence of base to floor/walls/ceiling, assort to larger furnishings/curtains/rugs, and accent to small accessories.

Accepted nonvisual boundary for a future micro-skill `pc2.interior.element_color_roles`:
- identify base / assort / accent from their role names and explicit functional descriptions;
- base = broad background/base area;
- assort = main/supporting secondary area;
- accent = small emphasis area;
- the 70/25/5 split may be used only as the explicit conventional planning ratio corroborated by the reviewed sources, not as an exact physical-area measurement of an image or floor plan.

Excluded:
- no inference from photographs or swatches;
- no RGB/HEX or sampled pixels;
- no floor-plan geometry or measured image area;
- no claim that an observed room must exactly equal 70/25/5;
- no universal hue assignment to any role.

## Exact repository implication

The already verified p.105 batches still have priority for record-identical runtime promotion 192 -> 216. This audit only pre-resolves the next safe source frontier after that promotion. After p.105 promotion, p.107 remains blocked and p.110 is the next safe nonvisual authoring candidate as `pc2.interior.element_color_roles`.
