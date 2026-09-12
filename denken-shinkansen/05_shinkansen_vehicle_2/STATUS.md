# STATUS - 新幹線車両・電験二種

更新日: 2026-09-13

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 1 / 39
- current_status: `topic_02_powerpoint_complete`
- last_completed_topic: `01 0系① 主変圧器の等価回路`
- active_topic: `02 0系② 整流回路の波形解析`
- next_start: Topic 02の選定公式過去問5問を、保存済み正答を先に見ず、完成教材だけで独立再解答し結果を記録する。PASS後に最終QAを行う

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [ ] 02 0系② 整流回路の波形解析 — 制作前EXAM_ALIGNMENT・解説本文＋3段階例題・解説PDF・練習問題＋完全解説source・練習PDF・解説画像PowerPoint完了

## Topic 02 現在地
制作前EXAM_ALIGNMENTで一次1問＋二次記述4問の計5問を選定し、要求事項独立検証5/5 PASS。その範囲だけを使って解説本文と3段階例題、解説PDF、練習問題・完全解説source、練習PDF、解説画像PowerPointまで完成した。

解説PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_explanation.pdf`
- A4縦 3ページ
- 全3ページVisual QA PASS

練習PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice.pdf`
- A4縦 8ページ
- 一次試験型8問（全問五肢択一）＋二次試験型4問（記述式）、計12問
- 全問に解答・完全解説を収録
- 二次問題は途中式・前提・単位・理由説明を要求
- 全8ページを200 dpiでレンダリングし、文字欠け・黒四角・重なり・クリッピング・可読性を確認してPASS
- テキスト抽出でも問1〜問12の収録を確認
- 新規の0系実車値・固有回路仕様・Topic 02外論点は追加していない

PowerPoint:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_images.pptx`
- 16:9、4枚
- 単相半波・全波整流、平均値・実効値・リプル、L/C平滑、三相6パルス、制御角α、120°交流側電流、基本波・高調波、P/Q/力率、直流偏磁、二次試験答案手順を図解
- 図は全て自作模式図、外部画像なし
- 全4枚Visual QA PASS
- `slides_test.py` overflow検査PASS
- 未確認の0系実車値、インバータ・チョッパ・速度制御等のTopic 02外論点は追加していない

完成教材だけによる選定公式過去問5問の独立再解答、最終QAは未実施。完成数は `1 / 39` のまま。

## Topic 02 制作前EXAM_ALIGNMENT
公式過去問は一次1問＋二次記述4問の計5問を選定し、制作前の要求事項独立検証は5/5 PASS。

- R7 二次 機械・制御 問3 — 単相ダイオードブリッジ、L/C平滑、平均値、負荷電力
- H30 二次 機械・制御 問3 — 三相サイリスタ変換器、平均直流電圧、交流側基本波、有効・無効電力
- H29 二次 機械・制御 問3 — 単相ダイオード整流、平均値・実効値、C/L平滑
- H27 一次 機械 問2 — 単相半波整流、変圧器一次電流、交流条件、直流偏磁
- H21 二次 機械・制御 問3 — 三相サイリスタ変換器、制御角、平均直流電圧、電力方向

一次・二次合計5問以上、二次記述式を含める品質ゲートを満たす。インバータ・チョッパ等のTopic 02外の問題は選定していない。

## Topic 02 練習問題対応
一次8問:
1. 単相全波整流の平均値・実効値・抵抗負荷電力
2. 単相半波整流の平均値・実効値
3. L/Cの周期定常条件
4. 三相6パルスブリッジの平均直流電圧
5. 三相サイリスタの制御角と平均直流電圧
6. 120°方形波電流の全実効値・基本波・高調波
7. 基本波変位力率と総合力率
8. 直流分と変圧器直流偏磁

二次4問:
1. 無平滑・大C・大Lの負荷電力比較
2. 三相サイリスタ変換器の `Vdc`, `I1`, `P`, `Q1`, `I`, `λ`
3. 制御角・直流電圧極性・電力方向
4. 半波電流の1周期平均と変圧器直流偏磁の判定手順

source:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice_source.md`

## Topic 01 最終結果
制作前EXAM_ALIGNMENTで選定した公式過去問は一次1問＋二次記述5問の計6問。

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

完成教材だけによる完成後独立再解答は6/6 PASS。公式標準解答と全問一致し、教材外知識の補完は0件。

## 実車値・境界
Topic 01で実値として扱うのは一次資料確認済みの25 kV・60 Hz・1650 kVA・低圧タップ切換・25段のみ。`1650 kVA / 25 kV = 66 A` は計算値であり、実測電流ではない。

Topic 02では新たな0系実車値・未確認回路仕様を追加していない。三相サイリスタ変換器は二種過去問の一般論点として扱い、0系固有仕様とはしていない。

## QA判定
Topic 01: `PASS`。

Topic 02: 制作前品質ゲートPASS。解説PDF全3ページ、練習PDF全8ページ、PowerPoint全4枚Visual QA PASS。PowerPoint overflow検査PASS。テーマ自体は未完了であり、`completed` には数えない。

## 次
Topic 02 `0系② 整流回路の波形解析` の選定公式過去問5問を、完成教材だけで独立再解答する。保存済み正答を先に見ず、解法根拠・途中式・単位を確認して結果を記録する。PASS後に最終QAへ進む。
