# Topic 22 clean blind 独立再解答 — 公式照合

更新日: 2026-09-19

判定: `PASS / CLEAN_BLIND_OFFICIAL_CHECK_COMPLETE`

## 独立性

候補答案は公式解答・標準解答の個別照合前に、commit `f8aa715525de8747459c27cb02254575eaeca868` の `22_e5_readhesion_control_blind_reanswer_candidates_clean.md` へ固定した。

候補固定後に一般財団法人 電気技術者試験センターの公式解答・標準解答を開き、固定5問・11答案要素だけを照合した。固定EXAM_ALIGNMENT、教材一般式、問題範囲は変更しない。

## 公式照合

| 固定過去問 | 答案要素 | 候補 | 公式 | 判定 |
|---|---|---|---|---|
| H28 一次「機械」問5 | `(4)` | 誘導 | `(ニ) 誘導` | PASS |
| H28 一次「機械」問5 | `(5)` | 滑り | `(カ) 滑り` | PASS |
| R2 一次「機械」問3 | `(1)` | `2πf/p`、`(ワ)` | `(ワ) 2πf/p` | PASS |
| R7 二次「機械・制御」問2 | `(1) s1` | `3.50 %` | `3.5 %` | PASS |
| R7 二次「機械・制御」問2 | `(3) N2` | `1179 → 1180 min^-1` | `1179 → 1180 min^-1` | PASS |
| R2 二次「機械・制御」問1 | `(2) Nm` | `1710 min^-1` | `1710 min^-1` | PASS |
| R2 二次「機械・制御」問1 | `(3) Ns` | `90 min^-1` | `90 min^-1` | PASS |
| R2 二次「機械・制御」問1 | `(4) f2` | `3.0 Hz` | `3 Hz` | PASS |
| H21 二次「機械・制御」問4 | `(4)` | `e_v=(5+K2)/K1` | `(K2+5)/K1` | PASS |
| H21 二次「機械・制御」問4 | `(5a)` | `K2↑ → 速応性低下、定常速度偏差増大・定常特性劣化` | 同内容 | PASS |
| H21 二次「機械・制御」問4 | `(5b)` | `K1↑ → 安定限界へ近づき振動的・減衰特性悪化、定常特性改善` | 同内容 | PASS |

## 公式正本

### H28 一次「機械」
- 問題: https://www.shiken.or.jp/chief/upload/20160903_ch_second_q03.pdf
- 解答: https://www.shiken.or.jp/ecee-overview/news/upload/2016_2_1.pdf

### R2 一次「機械」
- 問題: https://www.shiken.or.jp/chief/upload/20200912_ch_second_q03.pdf
- 解答: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf

### R7 二次「機械・制御」
- 問題: https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf
- 標準解答: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf

### R2 二次「機械・制御」
- 問題: https://www.shiken.or.jp/chief/upload/20201122_ch_second_q02.pdf
- 標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### H21 二次「機械・制御」
- 問題: https://www.shiken.or.jp/chief/upload/20091129_ch_second_q02.pdf
- 標準解答: https://www.shiken.or.jp/chief/upload/20091129_ch_second_a01.pdf

## 品質ゲート結果

- 固定5問: `5 / 5 PASS`
- 一次答案要素: `3 / 3 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計: `11 / 11 PASS`
- 二次記述問題を含む: `PASS`
- 教材だけで候補を先に固定: `PASS`
- 公式照合前候補commitあり: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`

## 判定

Topic 22の完成後clean blind独立再解答は `PASS`。次工程は、既存成果物・各QA・固定SPEC範囲・固定EXAM_ALIGNMENT・本 `11 / 11 PASS` の整合を確認する最終QAである。
