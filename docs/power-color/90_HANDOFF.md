# Power Color — HANDOFF

## Active work
Grade 1 is active by explicit user override. Grade 2 remains 348 verified / pending 0 and incomplete at its source-blocked frontier. Grade 3 remains 223 verified / pending 0 and incomplete with its recorded blockers. No lower-grade source/display gate is relaxed.

Canonical Grade 1 working set: `STATUS.json`, `20_EXECUTION_PLAN.md`, `60_GRADE1_EXECUTION_PLAN.md`, `61_GRADE1_SOURCE_INVENTORY.md`, `62_GRADE1_SPEC.md`.

## Grade 1 frontier
All current official Grade 1 textbook TOC content items through p.160 have now been source-audited in order. Earlier detailed decisions remain in `61_GRADE1_SOURCE_INVENTORY.md` and individual audit files.

p.152 `資料・光と色（1） — 色の知覚` is `SOURCE_RESOLVED` to the current AFT official first-stage sample slice. The sample directly establishes retinal-illuminance-dependent hue change, the Bezold–Brücke phenomenon, invariant wavelengths, and through the official answer key the 474 nm / 571 nm example. Four text-only records were created pending-first and independently re-solved 4/4 verified, A/B/C/D=1/1/1/1. No diagram geometry or monitor-facing judgment is used.

p.157 `資料・光と色（2） — 相関色温度と演色評価数` is `SOURCE_RESOLVED` to narrow current CIE/JLMA definitions: CCT is tied to the nearest Planckian-radiator chromaticity and expressed in K; CIE 1974 general colour rendering index Ra is the mean of eight specified special indices; JLMA explains Ra as a colour-appearance/reproducibility indicator whose higher values mean better reproducibility. Four text-only records were independently re-solved 4/4 verified, A/B/C/D=1/1/1/1.

Both dedicated global full-fingerprint/nonvisual/shared-renderer gates and the normal Power Color regression passed workflow `33815760564`; PR #728 merged as `041b51b9a5346d602b5d8fdc7c2d0c6be9751e95`.

p.160 `資料・CMF® — 素材と工法` is `SOURCE_BLOCKED`. AFT public material exposes the heading/order only, not the appendix's closed material inventory, manufacturing/finishing-process set, pairings, selection criteria, exceptions, or diagrams. Generic CMF/materials-engineering taxonomies are rejected as substitutes. No authoring.

The canonical Grade 1 runtime/promotion path now exists on the existing shared Power TOEIC question-bank/workout/session engine. p.006 `pc1.culture.ancient_europe_materials` 8/8 verified records were promoted record-identically into `grade1-runtime.json`. The promotion gate enforces runtime↔authoring deep equality, full-fingerprint uniqueness, answer-position balance and shared-engine execution. Power Color CI `33817291831` succeeded and PR #730 merged as `273e5f4ebd3204e0f2405c7f72b93eab13d8e1a4`. Runtime is 8 verified / pending 0 across one skill; `productionApproved` remains false.

## Source/display boundary
Do not reconstruct unpublished AFT wording, diagrams, formulas, examples, thresholds, geometry, RGB/HEX/display values, monitor-facing judgments, exact business/CMF/fashion process sequences, fiber-length color-development rules, VMD initiative/color procedures, AFT-specific near/mid/far color-planning prescriptions, or the p.160 material/process set. Do not repeat recorded rejected source routes without new explicit evidence.

## Exact next start point
Promote the existing p.007 `pc1.culture.medieval_early_modern_europe_materials` batch 8/8 verified records record-identically through the canonical Grade 1 runtime gate. Continue only verified authoring in official TOC order; do not fork a Grade 1 engine and do not promote blocked or monitor-dependent material.
