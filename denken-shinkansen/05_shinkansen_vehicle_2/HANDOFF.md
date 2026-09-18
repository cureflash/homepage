# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜16は最終QAまで `PASS / completed`。完成数は `16 / 39`。

現在地は `topic_17_exam_alignment_remap_complete`。Topic 17 `パワー半導体の損失比較` は成果物自体のQAまでPASSしているが、完成後blind再解答の品質ゲートは未完了。

## 今回の是正

完成後blind再解答で、H24一次「機械」問6の (1)(4)(5) がTopic 17教材から導出できず、しかも固定SPEC外の照明固有知識であることが判明した。

公式問題文を再監査した結果、H24一次 問6は次の採用単位へ是正した。

- (2): 放熱設計 — Topic 17「冷却」に対応 / ゲート対象
- (3): 半導体接合部温度 — Topic 17「接合温度」に対応 / ゲート対象
- (1): LEDランプ構成部品 — SPEC外 / 対象外
- (4): 光へのエネルギー変換 — SPEC外 / 対象外
- (5): 自然空冷照明器具の具体的設計周囲温度 — SPEC外 / 対象外

問題そのものは固定5問の一つとして残す。上位仕様は「関連過去問の要求事項を教材へ接続する」ことを求めるが、採用した問題の全空欄を無条件で教材化する規定ではないため、この是正は品質ゲートの緩和ではなく誤マッピング修正である。

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

旧成果物・旧QA内の `26 / 26` 表記は再マッピング前の履歴値として扱い、最終品質判定には使わない。

## blind再解答の扱い

旧候補答案試行は `23 / 26 derivable` だった。今回ゲート外へ是正した3要素が、その未導出3要素と一致する。

ただし旧試行では工程形式確認のためTopic 16候補答案を参照しており、R7/R4の10要素がstrict blind provenanceを満たさない。したがって `23 / 23 PASS` と読み替えてcompleted化してはいけない。

## Topic 17 範囲境界

- 扱う内容: 導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。
- 指定可視化: 電流―導通損失、スイッチング周波数―損失、出力―変換効率。
- Topic 16の多レベル波形・高調波解析は再展開しない。
- 後続TopicのSiC採用・機器小型化は先取りしない。
- 接合温度・冷却は損失から温度上昇へ接続する最小限の熱抵抗モデルまで扱う。
- 未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

## 次工程

旧候補答案記録を参照せず、是正後の固定5問・23答案要素をclean条件でblind再解答する。候補答案を固定するまで公式解答・標準解答を開かない。