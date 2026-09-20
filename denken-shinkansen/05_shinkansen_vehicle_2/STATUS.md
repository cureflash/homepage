# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `36 / 39`
- current_status: `topic_37_practice_source_complete`
- last_completed_topic: `36 ATC② 信号伝送と周波数`
- active_topic: `37 ATC③ 速度制御系`
- next_start: 最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、Topic 37制作前EXAM_ALIGNMENT＋QA、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QAをreconcileし、固定5問・25答案要素（一次5、二次20）、SPEC固定8項目、鉄道一次資料の境界を維持したままTopic 37練習PDF生成＋PDF QAへ進む。未確認の実車ATC内部実装・数値を真値化せず、Topic 38を先取りしない。

Topic 01〜36は `PASS / completed`。完成数は `36 / 39`。

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

判定: `PASS / COMPLETED`

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

### 解説source

- source: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_explanation_source.md`
- source commit: `6f1e43f9473bfe004b0385260f77bf49d4d21d82`
- source QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_explanation_source_qa.md`
- source QA commit: `283cc934c5339f7eec882af4c1573bc024467dfe`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- 数値・複素数再計算: `PASS`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

鉄道側の原理はJRTT・鉄道総研の一次資料で確認し、固定過去問は軌道回路そのものの出題ではなく一般回路理論の試験対応として明示した。

### 解説PDF

- PDF: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_explanation.pdf`
- PDF QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_explanation_pdf_qa.md`
- PDF canonical commit: `51bed9f651d4ba499d54e5de40d6e3061e68b420`
- PDF SHA-256: `f35699fb423d486ef36ba8a4d69056c8b06eb5059139c8df459b9e1356fef9be`
- A4縦: `10頁`
- qpdf syntax / stream check: `PASS`
- Poppler `pdfinfo` / `pdftotext`: `PASS`
- Poppler render: `10 / 10 PASS`
- 文字抽出: `7576 chars / PASS`
- 置換文字 U+FFFD: `0件`
- 固定5問・25答案要素: `25 / 25 connected`
- 二次問題の件数合わせ採用: `0件`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- exact blocker: `0件`

### 練習source

- source: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_practice_source.md`
- source commit: `d3179e7f0af0dd9e5650127dac65549132e6c8a1`
- source blob SHA: `ad27d26a4f661e84160ecad4838baea6f43287a2`
- source QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_practice_source_qa.md`
- source QA commit: `4e6d6b4e5a7ea736f39d611a5c5a955c0053c3e9`
- 一次試験型: `12問 / 12問五肢択一`
- 二次試験型: `0問`（直接対応問題未確認のため件数合わせなし）
- 一次正答一意性: `12 / 12 PASS`
- 数値・回路式独立再計算: `10 / 10 PASS`
- 知識・境界問題: `2 / 2 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定7項目: `7 / 7 PASS`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習PDF

- PDF: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_practice.pdf`
- PDF QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_practice_pdf_qa.md`
- PDF canonical commit: `408f00c194c4a407c1e0b885f62c58df63e5f36d`
- PDF blob SHA: `060f442964cc94114e1e556c6a7dfb0ad891ad75`
- PDF SHA-256: `305c1aeadc3a9ddbae73ea16b2d1b3b7abfeaf8ed2a5961c83f2e9dd602898e4`
- A4縦: `6頁`
- PDFium / Poppler render: `6 / 6 PASS`
- `pdfinfo` / `pdftotext -layout`: `PASS`
- 文字抽出: `6847 chars / PASS`
- 置換文字 U+FFFD: `0件`
- 一次問題・正答・完全解説: `12 / 12 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定7項目: `7 / 7 PASS`
- 二次問題の件数合わせ採用: `0件`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- exact blocker: `0件`

### 解説画像PowerPoint

- PowerPoint: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_images.pptx`
- QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_images_qa.md`
- canonical commit: `8207d885b2ef402e880cd9ede65994744cee3ec6`
- SHA-256: `0859b0d59bed70367d108f9c0102f806c1d53bd371b2766f27f9686256955a52`
- file size: `55935 bytes`
- 16:9: `6枚`
- python-pptx geometry / content / source notes: `6 / 6 PASS`
- LibreOffice PDF / Poppler text / PNG render: `6 / 6 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- 二次問題の件数合わせ採用: `0件`
- SPEC固定7項目: `7 / 7 PASS`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### clean blind

- candidate: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_clean_blind_candidate.md`
- candidate blob SHA: `132183604321049b5072c68476b93c06dd69d50a`
- candidate lock commit: `2bcf5961818074ad647004af19ce8d74b3021d07`
- QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_clean_blind_qa.md`
- QA canonical commit: `d401c3c67a7688bb3a6beeeb31a924959291b2cf`
- 一次: `25 / 25 PASS`
- 二次: `0問`（直接対応問題未確認、件数合わせなし）
- 合計: `25 / 25 PASS`
- candidate固定後修正: `0件`
- 教材欠落による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- exact blocker: `0件`

Topic 35はEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind独立再解答まで全工程 `PASS`。完成数を `35 / 39` へ更新する。

## Topic 36 ATC② 信号伝送と周波数

判定: `PASS / COMPLETED`

### 制作前EXAM_ALIGNMENT

- source: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency.md`
- source commit: `8591e534ca4bd929ab953ca5ac31bf9131c98c06`
- QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_exam_alignment_qa.md`
- QA commit: `35a7eab21032b3ae79398a29702973c734511f40`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`。公式試験概要上、「電力システムに関する情報伝送及び処理」は一次「機械」の範囲であり、二次「機械・制御」の科目範囲には含まれない。
- SPEC固定8項目: `8 / 8 mapped`
- 主題外二次問題の件数合わせ採用: `0件`
- e-sysnet直接対応ページ未確認時の無理な対応付け: `0件`
- 未確認実車値の真値化: `0件`
- Topic 37先取り: `0件`
- exact blocker: `0件`

固定過去問:
- R8一次「理論」問5
- R3一次「機械」問8
- H26一次「機械」問8
- H25一次「機械」問8
- H22一次「機械」問8

SPEC固定項目:
- 周波数
- 信号伝送
- 変調
- フィルタ
- ノイズ
- S/N
- デジタル判定
- 冗長化

### 解説source

- source: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_explanation_source.md`
- source commit: `886685450f33f48c929e19f09e4a37ac46e45fde`
- source QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_explanation_source_qa.md`
- source QA commit: `8a22bde3a2257187adafaf7503c8570efb7b5dec`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式・数値独立再計算: `PASS`
- 二次問題の件数合わせ採用: `0件`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 解説PDF

- PDF: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_explanation.pdf`
- PDF QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_explanation_pdf_qa.md`
- PDF canonical commit: `bff073fc92073c69f3856bb7af61e667b70ca164`
- PDF blob SHA: `18f138fc0c2fa6699645c61c7f4f4d2c7d7bf3c1`
- PDF SHA-256: `dc304539249d3bb644872bfdb0516dc0eb6e2b207c45c4e75be0c30603dff932`
- file size: `8521 bytes`
- A4縦: `2頁`
- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo` / `pdftotext -layout`: `PASS`
- PDFium / Poppler render: `2 / 2 PASS`
- visual inspection: `2 / 2 PASS`
- extracted text: `3007 chars / PASS`
- replacement character U+FFFD: `0件`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 3段階例題: `3 / 3 PASS`
- 二次問題の件数合わせ採用: `0件`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- exact blocker: `0件`

### 練習source

- source: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_practice_source.md`
- source commit: `f785bd183e5a3bebe976b9839a2b1a41c34168a1`
- source blob SHA: `d39c83d9329b71336f327f41e86c2bc9f0bdc7bb`
- source QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_practice_source_qa.md`
- source QA commit: `d9c3cb66b01be29c05ba702e0c108de9492c0e2c`
- 一次試験型: `12問 / 12問五肢択一`
- 二次試験型: `0問`（公式科目範囲外）
- 一次正答一意性: `12 / 12 PASS`
- 数値・公式独立再計算: `5 / 5 PASS`
- 知識・境界問題: `7 / 7 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習PDF

- PDF: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_practice.pdf`
- PDF QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_practice_pdf_qa.md`
- PDF canonical commit: `51d9ea42398c28ac5b27006d6868aeb96f0b1838`
- PDF blob SHA: `f678daa6fa5554266716877d32f1aca0acc21e02`
- PDF SHA-256: `707d1ae1564b13393545c9b27e0d47ed36f1e33390aa827fdd5b4c9a7dfdf0bc`
- file size: `6700 bytes`
- A4縦: `5頁`
- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo` / `pdftotext -layout`: `PASS`
- PDFium / Poppler render: `5 / 5 PASS`
- visual inspection: `5 / 5 PASS`
- extracted text: `2894 chars / PASS`
- replacement character U+FFFD: `0件`
- 一次問題・正答・解説: `12 / 12 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 二次問題の件数合わせ採用: `0件`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

### 解説画像PowerPoint

- PowerPoint: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_images.pptx`
- QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_images_qa.md`
- SHA-256: `5de0ed500adca5da90ab90b172d5c591d1bb3e37f3d81e2f2acb3a9d2fb03691`
- 16:9: `6枚`
- python-pptx geometry: `6 / 6 PASS`
- LibreOffice PDF / Poppler PNG render: `6 / 6 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 二次試験型: `0問`（公式科目範囲外）
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### clean blind

- candidate: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_clean_blind_candidate.md`
- candidate blob SHA: `0117314c6f99beacdd5e203292da63619f04eaa2`
- candidate lock commit: `08e103113ee309a460588224a0daceae23fa6ba1`
- QA: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_clean_blind_qa.md`
- QA commit: `f20b4601bd859ad05c1bdcf46a3d6cb0d1d0445d`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `25 / 25 PASS`
- 二次: `0問`（公式科目範囲外、件数合わせなし）
- 合計: `25 / 25 PASS`
- candidate固定後修正: `0件`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- SPEC固定8項目: `8 / 8 connected`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 36はEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind独立再解答まで全工程 `PASS`。完成数を `36 / 39` へ更新する。

## Topic 37 ATC③ 速度制御系

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

### 制作前EXAM_ALIGNMENT

- source: `topics/37_atc_speed_control_system/37_atc_speed_control_system.md`
- source commit: `b7f947e0f5faeeccc161bef37c11f105ead8fd2d`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_exam_alignment_qa.md`
- QA commit: `482dcfa917de54c13d1a5904be0eb7185a14a1a7`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `1問 / 5答案要素`、`5 / 5 PASS`
- 二次: `4問 / 20答案要素`、`20 / 20 PASS`
- 合計: `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 mapped`
- 系列SPEC固定計算・グラフ: `2 / 2 mapped`
- 二次問題の件数合わせ採用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- exact blocker: `0件`

固定過去問:
- R4一次「機械」問7
- R7二次「機械・制御」問4
- R6二次「機械・制御」問4
- R4二次「機械・制御」問4
- R3二次「機械・制御」問4

SPEC固定項目:
- 速度検出
- 目標速度
- 伝達関数
- ブロック線図
- 応答
- 安定性
- ブレーキ制御
- フェイルセーフ

鉄道側はJRTT一次資料で「速度信号―列車速度―自動ブレーキ」の一般原理まで固定し、実車速度検出方式・制御周期・制御器ゲイン・伝達関数・ブレーキ則・減速度・遅れ時間・フェイルセーフ実装は推測しない。鉄道総研ATS-Dxは関連する速度照査の補助資料に限定し、新幹線ATC実装として扱わない。

### 解説source

- source: `topics/37_atc_speed_control_system/37_atc_speed_control_system_explanation_source.md`
- source commit: `3964fa2fef6222dd65aa802c3e7d9363faefb27a`
- source blob SHA: `8f4f64b2fcbd75c8f13c156b57ae564c33a719dd`
- source QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_explanation_source_qa.md`
- source QA commit: `eb895eb15fd1bea8f89751d824375db0ea09b403`
- source QA blob SHA: `5f57ef0a04a90469c8d3d545eafefebc067c51d4`
- 固定5問・25答案要素: `25 / 25 PASS`
- 一次: `5 / 5 PASS`
- 二次: `20 / 20 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式・数値独立再計算: `PASS`
- 二次問題の件数合わせ採用: `0件`
- 教材用仮定値を実車値として使用: `0件`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 解説PDF

- PDF: `topics/37_atc_speed_control_system/37_atc_speed_control_system_explanation.pdf`
- PDF QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_explanation_pdf_qa.md`
- PDF canonical commit: `369b8c4c8cb31dc1c931d1406ac68ccdc83f0a01`
- PDF blob SHA: `b69862efb2f2905b56cdd8a981ae39ea5e5db1d1`
- PDF SHA-256: `8b9a65616365ddbf7796982df62c3819dc850ef0cb3192effaa1f27de69e761b`
- file size: `9429 bytes`
- A4縦: `3頁`
- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo` / `pdftotext -layout`: `PASS`
- PDFium / Poppler render: `3 / 3 PASS`
- visual inspection: `3 / 3 PASS`
- extracted text: `2605 chars / PASS`
- replacement character U+FFFD: `0件`
- 固定5問・25答案要素: `25 / 25 connected`
- 一次: `5 / 5 connected`
- 二次: `20 / 20 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 3段階例題: `3 / 3 PASS`
- 教材用仮定値を実車値として使用: `0件`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習source

- source: `topics/37_atc_speed_control_system/37_atc_speed_control_system_practice_source.md`
- source commit: `7359874c3d74128ccea71d6cd2b8fa63460f64de`
- source blob SHA: `25f28d819dd5ebfe049d7c7bf6e181be0d5c58bc`
- source QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_practice_source_qa.md`
- source QA commit: `a9db0039f49375a1155809d22128444c20ed22ba`
- source QA blob SHA: `686ccbbe8df765f9c3e08ec1fad15d956d297e97`
- 一次試験型: `12問 / 12問五肢択一`
- 一次正答一意性: `12 / 12 PASS`
- 二次試験型: `4題`
- 二次独立再計算: `20 / 20 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- 一次固定答案要素: `5 / 5 PASS`
- 二次固定答案要素: `20 / 20 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 二次問題の件数合わせ採用: `0件`
- 教材用仮定値を実車値として使用: `0件`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- exact blocker: `0件`

Topic 37は制作前EXAM_ALIGNMENT＋QA、解説source＋source QA、解説PDF＋PDF QA、練習source＋独立source QAまで完了。完成数は `36 / 39` のまま。

次工程: Topic 37練習PDF生成＋PDF QA。固定5問・25答案要素、一次12問・二次4題、SPEC固定8項目、系列SPEC固定計算・グラフ2項目、鉄道一次資料の境界を変更しない。