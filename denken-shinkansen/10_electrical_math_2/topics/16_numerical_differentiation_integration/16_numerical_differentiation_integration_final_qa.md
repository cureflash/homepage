# Topic 16 最終QA記録

対象: `16 数値微分・数値積分`

実施日: 2026-09-18

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

技術内容、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、PDF/PowerPoint表示QA、SPEC境界はPASS。未完了理由は、実成果物より古い進捗記録が6ファイルに残っていることだけである。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS |
| 解説PDF | PASS |
| 解説PDF QA | PASS |
| 練習問題source | PASS |
| 練習PDF | PASS |
| 練習PDF QA | PASS |
| 解説画像PowerPoint | PASS |
| PowerPoint QA | PASS |
| 完成後独立再解答ロック | PASS |
| 完成後独立再解答記録 | PASS |
| 最終QA記録 | PASS |

## EXAM_ALIGNMENT確認

固定品質ゲートは第二種公式過去問4問・8答案要素。

- R6 一次「法規」問4 (1)〜(2)
- R4 二次「電力・管理」問1のピーク／オフピーク出力2値
- H23 二次「電力・管理」問6 (1)a、(1)b、(2)
- H22 二次「電力・管理」問3 (4)
- 制作前独立再解答・公式解答照合: `8 / 8 PASS`
- 解説本文へのマッピング: `8 / 8 PASS`
- 練習問題への接続: `8 / 8 PASS`
- 第一種・第三種による件数水増し: 0件

本Topicで台形則・Simpson則等の算法名を直接問う第二種公式問題を確認できなかったため、件数合わせで解析積分だけの問題・他資格問題を追加していない。

## 完成後独立再解答

公式解答・保存済み正答を確認する前に候補答案を固定し、その後に公式解答と照合している。

- lock commit: `4688e138f4d32329e0db432740e8f0cd44ee34a6`
- 固定4問・8答案要素: `8 / 8 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

## 表示・成果物QA

- 解説PDF: A4縦3ページ、200 dpi全3ページ表示QA `3 / 3 PASS`、文字抽出QA `PASS`
- 3段階例題: `3 / 3 PASS`
- 練習問題: 全12問（一次型8問／記述型4問）、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`
- 練習PDF: A4縦4ページ、200 dpi全4ページ表示QA `4 / 4 PASS`、文字抽出QA `PASS`、全12問＋完全解説反映PASS
- PowerPoint: 16:9・5枚、固定8答案要素への可視化接続 `8 / 8 PASS`、全5スライド表示QA `5 / 5 PASS`、overflow 0件、`slides_test.py` PASS、PPTX ZIP/XML整合性 PASS

## SPEC境界確認

固定範囲:

- 差分
- 数値微分
- 台形則
- Simpson則の基本
- 誤差
- 刻み幅
- 速度データから加速度を求める例
- 電力データから電力量を求める例

境界確認:

- Topic 17のEuler法・Runge-Kutta法先取り: 0件
- Topic 18の二分法・Newton法先取り: 0件
- Topic 19の最適化先取り: 0件
- 高次数値微分公式・高次Newton-Cotes公式の体系的追加: 0件
- スプライン補間・有限要素法等の別算法追加: 0件
- 第一種・第三種過去問による件数水増し: 0件
- 未確認実車値依存: 0件

## 進捗記録整合QA

次の6ファイルが実成果物より古い工程を指しているためFAIL。

1. `16_numerical_differentiation_integration.md`
   - 冒頭 `## 状態`: `topic_16_practice_source_complete / IN_PROGRESS` のまま
   - `## 次工程`: 練習PDF作成のまま
2. `16_numerical_differentiation_integration_explanation_qa.md`
   - 次工程: 練習問題source作成のまま
3. `16_numerical_differentiation_integration_practice.md`
   - 次工程: 練習PDF作成のまま
4. `16_numerical_differentiation_integration_practice_qa.md`
   - 次工程: 解説画像PowerPoint作成のまま
5. `16_numerical_differentiation_integration_powerpoint_qa.md`
   - 次工程: 完成後独立再解答のまま
6. `../../HANDOFF.md`
   - `current_status`: `topic_16_explanation_source_complete` のまま
   - 次工程: 解説PDF作成のまま

進捗記録整合: `FAIL`。

この不整合を直すために技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF、PowerPoint、完成後独立再解答結果は変更しない。

## 最終判定

- 必須成果物実在: PASS
- 二種相当EXAM_ALIGNMENT 第二種公式4問・8答案要素: PASS
- 完成後独立再解答 `8 / 8`: PASS
- 練習問題独立計算・論理QA `12 / 12`: PASS
- 一次型正答一意性 `8 / 8`: PASS
- 教材外知識補完0件: PASS
- 第一種・第三種による件数水増し0件: PASS
- 固定範囲外追加0件: PASS
- 未確認実車値依存0件: PASS
- 表示QA: PASS
- 進捗記録と実成果物の整合: FAIL

総合判定: `NEEDS_REVISION / IN_PROGRESS`。

Topic 16はまだ `completed` としない。完成数は `15 / 20` のまま。

次工程: 上記6ファイルの進捗記録だけを現在地へ同期し、その後にTopic 16最終QAを再判定する。