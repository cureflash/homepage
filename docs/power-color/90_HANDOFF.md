# Power Color — HANDOFF

## Current checkpoint
Grade 3 Phase A remains active. Runtime remains 211 verified / pending 0: 127 conventional-color questions + 12 `pc3.pccs.complementary_hue_number` + 12 `pc3.relation.same_tone` + 12 `pc3.relation.same_hue` + 12 `pc3.relation.hue_difference` + 12 `pc3.value.gradient` + 12 `pc3.scheme.identification` + 12 `pc3.relation.hue_classification`. The shared Power TOEIC question-bank/workout/session engine remains the only engine.

A further source-safe authoring checkpoint has advanced without changing runtime:
1. `pc3.scheme.identification` was expanded with 12 additional text-only named-hue relation questions in `grade3-authoring-scheme-identification-0013-0024.json`: adjacent, similar, medium-difference, and contrast hue schemes, 3 questions each. Every answer is independently re-derived from the already source-resolved PCCS 24-hue circular-difference boundaries. Contrast-tone rules are not used in this batch.
2. The first CI run exposed an answer-position accounting defect only: metadata claimed A/B/C/D = 3/3/3/3 while the records were 2/4/4/2. Two questions had distractor order changed without changing the independently derived correct relation. The resulting distribution is 3/3/3/3.
3. Power Color workflow run `33472690476` succeeded after the correction. PR #463 merged to `main` as `4818eea517465b5829bb2aed33fa8e0a2aefdb17`.

Current authoring accounting is therefore 207 generated / 207 checked / 207 verified / 0 needs_revision / 0 rejected / 0 pending. Runtime is still 211 verified / pending 0 because the new 12 scheme-identification records have not yet been promoted.

Source boundaries now in force:
- Current Color Certification Association material remains the Grade 3 scope authority.
- Reliable secondary structural evidence is allowed only under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`: explicit PCCS identification, auditable rule, no conflict with current first-party material, and independent corroboration where practical.
- Named hue classification is resolved and runtime-promoted: 0 same, 1 adjacent, 2–3 similar, 4–7 medium-difference, 8–10 contrast, 11–12 complementary.
- Peer-reviewed 2019 `工学教育` evidence defines similar tones as adjacent tone regions and gives a coordinate-based judgment. Peer-reviewed 2026 evidence defines contrast tones conceptually and confirms `b` / `dk` as a contrast pair. The complete contrast-tone pair matrix is still under audit.
- A renewed source search found no additional first-party or academic source that exposes the complete conventional Grade 3 contrast-tone pair matrix. General study sites do publish tone-map-based classifications, but they are insufficient as sole authority under the current source contract and must not be used to infer missing pair memberships.
- PCCS Japanese hue names are 24/24 source-confirmed under the accepted specialist-industry source route; readings remain pending.
- PCCS representative monitor values remain unpopulated. The current licensed JCRI PCCS Color Calc direct numeric output remains the approved primary acquisition path.
- Monitor-facing PCCS questions remain blocked. No RGB/HEX rule was relaxed.
- Hue 20 remains `V`; the current JCRI manual treats `PB` only as a future rename, and the current DIC reference also lists `20:V / 青紫`.

Not complete:
- promotion of `grade3-authoring-scheme-identification-0013-0024.json` into runtime through the existing verified-authoring promotion path;
- complete contrast-tone pair-membership evidence and `pc3.relation.tone_difference` generation;
- explicit readings for the 24 Japanese hue names;
- current representative digital display values for monitor swatches and visual PCCS question families;
- full Grade 3 completion, then Grade 2 and Grade 1;
- `color_database_complete` remains false.

## Next exact start point
First promote the already merged 12 records in `grade3-authoring-scheme-identification-0013-0024.json` record-identically into `grade3-runtime.json` using the repository's established verified-authoring promotion path and add/update the runtime equality/shared-engine gate. Expected runtime total after promotion is 223. Do not regenerate these 12 questions.

After that, continue the independent source audit for the conventional Grade 3 contrast-tone pair matrix. Generate `pc3.relation.tone_difference` only if an explicit auditable complete matrix is established under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`; do not infer missing pairs from tone-map appearance, generic study tables, RGB/HEX, or screenshots. Monitor-facing PCCS questions remain blocked until approved display references exist.
