# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 1 / 14
- current_status: `topic_02_explanation_body_complete`
- last_completed_topic: `01 新幹線1編成はどれだけ電気を食う？`
- active_topic: `02 なぜ新幹線は25,000Vなのか`
- next_start: Topic 02の解説PDFを作成し、全ページQAを行う

## Topic 01 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 公式過去問5問の関連候補を確認
- [x] e-sysnet、電験三種まとめました、電験王の説明粒度を確認
- [x] source Markdownを作成し、必要説明事項と境界論点を記録
- [x] 既存5候補をSPEC境界で再判定
- [x] 平成29年度理論問14をTopic 01単独の独立再解答ゲート対象として確定
- [x] Topic 05または後続Topicの知識を必要とする候補を独立再解答ゲートから除外
- [x] 平成18年度〜令和8年度上期の理論問題を横断確認し、追加候補の要求知識を再判定
- [x] 独立再解答ゲート対象の公式過去問集合を確定（5問未満例外を適用し、平成29年度理論問14の1問）
- [x] EXAM_ALIGNMENT確定
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（15問、全問五肢択一、完全解説）
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] QA PASS

## Topic 02 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 令和8年度上期・令和7年度下期・令和7年度上期の公式理論問題から直近6候補を確認
- [x] 候補6問をTopic 02境界で判定
- [x] 直並列回路、回路網、RLC等を要求する5問をゲート対象外に整理
- [x] 令和7年度下期 理論 問6をTopic 02単独の独立再解答ゲート対象として確定
- [x] 5問未満例外を適用
- [x] e-sysnet、電験王、電験三種まとめましたを確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材で必要な説明を固定
- [x] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 02 `なぜ新幹線は25,000Vなのか` の解説本文と3段階例題を `topics/02_why_25kv/02_why_25kv.md` に追加した。

反映内容:

- `V=RI`、`P=VI`、`Ploss=I²R`、`Q=I²Rt` の意味・単位・式変形
- 同一電力時の `I=P/V` と `Ploss=P²R/V²`
- 電圧降下 `ΔV=IR`
- 送電効率の基本
- 一閉路の内部抵抗 `V=E-Ir` と2条件連立
- 基礎・本試験標準・複合/ひっかけの3段階例題
- 令和7年度下期 理論 問6へ必要な中間知識を反映
- 25 kVと5 kVの教材用仮定比較で、高電圧化による電流・損失低減を確認

境界確認:

- Topic 03の抵抗率・温度係数・直並列体系の先取りなし
- Topic 05のキルヒホッフ・重ね合わせ・テブナンの先取りなし
- Topic 08の正弦波・実効値、Topic 10の力率の先取りなし
- 未確認の新幹線実車値の真値化なし
- 25 kVを唯一絶対の最適値とする断定なし
- 完成後独立再解答は未実施

## 判定

Topic 02は `explanation_body_complete`。完成数は `1 / 14` のまま。次工程は解説PDF作成＋全ページQA。
