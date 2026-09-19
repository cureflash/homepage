# Topic 22 clean blind独立再解答 — 公式照合

更新日: 2026-09-19

## 判定対象

候補固定正本:
- commit: `f8aa715525de8747459c27cb02254575eaeca868`
- file: `22_e5_readhesion_control_blind_reanswer_candidates_clean.md`

この候補は公式解答・標準解答との照合前に固定されている。候補作成時に使用した教材はTopic 22解説source・練習source、およびTopic 22が明示的に前提参照を許可するTopic 20フィードバック制御の解説sourceである。固定EXAM_ALIGNMENTは変更していない。

## 公式照合

### H28 一次「機械」問5 `(4),(5)`

候補:
- `(4)=誘導`（ニ）
- `(5)=滑り`（カ）

公式一次試験解答:
- `(4)=ニ`
- `(5)=カ`

結果: `2 / 2 PASS`。

公式解答: `https://www.shiken.or.jp/chief/upload/20160903_ch_second_a01.pdf`

### R2 一次「機械」問3 `(1)`

候補:
- `(1)=2πf/p`（ワ）

公式一次試験解答:
- `(1)=ワ`

結果: `1 / 1 PASS`。

公式解答: `https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf`

### R7 二次「機械・制御」問2 `s1`,`N2`

候補:
- `s1=3.50 %`
- `N2=1179 min^-1`、有効数字3桁で `1180 min^-1`

公式標準解答:
- `s1=3.5 %`
- `N2=1179 min^-1 → 1180 min^-1`

結果: `2 / 2 PASS`。

公式標準解答: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf`

### R2 二次「機械・制御」問1 `(2),(3),(4)`

候補:
- `(2)=1710 min^-1`
- `(3)=90 min^-1`
- `(4)=3.0 Hz`

公式標準解答:
- `(2)=1710 min^-1`
- `(3)=90 min^-1`
- `(4)=3 Hz`

結果: `3 / 3 PASS`。

公式標準解答: `https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf`

### H21 二次「機械・制御」問4 `(4),(5a),(5b)`

候補:
- `(4)`: `e_v=(5+K2)/K1`
- `(5a)`: `K1`固定で`K2`増加 → 内側帰還後の `Y/U` のゲイン低下 → 一巡ゲイン低下 → 速応性低下。定常速度偏差増加 → 定常特性劣化
- `(5b)`: `K2`固定で`K1`増加 → 安定限界 `6(5+K2)` へ近づき振動的・減衰特性悪化。定常速度偏差減少 → 定常特性改善

公式標準解答と3要素とも一致。

結果: `3 / 3 PASS`。

公式標準解答: `https://www.shiken.or.jp/chief/upload/20091129_ch_second_a01.pdf`

## 集計

| 固定問題 | 答案要素 | 結果 |
|---|---:|---:|
| H28 一次 機械 問5 `(4),(5)` | 2 | `2 / 2 PASS` |
| R2 一次 機械 問3 `(1)` | 1 | `1 / 1 PASS` |
| R7 二次 機械・制御 問2 `s1`,`N2` | 2 | `2 / 2 PASS` |
| R2 二次 機械・制御 問1 `(2),(3),(4)` | 3 | `3 / 3 PASS` |
| H21 二次 機械・制御 問4 `(4),(5a),(5b)` | 3 | `3 / 3 PASS` |

- 一次: `3 / 3 PASS`
- 二次: `8 / 8 PASS`
- 合計: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- 候補固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`。

## 先行10/11記録とのreconcile

`22_e5_readhesion_control_independent_reanswer.md` の `10 / 11` は、Topic 22解説sourceだけへ参照範囲を狭め、Topic 22自身が前提参照を許可しているTopic 20フィードバック制御教材を使わなかったworkerの診断である。

一方、候補固定commit `f8aa7155...` は、Topic 22の範囲境界に従ってTopic 20の既習制御論を使用し、H21問4 `(5a)` を公式照合前に正しく導出している。したがって `10 / 11` は教材欠落の確定証拠としては採用せず、本ファイルの `11 / 11 PASS` をclean blind品質ゲートの有効結果とする。

Topic 22本文・一般式・既存PDF/PPTXへ過去問固有式を追加する必要はない。

## 次工程

Topic 22 最終QA。固定5問・11答案要素、必須成果物、SPEC境界、実車値境界、各既存QA、clean blind `11 / 11 PASS` を統合確認する。
