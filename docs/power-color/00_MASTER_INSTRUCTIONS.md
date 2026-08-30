# Power Color — MASTER INSTRUCTIONS

## Purpose
Build a 色彩検定 app focused on visual color identification and color-system drills. Reuse the existing Power TOEIC drill engine; do not fork its learning/session logic.

## Canonical order
1. Grade 3 complete
2. Grade 2 complete
3. Grade 1 complete
4. After all color DB work is complete, move to the explanation-video series defined by the scheduler.

Do not start Grade 2 while Grade 3 is incomplete.

## Core learning doctrine: micro-skill first, volume second
Power Color is not a broad mock-exam app first. Its primary mode is deliberate overtraining of narrowly isolated visual skills.

Rules:
- One micro-skill must test one decision only.
- Split a skill again whenever the learner could use materially different reasoning to answer it.
- Do not combine hue, tone, notation and scheme recognition into one labeled drill merely because they share PCCS.
- Learners must be able to select one micro-skill and drill it repeatedly without unrelated knowledge leaking into the cue.
- Mixed/unlabeled tests are transfer checks after isolated drills; they are not a replacement for isolated drills.
- Default content target is approximately 100 verified drills per micro-skill when the state space supports genuinely distinct questions.
- For finite systems where 100 meaningfully distinct questions would require template spam, exhaust the useful state space instead, then create only defensible transformations/combinations. Never pad to 100 with cosmetic wording changes.
- Question volume must come from distinct color states, directions, contrasts, pairings, arrangements and conditions, not from paraphrasing the same item.
- Weakness/mastery/review are tracked per micro-skill, so a learner can repeatedly attack exactly the failed discrimination.

## Grade 3 scope
Color-facing content only:
- 慣用色名: 色→名前 / 名前→色
- PCCS: 色相 / トーン / 記号
- 補色色相
- 同一色相 / 同一トーン
- 色相差 / トーン差
- 配色判定
- 明度グラデーションなど公式出題例に現れる視覚判定

Non-color-identification chapters are out of scope.

## Grade 3 minimum micro-skill split
At minimum, keep these abilities independently drillable:
- `pc3.conventional.color_to_name`
- `pc3.conventional.name_to_color`
- `pc3.pccs.color_to_hue`
- `pc3.pccs.hue_to_color`
- `pc3.pccs.color_to_tone`
- `pc3.pccs.tone_to_color`
- `pc3.pccs.color_to_notation`
- `pc3.pccs.notation_to_color`
- `pc3.relation.complementary_hue`
- `pc3.relation.same_hue`
- `pc3.relation.same_tone`
- `pc3.relation.hue_difference`
- `pc3.relation.tone_difference`

If official scope/sample questions reveal a distinct solving operation such as value-ordering/gradient recognition, add another micro-skill rather than hiding it inside a broad category.

## Sources
Primary authority for scope and sample-question patterns is the 色彩検定協会 official site/current official materials.
For `grade3-colors.json`, the association's public “色彩検定3級の慣用色” reference page is used to enumerate the 64 names. That page explicitly says its RGB/hex values refer to 『決定版 色の名前 507』. Therefore those RGB/hex values are display-only references, not a claim that a monitor reproduces the printed exam color.

Never invent a PCCS mapping or display value when the source is not confirmed.

## Data/QA rules
- Stable IDs.
- Color master and question bank are separate.
- Generated questions start `pending_validation`.
- Runtime bank may contain only individually checked `verified` questions.
- Four distinct choices, one correct answer.
- No bulk verified flagging.
- Check wrong-answer plausibility, answer-position balance, duplicate/near-duplicate questions, color-ref integrity, grade-range integrity.
- Monitor-dependent color differences must be disclosed in the app.
- Track generated / checked / verified / needs_revision / rejected / pending counts per micro-skill.
- Coverage reports must show both question count and state-space coverage; raw count alone is not completion evidence.

## Engine rule
Reuse:
- `subjects/english/power-toeic/js/core/session.js`
- `subjects/english/power-toeic/js/core/workout-builder.js`
- `subjects/english/power-toeic/js/data/question-bank-adapter.js`

Color-specific code may render swatches and adapt color metadata, but must not duplicate QuizSession/selection logic.

## Completion gate
Grade 3 is complete only when:
- the Grade 3 color master is complete for all in-scope systems;
- all Grade 3 micro-skills are implemented;
- each micro-skill has exhausted its defined useful coverage target;
- all intended questions are individually QA'd;
- pending = 0;
- schema/reference/duplicate/coverage tests pass;
- the app can consume the verified runtime bank through the shared engine.
