# Power Color — Grade 2 execution plan

Checked: 2026-09-03

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

Grade 2 runtime is 264 verified / pending 0 across twenty-two promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

Latest promoted skills:
- `pc2.interior.color_planning_principles`: 12 promoted; 192 → 204.
- `pc2.interior.zoning_classification`: 12 promoted; 204 → 216.
- `pc2.interior.element_color_roles`: 12 promoted; 216 → 228.
- `pc2.interior.style_name_inventory`: 12 promoted; 228 → 240.
- `pc2.landscape.public_nature`: 12 promoted; 240 → 252.
- `pc2.landscape.element_examples`: 12 promoted record-identically; 252 → 264.

All twenty-two promoted skills are covered by exact-equality/full-fingerprint/shared-engine gates. The p.117 element-examples promotion CI run `33647175533` succeeded; PR #546 merged as `ba9bde18a964eebc92c992b38445271b980fae8e`.

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

State: 12/12 independently verified and promoted record-identically; runtime 240 → 252.

## Landscape p.117 `景観をつくる要素` — promoted

Audit: `docs/power-color/audits/2026-09-02-grade2-landscape-p117-source-audit.md`.

`pc2.landscape.element_examples` remains limited to the explicit authoritative element examples and their directly stated breadth. It must not be treated as a universal closed taxonomy and does not authorize inferred natural/artificial labels, color, material, appearance, RGB/HEX or geometry.

State: 12/12 independently verified and promoted record-identically; runtime 252 → 264; post-promotion exact-equality/full-fingerprint/shared-engine coverage passed in workflow run `33647175533`.

## Landscape p.117 `景観色彩における色彩設計の役割` — promotion-ready

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p117-color-design-role-source-audit.md`.

Accepted boundary for `pc2.landscape.color_design_harmony_role`:
- surrounding landscape characteristics and target scale are planning considerations;
- numerical standards provide a framework that suppresses colors with extreme discordance from surrounding landscape;
- site-appropriate landscape color planning requires consideration of harmony with surroundings;
- place and scale are relevant to landscape-harmony thinking and the color-planning process;
- numerical compliance alone is not the planning endpoint: the standards' purpose and surrounding-streetscape harmony also matter.

Do not generalize Tokyo-specific numerical values into Grade 2 facts. Do not infer RGB/HEX/display values, Munsell limits, image appearance, material recommendations, hue/tone choices or unstated geometry.

State:
- [x] current AFT Grade 2 scope/order rechecked;
- [x] deterministic nonvisual boundary source-resolved against current Tokyo Metropolitan Government landscape color guidance;
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before proposed-answer comparison;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] dedicated nonvisual/full-fingerprint/shared-renderer pre-promotion gate and normal regression passed in workflow run `33648021940` on head `21c8520031af219eb5c6e558b555a5d7da6ebe0c`;
- [x] PR #548 merged as `fd35f8b1539bab415235c752387cdfbacd60afc3`;
- [ ] promote record-identically to runtime and extend exact-equality/full-fingerprint/shared-engine coverage to twenty-three skills.

## Exact next start point

Promote the 12 verified `pc2.landscape.color_design_harmony_role` records record-identically to runtime, move 264 → 276 and twenty-two → twenty-three promoted skills, extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage, then continue official-text order. Keep all Grade 3 blockers and source/display gates unchanged.
