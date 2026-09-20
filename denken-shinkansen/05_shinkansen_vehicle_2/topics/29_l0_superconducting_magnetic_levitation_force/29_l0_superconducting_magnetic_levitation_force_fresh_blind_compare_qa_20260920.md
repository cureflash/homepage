# Topic 29 fresh clean blind compare QA — 2026-09-20

判定: `NEEDS_REVISION / 21_OF_24_PASS`

対象: `29 L0系③ 超電導磁気浮上の電磁力`

## lock integrity

- candidate: `29_l0_superconducting_magnetic_levitation_force_fresh_blind_candidates_20260920.md`
- lock commit: `c60c20f76e9064964d666abf0a1823f417450d2c`
- candidate固定後修正: `0件`
- candidate作成時は公式解答PDF・保存済み正答・active theme alignmentの正答欄を参照していない。
- 公式解答・標準解答はcandidate commit後に参照した。

別workerがcandidate lock後の commit `75c28df80b5e6c4f0cf3b512f18424972416bbea` で記録した `fresh_worker_blocker.md` は、そのworker自身が候補固定前にanswer-bearing資料を閲覧したための実施者固有blockerである。candidate lock `c60c20f...` はそれより前に別runで成立しているため、本比較ではcandidateを有効な固定点として扱う。blockerファイル自体は履歴として削除しない。

## 公式照合

公式資料: 一般財団法人 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」。

### 一次4問

| 固定問題 | locked candidate | 公式 | 判定 |
|---|---|---|---|
| R8 一次 理論 問2 | ル / リ / ヨ / カ / ハ | ル / リ / ヨ / カ / ハ | `5/5 PASS` |
| R7 一次 理論 問2 | ヲ / ワ / チ / イ / ヨ | ヲ / ワ / チ / イ / ヨ | `5/5 PASS` |
| R4 一次 理論 問2 | ヌ / ト / カ / リ / ヲ | ヌ / ト / カ / リ / ヲ | `5/5 PASS` |
| R2 一次 理論 問2 | イ / ヨ / ワ / ロ / ヌ | イ / ヨ / ワ / ロ / ヌ | `5/5 PASS` |

一次合計: `20 / 20 PASS`。

公式解答PDF:
- R8: https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf
- R7: https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf
- R4: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R2: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf

### H23 二次「機械・制御」問1

公式標準解答: https://www.shiken.or.jp/chief/upload/20111127_ch_second_a01.pdf

| 小問 | locked candidate | 公式標準解答 | 判定 |
|---|---|---|---|
| (1) | `UNRESOLVED_FROM_MATERIAL` | `T = 75.7 N·m` | `FAIL` |
| (2) | `s_max = 0.375` | `s_max = 0.212` | `FAIL` |
| (3) | `0 min^-1` | `0 min^-1` | `PASS` |
| (4) | `UNRESOLVED_FROM_MATERIAL` | `T = 36.7 N·m` | `FAIL` |

二次合計: `1 / 4 PASS`。

総合: `21 / 24 PASS`。

## root cause

誤答・未解答はH23二次のL形等価回路に集中した。現教材の§12と練習問12は、固定子側電圧降下を無視した簡略二次回路

`I_2 = sE_2 / sqrt(r_2^2+(s x_2)^2)`

および基本形

`s_m = r_2/x_2`

までしか教えていない。

H23問1は `r_1`, `x_1`, `r'_2`, `x'_2` を持つ一相L形等価回路であり、次の中間知識が教材に不足していた。

1. 三相線間電圧から相電圧へ `V_1=V_L/sqrt(3)` とする処理。
2. 二次電流一次側換算値
   `I'_2 = V_1 / sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`。
3. 同期角速度 `ω_s=2πf/(p/2)` と
   `T = [3 I'^2_2 (r'_2/s)]/ω_s`。
4. 固定子インピーダンスを含む最大トルク条件
   `s_max = r'_2 / sqrt(r_1^2+(x_1+x'_2)^2)`。
5. 逆相制動では `s_p=2-s`。同期速度から停止まで `s_p: 2→1` であり、本問では `s_max=0.212 < 1` のため停止直前 `s_p=1`, `N=0 min^-1` が区間内最大制動トルク点。
6. 逆相制動開始直後は `s_p=2` を同じL形等価回路式へ代入する。

これは固定EXAM_ALIGNMENTの問題選定ミスではなく、「24/24 connected」とした教材側マッピングの過大評価である。一般式を誤っていたのではなく、H23固有のL形等価回路条件への橋渡しが欠落していた。

## remediation target

H23固有補足として以下を教材へ追加し、既存PDF/PPTを再同期する。

- `V_L → V_1` の相電圧処理
- L形等価回路の `I'_2(s)` と `T(s)`
- 固定子インピーダンス込みの `s_max`
- 逆相制動 `s_p=2-s` の有効区間判定
- H23数値で `(1)=75.7 N·m`, `(2)=0.212`, `(3)=0 min^-1`, `(4)=36.7 N·m` を再計算する過去問固有注記

candidate v1は変更しない。教材側remediation後、answer-bearing資料を見ていないfresh workerでv2 candidateを新規固定して再照合する。

## 境界

- Topic 21 H26二次問1(4)の `48.1 / 48.0 N·m` 診断は変更しない。
- Topic 21一般式 `P=Tω`, `ω=2πN/60` は変更しない。
- Topic 29固定EXAM_ALIGNMENT 5問・24答案要素は変更しない。
- L0系未確認実車値の真値化: `0件`。
- Topic 30先取り: `0件`。
