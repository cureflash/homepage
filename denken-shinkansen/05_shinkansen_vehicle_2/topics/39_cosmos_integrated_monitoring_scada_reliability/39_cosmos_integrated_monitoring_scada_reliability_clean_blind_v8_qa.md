# Topic 39 clean blind v8 QA

更新日: 2026-09-21

判定: `FAIL / solver_error / CLEAN_BLIND_V9_PENDING`

## 固定条件

- 固定対象: 5問・25答案要素（一次20、二次5）
- v8 candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v8_candidate.md`
- candidate commit: `0763c9055298cf54f853c79b0ed60da7439f2d20`
- candidate freshness: `PASS`
- candidate固定後の修正: `0件`
- 固定EXAM_ALIGNMENT差し替え: `0件`
- 系列SPEC固定13項目変更: `0件`
- R2固定5群境界: question-only intake記載どおり維持

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

固定5答案要素は既存EXAM_ALIGNMENTとquestion-only intakeどおり次の区切りを維持する。

1. 計器用変成器の役割＋代表例CT/VT
2. 比誤差 `ε=(K_n-K)/K×100 [%]`
3. 保護リレーの信頼性
4. 77/66 kV級遮断器の定格遮断時間＋引外しコイル
5. トリップフリー

固定答案要素1: `PASS`。高圧回路からの絶縁、扱いやすい値への変成、CT/VTを含む。

固定答案要素2: `PASS`。`ε=(K_n/K-1)×100=((K_n-K)/K)×100 [%]` は公式標準解答と一致する。

固定答案要素3: `PASS`。保護区間内事故での必要時正動作と、正常時・区間外事故での不要時正不動作という信頼性の中核を説明している。

固定答案要素4: `FAIL / solver error`。公式標準解答は定格遮断時間を `5サイクル及び3サイクル`、事故除去指令を受ける箇所を `引外しコイル（トリップコイル、TCも可）` とする。candidateは `3サイクル` のみで、主名称を `引外し装置（トリップ装置）` とした。括弧内でトリップコイルへの電気指令には触れているが、定格遮断時間の欠落だけで固定答案要素4は不一致となる。

固定答案要素5: `PASS`。投入指令と引外し指令が競合しても引外しを優先し、投入・開放の反復を防ぐ機能と目的を説明している。

R2二次判定: `4 / 5 PASS`。

R2固定5答案要素区切り維持: `5 / 5 PASS`。

## 公式一致集計

- 一次: `20 / 20 PASS`
- 二次: `4 / 5 PASS`
- 合計: `24 / 25 FAIL`
- R2固定5答案要素区切り維持: `PASS`

## 教材だけでの導出可能性

candidate固定後にTopic 39 canonical EXAM_ALIGNMENTを照合した。

- R4一次: `負担 / 励磁 / 小さ / 比誤差 / 短絡` を収録
- R3一次: `2 / 誤差 / 時間 / MSB / サンプルホールド` を収録
- H30一次: `リピータ / ブリッジ / MAC / Wi-Fi / DHCP` を収録
- H25一次: `搬送波 / 復調 / AM / QAM / ASK` を収録
- R2二次: 固定5群を収録し、定格遮断時間は `5サイクル` と `3サイクル` の双方、引外しコイル、トリップフリーまで収録

教材だけでの導出可能性: `25 / 25 PASS`。

## 診断

v8の不一致は教材欠落ではない。一次20答案要素は全一致し、R2固定5群境界も維持できた。固定答案要素4の不一致は独立再解答側のsolver errorである。

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

別fresh worker/contextによるclean blind v9。candidate固定前はquestion-only intakeと公式「問題」PDFだけを使い、R2二次はintake記載の固定5群境界を維持する。candidate固定後にのみ公式標準解答・既存教材と照合する。
