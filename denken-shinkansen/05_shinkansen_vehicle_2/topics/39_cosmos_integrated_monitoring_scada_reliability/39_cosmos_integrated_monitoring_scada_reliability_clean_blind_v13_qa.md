# Topic 39 clean blind v13 QA

更新日: 2026-09-22

## 判定

`FAIL / SOLVER_ERROR_X2`

- freshness: `PASS`
- 固定5問: `維持`
- 固定25答案要素: `維持`
- R2二次 固定5群境界: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 PASS`
- 合計: `23 / 25 FAIL`
- 教材だけでの導出可能性: `25 / 25 PASS`
- 教材欠落: `0件`
- 教材修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC変更: `0件`

candidate固定commit: `e4cd3aca8f50143c7d19104cbfb58422ccae10b4`

## freshness監査

candidate固定前に参照したanswer-bearing資料は `0件`。最新main、上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intake、公式「問題」PDFだけから固定25答案要素を独立再解答した。

candidateを上記commitで固定した後に、公式標準解答、Topic 39教材、過去のanswer-bearing QAを開いて照合した。

## 公式標準解答との照合

### 一次4問

- R4一次「機械」問3: `5 / 5 PASS` — `ハ / ニ / チ / カ / イ`
- R3一次「機械」問8: `5 / 5 PASS` — `チ / ト / カ / ヌ / ヘ`
- H30一次「機械」問8: `5 / 5 PASS` — `ル / ヨ / ヌ / チ / イ`
- H25一次「機械」問8: `5 / 5 PASS` — `ヨ / ル / ロ / カ / ト`

一次合計: `20 / 20 PASS`。

公式解答:
- R4: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R3: https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf
- H30: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf
- H25: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf

### R2二次「電力・管理」問2

公式標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

固定5群のうち `3 / 5 PASS`。

1. 小問(1)前半: `PASS`
   - 計器用変成器の役割、CT・VTを満たす。
2. 小問(1)後半: `PASS`
   - `ε=(K_n-K)/K×100 [%]` を満たす。
3. 小問(2): `FAIL / solver error`
   - candidateは保護区間内事故への正動作と正常時・区間外事故への正不動作を示したが、公式標準解答が信頼性の具体策として列挙する点検・自動監視、低故障率、冗長化を落とした。
4. 小問(3)前半: `FAIL / solver error`
   - candidateは定格遮断時間を `3サイクル` のみとしたが、公式標準解答は `5サイクル及び3サイクル` を挙げる。
   - candidateは「引外し装置（トリップ装置／トリップコイルを含む引外し機構）」とした。公式標準解答は `引外しコイル（トリップコイル、TC）` を特定する。少なくとも遮断時間の欠落により本群はFAIL。
5. 小問(3)後半: `PASS`
   - 投入指令中でも引外しを優先するトリップフリー機能と、事故状態での再投入・反復動作を防ぐ目的を満たす。

## 教材依存監査

不一致2群は教材不足ではない。

Topic 39 canonical sourceには以下が明記されている。

- 保護リレーの信頼性: 保護区間内事故への正動作、区間外事故への正不動作、点検・自動監視、低故障率、冗長化。
- R2二次固定対応: `77/66 kV級遮断器の代表的定格遮断時間は5サイクル又は3サイクル`、`引外しコイル（トリップコイル）`、トリップフリー。
- 一次4問20答案要素も固定EXAM_ALIGNMENTと教材本文に収録済み。

したがって固定25答案要素は教材だけで `25 / 25 PASS`。今回の不一致は教材remediation対象ではなくsolver errorと判定する。

## 品質ゲート

`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験は固定公式過去問を独立再解答して全答案要素を正答できることを要求する。v13は `23 / 25` のためTopic 39をcompletedにしない。

- 二次問題の件数合わせ: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- 系列SPEC固定13項目変更: `0件`
- Topic 21 H26二次「機械・制御」問1(4)の丸め差診断変更: `0件`
- 一般式 `P=Tω`、`ω=2πN/60` 変更: `0件`
- exact blocker: `0件`

## 次工程

`TOPIC39_CLEAN_BLIND_V14`。

別fresh worker/contextでquestion-only intakeと公式「問題」PDFだけから固定25答案要素を再度解き、candidate固定後に公式標準解答・教材と照合する。`25 / 25`公式一致かつ`25 / 25`教材導出可能、R2固定5群境界維持を満たすまでTopic 39は `IN_PROGRESS` とする。
