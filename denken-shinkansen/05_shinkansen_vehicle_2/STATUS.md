# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `32 / 39`
- current_status: `topic_33_practice_pdf_blocked_integrity_mismatch`
- last_completed_topic: `32 照明設計`
- active_topic: `33 空調・電熱の熱収支`
- next_start: 最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、Topic 33固定EXAM_ALIGNMENT、解説source/PDF/QA、練習source/QAと練習PDF staged payloadをreconcileする。`part0 + part1 + part2` は19,106 bytesへ復号できるが、宣言済みcanonical SHA256 `392e31a90e41f15d401214ffbada1d379305247cad1eed96d0421052163d0705` と一致しない。`part1a` の役割は正本・workflowに確定記載がないため推測で組み替えず停止する。

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

判定: `BLOCKED / PRACTICE_PDF_INTEGRITY`

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

練習PDF materialization:
- staging commits: `058e6ea5fbd7b2d6833c39c85aed2e4f5f90ed92`, `9a035479828e1c1c5045741fc6440e6ac8f710b6`
- retrigger commit: `732c9851a44f89759fe28001bd528e3266423c5c`
- workflow run / job: `35511621652 / 106080397325`
- staged composition in workflow: `part0 + part1 + part2`
- decoded size: `19,106 bytes PASS`
- expected SHA256: `392e31a90e41f15d401214ffbada1d379305247cad1eed96d0421052163d0705`
- SHA256 verification: `FAIL`
- additional staged chunk: `part1a` exists, but canonical workflow・正本に用途指定なし
- canonical practice PDF commit: `未成立`
- practice PDF QA: `未実施`
- exact blocker: `staged PDF payload checksum mismatch; part1aの用途を根拠なく推測できないため停止`

SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力
- 外気負荷
- 車内負荷
- 効率

次工程は上記integrity blockerの解消のみ。canonical payload構成または正しいchunkが確定するまでPDF生成・QA・PowerPoint・clean blindへ進めない。完成数は `32 / 39` のまま。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
