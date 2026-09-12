# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` は最終QAまでPASSし、`completed`。

完成数: `1 / 14`

active topic: `02 なぜ新幹線は25,000Vなのか`

Topic 02は解説PDF＋全ページ表示QAまで完了。練習PDF以降は未着手。

## 今回進捗

Topic 02を1段階進め、解説PDF作成＋全ページ表示QAまで完了した。

更新成果物:
- `topics/02_why_25kv/02_why_25kv_explanation.pdf`
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

## 今回作成した解説PDF

`topics/02_why_25kv/02_why_25kv_explanation.pdf`

- A4縦3ページ
- source Markdownで固定済みの範囲だけで構成
- オームの法則、電力、抵抗損、電圧降下、ジュール熱、送電効率、一閉路の内部抵抗を収録
- 基礎・本試験標準・複合/ひっかけの3段階例題を収録
- 令和7年度下期 理論 問6への対応と公式・解法まとめを収録
- 教材用の10 MW / 25 kV / 5 kV / 0.50 Ω比較は仮定値であり、実測値として扱っていない
- 200 dpiで全3ページをレンダリングし、文字欠け、クリップ、重なり、黒四角、壊れた数式記号がないことを確認
- 表示QA: `PASS`

境界確認:
- Topic 03の抵抗率・温度係数・直並列体系の先取りなし
- Topic 05のキルヒホッフ・重ね合わせ・テブナンの先取りなし
- Topic 08の正弦波・実効値、Topic 10の力率の先取りなし
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

Topic 02の練習プリントを12問以上・完全解説付きで作成し、全ページ表示QAを行う。

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
