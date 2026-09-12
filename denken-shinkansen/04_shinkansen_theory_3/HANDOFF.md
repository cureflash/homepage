# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` は最終QAまでPASSし、`completed`。

完成数: `1 / 14`

active topic: `02 なぜ新幹線は25,000Vなのか`

Topic 02は練習PDF＋全ページ表示QAまで完了。解説画像PowerPoint以降は未着手。

## 今回進捗

Topic 02を1段階進め、練習PDF作成＋全ページ表示QAまで完了した。

更新成果物:
- `topics/02_why_25kv/02_why_25kv_practice.pdf`
- `STATUS.md`
- `HANDOFF.md`

## Topic 02 source

`topics/02_why_25kv/02_why_25kv.md`

## Topic 02 EXAM_ALIGNMENT結果

直近の公式理論問題から6候補を確認し、SPEC境界で再判定済み。

- ゲート対象: 令和7年度下期 理論 問6
- ゲート対象外: 令和8年度上期 問5、令和7年度下期 問5、令和7年度上期 問5・問6・問7
- 対象外理由: 直並列回路、並列電源、回路網、RLC等の後続Topic知識が必要
- `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の5問未満例外を適用
- 公式正答番号・数値解はsourceへ転記していない。完成後に教材だけで独立再解答してから照合する

## Topic 02 解説本文で反映済み

- `V=RI` と `I=V/R`、`R=V/I`
- `P=VI` と同一電力時の `I=P/V`
- `Ploss=I²R` と `Ploss=P²R/V²`
- 電圧降下 `ΔV=IR`
- `Q=I²Rt` とW/J/Whの区別
- 送電効率 `η=Pload/Psend`
- 一閉路の内部抵抗 `V=E-Ir`
- 2条件から内部抵抗・起電力を求める連立手順
- 基礎・本試験標準・複合/ひっかけの3段階例題
- 教材用仮定値による25 kV / 5 kV比較

## Topic 02 練習PDF

`topics/02_why_25kv/02_why_25kv_practice.pdf`

- A4縦5ページ
- 全12問: 基礎3問 / 本試験標準7問 / 複合・応用2問
- 全問五肢択一、全問完全解説付き
- 数値問題は使用式、式を選ぶ理由、代入、中間計算、最終値、選択肢、検算を記載
- 高電圧化による電流・抵抗損の変化、電圧降下、ジュール熱、送電効率、一閉路の内部抵抗を反復練習できる
- 200 dpiで全5ページをレンダリングし、文字欠け、クリップ、重なり、黒四角、壊れた数式記号がないことを確認
- 表示QA: `PASS`

境界確認:
- Topic 03の抵抗率・温度係数・直並列接続の体系的説明を先取りしていない
- Topic 05のキルヒホッフ・重ね合わせ・テブナンを使っていない
- Topic 08の正弦波・実効値、Topic 10の力率を使っていない
- 未確認の新幹線実車値の真値化なし
- 25 kVを唯一絶対の最適値とする断定なし
- 完成後独立再解答は未実施

## Topic 01 完成証跡

source Markdown:
`topics/01_train_power_basics/01_train_power_basics.md`

解説PDF:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

練習PDF:
`topics/01_train_power_basics/01_train_power_basics_practice.pdf`

解説画像PowerPoint:
`topics/01_train_power_basics/01_train_power_basics_images.pptx`

最終QA:
`topics/01_train_power_basics/01_train_power_basics_final_qa.md`

## 次に行うこと

Topic 02の解説画像PowerPointを作成し、全スライド表示QAとoverflow確認を行う。

この段階では次を守る。

- source Markdownの説明範囲を拡張しない
- Topic 03の抵抗率・温度係数・直並列接続の体系的説明を先取りしない
- Topic 05のキルヒホッフ、重ね合わせ、テブナンを使わない
- Topic 08の正弦波・実効値、Topic 10の力率を使わない
- 25 kVを唯一絶対の最適値とは説明しない
- 実車値は一次資料確認なしに真値化しない
- 完成後独立再解答は教材完成後に実施する

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する。
- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする。
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない。
