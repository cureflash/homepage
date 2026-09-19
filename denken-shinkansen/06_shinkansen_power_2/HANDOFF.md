# HANDOFF

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
current_status: `topic_16_powerpoint_exact_blob_qa_fail`

## 今回実施

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、STATUS/HANDOFF、Topic 16の現行成果物を再確認した。

次工程として指定されていた現行 `16_short_circuit_images.pptx` のexact-blob PowerPoint QAを実施した。GitHub正本blobとローカル再取得物のidentityは一致したが、PPTXパッケージ自体の破損を検出したため `FAIL` とした。

QA記録:
- `topics/16_short_circuit/16_short_circuit_powerpoint_qa.md`
- 判定: `FAIL / CURRENT_PPTX_EXACT_BLOB_PACKAGE_CORRUPT`

固定5問・23答案要素、Topic 16固定範囲、補正済み5項目、後続Topic境界は変更していない。

## 正式品質ゲート維持

- 一次: `2問 / 10答案要素`
- 二次: `3問 / 13答案要素`
- 合計: `5問 / 23答案要素`
- 制作前blind: `23 / 23 PASS`
- 補正後完成後blind clean rerun: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- learner-facing根拠説明: `23 / 23 PASS`
- Webカタログ登録: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

正式過去問対応品質ゲート自体は `PASS`。

## PowerPoint exact-blob QA

現行artifact:
- blob: `a4817d7cfb1a1733f5147f52efa3ec4e249999d5`
- size: `26,007 bytes`
- SHA-256: `e9c723e66a95ce4cf71de6f32155ed835bdce345bdd9c158e9d8af5eb927406a`
- local/GitHub artifact identity: `PASS`

検査:
- `unzip -t`: `FAIL`
  - `21 extra bytes at beginning or within zipfile`
  - `ppt/slides/slide1.xml`: `invalid compressed data to inflate`
  - local-header offset不整合
- `python-pptx`: `FAIL / BadZipFile`
- `slides_test.py`: `FAIL / BadZipFile`
- `render_slides.py`: `FAIL / BadZipFile`
- LibreOffice PDF変換: `FAIL / source file could not be loaded`
- current-artifact表示QA: `NOT EXECUTABLE`

既存PowerPoint QAの対象は `25,986 bytes` / SHA-256 `4b33e9e0333e86a8803e5b331cf22c2c1bf5a0718fad6171f0d08f269b84bf32` であり、現行artifactとはidentity不一致。旧PASSは転用していない。

## 他artifactの現在地

- 解説PDF: current exact-blob QA `PASS`
- 練習PDF: current / existing QA identity `PASS`
- PowerPoint: current exact-blob QA `FAIL`

## 進捗記録不整合

主source `topics/16_short_circuit/16_short_circuit.md` は状態 `topic_16_preproduction_blind_complete` のままで現状と不一致。主source同期はPowerPoint artifact gate解消後に行う。

## exact blocker

`The current PowerPoint canonical blob is structurally corrupt even though the retrieved bytes exactly match GitHub. Regenerate/replace 16_short_circuit_images.pptx from the existing fixed learner-facing source/content without changing EXAM_ALIGNMENT, the fixed 5 questions / 23 answer elements, or Topic 16 scope; then rerun exact-blob PowerPoint QA. Do not byte-patch the corrupt package. Only after that PASS should the stale 16_short_circuit.md progress state be synchronized and final QA run.`

## 品質境界

- Topic 01〜15: `completed`
- Topic 16: `IN_PROGRESS`
- 完成数: `15 / 22`
- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 仕様追加: `0件`

## 次に行う

固定EXAM_ALIGNMENT、固定5問・23答案要素、補正済みsource/PDF、練習PDF、clean blind結果、Webカタログを変更せず、既存sourceから `16_short_circuit_images.pptx` を正常なPPTXとして再生成・置換する。その新しいexact blobに対してPowerPoint QAを再実施する。

まだ行わない:
- 破損PPTX bytesの直接パッチ
- 固定EXAM_ALIGNMENT変更
- Topic 16 `completed` 化
- Topic 17以降
