# Power Color — PRODUCT AND ARCHITECTURE

## Product
A visual drill app for 色彩検定. The learner repeatedly identifies colors, names, PCCS attributes and visual relationships.

The product strategy is micro-skill overtraining: decompose every color-facing exam operation into the smallest independently trainable discrimination, then supply enough verified variation to make that operation automatic.

## Reuse boundary
Power TOEIC remains the reference drill engine. Power Color imports the existing `QuizSession`, `WorkoutBuilder`, and `InMemoryQuestionBank` implementation rather than copying them.

```text
Power Color data
  -> InMemoryQuestionBank
  -> createWorkoutRecipe / selectQuestionIds
  -> QuizSession
  -> ColorChoiceRenderer
```

## Canonical Web path
`qualifications/color-certification/`

## Skill architecture
Taxonomy is deliberately finer than textbook chapter boundaries.

```text
Grade
  -> system/domain
    -> micro-skill
      -> verified question pool
```

Example Grade 3 PCCS decomposition:

```text
PCCS
├─ color_to_hue
├─ hue_to_color
├─ color_to_tone
├─ tone_to_color
├─ color_to_notation
└─ notation_to_color

Relations
├─ complementary_hue
├─ same_hue
├─ same_tone
├─ hue_difference
└─ tone_difference
```

A micro-skill should correspond to one answer operation. If two questions require different mental procedures, they belong to different micro-skills even if the official textbook discusses them in one section.

## Volume architecture
Power TOEIC-style volume is a product requirement, but count is subordinate to meaningful state-space coverage.

- Target about 100 verified drills per micro-skill when enough distinct states/combinations exist.
- Exhaust finite state spaces rather than manufacturing paraphrase duplicates.
- Generate volume from direction reversal, hue/tone states, distractor neighborhoods, valid pairings, orderings, scheme conditions and mixed visual configurations.
- Keep isolated-drill pools separate from mixed transfer-test pools.
- Store per-skill counts and coverage metrics so the learner and QA pipeline can distinguish “100 questions” from “100 cosmetic variants of 10 facts.”

## Data split
`data/grade3-colors.json`
: canonical Grade 3 color master.

`data/grade3-runtime.json`
: only verified questions exposed to the browser.

Later authoring/pending banks may be added separately. Pending questions must never leak into runtime.

## Runtime question extension
The shared required fields remain unchanged:
`id/version/skillId/categoryId/sentence/choices/correctIndex/explanation`.

Power Color adds optional metadata:
- `colorRef`
- `presentation.kind`
- `presentation.promptColorRef`
- `presentation.choiceColorRefs`
- `sourceRefs`
- `validationStatus`

The shared session engine ignores these fields. `ColorChoiceRenderer` resolves color refs against `grade3-colors.json`; display hex is not duplicated into question records.

## Presentation kinds
- `prompt_color`: show one swatch, answer with text choices.
- `choice_colors`: show a named prompt, answer by choosing one of four swatches.

Future PCCS pair/multi-color renderers should remain presentation adapters; answer truth stays in the question record.

## Required answer feedback
Every answered visual question must re-present the truth explicitly; highlighting the correct choice alone is not sufficient.

- `prompt_color` / 色→名前: after answering, show an answer card containing the correct color name and a large repeat swatch of the target color, followed by the explanation.
- `choice_colors` / 名前→色: after answering, show an answer card containing the correct color name (and reading when available), followed by the explanation. The learner must not have to infer the answer only from an outlined swatch.
- Future PCCS questions must use the same rule: after selection, display the target visual state together with the canonical hue/tone/notation label that was being trained.
- Answer feedback is generated from canonical master refs, not duplicated hard-coded color values in individual questions.

## Learning loop

```text
choose one micro-skill
  -> concentrated drill
  -> record attempts/mastery
  -> repeat weak discrimination
  -> delayed review
  -> mixed/unlabeled transfer check
  -> mastered or return to isolated drill
```

The UI must permit direct selection of a single micro-skill. Broad “3級総合” modes are secondary aggregation views, not the primary taxonomy.

## Important limitation
Monitor RGB is practice UI, not a physical colorimetric substitute for the official printed text/card/exam.
