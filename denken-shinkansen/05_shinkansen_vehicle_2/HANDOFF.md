# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

現在地は `topic_21_explanation_pdf_h26_note_sync_complete`。active topic は Topic 21 `高速域の速度・けん引力・出力制御`。

## reconcile

最新mainを確認し、既存のTopic 21練習source/PDF、PowerPoint、clean blind候補固定、公式照合、不一致診断を再制作していない。H26二次「機械・制御」問1 `(4)` の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を採用した丸め差として確定済みの診断を継承した。

## 今回実施

解説source 15.1に追加済みのH26二次「機械・制御」問1 `(4)` の過去問固有数値処理注記を、解説PDFへ同期した。

同期内容:
- 一般式 `P=Tω`、`ω=2πN/60` は変更しない
- 高精度 `π` では `TL=48.046775... N·m → 48.0 N·m`
- 公式標準解答は `I2'=22.430 A`、`48.067 → 48.1 N·m`
- `π=3.14` なら公式掲載中間値 `48.067347... N·m` を再現できる
- 差は当該過去問固有の数値処理差として扱う
- H26二次 問1(4) の公式照合では公式標準解答 `48.1 N·m` を正本とする
- 他の例題・練習問題・一般式の `π` は変更しない

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation.pdf`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation_pdf_qa.md`

PDF QA:
- A4縦 `3 pages`
- PDFium / Poppler 180 dpi: 各 `3 / 3 PASS`
- 文字抽出・H26固有注記抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 固定5問・6答案要素の教材接続: `6 / 6 covered`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

## 品質ゲート状態

- clean blind公式照合の既存記録: `5 / 6 PASS`（教材注記追加前）
- H26二次 問1(4): `原因診断完了 / 解説source注記済み / 解説PDF同期済み`
- 候補答案変更: `0件`
- 他5答案要素変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 練習問題・正答変更: `0件`
- 一般式変更: `0件`
- 未確認実車値の真値化: `0件`
- PowerPoint変更: `0件`
- Topic 21: まだ `completed` にしない

## 次の安全な工程

Topic 21 PowerPointについてH26二次 問1(4) の過去問固有数値処理注記の同期要否を判定する。必要な場合だけ当該箇所を同期し、その後clean blind再確認へ進む。
