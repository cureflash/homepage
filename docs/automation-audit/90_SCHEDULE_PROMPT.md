# 17:00 scheduled audit — ready-to-register prompt

This file is the canonical prompt body to use when the daily 17:00 audit task is later registered.

---

Audit all project work currently being advanced by enabled ChatGPT scheduled tasks.

First read the latest `main` of `cureflash/homepage` and completely follow:

- `docs/automation-audit/00_MASTER_INSTRUCTIONS.md`
- `docs/automation-audit/10_AUDIT_CHECKLIST.md`

Do not use a hard-coded target list. Inspect the currently enabled scheduled tasks at runtime, exclude reporting/reminder-only tasks and this audit task itself, resolve each project worker's repository/branch/canonical docs, and audit every active implementation/content track that modifies a project.

For program/code work, audit the structure from the top rather than merely reviewing the latest diff. Reconstruct the intended architecture/ownership from the project's canonical documents, then inspect entry points, state ownership, persistence, domain/services/adapters, UI/input/event routing, serialization, build/configuration, tests and recent compatibility/migration paths. Actively investigate monkey patches, post-load function replacement, stale fallbacks, temporary shims without removal paths, duplicate ownership, load-order behavior, duplicated canonical data, DOM-as-domain-state, MutationObserver repair, synthetic event redispatch, ad-hoc global/document listeners, hidden side effects, skipped tests, dead compatibility branches, serialization wrappers and one-off patch/hotfix files. Do not flag by filename alone; confirm actual runtime relevance and canonical intent.

For worksheet/question/content/asset-generation work, audit the generator and pipeline as well as outputs. Check canonical generator ownership, schema/catalog/status consistency, deterministic generation where required, duplicate defenses, generation-vs-independent-QA separation, verification status integrity, shared-rule centralization, regression coverage, licensing/source metadata and whether quantity targets are causing quality shortcuts.

Also audit conflicts between multiple scheduled workers touching the same repository or adjacent domains: duplicated responsibility, inconsistent STATUS/HANDOFF claims, overlapping queues, or one worker reintroducing APIs/compatibility paths another worker is removing.

Classify confirmed findings as P0/P1/P2/P3 according to the master instructions. Tests being green is not sufficient for architectural PASS.

When a P0 or P1 defect is confirmed, normally do not implement the code fix during the audit. Instead, re-read the target project's latest canonical HANDOFF and modify it so the owning scheduled worker fixes the audit issue before continuing normal feature work. Add an explicit `AUDIT OVERRIDE` / `AUDIT FINDING` containing severity, exact evidence, files/symbols, required correction, prohibited regression, acceptance criteria, required tests/searches, and the previous planned next task as `resume after audit fix`. Update STATUS or execution plan only when their existing schema supports the priority/blocker truthfully. Commit the documentation/progress-state redirection to the relevant repository. Do not claim the underlying defect is fixed merely because the handoff was changed.

For P2 findings, place them in the canonical backlog/handoff at appropriate priority when useful without needlessly stopping safe work. For P3, prefer reporting rather than repository churn unless an explicit cleanup queue exists.

If no meaningful defect is found, do not make gratuitous repository changes.

At the end, report every audited track with: latest commit inspected, verdict (`PASS`, `PASS WITH DEBT`, `REDIRECTED`, or `BLOCKED`), concrete findings by severity, tests/CI/evidence checked, canonical documents changed, and the exact next action expected from the owning worker.
