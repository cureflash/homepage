# Topic 37 ATC③ 速度制御系 — 練習PDF QA

date: 2026-09-21
判定: PASS / PRACTICE_PDF_COMPLETE

## canonical

- source: `37_atc_speed_control_system_practice_source.md`
- source commit: `7359874c3d74128ccea71d6cd2b8fa63460f64de`
- source QA: `37_atc_speed_control_system_practice_source_qa.md`
- source QA commit: `a9db0039f49375a1155809d22128444c20ed22ba`
- PDF: `37_atc_speed_control_system_practice.pdf`
- PDF commit: `b27f2fdc6d6fa78dc03aa5641ddbb14aebd5679c`
- PDF blob SHA: `9605d04a84a1d9b0c44104ec1ae13c6919c275b4`
- SHA-256: `2b7df3337f220982f62a5a8758a9d1c9acc626c636f1f9edad7f0e5a08bf962f`
- bytes: `11691`

## reconcile

- 最新main、当該系列 `STATUS.md` / `HANDOFF.md`、直近コミット、既存の車両二種worker成果をreconcileした。
- Topic 37 practice source / source QA は既存成果として採用し、重複生成していない。
- reconcile時点でTopic 37 handoff以後のmain更新は色彩教材系のみで、車両二種の競合更新はなかった。

## PDF QA

- A4 portrait: PASS
- pages: `6`
- encrypted: `no`
- Ghostscript nullpage: PASS
- PDFium render: `6 / 6 PASS`
- Poppler render: `6 / 6 PASS`
- visual inspection: `6 / 6 PASS`
- extracted text chars: `4124`
- U+FFFD: `0`
- clipping / overlap / broken glyph: `0`

## content gate

- 一次試験型五肢択一: `12 / 12`
- 一次の正答＋解説: `12 / 12`
- source QAの正答一意性: `12 / 12` 継承
- 二次試験型記述: `4 / 4`
- 二次の完全解説: `4 / 4`
- source QAの二次独立再計算答案要素: `20 / 20` 継承
- 固定過去問: `5 / 5`
- 固定答案要素: `25 / 25`
- SPEC固定8項目: `8 / 8`
- 系列SPEC計算・グラフ: `2 / 2`
- 未確認の実ATC内部数値・構成の断定: `0`
- ATS-Dxを新幹線ATC実装として扱う記述: `0`
- Topic 38先取り: `0`
- Topic 21一般式変更: `0`
- exact blocker: `0`

## Topic 21 過去問固有注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として扱う。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## next safe step

Topic 37 のPowerPoint作成＋render QA。完了後にfresh clean blind独立再解答へ進む。
