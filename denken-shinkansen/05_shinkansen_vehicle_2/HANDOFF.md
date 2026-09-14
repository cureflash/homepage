# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路`、Topic 02 `0系② 整流回路の波形解析`、Topic 03 `0系③ 直流主電動機の電圧方程式とトルク`、Topic 04 `0系④ タップ制御と加速特性` は最終QAまでPASS。完成数は `4 / 39`。

現在地は `topic_05_final_qa_needs_revision`。active topicはTopic 05 `0系⑤ 発電ブレーキのエネルギー解析`。

## Topic 05 成果物
- source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`
- 解説PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation.pdf`
  - A4縦5ページ
  - 基礎・本試験標準・複合の3段階例題
  - SPEC指定4グラフ
  - 全5ページ180 dpi Visual QA PASS
- 解説PDF QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation_qa.md`
- 練習問題source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_source.md`
  - 一次8問、すべて五肢択一
  - 二次記述4問
  - 全12問に途中式・条件・単位・検算を含む完全解説
  - 計算・論理QA `12 / 12 PASS`
- 練習PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice.pdf`
  - A4縦3ページ
  - 一次8問＋二次記述4問
  - 全問に正答・完全解説
  - 全3ページ180 dpi Visual QA PASS
- 練習PDF QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_qa.md`
- 解説画像PowerPoint: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images.pptx`
  - 16:9、5スライド
  - SPEC指定4グラフを収録
  - R5一次・H24二次の固定範囲への解法接続を収録
  - 全5スライドVisual QA・overflow検査・ZIP整合性 PASS
- PowerPoint QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images_qa.md`
- 完成後独立再解答: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_independent_reanswer.md`
  - 固定範囲5チェックポイント `5 / 5 PASS`
  - R5一次 `(2)=ホ`, `(3)=チ` と車上抵抗消費の説明を教材だけで再構築
  - H24二次 `(1)(2)` は `R_a=0.500 Ω`, `E=187.5 V ≒ 188 V` を途中式付きで再導出
  - 教材外知識補完・固定範囲外論点・未確認0系実値の追加はいずれも0件
- 最終QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_final_qa.md`
  - 判定: `NEEDS_REVISION`
  - 成果物存在、EXAM_ALIGNMENT、独立再解答、範囲境界、表示QAはPASS
  - source内の旧進捗記録が実在成果物と不整合

## Topic 05 EXAM_ALIGNMENT
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

固定範囲へ直接または固定範囲の必須計算基礎として接続し、後続範囲を混ぜずにゲート化する公式過去問は次の2問。

- R5 一次 機械 問2
  - 固定範囲: `(2)(3)` と末尾の車上抵抗消費の記述
  - 公式解答: `(2)=ホ`（制動）, `(3)=チ`（電気エネルギー）
  - `(1)`誘導電動機、`(4)`バッテリー、`(5)`回生ブレーキは除外
- H24 二次 機械・制御 問1
  - 固定範囲の前提計算: `(1)(2)`
  - 公式標準解答: `R_a=0.500 Ω`, `E=187.5 V ≒ 188 V`
  - `(3)〜(6)`の可逆チョッパ固有計算は除外

二種の一次・二次合計「原則5問以上」は維持するが、固定範囲を守って公式公開問題からゲート化できたのは2問。件数合わせのためにR6の誘導機回生、H28のチョッパ・回生、H23二次の誘導機制動、H24二次問1後半の可逆チョッパ等を追加しない。

## Topic 05 練習問題・PDF
一次8問＋二次4問、計12問を固定範囲だけで作成し、PDFへ収録した。

主な計算結果:
- 一次2: `150 V`
- 一次3: `100 A`
- 一次4: `P_g=18.0 kW`, `P_R=14.0 kW`, `P_Cu=4.0 kW`
- 一次6: `Q_R=25.6 MJ`
- 一次7: `τ_b=250 s`, `t_1/2≈173.3 s`
- 一次8: `R_a=0.500 Ω`, `E=187.5 V`
- 二次1: `E=180 V`, `I_b=120 A`, `T_b=216 N·m`, `P_g=21.6 kW`
- 二次2: `R_a=0.400 Ω`, `E=225 V`
- 二次3: `ΔK=43.2 MJ`, `Q_R=34.56 MJ`
- 二次4: `τ_b=112.5 s`, `t≈123.6 s`, `ΔK=58.32 MJ`, `Q_R=48.6 MJ`

全12問を再計算し `12 / 12 PASS`。数値はH24固定範囲の値を明示して使う箇所以外、すべて教材用仮定値。0系実値として扱っていない。練習PDFは全3ページ180 dpi表示QA PASS。

## Topic 05 PowerPoint
5スライドで、既存source・PDFの範囲だけを可視化した。

- 発電制動のエネルギーフロー
- H24二次 `(1)(2)` の `R_a`・`E` 計算鎖
- 速度―制動力
- 速度―制動電力
- 時間―速度
- 制動抵抗の累積発熱量
- 二次記述答案の計算鎖・検算

グラフはsource複合例題の教材用仮定値を使用。全5スライドVisual QA・overflow検査・ZIP整合性 PASS。

## Topic 05 完成後独立再解答
完成教材だけで固定範囲を再解答し、公式解答・標準解答と照合した。

- R5 一次 機械 問2
  - `(2)=ホ`（制動）— PASS
  - `(3)=チ`（電気エネルギー）— PASS
  - 他列車で消費できない場合の車上抵抗消費 — PASS
- H24 二次 機械・制御 問1
  - `(1) R_a=0.500 Ω` — PASS
  - `(2) E=187.5 V ≒ 188 V` — PASS

合計 `5 / 5 PASS`。教材外知識による補完なし。可逆チョッパ、回生、誘導機制動等の固定範囲外論点には依存していない。

## Topic 05 最終QA結果
最終QAは `NEEDS_REVISION`。

内容・過去問対応・独立再解答・表示QAではなく、正本内の進捗記録不整合が理由。

修正対象は次の2ファイルのみ。

1. `05_0series_dynamic_brake_energy.md`
   - 「解説PDF、練習問題、練習PDF、解説画像PowerPoint、完成後独立再解答、最終QAは未実施」を現在地へ同期
   - `完成後独立再解答: 未実施` を実績 `5 / 5 PASS` へ同期
   - 「次は解説PDFを作成」を現在地へ同期
2. `05_0series_dynamic_brake_energy_practice_source.md`
   - 「PDF自体は次工程」を、練習PDF作成・QA済みの状態へ同期

数式、過去問選定、問題、解説、PDF/PPTXの内容は変更しない。

## Topic 05 固定境界
追加しない:
- 回生電力を架線へ戻す回路・回生失効・四象限運転
- 可逆チョッパのスイッチング状態・通流率・昇圧動作
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF（Topic 10以降）
- 未確認の0系固有数値

## 次の正確な開始点
Topic 05のsource進捗記録不整合を修正する。

内容・数式・過去問選定は変えず、`05_0series_dynamic_brake_energy.md` と `05_0series_dynamic_brake_energy_practice_source.md` の旧進捗記録だけを現在地へ同期する。同期後に最終QAを再実施する。

## Topic 04 完了記録
- 最終QA: `PASS`
- final QA record: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_final_qa.md`
- source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`
- 解説PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_explanation.pdf`
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
- 解説画像PowerPoint: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_images.pptx`
- 完成後独立再解答: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_independent_reanswer.md`

Topic 04完成後独立再解答は固定範囲11小問で `11 / 11 PASS`。教材外知識による補完、固定範囲外論点、未確認0系実値の追加はいずれも0件。
