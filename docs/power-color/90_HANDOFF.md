# Power Color — HANDOFF

## Current checkpoint
Grade 3 Phase A remains active. Runtime is now 211 verified / pending 0: 127 conventional-color questions + 12 `pc3.pccs.complementary_hue_number` + 12 `pc3.relation.same_tone` + 12 `pc3.relation.same_hue` + 12 `pc3.relation.hue_difference` + 12 `pc3.value.gradient` + 12 `pc3.scheme.identification` + 12 `pc3.relation.hue_classification`. The shared Power TOEIC question-bank/workout/session engine remains the only engine.

Three source/data checkpoints have advanced:
1. The first-party-only blocker for named hue relations was replaced by the explicit reliable-secondary-source policy in `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`. Current Grade 3 first-party material still fixes scope; peer-reviewed evidence supplies the missing PCCS boundaries. `pc3.relation.hue_classification` has 12 independently verified text-only authoring records covering circular differences 1–12 exactly once. Authoring CI run `33463982640` succeeded and PR #459 merged as `4935f8a469408a89a71407cfd685b5f432b1f364`.
2. DIC Color Design's current PCCS reference was cross-checked against the already source-confirmed 24 positions/notations and supplies all 24 Japanese hue-name mappings. `grade3-pccs-structure.json` now has 24/24 `nameJa` values. Intentional duplicates 14/15 = 青緑 and 17/18 = 青 are gated. Reading fields remain null because an explicit reading source has not yet been acquired. PR #460 merged as `11532570f9a07fa316d7e74929a6ad437d1080b8`.
3. The 12 verified `pc3.relation.hue_classification` records were promoted record-identically into runtime through the repository's established verified-authoring promotion path. Runtime moved 199 -> 211. The first promotion attempt exposed only an obsolete test that assumed scheme-identification permanently owned the 199-question frontier; that old frontier assertion was generalized and a dedicated hue-classification 211-frontier equality/shared-engine gate was added. Workflow run `33464721122` then succeeded and generated commit `ef653c67ba1c2028d458cce47a83881b6b87ea86`.

Current-run question accounting: 12 generated / 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending. Runtime is 211 verified / pending 0.

Source boundaries now in force:
- Current Color Certification Association material remains the Grade 3 scope authority.
- Reliable secondary structural evidence is allowed only under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`: explicit PCCS identification, auditable rule, no conflict with current first-party material, and independent corroboration where practical.
- Named hue classification is resolved and runtime-promoted: 0 same, 1 adjacent, 2–3 similar, 4–7 medium-difference, 8–10 contrast, 11–12 complementary.
- Peer-reviewed 2019 `工学教育` evidence defines similar tones as adjacent tone regions and gives a coordinate-based judgment. Peer-reviewed 2026 evidence defines contrast tones conceptually and confirms `b` / `dk` as a contrast pair. The complete contrast-tone pair matrix is still under audit.
- PCCS Japanese hue names are 24/24 source-confirmed under the accepted specialist-industry source route; readings remain pending.
- PCCS representative monitor values remain unpopulated. The current licensed JCRI PCCS Color Calc direct numeric output remains the approved primary acquisition path.
- Monitor-facing PCCS questions remain blocked. No RGB/HEX rule was relaxed.
- Hue 20 remains `V`; the current JCRI manual treats `PB` only as a future rename, and the current DIC reference also lists `20:V / 青紫`.

Not complete:
- complete contrast-tone pair-membership evidence and `pc3.relation.tone_difference` generation;
- expansion of `pc3.scheme.identification` with the now-promoted named hue classes and, later, contrast-tone rules;
- explicit readings for the 24 Japanese hue names;
- current representative digital display values for monitor swatches and visual PCCS question families;
- full Grade 3 completion, then Grade 2 and Grade 1;
- `color_database_complete` remains false.

## Next exact start point
Finish and independently cross-check the conventional Grade 3 contrast-tone pair matrix, then generate `pc3.relation.tone_difference` only from the explicit audited matrix. The now-promoted named hue classification may also be used for the next deterministic scheme-identification expansion. Monitor-facing PCCS questions remain blocked until approved display references exist.
