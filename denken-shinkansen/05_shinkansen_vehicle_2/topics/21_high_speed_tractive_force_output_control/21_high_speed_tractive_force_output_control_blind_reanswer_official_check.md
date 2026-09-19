# Topic 21 完成後 clean blind 独立再解答 — 公式照合

更新日: 2026-09-19

判定: `NEEDS_REVISION / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

候補答案は先に `21_high_speed_tractive_force_output_control_blind_reanswer_candidates_clean.md` としてGitHubへ固定した。その後に一般財団法人 電気技術者試験センターの公式解答・標準解答だけを確認した。候補固定後の答案変更は0件。

## 公式照合結果

### H26 一次 機械 問5 `(4),(5)`

- `(4)` 候補: `ヲ` / 公式: `ヲ` — `PASS`
- `(5)` 候補: `ニ` / 公式: `ニ` — `PASS`
- 判定: `2 / 2 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20140906_ch_second_a01.pdf

### H25 一次 機械 問3 `(1)`

- 候補: `ヨ` / 公式: `ヨ` — `PASS`
- 判定: `1 / 1 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf

### R7 二次 機械・制御 問2 `(1)のT1のみ`

- 候補: `181 N·m`
- 公式標準解答: `181 N·m`
- 判定: `1 / 1 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf

### R1 二次 機械・制御 問1 `(4)`

- 候補: `33.2 N·m`
- 公式標準解答: `33.2 N·m`
- 判定: `1 / 1 PASS`
- 公式: https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf

### H26 二次 機械・制御 問1 `(4)`

- 候補: `48.0 N·m`（候補計算 `48.0468...` を3桁化）
- 公式標準解答: `48.1 N·m`（公式掲載中間値 `48.067`）
- 判定: `0 / 1 FAIL`
- 公式: https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf

exact blocker:
- 固定済み候補 `48.0 N·m` と公式標準解答 `48.1 N·m` が不一致。
- 本工程では候補を後付け変更しない。
- 公式標準解答の数値を正本として差異を記録し、原因診断・教材側修正は次工程へ分離する。

## 品質ゲート集計

- 一次: `3 / 3 PASS`
- 二次: `2 / 3 PASS`
- 合計: `5 / 6 PASS`
- 固定5問: `4 / 5 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

## 判定

`EXAM_ALIGNMENT_SPEC.md` の完成後独立試験は、H26二次「機械・制御」問1 `(4)` の公式不一致1要素が残るため未通過。Topic 21を `completed` にしない。

次工程は、この1要素だけの不一致原因を診断し、固定SPECの範囲内で教材側に修正が必要か判定する。候補固定ファイル、固定EXAM_ALIGNMENT、他の5答案要素、既存PDF/PPTX・練習問題は本工程では変更しない。
