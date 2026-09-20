# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `31 / 39`
- current_status: `topic_32_practice_pdf_complete`
- last_completed_topic: `31 補助電源変換器`
- active_topic: `32 照明設計`
- next_start: 最新main、上位仕様、系列SPEC、STATUS/HANDOFF、Topic 32既存成果物をreconcileし、Topic 32 PowerPointを生成してrender QAする

Topic 01〜31は `PASS / completed`。完成数 `31 / 39`。Topic 32は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QAまで `PASS`。固定公式過去問は一次5問・30答案要素、SPEC固定9項目は `9 / 9 connected`。二次は公式「機械・制御」試験範囲に照明が含まれないため対象外。

## Topic 32 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design_practice.pdf`
- `topics/32_lighting_design/32_lighting_design_practice_pdf_qa.md`

QA:
- PDF blob SHA: `5945167a2d4fb9d63bd6d8b8c50a813fd03cd156`
- source blob SHA: `ad3f1fabdb4e54da9196f0c8ff717c6c055b4c8f`
- A4縦: `7頁`
- PDFium: `7 / 7 PASS`
- Poppler: `7 / 7 PASS`
- renderer parity: `7 / 7 pixel-identical PASS`
- 空白頁・ページ端・置換文字: `0件`
- 一次試験型: `10 / 10`（全問五肢択一）
- 正答・完全解説: `10 / 10収録 PASS`
- 固定5問・30答案要素: `30 / 30 connected`
- 一次: `30 / 30 connected`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目: `9 / 9 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程はTopic 32 PowerPoint生成＋render QA。

## Topic 32 既完了工程

- EXAM_ALIGNMENT: `PASS` — `topics/32_lighting_design/32_lighting_design.md`
- EXAM_ALIGNMENT QA: `PASS` — `topics/32_lighting_design/32_lighting_design_exam_alignment_qa.md`
- 解説source＋source QA: `PASS`
- 解説PDF＋PDF QA: `PASS`（A4縦7頁、PDFium/Poppler `7 / 7 PASS`）
- 練習source＋source QA: `PASS`（一次10問、正答一意性 `10 / 10`、数値問題 `7 / 7 PASS`）

固定境界:
- 色温度・LED寿命はR7固定過去問を解くための最小ブリッジに限定する。
- 光束発散度・輝度は測光量識別とR8/R3固定過去問対応に限定する。
- 多重反射式は固定過去問の簡略球形グローブ条件に限定する。
- 実車照明値を一次資料なしに真値化しない。
- `lm/W` と照明率 `U` を混同しない。
- Topic 21の一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## Topic 31

判定: `PASS / COMPLETED`

Topic 31のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind最終照合は各topic配下のcanonical QAを正本とする。完成後独立再解答は一次 `15 / 15`、二次 `12 / 12`、合計 `27 / 27 PASS`。
