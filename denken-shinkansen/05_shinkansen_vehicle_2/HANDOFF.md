# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

現在地は `topic_21_practice_pdf_complete`。active topic は Topic 21 `高速域の速度・けん引力・出力制御`。

## reconcile

作業開始時の車両二種main `6698ec79df73f8338f0be65b280bd055c6a69193` で、既存workerがTopic 21練習sourceまで完了していることを確認した。作業中にmainは `598320450af0d20536e41273075a42b971877377` へ進んだが、変更は `08_shinkansen_theory_2` のPDF修正だけで本系列と競合しない。既存の固定EXAM_ALIGNMENT、解説source/PDF、練習sourceを正本として引き継ぎ、重複作業をせず次工程の練習PDFだけを実施した。

## 今回実施

Topic 21練習PDFを作成し、表示・抽出・数値・試験対応QAを完了した。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_practice.pdf`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_practice_qa.md`

構成:
- A4縦: 4ページ
- 一次試験型: 8問（五肢択一）
- 二次試験型: 4問（途中式・単位・理由説明を含む記述式）
- 完全解説: 12問すべて収録

練習PDF品質ゲート:
- 一次2問＋二次3問、計5問: `変更なし`
- 一次3＋二次3、計6答案要素: `6 / 6 PASS`
- H26一次 問5 `(4),(5)` の必要最小条件: `2 / 2 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化への式系接続: `3 / 3 PASS`
- 一次試験型: `8 / 8 PASS`
- 二次記述式: `4 / 4 PASS`
- 独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- PDFium 180 dpi: `4 / 4 PASS`
- pdftoppm 180 dpi: `4 / 4 PASS`
- 文字抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`

## Topic 21 固定範囲

- 定トルク
- 定出力
- 電圧制限
- 電流制限
- けん引力
- 主電動機出力
- 編成出力
- 走行抵抗

SPEC指定可視化:
- 速度―けん引力
- 速度―主電動機出力
- 速度―編成必要出力

境界:
- V/f・すべり・等価回路は既習事項として必要最小限だけ参照する。
- H26一次 問5に必要な `f_s` は選択肢判別に必要な最小条件だけ扱い、滑り周波数制御則やベクトル制御へ広げない。
- 加速抵抗・勾配抵抗・加速曲線、損失・熱、再粘着制御等を新規主題へ広げない。
- 列車の `P=Fv` と走行抵抗はSPEC必須だが、固定した第二種過去問で直接出題されたとは記載しない。
- N700系等の実車の基底速度、電圧・電流上限、出力、走行抵抗係数は一次資料で確認できない限り真値化しない。

## 次の安全な工程

Topic 21の解説画像PowerPointを作成する。

要件:
- 固定5問・6答案要素を変更しない。
- 練習source/PDFの一次8問＋二次4問、正答、数式、仮定値を変更しない。
- SPEC固定8項目・3可視化を維持する。
- 未確認実車値を真値化しない。
- PowerPoint完成後にclean blind候補固定へ進む。
