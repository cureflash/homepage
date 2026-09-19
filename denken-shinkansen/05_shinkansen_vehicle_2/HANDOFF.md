# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜26は最終QAまで `PASS / completed`。完成数は `26 / 39`。

現在地は `topic_27_explanation_pdf_complete`。active topicは Topic 27 `L0系① リニア同期モータ`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、直近コミット、Topic 26最終成果、既存車両二種worker成果をreconcileした。Topic 27は別workerが解説source＋source QAまで完了していたため、その成果を正本として採用し重複制作しなかった。

次工程のTopic 27解説PDFとPDF QAを作成。A4縦3ページ、PDFium / Poppler `3 / 3 PASS`、`pdftotext -layout PASS`、固定5問・23答案要素 `23 / 23 covered`、SPEC必須7項目 `7 / 7 covered`、固定教材必要説明8項目 `8 / 8 covered`、指定2可視化 `2 / 2 PASS`、3段階例題 `3 / 3 PASS`。L0系未確認実車値の真値化、固定EXAM_ALIGNMENT変更、Topic 28範囲の先取りはいずれも0件。exact blocker `0件`。

## Topic 26 固定EXAM_ALIGNMENT

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis.md`

固定問題:
1. R7二次「機械・制御」問2 `(1)〜(3)` — 6答案要素
2. H26一次「機械」問5 `(1),(4),(5)` — 3答案要素
3. H25一次「機械」問3 `(1)` — 1答案要素
4. R5一次「機械」問2 `(2),(3),(5)` — 3答案要素
5. H27一次「機械」問3 `(1),(2),(3)` — 3答案要素

集計:
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・16答案要素`

列車の勾配抵抗式・走行抵抗式を直接問う第二種公式過去問は固定対象として確認できなかったため、直接出題とは記載しない。Topic 14で確定済みの `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として固定過去問の電動機・効率・回生論点へ接続する。

## Topic 26 成果物最終状態

### 解説source / PDF

- explanation source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- source blob SHA: `e962b822d5d6af80fa9adf694250a3202e5a10ea`
- explanation PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- canonical PDF blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- A4縦: `3 pages`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問・16答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`

### 練習source / PDF

- practice source: `PASS / PRACTICE_SOURCE_COMPLETE`
- source blob SHA: `4e1c26ddd981747b05a12d751bd83bfec8287888`
- 一次8問、二次4問、合計12問
- practice PDF: `PASS / PRACTICE_PDF_COMPLETE`
- canonical PDF blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- A4縦: `4 pages`
- PDFium / Poppler: `4 / 4 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定答案要素接続: `16 / 16`

### PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `999988097102c9674967abc8152c04ebf7904819`
- 16:9 / `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定答案要素接続: `16 / 16`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`

## Topic 26 clean blind

候補:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_blind_candidates.md`
- blob SHA: `8eec1ddb4285420828d134a2f28e6469ff33be5a`
- lock commit: `c52f45f7b56817e2a76e9c872758e41bd21c4a8c`
- lock後の同ファイル追加commit: `0件`

公式照合:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_clean_blind_official_match_qa.md`
- R7二次 問2: `6 / 6 PASS`
- H26一次 問5: `3 / 3 PASS`
- H25一次 問3: `1 / 1 PASS`
- R5一次 問2: `3 / 3 PASS`
- H27一次 問3: `3 / 3 PASS`
- 一次: `10 / 10 PASS`
- 二次: `6 / 6 PASS`
- 合計: `16 / 16 PASS`
- 不一致: `0件`

R7二次の `1.55×10^3 W`、`1.18×10^3 min^-1`、`1.12×10^4 W` は公式標準解答 `1550 W`、`1180 min^-1`、`11200 W` と同値。

## Topic 26 最終QA

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_final_qa.md`

判定:
- `PASS / COMPLETED`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `16 / 16 PASS`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- candidate lock後の修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 27 固定EXAM_ALIGNMENT

成果物:
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor.md`
- initial commit: `6f6f7d4eecc9d97a5d3a29fb5c6b14a4d61500a4`

固定問題:
1. R7一次「機械」問1 `(1)〜(5)` — 5答案要素
2. R6一次「機械」問1 `(1)〜(5)` — 5答案要素
3. H29一次「機械」問1 `(1),(2),(5)` — 3答案要素
4. H21一次「機械」問5 `(1)〜(5)` — 5答案要素
5. R6二次「機械・制御」問1 `(1)(a)〜(c),(2)(b),(2)(c)` — 5答案要素

集計:
- 一次: `4問・18答案要素`
- 二次: `1問・5答案要素`
- 合計: `5問・23答案要素`
- 制作前独立解答: `23 / 23 PASS`

固定する教材範囲:
- 同期機
- 移動磁界
- 極ピッチ
- 周波数
- 同期速度
- 電機子反作用
- 同期リアクタンス

一般式:
- 回転同期機: `N_s=120f/P [min^-1]`
- リニア同期機: `v_s=2τf [m/s]`

指定可視化:
1. 周波数―同期速度
2. 極ピッチ―同期速度

L0系実車接続は、鉄道総合技術研究所等の一次資料で確認した「ガイドウェイ推進コイルへ三相交流を供給→移動磁界→車上超電導磁石との吸引・反発により推進」までとする。公開一次資料で確認できていないL0系の極ピッチ、推進周波数、同期リアクタンス、推力等を真値化しない。数値例は仮定値と明記する。

負荷角`δ`、フェーザ、内部誘導起電力から出力・推力へ進む本格解析はTopic 28の範囲とし、Topic 27へ追加しない。

## Topic 27 解説source

成果物:
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation_source.md`
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation_source_qa.md`

判定:
- `PASS / EXPLANATION_SOURCE_COMPLETE`
- 固定過去問: `5 / 5 mapped`
- 一次答案要素: `18 / 18 covered`
- 二次答案要素: `5 / 5 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC必須7項目: `7 / 7 covered`
- 固定教材必要説明8項目: `8 / 8 covered`
- 指定2可視化: `2 / 2 defined`
- 3段階例題: `3 / 3 PASS`
- 例題数値独立再計算: `3 / 3 PASS`
- L0系未確認実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 27 解説PDF

成果物:
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation.pdf`
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation_pdf_qa.md`

判定:
- `PASS / EXPLANATION_PDF_COMPLETE`
- canonical PDF blob SHA: `10f17547d41a12d59ad76dcb33bc7a3a398f86a8`
- A4縦: `3 pages`
- PDFium / Poppler: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `18 / 18 covered`
- 二次答案要素: `5 / 5 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC必須7項目: `7 / 7 covered`
- 固定教材必要説明8項目: `8 / 8 covered`
- 指定2可視化: `2 / 2 PASS`
- 3段階例題: `3 / 3 PASS`
- L0系未確認実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## 固定境界

- Topic 26固定EXAM_ALIGNMENT: `5問・16答案要素`
- Topic 27固定EXAM_ALIGNMENT: `5問・23答案要素`
- Topic 21 H26二次 問1(4)の `48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持
- 一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- L0系未確認実車値の真値化: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## 次の安全な工程

Topic 27 `L0系① リニア同期モータ` の練習sourceを作成する。固定EXAM_ALIGNMENTと解説PDFを入力として、一次試験型＋二次記述式の問題・完全解説を作り、数値・論理を独立再計算する。L0系未確認実車値を真値化せず、Topic 28範囲を先取りしない。