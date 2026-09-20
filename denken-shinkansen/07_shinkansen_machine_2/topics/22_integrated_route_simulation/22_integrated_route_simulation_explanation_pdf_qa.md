# Topic 22 解説PDF QA

更新日: 2026-09-20

対象: `22_integrated_route_simulation_explanation.pdf`

## 1. 仕様・試験対応
- authority: `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`
- 固定EXAM_ALIGNMENT: 一次4問＋二次2問、計6問・16答案要素を変更なし
- 固定答案要素: `16 / 16 COVERED`
- 基礎・本試験標準・複合例題: `3 / 3 INCLUDED`
- 系列SPEC指定グラフ: `6 / 6 INCLUDED`
- 固定過去問の個別正答記号・最終数値保存: `0件 / PASS`
- 未確認実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 独立過去問再解答: `NOT_RUN`（全成果物完成後）

## 2. 成果物
- 形式: A4縦 `2ページ`
- 主回路: 主変圧器、PWMコンバータ、DCリンク、VVVFインバータを収録
- 誘導機: 同期速度、滑り、等価回路、二次入力、トルク、軸出力を収録
- 走行系: 歯車比、車輪径、列車速度、駆動力、走行抵抗、加速度を収録
- 制御: PI/PID、閉ループ、偏差、定常偏差、インパルス・ステップ応答を収録
- 力行・回生の符号規約と消費・回生電力を収録
- 既存CSVと同条件の指定6グラフを収録

## 3. 表示・文字抽出QA
- `/home/oai/skills/pdfs/scripts/render_pdf.py` 200 dpi: `2 / 2 PASS`
- 目視確認: クリッピング `0`、重なり `0`、欠落グリフ `0`
- `pdftotext`: `PASS`
- Unicode replacement character: `0`
- `(cid:)` 残存: `0`
- 確認語: `R08`、`R07`、`R06`、`16答案要素`、`3301`、`1828`、`1149`、`e^(-t)`、`回生電力`、`PI` を抽出確認

## 4. 数値・論理QA
- 変圧器例: 負荷率0.8で規約効率 `98.81 %`、最大効率負荷率 `0.640` / PASS
- 誘導機例: 6極・100 Hz・1900 min^-1で同期速度 `2000 min^-1`、滑り `0.050`、500 kW軸出力のトルク `2513 N m` / PASS
- 制御例: `G=1/(s+1)`、`C=1+1/s` から閉ループ `1/(s+1)`、ステップ定常偏差0、`y(1)=0.632`、ランプ定常偏差1 / PASS
- シミュレーション: `3301`点、力行`1828`点、回生`1149`点、消費・回生同時正値`0`、速度負値`0` / PASS

## 5. GitHub正本識別
- file size: `7471 byte`
- SHA-256: `09e1065e4bad1ece114b6f7b0264d425595762022f7a585186b6af611763ddd6`
- Git blob SHA-1: `23abd21986b71fe2cdf4b799fbac5497e4652747`

## 6. 判定
`PASS / topic_22_explanation_pdf_complete / IN_PROGRESS`

次工程: Topic 22 練習source。
