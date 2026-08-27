# 宅建 Worksheet Factory — EXECUTION PLAN

## Canonical order

This plan is subordinate to `00_MASTER_INSTRUCTIONS.md` and works with `30_QUESTION_AND_QA_SPEC.md` for the explicit question-generation / solve-all workflow.

### Phase 0 — foundation

- [x] Portable implementation under `qualifications/takken/`
- [x] 2026 exam year / `2026-04-01` law cutoff
- [x] Structured unit data model
- [x] Shared study / worksheet / answer renderer
- [x] Deterministic seeded cloze
- [x] A4 print path and source notes
- [x] Verified-only public catalog
- [x] Automated unit validation
- [x] Canonical question-generation / solve-all QA specification

### Phase 1 — ordered unit generation

The fixed 90-unit queue is complete. Preserve this order for all later question generation and validation.

1. `takken-gyoho-definition`
2. `takken-gyoho-license-required`
3. `takken-gyoho-license-authority`
4. `takken-gyoho-license-disqualification`
5. `takken-gyoho-license-validity-renewal`
6. `takken-gyoho-license-change-closure`
7. `takken-gyoho-roster-signs`
8. `takken-shi-registration`
9. `takken-shi-card`
10. `takken-shi-exclusive`
11. `takken-shi-exclusive-duties`
12. `business-guarantee-deposit`
13. `business-guarantee-refund`
14. `guarantee-association`
15. `brokerage-contract-basics`
16. `brokerage-contract-types`
17. `brokerage-reins-reporting`
18. `advertising-start-time`
19. `contract-start-time`
20. `false-advertising-prohibited-conduct`
21. `article35-basics`
22. `article35-items`
23. `article37-basics`
24. `article35-vs-37`
25. `eight-restrictions-overview`
26. `cooling-off`
27. `earnest-money-and-safeguards`
28. `damages-penalty`
29. `contract-nonconformity-special-rule`
30. `unowned-property-restriction`
31. `installment-sales-ownership`
32. `brokerage-fees`
33. `supervision-penalties`
34. `civil-intent-general`
35. `civil-mistake`
36. `civil-fraud-duress`
37. `civil-fictitious-declaration`
38. `civil-limited-capacity`
39. `civil-agency`
40. `civil-unauthorized-agency`
41. `civil-prescription`
42. `property-rights-opposability`
43. `co-ownership`
44. `mortgage`
45. `default-damages`
46. `contract-cancellation`
47. `risk-simultaneous-performance`
48. `sale-earnest`
49. `contract-nonconformity-civil`
50. `lease-general`
51. `lease-deposit-opposability`
52. `land-lease-right`
53. `fixed-term-land-lease`
54. `building-lease-right`
55. `fixed-term-building-lease`
56. `inheritance-heirs-shares`
57. `inheritance-acceptance-renunciation`
58. `will-reserved-portion`
59. `condominium-law`
60. `real-estate-registration`
61. `city-planning-area`
62. `area-division`
63. `use-districts`
64. `city-planning-decisions`
65. `development-permission-required`
66. `development-permission-procedure`
67. `building-confirmation`
68. `roads-frontage`
69. `building-coverage-ratio`
70. `floor-area-ratio`
71. `height-restrictions`
72. `fire-prevention-zones`
73. `national-land-use-notification`
74. `farmland-act-article3`
75. `farmland-act-articles4-5`
76. `land-readjustment`
77. `embankment-regulation`
78. `legal-restrictions-comparison`
79. `real-estate-acquisition-tax`
80. `fixed-asset-tax`
81. `registration-license-tax`
82. `stamp-tax`
83. `income-tax-real-estate-transfer`
84. `land-price-public-notice`
85. `real-estate-appraisal`
86. `housing-finance-agency`
87. `fair-competition-advertising`
88. `land-building-knowledge`
89. `statistics`
90. `five-question-exemption-review`

- [x] Generate units 1-20
- [x] Generate units 21-40
- [x] Generate units 41-60
- [x] Generate units 61-80
- [x] Generate units 81-90

All 90 unit datasets remain `pending_factcheck` and unpublished.

### Phase 2 — four-choice question generation

- [ ] Starting at unit 1, generate stable-ID four-choice questions from independently testable core facts.
- [ ] Cover every core fact in unit order without skipping.
- [ ] Store exactly 4 distinct choices, one proposed answer, explanation, fact/source references and `pending_validation` status.
- [ ] Run schema/reference/duplicate/answer-position checks at each safe checkpoint.
- [ ] Do not pad counts with template clones; coverage is fact-based, not a fixed question quota.
- [ ] Keep all unverified questions outside production/public pools.
- [ ] When every core fact in all 90 units is covered, set `question_generation_complete: true` and `generation_complete: true`.

Progress: units 1-20 have 100% core-fact question coverage (23 facts -> 23 pending-validation questions).

Question files:
- `qualifications/takken/data/pending-questions-01-07.js` — units 1-7, 9 questions
- `qualifications/takken/data/pending-questions-08-20.js` — units 8-20, 14 questions

Current next start: unit 21 `article35-basics`, first uncovered core fact.

### Phase 3 — solve-all independent validation

This phase starts only after Phase 2 is complete.

- [ ] Begin from the first question ID and process strictly in order.
- [ ] Hide stored answer/explanation/source references before independent solving.
- [ ] Independently determine the answer and legal basis, reopening primary/official sources when needed.
- [ ] Then compare against stored answer/explanation.
- [ ] Classify each question individually as `verified`, `needs_revision`, or `rejected`.
- [ ] For repairable questions, update stem/choices/answer/explanation/sources together and independently solve again before `verified`.
- [ ] Use 25-question safe checkpoints; target at most about 100 checked questions per run.
- [ ] Track checked and verified counts separately and persist the exact next question ID.
- [ ] Only after every question has been independently re-solved and all revision work is closed may `validation_complete: true` be set.

## Publication invariant

Only independently verified material may be published. `pending_factcheck`, `pending_validation`, `needs_revision`, and `rejected` content must not enter the public catalog or production question pool.
