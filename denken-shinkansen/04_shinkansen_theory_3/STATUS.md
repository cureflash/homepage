# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 1 / 14
- current_status: `topic_02_powerpoint_complete`
- last_completed_topic: `01 新幹線1編成はどれだけ電気を食う？`
- active_topic: `02 なぜ新幹線は25,000Vなのか`
- next_start: Topic 02の完成教材だけを使って令和7年度下期 理論 問6を独立再解答し、最終QAを行う

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
- [x] 解説PDF
- [x] 練習問題・練習PDF
- [x] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 02 `なぜ新幹線は25,000Vなのか` を1段階進め、解説画像PowerPoint作成＋全スライド表示QA・overflow確認まで完了した。

- file: `topics/02_why_25kv/02_why_25kv_images.pptx`
- 16:9、全7スライド
- `P=VI` と `I=P/V`、`Ploss=I²R`、高電圧化での `1/k`・`1/k²` 関係を図解
- 教材用仮定値10 MW・0.50 Ωによる25 kV / 5 kV比較を可視化
- 一閉路の電圧降下 `ΔV=IR`、`Vs=Vr+IR` を模式図化
- W / J / Wh と送電効率の取り違え防止を整理
- 令和7年度下期 理論 問6に接続する `V=E-Ir` の2条件連立手順を図解
- 解法手順を「単位 → 電流 → 抵抗損 → 電圧降下 → 効率 → 検算」で固定
- 外部画像は使用せず、自作図形のみ
- 全7スライドをレンダリングし、文字欠け・クリップ・重なりなしを確認
- overflow検査: `PASS`
- Topic 03の抵抗率・温度係数・直並列体系、Topic 05の回路網解析、Topic 08の正弦波・実効値、Topic 10の力率は先取りしていない
- 未確認の新幹線実車値は追加していない
- 25 kVを唯一絶対の最適値とする断定はしていない
- 完成後独立再解答は未実施（次工程）

## 判定

Topic 02は `powerpoint_complete`。PowerPoint表示QA・overflow確認は `PASS`。完成数は `1 / 14` のまま。次工程は令和7年度下期 理論 問6の完成教材のみでの独立再解答＋最終QA。
