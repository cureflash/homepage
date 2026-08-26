# Scheduled Task Audit — execution checklist

Use this checklist after reading `00_MASTER_INSTRUCTIONS.md`.

## A. Resolve active work

- [ ] Inspect enabled scheduled tasks.
- [ ] Exclude reporting/reminder-only tasks and the audit task itself.
- [ ] Resolve repository, branch, canonical docs, STATUS/plan/HANDOFF for each project worker.
- [ ] Group same-repository workers by ownership track.
- [ ] Note unresolved targets as blockers; do not guess.

## B. Reconstruct intended architecture / pipeline

For each target:

- [ ] Read latest repository state.
- [ ] Read canonical master/design/architecture/specification documents.
- [ ] Read current STATUS / execution plan / HANDOFF.
- [ ] Inspect recent worker commits/PRs.
- [ ] Write down the intended owners and dependency direction before judging code.

## C. Program structure audit

When the target is code/program work:

- [ ] Entry points and composition root are explicit.
- [ ] Domain state has one authoritative owner.
- [ ] Persistence has one authoritative owner.
- [ ] Navigation/scene/mode lifecycle has one authoritative owner.
- [ ] Input/event routing does not bypass the intended router/controller.
- [ ] UI does not own domain truth.
- [ ] Adapters/repositories isolate platform/data boundaries.
- [ ] Serialization does not rely on post-load wrappers or multiple truth sources.
- [ ] Temporary migration paths have explicit removal conditions.
- [ ] No stale fallback references to deprecated/deleted APIs remain in normal execution.
- [ ] No monkey patch, post-load function replacement, state-repair observer, or equivalent hidden override remains as permanent architecture.
- [ ] No duplicated canonical data or load-order-dependent ownership.
- [ ] No hidden side-effect import/circular dependency is carrying essential ownership.
- [ ] No disabled/skipped tests are masking incomplete migration.
- [ ] Tests assert required behavior and ownership contracts, not merely the patch implementation.

## D. Content / worksheet / question / asset pipeline audit

- [ ] Outputs derive from a canonical generator/source rather than hand patching.
- [ ] Generator changes are covered by regression tests where shared behavior is affected.
- [ ] Deterministic seed/reproduction rules are preserved where required.
- [ ] Schema, catalog/index and actual files agree.
- [ ] Generation and independent verification/fact-check responsibilities remain separated where specified.
- [ ] No unverified item was silently promoted.
- [ ] Duplicate and near-duplicate checks are operating at the required scope.
- [ ] Quantity targets did not override quality gates.
- [ ] Shared rules are implemented once rather than copied into output-specific branches.
- [ ] Licensing/source metadata remains valid where required.

## E. Smell search terms

Search contextually for relevant terms and equivalents, then verify before flagging:

`fix`, `patch`, `hotfix`, `hack`, `workaround`, `temporary`, `temp`, `legacy`, `compat`, `shim`, `fallback`, `bypass`, `TODO`, `FIXME`, `MutationObserver`, direct `window`/global replacement, document-level key listeners, serialization wrappers, disabled/skipped tests.

A name alone is not evidence. Determine whether the path is active, required, and has a valid removal plan.

## F. Cross-worker conflict audit

- [ ] Same repo workers do not own the same responsibility.
- [ ] One worker is not reintroducing APIs another is removing.
- [ ] STATUS/HANDOFF documents agree on current state.
- [ ] Workers do not process the same queue item concurrently without safe partitioning.
- [ ] Track boundaries are respected (e.g. program vs production content).

## G. Evidence and tests

- [ ] Record exact commit inspected.
- [ ] Record concrete file/symbol/call-flow evidence for findings.
- [ ] Check relevant CI/test results.
- [ ] Run/review broader tests where feasible and material.
- [ ] Do not convert `tests green` into an automatic architecture PASS.

## H. Decision

Choose exactly one verdict per track:

- `PASS` — no meaningful defect found.
- `PASS WITH DEBT` — only bounded P2/P3 issues.
- `REDIRECTED` — P0/P1 finding caused canonical next work to be changed.
- `BLOCKED` — audit could not complete because required repository/spec/evidence was unavailable.

## I. Redirect protocol for P0/P1

- [ ] Re-read latest HANDOFF immediately before editing.
- [ ] Add `AUDIT OVERRIDE` / `AUDIT FINDING`.
- [ ] Include severity, evidence, files/symbols, required correction, prohibited regressions, acceptance criteria and required tests/searches.
- [ ] Preserve the previous next task as `resume after audit fix`.
- [ ] Update STATUS/plan only if their existing schema supports the change truthfully.
- [ ] Commit only the necessary canonical progress-document changes.
- [ ] Do not claim the implementation bug is fixed merely because the handoff changed.

## J. Final report

For every audited track include:

- latest commit;
- verdict;
- findings and severity;
- tests/evidence checked;
- documentation changed;
- next action expected from the owning worker.
