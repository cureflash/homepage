# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `26 / 39`
- current_status: `topic_27_clean_blind_blocked_this_run`
- last_completed_topic: `26 E7・W7系 勾配条件を含む総合走行解析`
- active_topic: `27 L0系① リニア同期モータ`
- next_start: fresh workerでTopic 27 clean blind候補固定。candidate lock前はanswer-bearing `27_l0_linear_synchronous_motor.md` を開かず、固定問題IDはSTATUS/HANDOFFから取得し、教材だけで固定5問・23答案要素を解いて候補をcommitする

## Topic 25 最終状態

- 判定: `PASS / COMPLETED`
- 解説PDF canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- 練習PDF canonical blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- PowerPoint canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `28 / 28 PASS`
- SPEC必須10項目: `10 / 10 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- exact blocker: `0件`

## Topic 25 固定EXAM_ALIGNMENT

1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

集計: 一次 `20`、二次 `8`、合計 `28`。固定EXAM_ALIGNMENT変更 `0件`。

## Topic 25 固定境界

N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで。未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率を真値化しない。速度条件―必要電力は与件の仮定入力比較に限定し、未指定走行抵抗モデルを追加しない。

## Topic 26 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis.md`
- 固定過去問: `5問`
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `16答案要素`
- SPEC必須: `7項目`
- SPEC指定可視化: `3件`
- 固定問題: R7二次「機械・制御」問2、H26一次「機械」問5、H25一次「機械」問3、R5一次「機械」問2、H27一次「機械」問3
- 列車の勾配抵抗式・走行抵抗式を直接問う第二種公式問題: 固定対象として確認できず。Topic 14で確定済みの列車側力学からSPEC必須として接続し、直接出題とは記載しない
- 実車接続: JR東日本公式資料で北陸新幹線の30‰急勾配とE7系のブレーキ性能向上を確認。未公表の実車値は推定しない
- exact blocker: `0件`

## Topic 26 解説source

- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation_source.md`
- blob SHA: `e962b822d5d6af80fa9adf694250a3202e5a10ea`
- 固定過去問: `5 / 5 mapped`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 defined`
- 3段階例題: `3 / 3`
- 未確認E7・W7実車値の真値化: `0件`
- 未確認実車走行抵抗係数の追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## Topic 26 解説PDF

- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation.pdf`
- canonical blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation_pdf_qa.md`
- file size: `10,902 bytes`
- SHA-256: `304095fecec8fe3d2e46eda8fb020c3e48a2164179eb204b5e318b93dc591b17`
- A4縦: `3 pages`
- PDFium / Poppler render: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 教材用仮定値と実車値の混同: `0件`
- exact blocker: `0件`

## Topic 26 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_source.md`
- blob SHA: `4e1c26ddd981747b05a12d751bd83bfec8287888`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 教材用仮定値と実車値の混同: `0件`
- 未確認E7・W7実性能曲線の追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 26 練習PDF

- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice.pdf`
- canonical blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_pdf_qa.md`
- file size: `11,005 bytes`
- SHA-256: `6c54571db61e98f8251e7171291a5a5bc57afaf751ff7e194240021b2009441e`
- A4縦: `4 pages`
- PDFium / Poppler render: `4 / 4 PASS`
- `pdftotext`: `PASS`（6,415 bytes）
- 置換文字 `�`: `0件`
- 一次8問＋正答・完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化の計算接続: `3 / 3 aligned`
- 教材用仮定値と実車値の混同: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 26 PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_images.pptx`
- canonical blob SHA: `999988097102c9674967abc8152c04ebf7904819`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_images_qa.md`
- file size: `225,537 bytes`
- SHA-256: `67dadfdd3ef0a0a5f8b07018c9ee87a31ecd86571e1d16f74ca6b6f90e6ae4e9`
- 16:9: `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- PPTX ZIP / python-pptx / geometry: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（8,858 bytes）
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 教材用仮定値と実車値の混同: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- 初回binary uploadのtruncate: `検出・無効化・GitHub Actions再生成で解消`
- exact blocker: `0件`

## Topic 26 clean blind候補固定

- 判定: `LOCKED / COMPARED_TO_OFFICIAL_ANSWERS_WITHOUT_EDIT`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_blind_candidates.md`
- blob SHA: `8eec1ddb4285420828d134a2f28e6469ff33be5a`
- lock commit: `c52f45f7b56817e2a76e9c872758e41bd21c4a8c`
- 固定過去問: `5 / 5 candidate fixed`
- 一次答案要素: `10 / 10 candidate fixed`
- 二次答案要素: `6 / 6 candidate fixed`
- 合計答案要素: `16 / 16 candidate fixed`
- 候補固定時点の公式解答参照: `0件`
- 教材外知識での補完: `0件`
- candidate lock後の修正: `0件`
- exact blocker: `0件`

## Topic 26 clean blind公式照合

- 判定: `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_clean_blind_official_match_qa.md`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `16 / 16 PASS`
- 固定候補の後編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 不一致: `0件`
- exact blocker: `0件`

## Topic 26 最終QA

- 判定: `PASS / COMPLETED`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_final_qa.md`
- 必須成果物: `全件存在・既存QA PASS`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `16 / 16 PASS`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- candidate lock後の修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認E7・W7実車値の真値化: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## Topic 27 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor.md`
- commit: `6f6f7d4eecc9d97a5d3a29fb5c6b14a4d61500a4`
- 固定過去問: `5問`
- 一次: `4問・18答案要素`
- 二次: `1問・5答案要素`
- 合計: `23答案要素`
- 固定問題: R7一次「機械」問1、R6一次「機械」問1、H29一次「機械」問1、H21一次「機械」問5、R6二次「機械・制御」問1
- 独立解答検証: `23 / 23 PASS`
- SPEC必須7項目: 同期機、移動磁界、極ピッチ、周波数、同期速度、電機子反作用、同期リアクタンス
- SPEC指定可視化: `2件`（周波数―同期速度、極ピッチ―同期速度）
- 一般式: 回転機 `N_s=120f/P`、リニア機 `v_s=2τf`
- L0系実車接続: 一次資料で確認した「三相交流→ガイドウェイの移動磁界→車上超電導磁石との吸引・反発による推進」まで
- 未確認のL0系極ピッチ、推進周波数、同期リアクタンス、推力等の真値化: `0件`
- 負荷角・フェーザ・出力角特性の本格解析: Topic 28へ送る
- exact blocker: `0件`

## Topic 27 解説source

- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation_source.md`
- QA: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation_source_qa.md`
- 固定過去問: `5 / 5 mapped`
- 一次答案要素: `18 / 18 covered`
- 二次答案要素: `5 / 5 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC必須7項目: `7 / 7 covered`
- 固定教材必要説明8項目: `8 / 8 covered`
- SPEC指定2可視化: `2 / 2 defined`
- 3段階例題: `3 / 3 PASS`
- 例題数値独立再計算: `3 / 3 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 27 解説PDF

- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation.pdf`
- canonical blob SHA: `10f17547d41a12d59ad76dcb33bc7a3a398f86a8`
- QA: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_explanation_pdf_qa.md`
- file size: `10,082 bytes`
- SHA-256: `6e5dad1b40d7f8de0e233f11ef6ba070ee6698a4e8454f2f6553201b8072fb24`
- A4縦: `3 pages`
- PDFium / Poppler render: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（7,313 bytes）
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `18 / 18 covered`
- 二次答案要素: `5 / 5 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC必須7項目: `7 / 7 covered`
- 固定教材必要説明8項目: `8 / 8 covered`
- SPEC指定2可視化: `2 / 2 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 27 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_practice_source.md`
- blob SHA: `986b72ef8e509eff37bcad8132eff52b3086ffcb`
- QA: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_practice_source_qa.md`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定2可視化の計算系: `2 / 2 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 27 練習PDF

- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_practice.pdf`
- canonical blob SHA: `a5f336100e3b9c0ca697f729f476d475c80782a0`
- QA: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_practice_pdf_qa.md`
- file size: `11,721 bytes`
- SHA-256: `31ca8307691fbee099ff891f99764ed114a0285b4bf7198054ab7f7eb0a41339`
- A4縦: `3 pages`
- PDFium / Poppler render: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（10,408 bytes）
- 置換文字 `�`: `0件`
- 一次8問＋正答・完全解説: `8 / 8 PASS`
- 二次4問＋完全解説: `4 / 4 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定2可視化の計算接続: `2 / 2 aligned`
- 未確認L0系実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 27 PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_images.pptx`
- canonical blob SHA: `fa47872508029438c1056ea8130b636e8bb4c75b`
- QA: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_images_qa.md`
- file size: `220,628 bytes`
- SHA-256: `443a36dd659a9b4c0dabade616a15aee8ec9d39dcc88572337c45c624b46e9cc`
- 16:9: `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- PPTX ZIP / python-pptx / geometry: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（9,826 bytes）
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定2可視化: `2 / 2 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 27 clean blind gate blocker

- 判定: `BLOCKED_THIS_RUN / CLEAN_BLIND_INTEGRITY`
- record: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_clean_blind_gate_blocker.md`
- candidate作成: `0件`
- 原因: candidate lock前に保存済み独立解答・公式照合結果を含むanswer-bearing sourceを参照したため、このrunではblind性を証明不能
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- technical/spec blocker: `0件`
- fresh workerで回復可能

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 完成数

Topic 01〜26: `PASS / completed`。完成数 `26 / 39`。Topic 27はPowerPoint完了済み。clean blind候補固定はfresh workerへ引き継ぐ。