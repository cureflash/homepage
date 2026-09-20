# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜31は最終QAまで `PASS / completed`。完成数 `31 / 39`。

現在地は `topic_32_practice_pdf_complete`。Topic 32 `照明設計` は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QAまで完了。固定公式過去問は一次5問・30答案要素、SPEC固定9項目は `9 / 9 connected`。二次は公式「機械・制御」試験範囲に照明が含まれないため対象外。次はTopic 32 PowerPoint生成＋render QA。

## Topic 32 練習PDF完了記録

判定: `PASS / PRACTICE_PDF_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design_practice.pdf`
- `topics/32_lighting_design/32_lighting_design_practice_pdf_qa.md`

QA:
- PDF blob `5945167a2d4fb9d63bd6d8b8c50a813fd03cd156`
- source blob `ad3f1fabdb4e54da9196f0c8ff717c6c055b4c8f`
- file size `19677 bytes`
- SHA-256 `2df1b10ca50e519848709f4d7ab50cb67aa2c49ef08f8d00db47d26837bd7748`
- A4縦 `7頁`
- PDFium `7 / 7 PASS`
- Poppler `7 / 7 PASS`
- renderer parity `7 / 7 pixel-identical PASS`
- 空白頁・ページ端・置換文字 `0件`
- 一次試験型 `10 / 10`（全問五肢択一）
- 正答・完全解説 `10 / 10収録 PASS`
- 固定5問・30答案要素 `30 / 30 connected`
- 一次 `30 / 30 connected`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目 `9 / 9 PASS`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

固定境界:
- 色温度・LED寿命はR7固定過去問を解くための最小ブリッジに限定する。
- 光束発散度・輝度は測光量識別とR8/R3固定過去問対応に限定する。
- 多重反射式は簡略球形グローブ条件に限定する。
- 実車照明の方式・器具・灯数・定格・照度・消費電力・効率は一次資料なしに真値化しない。
- `lm/W` と照明率 `U` を混同しない。
- Topic 21 H26二次「機械・制御」問1(4)の丸め差を理由に一般式 `P=Tω`、`ω=2πN/60` を変更しない。

## 次工程

最新mainをreconcileした上で、Topic 32 PowerPointを生成し、16:9・全slide render・空白/置換文字/ページ端・固定5問30答案要素・SPEC固定9項目をQAする。固定EXAM_ALIGNMENT、練習問題、境界条件は変更しない。

## Topic 32 既完了canonical

- EXAM_ALIGNMENT: `topics/32_lighting_design/32_lighting_design.md`
- EXAM_ALIGNMENT QA: `topics/32_lighting_design/32_lighting_design_exam_alignment_qa.md`
- 解説source: `topics/32_lighting_design/32_lighting_design_explanation_source.md`
- 解説source QA: `topics/32_lighting_design/32_lighting_design_explanation_source_qa.md`
- 解説PDF: `topics/32_lighting_design/32_lighting_design_explanation.pdf`
- 解説PDF QA: `topics/32_lighting_design/32_lighting_design_explanation_pdf_qa.md`
- 練習source: `topics/32_lighting_design/32_lighting_design_practice_source.md`
- 練習source QA: `topics/32_lighting_design/32_lighting_design_practice_source_qa.md`
- 練習PDF: `topics/32_lighting_design/32_lighting_design_practice.pdf`
- 練習PDF QA: `topics/32_lighting_design/32_lighting_design_practice_pdf_qa.md`

## Topic 31

判定: `PASS / COMPLETED`。一次 `15 / 15`、二次 `12 / 12`、合計 `27 / 27 PASS`。詳細は `topics/31_auxiliary_power_converter/` 配下のcanonical QAを正本とする。
