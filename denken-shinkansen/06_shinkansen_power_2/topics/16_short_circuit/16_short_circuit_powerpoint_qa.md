# Topic 16 PowerPoint exact-blob QA

更新日: 2026-09-19
status: `FAIL / topic_16_powerpoint_exact_blob_qa_fail`

対象: `16_short_circuit_images.pptx`

## current exact artifact identity

GitHub正本の現行artifactを対象に再QAした。

- blob: `a4817d7cfb1a1733f5147f52efa3ec4e249999d5`
- size: `26,007 bytes`
- SHA-256: `e9c723e66a95ce4cf71de6f32155ed835bdce345bdd9c158e9d8af5eb927406a`
- ローカル再取得物のGit blob SHA-1: `a4817d7cfb1a1733f5147f52efa3ec4e249999d5`
- artifact identity: `PASS`

既存QAが対象としていたartifactは `25,986 bytes` / SHA-256 `4b33e9e0333e86a8803e5b331cf22c2c1bf5a0718fad6171f0d08f269b84bf32` であり、現行artifactとはidentity不一致。既存PASSは転用しない。

## exact-blob構造QA

- `unzip -t`: `FAIL`
  - `21 extra bytes at beginning or within zipfile`
  - `ppt/slides/slide1.xml`: `invalid compressed data to inflate`
  - local-header offset不整合を検出
- `python-pptx`: `FAIL / BadZipFile: Bad magic number for file header`
- `slides_test.py`: `FAIL / BadZipFile`
- `render_slides.py`: `FAIL / BadZipFile`
- LibreOffice PDF変換: `FAIL / source file could not be loaded`
- PDF出力: `0件`
- current-artifact表示QA: `NOT EXECUTABLE`

現行PPTXはOOXML/ZIPパッケージとして正常に開けないため、文字切れ・重なり・6スライド表示・補正5項目・過去問接続のcurrent-artifact再確認まで進めない。

## 正式過去問対応品質ゲート

固定EXAM_ALIGNMENTは変更しない。

- 一次: `2問 / 10答案要素`
- 二次: `3問 / 13答案要素`
- 合計: `5問 / 23答案要素`
- 制作前blind: `23 / 23 PASS`
- 補正後完成後blind clean rerun: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- 固定EXAM_ALIGNMENT変更: `0件`

正式過去問対応品質ゲート自体は `PASS` のまま。ただし現行PowerPoint artifact gateは `FAIL` のためTopic 16は未完了とする。

## 品質境界

- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問本文・図転載追加: `0件`
- 仕様追加: `0件`

## 判定

`FAIL / CURRENT_PPTX_EXACT_BLOB_PACKAGE_CORRUPT`

次工程は、固定EXAM_ALIGNMENT、固定5問・23答案要素、補正済みlearner-facing内容を変更せず、既存sourceから `16_short_circuit_images.pptx` を正常なPPTXとして再生成・置換し、その新しいexact blobに対してPowerPoint QAを再実施する。破損bytesの直接パッチは行わない。Topic 16を `completed` にせず、Topic 17へ進まない。
