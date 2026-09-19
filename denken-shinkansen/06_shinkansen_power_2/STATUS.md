# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_powerpoint_exact_blob_qa_fail`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、learner-facing補正、補正後完成後blind clean rerun、Webカタログ登録まで実施済み。

補正後完成後blind clean rerun:
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- learner-facing根拠説明: `23 / 23 PASS`

Webカタログ:
- id: `16_short_circuit`
- seriesId: `06_shinkansen_power_2`
- topicNo: `16`
- 登録済み `PASS`

## 正式品質ゲート

固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・23答案要素。変更なし。

- 制作前blind: `23 / 23 PASS`
- 補正後完成後blind clean rerun: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- 固定EXAM_ALIGNMENT変更: `0件`

正式過去問対応品質ゲート自体は `PASS`。

## current artifact QA

### 解説PDF

右端切れをレイアウトだけで修正し、再生成した現行exact blobを独立再QA済み。

- blob: `626d9098ccf7453f2439b1ffc3df50c3bbdd3b5b`
- size: `34,238 bytes`
- SHA-256: `0d305c1240f57a3efe7a279130f18821bb204a561de46429df596a1ae64c79fb`
- pages: `7`
- PDFium: `7 / 7 render completed`
- Poppler: `7 / 7 render completed`
- text extraction: `PASS / U+FFFD 0件`
- 補正5項目: `5 / 5 present`
- learner-facing display: `PASS / right-edge overflow 0件`
- `250 MVA`: 欠落なく表示

QA記録:
- `topics/16_short_circuit/16_short_circuit_explanation_pdf_qa.md`

### 練習PDF

- current / recorded QA: blob `626a7015e60d7c968128277e5ff18e9039df74fc`, `17,526 bytes`
- identity: `PASS`

### PowerPoint

現行exact blobを再QAした。

- blob: `a4817d7cfb1a1733f5147f52efa3ec4e249999d5`
- size: `26,007 bytes`
- SHA-256: `e9c723e66a95ce4cf71de6f32155ed835bdce345bdd9c158e9d8af5eb927406a`
- local/GitHub artifact identity: `PASS`
- ZIP package integrity: `FAIL`
- `slide1.xml`: `invalid compressed data to inflate`
- `python-pptx`: `FAIL / BadZipFile`
- `slides_test.py`: `FAIL / BadZipFile`
- `render_slides.py`: `FAIL / BadZipFile`
- LibreOffice: `source file could not be loaded`
- current-artifact display QA: `NOT EXECUTABLE`

既存PowerPoint QAは `25,986 bytes` の別artifactを対象としており転用不可。QA記録:
- `topics/16_short_circuit/16_short_circuit_powerpoint_qa.md`
- 判定: `FAIL / CURRENT_PPTX_EXACT_BLOB_PACKAGE_CORRUPT`

## 進捗記録整合

主source `topics/16_short_circuit/16_short_circuit.md` の状態欄は `topic_16_preproduction_blind_complete` のままで現状と不一致。

進捗記録整合: `FAIL`。PowerPoint artifact gate解消後の主source同期工程で修正する。

## 固定範囲・品質境界

- 短絡容量
- ％インピーダンス
- 単位法
- 正相・逆相・零相インピーダンス
- 三相短絡
- 一線地絡
- 線間短絡
- 二線地絡
- 対称座標法
- 故障種別―短絡電流
- 故障位置を変えた短絡電流の可視化

境界:
- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載追加: `0件`
- 仕様追加: `0件`

## exact blocker

`The current PowerPoint exact blob a4817d7cfb1a1733f5147f52efa3ec4e249999d5 is byte-identical to the GitHub canonical artifact but fails OOXML/ZIP package integrity and cannot be opened by python-pptx, slides_test, render_slides, or LibreOffice. Regenerate/replace the PPTX from the already-fixed source/content without changing scope or EXAM_ALIGNMENT, then rerun exact-blob PowerPoint QA. Do not byte-patch the corrupt package. After a PowerPoint PASS, synchronize the stale 16_short_circuit.md progress state and run final QA.`

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 固定5問・23答案要素 `23 / 23 PASS` / Webカタログ登録済み / 解説PDF current-artifact QA `PASS` / PowerPoint current-artifact QA `FAIL`

Topic 16は `completed` にしない。完成数は `15 / 22`。Topic 17へ進まない。

## next_start

固定EXAM_ALIGNMENT、固定5問・23答案要素、補正済みsource/PDF、練習PDF、clean blind結果、Webカタログを変更せず、既存sourceから `16_short_circuit_images.pptx` を正常なPPTXとして再生成・置換する。その新しいexact blobに対してPowerPoint QAを再実施する。破損bytesの直接パッチはしない。
