# Power TOEIC — question and QA specification

## Core learner-facing question format

V1 uses Part 5-style four-choice cloze questions.

Required presentation:

```text
The manager spoke ____ about the new policy.

A. efficient
B. efficiency
C. efficiently
D. efficiencies
```

Exactly one option must be defensibly correct in the complete displayed sentence.

## Canonical question fields

Minimum target schema:

```text
id
part
skill_group
micro_skill
secondary_skills[]
confusion_type
difficulty_expected
difficulty_observed
stem
choices[4]
answer_index
explanation
template_id
generator_version
qa_status
qa_scores
source_or_rule_notes
duplicate_cluster
usage_stats
```

`stem` must contain one explicit blank placeholder in the canonical data representation. Rendering code owns how the blank is displayed.

## Micro-skill requirement

Every question has exactly one primary micro-skill. Optional secondary skills may be recorded, but the primary micro-skill must represent the intended reason the correct answer is uniquely correct.

Examples of useful confusion types:

- adjective_vs_adverb;
- noun_vs_adjective;
- preposition_vs_conjunction;
- active_vs_passive;
- past_vs_present_perfect;
- singular_vs_plural_agreement;
- relative_pronoun_choice;
- collocation_choice.

`confusion_type` exists because Power TOEIC aims to attack the cause of repeated mistakes, not only broad category accuracy.

## Candidate generation philosophy

Do not prompt an AI with only "make a TOEIC question".

Each generated candidate should come from a constrained specification containing at least:

- target micro-skill;
- target decision rule;
- intended correct form/meaning;
- distractor family;
- lexical/context constraints;
- expected difficulty;
- template ID/version.

Generate more candidates than needed and reject aggressively.

## QA pipeline

Target pipeline:

```text
skill/template specification
  -> candidate generation
  -> schema validation
  -> deterministic rule checks
  -> answer/explanation consistency
  -> all-choice substitution review/check
  -> independent solver/judge checks where available
  -> distractor plausibility checks
  -> semantic duplicate detection
  -> difficulty/style filter
  -> approved bank
  -> real learner attempts
  -> item statistics / reports
  -> keep, rewrite, or quarantine
```

Runtime quiz play must use only approved bank entries. It must never invoke generation as a fallback.

## Mandatory automated checks before approval

At minimum:

1. unique question ID;
2. exactly four non-empty choices;
3. four distinct visible choice strings unless a documented normalization rule applies;
4. answer index points to one existing choice;
5. required taxonomy IDs exist;
6. exactly one primary micro-skill;
7. explanation exists;
8. explanation references the intended answer/rule consistently;
9. blank count is exactly one;
10. template/generator version is present for generated questions;
11. duplicate/similarity scan has run;
12. QA status is explicit.

## Ambiguity policy

Any candidate is rejected or quarantined when another presented choice can reasonably be defended as correct in the displayed context.

When semantic nuance rather than grammar is required, the sentence must contain enough context to force one answer. Do not rescue an ambiguous stem through explanation text after the fact.

## Distractor policy

Distractors must be plausible for the targeted error pattern but still wrong.

For word-family items, options may intentionally use related forms. For vocabulary/usage items, do not use arbitrary unrelated words merely to fill four slots.

A distractor that almost nobody chooses is a signal for later review, not automatically an invalid item. A distractor preferred by stronger users over the keyed answer is a high-priority quarantine signal.

## Duplicate policy

The bank should contain many questions for the same micro-skill but not thousands of surface-level copies.

Duplicate detection should consider:

- normalized stem text;
- lexical-family/template identity;
- sentence structure;
- option family;
- semantic embedding/similarity when available offline.

The goal is repeated encounters with the same loss cause under different surface forms.

## Usage statistics

When enough attempts exist, track at least:

- total attempts;
- correct rate;
- median/typical response time;
- per-choice selection rate;
- report count/reason;
- user-skill stratified behavior if available later.

Observed difficulty must remain separate from expected difficulty.

## Bad-question lifecycle

Questions may have statuses such as:

- candidate;
- qa_pending;
- approved;
- quarantined;
- retired.

Reported or statistically suspicious questions should be removable from active selection without deleting historical attempt references.

## Gold fixtures

Maintain a small reviewed Gold set and deliberately bad fixtures.

Bad fixtures should include examples such as:

- two defensible answers;
- duplicated choices;
- wrong answer index;
- explanation contradicting answer;
- wrong micro-skill tag;
- malformed blank;
- near-duplicate wording.

QA changes must be tested against these fixtures before scaling generation volume.
