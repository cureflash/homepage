# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜33は最終QAまで `PASS / completed`。完成数 `33 / 39`。

現在地は `topic_34_powerpoint_complete`。active topicは `34 コンプレッサ・ポンプ・ファンの負荷特性`。制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、解説画像PowerPointまで完了。次工程はanswer-bearing資料を未閲覧のfresh workerによるclean blind candidate固定・独立再解答。

## Topic 33 完了記録

判定: `PASS / COMPLETED`

- EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`
- 固定5問・22答案要素: `22 / 22 PASS`
- SPEC固定7項目: `7 / 7`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 34 制作前EXAM_ALIGNMENT 完了

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

canonical:
- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_exam_alignment_qa.md`

固定過去問:
- R7一次「機械」問2
- R6一次「機械」問2
- H25一次「機械」問3
- R7二次「機械・制御」問2
- R4二次「機械・制御」問3

品質ゲート:
- 固定公式過去問: `5 / 5`
- 一次: `3問 / 15答案要素`、`15 / 15 PASS`
- 二次: `2問 / 12答案要素`、`12 / 12 PASS`
- 合計: `27 / 27 PASS`
- SPEC固定7項目: `7 / 7 mapped`
- H25一次「機械」問3でファン・ポンプ用途を直接確認
- 二次問題の件数合わせ採用: `0件`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- exact blocker: `0件`

SPEC固定項目:
- 電動機出力
- 負荷トルク
- ポンプ動力
- ファン動力
- 回転速度
- 効率
- インバータ制御

## Topic 34 解説source / PDF 完了

判定: `PASS / EXPLANATION_PDF_COMPLETE`

canonical:
- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_source.md`
- source QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_source_qa.md`
- PDF: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation.pdf`
- PDF QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_pdf_qa.md`
- PDF canonical commit: `fc51bf01a1ffbeca40d0ccf8c5820278731009ea`
- PDF SHA-256: `0e296a9fe5efe720c7d1ed3d21194327b2eded20c6e4c80c0db03d6d0a00e507`

品質ゲート:
- A4縦: `8頁`
- PDFium / Poppler: `8 / 8 PASS`
- blank / page-edge overflow / U+FFFD: `0件`
- 固定5問・27答案要素: `27 / 27 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- Topic 21 H26二次問1(4)丸め差注記: 維持
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 34 練習source 完了

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

canonical:
- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source.md`
- source blob SHA: `2b2ba22fc66ede164abafb853e13d3e199a8b12e`
- source commit: `7063f13ceacf8e49312c689f1f949bc5a308accb`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source_qa.md`
- QA commit: `bfe53a2660bb734120547965d0a54e0a5199d177`

品質ゲート:
- 一次試験型: `8問`
- 五肢択一: `8 / 8`
- 一次正答一意性: `8 / 8 PASS`
- 二次試験型: `4問`
- 二次で途中式・前提・単位・理由を確認可能: `4 / 4 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 数値独立再計算: `PASS`
- 知識・論理QA: `PASS`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- ポンプ水動力式を固定二種過去問の直接出題式と誤記: `0件`
- ファン相似則を成立条件なしで一般化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 34 練習PDF 完了

判定: `PASS / PRACTICE_PDF_COMPLETE`

canonical:
- PDF: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice.pdf`
- PDF QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_pdf_qa.md`
- canonical commit: `afa0daf7535ae614728734cebe48470a2651e631`
- PDF blob SHA: `6a9ea3697385c5cc1e951106b1f8a76470138ec1`
- PDF SHA-256: `2f7c1af14e3c6ff1d60bcec1a51e3432b7fe1cfcb2b1056f9b71ff4197f08040`

品質ゲート:
- A4縦: `8頁`
- PDFium render: `8 / 8 PASS`
- Poppler render: `8 / 8 PASS`
- blank / page-edge overflow / U+FFFD: `0件`
- 一次1〜8: `8 / 8収録 PASS`
- 二次1〜4: `4 / 4収録 PASS`
- 一次正答: `8 / 8収録 PASS`
- 完全解説: `12 / 12収録 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21 H26二次問1(4)丸め差注記: 維持
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 34 解説画像PowerPoint 完了

判定: `PASS / POWERPOINT_COMPLETE`

canonical:
- PowerPoint: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images.pptx`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images_qa.md`
- canonical commit: `e165d6db6fb212cfdf750ddbc7953138cde75cf8`
- file size: `58419 bytes`
- SHA-256: `a50257290c31e1ecc3a2c3456bc8ec9762cbc677333414313c0597e9770e44f0`

品質ゲート:
- 16:9: `6枚`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- PPTX content assertions: `PASS`
- source notes: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- PNG render: `6 / 6 PASS`
- blank render / page-edge overflow / U+FFFD: `0件`
- 固定5問・27答案要素: `27 / 27 connected`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 二次問題の件数合わせ採用: `0件`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- exact blocker: `0件`

Topic 34自体は未完了。完成数は `33 / 39` のまま。

## 次工程

answer-bearing資料を未閲覧のfresh workerがTopic 34のclean blind candidateを固定し、独立再解答する。その後に固定EXAM_ALIGNMENT・公式解答と照合してTopic 34の最終完了を判定する。本runは固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointのanswer-bearing資料を確認済みなのでclean blind candidateを作成しない。Topic 35以降はTopic 34完了まで先取りしない。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。