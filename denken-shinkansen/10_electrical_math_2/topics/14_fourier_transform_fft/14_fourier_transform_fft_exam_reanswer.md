# Topic 14 完成後独立再解答

実施日: 2026-09-17

対象: `14 フーリエ変換・FFT`

状態: `ANSWER_LOCKED_BEFORE_REVIEW / VERIFICATION_PENDING`

## ブラインド条件

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、`STATUS.md`、`14_fourier_transform_fft_blind_reanswer_gate.md` を先に確認した。

候補解答確定前には、Topic 14主sourceの保存済み正答、HANDOFF内のTopic 14正答記録、制作前独立再解答記録、公式解答ページを参照していない。

公式問題文は一般財団法人 電気技術者試験センター公表の令和3年度第二種電気主任技術者一次試験「機械」問8から取得した。

公式問題PDF:
`https://www.shiken.or.jp/chief/upload/20210821_ch_second_q03.pdf`

## 固定対象

- R3 一次「機械」問8 (1)
- 合計 `1問・1答案要素`

## 独立再解答（照合前ロック）

問8 (1)の文意は、入力信号を完全に復元するため、入力信号に含まれる最高周波数成分の何倍を超えるサンプリングレートが必要か、である。

標本化定理では、最高周波数を `f_max` とするとサンプリング周波数 `f_s` は

`f_s > 2 f_max`

を満たす必要がある。

したがって空欄 (1) は `2`。

解答群では `（チ）2`。

候補解答: `2（チ）`

根拠: 標本化定理のナイキスト条件。

教材外のADC回路方式、量子化計算、Topic 15以降の内容は使用していない。

## ロック

`ANSWER_LOCKED_BEFORE_REVIEW`

この記録をGitHubへ保存した後にのみ、主source・HANDOFFのTopic 14記録・制作前独立再解答記録・公式解答を参照して照合する。

現時点では完成後独立再解答のPASSとして数えない。
