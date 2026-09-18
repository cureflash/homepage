# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `16 / 39`
- current_status: `topic_17_blind_reanswer_needs_revision`
- last_completed_topic: `16 700系 多レベル変換器とPWM`
- active_topic: `17 パワー半導体の損失比較`
- next_start: 公式解答・標準解答を開かず、H24一次「機械」問6の採用単位とTopic 17のSPEC境界を再監査する。教材未収録の(1)(4)(5)をSPEC外追記せず、固定EXAM_ALIGNMENTの誤マッピングを是正できるか判定する。R7/R4の10要素はTopic 16候補答案を参照しないclean runで再固定する

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

上記は制作前固定時の記録。完成後blind再解答でH24一次「機械」問6の(1)(4)(5)がTopic 17教材だけでは導出できないことが判明したため、最終品質ゲートでは `26 / 26` の教材接続を未確定へ戻す。

## Topic 17 成果物

- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / 4 pages / 4 / 4 display PASS`
- 練習問題source: `PASS / 一次8問＋二次4問 / 12 / 12解説 / 12 / 12再計算 / 一次8 / 8正答一意`
- 練習PDF: `PASS / 6 pages / 6 / 6 display PASS`
- 解説画像PowerPoint: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_images.pptx`
- PowerPoint QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_powerpoint_qa.md`
- PowerPoint: `16:9 / 4枚 / 1600×900表示 4 / 4 PASS`
- PowerPoint ZIP・LibreOffice PDF変換・python-pptx open・文字抽出: `PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通一般仮定モデル変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 成果物自体の判定: `PASS`

## Topic 17 完成後独立再解答前ゲート

- gate: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_gate.md`
- 事前判定: `PASS / BLIND_REANSWER_READY`
- 固定5問・26答案要素: `変更なし`
- 公式解答・標準解答の内容をゲート作成runで参照: `0件`
- 完成数: `16 / 39` のまま

この事前ゲートの `26 / 26` 接続判定は、後続blind再解答試行で3要素の教材未収録が発見されたため、最終判定としては使用しない。

## Topic 17 完成後blind再解答試行

- candidates: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates.md`
- 判定: `NEEDS_REVISION / 23_OF_26_DERIVABLE`
- R7一次: `5 / 5` 教材内再導出
- R4一次: `5 / 5` 教材内再導出
- R2一次: `5 / 5` 教材内再導出
- H24一次: `2 / 5` 教材内再導出、`3 / 5` 教材未収録
- H24二次: `6 / 6` 教材内再導出
- 教材未収録: H24一次「機械」問6 (1)、(4)、(5)
- 公式解答・標準解答参照: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定7項目・3可視化変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- strict blind provenance: 本run中に工程形式確認のためTopic 16の候補答案記録を開いたため、同一設問であるR7/R4の10要素は次のclean runで再固定する
- completed化: `不可`

H24一次「機械」問6の(1)(4)(5)は、Topic 17の固定SPECである導通損失・スイッチング損失・スイッチング周波数・素子電流・接合温度・冷却・変換効率から外れる照明固有知識を要求する。これを教材へ追加すると仕様外追加になるため、教材側を膨らませずEXAM_ALIGNMENTの採用単位を再監査する。

## Topic 17 SPEC固定範囲

扱う内容は導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。指定可視化は電流―導通損失、スイッチング周波数―損失、出力―変換効率。

Topic 16の多レベル波形・高調波解析は再展開せず、後続TopicのSiC採用・機器小型化を先取りしない。未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

## 次工程

公式解答・標準解答はまだ開かない。H24一次「機械」問6の採用単位とTopic 17のSPEC境界を再監査し、仕様追加なしでEXAM_ALIGNMENTの誤マッピングを是正できるか判定する。その後、R7/R4を含む候補答案をclean条件で再固定する。