# Topic 20 完成後 clean blind 独立再解答 — 公式照合

更新日: 2026-09-19

判定: `PASS / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

候補答案は先に `20_n700_feedback_control_blind_reanswer_candidates_clean.md` としてGitHubへ固定した（commit `cb1d6247a2c221151af9e7a7457875563ea83261`）。その後に一般財団法人 電気技術者試験センターの公式解答・標準解答を確認した。候補固定後の答案変更は0件。

## 公式照合結果

### H25 一次 機械 問6 `(1)`

- 候補: `（ニ）不安定`
- 公式: `ニ`
- 判定: `1 / 1 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf

### R7 二次 機械・制御 問4 `(1)〜(5)`

- `(1)` 偏差伝達関数 `s(s+3)/(s^2+5s+4)` — 公式標準解答と一致
- `(2)` ステップ定常偏差 `0` — 一致
- `(3)` ランプ定常偏差 `3b/4` — 一致
- `(4)` `Gy(s)=2(s+2)/[(s+1)(s+4)]`、`gy(t)=(2/3)e^(-t)+(4/3)e^(-4t)` — 一致
- `(5)` `y(1)=0.749` — 公式 `0.74863...→0.749` と一致
- 判定: `5 / 5 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf

### R6 二次 機械・制御 問4 `(1)〜(4)`

- `(1)` `15/(s^3+7s^2+16s+12)` — 一致
- `(2)` `1.25` — 一致
- `(3)` `8e^(-2t)-5e^(-3t)` — 一致
- `(4)` `11e^(-t)-16e^(-2t)+5e^(-3t)` — 一致
- 判定: `4 / 4 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf

### R4 二次 機械・制御 問4 `(1)〜(4)`

- `(1)` `s^3+41s^2+40s+100K=0` — 一致
- `(2)` `0<K<16.4` — 一致
- `(3)` `TER(s)=s(s+1)(s+40)/(s^3+41s^2+40s+100K)` — 一致
- `(4)` `ev=0.4` — 一致
- 判定: `4 / 4 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf

### R3 二次 機械・制御 問4 `(1)〜(5)`

- `(1)` `G(s)=K/[2s(s+1)(Ts+1)]` — 一致
- `(2)` `W(s)=K/[2Ts^3+2(T+1)s^2+2s+K]` — 一致
- `(3)` `K>1/2` — 一致
- `(4)` `y(t)=e^(-t/2)sin(t/2)` — 一致
- `(5)` `0<K<3` — 一致
- 判定: `5 / 5 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf

## 品質ゲート集計

- 一次: `1 / 1 PASS`
- 二次: `18 / 18 PASS`
- 合計: `19 / 19 PASS`
- 固定5問: `5 / 5 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`

## 判定

完成済みTopic 20教材だけで固定5問・19答案要素を独立再解答でき、候補固定後の公式照合で `19 / 19 PASS`。`EXAM_ALIGNMENT_SPEC.md` の完成後独立試験ゲートを通過した。

次工程はTopic 20最終QA。既存PDF/PPTX、問題、正答、数式、固定EXAM_ALIGNMENTは変更せず、必須成果物・各QA・clean blind記録・SPEC境界・進捗整合のみを最終確認する。