# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路`、Topic 02 `0系② 整流回路の波形解析`、Topic 03 `0系③ 直流主電動機の電圧方程式とトルク`、Topic 04 `0系④ タップ制御と加速特性` は最終QAまでPASS。完成数は `4 / 39`。

現在地は `topic_04_completed`。次のactive topicはTopic 05 `0系⑤ 発電ブレーキのエネルギー解析`。

## Topic 04 完了記録
- 最終QA: `PASS`
- final QA record: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_final_qa.md`
- source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`
- 解説PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_explanation.pdf`
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
- 解説画像PowerPoint: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_images.pptx`
- 完成後独立再解答: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_independent_reanswer.md`

表示QA記録:
- 解説PDF: A4縦4ページ、全4ページVisual QA PASS
- 練習PDF: A4縦7ページ、全7ページ180 dpi Visual QA PASS
- PowerPoint: 16:9・4スライド、全4スライドVisual QA PASS、overflow検査 PASS

練習問題:
- 一次8問（全問五肢択一）
- 二次4問（記述式）
- 計12問、全問完全解説付き
- 計算独立再確認 `12 / 12 PASS`

## Topic 04 過去問対応
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
- 未確認0系実値の追加 `0件`

二種の原則5問以上について、固定範囲へ直接接続できる公式問題として確認できたのは4問。件数合わせのために回生、チョッパ、VVVF、誘導機、き電を混入させず、一次・二次双方を確保している。

## Topic 04 固定境界確認
追加していない:
- 発電ブレーキ・回生エネルギー解析（Topic 05）
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF・四象限運転（Topic 10以降）
- チョッパ制御
- 未確認の0系固有数値

## 次の正確な開始点
Topic 05 `0系⑤ 発電ブレーキのエネルギー解析` の制作前EXAM_ALIGNMENTを行う。

系列SPECの固定範囲:
- 発電機運転
- 発電電圧
- 制動電流
- 制動抵抗
- 制動電力
- 制動トルク
- 運動エネルギー
- 発熱量
- 速度低下

指定計算・グラフ:
- 速度―制動力
- 速度―制動電力
- 時間―速度
- 制動抵抗の発熱量

開始時は電気技術者試験センターの二種一次・二次公式過去問を直近年度から調査し、上記固定範囲へ直接接続する問題だけを選定する。二次対象論点で直接対応する記述問題が確認できる場合は最低1問を含める。件数合わせのためにTopic 06以降の総合効率、サイリスタ位相制御、誘導機、VVVF、回生・四象限運転等を混入させない。
