# Topic 17 完成後独立再解答前ゲート

更新日: 2026-09-18

判定: `PASS / BLIND_REANSWER_READY`

## 対象
- active topic: `17 パワー半導体の損失比較`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次20＋二次6、計26
- 完成数: `16 / 39`

## 監査結果
`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、最新main、`STATUS.md`、`HANDOFF.md`、Topic 17のmain source・解説source・解説PDF QA・練習source・練習PDF QA・PowerPoint QAを照合した。

- 固定過去問: R7一次「機械」問4、R4一次「機械」問4、R2一次「機械」問2、H24一次「機械」問6、H24二次「機械・制御」問1
- 固定EXAM_ALIGNMENT: `一次4問＋二次1問 / 5問・26答案要素 / 変更なし`
- 制作前独立検証: 一次 `20 / 20 PASS`、二次 `6 / 6 PASS`、合計 `26 / 26 PASS`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / 4 pages / 4 / 4 display PASS`
- 練習source: `PASS / 一次8問＋二次4問 / 12 / 12解説 / 12 / 12再計算 / 一次8 / 8正答一意`
- 練習PDF: `PASS / 6 pages / 6 / 6 display PASS`
- PowerPoint: `PASS / 16:9 / 4枚 / 4 / 4 display PASS`
- 固定5問・26答案要素への教材接続: `26 / 26 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通一般仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## blind再解答の独立性条件
完成後独立再解答では、候補答案を固定する前に公式解答・標準解答を開かない。

使用してよいものは次だけとする。

- 固定5問の公式問題文
- Topic 17の完成教材（解説source/PDF、練習source/PDF、PowerPoint）
- 固定EXAM_ALIGNMENTの要求知識・使用式・教材内マッピング

main sourceには制作前検証結果 `26 / 26 PASS` と公式解答URLを記録しているが、正答記号一覧・標準解答本文は保存していない。制作前検証の成否だけを完成後blind再解答の答案根拠にはしない。

本runでは再解答前ゲート作成までを1段階とし、候補答案の固定・公式解答／標準解答との照合は実施しない。

## 次工程
新しい独立runで、公式解答・標準解答を先に見ず、固定5問の公式問題文と完成教材だけを使って26答案要素を再解答し、候補答案を固定する。その後の工程で公式解答・標準解答と照合する。
