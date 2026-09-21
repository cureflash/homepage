# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_v1_fail_textbook_gap`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 37 完了記録

- 固定5問・25答案要素: 一次5、二次20、`25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 解説・練習・PowerPoint各成果物: `PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正 `0件`、固定EXAM_ALIGNMENT変更 `0件`、exact blocker `0件`

## Topic 38 進捗記録

固定5問はR8一次「機械」問8、R2一次「機械」問8、H29一次「機械」問8、H26一次「機械」問3、H23一次「機械」問8。一次 `5問 / 25答案要素`、二次 `0問`、件数合わせ `0件`。固定5問自体は変更しない。

PowerPointまでの制作・表示QAは一度完了したが、clean blind v1で教材接続不足を検出したためTopic 38の完成判定は保留し、派生成果物はsource remediation後に再生成・再QAする。

### clean blind v1

- intake: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_intake.md`
- candidate: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_candidate.md`
- candidate commit: `e20fc83a3d1c9c4a17f647035d8fb666f20d02d0`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_qa.md`
- remediation: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v1_remediation.md`
- 公式標準解答一致: `25 / 25 PASS`
- 教材だけで導出: `23 / 25 FAIL`
- candidate固定後修正: `0件`
- exact blocker: `0件`

FAIL要素:

1. R8一次「機械」問8(5): 現解説sourceはステッピングモータを「入力パルスに対応して離散角だけ回転する位置決め用アクチュエータ」と説明するが、問題の識別根拠である角位置センサなしの簡易位置決めと、過負荷・急加速時の脱調を明記していない。
2. H23一次「機械」問8(3): ノイマン形コンピュータの記憶プログラム・逐次命令実行が現解説source/練習sourceに欠落している。

mapping不整合:

- H29問8の実空欄は `(1)逐次的 (2)結合 (3)ドライバ (4)大きくなる (5)ブラックボックス`。既存接続表はボトムアップ等の周辺語を答案要素として数えている。
- H23問8の実空欄は `(1)組合せ回路 (2)フリップフロップ (3)ノイマン形コンピュータ (4)ASIC (5)Quine–McCluskey法`。既存接続表は(3)を状態遷移として誤接続している。

H29(4)「大きくなる」は、現教材の「単体試験=個々のモジュール」「結合試験=複数モジュール」と問題文の試験進行から導出できるためclean blind判定自体はPASS。ただし明示とmapping修正を行う。

## 次工程: Topic 38 source remediation

次runは最新main、上位2仕様書、系列SPEC、本STATUS/HANDOFFをreconcileした後、`38_comtrac_train_tracking_route_control_reliability_clean_blind_v1_remediation.md`を正本として次を行う。

1. EXAM_ALIGNMENTの答案要素記録を実空欄どおり修正する。
2. 解説sourceへR8(5)のセンサレス位置決め・脱調、H23(3)のノイマン形コンピュータ、H29(4)の対象規模増加を明示する。
3. 解説source QA、練習source/QAの接続表を空欄単位へ修正する。
4. 解説PDF、練習PDF、PowerPointを再生成して表示・内容QAをやり直す。
5. 全派生成果物の同期後にfresh clean blind v2をquestion-onlyから実施する。

v1 candidateは修正しない。v2は別candidateとして固定する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
