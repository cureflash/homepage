# Topic 14 PowerPoint QA

更新日: 2026-09-19
status: `PASS / topic_14_powerpoint_rebuild_reqa_complete`

対象: `14_power_factor_voltage_control_images.pptx`

## 復旧

破損していたGitHub正本PowerPointを、既存の `14_power_factor_voltage_control_explanation.md`、固定EXAM_ALIGNMENT、系列 `SPEC.md` の範囲だけで再構成した。正式過去問、答案要素、教材技術範囲は追加・差替えしていない。

新正本:
- ファイルサイズ: `35351 bytes`
- Git blob: `74ef08c777c67cf30811d48230a6e143a2377a48`
- SHA-256: `bf643bbb5190cf8fe45a67f99696c345d1c66612f4494b0f49dba6a27b908a41`

## 構造・表示QA

- PPTX ZIP整合性: `PASS`
- 16:9: `PASS`
- スライド数: `4 / 4 PASS`
- 200 dpi相当レンダリング: `2667 x 1500`、`4 / 4 PASS`
- 目視: 文字切れ `0件`、重なり `0件`、図形はみ出し `0件`
- `slides_test.py`: `PASS / No overflow detected`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件`

## 固定4スライド

1. P-Q-S、力率、線路電流、線路損失、コンデンサ補償、力率―線路電流、力率―損失
2. 無効電力と受電点電圧、無効電力―受電点電圧、充電電流、フェランチ効果、分路リアクトル
3. `%X`換算、送受電端P-Q、指定電圧、調相設備判定、等価側→要求側電圧換算
4. 受電設備容量制約、`Qc,min`、不足側へ丸めない答案処理、P-Q容量円

## SPEC固定範囲

固定10項目:
- 有効電力
- 無効電力
- 皮相電力
- 力率
- 電圧制御
- 無効電力補償
- コンデンサ
- リアクトル
- 電圧変動
- P-Q関係

結果: `10 / 10 PASS`。

固定3可視化:
- 力率―線路電流: Slide 1
- 力率―損失: Slide 1
- 無効電力―受電点電圧: Slide 2

結果: `3 / 3 PASS`。数値は既存sourceの教材用仮定値のみを使用し、実設備値として扱っていない。

## 正式過去問品質ゲート接続

- 令和6年度 第二種一次「電力」問5: `5 / 5答案要素` — Slide 2
- 令和4年度 第二種一次「法規」問4: `5 / 5答案要素` — Slides 1, 2
- 令和5年度 第二種二次「電力・管理」問4: `2 / 2答案要素` — Slides 2, 3
- 令和2年度 第二種二次「電力・管理」問6: `4 / 4答案要素` — Slides 1, 4
- 平成23年度 第二種二次「電力・管理」問3: `5 / 5答案要素` — Slide 3

PowerPoint説明接続: `5 / 5問・21 / 21答案要素 PASS`。

平成23年度二次問3 (2a) の完成後blind blockerだった電圧側復元はSlide 3へ明示済み:

```text
Vs(eq, 66 kV side) = 66.258 kV
66.258 × 154/66 = 154.6 kV ≒ 155 kV
Vreq = Veq × Vbase,req / Vbase,eq
```

完成後blind独立再解答そのものは既存記録の一次 `10 / 10`、二次 `11 / 11`、合計 `21 / 21 PASS` を維持し、今回のPowerPoint復旧で正式問題・答案要素を変更していない。

## 品質境界

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 判定

`PASS / topic_14_powerpoint_rebuild_reqa_complete`

次工程は `qualifications/denken-shinkansen/catalog.json` へのTopic 14登録。登録・最終QA再判定まではTopic 14を `completed` にせず、Topic 15へ進めない。
