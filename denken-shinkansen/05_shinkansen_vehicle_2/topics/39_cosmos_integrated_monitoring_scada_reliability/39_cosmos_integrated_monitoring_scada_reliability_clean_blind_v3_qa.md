# Topic 39 clean blind v3 QA

更新日: 2026-09-21

判定: `FAIL / solver_error_and_fixed_split_nonconformance / clean_blind_v4_required`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v3 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v3_candidate.md`
- candidate commit: `d7408b99b0287bdc21c034379eb70b969f9ae370`
- candidate固定前に参照したもの: sanitized `STATUS.md` / `HANDOFF.md`、clean blind intake、公式「問題」PDFのみ
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

candidate: `ハ / ニ / チ / カ / イ` = `負担 / 励磁 / 小さ / 比誤差 / 短絡`

公式: `ハ / ニ / チ / カ / イ`

判定: `5 / 5 PASS`。

### R3一次「機械」問8

candidate: `チ / ト / カ / ヌ / ヘ` = `2 / 誤差 / 時間 / MSB / サンプルホールド`

公式: `チ / ト / カ / ヌ / ヘ`

判定: `5 / 5 PASS`。

### H30一次「機械」問8

candidate: `ル / ヨ / ヌ / チ / イ` = `リピータ / ブリッジ / MAC / Wi-Fi / DHCP`

公式: `ル / ヨ / ヌ / チ / イ`

判定: `5 / 5 PASS`。

### H25一次「機械」問8

candidate: `ヨ / ル / ロ / カ / ト` = `搬送波 / 復調 / AM / 直交振幅変調 / ASK`

公式: `ヨ / ル / ロ / カ / ト`

判定: `5 / 5 PASS`。

### R2二次「電力・管理」問2

固定5答案要素へcandidate内容を意味単位で再配置して照合する。なお、v3 candidateは固定区切りをそのまま維持せず、役割と代表変成器を別要素に分け、遮断器とトリップフリーを同一要素へまとめた。このため区切り維持ゲート自体は `FAIL` とする。candidate本文は変更しない。

固定答案要素1: 計器用変成器の役割＋代表例CT/VT
- candidate要素21・22を合わせると必要内容を満たす。
- 判定: `PASS`

固定答案要素2: 比誤差 `ε=(K_n-K)/K×100 [%]`
- candidate要素23と一致。
- 判定: `PASS`

固定答案要素3: 保護リレーの信頼性
- 公式標準解答は、区間内事故への正動作、区間外事故への正不動作に加え、点検・自動監視、低故障率、冗長化を挙げる。
- candidate要素24は正動作・正不動作までで、後三項を欠く。
- 判定: `FAIL`

固定答案要素4: 77/66 kV級遮断器の定格遮断時間＋引外しコイル
- 公式標準解答: `5サイクル及び3サイクル`、`引外しコイル（トリップコイル、TCも可）`。
- candidate要素25は`3サイクル`と引外しコイルを記載したが、`5サイクル`を欠く。
- 判定: `FAIL`

固定答案要素5: トリップフリー
- candidate要素25の説明は、投入指令と競合しても引外しを優先し、投入・開放の反復を防止するという公式趣旨を満たす。
- 判定: `PASS`

R2二次判定: `3 / 5 PASS`。

## 公式一致集計

- 一次: `20 / 20 PASS`
- 二次: `3 / 5 PASS`
- 合計: `23 / 25 FAIL`
- R2固定5答案要素区切り維持: `FAIL`

## 教材だけでの導出可能性

candidate固定後にTopic 39解説sourceと既存QAを照合した。

- R4一次「機械」問3: `5 / 5 derivable`
- R3一次「機械」問8: `5 / 5 derivable`
- H30一次「機械」問8: `5 / 5 derivable`
- H25一次「機械」問8: `5 / 5 derivable`
- R2二次「電力・管理」問2: `5 / 5 derivable`

解説sourceには、R2固定5群として以下が既に明示されている。
- 計器用変成器の役割＋CT/VT
- 比誤差式
- 正動作・正不動作、点検・自動監視、低故障率、冗長化
- 5サイクル又は3サイクル、引外しコイル
- トリップフリー

教材だけでの導出可能性合計: `25 / 25 PASS`。

## 診断

v3の不一致は教材欠落ではなく独立再解答側のsolver error。加えて、R2固定5答案要素の区切り維持手順にcandidate側の非適合がある。

- 教材修正: `不要`
- 解説PDF再生成: `不要`
- 練習source/PDF再生成: `不要`
- PowerPoint再生成: `不要`
- 固定EXAM_ALIGNMENT変更: `不要`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: 別fresh workerによるclean blind v4。candidate固定前はv1〜v3 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材を参照しない。同じ固定5問・25答案要素をquestion-onlyから再解答し、R2二次は固定5答案要素の区切りをそのまま維持する。`公式標準解答一致 25 / 25`、`教材だけで導出可能 25 / 25`、固定区切り維持の全てを満たした場合のみTopic 39をcompletedとする。
