# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路`、Topic 02 `0系② 整流回路の波形解析`、Topic 03 `0系③ 直流主電動機の電圧方程式とトルク` は最終QAまでPASS。完成数は `3 / 39`。

現在地は `topic_04_independent_reanswer_complete`。Topic 04 `0系④ タップ制御と加速特性` は制作前EXAM_ALIGNMENT、解説本文、3段階例題、SPEC指定4グラフ、解説PDF、練習問題・完全解説source、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。最終QAのみ未完了。

## Topic 04 成果物
- source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`
- 解説PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_explanation.pdf`
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
- 解説画像PowerPoint: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_images.pptx`
- 完成後独立再解答: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_independent_reanswer.md`
- 解説PDF: A4縦4ページ、全4ページVisual QA PASS
- 練習PDF: A4縦7ページ、全7ページ180 dpi Visual QA PASS
- 練習問題: 一次8問（全問五肢択一）＋二次4問（記述式）、計12問、全問完全解説付き
- 練習問題の計算独立再確認: `12 / 12 PASS`
- 解説画像PowerPoint: 16:9・4スライド、SPEC指定4グラフを収録、全4スライド表示QA・overflow検査 PASS

## 過去問対応
選定公式過去問:
- H28 一次 機械 問1 — 直流電動機の始動、電圧方程式、回転運動方程式、慣性、始動電流過渡
- H28 一次 機械 問5 — 固定範囲(1): 鉄道用直巻電動機と大始動トルク
- H26 一次 機械 問5 — 固定範囲(1)(2): 直流電気車の始動トルクと直巻電動機
- H24 二次 機械・制御 問1 — 固定範囲(1)(2)(4): 電機子抵抗、誘導起電力、速度・トルク条件から必要端子電圧を逆算

完成後独立再解答:
- H28一次問1: `(ト, リ, ヘ, ロ, ニ)` — `5 / 5 PASS`
- H28一次問5: `(1)=チ` — `1 / 1 PASS`
- H26一次問5: `(1)=ロ, (2)=リ` — `2 / 2 PASS`
- H24二次問1: `R_a=0.500 Ω`, `E=188 V`, `V=133 V` — `3 / 3 PASS`
- 合計 `11 / 11 PASS`
- 教材外知識による補完 `0件`
- 固定範囲外論点の追加 `0件`

二種の原則5問以上について、固定範囲へ直接接続できる公式問題として確認できたのは4問。件数合わせのために回生、チョッパ、VVVF、誘導機、き電を混入させない。一次・二次双方は確保している。

## Topic 04 固定内容
- 停止時 `E=0 → I_a=V_a/R_a`
- `V_a=E+I_aR_a`
- `E=k_eΦω`
- `T=k_tΦI_a`
- `J dω/dt=T-T_L`
- 一定界磁・無負荷・電機子インダクタンス無視の簡略始動過渡
- 直巻未飽和域 `Φ∝I_a`、`T∝I_a²` と飽和時の境界
- 速度上昇→逆起電力増加→電流低下→次電圧段への移行という電流制限の一般原理
- 一定磁束局所近似の速度―トルク式
- 所要速度・トルクから必要端子電圧を逆算する二次答案手順
- 電動機トルクから車輪周けん引力への換算
- `m_eq dv/dt=F_t-F_r` と離散時間の簡略加速

## SPEC指定4グラフ
- タップ条件―主回路電圧
- タップ条件―速度トルク特性
- 速度―けん引力
- 時間―速度の簡略加速計算

解説画像PowerPointで4グラフすべて可視化済み。実車特性として描かず、資料値がない箇所は模式図または教材仮定値と明示している。

## 固定境界
本テーマへ追加しない:
- 発電ブレーキ・回生エネルギー解析（Topic 05）
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF・四象限運転（Topic 10以降）
- チョッパ制御
- 未確認の0系固有数値

## 次の正確な開始点
Topic 04の最終QAを行う。必須成果物5点＋独立再解答記録の実在、EXAM_ALIGNMENTの一次・二次対応、独立再解答 `11 / 11 PASS`、PDF/PPTX表示QA記録、未確認実車値・後続Topic論点の混入なしを確認する。全件PASSの場合のみTopic 04を `completed` にし、完成数を `4 / 39` へ進める。

Topic 04はまだ `completed` ではない。完成数は `3 / 39`。
