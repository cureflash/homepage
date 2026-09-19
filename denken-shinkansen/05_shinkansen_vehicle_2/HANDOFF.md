# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

現在地は `topic_21_h26_torque_discrepancy_diagnosed`。active topic は Topic 21 `高速域の速度・けん引力・出力制御`。

## 今回実施

H26二次「機械・制御」問1 `(4)` の固定候補 `48.0 N·m` と公式標準解答 `48.1 N·m` の不一致原因だけを診断した。

正本確認:
- 公式問題: https://www.shiken.or.jp/chief/upload/20141123_ch_second_q02.pdf
- 公式標準解答: https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf

独立再計算:
- `I2'=22.4308861637 A`
- 高精度 `π` では `TL=48.0467752730 N·m → 48.0 N·m`
- 公式標準解答は `I2'=22.430 A` と同じトルク式を掲載し、`48.067 → 48.1 N·m`
- 公式掲載値 `I2'=22.430 A` と `π=3.14` を使うと `48.067347... N·m` となり、公式掲載中間値 `48.067` を再現する

原因診断:
- 教材の式誤り: `なし`
- 相電圧換算誤り: `なし`
- 極数/極対数誤り: `なし`
- すべり・機械出力・回転速度処理の誤り: `なし`
- 固定候補計算誤り: `なし`
- 不一致原因: `公式標準解答が当該計算でπ=3.14相当の数値処理を採用したことによる丸め差`

問題冊子の確認範囲では `π=3.14` の明示指定はない。したがって一般公式や候補固定記録を改変せず、H26二次 問1(4) 固有の数値処理差だけを教材へ注記するのが最小修正となる。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_h26_q1_4_discrepancy_diagnosis.md`

## 品質ゲート状態

- clean blind公式照合: `5 / 6 PASS`
- H26二次 問1(4): `原因診断完了 / 教材注記待ち`
- 候補答案変更: `0件`
- 他5答案要素変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 練習問題・正答変更: `0件`
- PDF/PPTX変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21: まだ `completed` にしない

## 次の安全な工程

Topic 21解説sourceへ「H26二次 問1(4) は公式標準解答が `π=3.14` 相当で `48.1 N·m`、高精度πでは `48.0 N·m`」という過去問固有注記だけを追加する。一般式 `P=Tω`、`ω=2πN/60`、候補固定ファイル、他5答案要素、固定EXAM_ALIGNMENT、SPEC範囲は変更しない。注記後に派生成果物へ再同期すべき範囲を判定する。
