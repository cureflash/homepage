# Power TOEIC QA handoff

## Current QA state

- Checked: 4,400
- Verified: 4,366
- Needs revision: 34
- Rejected: 0
- Unchecked `pending_validation`: 0
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — source-grounded revision-ledger reconciliation

The previous canonical 4,377 verified / 23 needs_revision aggregate was inconsistent with the fixed 4,400 checked total. Original QA records plus persisted source reconstruct 34 unresolved items, restoring the invariant `4,400 = 4,366 + 34 + 0`.

Unresolved queue, in source order:

1. `p5_pos_adjective_before_noun_0037`-`0040`
2. `p5_pos_adverb_modifies_verb_0018`, `0077`-`0080`
3. `p5_pos_noun_in_noun_slot_0012`, `0052`, `0057`, `0098`
4. `p5_conn_for_vs_since_0038`
5. `p5_pron_possessive_forms_0083`
6. `p5_pron_reflexive_0042`
7. `p5_det_much_vs_many_0006`
8. `p5_det_few_vs_little_0034`, `0050`, `0059`, `0088`
9. `p5_vocab_verb_noun_collocation_0020`
10. `p5_vocab_adjective_noun_collocation_0081`
11. `p5_vocab_phrasal_verb_0038`, `0051`, `0079`, `0081`, `0091`, `0099`
12. `p5_vocab_confusing_words_0014`, `0028`, `0039`, `0055`, `0057`

The first four adjective-before-noun items are confirmed genuine unresolved ambiguities in current persisted source: each choice set includes both `secure` and `secured`. Do not confuse them with the separately audited adjective-after-linking-verb false positives.

No candidate source changed in this reconciliation; duplicate characteristics are therefore unchanged.

## Next QA

Resume exactly at `p5_pos_adjective_before_noun_0037`.

Stop reason below 100: the remaining queue contains only 34 source-grounded revisions, and safe source repair is blocked in this runtime for candidate files whose complete contents cannot be retrieved. GitHub editing is whole-file replacement, several generated candidate files are large one-line JSON returned truncated by the connector, and the local runtime cannot fetch the repository directly. Do not perform partial or guessed file replacement. Keep `validation_complete: false`.
