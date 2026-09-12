# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 1 / 14
- current_status: `topic_02_practice_pdf_complete`
- last_completed_topic: `01 新幹線1編成はどれだけ電気を食う？`
- active_topic: `02 なぜ新幹線は25,000Vなのか`
- next_start: Topic 02の解説画像PowerPointを作成し、全スライド表示QAとoverflow確認を行う

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
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 02 `なぜ新幹線は25,000Vなのか` を1段階進め、練習PDF作成＋全ページ表示QAまで完了した。

- file: `topics/02_why_25kv/02_why_25kv_practice.pdf`
- A4縦5ページ
- 全12問: 基礎3問 / 本試験標準7問 / 複合・応用2問
- 全問五肢択一、全問完全解説付き
- `V=RI`、`P=VI`、`Ploss=I²R`、`Q=I²Rt`、電圧降下、送電効率、一閉路の内部抵抗を反復練習できる構成
- 同一電力時の高電圧化と抵抗損の比較、2条件から内部抵抗・起電力を求める問題を含む
- 200 dpiで全5ページをレンダリングし、文字欠け・クリップ・重なり・黒四角・壊れた数式記号なしを確認
- Topic 03の抵抗率・温度係数・直並列体系、Topic 05の回路網解析、Topic 08の正弦波・実効値、Topic 10の力率は先取りしていない
- 未確認の新幹線実車値は追加していない
- 25 kVを唯一絶対の最適値とする断定はしていない
- 完成後独立再解答は未実施（後工程）

## 判定

Topic 02は `practice_pdf_complete`。練習PDF表示QAは `PASS`。完成数は `1 / 14` のまま。次工程は解説画像PowerPoint作成＋全スライド表示QA・overflow確認。
