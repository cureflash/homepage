# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-12

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は21/38。01〜21がPASS。active topicは22 `L0系① リニア同期モータ`。

## 今回進捗
Topic 22を `topic_22_explanation_pdf_complete` まで進めた。

既存source Markdownを正本として、過去問対応範囲を増減せずに解説PDFを作成した。

追加:
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_explanation.pdf`

更新:
- `STATUS.md`
- `HANDOFF.md`

解説PDFはA4縦4ページ。全ページをレンダリングし、文字切れ・重なり・欠落がないことを確認済み。内容はsource Markdownの解説本文・3段階例題・過去問対応表・公式まとめを反映し、Topic 23の実極ピッチ・実運転周波数・500 km/h時の具体計算は追加していない。

## 品質ゲート対象5問
1. R7上 機械 問5 — 同期発電機の並列運転条件
2. R6上 機械 問5 — 同期電動機の自己始動・同期引込み
3. R5下 機械 問6 — 極数の異なる同期発電機の並行運転
4. H25 機械 問3 — 三相誘導電動機の回転磁界
5. H19 機械 問15(a) — 同期速度の角速度換算

制作前独立解答と公開解答の照合は5/5 PASS済み。完成後独立再解答は、練習PDFとPowerPointを含む全必須成果物完成後に実施する。

## sourceに収録した必須範囲
- 対称三相交流と回転磁界、相順
- 磁極、極対数、電気角と機械角
- 同期速度 `Ns=120f/p`
- `f=pNs/120`、`p=120f/Ns`
- 同期角速度 `ωs=2πNs/60=4πf/p`
- 誘導電動機の滑り `s=(Ns-N)/Ns`
- 同期電動機の定常時 `N=Ns`
- 制動巻線、かご形誘導機と同じ始動原理、界磁巻線の抵抗短絡、直流励磁、同期引込み
- 同期発電機の並列条件: 周波数・電圧・位相、同期検定器
- 回転同期機からリニア同期モータへの概念接続

## 練習問題QA
15問すべて五肢択一。
- 基礎4問 = 26.7%
- 本試験標準8問 = 53.3%
- 複合・応用3問 = 20.0%

数値問題は再計算し、知識問題も再判定して全15問の一意解を確認済み。

## L0系一次資料・境界
JR東海公式資料 `https://global.jr-central.co.jp/en/company/_pdf/superconducting_maglev.pdf` の確認済み範囲だけを使用。

- リニアモータは通常の回転モータを直線状へ展開したもの。
- 車上超電導磁石＝回転子、地上推進コイル＝固定子。
- 地上推進コイルのN/S極と車上磁石の吸引・反発で推進する。

実際の極ピッチ、実運転周波数、500 km/h時の具体的周波数計算はTopic 23の範囲として未収録。境界を維持した。

## QA判定
22: `IN_PROGRESS`。source Markdown、3段階例題、15問練習、解説PDFまで完成。練習PDF・PowerPoint・完成後独立過去問再解答は未完了。完成数は21/38のまま。

## 次の正確な開始点
`topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md` を正本として練習PDFを作成する。続いて解説画像PowerPointを作成し、全必須成果物完成後、検証済み5問を保存済み正答を先に見ず教材内容だけで独立再解答し、公式解答と照合して最終PASSを判定する。
