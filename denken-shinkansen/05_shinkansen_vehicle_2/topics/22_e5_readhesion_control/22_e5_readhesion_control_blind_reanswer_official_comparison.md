# Topic 22 clean blind独立再解答 — 公式照合

更新日: 2026-09-19

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## 判定対象

候補固定正本:
- commit: `f8aa715525de8747459c27cb02254575eaeca868`
- file: `22_e5_readhesion_control_blind_reanswer_candidates_clean.md`

候補答案は公式解答・標準解答との個別照合前に固定済み。固定EXAM_ALIGNMENT、一般式、問題範囲は変更しない。

## 公式照合

| 固定過去問 | 答案要素 | 結果 |
|---|---:|---:|
| H28 一次「機械」問5 `(4),(5)` | 2 | `2 / 2 PASS` |
| R2 一次「機械」問3 `(1)` | 1 | `1 / 1 PASS` |
| R7 二次「機械・制御」問2 `s1`,`N2` | 2 | `2 / 2 PASS` |
| R2 二次「機械・制御」問1 `(2),(3),(4)` | 3 | `3 / 3 PASS` |
| H21 二次「機械・制御」問4 `(4),(5a),(5b)` | 3 | `3 / 3 PASS` |

H21二次 問4の候補は、Topic 22が前提参照を許可するTopic 20フィードバック制御教材を使用して公式照合前に導出した。

- `(4)`: `e_v=(5+K2)/K1`
- `(5a)`: `K1`固定で`K2`増加 → 内側帰還後の対象ゲイン低下 → 一巡ゲイン低下 → 速応性低下。定常速度偏差増加 → 定常特性劣化
- `(5b)`: `K2`固定で`K1`増加 → 安定限界へ近づき振動的・減衰特性悪化。定常速度偏差減少 → 定常特性改善

公式標準解答と一致した。

## 集計

- 一次: `3 / 3 PASS`
- 二次: `8 / 8 PASS`
- 合計: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- 候補固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`

## 公式正本

- H28 一次「機械」問題: https://www.shiken.or.jp/chief/upload/20160903_ch_second_q03.pdf
- H28 一次公式解答: https://www.shiken.or.jp/ecee-overview/news/upload/2016_2_1.pdf
- R2 一次「機械」問題: https://www.shiken.or.jp/chief/upload/20200912_ch_second_q03.pdf
- R2 一次公式解答: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf
- R7 二次「機械・制御」問題: https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf
- R7 二次標準解答: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf
- R2 二次「機械・制御」問題: https://www.shiken.or.jp/chief/upload/20201122_ch_second_q02.pdf
- R2 二次標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf
- H21 二次「機械・制御」問題: https://www.shiken.or.jp/chief/upload/20091129_ch_second_q02.pdf
- H21 二次標準解答: https://www.shiken.or.jp/chief/upload/20091129_ch_second_a01.pdf

## 先行10/11記録とのreconcile

`22_e5_readhesion_control_independent_reanswer.md` の `10 / 11` は、Topic 22が明示的に前提参照を許可するTopic 20フィードバック制御教材を参照範囲から外したworkerの診断だった。有効候補はその許可範囲を守ってH21問4 `(5a)` を公式照合前に正しく導出しているため、`10 / 11` は教材欠落の確定証拠とは採用しない。

Topic 22本文・一般式・既存PDF/PPTXへの過去問固有式追加は不要。
