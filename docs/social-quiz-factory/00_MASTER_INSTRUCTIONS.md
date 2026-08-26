# Social Quiz Factory — master instructions

Purpose: continuously expand `cureflash/homepage/subjects/social/quiz/` into a reusable social-studies quiz platform while preserving a strict separation between content/data, quiz logic, renderers, and presentation/UI.

## Every run

1. Read the latest `main`. Never work from stale file contents.
2. Recursively read every Markdown file under `docs/social-quiz-factory/` in lexical path order.
3. Read the current `subjects/social/quiz/` engine, renderer, game-data, tests, and any files that will be changed.
4. Resume from `90_HANDOFF.md` and the first unfinished item in `20_EXECUTION_PLAN.md`.
5. Work from the top of the execution plan. Complete as much as is safe in one run, then update progress and handoff.
6. Do not redesign the game UI unless a task explicitly requires it. UI appearance is provisional and must remain replaceable without rewriting content or quiz logic.
7. Preserve these boundaries:
   - `core`: question order, scoring, progress, timer/penalty state, state transitions, validation hooks.
   - `renderers`: how a user answers (`svg-region`, `choice`, future chart/image renderers).
   - `games/data`: prompts, correct answers, curated distractors, source metadata, curriculum metadata.
   - presentation: HTML/CSS/layout only.
   - effects: optional SE playback; failure or browser audio blocking must never prevent quiz play.
8. New game types should normally be added by supplying data and/or a renderer, not by forking `QuizEngine`.
9. Shared gameplay defaults apply to the social quiz catalog unless a game explicitly overrides them: 180 seconds total, wrong answer penalty of 20 seconds, game over at 0 seconds, and clear when all questions have been answered before the timer reaches 0.
10. The shared SE set is `assets/audio/quiz-start.mp3`, `quiz-correct.mp3`, and `quiz-wrong.mp3`. Start SE and the countdown begin from an explicit user start action so browser autoplay restrictions do not silently suppress the intended start cue.
11. Keep every question one-to-one: one prompt must have one intended correct answer in the presented context.
12. If real-world facts can reasonably have multiple competing answers, do not force a map-click answer. Use curated 5-choice questions whose four distractors make the intended answer unambiguous.
13. Do not generate distractors blindly from the whole dataset. Distractors must be reviewed for ambiguity.
14. For large-area geography such as oceans, continents, regions, climate zones, use visually separated/colored selectable regions rather than requiring a precise point click.
15. Before adding a curriculum topic, verify its placement against current Japanese curriculum guidance, primarily MEXT. Store the source used for the content definition.
16. For changing statistics such as agricultural production, population, industry, trade, or rankings, store a source year and authoritative source. Never present an unstable ranking as timeless fact.
17. Prefer stable facts for early games: prefecture locations, prefectural capitals, countries, capitals, continents, oceans, named geographic features, historical figures and countries, climate classification.
18. Assets must have usable rights. Prefer public-domain/CC0/government/open data. Record source and license where relevant.
19. Add or update automated validation before scaling question volume. Validation must catch duplicate IDs, missing answers, invalid renderer configuration, duplicate options, and multiple identical option keys.
20. After each implementation batch, run available tests/validation and verify the page still loads.
21. Immediately before committing, re-check latest `main` and reconcile concurrent changes.
22. Before ending every run, update `20_EXECUTION_PLAN.md` and fully rewrite `90_HANDOFF.md` with the exact next starting point.

## Core content rule

The first-generation games are recall drills, not explanatory lessons. Each question should test one association only.

Examples:
- `大阪府` -> click Osaka on the map.
- `前橋市` -> click Gunma on the map.
- `キャンベラ` -> select/click Australia in an appropriate region view.
- `インド洋` -> select the colored Indian Ocean region.
- a climograph -> choose one climate from five curated options.
- `ガンディー` -> choose India from five curated countries.

Do not combine multiple reasoning steps into one question until the initial catalog is complete.
