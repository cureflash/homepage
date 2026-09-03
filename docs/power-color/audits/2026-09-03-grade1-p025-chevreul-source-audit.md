# Power Color Grade 1 — p.025 シュヴルールの色彩調和論 source audit

Date: 2026-09-03
Status: `SOURCE_RESOLVED`

## Official scope authority

The current AFT Grade 1 official textbook table of contents places `シュヴルールの色彩調和論` at p.025, immediately after p.024 Judd and before p.027 Rood.

AFT TOC:
- https://www.aft.or.jp/images/text_of-1st-grade_mokuji.pdf

## Current AFT official sample authority

The current AFT Grade 1 first-stage official sample directly asks a Chevreul color-harmony item and exposes both the wording and the official answers.

From the sample:
- Chevreul's `一つの主調色による調和` includes a `ドミナント` scheme (A = ①).
- That relation is treated as one of three `類似色` harmonies (B = ③).
- Within that harmony, the sample explicitly names `隣接・近似色相による色調類似の調和` (C = ④).

AFT official sample:
- https://www.aft.or.jp/pages/feature/exam1-first

The sample also continues into `ナチュラルハーモニー` and Judd's `なじみ` principle, but that Judd relation belongs to the already-audited p.024 boundary and must not be duplicated into the p.025 batch unless the question is specifically testing the cross-theory relation exposed by the same official sample.

## Authoring-safe fact families

A small text-only p.025 batch may use only these deterministic first-party relations:
1. `一つの主調色による調和` → `ドミナント`.
2. The above is treated as one of three `類似色の調和`.
3. `類似色の調和` includes `隣接・近似色相による色調類似の調和`.
4. These relations are directly current Grade 1 exam-sample authority, so no visual reconstruction is needed.

## Explicit exclusions

Do not author or infer from this audit:
- the complete unpublished AFT p.025 textbook body;
- visual appearance of the official figure or image-derived properties;
- RGB/HEX/display values;
- historical claims about Chevreul not directly needed for the official-sample relations unless separately audited;
- exact additional Chevreul harmony categories or terminology not exposed in the current public official sample;
- later p.027 Rood rules;
- duplicated p.024 Judd-only questions already covered by `pc1.harmony.judd_p024`.

## Result

`SOURCE_RESOLVED` for a narrow current-official-sample authoring slice.

Unlike earlier culture topics, the current AFT Grade 1 official sample itself exposes enough deterministic p.025 Chevreul relations and official answers to support a small nonvisual batch without secondary authority. This does not make the complete unpublished p.025 textbook body public or resolved.
