# Power TOEIC — platform-neutral contracts V1

This document freezes the JSON-compatible data shapes shared by the Web reference implementation and the future Swift/SwiftUI client. It records domain contracts, not JavaScript class layout or DOM details.

## General rules

- IDs are stable non-empty strings.
- Stored timestamps are ISO-8601 compatible strings.
- Question answer indexes are zero-based integers `0...3` on both platforms.
- Enums use the exact string values listed here so JavaScript JSON and Swift `Codable` can round-trip the same fixtures.
- Optional production-only metadata may be added by the external content track, but these required runtime fields must remain decodable.
- UI-only objects, DOM nodes, CSS state and source asset filenames are not part of these contracts.

## Skill

```json
{
  "id": "p5.example.skill",
  "label": "Learner-facing label",
  "categoryId": "p5.example.category"
}
```

Required fields: `id`, `label`, `categoryId`.

## Question

```json
{
  "id": "question-id",
  "version": 1,
  "skillId": "p5.example.skill",
  "categoryId": "p5.example.category",
  "sentence": "The sentence has ____ blank.",
  "choices": ["A", "B", "C", "D"],
  "correctIndex": 2,
  "explanation": "Concise explanation."
}
```

Required runtime fields:

- `id: string`
- `version: positive integer`
- `skillId: string`
- `categoryId: string`
- `sentence: string`
- `choices: exactly four distinct non-empty strings`
- `correctIndex: integer 0...3`
- `explanation: string`

The content track may attach QA/taxonomy metadata. Runtime code must not require source-generation fields to answer a question.

## WorkoutRecipe

```json
{
  "mode": "POWER",
  "totalCount": 100,
  "skillAllocations": [{"skillId":"p5.example.skill","count":100}],
  "selectionPolicy": "standard",
  "labelPolicy": "show_skill",
  "seed": 1,
  "endless": false
}
```

Exact enums:

- `mode`: `QUICK | TRAINING | POWER | WEAKNESS | CUSTOM | TEST | REVIEW`
- `selectionPolicy`: `standard | review_due`
- `labelPolicy`: `show_skill | hide_skill`

Each `skillAllocations` entry contains `skillId` and exactly one of positive `count` or positive numeric `weight`.

## Attempt

Emitted by `QuizSession` and persisted as learning evidence.

```json
{
  "questionId": "question-id",
  "questionVersion": 1,
  "skillId": "p5.example.skill",
  "selectedIndex": 2,
  "correctIndex": 2,
  "correct": true,
  "responseMs": 1420,
  "answeredAt": "2026-08-27T00:00:00.000Z",
  "context": "training"
}
```

`context` is exactly `training | mixed | review`.

## MasterySnapshot

```json
{
  "skillId": "p5.example.skill",
  "state": "training",
  "attempts": 4,
  "correct": 3,
  "accuracy": 0.75,
  "recentAttempts": 4,
  "recentCorrect": 3,
  "recentAccuracy": 0.75,
  "mixed": {"attempts":0,"correct":0,"accuracy":0},
  "review": {"attempts":0,"correct":0,"accuracy":0}
}
```

`state` is exactly:

`unknown | training | weak | mixed_pass | reviewing | mastered`.

Accuracy fields are ratios `0...1`.

## ReviewEntry

```json
{
  "questionId": "question-id",
  "questionVersion": 1,
  "skillId": "p5.example.skill",
  "dueAt": "2026-08-28T00:00:00.000Z",
  "intervalIndex": 0,
  "status": "scheduled",
  "lastAttemptAt": "2026-08-27T00:00:00.000Z"
}
```

V1 review entries use `status: scheduled`. Future statuses require a contract version change or backward-compatible decoder handling.

## ProgressionState

Persistent state is:

```json
{
  "points": 42,
  "stage": 2
}
```

`points` is non-negative. `stage` is integer `0...5`.

`applyProgressionEvent` may additionally return transient `earned`; `earned` is not required in persisted progression state.

Progression event inputs used by the Web engine are behavior inputs rather than persisted model records:

- attempt: `{type:"attempt", correct:boolean, firstCorrect:boolean, context:"training|mixed|review"}`
- mastery: `{type:"mastery", newlyMastered:boolean}`
- session completion: `{type:"session_complete", questionCount:number}`

## QuestionReport

```json
{
  "id": "question-id@1:2026-08-27T00:00:00.000Z",
  "questionId": "question-id",
  "questionVersion": 1,
  "reason": "ambiguous",
  "detail": "Optional learner note",
  "createdAt": "2026-08-27T00:00:00.000Z"
}
```

`reason` is exactly:

`ambiguous | unnatural_english | wrong_answer | wrong_explanation | other`.

## Semantic asset IDs

Cross-platform character/audio references use semantic IDs instead of source filenames. V1 namespaces are:

- `sergeant.*`
- `trainee.stage_0.*` through `trainee.stage_5.*`
- `audio.*`

Examples: `sergeant.neutral`, `trainee.stage_3.correct`, `audio.correct`.

The JavaScript `AssetCatalog` and future `AssetCatalog.swift` map these IDs to platform resources. Source-specific Irasutoya/OtoLogic filenames are not domain model fields.

## Persistence envelope

Web V1 persistence remains versioned separately from the individual model contracts:

```json
{
  "version": 1,
  "attempts": [],
  "reviewEntries": [],
  "progression": {"points":0,"stage":0}
}
```

Swift persistence may use a different storage mechanism, but decoding/encoding the platform-neutral records must preserve the same semantic fields.

## Validation implementation

`subjects/english/power-toeic/js/data/platform-contracts.js` validates these frozen V1 shapes. It deliberately does not validate production question-authoring/QA metadata; that belongs to the external content track.

Phase 9.2 conformance fixtures will provide complete deterministic input/output examples for JavaScript and Swift implementations using these contracts.
