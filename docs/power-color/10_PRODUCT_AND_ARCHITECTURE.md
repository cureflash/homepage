# Power Color — PRODUCT AND ARCHITECTURE

## Product
A visual drill app for 色彩検定. The learner repeatedly identifies colors, names, PCCS attributes and visual relationships.

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

## Important limitation
Monitor RGB is practice UI, not a physical colorimetric substitute for the official printed text/card/exam.
