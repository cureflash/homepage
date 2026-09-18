# Topic 17 完成後独立再解答

更新日: 2026-09-18

## 目的

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験として、固定一次1問＋二次4問、計5問・6答案要素を、完成済みTopic 17教材だけを使って再解答する。

先に `17_speed_feedback_control_answer_lock.md` へ答案を固定し、その後に電気技術者試験センターの公式正答・標準解答と照合した。

## 固定問題

- R07 二次 機械・制御 問4 (1) — 1答案要素
- R06 二次 機械・制御 問4 (1) — 1答案要素
- R04 二次 機械・制御 問4 (3) — 1答案要素
- R03 二次 機械・制御 問4 (1),(2) — 2答案要素
- H21 一次 機械 問4 (1) — 1答案要素

合計6答案要素。

## 独立再解答結果

| 過去問 | ロック答案 | 公式照合 | 判定 |
|---|---|---|---|
| R07 二次 問4 (1) | `E/R=s(s+3)/(s^2+5s+4)` | 公式標準解答と等価 | PASS |
| R06 二次 問4 (1) | `Y1/U=15/(s^3+7s^2+16s+12)` | 公式標準解答と一致 | PASS |
| R04 二次 問4 (3) | `E/R=s(s+1)(s+40)/{s(s+1)(s+40)+100K}` | 公式標準解答と一致 | PASS |
| R03 二次 問4 (1) | `G=K/[2s(s+1)(Ts+1)]` | 公式標準解答と等価 | PASS |
| R03 二次 問4 (2) | `W=K/[2Ts^3+2(T+1)s^2+2s+K]` | 公式標準解答と一致 | PASS |
| H21 一次 問4 (1) | `E/D=-P/(1+KP)`、選択肢 `(ヨ)` | 公式正答 `(ヨ)` と一致 | PASS |

厳密ブラインド再解答: `6 / 6 PASS`。

## 使用した教材内知識

- 伝達関数を出力/入力として定義する。
- 直列接続は伝達関数の積でまとめる。
- 負帰還系で `E=R-HY` を立てる。
- 閉ループ `Y/R=G/(1+GH)` を信号式から導く。
- 偏差 `E/R=1/(1+GH)` を信号式から導く。
- 外乱は印加位置を確認し、対象外入力を0として信号式から `E/D` を導く。

教材外の時間応答、PID、安定判別、周波数応答、二自由度制御の一般論は使用していない。

## 公式照合先

問題・正答の正本は電気技術者試験センターとした。

- R07 問題: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf`
- R07 標準解答: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf`
- R06 問題: `https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf`
- R06 標準解答: `https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf`
- R04 問題: `https://www.shiken.or.jp/chief/upload/20221113_ch_second_q02.pdf`
- R04 標準解答: `https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf`
- R03 問題: `https://www.shiken.or.jp/chief/upload/20211114_ch_second_q02.pdf`
- R03 標準解答: `https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf`
- H21 一次問題: `https://www.shiken.or.jp/chief/upload/20090905_ch_second_q03.pdf`
- H21 一次正答: `https://www.shiken.or.jp/chief/upload/20090905_ch_second_a01.pdf`

## 品質ゲート

- [x] 固定5問・6答案要素を変更していない
- [x] 公式正答・標準解答を見る前に答案をGitHubへロックした
- [x] 固定6答案要素を完成教材だけで導出できた
- [x] 公式照合 `6 / 6 PASS`
- [x] 教材外知識による補完 `0件`
- [x] Topic 18〜21先取り `0件`
- [x] 二自由度制御・フィードフォワード補償の独立論点追加 `0件`
- [x] 未確認新幹線実車値追加 `0件`

判定: `PASS / topic_17_independent_reanswer_complete`。

次工程: Topic 17最終QAを実施し、必須成果物・6答案要素・独立再解答・PDF/PPTX QA・仕様境界・進捗記録整合を総合判定する。
