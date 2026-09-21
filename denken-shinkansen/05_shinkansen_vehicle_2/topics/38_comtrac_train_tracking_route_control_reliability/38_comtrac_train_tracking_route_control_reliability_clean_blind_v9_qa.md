# Topic 38 clean blind v9 QA

更新日: 2026-09-21

判定: `PASS / topic_38_clean_blind_v9_pass`

## 固定条件

- 固定過去問: 一次5問
- 固定答案要素: 25
- 二次: 0問（直接対応なし、件数合わせ0件）
- SPEC固定9項目: 変更0件
- 固定EXAM_ALIGNMENT: 変更0件

## Freshness

`PASS`

candidate固定前に参照したのは、必須正本、question-only intake、固定5問の公式「問題」PDFだけ。公式標準解答、Topic 38教材、prior clean-blind candidate / QA、answer-bearing QA / commit diffは参照していない。

candidate固定commit:
`49733712ced101bee0bb42336084fe099bbe2c02`

candidate固定後修正: `0件`

## 公式標準解答照合

| 固定問題 | candidate | 公式標準解答 | 判定 |
|---|---|---|---|
| R8 一次「機械」問8 | ヌ・ル・リ・ロ・ニ | ヌ・ル・リ・ロ・ニ | 5/5 PASS |
| R2 一次「機械」問8 | ヌ・ハ・ヲ・チ・ロ | ヌ・ハ・ヲ・チ・ロ | 5/5 PASS |
| H29 一次「機械」問8 | リ・ヨ・ニ・ヲ・ヘ | リ・ヨ・ニ・ヲ・ヘ | 5/5 PASS |
| H26 一次「機械」問3 | ヌ・ワ・チ・ハ・リ | ヌ・ワ・チ・ハ・リ | 5/5 PASS |
| H23 一次「機械」問8 | ヨ・ホ・ヌ・ロ・ヘ | ヨ・ホ・ヌ・ロ・ヘ | 5/5 PASS |

合計: `25 / 25 PASS`

公式解答:
- R8: https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf
- R2: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf
- H29: https://www.shiken.or.jp/chief/upload/20170902_ch_second_a01.pdf
- H26: https://www.shiken.or.jp/chief/upload/20140906_ch_second_a01.pdf
- H23: https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf

## 教材依存性照合

現行の固定EXAM_ALIGNMENTとremediation済み解説・練習sourceをcandidate固定後に照合した。

- R8要求5要素: `5 / 5 COVERED`
- R2要求5要素: `5 / 5 COVERED`
- H29要求5要素: `5 / 5 COVERED`
- H26要求5要素: `5 / 5 COVERED`
- H23要求5要素: `5 / 5 COVERED`
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- 教材外知識補完が必要な答案要素: `0件`

## 境界・品質ゲート

- 未確認COMTRAC実装・数値の真値化: `0件 / PASS`
- Topic 39先取り: `0件 / PASS`
- 二次問題の件数合わせ: `0件 / PASS`
- candidate固定後修正: `0件 / PASS`
- 教材本文修正: `0件`
- exact blocker: `0件`

## 結論

`EXAM_ALIGNMENT_SPEC.md` の独立再解答ゲートを `25 / 25` で通過。remediation済み成果物の既存QAもPASSであり、Topic 38は `completed` 判定へ進める。