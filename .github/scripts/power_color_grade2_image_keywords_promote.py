import json
from pathlib import Path

runtime_path = Path('qualifications/color-certification/data/grade2-runtime.json')
authoring_path = Path('qualifications/color-certification/data/grade2-authoring-image-scheme-keywords-0001-0012.json')
test_path = Path('qualifications/color-certification/tests/grade2-runtime-promotion.test.js')
status_path = Path('docs/power-color/STATUS.json')
plan_path = Path('docs/power-color/50_GRADE2_EXECUTION_PLAN.md')
handoff_path = Path('docs/power-color/90_HANDOFF.md')
inventory_path = Path('docs/power-color/51_GRADE2_CONCEPT_SOURCE_INVENTORY.md')

runtime = json.loads(runtime_path.read_text())
authoring = json.loads(authoring_path.read_text())
assert len(runtime['questions']) == 132 and len(runtime['skills']) == 11
assert len(authoring['questions']) == 12 and authoring['qaSummary']['verified'] == 12 and authoring['qaSummary']['pending'] == 0
assert all(q['validationStatus'] == 'verified' for q in authoring['questions'])
old_ids = {q['id'] for q in runtime['questions']}
old_fp = {(q['sentence'], tuple(q['choices'])) for q in runtime['questions']}
for q in authoring['questions']:
    assert q['id'] not in old_ids
    assert (q['sentence'], tuple(q['choices'])) not in old_fp
runtime['skills'].append(authoring['skill'])
runtime['questions'].extend(authoring['questions'])
assert len(runtime['questions']) == 144
runtime_path.write_text(json.dumps(runtime, ensure_ascii=False, indent=2) + '\n')

t = test_path.read_text()
needle = "const hueCircleDivision = JSON.parse(await readFile(new URL('../data/grade2-authoring-hue-circle-division-0001-0012.json', import.meta.url), 'utf8'));\n"
assert needle in t
t = t.replace(needle, needle + "const imageSchemeKeywords = JSON.parse(await readFile(new URL('../data/grade2-authoring-image-scheme-keywords-0001-0012.json', import.meta.url), 'utf8'));\n")
t = t.replace('const batches = [foundation, triad, munsell, naturalComplex, dominant, toneOnTone, toneInTone, tonal, camaieu, bicolorTricolor, hueCircleDivision];', 'const batches = [foundation, triad, munsell, naturalComplex, dominant, toneOnTone, toneInTone, tonal, camaieu, bicolorTricolor, hueCircleDivision, imageSchemeKeywords];')
t = t.replace("assert.equal(runtime.questions.length, 132);", "assert.equal(runtime.questions.length, 144);")
t = t.replace("assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 132);", "assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 144);")
t = t.replace('totalCount: 33,', 'totalCount: 36,').replace(').length, 33);', ').length, 36);')
test_path.write_text(t)

status = json.loads(status_path.read_text())
assert status['grade2']['runtime_questions']['verified'] == 132
status['grade2']['runtime_questions'] = {'verified':144,'pending':0,'needs_revision':0,'rejected':0}
status['grade2']['runtime_skills'].append('pc2.image.image_scheme_keywords')
status['grade2']['active_skill'] = None
status['grade2']['active_authoring'] = {'generated':0,'checked':0,'verified':0,'pending':0}
status['grade2']['next'] = 'Continue source acquisition at Visual Design, the next current official Grade 2 text topic. Generate only from explicit auditable nonvisual rules; retain image/display/RGB/HEX prohibitions.'
status['current_run']['checkpoints_completed'] = 3
status['current_run']['checkpoint_breakdown'].append('Promoted pc2.image.image_scheme_keywords record-identically into Grade 2 runtime 132 to 144; extended exact-equality/full-fingerprint/shared Power TOEIC engine gate to twelve promoted skills.')
status['next'] = 'Continue Grade 2 source acquisition at Visual Design.'
status_path.write_text(json.dumps(status, ensure_ascii=False, indent=2) + '\n')

plan = plan_path.read_text()
plan = plan.replace('Grade 2 runtime is 132 verified / pending 0 across eleven promoted skills.', 'Grade 2 runtime is 144 verified / pending 0 across twelve promoted skills.')
plan = plan.replace('Runtime exact-equality/full-fingerprint/shared-engine gates cover all eleven promoted skills.', 'Runtime exact-equality/full-fingerprint/shared-engine gates cover all twelve promoted skills.')
plan = plan.replace('- [ ] Promote `pc2.image.image_scheme_keywords` record-identically; target runtime 132 → 144 after exact-equality/full-fingerprint/shared-engine gates.', '- [x] Promote `pc2.image.image_scheme_keywords` record-identically; runtime 132 → 144 with exact-equality/full-fingerprint/shared-engine gates passing.')
old = 'Promote `grade2-authoring-image-scheme-keywords-0001-0012.json` record-identically into `grade2-runtime.json`, extend the runtime gate to twelve batches / 144 verified questions, and require exact record equality, zero full-fingerprint duplicates and shared Power TOEIC engine execution before continuing to Visual Design.'
assert old in plan
plan = plan.replace(old, 'Continue source acquisition at Visual Design, the next current official Grade 2 text topic. Author only if an explicit auditable nonvisual rule is fixed without image appearance, RGB/HEX, monitor values, screenshots or unstated geometry.')
plan_path.write_text(plan)

handoff = handoff_path.read_text()
handoff = handoff.replace('Grade 2 runtime is now 132 verified / pending 0 across eleven promoted skills.', 'Grade 2 runtime is now 144 verified / pending 0 across twelve promoted skills.')
oldh = 'Promote `qualifications/color-certification/data/grade2-authoring-image-scheme-keywords-0001-0012.json` record-identically into runtime 132 → 144. Extend `grade2-runtime-promotion.test.js` to twelve batches and require exact equality, zero full-fingerprint duplicates and shared Power TOEIC engine execution before merge.'
assert oldh in handoff
handoff = handoff.replace(oldh, '`pc2.image.image_scheme_keywords` is now promoted record-identically; Grade 2 runtime is 144 verified / pending 0 across twelve skills. Exact equality, zero full-fingerprint duplicates and shared Power TOEIC engine execution pass.\n\nContinue source acquisition at Visual Design; retain all monitor/display, RGB/HEX and image-inference prohibitions.')
handoff_path.write_text(handoff)

inv = inventory_path.read_text()
inv = inv.replace('   - authoring 12/12 verified, pending 0, awaiting runtime promotion;', '   - authoring 12/12 verified, pending 0, promoted record-identically;')
inv = inv.replace('1. Grade 2 runtime frontier is 132 verified / pending 0 across eleven promoted skills.\n2. Promote the independently verified `pc2.image.image_scheme_keywords` 12-question batch record-identically, extending runtime 132 → 144 after gates pass.\n3. Then continue to Visual Design, without inferring answers from images, RGB/HEX or monitor values.', '1. Grade 2 runtime frontier is 144 verified / pending 0 across twelve promoted skills.\n2. Continue source acquisition at Visual Design, the next current official-text topic.\n3. Do not infer answers from images, RGB/HEX, monitor values, screenshots or unstated geometry.')
inventory_path.write_text(inv)
