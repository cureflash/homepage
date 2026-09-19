# Topic 25 N700S バッテリー自走のエネルギー設計 — clean blind公式照合

更新日: 2026-09-20

判定: `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`

## 実施条件

- 固定済み候補 `25_n700s_battery_self_propulsion_energy_design_blind_reanswer_candidates_clean.md` は変更していない。
- 候補固定後に、電気技術者試験センター公表の公式解答・標準解答を開いて照合した。
- 固定EXAM_ALIGNMENTは第二種一次4問＋二次1問、計5問・28答案要素のまま変更していない。

## 公式照合結果

| 固定過去問 | clean blind固定候補 | 公式解答・標準解答 | 判定 |
|---|---|---|---:|
| R8 一次「機械」問5 | `ホ, カ, イ, ワ, チ` | `ホ, カ, イ, ワ, チ` | `5 / 5 PASS` |
| R4 一次「機械」問6 | `イ, ワ, ヌ, リ, チ` | `イ, ワ, ヌ, リ, チ` | `5 / 5 PASS` |
| R2 一次「機械」問4 | `リ, ヌ, ホ, カ, ヨ` | `リ, ヌ, ホ, カ, ヨ` | `5 / 5 PASS` |
| R1 一次「機械」問4 | `カ, ヌ, チ, ヨ, リ` | `カ, ヌ, チ, ヨ, リ` | `5 / 5 PASS` |
| H23 二次「機械・制御」問3 | 固定8答案要素 | 標準解答と全要素一致 | `8 / 8 PASS` |

一次: `20 / 20 PASS`。
二次: `8 / 8 PASS`。
合計: `28 / 28 PASS`、固定5問 `5 / 5 PASS`。

## H23二次 問3の照合

- `(1)` 充電: `S1` / `D2`、`E_b1 = {T_on/(T_on+T_off)} E_p1` — `2 / 2 PASS`
- `(2)` 放電: `S2` / `D1`、`E_p2 = {(T_on+T_off)/T_off} E_b2` — `2 / 2 PASS`
- `(3)` `10 Ah`、1C充電 `+10 A, 1 h, 3.65→3.85 V`、2C放電 `-20 A, 0.5 h, 3.70→3.50 V`、切替時の段差を含む波形 — `2 / 2 PASS`
- `(4)` エネルギー効率上有利な方式を `定電流充電` とし、内部抵抗損失 `I^2R` で理由を説明 — `2 / 2 PASS`

## 公式資料

- R8 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20260830_ch_second_q03.pdf`
- R8 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf`
- R4 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20220820_ch_second_q03.pdf`
- R4 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf`
- R2 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20200912_ch_second_q03.pdf`
- R2 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf`
- R1 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20190831_ch_second_q03.pdf`
- R1 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20190831_ch_second_a01.pdf`
- H23 二次「機械・制御」問題: `https://www.shiken.or.jp/chief/upload/20111127_ch_second_q02.pdf`
- H23 二次 標準解答: `https://www.shiken.or.jp/chief/upload/20111127_ch_second_a01.pdf`

## 品質ゲート

- 固定候補の後編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 未指定走行抵抗モデル追加: `0件`
- Topic 21一般式変更: `0件`
- 不一致: `0件`
- exact blocker: `0件`

## 次工程

Topic 25最終QA。解説source/PDF、練習source/PDF、PowerPoint、clean blind公式照合を横断して最終判定する。最終QA PASSまではTopic 25を `completed` にせず、完成数は `24 / 39` のままとする。
