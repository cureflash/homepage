# Power Color — HANDOFF

## Current checkpoint
Grade 3 conventional colors.

Completed:
- 64/64 Grade 3 慣用色名 ingested into the color master.
- Source/reference-color caveat recorded and the current association reference page rechecked.
- Two first micro-skills established.
- Existing runtime remains 16 verified beta questions (8 colors × 2 directions).
- `pc3.conventional.color_to_name` authoring checkpoints 0017-0071 contain 55 generated records, all created as `pending_validation` first and then independently resolved against `grade3-colors.json`; 55 verified / 0 needs_revision / 0 rejected / 0 pending.
- Latest checkpoint 0065-0071 covers c3-057, 058, 059, 060, 061, 062 and 064; correct-index distribution A/B/C/D = 2/2/2/1.
- Combined runtime + authoring `color_to_name` coverage is 63 unique master refs with no target reuse.
- `c3-conventional-052` スカイブルー remains intentionally excluded from monitor-only color→name: the association's current reference page still gives it the same `8ED1E0` display value as `c3-conventional-017` 空色, so the state is not visually discriminable in this presentation.
- A dedicated coverage test now gates the full late checkpoints and proves that c3-052 is the only missing master ref.
- Shared Power TOEIC `QuizSession`, `WorkoutBuilder`, and `InMemoryQuestionBank` remain the only drill engine.

Coverage now staged/verified:
- `color_to_name`: 63/64 master refs covered; useful monitor-discriminable state space complete with c3-052 explicitly deferred.
- `name_to_color`: 8/64 unique master colors covered.

Not complete:
- remaining `name_to_color` conventional-color coverage;
- promotion of verified authoring records into `grade3-runtime.json` after the conventional-color gate;
- PCCS master and all PCCS questions;
- relationship/scheme questions;
- full Grade 3 independent QA.

## Next exact start point
Begin `pc3.conventional.name_to_color` at question `0017` with `c3-conventional-002` 珊瑚色, the first master color not covered by the 8 verified runtime name→color questions. Generate additions as `pending_validation` first, independently resolve each answer from `grade3-colors.json`, then record individual verdicts. Do not start PCCS until conventional-color coverage and its gate are complete.
