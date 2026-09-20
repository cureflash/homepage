# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `33 / 39`
- current_status: `topic_34_powerpoint_complete`
- last_completed_topic: `33 空調・電熱の熱収支`
- active_topic: `34 コンプレッサ・ポンプ・ファンの負荷特性`
- next_start: answer-bearing資料を未閲覧のfresh workerがTopic 34 clean blind candidateを固定し、独立再解答する。本runは固定EXAM_ALIGNMENT・解説・練習のanswer-bearing資料を確認済みのためclean blind candidateを作成しない。

Topic 01〜33は `PASS / completed`。完成数は `33 / 39` のまま。

## Topic 33 空調・電熱の熱収支

判定: `PASS / COMPLETED`

EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`。固定5問・22答案要素 `22 / 22 PASS`、SPEC固定7項目 `7 / 7`。未確認実車値の真値化、Topic 21一般式変更、exact blockerはいずれも `0件`。

## Topic 34 コンプレッサ・ポンプ・ファンの負荷特性

判定: `IN_PROGRESS / POWERPOINT_COMPLETE`

### 制作前EXAM_ALIGNMENT

- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_exam_alignment_qa.md`
- 固定公式過去問: `5問`
- 一次: `3問 / 15答案要素`
- 二次: `2問 / 12答案要素`
- 独立再解答・公式照合: `27 / 27 PASS`
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
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- exact blocker: `0件`

### 練習source

- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source.md`
- source blob SHA: `2b2ba22fc66ede164abafb853e13d3e199a8b12e`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source_qa.md`
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問`
- 一次正答一意性: `8 / 8 PASS`
- 数値独立再計算: `PASS`
- 知識・論理QA: `PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- ポンプ水動力式を固定二種過去問の直接出題式と誤記: `0件`
- ファン相似則を成立条件なしで一般化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習PDF

- PDF: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice.pdf`
- PDF QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_pdf_qa.md`
- PDF canonical commit: `afa0daf7535ae614728734cebe48470a2651e631`
- PDF blob SHA: `6a9ea3697385c5cc1e951106b1f8a76470138ec1`
- PDF SHA-256: `2f7c1af14e3c6ff1d60bcec1a51e3432b7fe1cfcb2b1056f9b71ff4197f08040`
- A4縦: `8頁`
- PDFium / Poppler: `8 / 8 PASS`
- blank page / page-edge overflow / U+FFFD: `0件`
- 一次1〜8: `8 / 8収録 PASS`
- 二次1〜4: `4 / 4収録 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 解説画像PowerPoint

- PowerPoint: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images.pptx`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images_qa.md`
- canonical commit: `e165d6db6fb212cfdf750ddbc7953138cde75cf8`
- PowerPoint SHA-256: `a50257290c31e1ecc3a2c3456bc8ec9762cbc677333414313c0597e9770e44f0`
- 16:9: `6枚`
- python-pptx geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- PNG render: `6 / 6 PASS`
- source notes: `6 / 6 PASS`
- blank render / page-edge overflow / U+FFFD: `0件`
- 固定5問・27答案要素: `27 / 27 connected`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- exact blocker: `0件`

Topic 34自体は未完了。次工程はfresh clean blind独立再解答。本runはanswer-bearing資料を閲覧済みのためcandidate固定は行わない。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。