# 17 パワー半導体の損失比較 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / completed`

最新main、当該系列のSTATUS/HANDOFF、直近の同系列worker成果をreconcileし、前回最終QAで検出した旧26答案要素前提の6記録が是正後の固定5問・23答案要素へ同期済みであることを確認した。技術成果物・固定過去問・問題・正答・数式・PDF/PPTX本体は変更していない。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 対応過去問を教材だけで自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 17: 導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。指定3可視化は電流―導通損失、スイッチング周波数―損失、出力―変換効率。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次4問＋二次1問、計5問を維持する。

- R7 一次 機械 問4 (1)〜(5): 5要素
- R4 一次 機械 問4 (1)〜(5): 5要素
- R2 一次 機械 問2 (1)〜(5): 5要素
- H24 一次 機械 問6 (2)(3): 2要素
- H24 二次 機械・制御 問1 (1)〜(6): 6要素

- 一次答案要素: `17`
- 二次答案要素: `6`
- 合計: `23`
- 二次記述・計算問題: `1問`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

H24一次 問6は問題自体を固定5問の一つとして維持するが、Topic 17に直接対応する `(2) 放熱設計`、`(3) 半導体接合部温度` のみゲート対象とする。照明固有の `(1)(4)(5)` は固定SPEC外として対象外。これは品質ゲートの緩和ではなく、公式問題文の再監査による誤マッピング是正である。

固定EXAM_ALIGNMENT: `PASS`

## 3. 完成後clean blind再解答

`17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md` と `17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md` を再確認した。

- R7一次 問4: `5 / 5 PASS`
- R4一次 問4: `5 / 5 PASS`
- R2一次 問2: `5 / 5 PASS`
- H24一次 問6 (2)(3): `2 / 2 PASS`
- H24二次 問1: `6 / 6 PASS`
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`

完成後blind品質ゲート: `PASS`

## 4. 必須成果物

GitHub正本で次を確認した。

- 主source: `17_power_semiconductor_loss_comparison.md` — 存在
- 解説source: `17_power_semiconductor_loss_comparison_explanation_source.md` — 存在
- 解説PDF: `17_power_semiconductor_loss_comparison_explanation.pdf` — 存在
- 解説PDF QA: `17_power_semiconductor_loss_comparison_explanation_pdf_qa.md` — 存在
- 練習source: `17_power_semiconductor_loss_comparison_practice_source.md` — 存在
- 練習PDF: `17_power_semiconductor_loss_comparison_practice.pdf` — 存在
- 練習PDF QA: `17_power_semiconductor_loss_comparison_practice_qa.md` — 存在
- 解説画像PowerPoint: `17_power_semiconductor_loss_comparison_images.pptx` — 存在
- PowerPoint QA: `17_power_semiconductor_loss_comparison_powerpoint_qa.md` — 存在
- clean blind候補答案: `17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md` — 存在
- 公式照合記録: `17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md` — 存在
- EXAM_ALIGNMENT再監査: `17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md` — 存在

旧 `blind_reanswer_gate.md` と旧 `blind_reanswer_candidates.md` は再マッピング前の履歴として保存し、現行ゲート判定には使用しない。

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦4ページ
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- 3段階例題: `3 / 3 PASS`
- 固定23答案要素接続: `23 / 23 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

### 練習PDF
- A4縦6ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi表示QA: `6 / 6 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定23答案要素接続: `23 / 23 PASS`

### PowerPoint
- 16:9・4スライド
- 1600×900表示QA: `4 / 4 PASS`
- PPTX ZIP整合性: `PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定23答案要素接続: `23 / 23 PASS`

成果物QA: `PASS`

## 6. SPEC境界

- Topic 16の多レベル波形・高調波解析を再展開: `0件`
- 後続Topic 23のSiC採用・機器小型化を先取り: `0件`
- 接合温度・冷却は損失から温度上昇へ接続する最小限の熱抵抗モデルに限定: `PASS`
- 未確認700系実車の素子型式・定格・損失・接合温度・冷却条件・変換効率の真値化: `0件`
- 教材用一般仮定値と700系実車値の混同: `0件`
- SPEC外追加: `0件`

SPEC境界: `PASS`

## 7. 前回最終QAの不整合解消確認

前回 `NEEDS_REVISION / PROGRESS_ALIGNMENT_SYNC_REQUIRED` とした6記録を再確認した。

1. `17_power_semiconductor_loss_comparison.md`: 固定5問・23答案要素、clean blind `23 / 23 PASS`、次工程を最終QA再実施へ同期済み。
2. `17_power_semiconductor_loss_comparison_explanation_source.md`: 固定5問・23答案要素へ同期済み。
3. `17_power_semiconductor_loss_comparison_practice_source.md`: `23 / 23` 接続、H24一次 問6を `(2)(3)のみ` へ同期済み。
4. `17_power_semiconductor_loss_comparison_explanation_pdf_qa.md`: 固定23答案要素へ同期済み。
5. `17_power_semiconductor_loss_comparison_practice_qa.md`: 固定23答案要素へ同期済み。
6. `17_power_semiconductor_loss_comparison_powerpoint_qa.md`: 固定23答案要素へ同期済み。

進捗記録整合: `PASS`

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次4問＋二次1問・23答案要素: `PASS`
- 完成後clean blind再解答: `23 / 23 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`
- SPEC外追加: `0件`

したがって最終判定は `PASS / completed`。完成数は `17 / 39`。

次工程はTopic 18「E2系 50Hz・60Hzと磁束」の制作前EXAM_ALIGNMENT。
