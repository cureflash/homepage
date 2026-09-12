# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-12

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 0 / 14
- current_status: `topic_01_explanation_pdf_complete`
- last_completed_topic: なし
- active_topic: `01 新幹線1編成はどれだけ電気を食う？`
- next_start: Topic 01の練習PDF（12問以上、解答・完全解説付き）を作成する

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
- [ ] 練習PDF（12問以上、完全解説）
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] QA PASS

## 今回進めた内容

Topic 01の解説PDFを作成し、GitHub正本へ追加した。

成果物:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

PDFはsource Markdownの解説本文を正本として、次を収録した。

- 電圧・電流・抵抗・電力・電力量の意味と単位
- `V=RI`、`P=VI`、`P=I^2R`、`P=V^2/R`、`W=Pt`
- SI接頭語、指数表記、有効数字
- 単位統一から検算までの解法手順
- 基礎・本試験標準・複合の3段階例題
- SPECで許可された仮定 `10 MW / 25 kV = 400 A`
- 平成29年度理論問14との対応
- Topic 05以降の回路網解析を先取りしない境界

PDFはA4縦4ページ。全4ページを画像レンダリングし、本文・表・数式にクリッピング、重なり、黒四角、欠落がないことを確認した。

## 注意

令和8年度上期理論問5と平成30年度理論問5は電力公式に関連するが、並列電源・直並列回路の処理を含むためTopic 01の完成ゲート対象にはしない。令和7年度上期理論問14、平成28年度理論問8、平成23年度理論問14も、問題全体の完答に後続Topicの電磁気等を要するため完成ゲート対象にはしない。

このため上位仕様の「該当問題が5問未満しか確認できない場合は確認できた全件」例外を適用し、Topic 01のゲート集合は平成29年度理論問14の1問で固定する。

Topic 01は解説PDFまで完了したが、練習PDF・PowerPoint・完成後独立再解答・QA PASSが未完了のため、完成数には加算しない。