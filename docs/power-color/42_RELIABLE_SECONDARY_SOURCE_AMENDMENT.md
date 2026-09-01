# Power Color — reliable secondary-source amendment

Checked: 2026-09-01

## Scope
This document amends the source-selection rule in `40_PCCS_SOURCE_CONTRACT.md` only where current public first-party material confirms that a Grade 3 PCCS rule is in scope but does not expose the exact rule or boundary needed to derive answers.

It does not relax the monitor/display-value gate. PCCS RGB/HEX/sRGB representative values still require current first-party published values or direct numeric output from current licensed JCRI PCCS Color Calc under the existing audited procedure.

## Authority order
Use evidence in this order:
1. Current Color Certification Association / JCRI / Japan Color Enterprise first-party material.
2. Peer-reviewed academic literature or university research that explicitly identifies PCCS and states the needed rule precisely enough to re-derive answers.
3. Specialist-industry or qualified-expert educational material only as corroboration when it does not conflict with levels 1–2.

A lower-level source must never override current first-party material. If sources disagree, keep the fact blocked.

## Acceptance conditions for a secondary rule source
A secondary source may supply a missing structural/semantic PCCS rule only when all are true:
- current first-party material already confirms the topic/classification is within the relevant PCCS / Grade 3 scope;
- the secondary source explicitly identifies PCCS rather than a generic color theory system;
- the rule is stated explicitly enough to derive an answer without reading pixel positions, estimating a diagram, or relying on memory;
- the publication is academically or professionally auditable;
- the claimed rule is not contradicted by current first-party material;
- where practical, an independent second source is used to corroborate boundary cases.

## Hue-relation evidence accepted in this checkpoint
Current first-party Grade 3 material confirms that named hue relations including `同一色相配色` and `中差色相配色` are tested, while JCRI confirms PCCS uses the 24-position hue system.

The missing numeric class boundaries are supplied by peer-reviewed academic material:
- The Journal of Home Economics of Japan, 2024, J-STAGE: https://www.jstage.jst.go.jp/article/jhej/75/2/75_56/_pdf/-char/ja
  - PCCS hue differences through 3 are treated as the common/similar region.
  - 4–7 are `中差`.
  - 8–12 are contrast-region differences.
  - 11–12 are the complementary subset.
- Japanese Society for the Science of Design / emotion-related color research, 2026, J-STAGE: https://www.jstage.jst.go.jp/article/jsre/advpub/0/advpub_24-011/_html/-char/ja
  - hue difference 1 is `隣接`.
  - hue differences 2–3 are `類似`.

Combined with the already source-confirmed 24-position circular-difference computation, the Grade 3 named classification used by Power Color is therefore:
- 0: 同一色相
- 1: 隣接色相
- 2–3: 類似色相
- 4–7: 中差色相
- 8–10: 対照色相
- 11–12: 補色色相

This mapping may be used for text-only deterministic drills. It does not authorize monitor-facing PCCS swatches.

## Tone-relation evidence status
The 2019 peer-reviewed `工学教育` paper from Kanazawa Institute of Technology explicitly cites color-certification teaching material and formalizes similar-tone judgment as adjacency on the PCCS tone diagram:
https://www.jstage.jst.go.jp/article/jsee/67/5/67_5_95/_pdf/-char/en

The 2026 J-STAGE paper above describes contrast tones as having a large difference in lightness, saturation, or both and gives concrete contrast examples. This is sufficient to remove the old blanket prohibition on consulting reliable secondary evidence, but it is not yet treated here as a complete machine-readable pair-membership matrix for all 12 Grade 3 tones. Full `pc3.relation.tone_difference` promotion remains blocked until that matrix is derived from explicit auditable rules and independently checked.

## Invariants retained
- No screenshot sampling.
- No tone-map geometry inference that is not explicitly defined by the accepted source.
- No generic web-study table as sole authority.
- No silent substitution of detailed-PCCS rules for conventional Grade 3 PCCS.
- No unsourced monitor RGB/HEX.
- Every promoted question remains independently re-derived before `verified`.
