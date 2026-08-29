# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 9 / 38
- current_status: `topic_09_pass`
- last_completed_topic: `09 300系① 誘導電動機`
- next_topic: `10 300系② VVVF` の制作前EXAM_ALIGNMENTから開始する

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — PASS
- [x] 03 0系① 主変圧器 — PASS
- [x] 04 0系② シリコン整流器 — PASS
- [x] 05 0系③ 速度制御 — PASS
- [x] 06 0系④ 発電ブレーキ — PASS
- [x] 07 200系 サイリスタ制御 — PASS
- [x] 08 100系 直流電動機方式の完成 — PASS
- [x] 09 300系① 誘導電動機 — PASS
- [ ] 10 300系② VVVF — 次の未完了テーマ

## 09 EXAM_ALIGNMENT
公式過去問5問を対象とした。
1. R6上 機械 問3 — 回転磁界、巻線形回転子、スリップリング、電動/発電領域
2. R6上 機械 問4 — V/f制御、同期速度、滑り、回転速度
3. R6上 機械 問15 — 巻線形、低滑り域のトルク、二次抵抗制御・比例推移
4. R5下 機械 問4 — Y-Δ始動、電圧二乗則、始動トルク
5. R5下 機械 問15 — 滑り周波数、インバータ周波数制御

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnetの三相誘導電動機原理・等価回路・特性・運転・速度制御、および電験三種まとめましたの対応過去問解説。参照日2026-08-29。外部本文・図・例題は複製していない。

## 新幹線一次資料
日本車輌製造「JR東海300系新幹線」で300系の270 km/h運転用開発、交流電動機、コンバータ／インバータ制御、アルミ車体約25%軽量化を確認。鉄道総研資料でも300系TDT203台車の誘導電動機適用を確認した。公開確認していない主電動機内部定数・滑り・運転周波数・個別損失は実値化していない。

## 成果物
- `topics/09_300series_induction_motor/09_300series_induction_motor.md`
- `topics/09_300series_induction_motor/09_300series_induction_motor_explanation.pdf` — 4ページ
- `topics/09_300series_induction_motor/09_300series_induction_motor_practice.pdf` — 15問、4ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/09_300series_induction_motor/09_300series_induction_motor_images.pptx` — 4スライド

## QA
- 解説PDF 4ページ・練習PDF 4ページを最終レンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをPDF変換後レンダリングし、可読性・クリップ・重なりなし。
- 練習15/15を独立再計算・再判定。代表値: `1500 min^-1`, `s=0.050`, `f2=1.8 Hz`, `1152 min^-1`, `198 N·m`, `Pc2=2.0 kW`, `Pm=48 kW`, `1146 min^-1`, `1140 min^-1`。

## 公式過去問の独立再解答
保存済み正答を先に見ず、教材だけで再解答した。
- R6上 機械 問3 → `(3)` PASS
- R6上 機械 問4 → `1254 min^-1` → `(3)` PASS
- R6上 機械 問15 → `(a)2,(b)3` PASS
- R5下 機械 問4 → `75 N·m` → `(5)` PASS
- R5下 機械 問15 → `(a)2,(b)1` PASS

5/5で公式解答と一致し、教材外知識を補わず式の選択根拠・適用条件を説明できた。

## QA判定
`09 300系① 誘導電動機`: PASS。新品質基準の完了数へ計上し9/38。

## Web公開
09のsource / explanation / practice / slidesをWebカタログへ追加する。

## 次
MASTER制作順を先頭から確認すると01〜09が新品質基準PASS。次は10 `300系② VVVF` の制作前EXAM_ALIGNMENT。
