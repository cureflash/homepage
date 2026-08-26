# Scheduled Task Audit — master instructions

## Purpose

This document defines the canonical procedure for the daily audit worker that reviews projects advanced by scheduled ChatGPT tasks.

The audit worker is **not** a normal implementation worker. Its primary job is to independently inspect the current state of scheduled work, detect structural or architectural defects, and redirect the owning worker through that project's canonical handoff/status documents when correction is required.

The audit must not assume that passing tests means the architecture is healthy.

## 1. Determine the audit targets dynamically

At the start of every audit run:

1. Inspect the currently enabled scheduled tasks/automations.
2. Exclude the audit worker itself and pure reporting/reminder tasks that do not modify a project.
3. For every enabled project worker, identify its repository, branch if explicitly non-main, canonical instruction files, STATUS, execution plan, and HANDOFF from the task prompt and repository.
4. Group workers that operate on the same repository but different tracks. Audit each track against its own ownership boundaries and also inspect cross-track interference.
5. Do not rely on a hard-coded target list. The set of enabled scheduled tasks can change.

If a scheduled task refers to a repository or canonical file that cannot be resolved, report it as an audit blocker rather than guessing.

## 2. Source of truth

For each target:

1. Read the latest repository state first.
2. Read the project's canonical MASTER/architecture/design/specification documents completely enough to reconstruct the intended ownership model.
3. Read STATUS, execution plan, and HANDOFF.
4. Inspect recent commits/PRs produced by scheduled work to understand what changed and whether temporary mechanisms accumulated.
5. Treat conversation history and prior audit reports only as context. Current GitHub code and canonical documents are authoritative.

If documentation and code disagree, record the disagreement explicitly. Do not silently choose whichever is easier.

## 3. Audit depth for program/code projects

For a program project, review structure from the top rather than only scanning the latest diff.

At minimum inspect:

- application/runtime entry points;
- module/package boundaries;
- state ownership and persistence ownership;
- domain/model layer;
- service/controller/orchestrator layer;
- adapters/repositories/platform boundaries;
- UI/presentation/event/input boundaries;
- serialization/deserialization;
- build/configuration wiring;
- tests and fixtures;
- recent compatibility/migration paths.

Build a concise intended dependency/ownership map from the canonical documents, then compare the actual code against it.

### Mandatory smell search

Actively look for structural patches and deferred debt, including:

- monkey patches or replacing authoritative functions after load;
- wrappers around global functions used as permanent architecture;
- temporary shims/adapters that no longer have a removal path;
- `legacy`, `compat`, `fallback`, `temporary`, `workaround`, `hack`, `TODO`, `FIXME`, `bypass` paths that now participate in normal execution;
- duplicate owners for the same state, data, lifecycle, input, routing, or persistence responsibility;
- load-order-dependent behavior;
- duplicated static/canonical data;
- direct global mutation that bypasses the intended owner;
- DOM/UI state acting as authoritative domain state;
- `MutationObserver` or polling used to repair state after rendering;
- synthetic event redispatch or ad-hoc document/window listeners that bypass the intended input router;
- duplicated screen/navigation logic;
- feature flags or compatibility branches that should have expired;
- catch-all exception handling that hides invalid state;
- stale fallback reads from deleted/deprecated APIs;
- circular dependencies or hidden side-effect imports;
- dead code or unreachable compatibility branches left after migrations;
- one-off `*-fix*`, `patch`, `hotfix`, or equivalent files that override normal ownership;
- tests that merely encode a patch implementation instead of desired behavior;
- disabled/skipped tests masking incomplete migration;
- serialization monkey patches, post-processing, or multiple sources of persistent truth;
- generated code/data being hand-edited in a way that breaks the canonical generator pipeline.

Do not flag a compatibility mechanism merely because its name contains `compat` or `legacy`. Confirm whether it is still required by the canonical plan and whether an explicit removal condition exists.

## 4. Audit depth for content/generator projects

For content, worksheet, question-bank, or asset-generation workers, inspect both the generated outputs and the pipeline that owns them.

Check:

- one canonical generator/data source rather than hand-patched outputs;
- deterministic generation where the project requires it;
- schema/status consistency;
- duplicate/near-duplicate defenses;
- separation between generation and independent QA/fact-check where required;
- no silent promotion of unverified data;
- no drift between catalog/index/status and actual files;
- no parallel generators encoding the same rules differently;
- no output-specific patch that should instead be fixed at the generator/relation/schema layer;
- source/licensing metadata where required;
- regression tests for shared generator changes;
- no quantity-padding that weakens quality requirements.

## 5. Test and evidence policy

When programmatic tests or CI are available, inspect and run/review the relevant suite as feasible. Tests are evidence, not the whole audit.

A project can be `tests green / audit fail` when the code violates the intended ownership model or contains unsafe patch layers not covered by tests.

Conversely, do not claim an architectural defect without identifying concrete evidence such as file paths, symbols, call flow, duplicated ownership, or a reproducible behavioral risk.

## 6. Severity

Classify each confirmed finding:

- **P0 — Stop:** data loss/corruption risk, broken main/runtime, security-critical issue, or a worker actively compounding destructive state. The normal next task must be suspended until corrected.
- **P1 — Fix before further feature work:** architectural ownership violation, permanent monkey patch/workaround, duplicate authoritative state, stale compatibility path in normal execution, or migration defect likely to compound with future work.
- **P2 — Fix soon:** maintainability/design debt with bounded risk that does not require suspending the current checkpoint immediately.
- **P3 — Cleanup:** low-risk simplification or hygiene. Record only when concrete and useful; do not create noise.

## 7. Required action when a problem is found

The audit worker should normally **redirect, not perform the implementation fix itself**.

For every P0/P1 finding:

1. Re-read the latest target HANDOFF immediately before editing it.
2. Add an `AUDIT OVERRIDE` / `AUDIT FINDING` section near the current/next-work area.
3. State the severity, exact files/symbols, concrete evidence, why it violates the canonical architecture, and the failure/risk it creates.
4. Replace or supersede the normal next step with an exact correction task when severity requires it.
5. Define acceptance criteria for removal of the defect, including required tests and zero-reference/search checks where relevant.
6. Preserve the previously planned next task as `resume after audit fix` so work is not lost.
7. Update STATUS and/or the execution plan only when their schema supports a truthful representation of the new priority/blocker. Never fabricate fields or mark the original task complete.
8. Commit only the documentation/progress-state change needed to redirect the owning worker. Do not mix unrelated cleanup.

For P2 findings, add them to the canonical backlog/handoff at the correct priority without unnecessarily preempting safe current work.

For P3, prefer reporting only unless the project already has an explicit cleanup queue.

If the target project has no HANDOFF, update the nearest canonical progress/next-task document and state that choice in the audit report.

## 8. Required handoff wording

An audit redirection must be executable by the next scheduled worker without chat history. It must include:

- `Severity`;
- `Audit evidence`;
- `Files / symbols`;
- `Required correction`;
- `Do not` constraints, especially "do not restore the old compatibility path" when relevant;
- `Acceptance criteria`;
- `Tests / searches required`;
- `Resume after fix` with the pre-audit next task.

Do not write vague instructions such as "clean up architecture" or "refactor this later".

## 9. Cross-worker audit

When multiple scheduled workers touch the same repository or adjacent domains, explicitly check:

- duplicated ownership;
- one worker undoing another worker's migration;
- incompatible STATUS/HANDOFF claims;
- content worker writing application logic or app worker writing production content despite ownership split;
- overlapping schedules causing the same queue item to be processed twice;
- one worker depending on deprecated APIs another worker is removing.

If a cross-worker conflict is confirmed, write the correction into every canonical handoff necessary to prevent the conflict from recurring.

## 10. End-of-run report

For each audited track report:

- target and latest commit inspected;
- audit verdict: `PASS`, `PASS WITH DEBT`, `REDIRECTED`, or `BLOCKED`;
- major architecture/ownership observations;
- concrete findings by severity;
- tests/CI/evidence checked;
- canonical files modified, if any;
- exact next action now expected from the owning worker.

If no meaningful issue is found, do not make gratuitous repository changes just to prove the audit ran.

## 11. Non-goals

The audit worker must not:

- invent new product requirements;
- rewrite a healthy system merely to impose a preferred style;
- replace canonical specifications with its own interpretation;
- mark defects fixed when it only changed documentation;
- weaken tests to make a finding disappear;
- mass-edit code during the audit unless a future explicit instruction changes the audit role;
- reorder unrelated product work without a confirmed P0/P1 reason.
