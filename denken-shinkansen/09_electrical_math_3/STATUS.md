# STATUS - 電験三種「電気数学」

更新日: 2026-09-12

## 状態
- active_series: `09_electrical_math_3`
- exam_aligned_completed_topics: 0 / 12
- current_status: `topic_01_explanation_complete`
- last_completed_topic: `none`
- active_topic: `01 単位・指数・有効数字`
- next_start: Topic 01の完成した解説本文をもとに解説PDFを作成する

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 関連する公式過去問を5問選定
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う独立検証
- [x] 解説本文
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `単位・指数・有効数字` の解説本文を、検証済みEXAM_ALIGNMENTと本文節マッピングに沿って作成した。

本文は `MASTER_SPEC.md` の最低構成9節に合わせ、次を収録した。

- 10の整数乗・科学表記
- SI接頭語 `G`, `M`, `k`, `m`, `μ`, `n`
- `mA/ms`、`m/min`、面積・体積を含む単位換算
- `C=A·s`, `Ω=V/A`, `W=V·A=J/s`, `H=V·s/A`, `Wb=V·s`, `F=C/V` 等の次元確認
- 加減算と乗除算で異なる有効数字ルール
- 中間値を早く丸めない計算手順
- 絶対誤差・百分率誤差
- 効率と百分率
- 基礎・本試験標準・複合の3段階例題
- `25 kV`, `MW`, `kWh` を用いた新幹線接続
- 選定5問と本文節の対応表

選定問題中のインダクタンス・電動機応用等はTopic 01の新規主題にはせず、単位・指数・有効数字の適用文脈としてのみ扱った。

## 判定
Topic 01 は解説本文まで完了したが、まだ `completed` ではない。解説PDF・練習PDF・PowerPoint完成後に教材だけで公式過去問を独立再解答し、最終QA PASSするまで完成数へ加算しない。
