# Power Color — HANDOFF

## Current checkpoint
Grade 3 Phase A remains active. Runtime is now 223 verified / pending 0: 127 conventional-color questions + 12 `pc3.pccs.complementary_hue_number` + 12 `pc3.relation.same_tone` + 12 `pc3.relation.same_hue` + 12 `pc3.relation.hue_difference` + 12 `pc3.value.gradient` + 24 `pc3.scheme.identification` + 12 `pc3.relation.hue_classification`. The shared Power TOEIC question-bank/workout/session engine remains the only engine.

The previously merged 12-question named-hue `pc3.scheme.identification` expansion has now been promoted:
1. `grade3-authoring-scheme-identification-0013-0024.json` remains text-only and uses only already source-resolved named hue relations: adjacent, similar, medium-difference, and contrast hue, 3 questions each. Contrast-tone rules are not used.
2. The first 223 promotion attempt exposed two independent gates rather than a source/answer failure. The old hue-classification runtime test still fixed the whole runtime at 211, and the corpus fingerprint gate found two choice-order collisions: `0020` vs `0014` and `0024` vs `0019`.
3. The obsolete 211 frontier assertion was generalized to allow later runtime growth. For the two fingerprint collisions, distractors only were reordered; the independently re-derived correct relations and correct indexes were preserved. The batch remains 12/12 verified with A/B/C/D = 3/3/3/3.
4. A 223-frontier runtime gate now requires all 24 scheme-identification records to equal the two authoring batches exactly, independently re-derives the named-hue answers from circular hue distance, and executes the promoted records through the shared Power TOEIC engine.
5. Repository-native verified-authoring promotion produced runtime 211 → 223. Workflow run `33476901313` succeeded with all Power Color tests passing before committing the promotion result. PR #467 then passed Power Color workflow run `33477069614` and merged to `main` as `3ca5ebaeb1dca9b9d6c61212b4916ffad7c9ba0e`.

Current authoring accounting is 207 generated / 207 checked / 207 verified / 0 needs_revision / 0 rejected / 0 pending. Runtime is 223 verified / pending 0.

Source boundaries now in force:
- Current Color Certification Association material remains the Grade 3 scope authority.
- Reliable secondary structural evidence is allowed only under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`: explicit PCCS identification, auditable rule, no conflict with current first-party material, and independent corroboration where practical.
- Named hue classification is resolved and runtime-promoted: 0 same, 1 adjacent, 2–3 similar, 4–7 medium-difference, 8–10 contrast, 11–12 complementary.
- Peer-reviewed 2019 `工学教育` evidence defines similar tones as adjacent tone regions and gives a coordinate-based judgment. Peer-reviewed 2026 evidence defines contrast tones conceptually and confirms `b` / `dk` as a contrast pair. The complete contrast-tone pair matrix is still under audit.
- Additional targeted academic search on 2026-09-01 found a 2004 Japan Association of Home Economics Education paper that explicitly classifies PCCS tone schemes as same/similar/contrast, but its public text does not expose the tone-pair membership matrix. It therefore confirms the classification vocabulary only and does not unblock generation.
- A specialist tutorial found in the same targeted search gives examples such as `p` / `dp` and `g` / `v` and describes large lightness/saturation separation, but it is not an accepted sole authority under the source contract. Those examples must not be expanded into an inferred complete matrix.
- Searches scoped to J-STAGE, CiNii, academic domains, and exact `対照トーン` terminology still did not expose a complete auditable conventional Grade 3 pair matrix. Do not repeat these same generic routes without a new lead.
- PCCS Japanese hue names are 24/24 source-confirmed under the accepted specialist-industry source route; readings remain pending.
- PCCS representative monitor values remain unpopulated. The current licensed JCRI PCCS Color Calc direct numeric output remains the approved primary acquisition path.
- Monitor-facing PCCS questions remain blocked. No RGB/HEX rule was relaxed.
- Hue 20 remains `V`; the current JCRI manual treats `PB` only as a future rename, and the current DIC reference also lists `20:V / 青紫`.

Not complete:
- complete contrast-tone pair-membership evidence and `pc3.relation.tone_difference` generation;
- explicit readings for the 24 Japanese hue names;
- current representative digital display values for monitor swatches and visual PCCS question families;
- full Grade 3 completion, then Grade 2 and Grade 1;
- `color_database_complete` remains false.

## Next exact start point
Continue the independent source audit for the conventional Grade 3 contrast-tone pair matrix from a genuinely new source lead, not the already exhausted generic J-STAGE/CiNii/academic exact-term searches. Generate `pc3.relation.tone_difference` only if an explicit auditable complete matrix is established under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`; do not infer missing pairs from tone-map appearance, generic study tables, RGB/HEX, screenshots, or isolated examples such as `b` / `dk`, `p` / `dp`, or `g` / `v`.

Monitor-facing PCCS questions remain blocked until approved display references exist.
