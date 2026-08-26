# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal scheduled target: 10 newly generated units per run
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified through: Meiji state / industrialization
- Existing pending backlog: `imperialism-sino-japanese-russo-japanese-wars`
- Next generation start: Taisho democracy / interwar Japan

## Policy change — 2026-08-26

The previous workflow of `GENERATE one unit -> FACTCHECK one unit -> GENERATE...` is retired.

From this point, scheduled runs should prioritize throughput:

1. generate up to 10 new sequential units per run;
2. keep every newly generated unit `pending_factcheck`;
3. append it to `STATUS.json.unverified_backlog`;
4. do not publish pending units in `subjects/social/worksheets/index.html`;
5. continue to the next ungenerated unit on the next scheduled run rather than switching to fact-check;
6. perform independent fact-check later only when the user explicitly requests it or the state is deliberately switched to a fact-check batch.

The backlog design exists specifically to reduce same-context confirmation bias: generation can proceed rapidly, while a later independent run treats the entire pending set as untrusted and reopens authoritative sources from scratch.

## Existing pending unit retained

`subjects/social/worksheets/data/imperialism-sino-japanese-russo-japanese-wars.js` already exists from the previous GENERATE run.

It remains completely unverified and must stay out of the public selector. Do not spend the next scheduled run fact-checking it. It is now the first entry in the accumulated backlog.

Its pending scope remains:

- imperialism context;
- Sino-Japanese War;
- Treaty of Shimonoseki;
- Triple Intervention;
- Anglo-Japanese Alliance;
- Russo-Japanese War;
- Treaty of Portsmouth;
- Korea annexation;
- two historical-document image records and their exact license/provenance claims.

## Exact next scheduled GENERATE batch

Start at `taisho-democracy-interwar-japan` and target these 10 new units in order:

1. Taisho democracy / interwar Japan
2. Asia-Pacific War
3. Postwar Japan
4. Contemporary Japan and cumulative review
5. Junior-high civics — Constitution and constitutionalism
6. Junior-high civics — Fundamental human rights
7. Junior-high civics — Diet
8. Junior-high civics — Cabinet
9. Junior-high civics — Courts
10. Junior-high civics — Separation of powers

Crossing from history into civics within this batch is intentional and permitted by the new throughput policy. Preserve correct `schoolStage`, `field`, `unit`, era/period and practical grouping metadata in each dataset.

For every unit:

- create the low-density explanation dataset first;
- derive concise original learner sentences from structured facts rather than copying textbook prose;
- mark only true core terms in `terms` for red study text and cloze generation;
- prefer authoritative sources and record generation-stage source metadata;
- use useful real historical/official images where appropriate and never AI-generated historical images;
- record exact image source/license candidates;
- keep all content `pending_factcheck`;
- do not add the dataset to the public selector.

If ten units cannot be completed safely because of a real technical or source blocker, finish the largest coherent batch possible and write the exact blocker. Do not reduce the batch simply out of habit.

## After that batch

Keep `next_role` / mode in GENERATE unless the user explicitly requests fact-checking. Append all newly generated unit IDs to `unverified_backlog`, update the backlog count, and set the next ungenerated curriculum item as `active_unit`.

When the user later requests a fact-check batch, independently treat all selected backlog content as untrusted, reopen MEXT and authoritative sources from scratch, correct/reject unsupported wording, verify exact image reuse terms, publish only verified units, and remove only passed units from the backlog.
