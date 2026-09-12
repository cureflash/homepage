# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は22/38。01〜22がPASS。次のactive topicは23 `L0系② 500km/hと周波数制御`。

## 今回進捗
Topic 22 `L0系① リニア同期モータ` の完成後独立過去問再解答を実施し、最終品質ゲートをPASSした。

更新:
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md`
- `STATUS.md`
- `HANDOFF.md`

既存の解説PDF・練習PDF・解説画像PowerPointは内容を変更していない。

## Topic 22 完成後独立再解答
完成教材内の記述・公式だけで解答根拠を組み立て、検証済み5問を再解答した。

1. R7上 機械 問5
   - 教材根拠: 周波数・電圧の大きさ・位相の一致、同期検定器
   - 再解答: 3
   - 公開解答: 3
   - PASS
2. R6上 機械 問5
   - 教材根拠: 制動巻線、かご形誘導電動機と同じ始動原理、界磁巻線の抵抗短絡、直流励磁、同期引込み
   - 再解答: 2
   - 公開解答: 2
   - PASS
3. R5下 機械 問6
   - `f=10×600/120=50 Hz`
   - `Ns=120×50/8=750 min^-1`
   - 再解答: 3
   - 公開解答: 3
   - PASS
4. H25 機械 問3
   - 教材根拠: 一相断線後は単相交番磁界となり、停止状態では正逆の始動トルクが打ち消し合う
   - 誤りは選択肢3
   - 再解答: 3
   - 公開解答: 3
   - PASS
5. H19 機械 問15(a)
   - `Ns=120×60/6=1200 min^-1`
   - `ωs=2π×1200/60=40π≈125.7 rad/s`
   - 再解答: 4
   - 公開解答: 4
   - PASS

結果: 5/5 PASS。教材外知識の補完なし。`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験を通過した。

## Topic 22 成果物
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md`
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_explanation.pdf`
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_practice.pdf`
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_images.pptx`

練習15問は全問五肢択一。基礎4/15=26.7%、本試験標準8/15=53.3%、複合・応用3/15=20.0%。PDF/PPTXの既存Visual QAもPASS済み。

## L0系境界
Topic 22ではJR東海一次資料で確認した次の概念接続まで扱った。
- リニアモータは回転モータを直線状へ展開したもの。
- 車上超電導磁石＝回転子、地上推進コイル＝固定子。
- 推進コイルと車上磁石の吸引・反発で推進する。

実際の極ピッチ、実運転周波数、500 km/h時の具体的周波数計算はTopic 23の範囲としてTopic 22には追加していない。

## QA判定
22: `PASS`。完成数22/38。

## 次の正確な開始点
23 `L0系② 500km/hと周波数制御` の制作前EXAM_ALIGNMENTから開始する。まず電気技術者試験センター公式過去問を直近年度から調査し、系列SPECで既定された周波数、同期速度、磁界、電磁力、電力変換、速度制御の範囲内で、Topic 23単独で完答できる問題を選定する。範囲外知識を足して問題を無理に通さない。
