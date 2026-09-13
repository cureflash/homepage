# STATUS - 電験二種「電気数学」

更新日: 2026-09-13

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 3 / 20
- current_status: `topic_04_explanation_source_complete`
- last_completed_topic: `03 偏微分・全微分`
- active_topic: `04 微分による極値・最適条件`
- next_start: Topic 04の解説PDFを作成し、全ページ表示QAを行う。source Markdownの完成本文だけを根拠にし、多変数最適化・数値最適化・反復最適化は追加しない

## Topic 04 品質ゲート進捗

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] R8一次を確認し、直接対応する機械問3を採用
- [x] 最新掲載のR7二次を確認し、機械・制御問1を採用
- [x] 一次4問＋二次2問、計6問・対象18項目を選定
- [x] 参考教材を電験王2＋e-sysnet＋オーム社の複数系統で確認
- [x] source Markdownへ要求知識・式・設問型・教材内必要説明を固定
- [x] 制作前独立再導出 6問・18項目 PASS
- [x] 公式解答・標準解答との照合 18/18一致
- [x] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 04 `微分による極値・最適条件` の解説本文＋3段階例題を `topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions.md` に追加した。

- 一変数の極値候補、一次微分の符号変化、二階微分判定を説明
- 端点・定義域・微分不能点を候補に含める手順を説明
- パラメータを固定して一変数で最適化し、最適点と最大値のパラメータ依存を分けて読む手順を説明
- 最大電力、変圧器最大効率、誘導電動機最大トルク、同期調相機の最小電流へ接続
- 基礎／本試験標準／複合・ひっかけの3段階例題を追加
- 固定EXAM_ALIGNMENT 6問・18対象項目を本文へ18/18マッピング
- 多変数最適化、ラグランジュ未定乗数法、反復最適化、一般的な数値最適化は追加していない

## 判定

Topic 04は `explanation_source_complete`。完成数は `3 / 20` のまま。次工程は解説PDF＋全ページ表示QA。
