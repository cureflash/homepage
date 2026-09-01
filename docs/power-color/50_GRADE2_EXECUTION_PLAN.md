# Power Color — Grade 2 execution plan

Checked: 2026-09-01

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

Rules:
1. Use only facts that can be independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## 2026-09-01 source reconciliation

A previous checkpoint incorrectly treated the original PR #483 source as stale and promoted `pc2.image.color_image_rules` from a different sample route. Re-opening the current Association Grade 2 page shows that the current page explicitly contains the PR #483 core facts: hexad achromatic-color permission, two dyads forming a tetrad, subtractive mixing, CMY, triad, and the named Question 1 scheme targets.

Therefore:
- [x] remove unsupported `grade2-authoring-color-image-rules-0001-0012.json` and its authoring gate;
- [x] independently recheck the PR #483 facts against the current official page;
- [x] rewrite only questions 0009-0012 so they ask exactly what the current page explicitly names, without adding unsupported semantic glosses;
- [x] retain 12/12 verified, pending 0, A/B/C/D = 3/3/3/3;
- [x] replace `grade2-runtime.json` record-identically with the reconciled `pc2.foundation.official_sample_facts` batch;
- [x] keep runtime nonvisual and on the shared Power TOEIC engine.

## Current runtime frontier

Grade 2: 12 verified / pending 0 in `grade2-runtime.json`, all from `pc2.foundation.official_sample_facts`.

Grade 3 remains 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Exact next start point

After this source-reconciliation PR is green and merged, continue the Grade 2 current-source inventory from the official text/scope. Do not use the removed `pc2.image.color_image_rules` route and do not pursue `pc2.scheme.natural_harmony_text` unless a current explicit first-party source for that rule is obtained. The next new micro-skill must be selected from explicit current first-party text and remain nonvisual unless approved display references exist.
