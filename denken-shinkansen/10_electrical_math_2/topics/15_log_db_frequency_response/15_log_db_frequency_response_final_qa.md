# Topic 15 最終QA記録

対象: `15 対数・dB・周波数応答`

実施日: 2026-09-17

## 判定

`NEEDS_REVISION`。

技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、PDF/PowerPoint表示QA、SPEC境界はPASS。未完了理由は、実成果物まで進んでいるのに進捗記録6ファイルが旧工程のまま残っていることだけである。教材本文・問題・正答・PDF・PowerPointの技術修正は不要。

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

固定品質ゲートは第二種公式過去問5問・12答案要素。

- R6 二次「機械・制御」問4 (5)
- R5 二次「機械・制御」問4 (1)〜(4)
- R4 二次「機械・制御」問4 (5)
- H30 二次「機械・制御」問4 (2)
- H23 一次「機械」問7 (1)〜(5)
- 制作前独立再解答・公式解答照合: `12 / 12 PASS`
- 解説本文へのマッピング: `12 / 12 PASS`
- 練習問題への接続: `12 / 12 PASS`
- 第一種・第三種による件数水増し: 0件

## 完成後独立再解答

公式解答・保存済み正答を確認する前に候補答案を `ANSWER_LOCKED_BEFORE_REVIEW` で固定し、その後に照合している。

- lock commit: `05a031bf1ce152cf071f4028fa4960443d31b1df`
- 固定5問・12答案要素: `12 / 12 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

## 表示・成果物QA

- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 3段階例題: `3 / 3 PASS`
- 練習問題: 全12問（一次型8問／記述型4問）、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`
- 練習PDF: A4縦6ページ、200 dpi全6ページ表示QA `6 / 6 PASS`、文字抽出QA `PASS`、全12問＋完全解説反映PASS
- PowerPoint: 16:9・5枚、固定12答案要素への可視化接続 `12 / 12 PASS`、全5スライド表示QA `5 / 5 PASS`、overflow 0件、`slides_test.py` PASS、PPTX ZIP/XML整合性 PASS

## SPEC境界確認

固定範囲:

- 常用対数
- 自然対数
- dB
- `20log10|G(jω)|`
- 位相
- ボード線図
- ゲイン余裕・位相余裕への接続

境界確認:

- Topic 10の伝達関数一般の再制作: 0件
- ラウス・フルビッツ法一般追加: 0件
- ナイキスト線図による独立安定判別追加: 0件
- 補償器設計一般追加: 0件
- フィルタ設計一般追加: 0件
- Topic 16以降の数値計算先取り: 0件
- 第一種・第三種過去問による件数水増し: 0件
- 未確認実車値依存: 0件

## 進捗記録整合QA

以下6ファイルが実成果物より古い工程を示しているためFAIL。

1. `15_log_db_frequency_response.md`
   - 冒頭 `## 状態` が `topic_15_explanation_source_complete`
   - 冒頭説明で解説PDF・練習問題・PowerPoint・完成後独立再解答を未着手としている
   - `次工程` が解説PDFのまま
2. `15_log_db_frequency_response_explanation_qa.md`
   - `次工程` が練習問題sourceのまま
3. `15_log_db_frequency_response_practice.md`
   - `次工程` が練習PDFのまま
4. `15_log_db_frequency_response_practice_qa.md`
   - `次工程` がPowerPointのまま
5. `15_log_db_frequency_response_powerpoint_qa.md`
   - `次工程` が完成後独立再解答のまま
6. `../../HANDOFF.md`
   - `current_status` が `topic_14_completed`
   - Topic 15の次工程が制作前EXAM_ALIGNMENTのまま

`STATUS.md` は完成後独立再解答完了まで同期済みであり、本QA実施後は本QA結果へ更新する。

## 最終判定

- 必須成果物実在: PASS
- 二種相当EXAM_ALIGNMENT 5問・12答案要素: PASS
- 完成後独立再解答 `12 / 12`: PASS
- 練習問題独立計算・論理QA `12 / 12`: PASS
- 一次型正答一意性 `8 / 8`: PASS
- 教材外知識補完0件: PASS
- 第一種・第三種による件数水増し0件: PASS
- 固定範囲外追加0件: PASS
- 未確認実車値依存0件: PASS
- 表示QA: PASS
- 進捗記録と実成果物の整合: FAIL

総合判定: `NEEDS_REVISION`。

Topic 15は `completed` にしない。次工程は上記6ファイルの進捗記録だけを実成果物へ同期し、その後に最終QAを再判定する。