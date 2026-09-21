# Topic 39 clean blind v9 QA

更新日: 2026-09-22

判定: `FAIL / solver_error_x2 / CLEAN_BLIND_V10_PENDING`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v9 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v9_candidate.md`
- candidate commit: `203bec75a792d541126e1863604eb35cddb59146`
- candidate freshness: `PASS`
- candidate固定後の修正: `0件`
- 固定EXAM_ALIGNMENT差し替え: `0件`
- 系列SPEC固定13項目変更: `0件`
- R2固定5群境界: question-only intake記載どおり維持

先行する `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v9_blocker.md` は、別worker/contextがfreshness不成立のためcandidateを作らず停止した記録であり、本v9 candidateの判定ではない。本v9 candidateは、candidate固定前にanswer-bearing資料を参照しない別fresh contextで作成・commitした。

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

candidate: `ル / ヨ / ヌ / チ / ヘ`

公式: `ル / ヨ / ヌ / チ / イ`

判定: `4 / 5 PASS`。

固定答案要素5: `FAIL / solver error`。問題文は `[5] サーバ` を問うており、公式は `DHCP`（イ）。candidateは `IP`（ヘ）を選択した。ネットワーク層で用いるアドレス自体ではなく、そのアドレスを自動設定するサーバ名称を選ぶ必要があった。

### H25一次「機械」問8

candidate: `ヨ / ル / ロ / カ / ト`

公式: `ヨ / ル / ロ / カ / ト`

判定: `5 / 5 PASS`。

### R2二次「電力・管理」問2

固定5答案要素は既存EXAM_ALIGNMENTとquestion-only intakeの区切りを維持する。

1. 計器用変成器の役割＋代表例CT/VT: `PASS`
2. 比誤差 `ε=(K_n-K)/K×100 [%]`: `PASS`
3. 保護リレーの信頼性: `PASS`
4. 77/66 kV級遮断器の定格遮断時間＋事故除去指令を受ける箇所: `FAIL / solver error`
5. トリップフリー: `PASS`

固定答案要素4の公式標準解答は、定格遮断時間を `5サイクル及び3サイクル`、事故除去指令を受ける箇所を `引外しコイル（トリップコイル、TCも可）` とする。candidateは `3サイクル` のみ、名称を `操作装置` としたため不一致。

R2二次判定: `4 / 5 PASS`。

R2固定5答案要素区切り維持: `5 / 5 PASS`。

## 公式一致集計

- 一次: `19 / 20 PASS`
- 二次: `4 / 5 PASS`
- 合計: `23 / 25 FAIL`
- R2固定5答案要素区切り維持: `PASS`

## 教材だけでの導出可能性

v8 QAで教材導出可能性は `25 / 25 PASS` 済み。v8 candidate commit `0763c9055298cf54f853c79b0ed60da7439f2d20` からv9 candidate commit `203bec75a792d541126e1863604eb35cddb59146` までを比較し、Topic 39の解説source/PDF、練習source/PDF、PowerPoint、canonical EXAM_ALIGNMENTに変更がないことを確認した。

したがってv9時点でも教材だけでの導出可能性は `25 / 25 PASS` を維持する。

## 診断

v9の不一致2件はいずれも独立再解答側のsolver errorであり、教材欠落ではない。

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程

別fresh worker/contextによるclean blind v10。candidate固定前はsanitized `STATUS.md` / `HANDOFF.md`、question-only intake、公式「問題」PDFだけを使い、R2二次はintake記載の固定5群境界を維持する。candidate固定後にのみ公式標準解答・既存教材と照合する。
