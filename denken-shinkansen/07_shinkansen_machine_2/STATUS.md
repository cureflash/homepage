# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-20

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `21 / 22`
- current_status: `topic_22_explanation_source_complete / IN_PROGRESS`
- last_completed_topic: `21 空転した車輪を再粘着させる`
- active_topic: `22 東京→新大阪を主回路＋走行制御でシミュレーション`
- next_start: Topic 22 総合シミュレーション計算プログラム・CSV・指定6グラフ・数値QA

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / completed`
- [x] Topic 19 最終QA `PASS / completed`
- [x] Topic 20 最終QA `PASS / completed`
- [x] Topic 21 最終QA `PASS / completed`
- [ ] Topic 22

各完了テーマの固定EXAM_ALIGNMENT、成果物QA、独立再解答、最終QAの詳細は各 `topics/<topic>/` 配下のsource・QA記録を正本とする。

## Topic 21 最終状態
- `topics/21_readhesion_control/21_readhesion_control.md`
- `topics/21_readhesion_control/21_readhesion_control_final_qa.md`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- 完成後独立再解答: `14 / 14 PASS`
- 独立再解答記録QA: `8 / 8 PASS`
- 成果物QA・進捗整合: `PASS`
- 判定: `PASS / topic_21_final_qa_pass / completed`

## Topic 22 固定範囲
系列 `SPEC.md` の Topic 22 で指定された内容だけを扱う。

主題:
- 電験二種「機械・制御」の総合として、主回路・主電動機・走行系・速度制御を一つの簡略モデルへ統合する。

基本構成:
`架線25kV → 主変圧器 → PWMコンバータ → DCリンク → VVVFインバータ → 誘導電動機 → 歯車 → 車輪 → 列車 → 速度フィードバック`

入力:
- 架線電圧
- 変圧器定数
- モーター定数
- 極数
- インバータ周波数
- 車輪径
- 歯車比
- 車両質量
- 走行抵抗
- PI/PIDゲイン

出力:
- 主電動機電流
- トルク
- 出力
- 車輪速度
- 列車速度
- 加速度
- 消費電力
- 回生電力

グラフ:
- 時間―速度
- 時間―加速度
- 時間―電流
- 時間―トルク
- 時間―電力
- 時間―回生電力

境界:
- Topics 01〜21は既習事項として必要な範囲だけ統合する。
- 実車・実路線値は一次資料等で確認できた値だけを実値とし、計算値・仮定値を区別する。
- 東京―新大阪の実速度曲線、勾配、区間距離、実車の変圧器定数・モーター定数・PI/PIDゲイン等は固定していない。
- 系列SPECにない新規制御方式・車両仕様は追加しない。

## Topic 22 固定EXAM_ALIGNMENT
`topics/22_integrated_route_simulation/22_integrated_route_simulation.md`

一次4問＋二次2問、計6問・16答案要素。

- R08 一次 機械 問3 (1)〜(3) — 3答案要素
- R07 一次 機械 問2 (1) — 1答案要素
- R07 一次 機械 問4 (4),(5) — 2答案要素
- R06 一次 機械 問2 (1),(2) — 2答案要素
- R07 二次 機械・制御 問2 (1) — 2答案要素
- R07 二次 機械・制御 問4 (1)〜(5) — 6答案要素

制作前品質ゲート:
- 公式過去問5問以上: `6問 / PASS`
- 一次・二次を含む: `一次4問＋二次2問 / PASS`
- 二次記述式を含む: `2問 / PASS`
- 2026年度最新一次問題を含む: `PASS`
- 2026-09-20時点の最新公表二次問題を含む: `PASS`
- 固定16答案要素を教材節へ割当: `16 / 16 ASSIGNED`
- 参考教材2系統以上: `e-sysnet＋電験王 / PASS`
- 制作前sourceへの固定過去問個別正答保存: `0件 / PASS`
- 一次資料未確認の実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 独立再解答: `NOT_RUN`

## Topic 22 解説source
- 状態: `PASS / topic_22_explanation_source_complete / IN_PROGRESS`
- 固定答案要素本文収録: `16 / 16 COVERED`
- 系列SPEC入力: `10 / 10 COVERED`
- 系列SPEC出力: `8 / 8 COVERED`
- 指定グラフ: `6 / 6 COVERED`
- 実値・計算値・仮定値の区別: `PASS`
- 未確認実路線・実車値の真値化: `0件 / PASS`
- 固定過去問の個別正答記号・最終数値保存: `0件 / PASS`
- 独立再解答: `NOT_RUN`

## 今回進めた内容
Topic 22の解説source本文を完成させた。変圧器損失・効率、PWM/DCリンク/VVVF、誘導機の同期速度・滑り・等価回路・二次入力・トルク、歯車・車輪・走行力学、PI/PID・閉ループ応答、力行・回生を一つの計算系列へ接続した。東京―新大阪の実運転曲線や未確認実機定数は採用せず、総合シミュレーション条件は教材用仮定値として分離した。

完成数は `21 / 22` のまま。

## 次工程
Topic 22 総合シミュレーション計算プログラム・CSV・指定6グラフ・数値QA。解説sourceで固定した式、符号規約、仮定値だけを使い、系列SPECの8出力と6グラフを再現可能な形で生成する。
