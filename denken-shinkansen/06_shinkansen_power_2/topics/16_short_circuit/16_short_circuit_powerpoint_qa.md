# Topic 16 PowerPoint exact-blob QA

更新日: 2026-09-20
status: `PASS / topic_16_powerpoint_exact_blob_qa_pass`

対象: `16_short_circuit_images.pptx`

## current exact artifact identity

- Git blob SHA: `4aee9bedf079ed9a44fe789562e2192fc00728f3`
- size: `38,384 bytes`
- SHA-256: `8a1c8035d9c9cf02e420f0f2ba1d7836df46123cf2a5715efe4eb7d28c9c7fa3`
- artifact identity: `PASS`

直近workerの再生成commit `b4f7c64a9831c98081406210dfab643925e8706d` で置換された現行artifactを対象とした。以後、このblobに変更がないことを current blob identity で確認した。

## exact-blob構造QA

- ZIP package integrity (`zipfile.testzip`): `PASS`
- `python-pptx`: `PASS / 6 slides`
- 必須learner-facing項目: `8 / 8 present`
  - 電磁誘導障害
  - 遮断容量
  - BTB
  - 電圧階級上昇
  - 故障前電圧の意味
  - `6.08 kA`
  - `10.3 kA`
  - `23/23`
- LibreOffice PDF変換: `PASS`
- converted PDF page count: `6 / 6`
- converted PDF text check: `PASS`

再生成workflow自身でもZIP integrity、python-pptx 6 slides、同じ必須語句、LibreOffice 6-page PDF変換をPASSしてからartifactをcommitしている。今回、current main上の同一Git blobへ再度exact-blob QAを実施した。

## 正式過去問対応品質ゲート

固定EXAM_ALIGNMENTは変更していない。

- 一次: `2問 / 10答案要素`
- 二次: `3問 / 13答案要素`
- 合計: `5問 / 23答案要素`
- 制作前blind: `23 / 23 PASS`
- 補正後完成後blind clean rerun: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- 固定EXAM_ALIGNMENT変更: `0件`

正式過去問対応品質ゲート: `PASS`。

## 品質境界

- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問本文・図転載追加: `0件`
- 仕様追加: `0件`

## 判定

`PASS / CURRENT_PPTX_EXACT_BLOB_QA_PASS`
