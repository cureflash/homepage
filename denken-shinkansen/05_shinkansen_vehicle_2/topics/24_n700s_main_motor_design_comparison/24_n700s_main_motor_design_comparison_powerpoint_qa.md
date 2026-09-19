# Topic 24 N700S 主電動機設計の比較 - 解説画像PowerPoint QA

更新日: 2026-09-20

判定: `BLOCKED / CANONICAL_PPTX_ZIP_INTEGRITY_FAIL`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 24ディレクトリ、直近の車両二種worker成果をreconcileした。練習PDFは既存workerが完成済みのため重複していない。

固定EXAM_ALIGNMENTは第二種一次3問＋二次2問、合計5問・17答案要素のまま変更していない。Topic 21 H26二次「機械・制御」問1(4)の `48.1 / 48.0 N·m` 差は既存診断どおり過去問固有の丸め差として維持し、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## QA済みローカルartifact

- 形式: 16:9 / `6 slides`
- byte size: `27,698 bytes`
- SHA-256: `9d551c8110e7bd3081f7219d6d85e66f23f859d02ff4326ebf70ec51f3eca4f8`
- ZIP integrity: `PASS`
- python-pptx open: `6 / 6 PASS`
- geometry overflow: `0`
- LibreOffice PDF変換: `PASS / 6 pages`
- Poppler render: `6 / 6 PASS`
- PDFium render: `6 / 6 PASS`
- contact sheet目視: `6 / 6 PASS`
- 文字切れ・重なり・欠落グリフ: `0`
- 固定5問・17答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

## GitHub正本 独立QA

対象:
- path: `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx`
- Git blob SHA: `5aa5cd61b81bc1d941d9d628c7abbc7af2bf536d`
- GitHub Contents API byte size: `24,879 bytes`

GitHub main正本そのものを独立QAする一時workflowを実行した。checkout後、最初の構造検査 `unzip -t` で `exit code 9` となり失敗した。したがって正本はZIP/PPTX packageとして整合性を確認できず、python-pptx open、LibreOffice変換、Poppler/PDFium renderには進めなかった。

ローカルQA済みartifact `27,698 bytes` とGitHub正本 `24,879 bytes` のidentity不一致も継続しているため、ローカルQA結果を正本へ流用しない。

## exact blocker

`GitHub main正本PPTX (24,879 bytes, blob 5aa5cd61b81bc1d941d9d628c7abbc7af2bf536d) は独立QAの最初の ZIP integrity check "unzip -t" で exit code 9 となった。正本を有効なPPTX packageとして確認できず、構造・表示QAを実施できない。QA済みローカルartifact (27,698 bytes, SHA-256 9d551c8110e7bd3081f7219d6d85e66f23f859d02ff4326ebf70ec51f3eca4f8) ともidentity不一致。`

- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- clean blind固定過去問再解答: `未実施`

## 停止点

Topic 24は `completed` にしない。clean blind独立再解答へ進めない。GitHub正本PPTXを有効なQA済みartifactへ修復・置換し、その正本に対してZIP/open/render QAを再実施できるまで停止する。