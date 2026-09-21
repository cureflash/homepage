# Topic 39 clean blind v6 QA

更新日: 2026-09-21

判定: `FAIL / solver_error_and_fixed_split_nonconformance / clean_blind_v7_required`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v6 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v6_candidate.md`
- candidate commit: `9f8a1260c334054eae18e124ff3a2722f75961b7`
- candidate freshness: `PASS`
- candidate固定後の修正: `0件`
- 固定EXAM_ALIGNMENT差し替え: `0件`
- 系列SPEC固定13項目変更: `0件`

公式照合先:
- R4一次解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R3一次解答: https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf
- H30一次解答: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf
- H25一次解答: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf
- R2二次標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

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

固定5答案要素は既存EXAM_ALIGNMENTどおり次の区切りを維持する。

1. 計器用変成器の役割＋代表例CT/VT
2. 比誤差 `ε=(K_n-K)/K×100 [%]`
3. 保護リレーの信頼性
4. 77/66 kV級遮断器の定格遮断時間＋引外しコイル
5. トリップフリー

固定答案要素1: `PASS`。役割とCT/VTを含む。

固定答案要素2: `PASS / content present`。比誤差式自体は正しい。ただしcandidateでは固定要素1へ併合されており、固定区切りには不適合。

固定答案要素3: `PASS`。必要時の動作と不要時の不動作を説明している。

固定答案要素4: `FAIL / solver error`。公式標準解答は定格遮断時間を`5サイクル及び3サイクル`、事故除去指令を受ける箇所を`引外しコイル`とする。candidateは`5サイクル`のみで`3サイクル`を欠き、さらに引外しコイルを別答案要素へ分割している。

固定答案要素5: `PASS`。トリップフリーの機能・目的は一致する。

R2二次判定: `4 / 5 PASS`。

R2固定5答案要素区切り維持: `FAIL`。candidateは固定要素1と2を併合し、固定要素4を二つに分割している。candidate本文は変更せず不適合として記録する。

## 公式一致集計

- 一次: `20 / 20 PASS`
- 二次: `4 / 5 PASS`
- 合計: `24 / 25 FAIL`
- R2固定5答案要素区切り維持: `FAIL`

## 教材だけでの導出可能性

candidate固定後にTopic 39 canonical sourceと既存QAを照合した。

- R4一次: `負担 / 励磁 / 小さ / 比誤差 / 短絡` を収録
- R3一次: `2 / 誤差 / 時間 / MSB / サンプルホールド` を収録
- H30一次: `リピータ / ブリッジ / MAC / Wi-Fi / DHCP` を収録
- H25一次: `搬送波 / 復調 / AM / QAM / ASK` を収録
- R2二次: 固定5群を正しい区切りで収録し、定格遮断時間は`5サイクル`と`3サイクル`の双方、引外しコイル、トリップフリーまで収録

教材だけでの導出可能性: `25 / 25 PASS`。

## 診断

v6の不一致は教材欠落ではない。一次20答案要素は全一致。R2固定要素4の`3サイクル`欠落と固定5答案要素の区切り不適合は独立再解答側のsolver/structuring errorである。

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: 別fresh workerによるclean blind v7。同じ固定5問・25答案要素をquestion-onlyから独立再解答し、candidateを先にcommitする。R2二次は固定5答案要素の区切りをそのまま維持する。`公式標準解答一致 25 / 25`、`教材だけで導出可能 25 / 25`、固定区切り維持を全て満たした場合のみTopic 39をcompletedとする。
