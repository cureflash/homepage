# HANDOFF

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
current_status: `topic_13_preproduction_reanswer_complete_with_gap`

## 今回完了

Topic 13「単相の新幹線負荷は三相系統を乱さない？」の制作前blind独立再解答を完了した。

正式品質ゲートは既存の2問8答案要素を維持した。
- 平成28年度 第二種一次「法規」問6 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — `3答案要素`

公式解答を見る前に答案をcommit `56eefef68ab233fa14c184d84fe013f420f95d63` でロックし、その後公式解答と照合した。

結果:
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

H23二次問4:
- (1) 三相最大平衡負荷 `52.0 kW`: PASS
- (2) 単相負荷合計: locked `21.7 kW` / official `24.0 kW` — FAIL
- (3) 利用率: locked `92.1 %` / official `95.0 %` — FAIL

exact gap:
- 二つの単相負荷を各変圧器へ独立に追加するものとして誤ってモデル化した。
- 正しくは二つの単相負荷を同一にしたとき合計が最大となり、30 kVA側には三相負荷電流のみ、50 kVA側には三相負荷電流と単相負荷電流の合成が流れる。
- 50 kVA側の容量制約をフェーザで立式して `P1,max = 50 - 30 cos30° = 24.02 kW` を得る説明が教材に必要。

この不足はTopic 07既習のV結線・フェーザをTopic 13の不平衡・負荷配分へ接続する中間説明であり、仕様追加ではない。制作前の不足確認なのでTopic 13をFAIL確定にはしないが、完成後blind再解答で `8 / 8 PASS` するまでcompletedにはしない。

品質境界:
- 正式過去問追加: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`

## 現在地

Topic 01〜12: `completed`。

完成数: `12 / 22`。

active topic: Topic 13「単相の新幹線負荷は三相系統を乱さない？」。

## 次に行う

Topic 13の解説source本文を制作する。SPEC固定範囲を増やさず、上記exact gapを必須中間説明として埋める。特にH23二次問4の回路電流・フェーザ合成・容量制約を、完成後に教材だけで再解答できる粒度まで説明する。