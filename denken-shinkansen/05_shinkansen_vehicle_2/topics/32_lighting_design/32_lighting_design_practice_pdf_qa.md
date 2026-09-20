# Topic 32 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 32のcanonical練習source＋source QAをreconcileした。Topic 32は練習source＋source QAまで完了していたため、固定EXAM_ALIGNMENTや問題内容を変更せず、canonical練習sourceから練習PDF生成＋PDF QAのみ実施した。

## canonical PDF

- path: `32_lighting_design_practice.pdf`
- canonical blob SHA: `5945167a2d4fb9d63bd6d8b8c50a813fd03cd156`
- source blob SHA: `ad3f1fabdb4e54da9196f0c8ff717c6c055b4c8f`
- file size: `19677 bytes`
- SHA-256: `2df1b10ca50e519848709f4d7ab50cb67aa2c49ef08f8d00db47d26837bd7748`
- A4縦: `7 pages`

## render / text QA

- PDFium render: `7 / 7 PASS`
- Poppler render: `7 / 7 PASS`
- renderer parity: `7 / 7 pixel-identical PASS`
- page-edge overflow: `0件`
- blank page: `0件`
- `pdftotext -layout`: `PASS (11685 bytes)`
- 置換文字 `�`: `0件`
- 問1〜問10: `10 / 10収録 PASS`
- 正答・完全解説: `10 / 10収録 PASS`

## 過去問対応品質ゲート

- 固定5問・30答案要素: `30 / 30 connected`
- 一次: `30 / 30 connected`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目: `9 / 9 covered`
- 一次試験型: `10 / 10`（全問五肢択一）
- 一次正答一意性: `10 / 10 PASS` を維持
- source QA済み数値問題独立再計算: `7 / 7 PASS` をPDF転記確認
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

固定境界はsource QAのまま維持した。色温度・LED寿命はR7固定過去問の最小ブリッジ、光束発散度・輝度は測光量識別とR8/R3固定過去問対応、多重反射式は簡略球形グローブ条件に限定している。`lm/W` と照明率 `U` を混同していない。

本判定は練習PDF工程のPASSであり、Topic 32最終完了を意味しない。次工程はTopic 32 PowerPoint生成＋render QA。
