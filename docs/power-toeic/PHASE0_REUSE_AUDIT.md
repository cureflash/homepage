# Power TOEIC — Phase 0 reuse audit

## Scope

This audit compares the existing `subjects/social/quiz/` implementation with Power TOEIC V1 requirements before any new framework or shared package is introduced.

## Existing social-quiz architecture

The existing social quiz is a static ES-module application with these boundaries:

- `js/core/quiz-engine.js`: question order, scoring, timer, wrong-answer penalty, progression through a finite game, result state;
- `js/core/game-validator.js`: game/data validation;
- `js/core/quiz-effects.js`: optional sound effects;
- `js/renderers/choice-renderer.js`: generic DOM button-choice input;
- additional geography-specific renderers;
- `js/games/` and `js/data/`: game configuration and content;
- `main.js`: DOM wiring, game selection, renderer selection;
- `tests/`: Node test suite.

This separation is already close to the maintainability goals for Power TOEIC and should be used as the architectural template.

## File-level reuse decision

| Existing file/area | Decision | Reason |
|---|---|---|
| `js/renderers/choice-renderer.js` | **Reuse contract and behavior; initially copy/adapt into Power TOEIC rather than cross-import** | Its API (`setAnswerHandler`, `render`, `showResult`) is generic and well suited to four-choice cloze input. Direct cross-import would create an undesirable English-app -> social-app dependency. A future shared package may be extracted only if a second consumer proves the duplication costly. |
| `js/core/quiz-engine.js` | **Do not reuse implementation as Power TOEIC session core** | It hard-codes a timed game model: 180-second default, wrong-answer time penalty, game-over at zero, score/result strings, auto-advance timers, and browser `window` timers. Power TOEIC needs untimed/optional-timed study sessions, attempt events, workout recipes, long/endless chunks, mastery/review hooks, and no game-over penalty model. |
| `js/core/quiz-engine.js` public interaction pattern | **Reuse concepts only** | Constructor injection of renderer/UI/effects and renderer callback wiring are useful patterns. |
| `js/core/game-validator.js` | **Do not reuse directly** | It validates social-game renderer/configuration contracts rather than Power TOEIC question-bank schema. Reuse the approach of strict up-front validation, but implement Power TOEIC-specific validators. |
| `js/core/quiz-effects.js` | **Optional pattern reuse later** | Sound/effects adapter isolation is correct, but Power TOEIC V1 does not require audio for the first implementation milestone. |
| `js/main.js` | **Do not reuse directly** | It contains social-game registry, world controls, map credit, timer UI, and social-specific renderer selection. Reuse only the composition-root pattern. |
| geography renderers | **Do not reuse** | Domain-specific. |
| `tests/quiz-engine.test.js` | **Keep unchanged as social regression protection** | It already characterizes the timed social game behavior and demonstrates why that engine should not be generalized casually. |
| project structure (`core / renderers / games-data / presentation / tests`) | **Reuse** | This is the main architectural asset and matches Power TOEIC's maintainability requirements. |

## Key architectural conclusion

Do **not** extract or rewrite the existing social `QuizEngine` for Power TOEIC.

The safest maintainable boundary is:

```text
subjects/social/quiz/
  existing timed social QuizEngine (unchanged)

subjects/english/power-toeic/
  Power TOEIC-specific study Session core
  Power TOEIC-specific question/workout/mastery modules
  a small choice renderer with the same proven renderer contract
```

The first Power TOEIC implementation should intentionally mirror the proven social-quiz structure without creating runtime coupling between subject applications.

If both applications later accumulate genuinely identical renderer/session primitives, a shared package can be extracted with regression tests at that time. Premature extraction now would couple a stable published social game to a still-evolving TOEIC study model.

## Canonical implementation path

Use:

`subjects/english/power-toeic/`

Initial target structure:

```text
subjects/english/power-toeic/
  index.html
  styles.css
  js/
    core/
      session.js
    renderers/
      choice-renderer.js
    data/
    ui/
    main.js
  tests/
```

Offline generation/QA remains under:

`scripts/power-toeic/`

## Contracts to preserve from the existing design

### Renderer contract

A Power TOEIC choice renderer should keep this minimal interface:

- `setAnswerHandler(handler)`
- `render(question)`
- `showResult(result)`

Renderer code owns DOM answer buttons and visual correct/wrong states. It must not own answer truth, attempt history, weakness ranking, or mastery.

### Session composition contract

The session core should receive dependencies rather than query arbitrary DOM globally. `main.js`/UI wiring remains the composition root.

### Data/UI isolation

Question data must not contain CSS selectors or character layout assumptions. Character visuals subscribe to session events and remain removable without breaking quiz play.

## Why a new framework is not justified now

Current V1 requirements can be implemented with the repository's existing static deployment model and ES modules:

- finite and long four-choice sessions;
- local attempt persistence;
- deterministic mastery rules;
- workout recipes;
- weakness ranking;
- character presentation;
- offline-generated question banks.

Therefore Phase 0 finds no concrete requirement for React, Django, GraphQL, Redis, a game engine, or runtime AI.

## Regression policy

No social-quiz source file needs modification for the initial Power TOEIC implementation. Existing `quiz-engine.test.js` already freezes the timed-game behavior. Power TOEIC should add its own session/renderer tests in its own tree before feature scaling.

If a later task proposes extraction of any social file into shared code, add explicit characterization tests for the exact extracted contract before moving it.
