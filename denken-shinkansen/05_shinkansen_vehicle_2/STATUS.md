# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `34 / 39`
- current_status: `topic_35_exam_alignment_complete`
- last_completed_topic: `34 コンプレッサ・ポンプ・ファンの負荷特性`
- active_topic: `35 ATC① 軌道回路の回路解析`
- next_start: 最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、既存の車両二種worker成果をreconcileし、Topic 35の固定5問・25答案要素、SPEC固定7項目、二次適用判定を変更せず解説sourceを作成する。未確認のレールインピーダンス、車軸短絡抵抗、受信しきい値、信号電流を真値化しない。

Topic 01〜34は `PASS / completed`。完成数は `34 / 39`。

## Topic 33 空調・電熱の熱収支

判定: `PASS / COMPLETED`

EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`。固定5問・22答案要素 `22 / 22 PASS`、SPEC固定7項目 `7 / 7`、exact blocker `0件`。

## Topic 34 コンプレッサ・ポンプ・ファンの負荷特性

判定: `PASS / COMPLETED`

### 制作前EXAM_ALIGNMENT

- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5`
- 一次: `3問 / 15答案要素`、`15 / 15 PASS`
- 二次: `2問 / 12答案要素`、`12 / 12 PASS`
- 合計: `27 / 27 PASS`
- SPEC固定7項目: `7 / 7 mapped`
- 二次問題の件数合わせ採用: `0件`
- exact blocker: `0件`

固定過去問:
- R7一次「機械」問2
- R6一次「機械」問2
- H25一次「機械」問3
- R7二次「機械・制御」問2
- R4二次「機械・制御」問3

SPEC固定項目:
- 電動機出力
- 負荷トルク
- ポンプ動力
- ファン動力
- 回転速度
- 効率
- インバータ制御

### 解説source / PDF

- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_source.md`
- source QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_source_qa.md`
- PDF: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation.pdf`
- PDF QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_pdf_qa.md`
- PDF canonical commit: `fc51bf01a1ffbeca40d0ccf8c5820278731009ea`
- PDF SHA-256: `0e296a9fe5efe720c7d1ed3d21194327b2eded20c6e4c80c0db03d6d0a00e507`
- A4縦: `8頁`
- PDFium / Poppler: `8 / 8 PASS`
- 固定5問・27答案要素: `27 / 27 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`

### 練習source / PDF

- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source.md`
- source QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source_qa.md`
- PDF: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice.pdf`
- PDF QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_pdf_qa.md`
- PDF canonical commit: `afa0daf7535ae614728734cebe48470a2651e631`
- PDF SHA-256: `2f7c1af14e3c6ff1d60bcec1a51e3432b7fe1cfcb2b1056f9b71ff4197f08040`
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問`
- 一次正答一意性: `8 / 8 PASS`
- A4縦: `8頁`
- PDFium / Poppler: `8 / 8 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- SPEC固定7項目: `7 / 7 PASS`

### 解説画像PowerPoint

- PowerPoint: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images.pptx`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images_qa.md`
- canonical commit: `e165d6db6fb212cfdf750ddbc7953138cde75cf8`
- SHA-256: `a50257290c31e1ecc3a2c3456bc8ec9762cbc677333414313c0597e9770e44f0`
- 16:9: `6枚`
- python-pptx geometry / LibreOffice PDF / PNG render: `6 / 6 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- SPEC固定7項目: `7 / 7 PASS`

### clean blind

v1:
- candidate: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_candidate.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_qa.md`
- result: `26 / 27 FAIL`
- 診断: `1要素の穴埋め文・選択肢対応ミス。教材欠落ではない。`
- 既存成果物の修正・再生成: `0件`

v2:
- candidate: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_v2_candidate.md`
- candidate blob SHA: `fdf4b1217885497d478e17647598e4713fcca95b`
- candidate lock commit: `94af90f8472262da74dda7b02eb6c362348fe207`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_v2_qa.md`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- 合計: `27 / 27 PASS`
- R7二次問2の半負荷回転速度: candidate計算値 `1179 min^-1`、公式最終表示 `1180 min^-1`。同一計算の表示丸め差として `PASS_WITH_ROUNDING_NOTE`。
- R4二次問3の数値: candidate未丸め値を公式指定桁へ丸めると全件一致。
- candidate固定後修正: `0件`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- exact blocker: `0件`

Topic 34はEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind v2独立再解答まで全工程 `PASS`。完成数を `34 / 39` へ更新する。

## Topic 35 ATC① 軌道回路の回路解析

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

### 制作前EXAM_ALIGNMENT

- source: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis.md`
- source commit: `e23491f2b2a4178cbf270b28f417c79c76e4f2ef`
- QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_exam_alignment_qa.md`
- QA commit: `b02af09ee5d016b9d0e1a27b2ac53c8b95a9804b`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`。R8二次は未実施、R7〜R5の確認範囲では本Topicへ直接対応する二次問題を確認できず、件数合わせ採用しない。
- SPEC固定7項目: `7 / 7 mapped`
- 二次問題の件数合わせ採用: `0件`
- exact blocker: `0件`

固定過去問:
- R8一次「理論」問3
- R7一次「理論」問3
- R7一次「理論」問4
- R6一次「理論」問6
- R5一次「理論」問4

SPEC固定項目:
- 軌道回路
- レールインピーダンス
- 車軸短絡
- 受信レベル
- 信号電流
- 回路条件
- フェイルセーフ

鉄道側の原理はJRTT・鉄道総研の一次資料で確認し、固定過去問は軌道回路そのものの出題ではなく一般回路理論の試験対応として明示した。未確認実車値の真値化、Topic 36・37先取り、Topic 21一般式変更はいずれも `0件`。

次工程は固定5問・25答案要素、SPEC固定7項目、二次適用判定を変更せずTopic 35解説sourceを作成する。完成数は `34 / 39` のまま。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
