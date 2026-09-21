# Topic 39 clean blind v4 QA

更新日: 2026-09-21

判定: `FAIL / solver_error_and_fixed_split_nonconformance / clean_blind_v5_required`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v4 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v4_candidate.md`
- candidate commit: `32aa4a98774f662eb01d02f29d71fe6ba287f26a`
- candidate固定前に参照したもの: 最新main metadata、上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、clean blind intake、公式「問題」PDFのみ
- candidate固定前のv1〜v3 candidate/QA参照: なし
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

candidate本文は(1)の概念を`搬送波`と正しく特定したが、選択肢記号を`コ`と記録している。公式は`ヨ`。candidateは固定済みであり修正しない。

- (1): `FAIL / transcription error`
- (2)〜(5): `PASS`

判定: `4 / 5 PASS`。

### R2二次「電力・管理」問2

固定5答案要素は既存QAで確定済みの次の区切りを維持する。

1. 計器用変成器の役割＋代表例CT/VT
2. 比誤差 `ε=(K_n-K)/K×100 [%]`
3. 保護リレーの信頼性
4. 77/66 kV級遮断器の定格遮断時間＋引外しコイル
5. トリップフリー

v4 candidateはこの固定区切りをそのまま維持できていない。要素21に固定要素1・2をまとめ、固定要素4を要素23・24へ分割したため、区切り維持ゲートは `FAIL`。candidate本文は変更しない。

意味単位で固定5要素へ再配置して公式標準解答と照合する。

固定答案要素1: 計器用変成器の役割＋代表例CT/VT
- candidate要素21に必要内容あり。
- 判定: `PASS`

固定答案要素2: 比誤差 `ε=(K_n-K)/K×100 [%]`
- candidate要素21に式あり。
- 判定: `PASS`

固定答案要素3: 保護リレーの信頼性
- 公式標準解答は、区間内事故への正動作、区間外事故への正不動作に加え、点検・自動監視、低故障率、冗長化を挙げる。
- candidate要素22は正動作・正不動作を述べるが、点検・自動監視、低故障率、冗長化を欠く。
- 判定: `FAIL`

固定答案要素4: 77/66 kV級遮断器の定格遮断時間＋引外しコイル
- 公式標準解答: `5サイクル及び3サイクル`、`引外しコイル（トリップコイル、TCも可）`。
- candidate要素23は`3サイクル`のみで`5サイクル`を欠く。candidate要素24の引外しコイルは一致。
- 判定: `FAIL`

固定答案要素5: トリップフリー
- candidate要素25は、投入指令と競合しても引外しを優先し、投入・開放の反復を防止するという公式趣旨を満たす。
- 判定: `PASS`

R2二次判定: `3 / 5 PASS`。

## 公式一致集計

- 一次: `19 / 20 PASS`
- 二次: `3 / 5 PASS`
- 合計: `22 / 25 FAIL`
- R2固定5答案要素区切り維持: `FAIL`

## 教材だけでの導出可能性

candidate固定後にTopic 39解説sourceと既存QAを照合した。

- R4一次「機械」問3: `5 / 5 derivable`
- R3一次「機械」問8: `5 / 5 derivable`
- H30一次「機械」問8: `5 / 5 derivable`
- H25一次「機械」問8: `5 / 5 derivable`
- R2二次「電力・管理」問2: `5 / 5 derivable`

解説sourceには、搬送波の選択、R2固定5群の全内容（計器用変成器の役割＋CT/VT、比誤差式、正動作・正不動作＋点検・自動監視＋低故障率＋冗長化、5サイクル又は3サイクル＋引外しコイル、トリップフリー）が既に明示されている。

教材だけでの導出可能性合計: `25 / 25 PASS`。

## 診断

v4の不一致は教材欠落ではなく独立再解答側のsolver/transcription error。加えて、R2固定5答案要素区切りをcandidate側が維持できていない。

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `不要`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: 別fresh workerによるclean blind v5。candidate固定前はv1〜v4 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材を参照しない。同じ固定5問・25答案要素をquestion-onlyから再解答し、R2二次は固定5答案要素の区切りをそのまま維持する。`公式標準解答一致 25 / 25`、`教材だけで導出可能 25 / 25`、固定区切り維持の全てを満たした場合のみTopic 39をcompletedとする。
