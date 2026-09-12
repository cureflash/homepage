# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-12

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は0/16。active topicは01 `架線25kVをそのままモーターに入れたらどうなる？`。

## 今回進捗
Topic 01 を `topic_01_source_content_complete` から `topic_01_pdfs_complete` へ1段階進めた。

GitHub正本へ追加:
- `topics/01_transformer/01_transformer_explanation.pdf`
- `topics/01_transformer/01_transformer_practice.pdf`

進捗記録更新:
- `STATUS.md`
- `HANDOFF.md`

解説PDFはA4縦4ページ。source Markdownにある電験論点、公式・成立条件、解法手順、3段階例題、新幹線への接続、頻出ミス、過去問対応、公式まとめを収録し、レンダリング確認済み。

練習PDFはA4縦4ページ。12問すべて五肢択一で、基礎3問、本試験標準7問、複合・応用2問。解答・完全解説を収録し、主要計算の数値整合とレンダリングを確認済み。

## 過去問品質ゲート
選定対象は変更していない。

1. R6上 機械 問8 — 巻数比・一次側換算・簡易等価回路
2. R6上 機械 問9 — 短絡試験・等価抵抗・漏れリアクタンス
3. R5上 機械 問9 — 鉄損・銅損・負荷率・最大効率
4. R4下 機械 問8 — 全損失から無負荷損を分離する計算
5. R4下 機械 問9 — 励磁電流・鉄損・励磁アドミタンス・最大効率

source内で5問の要求事項を本文・例題・練習問題へマッピング済み。完成後独立再解答は、MASTER SPECどおり解説画像PowerPointを含む必須成果物4点がGitHub正本へ揃った後に実施する。現時点では最終PASS扱いにしない。

## 境界
仕様追加はしていない。新幹線側は系列SPECで確定済みの `架線25 kV → パンタグラフ → 主変圧器 → 二次側交流 → 主変換装置 → 主電動機` の導入に限定。実車の主変圧器容量、巻数比、二次電圧、損失、効率等の未確認値は追加していない。

## QA判定
Topic 01: `IN_PROGRESS`。source Markdown、解説PDF、練習PDFは完成。解説画像PowerPointと、全必須成果物完成後の選定5問独立再解答・公式照合が未完了。完成数は0/16のまま。

## 次の正確な開始点
`topics/01_transformer/01_transformer.md` を正本として、16:9・14〜22枚の解説画像PowerPointを作成する。表示QA後にGitHub正本へ追加し、その後だけ選定5問を保存済み正答を見ずに独立再解答して公式解答と照合する。5/5と教材カバレッジを確認できた場合のみTopic 01をcompletedへ進める。
