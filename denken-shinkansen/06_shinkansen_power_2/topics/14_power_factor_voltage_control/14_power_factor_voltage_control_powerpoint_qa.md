# Topic 14 PowerPoint QA

更新日: 2026-09-19
status: `FAIL / CURRENT_BINARY_CORRUPT`

対象: `14_power_factor_voltage_control_images.pptx`

## 現行GitHub正本の再QA

現行mainをGitHub Actions上でcheckoutし、GitHub正本そのものに対して再QAを開始した。表示QAへ進む前のZIP整合性検査でFAILしたため、現行PowerPointは有効なPPTXとして扱えない。

現行正本:
- ファイルサイズ: `15002 bytes`
- Git blob: `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`
- SHA-256: `dcc0824a5db5acaafa467c9d2b6574fddc39d72a7e281b8bb5cfc33c95c213cf`

再QA証跡:
- GitHub Actions run: `35392633009`
- checkout commit: `74b7a98deed2e9416266b4ee3b1d9cde4a8c85a4`
- `git hash-object`: `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8` — GitHub正本blobと一致
- `unzip -t`: `FAIL`
- エラー: `missing 24279 bytes in zipfile`
- エラー: `start of central directory not found; zipfile corrupt`
- exit code: `51`

旧QA対象は `39281 bytes`。現行 `15002 bytes` との差 `24279 bytes` が `unzip` の欠損報告値と一致する。従って、従来の「QA指紋不一致」blockerは、現行GitHub正本PPTX自体の破損として原因を確定した。

ZIP整合性で停止したため、現行バイナリについて以下は未判定のままとする。
- 16:9・4スライド構成
- 200 dpi全スライド表示
- 文字切れ・重なり・overflow
- LibreOffice PDF変換・文字抽出
- SPEC固定10項目・3可視化
- 固定5問・21答案要素へのPowerPoint説明接続
- H23二次問3 (2a) `66.258 × 154/66 = 154.6 kV ≒ 155 kV` の収録

旧 `39281 bytes` PPTXに対する過去のPASS結果は現行正本へ流用しない。

## 過去問品質ゲートへの影響

PowerPoint以外の修正版learner-facing成果物に対する完成後blind独立再解答は既に一次 `10 / 10`、二次 `11 / 11`、合計 `21 / 21 PASS`。固定EXAM_ALIGNMENT、固定5問・21答案要素、教材技術範囲は変更していない。

今回の変更:
- 正式問題追加・差替え: `0件`
- 答案要素変更: `0件`
- Topic 15以降の先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 判定

`FAIL / CURRENT_BINARY_CORRUPT`

次工程は、既存source・固定仕様だけを使ってPowerPoint正本を正常なPPTXへ復旧し、その新しいGitHub正本blobに対してZIP・構造・表示・PDF変換・文字抽出・固定10項目・3可視化・21答案要素を再QAする。PASSまではWebカタログ登録とTopic 14完了判定へ進めない。
