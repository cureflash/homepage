# Topic 39 clean blind v2 QA

更新日: 2026-09-21

判定: `FAIL / solver_error / clean_blind_v3_required`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v2 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v2_candidate.md`
- candidate commit: `0d2b169dff258124d088581b7690bfcdc063fc4f`
- candidate固定前の公式標準解答参照: なし
- candidate固定前のTopic 39 answer-bearing教材/QA参照: なし
- candidate固定後の修正: 0件
- 固定EXAM_ALIGNMENT差し替え: 0件
- 系列SPEC固定13項目変更: 0件

## 公式標準解答との照合

### R4一次「機械」問3

candidate: `負担 / 励磁 / 小さ / 比誤差 / 短絡`

公式: `ハ / ニ / チ / カ / イ` = `負担 / 励磁 / 小さ / 比誤差 / 短絡`

判定: `5 / 5 PASS`。

### R3一次「機械」問8

candidate: `2 / 誤差 / 時間 / MSB / サンプルホールド`

公式: `チ / ト / カ / ヌ / ヘ` = `2 / 誤差 / 時間 / MSB / サンプルホールド`

判定: `5 / 5 PASS`。

### H30一次「機械」問8

candidate: `リピータ / ブリッジ / MAC / Wi-Fi / IP`

公式: `ル / ヨ / ヌ / チ / イ` = `リピータ / ブリッジ / MAC / Wi-Fi / DHCP`

不一致: (5) は「IPアドレスを自動割当するサーバ」の名称を問うため `DHCP`。candidateは割り当て対象である `IP` とした。

判定: `4 / 5 PASS`。

### H25一次「機械」問8

candidate: `搬送波 / 復調 / AM / 位相振幅変調 / ASK`

公式: `ヨ / ル / ロ / カ / ト` = `搬送波 / 復調 / AM / 直交振幅変調 / ASK`

不一致: (4) はQAMの名称として解答群の `直交振幅変調` を選ぶ必要がある。candidateの `位相振幅変調` は解答群に存在しない。

判定: `4 / 5 PASS`。

### R2二次「電力・管理」問2

固定5答案要素へcandidate内容を再配置して照合する。

1. 計器用変成器の目的、CT・VT: candidate内に両方あり。`PASS`
2. 比誤差 `ε=(K_n-K)/K×100 [%]`: 一致。`PASS`
3. 保護リレーの信頼性: candidateは正動作・正不動作のみで、固定答案要素に含めた点検・自動監視、低故障率、冗長化を欠く。`FAIL`
4. 遮断器: candidateは `5サイクル` と引外し装置（トリップコイル）を記載。公式は `5サイクル及び3サイクル` と引外しコイル。`3サイクル` を欠く。`FAIL`
5. トリップフリー: 投入指令と競合しても引外しを優先し、反復投入を防ぐ説明が一致。`PASS`

判定: `3 / 5 PASS`。

### 公式一致集計

- 一次: `18 / 20 PASS`
- 二次: `3 / 5 PASS`
- 合計: `21 / 25 FAIL`

## 教材だけでの導出可能性

candidate固定後に既存解説source/source QAを照合した。

- R4一次「機械」問3: `5 / 5 derivable`
- R3一次「機械」問8: `5 / 5 derivable`
- H30一次「機械」問8: `5 / 5 derivable`
- H25一次「機械」問8: `5 / 5 derivable`
- R2二次「電力・管理」問2: `5 / 5 derivable`

既存教材には、DHCP、QAM、保護リレーの正動作・正不動作＋点検/自動監視＋低故障率＋冗長化、77/66 kV級遮断器の5又は3サイクル、トリップコイル、トリップフリーまで既に収録されている。

教材だけでの導出可能性合計: `25 / 25 PASS`。

## 診断

v2の4不一致はいずれも教材欠落ではなく独立再解答側のsolver error。

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `不要`
- 系列SPEC固定13項目変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: 別fresh workerによるclean blind v3。v2 candidate/QA、v1 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材をcandidate固定前に参照せず、同じ固定5問・25答案要素をquestion-onlyから再解答する。`公式標準解答一致 25 / 25` と `教材だけで導出可能 25 / 25` の両方を満たした場合のみTopic 39をcompletedとする。
