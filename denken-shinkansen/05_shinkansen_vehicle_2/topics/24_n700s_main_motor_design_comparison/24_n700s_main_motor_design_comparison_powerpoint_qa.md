# Topic 24 N700S 主電動機設計の比較 - 解説画像PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 24ディレクトリ、直近の車両二種worker成果を確認した。練習PDFは既存workerが完成済みだったため重複せず、次工程のPowerPoint作成＋QAだけを実施した。

固定EXAM_ALIGNMENTは第二種一次3問＋二次2問、合計5問・17答案要素のまま変更していない。Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既存診断どおり過去問固有の丸め差として維持し、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## artifact

対象: `24_n700s_main_motor_design_comparison_images.pptx`

- 形式: 16:9 / `6 slides`
- byte size: `27,698 bytes`
- SHA-256: `9d551c8110e7bd3081f7219d6d85e66f23f859d02ff4326ebf70ec51f3eca4f8`
- Git blob SHA: `5aa5cd61b81bc1d941d9d628c7abbc7af2bf536d`

## 構造・表示QA

- ZIP整合性: `PASS`
- python-pptx open: `6 / 6 PASS`
- geometry overflow: `0`
- LibreOffice PDF変換: `PASS / 6 pages`
- PDFページ寸法: `960.009 × 540 pt`
- Poppler render: `6 / 6 PASS`
- PDFium render: `6 / 6 PASS`
- contact sheet目視: `6 / 6 PASS`
- 文字切れ・重なり・欠落グリフ: `0`
- pdftotext replacement character `�`: `0`
- pdftotext `(cid:)`: `0`

## 内容QA

- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 covered`
- 一次答案要素: `11 / 11 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
  - 極数 / 同期速度 / すべり / 周波数 / 回転速度 / トルク / 電気角 / 小型軽量化
- SPEC指定3可視化: `3 / 3 PASS`
  1. 極数・周波数―同期速度
  2. すべり―実回転速度
  3. 条件変更時の速度比較
- N700S実車接続: 一次資料で確認済みの主電動機6極化のみを実値として使用
- 駆動システム約20%軽量化: SiC主変換装置＋主電動機6極化＋主変圧器冷却方式見直しを合わせた全体値として維持
- 主電動機単体・6極化単独の20%軽量化への読み替え: `0件`
- 未確認N700S実運転周波数・回転速度・トルク・寸法・質量の真値化: `0件`
- Topic 21 H26二次 問1(4)の一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 新たなexact blocker: `0件`

## 次工程

PowerPoint工程のみ完了。Topic 24全体はまだ `completed` としない。次はTopic 24教材だけを使い、固定5問・17答案要素をclean blind独立再解答する。