# Topic 18 完成後 clean blind 独立再解答 — 公式照合

更新日: 2026-09-19

判定: `PASS / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

候補答案は先に `18_e2series_50hz_60hz_flux_blind_reanswer_candidates_clean.md` としてGitHubへ固定した（commit `9f35eca9899a02cc132d504ca95cba9f9e0c2b24`）。その後に公式解答・標準解答を確認した。候補固定後の答案変更は0件。

## 公式照合結果

### R7 二次 機械・制御 問2 `(1)の滑り算出`

- 候補: `3.50 %`
- 公式標準解答: `3.5 %`
- 判定: `1 / 1 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf

### R2 二次 機械・制御 問1 `(1)〜(7)`

候補と公式標準解答:

1. `N_0 = 1800 min^-1` — PASS
2. `N_m = 1710 min^-1` — PASS
3. `N_s = 90 min^-1` — PASS
4. `f_2 = 3 Hz` — PASS
5. `N_r = 90 min^-1` — PASS
6. `N_R = 1800 min^-1` — PASS
7. `N_sr = 0 min^-1` — PASS

判定: `7 / 7 PASS`

公式: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### R2 一次 機械 問3 `(1)(4)(5)`

- `(1)` 候補 `（ワ）2πf/p` / 公式 `ワ` — PASS
- `(4)` 候補 `（ロ）V/f一定制御` / 公式 `ロ` — PASS
- `(5)` 候補 `（ト）磁束` / 公式 `ト` — PASS

判定: `3 / 3 PASS`

公式: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf

### R2 一次 機械 問5 `(3)(4)(5)`

- `(3)` 候補 `（ホ）√2 V_1/(ωN_1)` / 公式 `ホ` — PASS
- `(4)` 候補 `（ヲ）√2π` / 公式 `ヲ` — PASS
- `(5)` 候補 `（ル）飽和` / 公式 `ル` — PASS

判定: `3 / 3 PASS`

公式: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf

### H25 一次 機械 問2 `(5)`

- 候補: `（ロ）できる`
- 公式: `ロ`
- 判定: `1 / 1 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf

## 品質ゲート集計

- 一次: `7 / 7 PASS`
- 二次: `8 / 8 PASS`
- 合計: `15 / 15 PASS`
- 固定5問: `5 / 5 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`

## 判定

完成済みTopic 18教材だけで固定5問・15答案要素を独立再解答でき、候補固定後の公式照合で `15 / 15 PASS`。`EXAM_ALIGNMENT_SPEC.md` の完成後独立試験ゲートを通過した。

次工程はTopic 18最終QA。既存PDF/PPTX、問題、正答、数式、固定EXAM_ALIGNMENTは変更せず、必須成果物・各QA・clean blind記録・SPEC境界・進捗整合のみを最終確認する。
