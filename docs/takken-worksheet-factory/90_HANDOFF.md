# 宅建 Worksheet Factory — HANDOFF

## Current state

The portable Takken worksheet foundation is present on `main`, and the first three normal generation batches are complete.

Canonical files:

- `docs/takken-worksheet-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/takken-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/takken-worksheet-factory/STATUS.json`
- `docs/takken-worksheet-factory/90_HANDOFF.md`

Canonical implementation:

- `qualifications/takken/`

Implemented foundation:

- portable static shell with relative paths/config separation
- shared structured unit data model
- shared `study / worksheet / answer` renderer
- deterministic seeded cloze selection from explicit `terms`
- A4 print/PDF layout and source notes
- verified-only public catalog
- automated validation at `tests/takken-worksheet-factory-validation.mjs`

## Generated backlog

Queue items 1-20:

- `qualifications/takken/data/pending-units.js`

Queue items 21-40:

- `qualifications/takken/data/pending-units-21-40.js`

Queue items 41-60:

- `qualifications/takken/data/pending-units-41-60.js`

All 60 units remain `pending_factcheck`. None is published. `qualifications/takken/data/public-catalog.js` remains empty and verified-only.

### Newly generated items 41-60

41. 時効
42. 物権変動・対抗要件
43. 共有
44. 抵当権
45. 債務不履行・損害賠償
46. 契約解除
47. 危険負担・同時履行の抗弁
48. 売買・手付
49. 民法上の契約不適合責任
50. 賃貸借
51. 敷金・賃借権の対抗関係
52. 借地権
53. 定期借地権等
54. 借家権
55. 定期建物賃貸借
56. 相続人・法定相続分
57. 相続の承認・放棄
58. 遺言・遺留分
59. 区分所有法
60. 不動産登記法

This completes the ordered `権利関係` generation queue.

Generation-stage source candidates used for 41-60 are centered on:

- e-Gov `民法`, `occasion_date=20260401`
- e-Gov `借地借家法`, `occasion_date=20260401`
- e-Gov `建物の区分所有等に関する法律`, `occasion_date=20260401`
- e-Gov `不動産登記法`, `occasion_date=20260401`
- 法務局「不動産登記に関するよくある質問」 for the practical 甲区/乙区 explanation

These are generation-stage source candidates only. They must be independently reopened during a later explicit FACTCHECK batch before publication.

## Content design notes for 41-60

The generated wording intentionally stays close to high-confidence statutory structure and avoids overloading pending material with edge cases. Examples include:

- acquisition prescription 20 years / 10 years with good faith and no negligence at commencement; claim prescription 5 years from knowledge or 10 years from ability to exercise
- Civil Code article 177 registration rule for third-party opposability
- earnest-money cancellation before the other party begins performance
- ordinary land lease 30-year baseline and building-registration opposability rule
- general fixed-term land lease 50+ years
- fixed-term building lease written/electronic contract plus pre-contract explanation
- inheritance three-month deliberation period and family-court renunciation
- condominium common parts and real-estate registration record structure

Do not interpret this conservative generation wording as completed legal review. FACTCHECK remains required before learner-facing publication.

## Validation state

`tests/takken-worksheet-factory-validation.mjs` now loads all three pending batch files and checks the complete sequence through unit 60.

It checks:

- 2026 exam year and `2026-04-01` law cutoff
- exact sequential unit order through 60
- exact total pending count of 60
- unique unit/fact/sentence IDs
- required metadata
- HTTPS source records and source-reference resolution
- exact `terms[]` ↔ `{{...}}` placeholder matching
- `pending_factcheck` status consistency
- no pending unit leaking into the public catalog
- renderer verified-only filtering
- deterministic seeded RNG guard
- print/PDF path guard

The container still cannot resolve `github.com`, so `git clone` and therefore local Node execution of the repository validation remain unavailable in this run. Do not claim validation or CI execution until a later run actually confirms it.

## Required source baseline

Target: 2026 (令和8) 宅地建物取引士資格試験.

Use `lawAsOf: 2026-04-01` for all generated units.

Primary official source families:

- e-Gov法令検索
- 国土交通省
- 一般財団法人不動産適正取引推進機構（RETIO）
- 法務省
- 国税庁
- 総務省・自治体等

Do not trust prior-year explanations where amendments may change the result.

## Exact next start

Queue item 61:

`city-planning-area` — 都市計画区域・準都市計画区域

Normal next run should resume at item 61 and target the next 20 sequential units. Because the legal-restrictions queue ends at 78, a full 20-unit batch will cross into `税・その他` and should cover items 61-80 if authoritative generation is safe.

Every new unit must remain `pending_factcheck`, be appended to `STATUS.json.unverified_backlog`, and remain outside the public catalog.

## FACTCHECK policy

Do not fact-check the 60-unit backlog automatically. FACTCHECK remains a separate explicit operation requested by the user.
