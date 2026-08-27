# Power TOEIC CONTENT handoff

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Completed generated micro-skills: **19 / 44**
- Next micro-skill: `p5.conn.because_vs_because_of` **0/100 persisted**
- Generated questions: **1,900**
- QA checked: **900**
- Verified: **869**
- Needs revision: **31**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Completed `p5.conn.preposition_vs_conjunction` IDs **0001-0100** in four 25-question checkpoints under:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/preposition-vs-conjunction/pending/`

The 100 items cover noun-phrase vs clause decisions across cause, concession, time, `in spite of / even though`, and `without / unless` structures rather than a single lexical substitution template.

Checks on the new 100:
- IDs 0001-0100 unique and sequential
- one cloze per item
- four distinct choices per item
- valid proposed answer index
- answer positions A/B/C/D = **25/25/25/25**
- exact duplicate stems: **0**
- SequenceMatcher >= 0.94: **0 pairs**
- maximum within-skill similarity: about **0.647**
- all 100 remain `pending_validation`

Full semantic cross-bank near-duplicate scanning across all 1,900 candidates is still **not completed**.

## This checkpoint — QA

Independently reviewed the oldest unchecked `p5.verb.subject_verb_agreement` IDs **0001-0100**, solving each from stem + choices before consulting the stored proposed answer/explanation.

Result:
- Checked: **100**
- Verified: **100**
- Needs revision: **0**
- Rejected: **0**

The batch covers simple singular/plural heads, intervening prepositional phrases, `each/every`, plural quantifiers, indefinite pronouns, compound subjects, `along with/as well as/together with`, gerund/clausal subjects, and `the number / a number` patterns. All independent answers matched the stored keys and explanations.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-020-subject-verb-agreement.qa.json`

## Next generation

`p5.conn.because_vs_because_of`

Start ID:

`p5_conn_because_vs_because_of_0001`

## Next QA

`p5.verb.present_vs_past`

Start ID:

`p5_verb_present_vs_past_0001`
