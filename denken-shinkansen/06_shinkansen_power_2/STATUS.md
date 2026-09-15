# STATUS

updated: 2026-09-15
series: `06_shinkansen_power_2`
active_topic: `07`
theme: 三相電力をどう25kVの単相へ変える？
current_status: `topic_07_explanation_pdf_complete`
completed_topics: `6 / 22`

## Topic 06 final result

Topic 06「275kVを受ける新幹線変電所の中身」は `PASS / completed`。固定5過去問は制作前・完成後とも `5 / 5問 PASS`、一次 `20 / 20小問`、二次 `3 / 3設問`、教材外補完・固定範囲外追加は0件。必須成果物・PDF/PPTX表示QA・source進捗整合もPASS済み。

## Topic 07 固定範囲

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` を正本として次の10項目を固定する。

- 三相交流
- 単相負荷
- 相変換
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線
- 三相側不平衡
- 逆相電流
- フェーザ図
- 結線比較

V結線、一般配電方式、％インピーダンス、単位法、ATき電、線路電圧降下、対称座標法による定量解析、短絡計算、保護協調は追加しない。

## Topic 07 EXAM_ALIGNMENT / 制作前独立検証

現行公開公式アーカイブ内でTopic 07固定範囲だけで問題全体を解け、かつ二種の一次・二次双方を含む2問を正式固定した。固定範囲外問題で原則5問へ水増ししない。

1. 平成23年度 第二種一次「理論」問6
   - 対称三相交流の複素フェーザ、相間電流、フェーザ合成、実効値
   - `5 / 5空欄 PASS`
2. 平成23年度 第二種二次「機械・制御」問2
   - スコット結線、主座/T座巻数比、一次電流、巻線容量、利用率
   - `7 / 7答案要素 PASS`

合計 `2 / 2問 PASS`、`12 / 12答案要素 PASS`。固定範囲外知識補完・後続Topic知識依存・未確認実設備値依存はいずれも0件。

## Topic 07 解説本文＋3段階例題

`topics/07_feeding_transformer/07_feeding_transformer.md` に固定10項目と正式2過去問の要求事項を全件収録済み。

3段階例題:
1. 基礎: 三相フェーザから相間電圧・枝電流を求める
2. 本試験標準: スコット結線の巻数比・一次電流・巻線容量・利用率
3. 複合・ひっかけ: 二つの単相負荷が不均等な場合の三相側不平衡を判定する

例題数値は教材用仮定値として明記し、未確認実設備値は使用していない。

## Topic 07 解説PDF

成果物:
- `topics/07_feeding_transformer/07_feeding_transformer_explanation.pdf`

完成済みsourceから固定10項目、正式2過去問の解法経路、3段階例題を同期した。

QA:
- A4縦: `6ページ`
- 200 dpi全ページ表示QA: `6 / 6 PASS`
- 文字抽出QA: `PASS`
- 固定10項目: `10 / 10収録`
- 正式過去問要求: 一次1問＋二次1問を収録
- 3段階例題: `3 / 3収録`
- 固定範囲外論点追加: `0件`
- 未確認実設備値追加: `0件`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [ ] Topic 07 EXAM_ALIGNMENT・独立検証・解説source・解説PDF complete / 練習問題未着手

## next_start

Topic 07の練習問題＋完全解説sourceを作成する。一次試験型と二次記述式を含め、固定10項目・正式2過去問の要求事項へ接続する。固定範囲外の件数合わせ・未確認実設備値追加は行わない。