# Social Quiz Factory — handoff

Current status: Phase 0, Phase 1, and Phase 2 are complete. Phase 3 implementation tasks 3.1–3.3 are complete; the next unfinished item is Phase 3.4 authoritative current-capital validation. Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` remains unused.

## Architecture status

- `QuizEngine` still owns only question order, scoring, progress, shared countdown/penalty state, and clear/game-over transitions. World geography did not fork or duplicate the engine.
- `QuizEffects` still owns optional SE playback. Shared gameplay remains 180 seconds, -20 seconds per wrong answer, explicit start action, timeout game over, and clear when all questions are answered before zero.
- Existing renderers remain `svg-region` and `choice`.
- World geography adds `world-region` and `world-map-choice` renderers:
  - `world-region` displays one regional crop of the world political map and owns map clicking / tiny-country marker hit targets.
  - `world-map-choice` combines a display-only highlighted world map with the existing choice renderer for reverse questions.
- Country facts, capital policy, region definitions, curriculum metadata, map metadata, and geometry/projection configuration remain outside `QuizEngine`.
- Root `index.html` now has one separate 「世界の国当て」 card. The 15 regions × 7 modes remain selectors inside that family rather than creating more than 100 top-page cards.

## World map/source foundation

- Display source: `homayounmmdy/svg-world-maps` version `1.0.1`.
- Implementation source commit recorded as `06c2de4a159326e527e38e8506e3b9f2705bdf42`.
- The library software is MIT, but its own source states that underlying SVG map paths come from SimpleMaps and carry the SimpleMaps SVG Map Library License; both layers are recorded in `WORLD_MAP_SOURCE` and README rather than assuming the repository MIT license covers all bundled geographic data.
- The source world map uses a Robinson projection and `viewBox="0 0 2000 857"`.
- `world-regions.js` now projects lat/lon to the source Robinson coordinate frame before calculating regional crops and tiny-country markers. Do not revert this to an equirectangular `x=(lon+180)/360` / `y=(90-lat)/180` approximation.
- Pacific-island markers support dateline wrapping by moving negative longitudes into the continuation to the right of x=2000; the regional viewBox intentionally extends beyond the base world-map edge to show those markers.

## Implemented world regions

The playable family contains 15 selectable regional views:

1. 東アジア
2. 東南アジア
3. 南アジア
4. 西・中央アジア
5. 北・西ヨーロッパ
6. 中・南ヨーロッパ
7. 東ヨーロッパ・ロシア
8. 北アフリカ
9. 西・中部アフリカ
10. 東・南部アフリカ
11. 北・中央アメリカ
12. カリブ海地域
13. 南アメリカ
14. オセアニア西部
15. 太平洋島しょ部

Tiny states/islands that are missing from, empty in, or impractically small on the source polygon map use explicit marker coordinates tied to the same stable two-letter country key.

## Implemented modes

All 15 regions can generate the requested seven modes through the same game factory:

1. `easy`: 国旗＋国名＋首都 -> 地図クリック
2. `name`: 国名だけ -> 地図クリック
3. `capital`: 首都だけ -> 地図クリック
4. `flag`: 国旗だけ -> 地図クリック
5. `reverse-name`: 光った国 -> 国名5択
6. `reverse-capital`: 光った国 -> 首都5択
7. `reverse-flag`: 光った国 -> 国旗5択

Reverse choices follow the explicit world-country exception in the architecture rules: correct answer + four distinct wrong answers are sampled only from other validated eligible countries in the same displayed region. This exception is permitted only for one-to-one country name/flag/capital associations and must not be reused for ambiguous specialties, historical associations, statistics, etc.

## Country and capital policy

- Stable answer keys are two-letter ISO-style country codes aligned with the map source where available.
- Japanese display labels and capital strings are stored in `js/data/world-countries.js`, independent of map geometry and presentation.
- Main current-fact review source is the Ministry of Foreign Affairs 「キッズ外務省 世界の国々 基本情報を調べてみよう！」.
- Japanese-name support source metadata also records `umpirsky/country-list` at commit `bd490a163ae4709bbe4b54c4f638f24e032828d2`.
- MEXT curriculum source is stored separately in `js/data/world-curriculum.js`, using the current junior-high social-studies guidance for 「世界の地域構成」.
- Capital modes exclude cases that do not have one simple intended current answer. Existing exclusions include transition/conflict/multiple-capital/status-sensitive cases in country data, and `world-capital-policy.js` additionally excludes Bolivia because Sucre is the constitutional capital while La Paz is the seat of government.
- Country-name and flag modes can still include a country even when it is deliberately excluded from capital modes.

## Validation / CI

- `.github/workflows/social-quiz-tests.yml` runs the canonical social quiz Node suite on Node 22 for relevant PRs and pushes.
- Latest PR-head CI run: `32954818708`.
- Result: **38 tests passed, 0 failed**.
- World-specific regression coverage includes:
  - unique two-letter country keys;
  - all 15 regional groups contain enough playable countries;
  - all 15 × 7 game variants validate;
  - reverse questions always contain exactly five distinct same-region options and include the correct key;
  - capital-mode exclusions are respected;
  - Robinson projection anchor points and Pacific dateline wrapping remain stable;
  - root public entry point includes the new world-country family.
- Existing Japan and shared timer/SE regression tests remain green in the same run.

## Exact next start point

1. Read latest `main`.
2. Recursively read every Markdown under `docs/social-quiz-factory/` in lexical order.
3. Start Phase 3.4.
4. Enumerate every country currently eligible for `easy`, `capital`, and `reverse-capital` modes.
5. Validate each intended capital against current authoritative sources, preferring Ministry of Foreign Affairs / national or international official sources.
6. Explicitly review at least: constitutional capital vs government seat, multiple official capitals, administrative vs legislative/judicial capitals, formal capital transitions, conflict-driven temporary government seats, and diplomatic/status-sensitive cases.
7. If a bare capital prompt is not clearly one-to-one, set or extend the capital eligibility policy rather than guessing. Preserve the country in name/flag modes when appropriate.
8. Add regression tests for every newly identified special case.
9. After Phase 3.4 is complete, proceed to Phase 4.1 colored selectable broad-region support for continents/oceans without modifying `QuizEngine`.

## Important constraints

- Preserve data / core / renderer / effects / presentation separation.
- Do not redesign the UI unless explicitly requested.
- One prompt -> one intended answer.
- Keep regional world maps large enough for reliable clicking; do not collapse back to one tiny full-world answer map.
- Do not recreate or use old `social-quiz/`.
- Do not assume software license == bundled map-data license.
- Do not use blind global distractor sampling. The only sampling exception currently approved is the validated same-region one-to-one world-country reverse drill described above.
- When a materially new playable game family is published, add its top-page 「学習ゲーム」 entry in the same run without removing existing entries.
- At the end of every normal factory run, update `20_EXECUTION_PLAN.md` and fully rewrite this file with the exact next task.
