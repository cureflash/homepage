import { readFile, writeFile } from 'node:fs/promises';

const statusPath = 'docs/power-color/STATUS.json';
const handoffPath = 'docs/power-color/90_HANDOFF.md';
const planPath = 'docs/power-color/60_GRADE1_EXECUTION_PLAN.md';
const inventoryPath = 'docs/power-color/61_GRADE1_SOURCE_INVENTORY.md';

const status = JSON.parse(await readFile(statusPath, 'utf8'));
if (status.grade1.runtime_questions.verified !== 85 || status.grade1.runtime_skill_count !== 16) throw new Error('unexpected STATUS Grade 1 frontier');
status.grade1.runtime_questions = { verified: 89, pending: 0, needs_revision: 0, rejected: 0 };
status.grade1.runtime_skill_count = 17;
status.grade1.latest_runtime_promotion_gate = {
  status: 'merged_green',
  workflow_run: 33839331200,
  pr: 770,
  merge_commit: '93efd6fe722cde5a93ecdbdeb2e465d1f0136da6',
  skills: [
    'pc1.culture.ancient_europe_materials','pc1.culture.medieval_early_modern_europe_materials','pc1.culture.modern_europe_color_science','pc1.culture.ancient_japan_colour','pc1.culture.ancient_to_early_modern_japan','pc1.culture.modern_japan_colour','pc1.harmony.judd_p024','pc1.harmony.chevreul_p025','pc1.harmony.rood_p027','pc1.harmony.ostwald_p028','pc1.harmony.itten_p029','pc1.harmony.moon_spencer_p030','pc1.light_color.appearance_mode_p032','pc1.light_color.lighting_properties_p036','pc1.light_color.measurement_illuminants_p039','pc1.light_color.grassmann_laws_p041','pc1.color_representation.xyz_p046'
  ],
  verified: 89
};
status.grade1.active_topic = 'p.050 均等色空間とL*a*b*色空間 — 色差の表示 verified authoring record-identical promotion';
status.grade1.active_topic_source_status = 'SECONDARY_CORROBORATION_REQUIRED';
status.grade1.source_audit = 'docs/power-color/audits/2026-09-03-grade1-p050-cielab-source-audit.md';
status.grade1.active_authoring = 'qualifications/color-certification/data/grade1-authoring-cielab-p050-0001-0004.json';
delete status.grade1.canonical_inconsistency;
status.grade1.next = 'Keep p.035 色の分類 SOURCE_BLOCKED, then promote p.050 CIELAB using the four canonical verified authoring records exactly; require deep equality, full-fingerprint, answer-position and shared-engine gates before merge.';
status.current_run = { checkpoints_completed: 1, generated: 0, checked: 0, verified: 0, revision_events: 0, needs_revision: 0, rejected: 0, pending: 0, checkpoint_breakdown: ['Reconciled the failed p.046 promotion, promoted the canonical 4/4 verified XYZ records record-identically, passed Power Color CI 33839331200, and merged PR #770 as 93efd6fe722cde5a93ecdbdeb2e465d1f0136da6. Runtime is now 89 verified / 17 skills with A/B/C/D=23/23/23/20. Grade 2/3 incomplete states and all source/display gates remain unchanged.'] };
status.next = 'Keep p.035 SOURCE_BLOCKED and promote p.050 CIELAB using the canonical 4 verified authoring records record-identically through the shared-engine Grade 1 runtime gate.';
await writeFile(statusPath, `${JSON.stringify(status, null, 2)}\n`);

function replaceExact(text, from, to, label) {
  if (!text.includes(from)) throw new Error(`missing ${label}`);
  return text.replace(from, to);
}

let handoff = await readFile(handoffPath, 'utf8');
handoff = replaceExact(handoff,
  "The canonical Grade 1 runtime/promotion path uses the existing shared Power TOEIC question-bank/workout/session engine. p.006, p.007, p.010, p.014, p.017, p.021 culture batches plus p.024 Judd, p.025 Chevreul, p.027 Rood, p.028 Ostwald, p.029 Itten, p.030 Moon & Spencer, p.032 color appearance, p.036 lighting properties, p.039 measurement illuminants, and p.041 Grassmann's laws are now promoted record-identically. The promotion gate enforces runtime↔authoring deep equality, full-fingerprint uniqueness, answer-position auditing and shared-engine execution. Latest Power Color CI `33835640181` succeeded and PR #765 merged as `c08624c521977612cdc32f337e12dac4996ed68e`. Runtime is 85 verified / pending 0 across sixteen skills; A/B/C/D=22/22/22/19; `productionApproved` remains false.",
  "The canonical Grade 1 runtime/promotion path uses the existing shared Power TOEIC question-bank/workout/session engine. p.006, p.007, p.010, p.014, p.017, p.021 culture batches plus p.024 Judd, p.025 Chevreul, p.027 Rood, p.028 Ostwald, p.029 Itten, p.030 Moon & Spencer, p.032 color appearance, p.036 lighting properties, p.039 measurement illuminants, p.041 Grassmann's laws, and p.046 XYZ are now promoted record-identically. The promotion gate enforces runtime↔authoring deep equality, full-fingerprint uniqueness, answer-position auditing and shared-engine execution. Latest Power Color CI `33839331200` succeeded and PR #770 merged as `93efd6fe722cde5a93ecdbdeb2e465d1f0136da6`. Runtime is 89 verified / pending 0 across seventeen skills; A/B/C/D=23/23/23/20; `productionApproved` remains false.", 'handoff frontier');
handoff = handoff.replace(/## Exact next start point\n[\s\S]*$/,
  "## Exact next start point\nPromote the existing p.050 `pc1.color_representation.cielab_p050` batch 4/4 verified records record-identically through the canonical Grade 1 runtime gate. Source contract: `docs/power-color/audits/2026-09-03-grade1-p050-cielab-source-audit.md`. Authoring: `qualifications/color-certification/data/grade1-authoring-cielab-p050-0001-0004.json`. Classification remains `SECONDARY_CORROBORATION_REQUIRED`; the accepted narrow nonvisual boundary is limited to the four current-CIE fact families already encoded in that verified batch: CIELAB as a three-dimensional approximately uniform colour space; L*/a*/b* rectangular coordinates; Euclidean CIELAB colour difference; and reflecting/transmitting-object applicability with primary self-emitting areas excluded except normalized displays simulating such objects. Do not reconstruct unpublished AFT p.050 equations, derivations, examples, thresholds, diagrams, geometry, or display values. Continue only verified authoring in official TOC order and keep `productionApproved=false`.\n");
await writeFile(handoffPath, handoff);

let plan = await readFile(planPath, 'utf8');
plan = replaceExact(plan,
  "- [x] Promoted p.041 `pc1.light_color.grassmann_laws_p041` 4/4 verified records record-identically. Runtime deep-equality, full-fingerprint, A/B/C/D=22/22/22/19 and shared-engine gates cover 85 questions across sixteen skills; Power Color CI `33835640181` succeeded and PR #765 merged as `c08624c521977612cdc32f337e12dac4996ed68e`.\n\nGrade 1 runtime is 85 verified / pending 0 across sixteen promoted skills. `productionApproved` remains false.",
  "- [x] Promoted p.041 `pc1.light_color.grassmann_laws_p041` 4/4 verified records record-identically. Runtime deep-equality, full-fingerprint, A/B/C/D=22/22/22/19 and shared-engine gates cover 85 questions across sixteen skills; Power Color CI `33835640181` succeeded and PR #765 merged as `c08624c521977612cdc32f337e12dac4996ed68e`.\n- [x] Promoted p.046 `pc1.color_representation.xyz_p046` 4/4 canonical verified records record-identically after rejecting the earlier non-identical promotion payload. Runtime deep-equality, full-fingerprint, A/B/C/D=23/23/23/20 and shared-engine gates cover 89 questions across seventeen skills; Power Color CI `33839331200` succeeded and PR #770 merged as `93efd6fe722cde5a93ecdbdeb2e465d1f0136da6`.\n\nGrade 1 runtime is 89 verified / pending 0 across seventeen promoted skills. `productionApproved` remains false.", 'plan promotion');
plan = plan.replace(/## Exact next start point\n[\s\S]*$/,
  "## Exact next start point\nKeep p.035 `色の分類` `SOURCE_BLOCKED` and do not reconstruct its unpublished AFT taxonomy. Promote the existing p.050 `pc1.color_representation.cielab_p050` 4/4 verified records record-identically through the canonical Grade 1 runtime gate. Source contract: `docs/power-color/audits/2026-09-03-grade1-p050-cielab-source-audit.md`. Authoring: `qualifications/color-certification/data/grade1-authoring-cielab-p050-0001-0004.json`. Classification: `SECONDARY_CORROBORATION_REQUIRED`. Preserve all source/display blockers and do not create a Grade 1-specific engine.\n");
await writeFile(planPath, plan);

let inventory = await readFile(inventoryPath, 'utf8');
inventory = replaceExact(inventory,
  "Runtime promotion has begun in the same official order: p.006, p.007, p.010, p.014, p.017, p.021 culture batches plus p.024 Judd, p.025 Chevreul, p.027 Rood, p.028 Ostwald, p.029 Itten, p.030 Moon & Spencer, p.032 color appearance, p.036 lighting properties, p.039 measurement illuminants, and p.041 Grassmann's laws are promoted record-identically; p.035 remains blocked and p.046 XYZ is next.",
  "Runtime promotion has begun in the same official order: p.006, p.007, p.010, p.014, p.017, p.021 culture batches plus p.024 Judd, p.025 Chevreul, p.027 Rood, p.028 Ostwald, p.029 Itten, p.030 Moon & Spencer, p.032 color appearance, p.036 lighting properties, p.039 measurement illuminants, p.041 Grassmann's laws, and p.046 XYZ are promoted record-identically; p.035 remains blocked and p.050 CIELAB is next.", 'inventory frontier');
inventory = replaceExact(inventory, "Current runtime: 85 verified / pending 0 across sixteen skills; `productionApproved=false`.", "Current runtime: 89 verified / pending 0 across seventeen skills; `productionApproved=false`.", 'inventory counts');
inventory = replaceExact(inventory,
  "Promoted batches: p.006, p.007, p.010, p.014, p.017, p.021 culture batches (8/8 each), p.024 `pc1.harmony.judd_p024` (4/4), p.025 `pc1.harmony.chevreul_p025` (3/3), p.027 `pc1.harmony.rood_p027` (3/3), p.028 `pc1.harmony.ostwald_p028` (4/4), p.029 `pc1.harmony.itten_p029` (4/4), p.030 `pc1.harmony.moon_spencer_p030` (4/4), p.032 `pc1.light_color.appearance_mode_p032` (3/3), p.036 `pc1.light_color.lighting_properties_p036` (4/4), p.039 `pc1.light_color.measurement_illuminants_p039` (4/4), and p.041 `pc1.light_color.grassmann_laws_p041` (4/4), all record-identical.\nGate coverage: runtime↔authoring deep equality, full-fingerprint uniqueness, auditable correct positions A/B/C/D=22/22/22/19, and the existing shared Power TOEIC question-bank/workout/session engine.\nLatest Power Color CI `33835640181` succeeded; PR #765 merged as `c08624c521977612cdc32f337e12dac4996ed68e`.",
  "Promoted batches: p.006, p.007, p.010, p.014, p.017, p.021 culture batches (8/8 each), p.024 `pc1.harmony.judd_p024` (4/4), p.025 `pc1.harmony.chevreul_p025` (3/3), p.027 `pc1.harmony.rood_p027` (3/3), p.028 `pc1.harmony.ostwald_p028` (4/4), p.029 `pc1.harmony.itten_p029` (4/4), p.030 `pc1.harmony.moon_spencer_p030` (4/4), p.032 `pc1.light_color.appearance_mode_p032` (3/3), p.036 `pc1.light_color.lighting_properties_p036` (4/4), p.039 `pc1.light_color.measurement_illuminants_p039` (4/4), p.041 `pc1.light_color.grassmann_laws_p041` (4/4), and p.046 `pc1.color_representation.xyz_p046` (4/4), all record-identical.\nGate coverage: runtime↔authoring deep equality, full-fingerprint uniqueness, auditable correct positions A/B/C/D=23/23/23/20, and the existing shared Power TOEIC question-bank/workout/session engine.\nLatest Power Color CI `33839331200` succeeded; PR #770 merged as `93efd6fe722cde5a93ecdbdeb2e465d1f0136da6`.", 'inventory promotion list');
inventory = inventory.replace(/Next promotable batch in official order:[\s\S]*?Do not infer unpublished AFT p\.046 diagrams, exact formulas, derivations, worked examples, chromaticity geometry, or any display values\./,
  "Next promotable batch in official order: `qualifications/color-certification/data/grade1-authoring-cielab-p050-0001-0004.json`, p.050 `pc1.color_representation.cielab_p050`, 4/4 verified, pending 0, A/B/C/D=1/1/1/1. Source contract: `docs/power-color/audits/2026-09-03-grade1-p050-cielab-source-audit.md`. Classification: `SECONDARY_CORROBORATION_REQUIRED`. Accepted narrow nonvisual facts are limited to the audited current-CIE relations already encoded in the verified batch: three-dimensional approximately uniform CIELAB; L*/a*/b* rectangular coordinates; Euclidean CIELAB colour difference; and reflecting/transmitting-object applicability excluding primary self-emitting areas except normalized displays simulating such objects. Do not infer unpublished AFT p.050 equations, derivations, thresholds, diagrams, geometry, or display values.");
inventory = inventory.replace(/## Exact next frontier\n[\s\S]*$/,
  "## Exact next frontier\nKeep p.035 `SOURCE_BLOCKED`, then promote the existing p.050 `pc1.color_representation.cielab_p050` 4/4 verified records record-identically through the canonical shared-engine Grade 1 runtime gate. Continue only verified authoring in official TOC order and preserve every recorded source/display blocker.\n");
await writeFile(inventoryPath, inventory);

console.log('synced Grade 1 p046 canonical docs to p050 frontier');
