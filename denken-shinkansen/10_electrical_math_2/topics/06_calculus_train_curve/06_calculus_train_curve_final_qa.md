# Topic 06 最終QA記録

対象: `06 微積分で新幹線の運転曲線を解析する`

再判定日: 2026-09-15

## 判定

`PASS / completed`。

前回 `NEEDS_REVISION` の原因だったsource Markdownの旧進捗2箇所は実成果物へ同期済み。必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、表示QA、SPEC範囲境界、進捗記録整合を再確認し、全品質ゲートPASSと判定する。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS |
| 解説PDF | PASS |
| 練習問題source | PASS |
| 練習PDF | PASS |
| 解説画像PowerPoint | PASS |
| PowerPoint QA | PASS |
| 完成後独立再解答記録 | PASS |
| 最終QA記録 | PASS |

## EXAM_ALIGNMENT確認

固定品質ゲートは一次4問＋二次1問、計5問・15対象項目。

- R5 一次 理論 問6 (1)〜(5)
- R3 一次 理論 問6 (1)〜(5)
- H28 一次 理論 問4 (1)〜(3)
- H25 一次 機械 問3 (1)
- H23 二次 電力・管理 問5 (1)-[A]

source Markdownには要求知識・式・設問型・教材内必要説明が固定されている。二次試験の直接対応を1件含み、Topic 07以降や周辺論点を件数合わせで追加していない。

## 完成後独立再解答

完成教材だけを使った再解答は5問・15対象項目すべてPASS。

- 一次4問: `14 / 14 PASS`
- 二次1問: `1 / 1 PASS`
- 合計: `15 / 15 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

公式解答・標準解答と全件一致している。

## SPEC境界確認

固定範囲:

- `v=dx/dt`
- `a=dv/dt`
- `a=v dv/dx`
- `x=∫vdt`
- `t=∫dx/v(x)`
- `E=∫Fdx`
- 位置―時間、速度―時間、速度―位置、加速度
- 走行距離、所要時間、牽引仕事、回生エネルギー

Topic 07以降の常微分方程式一般論、ラプラス変換、伝達関数、半導体の移動度・電流、インバータ制御、ガバナ・周波数特性、未確認の実車運転曲線・実車回生効率は追加していない。

## 表示・成果物整合

- 解説PDF: A4縦2ページ、制作時200 dpi全2ページ表示QA PASS
- 練習PDF: A4縦6ページ、制作時200 dpi全6ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・5枚、全スライド表示QA、overflow、ZIP整合性PASS
- 練習問題: 一次型8問＋二次記述4問、独立計算QA `12 / 12 PASS`

## 前回FAILの再確認

前回FAILだったsource Markdown進捗記録不整合は解消済み。

- `## 状態`: 解説PDF、練習source/PDF、PowerPoint QA、完成後独立再解答、最終QAまで完了済みの状態へ同期済み
- `## 次工程`: 最終QA再判定へ同期済み
- 教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・PDF・PowerPointの技術内容は変更していない

## 最終判定

- 必須成果物実在: PASS
- 二種相当EXAM_ALIGNMENT 5問・15対象項目: PASS
- 二次試験対応: PASS
- 完成後独立再解答 `15 / 15`: PASS
- 教材外知識補完0件: PASS
- SPEC外内容の非混入: PASS
- 表示QA: PASS
- source Markdown進捗記録と実成果物の整合: PASS

総合判定: `PASS / completed`。

Topic 06を完了とし、次はTopic 07 `一階常微分方程式` の制作前EXAM_ALIGNMENTへ進む。
