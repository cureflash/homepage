# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

現在地は `topic_23_completed`。次のactive topic は Topic 24 `N700S 主電動機設計の比較`。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23の初回clean blind、source補強、解説PDF・練習PDF再同期、修正後clean blind `23 / 23 PASS`、PowerPoint破損blocker、復旧artifactとその表示QAまでreconcileした。同一工程の重複はしていない。

Topic 23最終ゲート:

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 解説PDF: `PASS`
- 練習PDF: `PASS`
- PowerPoint: `PASS`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 23 PowerPoint復旧・最終QA

旧破損blob `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` は現行成果物ではない。復旧後の現行artifactは次。

- file: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_images.pptx`
- Git blob SHA: `4ac7e4c493e8c24e8ea98d40db2494a7218f14b2`
- byte size: `8,587 bytes`
- SHA-256: `b7c1e6af945c9e1c36e01175db365a8c4f119800e0ae655894fdae2ee0b02062`
- 16:9 / `6 slides`
- ZIP整合性: `PASS`
- python-pptx: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- pdftoppm/contact sheet: `6 / 6 PASS`
- geometry overflow: `0`
- 文字切れ・重なり・欠落グリフ: `0`

最終QA `23_n700s_sic_main_converter_final_qa.md` は `PASS / COMPLETED`。Topic 23をcompletedへ移行した。

## 実車値境界

維持事項:

- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替えない。
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張しない。
- N700S未公表の `V_on`, `R_on`, `E_on`, `E_off`, `f_s`, `T_j`, `R_th` を真値化しない。
- 比較計算値は教材用仮定値として扱う。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当を使った過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 24「N700S 主電動機設計の比較」の制作前EXAM_ALIGNMENTを実施する。系列SPEC固定範囲は極数、同期速度、すべり、周波数、回転速度、トルク、電気角、小型軽量化、および指定3計算・グラフ。まず第二種一次・二次の公式過去問を直近年度から確認し、固定問題・答案要素・教材責務を確定する。確定不能事項は推測せずexact blockerとして記録する。
