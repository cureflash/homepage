# Topic 05 最終QA記録

対象: `05 積分によるエネルギー計算`

実施日: 2026-09-14

## 判定

`NEEDS_REVISION`。Topic 05はまだ `completed` としない。

固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物の実在、表示QA、SPEC境界はPASSしたが、source Markdownの進捗記録が実態と不整合のため最終ゲートを通過させない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS |
| 解説PDF | PASS |
| 練習PDF | PASS |
| 解説画像PowerPoint | PASS |
| PowerPoint QA | PASS |
| 完成後独立再解答記録 | PASS |
| 最終QA記録 | PASS |

## EXAM_ALIGNMENT確認

固定品質ゲートは一次5問＋二次1問、計6問・16対象項目。

- R7 一次 理論 問2 (2)
- R6 一次 理論 問2 (1)〜(2)
- R4 二次 機械・制御 問3 (1)
- R3 一次 理論 問2 (4)〜(5)
- R2 一次 理論 問2 (1)〜(5)
- H25 一次 理論 問1 (1)〜(5)

source Markdownには要求知識・式・設問型・教材内必要説明が固定されている。二次試験の直接対応問題を1問含み、件数合わせの範囲外問題は追加していない。

## 完成後独立再解答

完成教材だけを使った再解答は6問・16対象項目すべてPASS。

- 一次5問: 15 / 15 PASS
- 二次1問: 1 / 1 PASS
- 合計: 16 / 16 PASS
- 教材外知識による補完: 0件
- 固定範囲外追加: 0件

## SPEC境界確認

固定範囲は以下で統一されている。

- `E=∫Pdt`
- `W=∫Fdx`
- 電界・磁界のエネルギー
- 平均値
- RMSとの関係

新幹線への接続は、力行・回生電力を時間積分して電力量を求める範囲に限定されている。

Topic 06以降の運転曲線、微分方程式、フーリエ解析、選定問題の固定範囲外小問、未確認実車値・実車固有制御則は追加されていない。

## 表示QA

- PowerPoint: 16:9・5枚、全スライド表示、文字切れ・重なり・文字化け、キャンバス外はみ出し、ZIP整合性すべてPASS
- 解説PDF: 制作時の全6ページ200 dpi表示QA PASS
- 練習PDF: 制作時の全7ページ200 dpi表示QA PASS

## 進捗記録整合

FAIL。

source Markdownに旧進捗が残っている。

1. 冒頭状態欄が `解説本文＋3段階例題まで完成。解説PDF・練習PDF・PowerPointは未着手。` のまま。
2. 固定EXAM_ALIGNMENT対応表の直後が `完成後独立再解答は、PDF・練習PDF・PowerPoint完成後に教材のみを使って実施する。` のまま。
3. 末尾の次工程が `次は解説PDFを作成し、全ページ表示QAを行う。` のまま。

実際には解説PDF・練習PDF・PowerPoint・完成後独立再解答まで完了しているため、GitHub正本内で現在地が矛盾している。

## 最終判定

- 必須成果物実在: PASS
- 二種相当EXAM_ALIGNMENT 6問・16対象項目: PASS
- 二次試験対応: PASS
- 完成後独立再解答16/16: PASS
- 教材外知識補完0件: PASS
- SPEC外内容の非混入: PASS
- 表示QA: PASS
- source Markdown進捗記録と実成果物の整合: FAIL

総合判定: `NEEDS_REVISION / IN_PROGRESS`。

次工程はsource Markdownの進捗記録3箇所を実成果物・独立再解答済みの現在地へ同期する。教材本文、EXAM_ALIGNMENT、数式、例題、固定範囲は変更しない。
