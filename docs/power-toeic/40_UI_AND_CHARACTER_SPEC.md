# Power TOEIC — UI and character specification

## Core scene

The quiz screen is framed as a training session between two characters.

- **鬼軍曹 / Drill Sergeant**: presents and commands the question.
- **ガリガリの訓練生 / Trainee**: visually represents the learner who answers.

The intended mental model is:

```text
Sergeant gives drill
  -> trainee/user answers
  -> immediate reaction
  -> next drill
  -> repeated training
  -> trainee becomes muscular over time
```

The characters support the quiz; they must never obstruct fast answer input.

## Quiz-screen hierarchy

Mobile-first conceptual layout:

```text
[session progress / mode]

[Sergeant visual]
Sergeant speech / command area

[question sentence with blank]

[choice 1]
[choice 2]
[choice 3]
[choice 4]

[Trainee visual + concise reaction/progression cue]

[concise explanation after answer]
```

Exact placement may change during UI implementation, but one-thumb answer selection and readable sentence text take priority over character art.

## Sergeant behavior

The sergeant may:

- introduce a session;
- present the current drill;
- react briefly to correct/wrong answers;
- announce streaks, milestones, or completion;
- urge continuation in POWER/long sessions.

The sergeant does not compute correctness, pick questions, or decide mastery. UI listens to domain/session events and chooses presentation reactions.

Tone should be exaggerated training-camp comedy rather than abusive personalized insults. Do not use protected-group insults or demeaning statements about the learner's real identity/ability.

## Trainee behavior

The trainee starts visibly skinny and has a small number of predetermined progression stages.

Initial target:

```text
stage_0: very skinny
stage_1: slightly stronger
stage_2: athletic
stage_3: muscular
stage_4: very muscular
stage_5: exaggerated Power TOEIC final form
```

The exact number may change if asset production favors fewer stages, but progression must be data-driven rather than encoded in CSS conditionals scattered across screens.

## Progression semantics

Progression represents accumulated meaningful training.

Do not map specific TOEIC skills to body parts.

Do not award progression purely for tapping answers regardless of correctness. The first deterministic rules should favor events such as:

- correct answers on eligible questions;
- first-time/unseen correct answers;
- successful weak-skill training;
- mixed-test success;
- successful scheduled reviews;
- reaching mastery milestones;
- completion of substantial sessions.

Exact point weights belong in one progression configuration/module and must be covered by tests.

## Character asset contract

Character code should refer to stable semantic asset IDs/stages, not hard-coded scattered filenames.

Example:

```text
sergeant.neutral
sergeant.correct
sergeant.wrong
sergeant.complete

trainee.stage_0.neutral
trainee.stage_0.correct
trainee.stage_0.wrong
...
trainee.stage_5.complete
```

MVP may map multiple semantic states to the same image. Missing optional reaction art must fall back to the stage neutral image.

No game engine is required. Static PNG/WebP/SVG assets and lightweight CSS transitions are sufficient until a later explicit animation phase.

## Home screen

The home screen should emphasize action rather than curriculum explanation.

Primary entry points:

- recommended weakness workout;
- quick drill;
- choose category/training;
- custom workout;
- review due;
- mixed/general test.

The trainee's current visual stage may be visible as a motivation/progression element.

No target-score input or target-score card.

## Training/category selection

Show broad categories first. Allow deeper drill-down when the learner wants to concentrate.

Internal micro-skills remain more granular than the top-level UI.

A user should be able to reach a highly specific drill without seeing dozens of micro-skill tiles at once.

## Weakness workout editor

The system may propose something like:

```text
Weakness workout — 30 questions
- adverb / verb modification: 12
- preposition vs conjunction: 10
- past vs present perfect: 8
```

Before starting, the user may:

- change counts;
- remove a skill;
- add another skill;
- change total question count when compatible.

The editor modifies a workout recipe. It does not manually choose fixed question IDs.

## Session sizes

Finite presets should include at least:

- 5;
- 10;
- 30;
- 50;
- 100.

The app may also provide an endless-style mode that internally works in bounded chunks.

## Feedback interaction

Correct answer feedback should be fast:

- mark the selected/correct choice;
- concise rule/meaning explanation;
- optional small POWER/progression feedback;
- next-question action or auto-advance behavior chosen for usability.

Wrong answer feedback should additionally show the selected wrong form/meaning and the decisive reason the keyed answer is required.

Do not require reading a long lecture before continuing.

## Mixed test presentation

Mixed/general tests must avoid revealing the underlying micro-skill in the question header. The UI may show session progress and broad test mode, but not a label that effectively tells the learner which grammatical rule to apply.

## Accessibility and failure behavior

- Questions remain answerable if character images fail.
- Sound/animation failure must never block the quiz.
- Answer choices must remain readable at mobile widths.
- Do not encode correct/wrong state by color alone.
- Use semantic buttons and keyboard-accessible controls where practical.
