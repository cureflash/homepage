# Topic 08 最終QA

実施日: 2026-09-15

対象: `08 位相制御と平均直流電圧`

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`

## 必須成果物
GitHub正本上で次を確認した。

- source Markdown: `08_phase_control_average_dc_voltage.md`
- 練習問題source: `08_phase_control_average_dc_voltage_practice_source.md`
- 解説PDF: `08_phase_control_average_dc_voltage_explanation.pdf`
- 練習PDF: `08_phase_control_average_dc_voltage_practice.pdf`
- 解説画像PowerPoint: `08_phase_control_average_dc_voltage_images.pptx`
- 完成後独立再解答: `08_phase_control_average_dc_voltage_independent_reanswer.md`
- 練習PDF QA: `08_phase_control_average_dc_voltage_practice_qa.md`
- PowerPoint QA: `08_phase_control_average_dc_voltage_images_qa.md`

必須成果物存在: `PASS`。

## EXAM_ALIGNMENT
固定済みの一次3問＋二次2問、計5問・20対象項目を維持している。

- R8 一次 機械 問4 全小問
- R5 一次 機械 問4 (1)〜(3)
- R1 一次 機械 問3 全小問
- H30 二次 機械・制御 問3 (1)〜(4)
- H25 二次 機械・制御 問3 (1)〜(3)

一次・二次を含む二種品質ゲートを維持し、R5問4(4)(5)のチョッパ、H30問3(5)の逆電力方向、H25問3(4)のTCR/SVC設備応用など固定範囲外を件数合わせで追加していない。

## 完成後独立再解答
`08_phase_control_average_dc_voltage_independent_reanswer.md` を再確認した。

- 一次: `13 / 13 PASS`
- 二次: `7 / 7 PASS`
- 合計: `20 / 20 PASS`
- 公式解答・標準解答との一致: `20 / 20`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`

独立再解答品質ゲート: `PASS`。

## 成果物QA
既存QA記録とSTATUS/HANDOFF記録を再確認した。

- 解説PDF: A4縦6ページ、180 dpi全6ページ Visual QA `PASS`、文字抽出・Unicode置換文字 `PASS / 0件`
- 練習PDF: A4縦3ページ、180 dpi全3ページ Visual QA `PASS`、文字抽出QA `PASS`
- 練習問題: 一次8問＋二次4問、計算・論理・正答一意性 `12 / 12 PASS`
- PowerPoint: 16:9・4スライド、SPEC指定4可視化 `4 / 4`、Visual QA `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`

成果物・表示QA: `PASS`。

## 固定範囲
SPEC固定範囲のサイリスタ、点弧角、位相制御、平均直流電圧、電流波形、無効電力、力率、高調波、素子定格、および指定4可視化を維持している。

追加していないことを確認した。

- チョッパ
- TCR/SVCの設備方式各論
- 回生・逆変換・四象限運転
- 誘導電動機、PWM/VVVF
- IGBT/SiC
- 詳細熱設計
- 出典未確認の100系・200系主回路結線、素子定格、実車電圧・電流

固定範囲: `PASS`。

## 進捗記録整合
技術内容・成果物・過去問対応はPASSだが、source Markdownの進捗記録に旧状態が残っている。

`08_phase_control_average_dc_voltage.md`:
- 冒頭 `## 状態` が「次工程は解説PDF作成＋全ページ表示QA」のまま。
- 末尾 `## 次工程` が「Topic 08 解説PDFを作成」のまま。
- 実際には解説PDF・練習source/PDF・PowerPoint・完成後独立再解答まで完了しているため不整合。

`08_phase_control_average_dc_voltage_practice_source.md`:
- 冒頭 `## 状態` が「練習PDFは未作成」「次工程は本sourceを練習PDFへ同期」のまま。
- 実際には練習PDFとQAまで完了しているため不整合。

STATUS.md / HANDOFF.md は完成後独立再解答完了・次工程最終QAとして現在地と整合している。

進捗記録整合: `FAIL`。

## 品質ゲート判定
- 必須成果物存在: PASS
- 過去問マッピング: PASS
- 一次・二次双方を含む: PASS
- 二次記述式への接続: PASS
- 練習問題の一次/二次接続: PASS
- SPEC指定4可視化: PASS
- 表示QA: PASS
- 完成教材だけでの独立再解答: `20 / 20 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- source進捗記録整合: FAIL

最終QA: `NEEDS_REVISION`。

Topic 08はまだ `completed` にしない。次工程は、教材本文・数式・固定EXAM_ALIGNMENT・問題・PDF/PPTXを変更せず、主sourceの旧進捗2箇所と練習sourceの旧進捗1箇所だけを実在成果物と完成後独立再解答 `20 / 20 PASS` の現在地へ同期すること。その後に最終QAを再判定する。