from pathlib import Path

ROOT = Path('denken-shinkansen/10_electrical_math_2')
STATUS = ROOT / 'STATUS.md'
HANDOFF = ROOT / 'HANDOFF.md'
TOPIC = ROOT / 'topics/17_ode_numerical_methods/17_ode_numerical_methods.md'
QA = ROOT / 'topics/17_ode_numerical_methods/17_ode_numerical_methods_powerpoint_qa.md'


def replace_once(text, old, new, label):
    n = text.count(old)
    if n != 1:
        raise SystemExit(f'{label}: expected exactly 1 match, got {n}')
    return text.replace(old, new, 1)

# QA: synchronize to the binary actually generated on GitHub.
q = QA.read_text(encoding='utf-8')
q = replace_once(q,
    '- SHA-256: `cd118a4a04b2fc8e8c4345adfd7da1ce341976d4d08e5a607220b0121e5a2207`\n- file size: `8675 bytes`',
    '- SHA-256: `cc64feee12bc2f09fa78a5435a18369a80113067c7ebb21e32a4087fde7e41f0`\n- Git blob SHA: `b015caa695de1543bbbe9255030924a8025361e4`\n- file size: `41242 bytes`',
    'QA integrity')
q = replace_once(q,
    '- 全5スライド再レンダリング: `5 / 5 PASS`\n- クリッピング・重なり・文字化け: `0件`\n- overflow: `0件`\n- `slides_test.py`: `PASS`\n- PPTX ZIP/XML整合性: `PASS`',
    '- 同一生成コードによる全5スライド再レンダリング: `5 / 5 PASS`\n- クリッピング・重なり・文字化け: `0件`\n- overflow: `0件`\n- `slides_test.py`: `PASS`\n- GitHub生成時のPPTX ZIP/XML整合性: `PASS`',
    'QA display wording')
QA.write_text(q, encoding='utf-8')

# STATUS: advance exactly one stage, PowerPoint + its display QA.
s = STATUS.read_text(encoding='utf-8')
s = replace_once(s, '- current_status: `topic_17_practice_pdf_complete`', '- current_status: `topic_17_powerpoint_complete`', 'STATUS current_status')
s = replace_once(s, '- next_start: Topic 17の解説画像PowerPointを作成し、PowerPoint表示QAを行う', '- next_start: Topic 17の完成後独立検証を行う', 'STATUS next_start')
s = replace_once(s, '- [ ] 解説画像PowerPoint\n- [ ] PowerPoint表示QA', '- [x] 解説画像PowerPoint（16:9・5枚、固定範囲 `5 / 5`）\n- [x] PowerPoint表示QA（再レンダリング `5 / 5 PASS`、overflow `0件`、`slides_test.py` `PASS`）', 'STATUS Topic17 ppt checklist')
head, sep, _tail = s.partition('## 今回進めた内容\n')
if not sep:
    raise SystemExit('STATUS progress section not found')
s = head + sep + '''\nTopic 17の解説画像PowerPointを作成し、表示・数値・仕様境界を確認した。\n\n- PowerPoint: `topics/17_ode_numerical_methods/17_ode_numerical_methods_images.pptx`\n- QA記録: `topics/17_ode_numerical_methods/17_ode_numerical_methods_powerpoint_qa.md`\n- 16:9・5枚\n- 固定範囲5項目: `5 / 5 covered`\n- 接続確認した第二種公式過去問: `5問`\n- 直接Euler法・Runge-Kutta法を要求する確認済み第二種過去問: `0問`\n- 非該当5問の固定品質ゲート件数への水増し: `0件`\n- 同一生成コードによる表示QA: `5 / 5 PASS`\n- overflow: `0件`\n- `slides_test.py`: `PASS`\n- 数値整合: `PASS`\n- Runge-Kutta法: `SPEC.md` どおり概念説明に限定\n- Topic 18以降の先取り: `0件`\n- 未確認実車値依存: `0件`\n\n## 判定\n\n`topic_17_powerpoint_complete / IN_PROGRESS`\n\n完成数は `16 / 20` のまま。\n\n次はTopic 17の完成後独立検証を行う。固定範囲と件数水増し0件を維持する。\n'''
STATUS.write_text(s, encoding='utf-8')

# HANDOFF: synchronize current position and next gate.
h = HANDOFF.read_text(encoding='utf-8')
h = replace_once(h, 'current_status: `topic_17_practice_pdf_complete`', 'current_status: `topic_17_powerpoint_complete`', 'HANDOFF current_status')
h = replace_once(h, '次工程: Topic 17の解説画像PowerPointを作成し、PowerPoint表示QAを行う。', '次工程: Topic 17の完成後独立検証を行う。', 'HANDOFF next top')
h = replace_once(h, '- Topic 17 練習PDF＋QA: 完了', '- Topic 17 練習PDF＋QA: 完了\n- Topic 17 解説画像PowerPoint＋表示QA: 完了', 'HANDOFF reconcile')
insert = '''## 解説画像PowerPoint\n\nPowerPoint:\n`topics/17_ode_numerical_methods/17_ode_numerical_methods_images.pptx`\n\nQA:\n`topics/17_ode_numerical_methods/17_ode_numerical_methods_powerpoint_qa.md`\n\n確認済み:\n\n- 16:9・5枚\n- 固定範囲5項目 `5 / 5 covered`\n- 同一生成コードによる表示QA `5 / 5 PASS`\n- overflow `0件`\n- `slides_test.py` `PASS`\n- PPTX ZIP/XML整合性 `PASS`\n- 数値整合 `PASS`\n- 直接Euler/RK要求の固定過去問 `0問`\n- 非該当5問の固定品質ゲート件数への水増し `0件`\n- Topic 18以降の先取り `0件`\n- 未確認実車値依存 `0件`\n\n判定: `PASS / POWERPOINT_COMPLETE`\n\n'''
if '## 解説画像PowerPoint\n' not in h:
    marker = '## 現在の品質ゲート\n'
    if marker not in h:
        raise SystemExit('HANDOFF quality gate marker missing')
    h = h.replace(marker, insert + marker, 1)
h = replace_once(h, '- [ ] 解説画像PowerPoint\n- [ ] PowerPoint表示QA', '- [x] 解説画像PowerPoint\n- [x] PowerPoint表示QA', 'HANDOFF ppt checklist')
old_end = '''## 次工程\n\nTopic 17の解説画像PowerPointを作成し、PowerPoint表示QAを行う。固定範囲、直接Euler/RK要求0問、非該当問題の件数水増し0件を維持する。'''
new_end = '''## 次工程\n\nTopic 17の完成後独立検証を行う。固定範囲、直接Euler/RK要求0問、非該当問題の件数水増し0件を維持する。'''
h = replace_once(h, old_end, new_end, 'HANDOFF next end')
HANDOFF.write_text(h, encoding='utf-8')

# Topic source: progress metadata only; substantive fixed content is unchanged.
t = TOPIC.read_text(encoding='utf-8')
t = replace_once(t, '`topic_17_explanation_body_complete / IN_PROGRESS`', '`topic_17_powerpoint_complete / IN_PROGRESS`', 'TOPIC state')
old_para = '2026-09-18、制作前EXAM_ALIGNMENT、制作前独立数値検証、解説本文＋3段階例題まで完了した。固定6説明項目を `6 / 6` 実装し、接続確認した第二種公式過去問5問との教材内接続を明示した。直接Euler法・Runge-Kutta法を要求する確認済み第二種過去問は0問のままで、件数水増しは行っていない。次工程は解説PDFの作成と表示QAである。'
new_para = '2026-09-18、制作前EXAM_ALIGNMENT、制作前独立数値検証、解説本文＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint＋表示QAまで完了した。固定6説明項目と固定範囲5項目を維持し、接続確認した第二種公式過去問5問は直接Euler法・Runge-Kutta法を要求しないため品質ゲート件数へ水増ししていない。次工程は完成後独立検証である。'
t = replace_once(t, old_para, new_para, 'TOPIC status paragraph')
t = replace_once(t,
    '- 解説本文＋3段階例題: `PASS`\n- Topic 18以降の先取り: `0件`',
    '- 解説本文＋3段階例題: `PASS`\n- 解説PDF＋QA: `PASS`\n- 練習問題source＋練習PDF＋QA: `PASS`\n- 解説画像PowerPoint＋表示QA: `PASS`\n- Topic 18以降の先取り: `0件`',
    'TOPIC quality summary')
t = replace_once(t,
    '固定済みEXAM_ALIGNMENTと解説本文を変更せず、解説PDFを作成し、表示QA・文字抽出QA・数値整合を確認する。',
    '固定済みEXAM_ALIGNMENTと教材内容を変更せず、完成後独立検証を行う。直接Euler/RK要求0問と非該当問題の件数水増し0件を維持する。',
    'TOPIC next')
TOPIC.write_text(t, encoding='utf-8')

print('patched Topic 17 PowerPoint progress records')
