# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜34は最終QAまで `PASS / completed`。完成数 `34 / 39`。

現在地は `topic_35_exam_alignment_complete`。active topicは `35 ATC① 軌道回路の回路解析`。制作前EXAM_ALIGNMENTは固定5問・25答案要素 `25 / 25 PASS`、SPEC固定7項目 `7 / 7 mapped`。次工程は最新main・上位仕様・系列SPEC・既存worker成果をreconcileしたうえで、固定EXAM_ALIGNMENTを変更せずTopic 35解説sourceを作成する。

## Topic 34 完了記録

判定: `PASS / COMPLETED`

### 制作前EXAM_ALIGNMENT

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
- 固定公式過去問: `5 / 5 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- 合計: `27 / 27 PASS`
- SPEC固定7項目: `7 / 7 mapped`
- 二次問題の件数合わせ採用: `0件`
- exact blocker: `0件`

### 解説source / PDF

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
- 固定5問・27答案要素: `27 / 27 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`

### 練習source / PDF

canonical:
- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source.md`
- source QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_source_qa.md`
- PDF: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice.pdf`
- PDF QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_practice_pdf_qa.md`
- PDF canonical commit: `afa0daf7535ae614728734cebe48470a2651e631`
- PDF SHA-256: `2f7c1af14e3c6ff1d60bcec1a51e3432b7fe1cfcb2b1056f9b71ff4197f08040`

品質ゲート:
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問`
- 一次正答一意性: `8 / 8 PASS`
- A4縦: `8頁`
- PDFium / Poppler: `8 / 8 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- SPEC固定7項目: `7 / 7 PASS`

### 解説画像PowerPoint

canonical:
- PowerPoint: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images.pptx`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_images_qa.md`
- canonical commit: `e165d6db6fb212cfdf750ddbc7953138cde75cf8`
- SHA-256: `a50257290c31e1ecc3a2c3456bc8ec9762cbc677333414313c0597e9770e44f0`

品質ゲート:
- 16:9: `6枚`
- python-pptx geometry / LibreOffice PDF / PNG render: `6 / 6 PASS`
- 固定5問・27答案要素: `27 / 27 connected`
- SPEC固定7項目: `7 / 7 PASS`

### clean blind v1

- candidate: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_candidate.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_qa.md`
- result: `26 / 27 FAIL`
- 一次: `14 / 15`
- 二次: `12 / 12`
- 診断: `1要素の穴埋め文・選択肢対応ミス。必要な物理関係は既存解説sourceに収録済み。`
- 教材欠落によるFAIL: `0件`
- 既存成果物の修正・再生成: `0件`

### clean blind v2

canonical:
- candidate: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_v2_candidate.md`
- candidate blob SHA: `fdf4b1217885497d478e17647598e4713fcca95b`
- candidate lock commit: `94af90f8472262da74dda7b02eb6c362348fe207`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_clean_blind_v2_qa.md`
- QA commit: `ca987b5b946caee121311fd17e14d71e6ab62ba2`

品質ゲート:
- 固定公式過去問: `5 / 5 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- 合計: `27 / 27 PASS`
- candidate固定後修正: `0件`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- SPEC固定7項目: `7 / 7 connected`
- exact blocker: `0件`

過去問固有注記:
- R7二次「機械・制御」問2の半負荷回転速度はcandidate計算値 `1179 min^-1`、公式最終表示 `1180 min^-1`。計算過程は同一で、表示丸め差として `PASS_WITH_ROUNDING_NOTE`。
- R4二次「機械・制御」問3はcandidateの未丸め値を公式指定桁へ丸めると全6要素一致。平均直流電圧の `3√2/π` と公式係数 `1.35` は同一式の数値表現差。

Topic 34は全工程を通過したため `PASS / COMPLETED`。完成数を `34 / 39` とする。

## Topic 35 制作前EXAM_ALIGNMENT 完了

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

canonical:
- source: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis.md`
- source commit: `e23491f2b2a4178cbf270b28f417c79c76e4f2ef`
- QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_exam_alignment_qa.md`
- QA commit: `b02af09ee5d016b9d0e1a27b2ac53c8b95a9804b`

固定過去問:
- R8一次「理論」問3
- R7一次「理論」問3
- R7一次「理論」問4
- R6一次「理論」問6
- R5一次「理論」問4

品質ゲート:
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`
- R8二次: 2026-09-21時点で未実施
- R7〜R5二次確認範囲で本Topicへ直接対応する問題: `0件`
- 二次問題の件数合わせ採用: `0件`
- SPEC固定7項目: `7 / 7 mapped`
- 公式解答との不一致: `0件`
- exact blocker: `0件`

SPEC固定項目:
- 軌道回路
- レールインピーダンス
- 車軸短絡
- 受信レベル
- 信号電流
- 回路条件
- フェイルセーフ

固定過去問は軌道回路そのものを問う問題とは扱わず、一般回路理論を軌道回路の簡略等価回路へ接続するための試験対応として固定した。鉄道固有原理はJRTT・鉄道総研の一次資料で確認済み。

境界:
- 未確認レールインピーダンス実値の真値化: `0件`
- 未確認車軸短絡抵抗実値の真値化: `0件`
- 未確認受信しきい値・信号電流実値の真値化: `0件`
- Topic 36の変調・フィルタ・ノイズ・S/N等の先取り: `0件`
- Topic 37の速度制御・ブレーキ制御の先取り: `0件`
- Topic 21一般式変更: `0件`

次工程: 固定5問・25答案要素、SPEC固定7項目、二次適用判定、鉄道一次資料の境界を変更せず、Topic 35解説sourceを作成する。Topic 35はまだ未完了で、完成数は `34 / 39` のまま。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
