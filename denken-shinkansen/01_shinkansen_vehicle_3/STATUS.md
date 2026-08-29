# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 5 / 38
- current_status: rebuilding_topic_05_depth
- next_topic: `05 0系③ 速度制御` の新版本文・EXAM_ALIGNMENTを再確認し、解説PDF・練習PDF・PowerPointを再生成してvisual QA、練習問題独立再計算、公式過去問独立再解答まで行う

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — 新版成果物再生成・再QA PASS
- [x] 03 0系① 主変圧器 — 新版成果物再生成・再QA PASS
- [x] 04 0系② シリコン整流器 — 新版成果物再生成・再QA PASS
- [ ] 05 0系③ 速度制御 — REOPENED / Web記事全面再構築済み、PDF・練習・PPTX再生成待ち
- [ ] 06 0系④ 発電ブレーキ — REOPENED / Web記事全面再構築済み、PDF・練習・PPTX再生成待ち
- [x] 07 200系 サイリスタ制御 — PASS
- [ ] 08 100系 直流電動機方式の完成 — 05〜06再PASS後に着手

## 04 0系② シリコン整流器 — 再PASS

### EXAM_ALIGNMENT
公式過去問5問を対象にした。
- R3 機械 問16 — 単相半波R-L負荷、`v=Ri+Ldi/dt`、波形・平均値
- H26 機械 問10 — 環流ダイオード、インダクタ電流の閉回路
- H25 機械 問9 — ブリッジ＋平滑コンデンサ、充放電と入力電流波形
- H24 機械 問10 — 全波サイリスタ整流、制御角と平均電圧
- R1 機械 問10 — サイリスタブリッジ、対角導通・自然転流・極性

参照した解説資料: e-sysnet「整流回路の原理」、電験三種まとめましたの上記過去問解説。参照日2026-08-29。正答の正本は電気技術者試験センター公式過去問題・公式解答。

### 成果物
- `topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier.md`
- `topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier_explanation.pdf` — 3ページ
- `topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier_practice.pdf` — 14問（基礎4 / 標準7 / 応用3、五肢択一13問）
- `topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier_images.pptx` — 3スライド

### QA
- 解説PDF 3ページ・練習PDF 2ページを160dpiで最終レンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 3スライドをレンダリング確認。初回の文字コントラストを修正後、最終版で可読性・クリップ・重なりなし。
- 練習14/14を独立再計算・再判定。代表値: `Vm(100V)=141.42V`, 半波平均`45.02V`, 全波平均`90.03V`, 200V全波平均`180.06V`, α=90°サイリスタ平均`45.02V`。

### 独立過去問QA
生成時の正答を先に見ず、教材内の導通判定・R-L・環流・C平滑・位相制御の説明だけで再解答した。
- R3 機械 問16 → (a)(1), (b)(3) PASS
- H26 機械 問10 → (2) PASS
- H25 機械 問9 → (1) PASS
- H24 機械 問10 → (5) PASS
- R1 機械 問10 → (3) PASS

5/5で公式解答と一致。教材外知識の補完なしで根拠を説明できたため04をPASSへ戻す。

## Web公開
04は再PASSしたため `article_rebuild` を解除し、解説PDF・練習PDF・PowerPointへのリンクをWebカタログへ復帰する。

## 次
05を最優先で再PASSする。その後06を再PASSし、08へ進む。
