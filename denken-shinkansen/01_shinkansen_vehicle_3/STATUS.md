# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 10 / 38
- current_status: `topic_10_pass`
- last_completed_topic: `10 300系② VVVF`
- next_topic: `11 300系③ 回生ブレーキ` の制作前EXAM_ALIGNMENTから開始する

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
- [x] 10 300系② VVVF — PASS
- [ ] 11 300系③ 回生ブレーキ — 次の未完了テーマ

## 10 EXAM_ALIGNMENT
公式過去問6件を対象とした。
1. R6上 機械 問16 — 電圧形インバータ4区間、RL負荷、`τ=L/R`
2. R5上 機械 問16 — 誘導性負荷波形、逆並列ダイオード、インバータの特徴
3. R5下 機械 問15 — 滑り周波数とインバータ一次周波数制御
4. R4上 機械 問16 — 電圧反転直後のダイオード経路、`Δi=(v/L)Δt`
5. R4下 機械 問16 — 4区間の導通デバイス、RL時定数
6. H25 機械 問16 — PWM基本波実効値、高調波込み全実効値

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnet「インバータの動作原理とその応用」「三相誘導電動機の運転」、電験三種まとめましたの対応過去問解説。参照日2026-08-29。

## 新幹線一次資料
日本車輌製造「JR東海300系新幹線」で、270 km/h運転用、交流電動機、コンバータ/インバータ制御を確認。公開確認していない直流リンク電圧、スイッチング周波数、滑り等は実値化していない。

## 成果物
- `topics/10_300series_vvvf/10_300series_vvvf.md`
- `topics/10_300series_vvvf/10_300series_vvvf_explanation.pdf` — 3ページ
- `topics/10_300series_vvvf/10_300series_vvvf_practice.pdf` — 15問、4ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/10_300series_vvvf/10_300series_vvvf_images.pptx` — 4スライド

## QA
- 解説PDF 3ページ・練習PDF 4ページを160 dpiで最終レンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをPDF変換後160 dpiでレンダリングし、クリップ・重なりなし。
- 練習15/15を独立再計算・再判定。代表値: `1500 min^-1`, `s=0.030`, `τ=2.0 ms`, `f_s=1.8 Hz`, `1146 min^-1`, `Δi=100 A`, `113.1 V`, `I_p=50 A`。

## 公式過去問の独立再解答
- R6上 問16 → `(a)5,(b)2` PASS
- R5上 問16 → `(a)1,(b)4` PASS
- R5下 問15 → `(a)2,(b)1` PASS
- R4上 問16 → `(a)4,(b)3` PASS
- R4下 問16 → `(a)2,(b)2` PASS
- H25 問16 → `(a)3,(b)4` PASS

6/6で確認済み解答と一致し、教材内の式・回路判定手順だけで根拠を説明できた。

## QA判定
`10 300系② VVVF`: PASS。新品質基準の完了数へ計上し10/38。

## Web公開
10のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ追加する。

## 次
MASTER制作順を先頭から確認すると01〜10が新品質基準PASS。次は11 `300系③ 回生ブレーキ` の制作前EXAM_ALIGNMENT。
