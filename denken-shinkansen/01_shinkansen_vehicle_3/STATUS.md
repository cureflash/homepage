# STATUS - 新幹線車両・電験三種

更新日: 2026-09-13

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 22 / 38
- current_status: `topic_22_completed`
- last_completed_topic: `22 L0系① リニア同期モータ`
- active_topic: `23 L0系② 500km/hと周波数制御`
- next_start: Topic 23の制作前EXAM_ALIGNMENT。公式過去問を直近年度から調査し、既定範囲の要求論点を確定する

## 新品質ゲート進捗
- [x] 01〜22 — PASS
- [ ] 23 L0系② 500km/hと周波数制御 — 未着手

## 22 EXAM_ALIGNMENT最終結果
品質ゲート対象は次の5問。

1. R7上 機械 問5 — 同期発電機の並列運転条件、同期検定器
2. R6上 機械 問5 — 回転磁界、同期電動機の自己始動、同期引込み
3. R5下 機械 問6 — 極数・周波数・同期速度
4. H25 機械 問3 — 三相回転磁界、相順、電気角と機械角
5. H19 機械 問15(a) — 同期速度と角速度

制作前独立解答: 5 / 5 PASS。
完成教材だけによる完成後独立再解答: 5 / 5 PASS。
教材外知識の補完: 0件。

完成後再解答の要点:
- R7上問5: 周波数・電圧の大きさ・位相を一致させ、同期検定器で確認 → 3
- R6上問5: 制動巻線、かご形誘導機と同じ始動原理、界磁巻線の抵抗短絡、直流励磁 → 2
- R5下問6: `f=10×600/120=50 Hz`、8極機は `Ns=120×50/8=750 min^-1` → 3
- H25問3: 一相断線後は単相交番磁界となり、停止状態から自力始動できないため選択肢3が誤り → 3
- H19問15(a): 6極60 Hzで `Ns=1200 min^-1`、`ωs=40π≈125.7 rad/s` → 4

## 22 成果物
- source Markdown: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md`
- 解説PDF: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_explanation.pdf`
- 練習PDF: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_practice.pdf`
- 解説画像PowerPoint: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_images.pptx`

解説PDF・練習PDF・PowerPointは既存QA済み成果物を無変更で使用。練習15問は全問五肢択一で、基礎4/15=26.7%、本試験標準8/15=53.3%、複合・応用3/15=20.0%。数値計算・知識問題とも一意解確認済み。

## L0系一次資料・境界
JR東海一次資料で確認済みの範囲だけをTopic 22へ使用。
- リニアモータは通常の回転モータを切り開き直線状に展開したもの。
- 車上超電導磁石＝回転子、地上推進コイル＝固定子。
- 推進コイルのN/S極と車上磁石の吸引・反発で推進する。

実際の極ピッチ、実運転周波数、500 km/h時の具体計算はTopic 23の範囲としてTopic 22へ追加していない。

## 22 QA判定
`PASS`。`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の過去問対応品質ゲートを通過。完成数を22/38へ更新した。

## 次
23 `L0系② 500km/hと周波数制御` の制作前EXAM_ALIGNMENTから開始する。公式過去問を直近年度から調査し、周波数、同期速度、磁界、電磁力、電力変換、速度制御のうち当該テーマだけで完答できる問題を選定する。
