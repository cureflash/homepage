# Topic 29 clean blind v2 公式照合QA

更新日: 2026-09-20

判定: `PASS / 24_OF_24`

## candidate lock

- candidate file: `29_l0_superconducting_magnetic_levitation_force_fresh_blind_v2_candidates_20260920.md`
- candidate lock commit: `18b7ea1d8796a4802e63c78088bb1fae87e70601`
- candidate固定後修正: `0件`
- 公式標準解答はcandidate commit成立後に初めて開いた。

## 公式標準解答

電気技術者試験センター公式を正本とした。

- R8 一次試験解答: `https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf`
- R7 一次試験解答: `https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf`
- R4 一次試験解答: `https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf`
- R2 一次試験解答: `https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf`
- H23 二次試験標準解答: `https://www.shiken.or.jp/chief/upload/20111127_ch_second_a01.pdf`

## 一次20答案要素

| 固定過去問 | candidate | 公式 | 判定 |
|---|---|---|---|
| R8 理論 問2 | `ル / リ / ヨ / カ / ハ` | `ル / リ / ヨ / カ / ハ` | `5 / 5 PASS` |
| R7 理論 問2 | `ヲ / ワ / チ / イ / ヨ` | `ヲ / ワ / チ / イ / ヨ` | `5 / 5 PASS` |
| R4 理論 問2 | `ヌ / ト / カ / リ / ヲ` | `ヌ / ト / カ / リ / ヲ` | `5 / 5 PASS` |
| R2 理論 問2 | `イ / ヨ / ワ / ロ / ヌ` | `イ / ヨ / ワ / ロ / ヌ` | `5 / 5 PASS` |

一次集計: `20 / 20 PASS`。

## H23 二次「機械・制御」問1

### (1) `s=0.05` のトルク

candidate:
- `I'_2≈36.33 A`
- `T≈75.64 N・m`
- 最終表示 `75.6 N・m`

公式標準解答:
- `I'_2=36.333 A`
- 計算表示 `75.673 -> 75.7 N・m`

式は完全一致する。

`T=3I'^2_2(r'_2/s)/ω_s`, `ω_s=2πf/(p/2)` にcandidateの未丸め値と通常の `π` を用いると `75.638... N・m`。一方、公式表示 `I'_2=36.333 A`, `T=75.673 N・m` から逆算すると `π_eff≈3.14003` で、`π=3.14` 相当の数値処理である。

したがって `75.6 / 75.7 N・m` は一般式・解法の不一致ではなく、公式標準解答側の `π=3.14` 相当の過去問固有丸め差として扱う。candidateは固定したまま `PASS_WITH_ROUNDING_NOTE` とする。一般式は変更しない。

### (2) 最大トルクすべり

- candidate: `0.212`
- 公式: `0.212`
- 判定: `PASS`

### (3) 逆相制動中の最大制動トルク回転速度

- candidate: `0 min^-1`（停止直前側、`1<=s<=2` の端点 `s=1`）
- 公式: `0 min^-1`、`s=1`
- 判定: `PASS`

### (4) 二相入替え直後の制動トルク

- candidate: `36.7 N・m`
- 公式: `36.7 N・m`
- 判定: `PASS`

二次集計: `4 / 4 PASS`（(1)は過去問固有丸め注記付き）。

## 過去問対応品質ゲート

- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `4 / 4 PASS`
- 合計答案要素: `24 / 24 PASS`
- candidate固定後修正: `0件`
- 教材外知識によるH23 remediation補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 21 H26二次 問1(4)

既診断どおり `48.1 N・m / 48.0 N・m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次工程

Topic 29はclean blind v2で過去問品質ゲートを通過した。artifact再同期QAも完了済みなので、最終QAで成果物identity・SPEC・EXAM_ALIGNMENT・境界条件を再確認し、問題がなければ `completed` へ更新する。