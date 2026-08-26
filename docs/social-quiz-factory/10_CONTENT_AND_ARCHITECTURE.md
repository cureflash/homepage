# Content and architecture rules

## Supported answer modes

### 1. Exact map region
Use when the answer has a unique polygon/region.

Initial uses:
- prefecture name -> prefecture
- prefectural capital -> prefecture
- country name -> country
- capital -> country
- flag -> country
- mountain range / river / plain / industrial region where a suitable selectable region or line representation exists

World-country exact-map questions use regional views rather than one full-world answer map. Tiny island states may receive an explicit marker hit target mapped to the same stable ISO-style country key.

### 2. Colored region selection
Use when the target is broad geography rather than a political polygon.

Initial uses:
- continents
- oceans
- Japanese geographic regions if added
- world regions
- climate zones when represented spatially

Each target region must be visibly distinguishable before answering. Do not rely on tiny unlabeled hit areas.

### 3. 5-choice
Use when answering by buttons rather than directly on a map.

For ambiguous real-world associations, the correct answer plus four distractors are curated as question data and are not sampled blindly. Initial uses include:
- specialties / agricultural products
- industrial products
- historical person -> country
- cultural item -> country/region
- climograph -> climate
- climograph -> city/region when a unique curated set can be constructed

For the world-country reverse drills explicitly requested by the user, a controlled sampling rule is allowed because the tested association is one-to-one:
- highlighted country -> country name;
- highlighted country -> flag;
- highlighted country -> capital only when that country has `capitalQuiz: true`.

In those three modes, the correct answer plus four distinct wrong answers may be sampled from other eligible countries in the same displayed region. Automated validation must confirm all five keys are distinct, all options belong to the current region, and the correct key is present. This exception must not be generalized to ambiguous content.

## World-country data model

Stable country keys use two-letter ISO-style codes that match the world-map source wherever available. Display labels, capital strings, status notes, region membership, and optional marker coordinates are stored separately from renderer geometry.

Representative shape:

```js
{
  code: "AU",
  name: "オーストラリア",
  capital: "キャンベラ",
  region: "oceania-west",
  capitalQuiz: true,
  marker: undefined
}
```

Countries/regions with multiple capitals, an unsettled capital transition, no official capital, or a diplomatic/political issue that prevents one simple intended answer are excluded from capital-based modes with `capitalQuiz: false`. They may remain available for country-name and flag modes when their map key and displayed label are intentionally defined.

## Renderer ownership

- `svg-region`: generic externally sourced SVG region clicking, currently Japan.
- `choice`: ordinary button choices.
- `world-region`: one regional crop of the world political map; owns world-path filtering, small-country markers, and map input.
- `world-map-choice`: display-only highlighted world region plus a `choice` renderer for reverse questions.

`QuizEngine` does not know about geographic bounds, map sources, country codes, flags, or world-region selectors.

## Question schema direction

Every question should be representable with stable data resembling:

```js
{
  id: "unique-id",
  prompt: "...",
  answer: "stable-key",
  answerLabel: "display label",
  options: [],
  source: {
    title: "...",
    publisher: "...",
    year: 2026,
    url: "..."
  },
  curriculum: {
    stage: "elementary|junior-high|high-school",
    subject: "geography|history|civics",
    topic: "..."
  }
}
```

Fields may be factored to game-level metadata when shared. UI must not be responsible for educational metadata.

## Shared gameplay layer

The first-generation social quiz catalog shares a lightweight game loop independent of individual question banks:

- default time limit: 180 seconds;
- wrong answer penalty: 20 seconds;
- timer reaching 0 before all questions are answered: game over;
- answering the final question while time remains: clear, with the remaining time locked at that moment;
- start/correct/wrong SE are invoked through a separate effects adapter rather than embedded in question data or renderers.

A game may override `timeLimitSeconds` or `wrongPenaltySeconds` without changing its questions. Audio failure must not alter scoring, timing, or answer availability.

## UI isolation

The current HTML/CSS is not a permanent design contract.

Required rule:
- game data must not contain CSS selectors or layout assumptions;
- `QuizEngine` must not depend on colors, dimensions, typography, or decorative UI;
- renderers may depend on semantic answer containers but not on a specific site-wide visual design;
- replacing the outer HTML/CSS later must not require rewriting question banks;
- if a renderer needs a visual asset, asset identity belongs to renderer/game configuration, not core scoring logic;
- sound playback belongs to the effects adapter; timer state belongs to core game flow; presentation displays only semantic state such as remaining seconds and game-over/clear result;
- region/mode selectors select a game variant; they do not mutate question answers or scoring behavior.

## Map-data licensing

A software repository license and its bundled geographic data license may differ. Record both when applicable.

For `svg-world-maps`:
- library/software: MIT;
- underlying world SVG path data: SimpleMaps SVG Map Library License, per the library's own source notice.

Do not redistribute the map paths as a standalone raw map collection. The quiz uses them as part of a value-added educational application and surfaces source/license metadata.

## Ambiguity policy

A question is rejected if a reasonable learner could select more than one presented answer and be factually correct.

Examples:
- `みかんで有名な県は？` with 愛媛・和歌山・静岡 in the same options: reject.
- `みかんで有名な県は？` with 和歌山 plus four clearly unrelated prefectures, backed by a stated source/year where necessary: acceptable.
- `日本一のみかん生産量` is acceptable only with an explicit source year and current authoritative statistics.
- a country with several conventionally described capitals must not be forced into a single-capital reverse question; mark it ineligible for capital mode instead.

## Data-source priority

1. MEXT curriculum guidance for scope/placement.
2. Statistics Bureau, MAFF, METI, MLIT, JMA and other relevant Japanese government bodies for facts/statistics.
3. Ministry of Foreign Affairs and other relevant government/international bodies for current country/region names, flags, capitals, and diplomatic-status-sensitive wording.
4. UN and other official international organizations for international data.
5. National or official geographic/statistical authorities for country-specific facts.
6. Stable scholarly/reference sources only when an official source is unsuitable.

Question wording must be newly written. Do not copy textbook prose.
