# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 18 / 38
- current_status: `topic_19_binary_publication_pending`
- last_completed_topic: `18 E7・W7系 北陸新幹線の電源条件`
- active_topic: `19 N700S① SiC`
- next_start: topic 19の生成済みPDF/PPTXをGitHubへ配置し、実在確認後にcatalog公開・19/38へ進める

## 新品質ゲート進捗
- [x] 01〜18 — PASS
- [ ] 19 N700S① SiC — EXAM_ALIGNMENT、本文、15問練習、独立再解答、Visual QAまで完了。repositoryへのバイナリ配置のみ未完了

## 19 EXAM_ALIGNMENT
公式過去問5件:
1. R6上 機械 問16 — IGBTブリッジ、逆並列ダイオード、誘導性負荷、`τ=L/R`。
2. R5上 機械 問10 — IGBT/MOSFET、SiC、逆方向電流、テイル電流。
3. R5上 機械 問16 — 単相インバータ、誘導性負荷、還流、波形。
4. R4下 機械 問16 — IGBT電圧形インバータ、R-L負荷、Q/D経路、時定数。
5. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常動作。

参照: 電気技術者試験センター公式過去問・解答、e-sysnet、電験三種まとめました。参照日2026-08-30。

## 作成・改訂成果物
repository:
- `topics/19_n700s_sic/19_n700s_sic.md` — EXAM_ALIGNMENT、解説本文、例題、練習設計、独立QA、過去問再解答結果まで完成。

run内で生成・Visual QA済みだがrepository未配置:
- `19_n700s_sic_explanation.pdf` — 2ページ
- `19_n700s_sic_practice.pdf` — 15問、4ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `19_n700s_sic_images.pptx` — 6スライド

## 独立再解答
教材本文だけで5件を再解答し、要求論点をすべて説明可能であることを確認。
- R6上問16: Q/D電流経路と`τ=L/R`
- R5上問10: IGBT単体の逆方向電流記述を誤りと判定
- R5上問16: 還流区間・波形・ダイオードの役割を判定
- R4下問16: 電流経路、`2 mH / 1 Ω = 0.002 s`
- H29問10: サイリスタの逆方向電流記述を誤りと判定

## 練習QA
15/15独立再計算・再判定。代表値: `2 ms`, `400 W`, `120 W`, `520 W`, `99.48%`, `1.15 kW`, `99.54%`, 周波数3倍時の`P_sw` 3倍。

## Visual QA
解説PDF 2ページ、練習PDF 4ページ、PowerPoint 6スライドを160 dpiでレンダリング。文字化け・クリップ・重なりを確認し、CIDフォントで表示できなかった近似記号はASCIIへ修正した。

## QA判定
19: `BINARY_PUBLICATION_PENDING`。教材内容はPASS相当だが、必須4成果物がGitHub上に実在していないため完成数18/38のまま。

## Web公開
未公開。バイナリ3成果物のGitHub実在確認後のみcatalogへ追加する。

## 次
19の生成済みPDF/PPTXをrepositoryへ配置する。4成果物の実在確認後、catalog登録、STATUS/HANDOFFを19/38 PASSへ更新する。次テーマ20へは19の品質ゲート通過後に進む。
