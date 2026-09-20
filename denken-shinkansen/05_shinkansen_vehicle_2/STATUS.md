# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `33 / 39`
- current_status: `topic_34_explanation_source_complete`
- last_completed_topic: `33 空調・電熱の熱収支`
- active_topic: `34 コンプレッサ・ポンプ・ファンの負荷特性`
- next_start: Topic 34の解説sourceを正本として解説PDFを生成し、A4縦・文字抽出・PDFium / Poppler表示・固定5問27答案要素・SPEC固定7項目・3段階例題をQAする。

Topic 01〜33は `PASS / completed`。完成数 `33 / 39`。

## Topic 32 照明設計

判定: `PASS / COMPLETED`

完成後clean blind:
- candidate: `topics/32_lighting_design/32_lighting_design_clean_blind_candidate.md`
- candidate blob SHA: `b153d374febdd737285e8a6db7722ce14bf019fb`
- lock commit: `30e30f320db482bf63c939ee2be3c6a00d8dbc42`
- final QA: `topics/32_lighting_design/32_lighting_design_clean_blind_qa.md`
- 固定5問: `5 / 5 PASS`
- 一次: `30 / 30 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- candidate固定後修正: `0件`
- SPEC固定9項目: `9 / 9 connected`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- exact blocker: `0件`

Topic 32のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`。

## Topic 33 空調・電熱の熱収支

判定: `PASS / COMPLETED`

制作前EXAM_ALIGNMENT:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance.md`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_exam_alignment_qa.md`
- 固定公式過去問: `5問`
- 一次: `5問 / 22答案要素`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- 一次独立再解答: `22 / 22 PASS`
- SPEC固定7項目: `7 / 7 mapped`
- 参考教材比較: `e-sysnet + 電験王2`
- 件数合わせ採用: `0件`

解説source / PDF:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source.md`
- source QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source_qa.md`
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation.pdf`
- PDF QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_pdf_qa.md`
- 固定5問・22答案要素: `22 / 22 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- A4縦: `7頁`
- PDFium / Poppler: `7 / 7 PASS`
- 文字化け・欠字・ページ端切れ・重大な重なり・U+FFFD: `0件`

練習source / PDF:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source.md`
- source QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source_qa.md`
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice.pdf`
- PDF QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_pdf_qa.md`
- canonical commit: `3637ae75c356bfc3613d2102c729397a40a64fce`
- canonical PDF blob SHA: `6f97c59f3b4cd54c47ab1fc9f7039c3fbb39417f`
- SHA-256: `079a09b8a2517c3171f4055d9549f9857570a68ecf3e3d8ad57e204c43503954`
- A4縦: `7頁`
- 一次試験型: `10問`（五肢択一 `10 / 10`）
- 正答一意性: `10 / 10 PASS`
- 数値独立再計算: `6 / 6 PASS`
- 知識・識別問題: `4 / 4 PASS`
- 問1〜問10・正答・完全解説: `10 / 10 PASS`
- 固定5問・22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 PASS`
- PDFium / Poppler: `7 / 7 PASS`
- page-edge overflow / blank page / U+FFFD: `0件`

旧staging integrity blockerは解消済み。旧chunk構成を推測せず、canonical練習sourceからPDFを再生成して新canonical化し、旧temporary chunks/workflowは削除済み。

PowerPoint:
- PPTX: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_images.pptx`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_images_qa.md`
- canonical commit: `1154f804df8acff3956fee2d1ded4666c46afaaa`
- PPTX blob SHA: `22679f0b7d8ecd34b1a0556d1c591fc81bf996c4`
- SHA-256: `cb1d632c0788653314a79ed9c1ab36cc13414d664b3de5b9dbd872d3d5dba594`
- 16:9: `6枚`
- python-pptx geometry / LibreOffice PDF render / PNG render: `6 / 6 PASS`
- blank / page-edge overflow / U+FFFD: `0件`
- 固定5問・一次22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 PASS`
- HFC過去問固有知識の現行実車仕様への一般化: `0件`

完成後clean blind:
- candidate: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_clean_blind_candidate.md`
- candidate blob SHA: `7c205a00c70e1b5e339d55fd01cb74cefb249d54`
- lock commit: `7e32a02955fe3c7430abb7791314d8d109aee1db`
- final QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_clean_blind_qa.md`
- 固定5問: `5 / 5 PASS`
- 一次: `22 / 22 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- candidate固定後修正: `0件`
- 教材外知識による補完: `0件`
- SPEC固定7項目: `7 / 7 connected`
- 固定EXAM_ALIGNMENT変更: `0件`
- H27 HFCの現行実車仕様への一般化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力
- 外気負荷
- 車内負荷
- 効率

Topic 33はEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`。

## Topic 34 コンプレッサ・ポンプ・ファンの負荷特性

判定: `IN_PROGRESS / EXPLANATION_SOURCE_COMPLETE`

制作前EXAM_ALIGNMENT:
- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_exam_alignment_qa.md`
- 固定公式過去問: `5問`
- 一次: `3問 / 15答案要素`
- 二次: `2問 / 12答案要素`
- 独立再解答・公式照合: `27 / 27 PASS`
- SPEC固定7項目: `7 / 7 mapped`
- H25一次「機械」問3でファン・ポンプ用途を直接確認
- 二次問題の件数合わせ採用: `0件`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性の追加: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`

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

解説source:
- source: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_source.md`
- QA: `topics/34_compressor_pump_fan_load_characteristics/34_compressor_pump_fan_load_characteristics_explanation_source_qa.md`
- 固定5問・27答案要素: `27 / 27 COVERED`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- 例題数値再計算: `PASS`
- ポンプ水動力式・ファン相似則は三種既習の接続事項として明示し、固定二種過去問の直接出題式とは扱わない
- Topic 21丸め差注記: sourceへ追加、一般式変更 `0件`
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- 未確認実車値の真値化: `0件`
- exact blocker: `0件`

次工程はTopic 34解説PDF。完成数は `33 / 39` のまま。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
