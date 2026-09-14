# STATUS - 新幹線車両・電験二種

更新日: 2026-09-15

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 6 / 39
- current_status: `topic_06_completed`
- last_completed_topic: `06 0系⑥ 主回路全体の電力・損失・効率`
- active_topic: `07 直流主回路の高出力化`
- next_start: Topic 07の制作前EXAM_ALIGNMENT。公式過去問を直近年度から調査し、二種一次・二次を含む固定対象を確定する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [x] 06 0系⑥ 主回路全体の電力・損失・効率 — PASS
- [ ] 07 直流主回路の高出力化 — 未着手

## Topic 06 最終QA
- 必須成果物: `PASS`
- 固定EXAM_ALIGNMENT: 一次3問＋二次2問、計5問
- 完成後独立再解答: 一次 `15 / 15 PASS`、二次 `7 / 7 PASS`、合計 `22 / 22 PASS`
- 解説PDF: A4縦5ページ、180 dpi全ページ Visual QA `PASS`
- 練習PDF: A4縦3ページ、一次8問＋二次4問、表示・文字抽出QA `PASS`、計算・論理 `12 / 12 PASS`
- PowerPoint: 16:9・4スライド、表示QA・overflow・ZIP整合性 `PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認0系実値追加: `0件`
- 前回FAIL要因だった主source・練習sourceの旧進捗記録不整合: 解消
- 最終判定: `PASS / completed`

## Topic 06 固定範囲
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

範囲外として追加していない:
- サイリスタ位相制御、チョッパ、誘導機、PWM/VVVF、回生・四象限運転、IGBT/SiC、詳細熱モデル
- 未確認の0系固有損失値、冷却容量、編成出力、歯車損失

次工程はTopic 07 `直流主回路の高出力化` の制作前EXAM_ALIGNMENT。