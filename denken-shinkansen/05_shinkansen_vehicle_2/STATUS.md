# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `32 / 39`
- current_status: `topic_33_powerpoint_complete_ready_clean_blind`
- last_completed_topic: `32 照明設計`
- active_topic: `33 空調・電熱の熱収支`
- next_start: fresh workerで最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、Topic 33教材成果物をreconcileする。answer-bearing資料を先に開かず、教材だけで固定5問・22答案要素のclean blind candidateを作成・固定し、その後に公式解答と照合する。

Topic 01〜32は `PASS / completed`。完成数 `32 / 39`。

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

判定: `IN_PROGRESS / POWERPOINT_COMPLETE / READY_CLEAN_BLIND`

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

解説source:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source.md`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source_qa.md`
- 固定5問・22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 connected`
- 3段階例題: `3 / 3 PASS`

解説PDF:
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation.pdf`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_pdf_qa.md`
- A4縦: `7頁`
- PDFium / Poppler: `7 / 7 PASS`
- 固定5問・22答案要素: `22 / 22 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- 文字化け・欠字・ページ端切れ・重大な重なり: `0件`
- 置換文字 U+FFFD: `0件`

練習source:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source.md`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source_qa.md`
- 一次試験型: `10問`（五肢択一 `10 / 10`）
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- 正答一意性: `10 / 10 PASS`
- 数値独立再計算: `6 / 6 PASS`
- 知識・識別問題: `4 / 4 PASS`
- 固定5問・22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 PASS`
- COPと効率の区別: `PASS`
- J/W/kW・秒換算: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`

練習PDF:
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice.pdf`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_pdf_qa.md`
- canonical commit: `3637ae75c356bfc3613d2102c729397a40a64fce`
- canonical blob SHA: `6f97c59f3b4cd54c47ab1fc9f7039c3fbb39417f`
- SHA-256: `079a09b8a2517c3171f4055d9549f9857570a68ecf3e3d8ad57e204c43503954`
- file size: `21,971 bytes`
- A4縦: `7頁`
- PDFium / Poppler: `7 / 7 PASS`
- page-edge overflow / blank page / U+FFFD: `0件`
- 問1〜問10: `10 / 10収録 PASS`
- 正答・完全解説: `10 / 10収録 PASS`
- 固定5問・22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 covered`
- exact blocker: `0件`

旧staging integrity blockerは解消済み。`part0 + part1 + part2` は19,106 bytesへ復号できたが旧宣言SHA256と一致しなかったためcanonical化せず、`part1a` が `part1` の先頭2,123文字と完全一致することだけを確認した。chunk順序を推測せず、canonical練習sourceからPDFを再生成し、PDFium / Poppler / text QAで検証した生成物を新canonicalとした。旧temporary chunks/workflowは削除済み。

PowerPoint:
- PPTX: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_images.pptx`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_images_qa.md`
- canonical commit: `1154f804df8acff3956fee2d1ded4666c46afaaa`
- PPTX blob SHA: `22679f0b7d8ecd34b1a0556d1c591fc81bf996c4`
- SHA-256: `cb1d632c0788653314a79ed9c1ab36cc13414d664b3de5b9dbd872d3d5dba594`
- 16:9: `6枚`
- python-pptx geometry: `6 / 6 PASS`
- LibreOffice PDF render: `6 / 6 PASS`
- PNG render: `6 / 6 PASS`
- blank / page-edge overflow / U+FFFD: `0件`
- 固定5問・一次22答案要素: `22 / 22 connected`
- 二次: `対象外`
- SPEC固定7項目: `7 / 7 PASS`
- HFC過去問固有知識の現行実車仕様への一般化: `0件`
- 未確認実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

初回PowerPoint render QAは `pdftotext` が `SPEC 7項目` に空白を挿入したためexact-token assertionのみ失敗した。内容・geometry・renderに異常はなく、抽出テキストの空白だけを正規化した再試験でPASS。教材内容の変更はしていない。

SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力
- 外気負荷
- 車内負荷
- 効率

次工程はfresh clean blind独立再解答。今runはanswer-bearing資料を確認済みのためcandidate固定へ進まない。完成数は `32 / 39` のまま。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
