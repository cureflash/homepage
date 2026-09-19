# Topic 24 N700S 主電動機設計の比較 - 解説画像PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_CANONICAL_REPAIR_COMPLETE`

## 対象

- path: `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx`
- Git blob SHA: `6ae38920238198426df92ecf6bd99e74ca7214cf`
- GitHub Contents API byte size: `264,329 bytes`
- 修復コミット: `22f4bed3aa88ea00e99274c7b59d08198ef1a84b`

旧GitHub正本 `24,879 bytes / blob 5aa5cd61...` はZIP integrity不良だったため、既存のTopic 24生成sourceから正本PPTXを再生成した。固定EXAM_ALIGNMENT、解説source、練習source、一般式、SPECは変更していない。

## GitHub正本 QA

GitHub mainをcheckoutした一時workflow上で正本そのものを検査した。

- ZIP integrity (`unzip -t`): `PASS`
- python-pptx open: `PASS`
- slide count: `6 / 6`
- geometry: 全shapeがslide bounds内 / overflow `0`
- content token gate: `PASS`
- LibreOffice PDF変換: `PASS`
- LibreOffice render page count: `6 / 6`

PowerPointの内容責務は既存のQA済み生成sourceをそのまま再生成したため変更なし。

- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 covered`
- 一次答案要素: `11 / 11 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

## 境界

- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- clean blind固定過去問再解答: `未実施`

## 次工程

PowerPoint正本blockerは解消。Topic 24はまだ `completed` にしない。次はTopic 24教材だけを使い、固定第二種一次3問＋二次2問、合計5問・17答案要素のclean blind独立再解答を行う。