# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `16 / 39`
- current_status: `topic_17_blind_reanswer_gate_complete`
- last_completed_topic: `16 700系 多レベル変換器とPWM`
- active_topic: `17 パワー半導体の損失比較`
- next_start: 新しい独立runで、公式解答・標準解答を先に見ずTopic 17の固定5問・26答案要素を完成教材だけで再解答し、候補答案を固定する

## 完了済み

Topic 01〜16は最終QAまで `PASS / completed`。各Topicの固定EXAM_ALIGNMENT・成果物・blind再解答・最終QAの詳細は各 `topics/` 配下のsource・QAを正本とする。

## Topic 17 固定EXAM_ALIGNMENT

- source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison.md`
- 固定過去問: `一次4問＋二次1問 / 計5問`
- 固定答案要素: `一次20＋二次6 / 計26`
- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R2 一次 機械 問2 (1)〜(5)
- H24 一次 機械 問6 (1)〜(5)
- H24 二次 機械・制御 問1 (1)〜(6)
- 制作前独立検証: `26 / 26 PASS`
- 公式解答／標準解答との内容不一致: `0件`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## Topic 17 成果物

- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / 4 pages / 4 / 4 display PASS`
- 練習問題source: `PASS / 一次8問＋二次4問 / 12 / 12解説 / 12 / 12再計算 / 一次8 / 8正答一意`
- 練習PDF: `PASS / 6 pages / 6 / 6 display PASS`
- 解説画像PowerPoint: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_images.pptx`
- PowerPoint QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_powerpoint_qa.md`
- PowerPoint: `16:9 / 4枚 / 1600×900表示 4 / 4 PASS`
- PowerPoint ZIP・LibreOffice PDF変換・python-pptx open・文字抽出: `PASS`
- 固定5問・26答案要素への可視化・接続: `26 / 26 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通一般仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / POWERPOINT_COMPLETE`

## Topic 17 完成後独立再解答前ゲート

- gate: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_gate.md`
- 判定: `PASS / BLIND_REANSWER_READY`
- 固定5問・26答案要素: `変更なし`
- 完成教材への接続: `26 / 26 PASS`
- 公式解答・標準解答の内容を本ゲート作成runで参照: `0件`
- 候補答案固定: `未実施`
- 完成数: `16 / 39` のまま

## Topic 17 SPEC固定範囲

扱う内容は導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。指定可視化は電流―導通損失、スイッチング周波数―損失、出力―変換効率。

Topic 16の多レベル波形・高調波解析は再展開せず、後続TopicのSiC採用・機器小型化を先取りしない。未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

## 次工程

新しい独立runで、公式解答・標準解答を先に見ず、固定5問の公式問題文と完成教材だけを使って26答案要素を再解答し、候補答案を固定する。固定EXAM_ALIGNMENT・SPEC指定7項目・3可視化は変更しない。
