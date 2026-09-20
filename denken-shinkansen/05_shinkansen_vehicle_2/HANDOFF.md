# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜32は最終QAまで `PASS / completed`。完成数 `32 / 39`。

現在地は `topic_33_practice_pdf_blocked_integrity_mismatch`。active topicは `33 空調・電熱の熱収支`。

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

EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程を通過済み。

## Topic 33 制作前EXAM_ALIGNMENT 完了

canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance.md`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_exam_alignment_qa.md`

固定ゲート:
- R8一次「機械」問6: `5 / 5 PASS`
- R3一次「機械」問7: `5 / 5 PASS`
- R1一次「機械」問7のヒートポンプ行: `2 / 2 PASS`
- H30一次「機械」問4: `5 / 5 PASS`
- H27一次「機械」問4: `5 / 5 PASS`
- 一次合計: `22 / 22 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- SPEC固定7項目: `7 / 7 mapped`
- 件数合わせ採用: `0件`
- 未確認実車値の真値化: `0件`
- exact blocker: `0件`

二次対象外は未調査ではない。公式試験概要で一次「機械」に「電熱」が含まれる一方、二次「機械・制御」は「電気機器、パワーエレクトロニクス、自動制御及びメカトロニクス」であり、本Topicの固定論点である電熱を含まないため、件数合わせ採用を行っていない。

## Topic 33 解説source / PDF 完了

canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source.md`
- source QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_source_qa.md`
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation.pdf`
- PDF QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_explanation_pdf_qa.md`

品質ゲート:
- 固定5問・22答案要素: `22 / 22 PASS`
- SPEC固定7項目: `7 / 7 PASS`
- 3段階例題: `3 / 3 PASS`
- PDF A4縦: `7頁`
- PDFium / Poppler: `7 / 7 PASS`
- ページ端切れ・重大な重なり・文字化け・欠字・U+FFFD: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 33 練習source 完了

canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source.md`
- source blob SHA: `dcee853dedc9adeb2f351315dc6ca97f3d23a118`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_source_qa.md`

品質ゲート:
- 一次試験型: `10問`
- 五肢択一: `10 / 10`
- 正答一意性: `10 / 10 PASS`
- 数値問題独立再計算: `6 / 6 PASS`
- 知識・識別問題: `4 / 4 PASS`
- 固定5問・22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- 二次問題の件数合わせ採用: `0件`
- COPと電熱器効率の混同: `0件`
- J/W/kW・秒換算の不整合: `0件`
- H27のHFCを現行実車へ一般化: `0件`
- 未確認実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

系列SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力
- 外気負荷
- 車内負荷
- 効率

## Topic 33 練習PDF integrity blocker

materialization staging:
- commits: `058e6ea5fbd7b2d6833c39c85aed2e4f5f90ed92`, `9a035479828e1c1c5045741fc6440e6ac8f710b6`
- retrigger commit: `732c9851a44f89759fe28001bd528e3266423c5c`
- workflow: `.github/workflows/tmp_topic33_practice_pdf.yml`
- run / job: `35511621652 / 106080397325`
- workflow composition: `part0 + part1 + part2`
- decoded size check: `19,106 bytes PASS`
- expected SHA256: `392e31a90e41f15d401214ffbada1d379305247cad1eed96d0421052163d0705`
- SHA256 check: `FAIL`
- `part1a` は追加staging済みだが、正本・workflowに用途または置換位置の指定がない。
- canonical `33_hvac_thermal_balance_practice.pdf`: `未成立`
- PDF QA: `未実施`

exact blocker:
`part0 + part1 + part2` は期待サイズに復号できる一方でcanonical SHA256に一致しない。`part1a` の用途を根拠なく推測してchunk構成を変更すると正本性を破壊するため、canonical payload構成または正しいchunkが確定するまで停止する。

## 次工程 — blocker解消後のみ

fresh workerは最新mainと上記記録をreconcileし、canonical payload構成が根拠付きで確定した場合のみTopic 33練習PDF materializationを再開する。PDFが正しいSHAまたは新たに正本化された検証可能なhashへ一致し、PDFium / Poppler QAを通過するまではPowerPoint・完成後clean blindへ進めない。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
