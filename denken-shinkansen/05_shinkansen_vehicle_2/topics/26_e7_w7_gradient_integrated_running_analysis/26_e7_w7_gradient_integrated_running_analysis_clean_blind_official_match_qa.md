# Topic 26 E7・W7系 勾配条件を含む総合走行解析 — clean blind公式照合

更新日: 2026-09-20

判定: `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`

## 実施条件

- 固定済み候補 `26_e7_w7_gradient_integrated_running_analysis_blind_candidates.md` は変更していない。
- 候補固定後に、電気技術者試験センター公表の公式解答・標準解答を開いて照合した。
- 固定EXAM_ALIGNMENTは第二種一次4問＋二次1問、計5問・16答案要素のまま変更していない。

## 公式照合結果

| 固定過去問 | clean blind固定候補 | 公式解答・標準解答 | 判定 |
|---|---|---|---:|
| R7 二次「機械・制御」問2 | `s1=3.50 %, T1=181 N·m; Pc2=798 W, Pf=1.55×10^3 W; N2=1.18×10^3 min^-1, P2=1.12×10^4 W` | `3.5 %, 181 N·m; 798 W, 1550 W; 1180 min^-1, 11200 W` | `6 / 6 PASS` |
| H26 一次「機械」問5 | `(1)=ロ, (4)=ヲ, (5)=ニ` | `(1)=ロ, (4)=ヲ, (5)=ニ` | `3 / 3 PASS` |
| H25 一次「機械」問3 | `(1)=ヨ` | `(1)=ヨ` | `1 / 1 PASS` |
| R5 一次「機械」問2 | `(2)=ホ, (3)=チ, (5)=ル` | `(2)=ホ, (3)=チ, (5)=ル` | `3 / 3 PASS` |
| H27 一次「機械」問3 | `(1)=ヘ, (2)=ヌ, (3)=ト` | `(1)=ヘ, (2)=ヌ, (3)=ト` | `3 / 3 PASS` |

一次: `10 / 10 PASS`。
二次: `6 / 6 PASS`。
合計: `16 / 16 PASS`、固定5問 `5 / 5 PASS`。

R7二次の科学表記候補は、公式標準解答の丸め値 `1550 W`、`1180 min^-1`、`11200 W` とそれぞれ同値であり、不一致ではない。

## 公式資料

- R7 二次「機械・制御」問題: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf`
- R7 二次 標準解答: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf`
- H26 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20140906_ch_second_q03.pdf`
- H26 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20140906_ch_second_a01.pdf`
- H25 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20130831_ch_second_q03.pdf`
- H25 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf`
- R5 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20230819_ch_second_q03.pdf`
- R5 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf`
- H27 一次「機械」問題: `https://www.shiken.or.jp/chief/upload/20150905_ch_second_q03.pdf`
- H27 一次 公式解答: `https://www.shiken.or.jp/chief/upload/20150905_ch_second_a01.pdf`

## 品質ゲート

- 固定候補の後編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 未確認E7・W7実車値の真値化: `0件`
- 未確認走行抵抗経験式・係数の追加: `0件`
- Topic 21一般式変更: `0件`
- 不一致: `0件`
- exact blocker: `0件`

## 次工程

Topic 26最終QA。解説source/PDF、練習source/PDF、PowerPoint、clean blind公式照合を横断して最終判定する。最終QA PASSまではTopic 26を `completed` にせず、完成数は `25 / 39` のままとする。
