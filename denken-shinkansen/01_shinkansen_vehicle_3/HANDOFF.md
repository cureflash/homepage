# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は29/38。01〜29がPASS。次のactive topicは30 `ATC① 新幹線は列車をどう検知する？`。

## 今回進捗
Topic 29 `コンプレッサ・ポンプ・ファン` の完成後独立再解答・最終QAを実施した。完成済み教材だけで固定EXAM_ALIGNMENT 5問を再解答し、公式解答と `5 / 5 PASS`。教材外知識補完、固定範囲外論点追加、未確認実車値追加はいずれも0件。Topic 29を `PASS / COMPLETED` とした。

更新:
- `topics/29_compressor_pump_fan/29_compressor_pump_fan_final_qa.md` — 完成後独立再解答 `5 / 5 PASS`
- `STATUS.md` — `topic_29_completed`、完成数29/38へ更新
- `HANDOFF.md` — 次開始点をTopic 30へ更新

## Topic 29 完成後独立再解答
1. R4下 機械 問11 — `Q=80/3600`、`H=40+0.4`、効率連鎖から `13.14 kW` → `4` — PASS
2. H30 機械 問10 — `9.8×5×10×1.1/0.8=673.75 kW`、100 kW機を切上げ `7台` → `4` — PASS
3. H29 機械 問12 — `Q∝n`、`T∝n^2`、`P=Tω∝n^3` → `4` — PASS
4. H27 機械 問12 — `Q=5/60`、`H=10×1.05`、効率・余裕係数から `11.79 kW` → `5` — PASS
5. H18 機械 問10 — `Q=100/3600`、`H=50+0.5`、効率連鎖から `20.19 kW` → `3` — PASS

結果: `5 / 5 PASS`。

## Topic 29 品質ゲート
- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立解答: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 練習問題独立QA: `15 / 15 PASS`
- 解説PDF・練習PDF表示QA: PASS
- PowerPoint表示QA・overflow・ZIP整合性: PASS
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 最終判定: `PASS / COMPLETED`

## Topic 29 範囲境界
追加していない:
- 圧縮機の断熱・等温・ポリトロープ圧縮仕事
- 冷媒物性、冷凍サイクル、p-h線図、COP詳細
- ポンプのキャビテーション、NPSH、詳細配管設計
- ファンの翼形・騒音・ダクト設計
- 巻上機、エレベータ、はずみ車、減速機
- 未確認の新幹線コンプレッサ・ポンプ・ファン実車値

## 現在の状態
- `current_status`: `topic_29_completed`
- 完成数: 29/38
- 01〜29: PASS
- active topic: 30 `ATC① 新幹線は列車をどう検知する？`

## 次の正確な開始点
Topic 30の制作前EXAM_ALIGNMENTを行う。直近年度から公式過去問を調査し、系列SPEC固定範囲の「レール、軌道回路、車軸短絡、電圧、電流、短絡、リレー、列車検知」に直接対応する問題だけを固定する。件数合わせで固定範囲外の信号伝送、速度照査、論理回路等へ広げない。固定問題を独立解答し、公式解答と照合してから本文制作へ進む。
