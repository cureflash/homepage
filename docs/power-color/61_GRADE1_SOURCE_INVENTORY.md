# Power Color — Grade 1 Source Inventory

## Current AFT authority
- Current official Grade 1 level page: Grade 1 scope includes cultural history, measurement, world color-harmony theory, color marketing, and advanced professional application.
- Current official Grade 1 textbook table of contents PDF: authoritative scope/order for headings and page starts.
- Current official Grade 1 first-stage sample questions: authoritative examples of current testable content/patterns.
- 2026 Grade 1 second-stage format notice: printed-color selection replaces the former New Color Card 199a operation; content tendency/approximate question count/difficulty remain unchanged.

## Processed frontier
All current official Grade 1 textbook TOC content items from culture p.006 through the appendices p.152, p.157 and p.160 have been source-audited in official order. Authoring exists only for source-resolved/corroborated slices recorded in the audit files. Runtime promotion has begun in the same official order: p.006, p.007, p.010, p.014, p.017, p.021 culture batches plus p.024 Judd, p.025 Chevreul, and p.027 Rood are promoted record-identically; p.028 Ostwald is next.

Recorded source-blocked topics include p.035 `色の分類`, p.062 JIS light-source name topics, p.083 `色の見えの変化`, p.090 `色彩効果のビジネス活用`, p.096/p.100/p.102 business-process topics, p.114 `カラー戦略`, p.120-p.122 CMF® process topics, p.132 `カラー情報の整理と分析` / `シーズンテーマカラーの決定`, p.134 `繊維の長さと発色性`, p.136 `ビジュアルマーチャンダイジング（VMD）の取り組み`, p.137 `商品陳列のカラーコーディネーション`, p.148 `遠景・中景・近景を踏まえた色彩計画における配慮事項`, and p.160 `資料・CMF® — 素材と工法`.

## Grade 1 runtime promotion frontier
Runtime: `qualifications/color-certification/data/grade1-runtime.json`.
Promotion gate: `qualifications/color-certification/tests/grade1-runtime-promotion.test.js`.
Current runtime: 58 verified / pending 0 across nine skills; `productionApproved=false`.
Promoted batches: p.006, p.007, p.010, p.014, p.017, p.021 culture batches (8/8 each), p.024 `pc1.harmony.judd_p024` (4/4), p.025 `pc1.harmony.chevreul_p025` (3/3), and p.027 `pc1.harmony.rood_p027` (3/3), all record-identical.
Gate coverage: runtime↔authoring deep equality, full-fingerprint uniqueness, auditable correct positions A/B/C/D=15/15/15/13, and the existing shared Power TOEIC question-bank/workout/session engine.
Latest Power Color CI `33827600818` succeeded; PR #749 merged as `c054dbd8df0c6e7ee5e7669754784887a574128e`.
Next batch in official order: `qualifications/color-certification/data/grade1-authoring-harmony-ostwald-p028-0001-0004.json`, p.028 `pc1.harmony.ostwald_p028`, 4/4 verified, pending 0, A/B/C/D=1/1/1/1. Source contract: `docs/power-color/audits/2026-09-03-grade1-p028-ostwald-source-audit.md`. Classification: `SECONDARY_CORROBORATION_REQUIRED`. Accepted narrow nonvisual facts are limited to the 1916 `The Colour Primer`, harmony arising from color order, the white→gray→black achromatic scale, and the double-cone representation as corroborated by Cooper Hewitt/Smithsonian and the Science History Institute original-work record. Do not infer unpublished AFT harmony classes, exact diagram geometry or display values.

## p.152 color-perception accepted boundary
Audit: `docs/power-color/audits/2026-09-04-grade1-p152-color-perception-source-audit.md`.
Authoring batch: `qualifications/color-certification/data/grade1-authoring-light-color-perception-p152-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-light-color-perception-p152-authoring.test.js`.
Classification: `SOURCE_RESOLVED`.
Current AFT official first-stage sample authority directly establishes the narrow nonvisual relations used: retinal-illuminance change can alter perceived hue at fixed wavelength; this is the Bezold–Brücke phenomenon; wavelengths with little hue change are `不変波長`; the published answer key identifies the 474 nm / 571 nm option. Four records independently QAed 4/4 verified, A/B/C/D=1/1/1/1. No diagram geometry or monitor-facing judgement is authorized.

## p.157 CCT/CRI accepted boundary
Audit: `docs/power-color/audits/2026-09-04-grade1-p157-cct-cri-source-audit.md`.
Authoring batch: `qualifications/color-certification/data/grade1-authoring-light-cct-cri-p157-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-light-cct-cri-p157-authoring.test.js`.
Classification: `SOURCE_RESOLVED`.
CIE explicitly defines correlated colour temperature through the nearest Planckian-radiator chromaticity and unit K, and defines CIE 1974 general colour rendering index Ra as the mean of eight specified special indices. JLMA publicly explains Ra as a colour-appearance/reproducibility indicator, with higher values indicating better reproducibility. Four records independently QAed 4/4 verified, A/B/C/D=1/1/1/1. Do not treat Ra as a complete measure of every perceptual colour-quality dimension.

The p.152+p.157 dedicated global full-fingerprint/nonvisual/shared-renderer gates and normal Power Color regression passed workflow `33815760564`; PR #728 merged as `041b51b9a5346d602b5d8fdc7c2d0c6be9751e95`.

## p.160 CMF materials/processes blocker
Audit: `docs/power-color/audits/2026-09-04-grade1-p160-cmf-materials-processes-source-audit.md`.
Classification: `SOURCE_BLOCKED`.
AFT public material exposes the appendix heading/order only. It does not expose the closed material inventory, manufacturing/finishing-process set, material↔process relations, selection criteria, exceptions, or diagrams. Generic CMF/materials-engineering sources cannot establish the current AFT p.160 deterministic set. No authoring.

## Persistent blocked/risk candidates
- p.035 `色の分類`: exact AFT taxonomy/labels/counts.
- p.062 JIS light-source colour names: exact current normative content.
- p.083 `色の見えの変化`: exact AFT phenomenon/rule set beyond separately authorized current official-sample facts.
- p.090/p.096/p.100/p.102/p.114: exact AFT business/color-marketing process facts.
- p.120-p.122 CMF®: exact AFT CMF process, variation, production and material/finish facts.
- p.132 fashion analysis/season-theme decision procedures.
- p.134 `繊維の長さと発色性`: explicit length↔color-development relation and conditions.
- p.136 AFT-specific VMD initiative/process set.
- p.137 AFT-specific product-display color-coordination rule set.
- p.148 AFT-specific near/mid/far color-planning consideration rules.
- p.160 `資料・CMF® — 素材と工法`: exact AFT-aligned materials/process set.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## Exact next frontier
Promote the existing p.028 `pc1.harmony.ostwald_p028` 4/4 verified records record-identically through the canonical shared-engine Grade 1 runtime gate. Continue only verified authoring in official TOC order and preserve every recorded source/display blocker.
