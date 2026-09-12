# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-12

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 0 / 16
- current_status: `topic_01_source_content_complete`
- last_completed_topic: なし
- active_topic: `01 架線25kVをそのままモーターに入れたらどうなる？`
- next_start: Topic 01 のsource Markdownを基に、解説プリントPDF・練習プリントPDF・解説画像PowerPointを作成する。実車の主変圧器容量・二次電圧等は一次資料確認後にのみ使用する

## 新品質ゲート進捗
- [ ] 01 架線25kVをそのままモーターに入れたらどうなる？ — 制作前EXAM_ALIGNMENT、解説本文、3段階例題、12問の練習問題・完全解説までsource Markdownへ反映済み。PDF・PowerPoint・完成後の独立過去問再解答は未実施
- [ ] 02〜16 — 未着手

## 01 EXAM_ALIGNMENT進捗
直近年度を優先して、公式電験三種「機械」問題からTopic 01の変圧器論点へ直接対応する5問を選定した。

1. R6上 機械 問8 — 巻数比・一次側換算・簡易等価回路
2. R6上 機械 問9 — 短絡試験・等価抵抗・漏れリアクタンス
3. R5上 機械 問9 — 鉄損・銅損・負荷率・最大効率
4. R4下 機械 問8 — 全損失から無負荷損を分離する計算
5. R4下 機械 問9 — 励磁電流・鉄損・励磁アドミタンス・最大効率

source Markdownでは上記5問の要求事項を本文節・例題・練習問題へマッピング済み。公式正答番号は、完成後の独立再解答を汚染しないため転記していない。

## 01 source成果物
- `topics/01_transformer/01_transformer.md`
- 解説本文: 巻数比、一次側換算、損失・効率、最大効率、無負荷試験、短絡試験、励磁回路、電圧変動率
- 3段階例題: 基礎／本試験標準／複合
- 練習問題: 12問、全問五肢択一、完全解説付き
- 難易度: 基礎3問、本試験標準7問、複合・応用2問

## 01 QA判定
`IN_PROGRESS`。source内容は作成済みだが、MASTER SPEC必須の解説PDF・練習PDF・PowerPointと、完成後の選定5問独立再解答が未完了のため、完成数は0/16のまま。

## 次
Topic 01 のsource Markdownを正本として解説プリントPDF・練習プリントPDF・解説画像PowerPointを作成する。必須成果物完成後、選定5問を公式正答を先に見ず独立再解答し、公式解答と照合して最終PASSを判定する。
