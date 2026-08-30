# Power Color — QUESTION AND QA SPEC

## Runtime shape
Use the frozen Power TOEIC V1 required fields. Add color presentation metadata only as optional fields.

## Micro-skill IDs
Grade 3 conventional colors:
- `pc3.conventional.color_to_name`
- `pc3.conventional.name_to_color`

Reserved Grade 3 PCCS/relationship IDs:
- `pc3.pccs.color_to_hue`
- `pc3.pccs.color_to_tone`
- `pc3.pccs.color_to_notation`
- `pc3.pccs.notation_to_color`
- `pc3.relation.complementary_hue`
- `pc3.relation.same_hue`
- `pc3.relation.same_tone`
- `pc3.relation.hue_difference`
- `pc3.relation.tone_difference`
- `pc3.scheme.identification`
- `pc3.value.gradient`

## QA procedure
For every question:
1. Ignore the stored proposed/correct answer initially.
2. Resolve the correct color/name/attribute from the canonical master/source.
3. Check all four choices for uniqueness and unintended alternative correctness.
4. Confirm `colorRef` and presentation refs exist.
5. Resolve all display colors from the canonical master; question records must not carry a second conflicting hex authority.
6. Confirm the skill actually measures one intended ability.
7. Then compare with stored `correctIndex`.
8. Mark `verified`, `needs_revision`, or `rejected`.

## Color-specific rejection rules
Reject or revise when:
- two choices intentionally resolve to the same display value and the task depends only on display difference;
- the distinction is so small that ordinary monitor variation is the only separator;
- a PCCS mapping is inferred rather than sourced;
- the question is outside the current grade;
- the answer is only correct because the renderer leaks a name/code.

## Current beta
The initial 16 questions are a wiring/learning beta based on direct lookup in the 64-color master. They do not imply Grade 3 content completion.
