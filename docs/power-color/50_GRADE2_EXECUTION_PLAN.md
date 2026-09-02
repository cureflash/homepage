# Power Color — Grade 2 execution plan

Checked: 2026-09-02

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

When public first-party material confirms Grade 2 scope but does not expose the detailed nonvisual rule, an auditable professional secondary source may be used only when the rule is explicit and independently corroborated. Secondary sources never authorize monitor RGB/HEX or image-derived answers.

Rules:
1. Use only facts independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## Current runtime frontier

Grade 2 runtime is 216 verified / pending 0 across eighteen promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

Latest promoted skills:
- `pc2.interior.color_planning_principles`: 12 promoted; 192 → 204.
- `pc2.interior.zoning_classification`: 12 promoted; 204 → 216.

All eighteen promoted skills are covered by exact-equality/full-fingerprint/shared-engine gates.

## Preserved blocked topics

- Visual Design: scope-confirmed, but no sufficiently explicit public nonvisual rule found.
- Fashion `ファッションの分類` p.091, `ファッションの配色` p.095, `ファッションにおける配色の事例` p.096: source-blocked.
- Interior `インテリア概念の成立` p.104: source-blocked.
- Interior `インテリア空間のカラーコーディネーション` p.107: source-blocked.

Do not repeat those routes unless new explicit auditable authority appears.

## Interior p.105 — promoted

Audit: `docs/power-color/audits/2026-09-02-grade2-interior-p105-source-audit.md`.

- [x] `pc2.interior.color_planning_principles`: 12 pending-first records independently re-solved; 12 verified; promoted record-identically.
- [x] `pc2.interior.zoning_classification`: 12 pending-first records independently re-solved; 12 verified; promoted record-identically.
- [x] Dedicated p.105 gate now asserts exact runtime equality rather than “not yet promoted”.

## Interior p.110 — active verified authoring

Audit: `docs/power-color/audits/2026-09-02-grade2-interior-p107-p110-source-audit.md`.

### `pc2.interior.element_color_roles`

Accepted rule boundary only:
- base color = broad background/base area;
- assort color = main/supporting secondary area;
- accent color = small emphasis area;
- 70/25/5 = explicit conventional planning ratio only, never a value inferred from an image or floor plan.

Excluded:
- no photographs, swatches, sampled pixels or RGB/HEX;
- no floor-plan geometry or measured image area;
- no universal hue assignment to any role.

Authoring state:
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before comparing with proposed answers;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] dedicated schema/full-fingerprint/nonvisual/shared-renderer gate added;
- [ ] runtime promotion pending.

## Exact next start point

After the current PR is green and merged, promote `pc2.interior.element_color_roles` record-identically from `qualifications/color-certification/data/grade2-authoring-interior-element-color-roles-0001-0012.json`. Expected runtime is 216 → 228 only if exact-equality, full-fingerprint, coverage, answer-position and shared Power TOEIC engine regressions all pass. Do not rewrite records during promotion. Then continue official Grade 2 text order to p.111 source acquisition. Keep all Grade 3 blockers and source/display gates unchanged.
