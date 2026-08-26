# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Verified learner-facing coverage now runs through `separation-of-powers`.
- Pending backlog count: **188 units**.
- Public selector remains verified-only.

## FACTCHECK progress this session

### Batch 01 — 5 modern-history units

Verified and published:

1. `imperialism-sino-japanese-russo-japanese-wars`
2. `taisho-democracy-interwar-japan`
3. `asia-pacific-war`
4. `postwar-japan`
5. `contemporary-japan-cumulative-review`

Batch 01 reduced the backlog from 199 to 194. Its detailed evidence note is `FACTCHECK_BATCH_01.md`.

### Batch 02 — constitution, rights and the three powers

Independently checked against the current MEXT junior-high social-studies commentary and primary/official constitutional and institutional sources, then verified and published:

1. `constitution-constitutionalism` — 日本国憲法と立憲主義
2. `fundamental-human-rights` — 基本的人権
3. `diet` — 国会
4. `cabinet` — 内閣
5. `courts` — 裁判所
6. `separation-of-powers` — 三権分立

For these six, article wording and institutional claims were cross-checked against the Constitution of Japan as published by the House of Representatives, House of Representatives material on Diet powers, Cabinet Secretariat material on the parliamentary cabinet system, and Courts in Japan material on the three-tier court system and judicial review. MEXT commentary was used to recheck junior-high curriculum treatment of constitutionalism, rights, the Diet-centered political system, parliamentary cabinet government, and separation of powers.

## Corrections / image decisions

- `cabinet`: made the learner sentence on a no-confidence vote explicit: after passage, the Cabinet must either have the House of Representatives dissolved within 10 days or resign en masse.
- `constitution-constitutionalism`: retained the same Constitution signature image already independently verified in Batch 01, with the checked CC BY-SA 4.0 attribution/license metadata.
- `diet`, `cabinet`, and `courts`: removed their generation-stage building photographs rather than publish them without a separate completed license/provenance review. The factual worksheets do not depend on those decorative images.
- Batch 01 image decisions remain in force: ambiguous Hara Takashi and surrender-document images were removed; treaty-document and Constitution images with completed reuse checks were retained.

## Backlog / publication state

- Start of this session: 199 pending
- Batch 01 verified: 5
- Batch 02 verified: 6
- Total independently verified this session: **11 units**
- Current pending backlog: **188 units**
- All 11 passing units are loaded by `subjects/social/worksheets/index.html`.
- No remaining pending unit is public.

## Exact next social action

Continue independent FACTCHECK sequentially from:

1. `elections-political-participation`
2. `local-government`
3. `market-economy-firms-labor`
4. `money-finance`
5. `public-finance-taxation`
6. `social-security`
7. `international-society-un`
8. `civics-cumulative-review`

After those, the backlog proceeds into `歴史総合`. Continue only when FACTCHECK is explicitly requested. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat each pending fact, learner sentence, key point/timeline claim, and image claim as untrusted until independently reopened and checked.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance, and reuse terms before learner-facing publication.
- Decorative images may be removed when factual content passes but reuse evidence is incomplete.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
