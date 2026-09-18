# Topic 16 完成後blind独立再解答

更新日: 2026-09-19

状態: `blind_reanswer_passed / FINAL_QA_PENDING`

固定EXAM_ALIGNMENT 6問・6答案要素について、改訂済み教材と公式問題文から答案を再導出し、公式解答との照合前に commit `a6d6452528cf03e9a055d9410aff8c33c3503dd6` で答案を固定した。その後、電気技術者試験センターの公式解答と照合した。

問題正本:
- R7上 機械: https://www.shiken.or.jp/chief/upload/20250831_ch_third_q03.pdf
- R5下 機械: https://www.shiken.or.jp/chief/upload/20240324_ch_third_q03.pdf
- R4上 機械: https://www.shiken.or.jp/chief/upload/20220821_ch_third_q03.pdf
- H28 機械: https://www.shiken.or.jp/chief/upload/20160904_ch_third_q03.pdf
- H26 機械: https://www.shiken.or.jp/chief/upload/20140907_ch_third_q03.pdf

公式解答正本:
- R7上: https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf
- R5下: https://www.shiken.or.jp/chief/upload/20240324_ch_third_a01.pdf
- R4上: https://www.shiken.or.jp/chief/upload/20220821_ch_third_a01.pdf
- H28: https://www.shiken.or.jp/chief/upload/20160904_ch_third_a01.pdf
- H26: https://www.shiken.or.jp/chief/upload/20140907_ch_third_a01.pdf

## 再実施答案と公式照合

| 年度・期 | 科目・問 | 固定答案 | 公式解答 | 判定 | 改訂済み教材だけでの根拠 |
|---|---|---:|---:|---|---|
| R7上 | 機械 問5 | (3) | (3) | PASS | 並列投入では周波数・電圧の大きさ・位相を一致させ、同期状態は同期検定器で確認する。 |
| R5下 | 機械 問5 | (3) | (3) | PASS | 遅れ力率なので `I` は `V` より遅れる。`jXsI` は `I` より90°進み、`V = E + jXsI` だから `E` の終点から `V` の終点へ `jXsI` が向く候補だけを残す。候補(3)がこの尾→頭接続を満たす。 |
| R5下 | 機械 問6 | (3) | (3) | PASS | 10極・600 min^-1 から `f = PN/120 = 50 Hz`。同一系統の8極機は `N = 120f/P = 750 min^-1`。 |
| R4上 | 機械 問4 | (2) | (2) | PASS | 起電力の大きさは界磁電流、位相は原動機回転速度で調整し、同期検定器で確認する。起電力差は無効横流を生む。 |
| H28 | 機械 問5 | (2) | (2) | PASS | V曲線は横軸=界磁電流、縦軸=電機子電流。破線は力率1、低励磁側は遅れ、過励磁側は進み。 |
| H26 | 機械 問5 | (1) | (1) | PASS | 力率1では交差磁化。図1ではN極右側で電機子磁束が界磁磁束を弱める。遅れ力率0は減磁なので図2A、等価回路ではリアクタンスとして扱う。 |

公式解答一致: `6 / 6 PASS`
教材内根拠へ戻せる: `6 / 6 PASS`
固定範囲外知識による答案補完: `0件`
固定EXAM_ALIGNMENT変更: `0件`

## 旧版再解答履歴

2026-09-18の旧版教材による再解答は `5 / 6 PASS / NEEDS_REVISION`。R5下 機械 問5のみ、`V = E + jXsI` と `jXsI` が `I` より90°進む関係までは判断できたが、選択肢図で `jXsI` の始点・終点を逆に読んだ。

このFAILを受け、固定範囲・固定EXAM_ALIGNMENTを変更せず、解説source・練習source・解説PDF・練習PDF・PowerPointへ「`E` の終点 → `V` の終点 = `jXsI`」の尾→頭判定を補強した。今回の再実施ではR5下 機械 問5を含む6問すべて公式解答と一致した。

## 品質ゲート判定

完成後blind独立再解答ゲート: `PASS`。

Topic 16の最終completed判定は、必須成果物・表示QA・進捗記録整合・固定範囲境界をまとめて確認する最終QA再判定後に行う。

## 次工程

Topic 16の最終QA再判定を実施する。解説source / 解説PDF / 練習source / 練習PDF / PowerPoint / 各QA記録 / 本再解答記録 / STATUS / HANDOFF の整合と、固定範囲外追加0件を確認する。
