# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `14`
theme: 新幹線の力率と電圧をどう維持する？
current_status: `topic_14_powerpoint_canonical_corruption_confirmed`
completed_topics: `13 / 22`

## Completed through Topic 13

Topic 01〜13は `completed`。

直近完了:
- Topic 12「N700Sが何本も同時加速したら？」: `PASS / completed`、固定5問・25答案要素 `25 / 25 PASS`
- Topic 13「単相の新幹線負荷は三相系統を乱さない？」: `PASS / completed`、固定2問・8答案要素 `8 / 8 PASS`

## Topic 14 progress

Topic 14「新幹線の力率と電圧をどう維持する？」は、制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、各QA、修正版成果物に対する完成後blindまで実施済み。

完成後blind:
- R6一次「電力」問5: `5 / 5 PASS`
- R4一次「法規」問4: `5 / 5 PASS`
- R5二次「電力・管理」問4: `2 / 2 PASS`
- R2二次「電力・管理」問6: `4 / 4 PASS`
- H23二次「電力・管理」問3: `5 / 5 PASS`
- 一次: `10 / 10 PASS`
- 二次: `11 / 11 PASS`
- 合計: `5 / 5問・21 / 21答案要素 PASS`

固定EXAM_ALIGNMENT、固定5問・21答案要素、教材技術範囲は変更していない。

### 成果物・QA

解説:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation_pdf_qa.md`
- A4縦5ページ、200 dpi `5 / 5 PASS`
- 3段階例題 `3 / 3 PASS`
- SPEC固定3可視化 `3 / 3 PASS`
- 固定5問・21答案要素 `21 / 21 covered`

練習:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice_pdf_qa.md`
- 15問（一次型10＋二次型5）
- 200 dpi `7 / 7 PASS`
- 数値・論理 `15 / 15 PASS`
- 一次型正答一意性 `10 / 10 PASS`
- 固定5問・21答案要素 `21 / 21 covered`

PowerPoint:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_images.pptx`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_powerpoint_qa.md`
- 現行GitHub正本: `15002 bytes`
- Git blob: `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`
- SHA-256: `dcc0824a5db5acaafa467c9d2b6574fddc39d72a7e281b8bb5cfc33c95c213cf`
- GitHub Actions run `35392633009` で正本を直接再QA
- `unzip -t`: `FAIL`
- `missing 24279 bytes in zipfile`
- `start of central directory not found; zipfile corrupt`
- 旧QA対象 `39281 bytes` と現行正本の差も `24279 bytes`
- 判定: `FAIL / CURRENT_BINARY_CORRUPT`

従来のPowerPoint blockerは「QA指紋不一致」ではなく、現行GitHub正本PPTX自体の破損まで原因を確定した。旧QAの表示・構造PASSを現行バイナリへ流用しない。

最終QA:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_final_qa.md`
- 判定: `NEEDS_REVISION / IN_PROGRESS`

### 最終QA blocker（残り2件）

1. 破損した現行PowerPoint正本を、既存source・固定仕様の範囲だけで正常なPPTXへ復旧し、新しい正本blobを再QAする。
2. PowerPoint復旧・再QA PASS後、`qualifications/denken-shinkansen/catalog.json` にTopic 14を登録する。

### 品質境界

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [x] Topic 11 completed
- [x] Topic 12 completed
- [x] Topic 13 completed
- [ ] Topic 14 — final QA `NEEDS_REVISION`; PPTX破損＋Webカタログ未登録

## next_start

Topic 14のPowerPoint正本を、固定5問・21答案要素と教材技術範囲を変更せず復旧する。復旧後、新しいGitHub正本blobに対してZIP整合性、16:9・4スライド、200 dpi表示、overflow、PDF変換・文字抽出、SPEC固定10項目・3可視化、固定21答案要素、H23二次問3 (2a) の電圧側復元説明を再QAする。

PowerPoint QA PASS後にWebカタログ登録、最終QA再判定を行う。全件PASSまではTopic 14を `completed` にせず、Topic 15へ進めない。
