# Topic 28 完成後 clean blind 公式照合 QA

更新日: 2026-09-20

判定: `NEEDS_REVISION / 26_OF_27_PASS`

## 前提

- 固定候補: `28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- 候補固定commit: `c3962aec781742bcbb17935327abcef9bb9d7317`
- 候補blob SHA: `6bf27ac5829d763f30549f775e9c4b710c790588`
- 候補固定後に公式解答を開いて照合した。
- 候補ファイルは公式照合後に変更していない。

## 公式解答

- R4一次「機械」: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R7二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf
- R5二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf
- H29二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf
- H27二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf

## 照合結果

| 固定問題 | 答案要素 | PASS | FAIL | 判定 |
|---|---:|---:|---:|---|
| R4一次「機械」問1 | 5 | 5 | 0 | PASS |
| R7二次「機械・制御」問1 | 6 | 6 | 0 | PASS |
| R5二次「機械・制御」問1 | 6 | 6 | 0 | PASS |
| H29二次「機械・制御」問1 `(1),(2),(5)` | 6 | 5 | 1 | NEEDS_REVISION |
| H27二次「機械・制御」問1 | 4 | 4 | 0 | PASS |
| 合計 | 27 | 26 | 1 | NEEDS_REVISION |

一次: `5 / 5 PASS`

二次: `21 / 22 PASS`

合計: `26 / 27 PASS`

## 唯一の不一致

H29二次「機械・制御」問1 `(1)`。

問題は電圧変動率 `ε=(E-V)/V×100` を `V, I, X_s, φ` で表すことを要求している。公式標準解答は遅れ力率角 `φ` を用い、

`E = sqrt(V^2 + 2 V X_s I sinφ + (X_s I)^2)`

したがって

`ε = {sqrt(V^2 + 2 V X_s I sinφ + (X_s I)^2) - V}/V × 100 [%]`

とする。

固定候補 H29-1 は、負荷角 `δ` を用いた別表現

`ε = {cosδ - 1 + sqrt((X_s I/V)^2 - sin^2δ)}×100 [%]`

を提出した。この式はフェーザ幾何として別条件では成立するが、設問が明示した変数 `V, I, X_s, φ` だけで答えていないため、本品質ゲートでは不正解と判定する。

## 原因診断

教材sourceには、発電機・遅れ力率について

`E = sqrt(V^2 + 2 V X_s I sinθ + (X_s I)^2)`

が既に存在する一方、教材では力率角を `θ`、H29本試験では `φ` と表記している。clean blind再解答で `φ`（力率角）と `δ`（負荷角）の要求変数を取り違えた。

一般式の誤りではない。固定EXAM_ALIGNMENTの変更も不要。

必要な補強は、H29固有注記として「本試験の `φ` は本教材の力率角 `θ` に対応し、`δ` とは別物。要求変数が `V,I,X_s,φ` のときは発電機遅れ力率の内部起電力式をそのまま用いて `ε` を表す」と明示すること。

## 境界確認

- Topic 21 H26二次 問1(4) `48.1 / 48.0 N·m`: 既存診断を維持。一般式変更なし。
- Topic 28固定5問・27答案要素: 変更なし。
- 未確認L0系実車値の真値化: `0件`。
- Topic 29先取り: `0件`。
- 候補固定後編集: `0件`。

## 判定

`NEEDS_REVISION`。

Topic 28は `completed` に数えない。次工程はH29 `(1)` の `φ / θ / δ` 記号対応を教材へ最小補強し、その補強をPDFへ同期した後、公式解答を見ていないfresh workerでclean blind再解答候補を新規固定すること。