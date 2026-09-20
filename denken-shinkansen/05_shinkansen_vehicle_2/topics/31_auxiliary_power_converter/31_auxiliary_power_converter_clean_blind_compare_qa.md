# Topic 31 clean blind compare QA — 補助電源変換器

更新日: 2026-09-20

判定: `PASS / CLEAN_BLIND_COMPLETE`

## 1. candidate lock

- candidate: `31_auxiliary_power_converter_clean_blind_candidate.md`
- candidate blob SHA: `007efb48e5934ed4a18aee12ec7ba8a252bc78b0`
- candidate lock commit: `4a945dd9adf321cd7a4d1df97a9c4cec262b2b90`
- lock時状態: `CANDIDATE_LOCKED / OFFICIAL_COMPARE_PENDING`
- candidate固定前のanswer-bearing資料閲覧: `0件`
- candidate固定後修正: `0件`

candidate固定後に初めて、固定EXAM_ALIGNMENT、exam alignment QA、電気技術者試験センター公式解答／標準解答を開いて照合した。

## 2. 公式照合

### R7 一次「機械」問4 — `5 / 5 PASS`

candidate:
- (1) ホ
- (2) ル
- (3) チ
- (4) イ
- (5) ハ

公式解答と全一致。

公式: https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf

### R5 二次「機械・制御」問3 — `7 / 7 PASS`

照合結果:
- 高調波発生源: candidate `インバータ`。標準解答例にインバータを明記。`PASS`
- 他機器への影響: candidate `機器の損失・発熱が増加する`。標準解答例の「コンデンサやリアクトルの過熱や振動」と同じ過熱・発熱影響を述べており、要求する影響記述として整合。`PASS`
- 補償電流: candidate `i_c=-i_H`。標準解答 `i_c=i_1-i_L=-i_H` と一致。`PASS`
- `i_H` 波形: candidate `i_H=i_L-i_1` の区分式。標準解答図と一致。`PASS`
- `i_c` 波形: candidate `i_c=-i_H` の区分式。標準解答図と一致。`PASS`
- `i_1` 実効値: candidate `(2√2/π)I_L ≈0.900I_L`。標準解答と一致。`PASS`
- `i_c` 実効値: candidate `√(1-8/π²)I_L ≈0.435I_L`。標準解答と一致。`PASS`

公式: https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf

### R4 一次「機械」問4 — `5 / 5 PASS`

candidate:
- (1) ハ
- (2) イ
- (3) ト
- (4) ロ
- (5) ル

公式解答と全一致。

公式: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf

### R2 二次「機械・制御」問2 — `5 / 5 PASS`

candidate / 標準解答:
- 鉄損: `400 W / 400 W`
- 定格銅損: `624 W / 624 W`
- 最大効率負荷率: `80.0 % / 80.0 %`
- 最大効率: `99.0 % / 99.0 %`
- 30%負荷・力率60%効率: `97.5 % / 97.5 %`

`5 / 5` 全一致。

公式: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### H22 一次「機械」問3 — `5 / 5 PASS`

candidate:
- (1) ハ
- (2) ヌ
- (3) ト
- (4) イ
- (5) ヨ

公式解答と全一致。

公式: https://www.shiken.or.jp/chief/upload/20100904_ch_second_a01.pdf

## 3. 集計

- 一次3問: `15 / 15 PASS`
- 二次2問: `12 / 12 PASS`
- 合計: `27 / 27 PASS`
- 公式照合不一致: `0件`
- candidate固定後修正: `0件`
- 教材外知識での救済: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## 4. 品質境界

- R2二次問2の変圧器固有 `鉄損=銅損` を補助電源変換器の普遍則へ変更: `0件`
- H22一次問3のPV・MPPT固有事項追加: `0件`
- R5二次問3の能動フィルタを実車搭載事実化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 32〜34固有設計の先取り: `0件`
- Topic 21 H26二次問1(4)の一般式変更: `0件`

Topic 21の `48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として扱う。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 5. 最終判定

固定5問・27答案要素を、candidate固定前にanswer-bearing資料を見ず、Topic 31教材だけで独立再解答し、固定後に公式解答／標準解答と照合した結果 `27 / 27 PASS`。

Topic 31は `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験を通過し、最終 `PASS / completed` と判定できる。

exact blocker: `0件`
