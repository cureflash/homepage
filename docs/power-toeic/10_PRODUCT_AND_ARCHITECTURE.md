# Power TOEIC — product and architecture

## Product loop

Power TOEIC is built around one loop:

```text
fine-grained diagnosis
  -> select weak micro-skills
  -> concentrated four-choice cloze drilling
  -> immediate feedback
  -> mixed/unlabeled transfer check
  -> delayed review
  -> mastery or renewed concentration
```

The product should feel like a training camp rather than a textbook.

## MVP scope

MVP focuses on Part 5-style four-choice cloze questions only.

The learner-facing format is always:

```text
Sentence with one blank

[A] choice
[B] choice
[C] choice
[D] choice
```

A question can belong to one primary micro-skill and optional secondary tags, but the narrow drill mode must still test one intended decision rule/error pattern at a time.

## Taxonomy structure

Use a two-layer presentation model:

- internal: fine-grained micro-skills, initially approximately 44 for Part 5;
- UI: broader human-readable groups such as parts of speech, verbs, prepositions/conjunctions, pronouns/relatives, vocabulary/usage.

Never expose the complete internal taxonomy as a flat home-screen menu.

## Reuse-first architecture decision

The repository already contains a deliberately separated quiz platform at `subjects/social/quiz/` with:

- `js/core/` for quiz state/gameplay logic;
- `js/renderers/` for input/rendering modes;
- `js/games/` and `js/data/` for content/configuration;
- separate presentation CSS/HTML;
- tests.

Power TOEIC must first audit this implementation and reuse or generalize it before adding a new app framework.

### Preferred outcome after audit

If the existing contracts are compatible, move/shared-copy the minimum generic primitives into a stable shared quiz module and keep social quiz behavior unchanged. Power TOEIC then supplies:

- a four-choice cloze renderer/configuration;
- Power TOEIC-specific session/workout construction;
- mastery/attempt persistence;
- character presentation;
- Part 5 data.

If extracting a shared package creates more risk than value, reuse the proven structure and interfaces without creating cross-project coupling. Document the decision in `90_HANDOFF.md` and `STATUS.json`.

### Framework rule

Do not introduce React, Django, GraphQL, Redis, a game engine, microservices, or a runtime AI service during MVP unless an execution-plan task demonstrates a concrete requirement not reasonably met by the existing static/vanilla-JS stack.

The default MVP technical target is therefore a static mobile-first web app using HTML/CSS/ES modules and deterministic browser-side logic, compatible with the repository's current deployment model.

Persistence should start with the smallest maintainable option:

- browser local storage / IndexedDB for anonymous MVP history if sufficient;
- introduce server persistence only when account sync, multi-device data, payment, or production analytics requires it.

Do not prematurely build authentication/backend infrastructure before the core drill loop is proven.

## Proposed implementation tree

Phase 0 may refine names, but the target structure is:

```text
subjects/english/power-toeic/
  index.html
  styles.css
  assets/
    characters/
  js/
    core/
      session.js
      workout-builder.js
      mastery.js
      review.js
      persistence.js
    data/
      taxonomy.js
      questions/
    renderers/
      cloze-choice.js
    ui/
      home.js
      workout-editor.js
      quiz-screen.js
      result.js
      weakness.js
      character.js
    main.js
  tests/

scripts/power-toeic/
  generate_questions.py
  validate_questions.py
  detect_duplicates.py
  build_bank.py
```

Where possible, the quiz-session primitive or choice renderer should reuse/share existing social-quiz code instead of being independently reimplemented.

## Runtime boundaries

### Question bank
Owns educational content only:

- question ID;
- sentence/stem;
- four choices;
- correct answer;
- concise explanation;
- primary micro-skill;
- secondary tags;
- confusion/error type;
- expected difficulty;
- QA/version metadata.

It must not contain CSS selectors, character stage rules, DOM assumptions, or workout state.

### Session engine
Owns:

- ordered question IDs;
- current index;
- selected answer;
- correctness;
- session completion;
- attempt emission.

It does not decide which skills the learner should train.

### Workout builder
Owns selection recipes, not rendering.

Inputs may include:

- desired question count;
- skill IDs and weights/counts;
- unseen preference;
- review inclusion;
- mixed-label policy;
- random seed.

Outputs an immutable session question list for the started session.

System weakness recommendations and manually built workouts use the same recipe model.

### Mastery service
Consumes attempts and derives per-micro-skill state using deterministic rules.

Initial states may be:

- unknown;
- weak;
- training;
- mixed_pass;
- reviewing;
- mastered.

Do not make state transitions dependent on character UI.

### Review scheduler
Creates future review due dates/queues from mastery events and attempts. Keep first rules simple and testable.

### Character progression
Consumes educational progress totals/events and maps them to one of a small number of character stages. It must not affect which answer is correct or alter mastery calculation.

## Workout model

Every mode must resolve to the same recipe/session mechanism.

Examples:

- QUICK: 5 or 10 questions from a broad pool;
- TRAINING: selected skill/category, selected count;
- POWER: one weak micro-skill, high concentration, 10/30/50/100/endless-style continuation;
- WEAKNESS: system-generated recipe from weak skills;
- CUSTOM: user-edited recipe;
- TEST: broad/mixed selection with micro-skill labels hidden;
- REVIEW: due review items / matched unseen items.

### Weakness-generated workout flow

```text
attempt history
  -> mastery snapshot
  -> ranking of weak skills
  -> generated workout recipe
  -> user editable screen
  -> frozen session question list
  -> common quiz engine
```

The user can remove a suggested skill, add another skill, or adjust question counts before start.

## Question selection policy

Prefer, in order:

1. eligible unseen questions for the requested micro-skill;
2. questions not seen recently;
3. known-error-pattern coverage;
4. previously missed questions only when deliberate review is desired.

Do not repeatedly serve one memorized item when equivalent unseen items exist.

## Mixed test rule

Single-skill drills may display a broad category label, but mixed/general tests must hide micro-skill labels that would reveal the answer strategy.

Mastery cannot be finalized only from labeled drills.

## Mobile-first interaction rule

The quiz screen should make one-answer selection possible with a single tap, then advance with minimal friction. No mandatory long explanation page between every question.

Feedback should be concise by default and expandable if detailed explanation is later added.

## Portability

Question data and mastery/workout logic must not depend on GitHub Pages URLs or site-wide layout. The web app should remain portable to a later mobile wrapper or native client without rewriting the question bank.
