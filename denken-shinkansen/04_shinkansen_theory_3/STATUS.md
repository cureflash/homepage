# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 1 / 14
- current_status: `topic_02_explanation_pdf_complete`
- last_completed_topic: `01 新幹線1編成はどれだけ電気を食う？`
- active_topic: `02 なぜ新幹線は25,000Vなのか`
- next_start: Topic 02の練習プリントを12問以上・完全解説付きで作成し、全ページ表示QAを行う

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
- [ ] 練習問題・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 02 `なぜ新幹線は25,000Vなのか` を1段階進め、解説PDF作成＋全ページ表示QAまで完了した。

- file: `topics/02_why_25kv/02_why_25kv_explanation.pdf`
- A4縦2ページ
- source Markdownで固定済みの範囲のみで構成
- `V=RI`、`P=VI`、`Ploss=I²R`、`Q=I²Rt`、`ΔV=IR`、送電効率、内部抵抗 `V=E-Ir` を収録
- 基礎・本試験標準・複合/ひっかけの3段階例題を収録
- 令和7年度下期 理論 問6への対応と公式・解法まとめを収録
- 200 dpiで全2ページをレンダリングし、文字欠け・クリップ・重なり・黒四角・壊れた数式記号なしを確認
- Topic 03の抵抗率・温度係数・直並列体系、Topic 05の回路網解析、Topic 08の正弦波・実効値、Topic 10の力率は先取りしていない
- 未確認の新幹線実車値は追加していない
- 25 kVを唯一絶対の最適値とする断定はしていない
- 完成後独立再解答は未実施（後工程）

## 判定

Topic 02は `explanation_pdf_complete`。解説PDF表示QAは `PASS`。完成数は `1 / 14` のまま。次工程は12問以上・完全解説付きの練習PDF作成＋全ページ表示QA。
