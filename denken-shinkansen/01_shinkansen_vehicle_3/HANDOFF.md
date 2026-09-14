# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は27/38。01〜27がPASS。次のactive topicは28 `空調・電熱`。

## 今回進捗
Topic 27 `補助電源② 車内照明` の完成後独立再解答を実施し、固定EXAM_ALIGNMENT 5問・8小問を完成教材だけで再計算した。公式解答との照合は`8 / 8 PASS`。固定範囲外知識・未確認実車値による補完は0件で、Topic 27を`COMPLETED`とした。

更新:
- `topics/27_cabin_lighting/27_cabin_lighting.md` — 完成後独立再解答・最終判定を追記し`COMPLETED`
- `STATUS.md` — 完成数27/38、Topic 28開始へ更新
- `HANDOFF.md`

## Topic 27 品質ゲート対象
1. R7上 機械 問12 — 4灯の均等光源、全光束→光度、斜入射水平面照度、照度合成 — `4` — PASS
2. R6下 機械 問17(a)(b) — 均等点光源の平均光度、斜入射水平面照度 — `2 / 3` — PASS
3. R6上 機械 問17(a) — 球形均等光源の全光束から直下水平面照度 — `2` — PASS
4. R5下 機械 問17(a)(b) — 2点光源の直下照度・中点照度 — `2 / 3` — PASS
5. H27 機械 問16(a)(b) — LEDの提示配光`I(θ)=I(0)cosθ`、方向光度・直下照度 — `4 / 3` — PASS

制作前独立解答: `8 / 8 PASS`。
完成後独立再解答: `8 / 8 PASS`。

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-14

## Topic 27 完成後独立再解答
完成済み教材に収録した式・条件・解法だけで再計算した。

- R7上 問12: `I=5000/(4π)=397.89 cd`、`r=√50 m`、`cosθ=5/√50`、4灯合計`E≈22.51 lx` → `4`
- R6下 問17(a): `I=3000/(4π)=238.73 cd` → `239 cd` → `2`
- R6下 問17(b): `r=2.5 m`、`cosθ=0.8`、`E≈30.56 lx` → `31 lx` → `3`
- R6上 問17(a): `I=12000/(4π)=954.93 cd`、`E≈106.10 lx` → `2`
- R5下 問17(a): `I=15000/(4π)=1193.66 cd`、`E≈74.60 lx` → `75 lx` → `2`
- R5下 問17(b): 1灯`≈38.20 lx`、2灯`≈76.39 lx` → `3`
- H27 問16(a): `r^2=7.2`、`cosθ=2.4/√7.2`、`I(θ)≈161.0 cd` → `4`
- H27 問16(b): 問題文提示配光式から`I(0)=180 cd`、直下`E=31.25 lx` → `3`

公式解答と全件一致。教材外知識による補完なし。

## Topic 27 成果物
- 解説source: `topics/27_cabin_lighting/27_cabin_lighting.md`
- 解説PDF: `topics/27_cabin_lighting/27_cabin_lighting_explanation.pdf` — A4縦4ページ、表示QA PASS
- 練習source: `topics/27_cabin_lighting/27_cabin_lighting_practice.md`
- 練習PDF: `topics/27_cabin_lighting/27_cabin_lighting_practice.pdf` — A4縦5ページ、15問、表示QA PASS
- PowerPoint: `topics/27_cabin_lighting/27_cabin_lighting_images.pptx` — 16:9・4枚、表示QA・overflow・ZIP整合性PASS

## Topic 27 範囲境界
系列SPEC固定範囲は `LED、光束、光度、照度、lm、cd、lx、照明計算`。

追加していない:
- 輝度、光束発散度
- 色温度、演色性、分光分布
- LEDのpn接合、再結合、蛍光体、半導体材料
- 白熱灯・蛍光灯・放電灯の構造や点灯回路
- JIS推奨照度値の暗記
- 未確認の新幹線車内照明の光束・照度・消費電力・器具数等の実車値

品質ゲート対象外:
- R7下 機械 問17 — 光束発散度が主要求
- R6上 機械 問17(b) — 輝度計算が必要
- R5上 機械 問12 — 光束発散度・輝度を含む

## 現在の状態
- `current_status`: `topic_27_completed`
- 完成数: 27/38
- 01〜27: PASS
- active topic: 28 `空調・電熱`

## 次の正確な開始点
Topic 28 `空調・電熱` の制作前EXAM_ALIGNMENTを行う。系列SPEC固定範囲は `空調、電熱、ジュール熱、熱量、電力、効率`。最初に公式過去問を調査し、固定範囲だけで完結する問題を原則5問以上選定する。保存済み正答に依存せず制作前独立解答し、仕様外論点・未確認実車値を追加しない。

## 直前完了 Topic 27
Topic 27 `補助電源② 車内照明` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。選定5問・8小問は完成後も`8 / 8 PASS`で`COMPLETED`。