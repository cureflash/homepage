# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 18 / 38
- current_status: `topic_18_pass`
- last_completed_topic: `18 E7・W7系 北陸新幹線の電源条件`
- next_topic: `19 N700S① SiC`
- next_start: topic 19の制作前EXAM_ALIGNMENTから開始する

## 新品質ゲート進捗
- [x] 01〜18 — PASS
- [ ] 19 N700S① SiC — 次の未完了テーマ

## 18 EXAM_ALIGNMENT
公式過去問5件を対象とした。
1. R6上 機械 問4 — V/f一定、同期速度、すべり、実回転速度。
2. R5下 機械 問15 — すべり周波数、40Hzインバータ運転、周波数変更後の同期速度。
3. R5上 機械 問4 — 同期速度、すべり、軸出力、トルク。
4. H28 機械 問4 — 50Hz・6極、同期速度、同期ワット。
5. R3 機械 問10 — `P=Fv/η` 型の必要動力計算。

教材範囲は、50/60Hzの入力電源条件と主電動機駆動周波数の分離、`Ns=120f/p`、すべり・二次周波数、V/f、`P=Tω`、同期ワット、30‰勾配の `P=Fv` 型動力計算まで収録した。

## 参照した電験解説資料
- `https://e-sysnet.com/三相誘導電動機の理論と等価回路/`
- `https://e-sysnet.com/三相誘導電動機の特性/`
- `https://yaku-tik.com/denken/r5f-k04/`
- `https://yaku-tik.com/denken/h28-k04/`
- `https://yaku-tik.com/denken/r3-k10/`
参照日: 2026-08-30。

## 新幹線一次資料
- JR東日本 E7系公式ページ: 北陸新幹線の30‰勾配・電源周波数変化、E7系50/60Hz両対応、最高速度275km/hを確認。
- JR西日本ニュースリリース: E7系/W7系がJR東日本・JR西日本共同開発車両であることを確認。

未確認の主変圧器巻数、実磁束密度、速度別実トルク、勾配区間の実主電動機入力、実走行抵抗、異周波切替シーケンスは真値化していない。

## 作成・改訂成果物
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power.md`
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power_explanation.pdf` — 4ページ
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power_practice.pdf` — 15問、4ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power_images.pptx` — 5スライド

## QA
- 解説PDF 4ページ、練習PDF 4ページを160dpiでレンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 5スライドをLibreOfficeでPDF化し、140dpiでレンダリングしてレイアウト破綻なし。
- 練習15/15を独立再計算・再判定。数値QAで `1254 min^-1`, `1.80 Hz`, `1146 min^-1`, `397.9 N·m`, `20.94 kW`, `5.44 kW`, `2.352 MW`, `2.613 MW`, `1344 min^-1` を再確認。

## 公式過去問の独立再解答
教材完成後、保存済み正答を先に使わず教材内容だけで再解答した。
- R6上 問4 → `1254 min^-1` → `(3)` PASS
- R5下 問15 → `(a)1.8 Hz=(2)`, `(b)1146 min^-1=(1)` PASS
- R5上 問4 → `397.9 N·m` → `(2)` PASS
- H28 問4 → `20.94 kW` → `(3)` PASS
- R3 問10 → `5.44 kW` → `(4)` PASS

5/5で公式解答と一致し、式選択理由・単位・適用条件を教材内情報だけで説明できた。

## QA判定
18: `PASS`。新品質基準の完成数へ計上し18/38。

## Web公開
18の4成果物を `qualifications/denken-shinkansen/catalog.json` へ登録する。現行catalogで欠落していたPASS済みtopic 17も同時に復元し、既存1〜16は保持する。

## 次
MASTER制作順を先頭から確認すると01〜18が新品質基準PASS。次は19 `N700S① SiC` の制作前EXAM_ALIGNMENT。
