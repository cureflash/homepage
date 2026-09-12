# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-12

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 0 / 16
- current_status: `topic_01_pdfs_complete`
- last_completed_topic: なし
- active_topic: `01 架線25kVをそのままモーターに入れたらどうなる？`
- next_start: Topic 01 のsource Markdownを正本として解説画像PowerPointを作成・検証・GitHub正本へ追加する。必須4成果物が揃った後、選定5問を保存済み正答を見ずに独立再解答し、公式解答と照合する

## 新品質ゲート進捗
- [ ] 01 架線25kVをそのままモーターに入れたらどうなる？ — 制作前EXAM_ALIGNMENT、source Markdown、解説本文、3段階例題、12問の練習問題・完全解説、解説PDF、練習PDFまで完了。PowerPoint・完成後独立再解答は未実施
- [ ] 02〜16 — 未着手

## 01 EXAM_ALIGNMENT対象
1. R6上 機械 問8 — 巻数比・一次側換算・簡易等価回路
2. R6上 機械 問9 — 短絡試験・等価抵抗・漏れリアクタンス
3. R5上 機械 問9 — 鉄損・銅損・負荷率・最大効率
4. R4下 機械 問8 — 全損失から無負荷損を分離する計算
5. R4下 機械 問9 — 励磁電流・鉄損・励磁アドミタンス・最大効率

source Markdownでは上記5問の要求事項を本文節・例題・練習問題へマッピング済み。公式正答番号は完成後の独立再解答を汚染しないためsourceへ転記していない。

## 01 成果物
- `topics/01_transformer/01_transformer.md`
- `topics/01_transformer/01_transformer_explanation.pdf`
- `topics/01_transformer/01_transformer_practice.pdf`
- 解説画像PowerPoint: 未反映

解説PDF:
- A4縦 4ページ
- 電験で問う内容、必要概念、公式と条件、解法手順、基礎／本試験標準／複合例題、新幹線への接続、頻出ミス、過去問対応、公式まとめを収録
- レンダリング確認済み

練習PDF:
- A4縦 4ページ
- 12問、全問五肢択一
- 基礎3問、本試験標準7問、複合・応用2問
- 解答・完全解説付き
- 数値整合とレンダリングを確認済み

## 境界
新幹線側は系列SPECで確定済みの `架線25 kV → パンタグラフ → 主変圧器 → 二次側交流 → 主変換装置 → 主電動機` の導入に限定した。実車の主変圧器容量、巻数比、二次電圧、損失、効率等の未確認値は追加していない。

## 01 QA判定
`IN_PROGRESS`。解説PDF・練習PDFまでGitHub正本へ反映したが、MASTER SPEC必須の解説画像PowerPointと、全必須成果物完成後の選定5問独立再解答・公式解答照合が未完了。完成数は0/16のまま。

## 次
Topic 01 の解説画像PowerPointを16:9・14〜22枚でsource Markdownから作成し、表示QA後にGitHub正本へ追加する。その後に選定5問の完成後独立再解答を行い、品質ゲートPASS時のみTopic 01をcompletedへ進める。
