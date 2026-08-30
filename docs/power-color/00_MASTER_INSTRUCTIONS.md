# Power Color — MASTER INSTRUCTIONS

## Purpose
Build a 色彩検定 app focused on visual color identification and color-system drills. Reuse the existing Power TOEIC drill engine; do not fork its learning/session logic.

## Canonical order
1. Grade 3 complete
2. Grade 2 complete
3. Grade 1 complete
4. After all color DB work is complete, move to the explanation-video series defined by the scheduler.

Do not start Grade 2 while Grade 3 is incomplete.

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
- all intended questions are individually QA'd;
- pending = 0;
- schema/reference/duplicate/coverage tests pass;
- the app can consume the verified runtime bank through the shared engine.
