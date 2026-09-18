# Topic 18 完成後独立再解答

更新日: 2026-09-18

## 目的

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験として、固定一次1問＋二次4問、計5問・12答案要素を、完成済みTopic 18教材だけを使って再解答する。

先に `18_speed_transient_response_answer_lock.md` へ12答案要素を固定し、その後に電気技術者試験センターの公式正答・標準解答と照合した。

## 固定問題

- H23 一次 機械 問7 (2) — 1答案要素
- R07 二次 機械・制御 問4 (2),(4),(5) — 4答案要素
- R06 二次 機械・制御 問4 (2),(3),(4) — 3答案要素
- R03 二次 機械・制御 問4 (3),(4) — 2答案要素
- H29 二次 機械・制御 問4 (5) — 2答案要素

合計12答案要素。

## 独立再解答結果

| 過去問 | ロック答案 | 公式照合 | 判定 |
|---|---|---|---|
| H23 一次 機械 問7 (2) | 速応性、選択肢 `(チ)` | 公式正答 `(チ)` と一致 | PASS |
| R07 二次 問4 (2) | ステップ入力の定常偏差 `0` | 公式標準解答と一致 | PASS |
| R07 二次 問4 (4) | `Gy=2(s+2)/[(s+1)(s+4)]`、`gy(t)=(2/3)e^-t+(4/3)e^-4t` | 公式標準解答と一致 | PASS |
| R07 二次 問4 (5) | `y(1)=0.7486...→0.749` | 公式標準解答と一致 | PASS |
| R06 二次 問4 (2) | 単位ステップの定常値 `1.25` | 公式標準解答と一致 | PASS |
| R06 二次 問4 (3) | `y2(t)=8e^-2t-5e^-3t` | 公式標準解答と一致 | PASS |
| R06 二次 問4 (4) | `y2(t)=11e^-t-16e^-2t+5e^-3t` | 公式標準解答と一致 | PASS |
| R03 二次 問4 (3) | 振動的となる条件 `K>1/2` | 公式標準解答 `K>0.5` と一致 | PASS |
| R03 二次 問4 (4) | `y(t)=e^(-t/2)sin(t/2)` | 公式標準解答と一致 | PASS |
| H29 二次 問4 (5) | `ω_n=1000 rad/s` | 公式標準解答 `10^3 rad/s` と一致 | PASS |
| H29 二次 問4 (5) | `ζ=0.25` | 公式標準解答と一致 | PASS |

R07 問4 (4) は伝達関数とインパルス応答を別答案要素として数えるため、表の同一行に2答案要素を含む。固定12答案要素はすべてPASSした。

厳密ブラインド再解答: `12 / 12 PASS`。

## 使用した教材内知識

- `Y(s)=G(s)U(s)` と入力のラプラス変換。
- 単位ステップ、単位インパルス、指数入力の区別。
- 部分分数分解と逆ラプラス変換。
- 最終値の定理による定常値・定常偏差。
- 二次系の特性方程式と複素共役根になる条件。
- 二次遅れ標準形 `s^2+2ζω_n s+ω_n^2` との係数比較。

教材外のPID調整、Routh-Hurwitz、Bode/Nyquist、再粘着制御は使用していない。

## 公式照合先

問題・正答の正本は電気技術者試験センターとした。

- H23 一次問題: `https://www.shiken.or.jp/chief/upload/20110903_ch_second_q03.pdf`
- H23 一次正答: `https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf`
- R07 二次問題: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf`
- R07 二次標準解答: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf`
- R06 二次問題: `https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf`
- R06 二次標準解答: `https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf`
- R03 二次問題: `https://www.shiken.or.jp/chief/upload/20211114_ch_second_q02.pdf`
- R03 二次標準解答: `https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf`
- H29 二次問題: `https://www.shiken.or.jp/chief/upload/20171119_ch_second_q02.pdf`
- H29 二次標準解答: `https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf`

## 品質ゲート

- [x] 固定一次1問＋二次4問・12答案要素を変更していない
- [x] 公式正答・標準解答を見る前に答案をGitHubへロックした
- [x] 固定12答案要素を完成教材だけで導出できた
- [x] 公式照合 `12 / 12 PASS`
- [x] 教材外知識による補完 `0件`
- [x] Topic 19〜21先取り `0件`
- [x] 仕様外独立論点追加 `0件`
- [x] 未確認新幹線実車値追加 `0件`

判定: `PASS / topic_18_independent_reanswer_complete`。

次工程: Topic 18最終QAを実施し、必須成果物・12答案要素・独立再解答・PDF/PPTX QA・仕様境界・進捗記録整合を総合判定する。