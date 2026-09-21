# Topic 39 clean blind v5 QA

更新日: 2026-09-21

判定: `FAIL / solver_error_and_fixed_split_nonconformance / clean_blind_v6_required`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v5 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v5_candidate.md`
- candidate commit: `4ec9094da46b28a861a1af03fc57d72a4f363f87`
- candidate freshness: `PASS`
- candidate固定前のv1〜v4 candidate/QA参照: なし
- candidate固定前の公式標準解答参照: なし
- candidate固定前のTopic 39 answer-bearing教材/QA参照: なし
- candidate固定後の修正: 0件
- 固定EXAM_ALIGNMENT差し替え: 0件
- 系列SPEC固定13項目変更: 0件

公式照合先:
- R4一次解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R3一次解答: https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf
- H30一次解答: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf
- H25一次解答: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf
- R2二次標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

## 公式標準解答との照合

### R4一次「機械」問3

candidate: `ハ / チ / チ / カ / イ`

公式: `ハ / ニ / チ / カ / イ`

- (2): `FAIL / solver error`。空欄は「励磁」であり、文全体が「励磁電流を小さくする」となる。
- その他: `PASS`

判定: `4 / 5 PASS`。

### R3一次「機械」問8

candidate: `チ / ト / カ / ヌ / ヘ`

公式: `チ / ト / カ / ヌ / ヘ`

判定: `5 / 5 PASS`。

### H30一次「機械」問8

candidate: `ル / ヨ / ヌ / チ / ヘ`

公式: `ル / ヨ / ヌ / チ / イ`

- (5): `FAIL / solver error`。空欄は「DHCP」であり「DHCPサーバ」となる。candidateはサーバから割り当てられる対象であるIPを選んだ。
- その他: `PASS`

判定: `4 / 5 PASS`。

### H25一次「機械」問8

candidate: `ヨ / ル / ロ / カ / ト`

公式: `ヨ / ル / ロ / カ / ト`

判定: `5 / 5 PASS`。

### R2二次「電力・管理」問2

固定5答案要素は次の区切りを変更しない。

1. 計器用変成器の役割＋代表例CT/VT
2. 比誤差 `ε=(K_n-K)/K×100 [%]`
3. 保護リレーの信頼性
4. 77/66 kV級遮断器の定格遮断時間＋引外しコイル
5. トリップフリー

固定答案要素1: `PASS`。

固定答案要素2: `PASS`。

固定答案要素3: `PASS`。candidateは正動作・正不動作、自動監視、低故障率、高信頼部品、冗長化を含む。

固定答案要素4: `FAIL`。公式標準解答は定格遮断時間を`5サイクル及び3サイクル`、事故除去指令を受ける箇所を`引外しコイル`とする。candidateは固定要素4に`3サイクル`しか記録せず`5サイクル`を欠き、引外しコイルを固定要素5側へ移している。

固定答案要素5: `PASS`。トリップフリーの趣旨は一致する。

R2二次判定: `4 / 5 PASS`。

R2固定5答案要素区切り維持: `FAIL`。固定要素4の引外しコイルを固定要素5へ混在させているため、candidate本文は変更せず不適合として記録する。

## 公式一致集計

- 一次: `18 / 20 PASS`
- 二次: `4 / 5 PASS`
- 合計: `22 / 25 FAIL`
- R2固定5答案要素区切り維持: `FAIL`

## 教材だけでの導出可能性

candidate固定後にTopic 39 canonical sourceと既存QAを照合した。

- R4一次: 励磁電流を含む固定5要素を収録
- R3一次: 標本化・量子化・積分形・MSB・サンプルホールドを収録
- H30一次: `リピータ / ブリッジ / MAC / Wi-Fi / DHCP` を収録
- H25一次: `搬送波 / 復調 / AM / QAM / ASK` を収録
- R2二次: 固定5群を正しい区切りで収録し、定格遮断時間は`5サイクル又は3サイクル`、引外しコイル、トリップフリーまで収録

教材だけでの導出可能性: `25 / 25 PASS`。

## 診断

v5の不一致は教材欠落ではない。R4(2)、H30(5)、R2固定要素4は独立再解答側のsolver errorで、R2は固定区切り不適合もある。

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: 別fresh workerによるclean blind v6。同じ固定5問・25答案要素をquestion-onlyから独立再解答し、candidateを先にcommitする。R2二次は固定5答案要素の区切りをそのまま維持する。`公式標準解答一致 25 / 25`、`教材だけで導出可能 25 / 25`、固定区切り維持を全て満たした場合のみTopic 39をcompletedとする。