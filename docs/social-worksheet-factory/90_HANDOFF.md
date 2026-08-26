# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high history and junior-high civics generation backlog is now independently verified through `civics-cumulative-review`.
- Pending backlog count: **180 units**.
- Public selector remains verified-only.

## FACTCHECK progress this session

### Batch 01 — 5 modern-history units

Verified and published:

1. `imperialism-sino-japanese-russo-japanese-wars`
2. `taisho-democracy-interwar-japan`
3. `asia-pacific-war`
4. `postwar-japan`
5. `contemporary-japan-cumulative-review`

Batch 01 reduced the backlog from 199 to 194. Detailed evidence: `FACTCHECK_BATCH_01.md`.

### Batch 02 — 6 constitution / three-powers units

Verified and published:

1. `constitution-constitutionalism`
2. `fundamental-human-rights`
3. `diet`
4. `cabinet`
5. `courts`
6. `separation-of-powers`

Batch 02 reduced the backlog from 194 to 188. Detailed evidence: `FACTCHECK_BATCH_02.md`.

### Batch 03 — remaining 8 junior-high civics units

Verified and published:

1. `elections-political-participation`
2. `local-government`
3. `market-economy-firms-labor`
4. `money-finance`
5. `public-finance-taxation`
6. `social-security`
7. `international-society-un`
8. `civics-cumulative-review`

These were independently checked against the current MEXT commentary and the relevant official sources: e-Gov current election/local-government law text, House of Representatives Constitution text, Japan Fair Trade Commission, Ministry of Health Labour and Welfare, Bank of Japan, Ministry of Finance/National Tax Agency, Ministry of Foreign Affairs, and United Nations material.

## Corrections made during Batch 03

- `local-government`: changed the overbroad statement “地方公共団体には都道府県と市町村がある” to “普通地方公共団体には都道府県と市町村がある”, because the Local Autonomy Act also defines special local public entities.
- `local-government`: made the 条例 sentence legally more precise: local public entities enact ordinances within the scope permitted by law rather than treating every local rule as an ordinance.
- `market-economy-firms-labor`: corrected an overcompressed definition that equated “市場経済” only with prices being set through supply and demand. The learner sentence now describes sellers and buyers trading in markets, with prices formed through factors including demand and supply.
- `money-finance`: aligned the Bank of Japan wording with the Bank's official function/purpose language; financial policy is described as monetary/financial adjustment aimed at price stability and sound development of the national economy.
- `public-finance-taxation`: tightened direct/indirect tax wording to the National Tax Agency's distinction between the person who bears the tax and the person who remits it; avoided implying that all public finance can be reduced to a single tax function.
- `social-security`: removed the overgeneralization that all social insurance works by everyone “contributing premiums together”. It now uses the official category examples (pension, medical, long-term care, employment and workers' compensation insurance) and describes them as public insurance systems.
- `international-society-un`: confirmed the UN's 1945 establishment, one-vote General Assembly rule, 5 permanent + 10 non-permanent Security Council composition, and Japan's 18 December 1956 admission.
- `civics-cumulative-review`: propagated the corrected market-economy wording so the cumulative sheet does not reintroduce the earlier oversimplification.

## Backlog / publication state

- Start of this session: 199 pending
- Batch 01 verified: 5
- Batch 02 verified: 6
- Batch 03 verified: 8
- Total independently verified this session: **19 units**
- Current pending backlog: **180 units**
- The junior-high generated backlog is now fully fact-checked and learner-facing.
- No remaining pending unit is public.

## Exact next social action

The next backlog item is the first high-school `歴史総合` unit:

1. `history-comprehensive-history-and-us`
2. `history-comprehensive-characteristics-sources`
3. `history-comprehensive-modernization-questions`
4. `history-comprehensive-18c-asia-economy-society`
5. `history-comprehensive-industrial-revolution-world-market-opening`
6. `history-comprehensive-nation-state-meiji-restoration`

Continue sequentially from `歴史総合` only when FACTCHECK is explicitly requested. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat each pending fact, learner sentence, key point/timeline claim, and image claim as untrusted until independently reopened and checked.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance, and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
