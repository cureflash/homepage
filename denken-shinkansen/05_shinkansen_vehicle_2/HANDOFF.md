# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜05は最終QAまで `PASS`。完成数は `5 / 39`。

現在地は `topic_05_completed`。次のactive topicは Topic 06 `0系⑥ 主回路全体の電力・損失・効率`。

## Topic 05 完了記録
前回最終QAはsource内の旧進捗記録不整合だけを理由に `NEEDS_REVISION` だった。再QA前工程で旧記録を同期し、今回の最終QA再実施で全件PASSを確認した。

- final QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_final_qa.md` — `PASS`
- source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`
- 解説PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation.pdf`
- 練習source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_source.md`
- 練習PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice.pdf`
- PowerPoint: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images.pptx`
- 独立再解答: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_independent_reanswer.md` — `5 / 5 PASS`
- 練習問題: 一次8問＋二次記述4問、計算・論理 `12 / 12 PASS`
- 解説PDF: 全5ページ180 dpi Visual QA PASS
- 練習PDF: 全3ページ180 dpi Visual QA PASS
- PowerPoint: 全5スライド Visual QA・overflow検査・ZIP整合性 PASS
- 教材外知識補完: 0件
- 固定範囲外論点への依存: 0件
- 未確認0系実値の追加: 0件

## Topic 05 EXAM_ALIGNMENT
固定範囲へ直接または必須計算基礎として接続した公式過去問:

- R5 一次 機械 問2
  - `(2)=ホ`（制動）
  - `(3)=チ`（電気エネルギー）
  - 他列車で消費できない場合の車上抵抗消費
- H24 二次 機械・制御 問1
  - `(1) R_a=0.500 Ω`
  - `(2) E=187.5 V ≒ 188 V`

二種一次・二次合計の「原則5問以上」は調査したが、Topic 05固定範囲を守ってゲート化できた公式問題は2問。件数合わせで回生、誘導機制動、可逆チョッパ、VVVF等を追加していない。

## Topic 06 固定範囲
SPECのTopic 06は `0系⑥ 主回路全体の電力・損失・効率`。

扱う内容:
- 主変圧器損失
- 整流器損失
- 主電動機損失
- 機械損
- 入力電力
- 軸出力
- 総合効率
- 発熱
- 冷却

指定計算・グラフ:
- 負荷率―総合効率
- 機器別損失内訳
- 入力電力―車輪側出力
- 条件変更時の損失比較

## 次の正確な開始点
Topic 06の制作前EXAM_ALIGNMENTを実施する。

1. 電気技術者試験センター公式の二種一次・二次過去問を直近年度から確認する。
2. 上記固定範囲へ直接対応する問題だけを選定する。
3. 二次対象論点で該当記述問題が確認できる場合は最低1問含める。
4. 原則5問以上を調査するが、固定範囲外の問題を件数合わせで採用しない。
5. 本文・PDF等はEXAM_ALIGNMENT確定前に作らない。