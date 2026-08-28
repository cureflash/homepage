# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-29

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは`01_shinkansen_vehicle_3`。新品質基準完了数は5/38。

## 今回完了
`05 0系③ 速度制御` を新品質基準でPASS。

成果物:
- `topics/05_0series_speed_control/05_0series_speed_control.md`
- `topics/05_0series_speed_control/05_0series_speed_control_explanation.pdf`
- `topics/05_0series_speed_control/05_0series_speed_control_practice.pdf`
- `topics/05_0series_speed_control/05_0series_speed_control_images.pptx`

## EXAM_ALIGNMENT
公式過去問5問: R6上機械問2、R4上機械問1、R1機械問1、H28機械問1、H25機械問1。
参照: 電気技術者試験センター公式、e-sysnet「直流電動機の始動と速度制御」、電験三種まとめました該当解説、TAC公開過去問。参照日2026-08-29。

教材範囲: `V=E+IaRa`, `E=Keφn`, `T=KtφIa`, `n∝(V-IaRa)/φ`、定トルク条件、電圧/抵抗/界磁制御、始動抵抗、逆転、回生、直巻未飽和域`T∝Ia^2`。

## 成果物・検証
解説PDF3ページ。練習14問（基礎4、標準7、応用3、五肢択一10）。PowerPoint2スライド。全PDF/PPTXをレンダリングし、クリップ、重なり、文字化けなし。練習14問を独立再計算しPASS。

## 公式過去問独立再解答
- R6上問2: 840min^-1 → (2) PASS
- R4上問1: 電機子/電圧/電機子/回生 → (4) PASS
- R1問1: 800min^-1 → (4) PASS
- H28問1: 1750min^-1 → (4) PASS
- H25問1: 誤り(3)、直巻未飽和域`T∝Ia^2` → PASS

5/5で公式解答と一致し、教材だけで条件判断・公式選択・途中式・選択肢照合まで再現。

## 0系実値の扱い
交流25kV受電→主変圧器→シリコン整流→直流主電動機という構成と、タップ制御を電圧制御の実例として扱う。タップ段数・内部電圧・電機子抵抗等の未確認内部値は真値化していない。

## QA判定
05: PASS。Webカタログへ公開対象。

## 次の正確な開始点
`06 0系④ 発電ブレーキ` の制作前EXAM_ALIGNMENT。公式過去問から発電機作用、発電ブレーキ/回生との差、制動抵抗、ジュール熱、運動エネルギー、電力・エネルギー変換に対応する三種問題を原則5問以上選ぶ。
