# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_explanation_source_remediated`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 37 完了記録

- 固定5問・25答案要素: 一次5、二次20、`25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 解説・練習・PowerPoint各成果物: `PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正 `0件`、固定EXAM_ALIGNMENT変更 `0件`、exact blocker `0件`

## Topic 38 clean blind v1診断

固定5問はR8一次「機械」問8、R2一次「機械」問8、H29一次「機械」問8、H26一次「機械」問3、H23一次「機械」問8。一次 `5問 / 25答案要素`、二次 `0問`、件数合わせ `0件`。固定5問自体は変更しない。

clean blind v1は公式標準解答 `25 / 25 PASS`、教材だけで導出 `23 / 25 FAIL`。

- R8問8(5): 角位置センサなしの簡易位置決め、過負荷・急加減速時の脱調不足
- H23問8(3): ノイマン形コンピュータ不足
- H29問8/H23問8: 固定答案要素mappingが実空欄と不一致
- v1 candidate修正: `0件`

## 今runのremediation完了範囲

### EXAM_ALIGNMENT＋QA

`PASS / EXAM_ALIGNMENT_REMEDIATED`

- source commit: `25eff5df4436b338d31dbbcd29ebb703018f0bd0`
- QA commit: `0585a5803c75eb3e525bd8df3c90f60b043cb298`
- H29実空欄: `(1)逐次的 (2)結合 (3)ドライバ (4)大きくなる (5)ブラックボックス`
- H23実空欄: `(1)組合せ回路 (2)フリップフロップ (3)ノイマン形コンピュータ (4)ASIC (5)Quine–McCluskey法`
- 固定5問変更: `0件`
- 固定25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`

### 解説source＋source QA

`PASS / EXPLANATION_SOURCE_REMEDIATED`

- source commit: `a7c57a477e4c33d2619de243204f5a0bd3bce6fe`
- QA commit: `b718ffd4898442e5a898b8b036880465aa725e5e`
- R8(5): 角位置センサなしのオープンループ簡易位置決めと脱調条件を明示
- H23(3): ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行を明示
- H29(4): 単体→結合→システム試験で対象プログラム量・範囲が大きくなることを明示
- H29/H23接続表を実空欄単位へ修正
- 固定25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

## 次工程: practice source remediation

次runは最新main、上位2仕様書、系列SPEC、本STATUS/HANDOFF、remediated EXAM_ALIGNMENT・解説sourceをreconcileし、既存練習source/QAへ同じ3点と実空欄mappingを反映する。

その後、旧派生成果物を流用せず以下を再生成・再QAする。

1. explanation PDF / PDF QA
2. practice PDF / PDF QA
3. PowerPoint / PowerPoint QA
4. fresh clean blind v2

v1 candidateは修正しない。v2は別candidateとして固定する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
