# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_final_qa_blocked_powerpoint_artifact_identity`。active topic は Topic 23 `N700S SiC主変換装置`。Topic 24へは進めない。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23初回clean blind、source補強、3成果物再同期、修正後clean blind候補固定・公式照合、並行workerが作成した最終QAをreconcileした。

固定過去問・教材内容側は合格している。

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後clean blind候補固定commit: `5d28e38e9151edc9d2ca3e309783aea2e6b9272f`
- 修正後公式照合: `PASS / 23_OF_23`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

ただし最終QAでPowerPoint成果物識別情報の不整合を確認したため、並行workerの `PASS / COMPLETED` 判定は取り消し、`BLOCKED` にreconcileした。

## Topic 23 PowerPoint exact blocker

PowerPoint QA `23_n700s_sic_main_converter_powerpoint_qa.md` の記録:

- 判定: `PASS / POWERPOINT_RESYNC_COMPLETE`
- 16:9 `6 slides`
- file size: `12,944 bytes`
- SHA-256: `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
- LibreOffice / pdftoppm: `6 / 6 PASS`

現行GitHub本体 `23_n700s_sic_main_converter_images.pptx`:

- blob SHA: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- size: `12,326 bytes`

PowerPoint本体とQAの最新更新commitはいずれも `3d8608c3af48e9ea81e1534927fb8cdb09e065a5`。後続commitによる単純差替えとは確定できない。

exact blocker:

`Current GitHub PPTX is 12,326 bytes, while the authoritative PowerPoint QA records 12,944 bytes. Recompute the current PPTX byte size and SHA-256, rerun PPTX open/ZIP/render/display QA against that exact artifact, and reconcile the QA record before completion.`

サイズ記録の単純誤記とは推測しない。現行PPTXとQA済みPPTXの同一性を確認できるまでTopic 23は `completed` にしない。

## 成果物状態

- 解説PDF: `PASS / RESYNCED`
  - A4縦 `5 pages`
  - PDFium / Poppler `5 / 5 PASS`
  - 固定23答案要素 `23 / 23 covered`
- 練習PDF: `PASS / RESYNCED`
  - A4縦 `5 pages`
  - 一次8問＋二次4問 `12 / 12`
  - PDFium / pdftoppm `5 / 5 PASS`
  - 固定23答案要素 `23 / 23 covered`
- PowerPoint: `BLOCKED / ARTIFACT_IDENTITY_MISMATCH`
  - 内容QA記録自体は固定23答案要素 `23 / 23`、SPEC固定8項目 `8 / 8`、指定3可視化 `3 / 3`
  - ただし現行PPTXとの成果物同一性が未確定

## 実車値境界

維持事項:

- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替えない。
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張しない。
- N700S未公表の `V_on`, `R_on`, `E_on`, `E_off`, `f_s`, `T_j`, `R_th` を真値化しない。
- 比較計算値は教材用仮定値として扱う。

## 次の安全な工程

現行 `23_n700s_sic_main_converter_images.pptx` そのものに対して次だけを再実施する。

1. byte size / SHA-256再計算
2. python-pptx open / PPTX ZIP整合性
3. LibreOffice PDF変換
4. pdftoppm表示QA
5. 6枚の表示確認、geometry overflow確認
6. 結果を `23_n700s_sic_main_converter_powerpoint_qa.md` にreconcile

すべてPASSし現行PPTXの同一性を確定できた場合だけ最終QAを再実施し、Topic 23を `completed` にする。技術本文・固定EXAM_ALIGNMENT・問題・数式・SPECは変更しない。
