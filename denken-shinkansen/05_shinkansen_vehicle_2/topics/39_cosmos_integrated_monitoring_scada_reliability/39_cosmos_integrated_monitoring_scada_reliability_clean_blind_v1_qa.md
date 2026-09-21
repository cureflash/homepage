# Topic 39 clean blind v1 QA

更新日: 2026-09-21

判定: `FAIL / solver_error / clean_blind_v2_required`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- candidate commit: `cb034e4e121512844cf0333c6df49de84d7555e8`
- candidate固定前の公式標準解答参照: なし
- candidate固定前のTopic 39 answer-bearing教材/QA参照: なし
- candidate固定後の修正: 0件
- 固定EXAM_ALIGNMENT差し替え: 0件
- 系列SPEC固定13項目変更: 0件

## 公式標準解答との照合

### R4一次「機械」問3

candidate: `ハ / ニ / チ / カ / イ`

公式: `ハ / ニ / チ / カ / イ`

判定: `5 / 5 PASS`。

### R3一次「機械」問8

candidate: `チ / ト / カ / ヌ / ヘ`

公式: `チ / ト / カ / ヌ / ヘ`

判定: `5 / 5 PASS`。

### H30一次「機械」問8

candidate: `ル / ヨ / ヌ / チ / イ`

公式: `ル / ヨ / ヌ / チ / イ`

判定: `5 / 5 PASS`。

### H25一次「機械」問8

candidate: `ヨ / ル / ロ / カ / ト`

公式: `ヨ / ル / ロ / カ / ト`

判定: `5 / 5 PASS`。

### R2二次「電力・管理」問2

固定5答案要素中、1・2・3・5は公式標準解答と一致する。

固定答案要素4でFAIL:

- 公式標準解答: 77/66 kV級遮断器の定格遮断時間は `5サイクル及び3サイクル`。事故除去指令を受ける箇所は `引外しコイル（トリップコイル、TC）`。
- candidate: `3サイクル` と `引外しコイル（トリップコイル）`。
- 相違: candidateは3サイクルだけを挙げ、公式標準解答が列挙する5サイクルを欠落した。candidate固定後の追記は禁止なので不一致として扱う。

判定: `4 / 5 PASS`。

### 公式一致集計

- 一次: `20 / 20 PASS`
- 二次: `4 / 5 PASS`
- 合計: `24 / 25 FAIL`

## 教材だけでの導出可能性

candidate固定後に既存解説source/source QAを照合した。

- R4一次「機械」問3: `5 / 5 derivable`
- R3一次「機械」問8: `5 / 5 derivable`
- H30一次「機械」問8: `5 / 5 derivable`
- H25一次「機械」問8: `5 / 5 derivable`
- R2二次「電力・管理」問2: `5 / 5 derivable`

R2固定答案要素4についても既存教材 §10 が `5又は3サイクル` とトリップコイルを収録している。したがって今回の不足は教材欠落ではなく、独立再解答時に5サイクルを落としたsolver errorである。

教材だけでの導出可能性合計: `25 / 25 PASS`。

## remediation判定

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `不要`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: fresh workerによるclean blind v2。v1のcandidate/QAや公式標準解答をcandidate固定前に参照せず、同じ固定5問・25答案要素をquestion-onlyから再解答する。v2で公式一致25/25かつ教材だけでの導出可能性25/25を満たした場合のみTopic 39をcompletedとする。
