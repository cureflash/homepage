# Power Color — Grade 2 execution plan

Checked: 2026-09-02

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

When public first-party material confirms Grade 2 scope but does not expose the detailed nonvisual rule, an auditable professional or public-sector source may be used only when the rule is explicit and sufficiently narrow. Such sources never authorize monitor RGB/HEX or image-derived answers.

Rules:
1. Use only facts independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## Current runtime frontier

Grade 2 runtime is 252 verified / pending 0 across twenty-one promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

Latest promoted skills:
- `pc2.interior.color_planning_principles`: 12 promoted; 192 → 204.
- `pc2.interior.zoning_classification`: 12 promoted; 204 → 216.
- `pc2.interior.element_color_roles`: 12 promoted; 216 → 228.
- `pc2.interior.style_name_inventory`: 12 promoted; 228 → 240.
- `pc2.landscape.public_nature`: 12 promoted record-identically; 240 → 252.

All twenty-one promoted skills are covered by exact-equality/full-fingerprint/shared-engine gates. The p.116 promotion CI run `33643082653` succeeded on reconciled head `9969122da0bc3d6d44fb38f18236ce64e8557a0c` and PR #542 merged to main.

## Preserved blocked topics

- Visual Design: scope-confirmed, but no sufficiently explicit public nonvisual rule found.
- Fashion `ファッションの分類` p.091, `ファッションの配色` p.095, `ファッションにおける配色の事例` p.096: source-blocked.
- Interior `インテリア概念の成立` p.104: source-blocked.
- Interior `インテリア空間のカラーコーディネーション` p.107: source-blocked.
- Interior `インテリアエレメントの配色の考え方と技法` p.111: source-blocked; generic p.110 role/ratio material is not accepted as a substitute.

Do not repeat those routes unless new explicit auditable authority appears.

## Interior p.112 — promoted

Audit: `docs/power-color/audits/2026-09-02-grade2-interior-p111-p112-source-audit.md`.

`pc2.interior.style_name_inventory` remains limited to membership in the six corroborated names `ナチュラル / カジュアル / オーソドックス / クラシック / エレガント / モダン`. No style-to-hue, tone, material, shape, furniture, historical-period, image or display-color mapping is authorized.

## Landscape p.116 — promoted

Audit: `docs/power-color/audits/2026-09-02-grade2-landscape-p116-source-audit.md`.

`pc2.landscape.public_nature` remains limited to:
- good landscape as a present-and-future common national asset under the Landscape Act basic principles;
- coordinated efforts by local public bodies, businesses and residents.

State:
- [x] pending-first 12 created;
- [x] independently re-solved 12/12 before proposed-answer comparison;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] dedicated gate and normal regression passed;
- [x] promoted record-identically; runtime 240 → 252;
- [x] exact-equality/full-fingerprint/shared-engine coverage extended to twenty-one skills.

## Landscape p.117 `景観をつくる要素` — active authoring

Audit: `docs/power-color/audits/2026-09-02-grade2-landscape-p117-source-audit.md`.

The current official Grade 2 table of contents fixes `景観をつくる要素` at p.117. Mutsu City's official Landscape Plan supplies an explicit nonvisual list of landscape-composing examples: 建築物, 工作物, 道路, 公園, 河川, 港湾, 屋外広告物, 美化活動, 山, 森林, 公共事業, 個人事業.

Accepted boundary for `pc2.landscape.element_examples`:
- use only those explicit examples and the directly stated fact that landscape-composing elements are diverse;
- may test that the list includes `美化活動` and both `公共事業` / `個人事業`;
- do not treat the list as a universal closed taxonomy;
- do not infer natural/artificial category labels, color, material, appearance, RGB/HEX or geometry.

State:
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before proposed-answer comparison;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] unsupported draft classification wording removed before gate;
- [x] dedicated schema/source-ref/full-fingerprint/nonvisual/shared-renderer pre-promotion gate added;
- [ ] run gate/CI and promote record-identically only if green.

The adjacent p.117 `景観色彩における色彩設計の役割` is a separate source-acquisition checkpoint and is not authorized by the current element-example source contract.

## Exact next start point

Run the `pc2.landscape.element_examples` authoring/full-fingerprint/nonvisual/shared-renderer gate and normal Power Color/shared Power TOEIC regression. If green, promote the 12 verified records record-identically to runtime, move 252 → 264 and twenty-one → twenty-two promoted skills, then continue official-text order to p.117 `景観色彩における色彩設計の役割`. Keep all Grade 3 blockers and source/display gates unchanged.
