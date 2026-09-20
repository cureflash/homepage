# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-20

## 現在地
- Topic 01〜21: 最終QA `PASS / completed`
- 完成数: `21 / 22`
- active topic: `22 東京→新大阪を主回路＋走行制御でシミュレーション`
- current status: `topic_22_exam_alignment_complete / IN_PROGRESS`
- 次工程: Topic 22 解説source本文

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

過去テーマの詳細な固定EXAM_ALIGNMENT、成果物QA、独立再解答、最終QA記録は各 `topics/<topic>/` 配下を正本とする。

## Topic 21 完了確認
- `topics/21_readhesion_control/21_readhesion_control_final_qa.md`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- 完成後独立再解答: `14 / 14 PASS`
- 記録QA: `8 / 8 PASS`
- 状態: `PASS / topic_21_final_qa_pass / completed`

## Topic 22 固定範囲
系列 `SPEC.md` の Topic 22 のみ。

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
- Topics 01〜21は必要な既習事項だけ統合する。
- 実車・実路線値は一次資料等で確認できた値だけを実値とし、計算値・仮定値を分離する。
- 現時点では東京―新大阪の実速度曲線、勾配、区間距離、実車の変圧器定数・モーター定数・PI/PIDゲイン等を固定していない。
- 系列SPEC外の新規制御方式・車両仕様は追加しない。

## Topic 22 制作前EXAM_ALIGNMENT
- source: `topics/22_integrated_route_simulation/22_integrated_route_simulation.md`
- 状態: `PASS / topic_22_exam_alignment_complete / IN_PROGRESS`

固定公式過去問:
- R08 一次 機械 問3 (1)〜(3) — 3答案要素
- R07 一次 機械 問2 (1) — 1答案要素
- R07 一次 機械 問4 (4),(5) — 2答案要素
- R06 一次 機械 問2 (1),(2) — 2答案要素
- R07 二次 機械・制御 問2 (1) — 2答案要素
- R07 二次 機械・制御 問4 (1)〜(5) — 6答案要素

品質ゲート:
- 一次4問＋二次2問、計6問: `PASS`
- 二次記述式2問: `PASS`
- 令和8年度最新一次を含む: `PASS`
- 2026-09-20時点の最新公表二次（令和7年度）を含む: `PASS`
- 固定16答案要素を教材節へ割当: `16 / 16 ASSIGNED`
- 参考教材2系統以上（e-sysnet＋電験王）: `PASS`
- 制作前sourceへの固定問題個別正答保存: `0件 / PASS`
- 一次資料未確認の実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 独立再解答: `NOT_RUN`

## 次工程
Topic 22 解説source本文。固定16答案要素をすべて本文へ接続し、系列SPECで指定された入出力・時間系列6グラフ・再現可能な総合シミュレーション条件を作る。個別正答は完成後の独立再解答まで保存しない。
