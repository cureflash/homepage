# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜33は最終QAまで `PASS / completed`。完成数 `33 / 39`。

現在地は `topic_33_completed_ready_topic_34_exam_alignment`。active topicは `34 コンプレッサ・ポンプ・ファンの負荷特性`。次工程は制作前EXAM_ALIGNMENT。

## Topic 32 完了記録

判定: `PASS / COMPLETED`

clean blind canonical:
- candidate: `topics/32_lighting_design/32_lighting_design_clean_blind_candidate.md`
- candidate blob SHA: `b153d374febdd737285e8a6db7722ce14bf019fb`
- lock commit: `30e30f320db482bf63c939ee2be3c6a00d8dbc42`
- final QA: `topics/32_lighting_design/32_lighting_design_clean_blind_qa.md`

最終QA:
- 固定5問 `5 / 5 PASS`
- 一次 `30 / 30 PASS`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- candidate固定後修正 `0件`
- SPEC固定9項目 `9 / 9 connected`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- exact blocker `0件`

## Topic 33 完了記録

判定: `PASS / COMPLETED`

制作前EXAM_ALIGNMENT canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance.md`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_exam_alignment_qa.md`
- 固定過去問: R8一次「機械」問6、R3一次「機械」問7、R1一次「機械」問7ヒートポンプ行、H30一次「機械」問4、H27一次「機械」問4
- 一次: `22 / 22 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- SPEC固定7項目: `7 / 7 mapped`
- 件数合わせ採用: `0件`

解説source / PDF canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source.md`
- source QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source_qa.md`
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation.pdf`
- PDF QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_pdf_qa.md`
- 固定5問・22答案要素: `22 / 22 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- A4縦 `7頁`、PDFium / Poppler `7 / 7 PASS`
- ページ端切れ・重大な重なり・文字化け・欠字・U+FFFD: `0件`

練習source / PDF canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source.md`
- source blob SHA: `dcee853dedc9adeb2f351315dc6ca97f3d23a118`
- source QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source_qa.md`
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice.pdf`
- PDF QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_pdf_qa.md`
- PDF canonical commit: `3637ae75c356bfc3613d2102c729397a40a64fce`
- PDF blob SHA: `6f97c59f3b4cd54c47ab1fc9f7039c3fbb39417f`
- PDF SHA-256: `079a09b8a2517c3171f4055d9549f9857570a68ecf3e3d8ad57e204c43503954`
- 一次試験型 `10問`、五肢択一 `10 / 10`
- 正答一意性 `10 / 10 PASS`、数値独立再計算 `6 / 6 PASS`、知識・識別 `4 / 4 PASS`
- 固定5問・22答案要素 `22 / 22 connected`
- SPEC固定7項目 `7 / 7 PASS`
- A4縦 `7頁`、PDFium / Poppler `7 / 7 PASS`
- page-edge overflow / blank page / U+FFFD: `0件`

旧staging integrity blockerは、chunk順序を推測して修復せずcanonical練習sourceから再生成・再QAすることで解消済み。旧temporary chunks/workflowは削除済み。

PowerPoint canonical:
- PPTX: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_images.pptx`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_images_qa.md`
- canonical commit: `1154f804df8acff3956fee2d1ded4666c46afaaa`
- PPTX blob SHA: `22679f0b7d8ecd34b1a0556d1c591fc81bf996c4`
- SHA-256: `cb1d632c0788653314a79ed9c1ab36cc13414d664b3de5b9dbd872d3d5dba594`
- 16:9 `6 slides`
- python-pptx geometry / LibreOffice PDF render / PNG render: `6 / 6 PASS`
- blank / page-edge overflow / U+FFFD: `0件`
- 固定5問・一次22答案要素 `22 / 22 connected`
- SPEC固定7項目 `7 / 7 PASS`

完成後clean blind canonical:
- candidate: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_clean_blind_candidate.md`
- candidate blob SHA: `7c205a00c70e1b5e339d55fd01cb74cefb249d54`
- lock commit: `7e32a02955fe3c7430abb7791314d8d109aee1db`
- final QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_clean_blind_qa.md`
- QA commit: `220a2a0b913d9fea2c2d596d9161a91f52198c69`

最終QA:
- 固定5問 `5 / 5 PASS`
- 一次 `22 / 22 PASS`
- 二次 `対象外（公式「機械・制御」試験範囲に電熱なし）`
- candidate固定後修正 `0件`
- 教材外知識による補完 `0件`
- SPEC固定7項目 `7 / 7 connected`
- 固定EXAM_ALIGNMENT変更 `0件`
- H27のHFCを現行実車仕様へ一般化 `0件`
- 未確認実車値の真値化 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

Topic 33はEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程を通過済み。

## 次工程

Topic 34「コンプレッサ・ポンプ・ファンの負荷特性」の制作前EXAM_ALIGNMENTから開始する。最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、直近worker成果をreconcileし、重複作業をしない。公式過去問を直近年度から確認し、一次・二次の適用範囲を実問題と公式試験範囲で確定してから教材範囲を固定する。未確認の実車コンプレッサ・ポンプ・ファン仕様値は推測で真値化しない。Topic 35以降は先取りしない。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
