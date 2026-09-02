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

Grade 2 runtime is 192 verified / pending 0 across sixteen promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

Promoted skills:
1. `pc2.foundation.official_sample_facts`
2. `pc2.scheme.triad_hue_positions`
3. `pc2.munsell.notation_components`
4. `pc2.scheme.natural_complex_harmony`
5. `pc2.scheme.dominant_color_tone`
6. `pc2.scheme.tone_on_tone`
7. `pc2.scheme.tone_in_tone`
8. `pc2.scheme.tonal`
9. `pc2.scheme.camaieu_faux_camaieu`
10. `pc2.scheme.bicolor_tricolor`
11. `pc2.scheme.hue_circle_division`
12. `pc2.image.image_scheme_keywords`
13. `pc2.media.rgb_cmyk_models`
14. `pc2.media.color_management_profiles`
15. `pc2.media.image_basics`
16. `pc2.fashion.basic_trend_color_classification`

All sixteen are promoted record-identically and covered by exact-equality/full-fingerprint/shared-engine gates.

## Preserved blocked topics

- Visual Design: scope-confirmed, but no sufficiently explicit public nonvisual rule found.
- Fashion `ファッションの分類` p.091, `ファッションの配色` p.095, `ファッションにおける配色の事例` p.096: source-blocked after audits.
- Interior `インテリア概念の成立` p.104: source-blocked; current Interior Industry Association material does not establish the official-text historical propositions.

Do not repeat those routes unless new explicit auditable authority appears.

## Interior p.105 — source-resolved

Audit: `docs/power-color/audits/2026-09-02-grade2-interior-p105-source-audit.md`.

The current official Grade 2 text order places `インテリア色彩の考え方` and `インテリア空間の分類とゾーニング` at p.105. An auditable Cleverly Home Fukushima article uses the same headings, explicitly cites the official Grade 2 text, and states deterministic nonvisual rules. Current DAIKEN professional housing guidance independently corroborates zoning as use-based grouping of spaces.

### `pc2.interior.color_planning_principles`

Accepted rule boundary only:
- `生活を包む色彩であること` — interior color continually affects occupants in daily life;
- `目的や用途に応じた色彩であること` — room role/function should guide color planning;
- `住むための色彩であること` — account for difficult post-construction change, lasting suitability and maintainability;
- `利用者に応じた色彩であること` — account for the principal users of the space.

Authoring state:
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before comparing with proposed answers;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] text-only shared-renderer/full-fingerprint gate added;
- [ ] runtime promotion pending.

### `pc2.interior.zoning_classification`

Accepted rule boundary only:
- `パブリックゾーン` = family and visitors / many people share the space;
- `プライベートゾーン` = a specific individual mainly uses the space;
- `サービスゾーン` = functional housework and wet/water-use spaces;
- zoning = grouping spaces by principal use/function for planning.

Do not import unrelated four-zone classifications and do not infer from floor-plan geometry.

Authoring state:
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before comparing with proposed answers;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] combined schema/full-fingerprint/shared-renderer gate added;
- [ ] runtime promotion pending.

## Exact next start point

After the current authoring PR is green and merged, promote both verified Interior p.105 batches record-identically. Expected runtime is 192 → 216 only if exact-equality, full-fingerprint, coverage, answer-position and shared Power TOEIC engine regressions all pass. Do not rewrite records during promotion. Then continue official Grade 2 text order to the next Interior topic. Keep all Grade 3 blockers and source/display gates unchanged.
