# HANDOFF

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `14`
current_status: `topic_14_powerpoint_canonical_corruption_confirmed`

## 今回完了

Topic 14の最初の未解消blockerである現行PowerPoint正本を、GitHub Actions上で直接再QAした。

結果:
- 現行正本: `15002 bytes`
- Git blob: `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`
- SHA-256: `dcc0824a5db5acaafa467c9d2b6574fddc39d72a7e281b8bb5cfc33c95c213cf`
- QA run: `35392633009`
- `git hash-object` は上記Git blobと一致
- `unzip -t`: `FAIL`
- `missing 24279 bytes in zipfile`
- `start of central directory not found; zipfile corrupt`
- exit code `51`

旧QA対象 `39281 bytes` と現行正本 `15002 bytes` の差も `24279 bytes`。従来の「QA指紋不一致」から、現行GitHub正本PPTX自体の破損まで原因を確定した。

一時QA workflowは検証後に削除済み。恒久的な仕様・成果物構成は追加していない。

更新:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_powerpoint_qa.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_final_qa.md`
- `STATUS.md`
- `HANDOFF.md`

## 品質ゲート維持

- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、`5問・21答案要素`
- 完成後blind: 一次 `10 / 10`、二次 `11 / 11`、合計 `21 / 21 PASS`
- 解説PDF: A4縦5ページ、表示 `5 / 5 PASS`、3段階例題 `3 / 3`
- 練習: 15問、一次型10＋二次型5、数値・論理 `15 / 15 PASS`
- 練習PDF: `7 / 7 PASS`
- SPEC境界: PASS
- 固定問題・答案要素変更: `0件`
- 仕様追加: `0件`

## 未完了blocker（残り2件）

1. 破損した `14_power_factor_voltage_control_images.pptx` を既存source・固定仕様だけで正常なPPTXへ復旧し、新しいGitHub正本blobに対して再QAする。
2. PowerPoint QA PASS後、`qualifications/denken-shinkansen/catalog.json` にTopic 14を登録する。

## 現在地

Topic 01〜13: `completed`。
完成数: `13 / 22`。
Topic 14: `NEEDS_REVISION / IN_PROGRESS`。

## 次に行う

PowerPoint正本を復旧する。固定4スライド構成・既存source・既存PowerPoint QA記録の範囲を超えて内容を追加しない。

復旧後の必須再QA:
- ZIP整合性
- 16:9・4スライド
- 200 dpi全スライド表示
- 文字切れ・重なり・overflow
- LibreOffice PDF変換・文字抽出
- SPEC固定10項目 `10 / 10`
- SPEC固定3可視化 `3 / 3`
- 固定5問・21答案要素への説明接続
- H23二次問3 (2a) `66.258 × 154/66 = 154.6 kV ≒ 155 kV`

全件PASSまではWebカタログ登録・Topic 14完了・Topic 15着手へ進めない。

## 品質境界

- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`
