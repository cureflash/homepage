# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜16は最終QAまで `PASS / completed`。完成数は `16 / 39`。

現在地は `topic_17_official_check_complete`。Topic 17 `パワー半導体の損失比較` は成果物自体のQAまでPASSし、是正後の固定5問・23答案要素についてclean blind候補答案を公式解答・標準解答と照合済み。`23 / 23 PASS`。候補答案変更0件、教材外知識補完0件。completed化はまだ行っていない。

## EXAM_ALIGNMENT是正

完成後blind再解答で、H24一次「機械」問6の (1)(4)(5) がTopic 17教材から導出できず、しかも固定SPEC外の照明固有知識であることが判明した。

公式問題文を再監査した結果、H24一次 問6は次の採用単位へ是正した。

- (2): 放熱設計 — Topic 17「冷却」に対応 / ゲート対象
- (3): 半導体接合部温度 — Topic 17「接合温度」に対応 / ゲート対象
- (1): LEDランプ構成部品 — SPEC外 / 対象外
- (4): 光へのエネルギー変換 — SPEC外 / 対象外
- (5): 自然空冷照明器具の具体的設計周囲温度 — SPEC外 / 対象外

問題そのものは固定5問の一つとして残す。この是正は品質ゲートの緩和ではなく誤マッピング修正である。

監査記録:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md`

## Topic 17 固定EXAM_ALIGNMENT

source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison.md`

固定過去問:
- R7 一次 機械 問4 (1)〜(5): 5要素
- R4 一次 機械 問4 (1)〜(5): 5要素
- R2 一次 機械 問2 (1)〜(5): 5要素
- H24 一次 機械 問6 (2)(3): 2要素
- H24 二次 機械・制御 問1 (1)〜(6): 6要素

固定数:
- 一次: `4問・17答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・23答案要素`

維持条件:
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## Topic 17 必須成果物

- 解説source: `17_power_semiconductor_loss_comparison_explanation_source.md` — `PASS`
- 解説PDF: `17_power_semiconductor_loss_comparison_explanation.pdf` — `PASS / 4 pages`
- 練習source: `17_power_semiconductor_loss_comparison_practice_source.md` — `PASS / 一次8＋二次4`
- 練習PDF: `17_power_semiconductor_loss_comparison_practice.pdf` — `PASS / 6 pages`
- PowerPoint: `17_power_semiconductor_loss_comparison_images.pptx` — `PASS / 4 slides`
- PowerPoint QA: `17_power_semiconductor_loss_comparison_powerpoint_qa.md`
- blind再解答前ゲート: `17_power_semiconductor_loss_comparison_blind_reanswer_gate.md` — 旧26要素前提の履歴
- blind再解答候補試行: `17_power_semiconductor_loss_comparison_blind_reanswer_candidates.md` — 旧26要素前提の履歴
- clean blind候補答案: `17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md` — `23 / 23 candidate fixed`
- 公式照合記録: `17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md` — `23 / 23 PASS`

旧成果物・旧QA内の `26 / 26` 表記は再マッピング前の履歴値として扱い、最終品質判定には使わない。

## clean blind候補固定

是正後23答案要素を、旧候補答案・公式解答・標準解答・電験解説サイトの個別解説を参照せず再解答した。

- R7一次 問4: `5 / 5 candidate fixed`
- R4一次 問4: `5 / 5 candidate fixed`
- R2一次 問2: `5 / 5 candidate fixed`
- H24一次 問6 (2)(3): `2 / 2 candidate fixed`
- H24二次 問1: `6 / 6 candidate fixed`
- 合計: `23 / 23 candidate fixed`

## 公式解答・標準解答との照合

候補固定後に初めて公式解答・標準解答を開き、候補答案は変更せず照合した。

- R7一次 問4: `5 / 5 PASS`
- R4一次 問4: `5 / 5 PASS`
- R2一次 問2: `5 / 5 PASS`
- H24一次 問6 (2)(3): `2 / 2 PASS`
- H24二次 問1: `6 / 6 PASS`
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 候補答案変更: `0件`
- 教材外知識での補完: `0件`
- 固定問題差替え: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

公式照合工程は `PASS / OFFICIAL_CHECK_COMPLETE`。Topic 17のcompleted判定は次工程の最終QAで行う。

## Topic 17 範囲境界

- 扱う内容: 導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。
- 指定可視化: 電流―導通損失、スイッチング周波数―損失、出力―変換効率。
- Topic 16の多レベル波形・高調波解析は再展開しない。
- 後続TopicのSiC採用・機器小型化は先取りしない。
- 接合温度・冷却は損失から温度上昇へ接続する最小限の熱抵抗モデルまで扱う。
- 未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

## 次工程

Topic 17の成果物・固定EXAM_ALIGNMENT・clean blind公式照合結果をまとめて最終QAし、completed可否を判定する。