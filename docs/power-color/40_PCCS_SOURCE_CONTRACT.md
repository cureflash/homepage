# Power Color — Grade 3 PCCS Source Contract

## Purpose
Fix the authoritative source boundary for Grade 3 PCCS before any PCCS question generation. This contract deliberately separates structural PCCS truth from monitor display values.

## Authority chain

### 1. Exam scope authority — Color Certification Association
Current official Grade 3 material confirms that PCCS is in Grade 3 scope and that learners are tested on PCCS-based color combinations.

Sources:
- https://www.aft.or.jp/pages/feature/exam3
- https://www.aft.or.jp/pages/feature/level

Use these sources to decide whether a PCCS operation belongs in Grade 3 and to align question patterns. Do not copy official sample wording, diagrams, or answer choices.

### 2. PCCS system authority — Japan Color Enterprise / Japan Color Research Institute lineage
Current official product documentation for PCCS confirms:
- PCCS uses a 24-hue circle.
- PCCS products organize colors by tone.
- The current PCCS Color Tone Circle exposes 11 chromatic tone groups `v`, `b`, `dp`, `lt+`, `sf`, `d`, `dk`, `p+`, `ltg`, `g`, `dkg`, each represented across 12 hues.
- Current PCCS teaching/chart products reproduce physical PCCS reference colors using dedicated high-accuracy printing rather than claiming ordinary monitor RGB equivalence.

Sources:
- https://sikiken.co.jp/products/70731.html
- https://sikiken.co.jp/products/60650.html
- https://sikiken.co.jp/products/60657.html
- https://sikiken.co.jp/products/67620.html

## Master-data rule
PCCS master data must distinguish four kinds of fields:

1. `systemTruth`
   - stable PCCS identifier
   - hue position / hue notation when directly sourced
   - tone code / tone name when directly sourced
   - PCCS notation when directly sourced
   - relationship facts derived deterministically from sourced PCCS positions

2. `displayReference`
   - monitor RGB/HEX only when a current authoritative source explicitly publishes the value for that exact PCCS state
   - otherwise `null`

3. `sourceRefs`
   - exact source IDs/URLs supporting each stored fact

4. `validationStatus`
   - `source_confirmed`, `pending_source`, `needs_revision`, or `rejected`

No field may silently promote a visually approximated swatch into PCCS truth.

## Display-value gate
As of 2026-08-31, the reviewed current official public pages confirm physical PCCS color products and PCCS structure but do not provide a complete authoritative public RGB/HEX table for the PCCS states needed by Power Color.

Therefore:
- do not generate `color_to_hue`, `hue_to_color`, `color_to_tone`, `tone_to_color`, `color_to_notation`, or `notation_to_color` questions that depend on unsourced monitor swatches;
- do not derive RGB/HEX from screenshots, catalog images, browser sampling, Munsell conversion, third-party PCCS tables, or hand-tuned approximations;
- structural master records may be added only for directly confirmed hue/tone/notation facts;
- monitor-facing PCCS questions remain blocked until every rendered target/choice has an approved display reference source.

## Relationship derivation rule
Once hue positions are individually source-confirmed, relationships such as same hue, hue difference, and complementary hue may be computed from canonical positions. The derived relationship must retain refs to the underlying sourced hue records; it does not require a second external source for the arithmetic relation.

Tone relationships may be derived only after the exact tone set and relevant adjacency/difference model required by the Grade 3 official material are source-confirmed. Do not infer a tone-distance graph from visual layout alone.

## Completion condition for Phase 2 source confirmation
Source confirmation is complete only when:
- Grade 3 scope authority is recorded;
- PCCS structural authority is recorded;
- the permitted field/source contract is fixed;
- unsourced RGB/HEX generation is explicitly prohibited;
- the remaining display-reference blocker is represented in STATUS/HANDOFF rather than bypassed.

Question generation starts only after the specific master slice needed by that question type has both structural truth and approved display references.