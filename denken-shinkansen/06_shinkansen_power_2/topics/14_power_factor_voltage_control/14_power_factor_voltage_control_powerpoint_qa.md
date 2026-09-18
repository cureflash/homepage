# Topic 14 PowerPoint QA

更新日: 2026-09-19
status: `PASS`

対象: `14_power_factor_voltage_control_images.pptx`

## 今回の補強

完成後blind `20 / 21 PASS` の唯一のblockerだった平成23年度 第二種二次「電力・管理」問3 (2a) の最終答案処理を、Slide 3へ同期した。

- 66 kV側へ換算した等価回路の計算値: `Vs(eq)=66.258 kV`
- 問題が要求する154 kV一次母線側へ戻す: `66.258 × 154/66 = 154.6 kV ≒ 155 kV`
- 一般式: `Vreq = Veq × Vbase,req / Vbase,eq`
- 電圧比を逆にしないこと、同じ種類の電圧基準同士で比を取ることを明示

固定EXAM_ALIGNMENT、問題、答案要素、教材範囲は変更していない。

## 構成

- 16:9
- 4スライド
- Slide 1: P-Q-S、力率、線路電流、線路損失、コンデンサ補償
- Slide 2: 無効電力と受電点電圧、フェランチ効果、分路リアクトル
- Slide 3: `%X`換算、電圧・無効電力逆算、調相設備判定、等価側→要求側電圧換算
- Slide 4: 受電設備容量制約、`Qc,min`、不足側へ丸めない最終答案処理

## SPEC固定項目

- 有効電力: Slides 1, 3, 4
- 無効電力: Slides 1–4
- 皮相電力: Slides 1, 4
- 力率: Slides 1, 4
- 電圧制御: Slides 2, 3
- 無効電力補償: Slides 1–4
- コンデンサ: Slides 1–4
- リアクトル: Slides 2, 3
- 電圧変動: Slides 2, 3
- P-Q関係: Slides 1, 2, 4

SPEC固定10項目: `10 / 10 PASS`。

## SPEC固定3可視化

- 力率―線路電流: Slide 1
- 力率―損失: Slide 1
- 無効電力―受電点電圧: Slide 2

固定3可視化: `3 / 3 PASS`。すべて解説sourceの教材用仮定値を使用し、実設備値として扱っていない。

## 正式過去問品質ゲート接続

- 令和6年度 第二種一次「電力」問5: `5答案要素`
- 令和4年度 第二種一次「法規」問4: `5答案要素`
- 令和5年度 第二種二次「電力・管理」問4: `2答案要素`
- 令和2年度 第二種二次「電力・管理」問6: `4答案要素`
- 平成23年度 第二種二次「電力・管理」問3: `5答案要素`
- 合計: 一次2問＋二次3問、`5問・21答案要素`

PowerPoint説明カバレッジ: `21 / 21`。これは完成後blindの再判定ではない。

## QA

- 200 dpi全スライド表示確認: `4 / 4 PASS`
- 文字切れ・重なり・ページ外逸脱: `0件`
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS / No errors detected`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件`
- 補強値抽出: `66.258 / 154.6 / 155 / Vreq / 154 / 66` — PASS
- ファイルサイズ: `39281 bytes`
- SHA-256: `3e8088524754227fbfddf027784cf2c5961fba01646b7ded626932eb70748047`

## 範囲境界

- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

判定: `PASS / topic_14_powerpoint_remediation_complete`

Topic 14全体は完成後blind再実施前のため `NEEDS_REVISION` のままとする。
