# Content and architecture rules

## Supported answer modes

### 1. Exact map region
Use when the answer has a unique polygon/region.

Initial uses:
- prefecture name -> prefecture
- prefectural capital -> prefecture
- country name -> country
- capital -> country
- mountain range / river / plain / industrial region where a suitable selectable region or line representation exists

### 2. Colored region selection
Use when the target is broad geography rather than a political polygon.

Initial uses:
- continents
- oceans
- Japanese geographic regions if added
- world regions
- climate zones when represented spatially

Each target region must be visibly distinguishable before answering. Do not rely on tiny unlabeled hit areas.

### 3. Curated 5-choice
Use when real-world associations overlap or several answers could be defensible without context.

Initial uses:
- specialties / agricultural products
- industrial products
- historical person -> country
- cultural item -> country/region
- climograph -> climate
- climograph -> city/region when a unique curated set can be constructed

The correct answer plus four distractors are part of the question data. They are not sampled blindly at runtime.

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

## UI isolation

The current HTML/CSS is not a permanent design contract.

Required rule:
- game data must not contain CSS selectors or layout assumptions;
- `QuizEngine` must not depend on colors, dimensions, typography, or decorative UI;
- renderers may depend on semantic answer containers but not on a specific site-wide visual design;
- replacing the outer HTML/CSS later must not require rewriting question banks;
- if a renderer needs a visual asset, asset identity belongs to renderer/game configuration, not core scoring logic.

## Ambiguity policy

A question is rejected if a reasonable learner could select more than one presented answer and be factually correct.

Examples:
- `みかんで有名な県は？` with 愛媛・和歌山・静岡 in the same options: reject.
- `みかんで有名な県は？` with 和歌山 plus four clearly unrelated prefectures, backed by a stated source/year where necessary: acceptable.
- `日本一のみかん生産量` is acceptable only with an explicit source year and current authoritative statistics.

## Data-source priority

1. MEXT curriculum guidance for scope/placement.
2. Statistics Bureau, MAFF, METI, MLIT, JMA and other relevant Japanese government bodies for facts/statistics.
3. UN and other official international organizations for international data.
4. National or official geographic/statistical authorities for country-specific facts.
5. Stable scholarly/reference sources only when an official source is unsuitable.

Question wording must be newly written. Do not copy textbook prose.
