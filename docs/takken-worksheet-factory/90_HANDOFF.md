# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All **163/163** current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed **`takken-concept-office-signs`** using source unit `takken-gyoho-roster-signs` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-office-signs.js` with seven verified atomic knowledge items:

1. `takken-k-office-signs-office-conspicuous-posting` —事務所等ごとに、公衆の見やすい場所へ所定の標識を掲示する義務。
2. `takken-k-office-signs-continuous-facility` —継続的に業務を行える施設を有する事務所以外の場所の標識規制。
3. `takken-k-office-signs-own-subdivision-site` —自ら一団の宅地建物を分譲する場合の物件所在地の標識。
4. `takken-k-office-signs-own-subdivision-guide-office` —自ら行う一団分譲の案内所の標識。
5. `takken-k-office-signs-other-broker-guide-office` —他業者の一団分譲を代理・媒介する案内所の標識。
6. `takken-k-office-signs-exhibition-event` —業務に関する展示会等の実施場所の標識。
7. `takken-k-office-signs-form-varies-by-place` —事務所・案内所・分譲物件所在地等の区分に応じて施行規則上の標識様式が異なること。

Primary authority is the current 宅地建物取引業法50条 and 宅地建物取引業法施行規則19条. e-Gov shows the施行規則 as **令和8年4月1日施行・現在施行**. Article 50 requires signs at offices etc. and prescribed other business locations in places conspicuous to the public; Regulation 19 enumerates the relevant non-office business-location categories and prescribes different sign forms by place category.

Existing verified-question evidence was reconciled conservatively. **No existing Phase 2/3 question is newly mapped to `takken-concept-office-signs`.** `takken-q-07-001` already maps to `takken-concept-roster` and only establishes broadly that the Act contains roster/sign provisions; it does not directly test the detailed posting locations, conspicuous-place requirement or place-specific forms. All seven office-sign items therefore remain explicit Phase 4.3 question-coverage deficits. The prior sixteen deficits remain unchanged; no false coverage was introduced.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — **9/113 concepts modeled**
- Canonical knowledge items: **37**
- Existing verified questions mapped: **9**
- Explicit unmapped knowledge gaps: **23** (4 license-transfer + 6 license-change/closure + 6 roster details + 7 office-sign details)
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-takkenshi-registration`** using source unit `takken-shi-registration`.

Preserve all 37 knowledge items, nine valid mappings, and all twenty-three explicit deficits. Model the宅地建物取引士の資格登録 from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
