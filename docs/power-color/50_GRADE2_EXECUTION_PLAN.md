# Power Color — Grade 2 execution plan

Checked: 2026-09-01

## Authority and scope

Grade 2 is allowed to proceed in parallel while Grade 3 remains blocked on source acquisition. This explicit priority override does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary scope authority:
- current Color Certification Association Grade 2 level page;
- the currently linked official Grade 2 sample PDF `https://www.aft.or.jp/images/exam2.pdf`;
- the current answer key published on the Association Grade 2 page.

The Association states that Grade 2 builds on Grade 3 and covers higher-level color schemes / image expression plus practical lighting, media design, landscape and other applications.

## Source contract

1. Prefer current first-party Color Certification Association / JCRI / Japan Color Enterprise material.
2. A fact may enter Grade 2 authoring only when the answer can be re-derived from explicit source text/rules without sampling display pixels or inferring unlisted diagram geometry.
3. Monitor-facing PCCS/color-card questions retain the existing display-value restrictions. Do not substitute browser RGB/HEX for authoritative color values.
4. Grade 2 may reuse Grade 3 canonical structural facts only where those facts are already source-confirmed.
5. Use the existing shared Power TOEIC question-bank/workout/session engine. A separate Grade 2 data bank is permitted; a Grade 2-specific engine is not.
6. Generate pending-first, independently recheck every answer, run schema/fingerprint/coverage gates, and promote verified records record-identically.
7. Before promotion, re-open the currently linked first-party source. If the official sample changed, stale sample-derived authoring must not be promoted.

## Source rebase — PR #483 batch

The first PR #483 batch `grade2-authoring-official-sample-facts-0001-0012.json` was created from a previously observed Grade 2 sample containing hexad/dyad/CMY facts. On the current 2026-09-01 authority recheck, those items are not in the PDF now linked by the Association. Therefore:

- [x] block runtime promotion of the PR #483 batch;
- [x] retain it only as unpromoted authoring/history until its exact former first-party source/version can be recovered and audited;
- [x] create `51_GRADE2_CONCEPT_SOURCE_INVENTORY.md` from the current source;
- [x] do not declare the old answers false; classify the blocker as stale/unresolved source authority.

## Current Grade 2 work order

- [x] Confirm current official Grade 2 scope and current sample/answer route.
- [x] Build `51_GRADE2_CONCEPT_SOURCE_INVENTORY.md` from current official material.
- [x] Isolate `pc2.image.color_image_rules`, using only text plus the published answer key.
- [x] Generate 12 pending-first questions, independently recheck all 12, and retain A/B/C/D = 3/3/3/3.
- [x] Add authoring/nonvisual gate.
- [x] Promote the 12 current-source records record-identically into `grade2-runtime.json`.
- [x] Add full-fingerprint, stale-batch exclusion, exact-equality and shared Power TOEIC engine runtime gates.
- [ ] Confirm CI on the current PR head and merge.
- [ ] After merge, continue with the next source-confirmed nonvisual Grade 2 micro-skill in `51_GRADE2_CONCEPT_SOURCE_INVENTORY.md`.

## Current runtime frontier

Grade 2 runtime target after this checkpoint: 12 verified / pending 0 in `grade2-runtime.json`, all from `pc2.image.color_image_rules`.

Grade 3 remains separately at 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Exact next start point

After the current PR is green and merged, read latest main and re-open the current Association Grade 2 sample. Then evaluate `pc2.scheme.natural_harmony_text` from current sample (2) D. Generate a batch only if it supports enough non-template learning value from explicit current authority; otherwise continue the current official-text concept/source inventory without inventing visual rules.
