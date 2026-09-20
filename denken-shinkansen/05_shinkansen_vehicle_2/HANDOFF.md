# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜32は最終QAまで `PASS / completed`。完成数 `32 / 39`。

現在地は `topic_33_practice_pdf_complete`。active topicは `33 空調・電熱の熱収支`。次工程はPowerPoint生成＋render QA。

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

## Topic 33 練習PDF 完了

canonical:
- PDF: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice.pdf`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_practice_pdf_qa.md`
- commit: `3637ae75c356bfc3613d2102c729397a40a64fce`
- PDF blob SHA: `6f97c59f3b4cd54c47ab1fc9f7039c3fbb39417f`
- source blob SHA: `dcee853dedc9adeb2f351315dc6ca97f3d23a118`
- SHA-256: `079a09b8a2517c3171f4055d9549f9857570a68ecf3e3d8ad57e204c43503954`
- file size: `21,971 bytes`
- A4縦: `7頁`

render / text QA:
- PDFium: `7 / 7 PASS`
- Poppler: `7 / 7 PASS`
- page-edge overflow: `0件`
- blank page: `0件`
- `pdftotext -layout`: `PASS (15,021 bytes)`
- U+FFFD: `0件`
- 問1〜問10: `10 / 10収録 PASS`
- 正答・完全解説: `10 / 10収録 PASS`
- 固定5問・22答案要素: `22 / 22 connected`
- SPEC固定7項目: `7 / 7 covered`
- fixed EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

旧integrity blockerの診断:
- `part0 + part1 + part2` は19,106 bytesへ復号できるが旧宣言SHA256と不一致だったためcanonical化しなかった。
- `part1a` は `part1` の先頭2,123文字と完全一致することを確認した。用途を推測してchunk構成を変更していない。
- canonical練習sourceからPDFを再生成し、PDFium / Poppler / text QAを通過した生成物を新canonicalとした。
- 旧staging chunksとtemporary workflowは削除済み。

## 次工程

fresh workerは最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、Topic 33の全canonical成果物をreconcileする。重複成果がないことを確認したうえで、Topic 33 PowerPoint生成＋render QAへ進む。PowerPoint完了後にclean blind独立再解答へ進み、固定5問・22答案要素を教材だけで再解答できることを確認するまではTopic 33をcompletedにしない。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
