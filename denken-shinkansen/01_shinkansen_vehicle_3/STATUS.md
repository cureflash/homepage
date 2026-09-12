# STATUS - 新幹線車両・電験三種

更新日: 2026-09-12

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 21 / 38
- current_status: `topic_22_practice_pdf_complete`
- last_completed_topic: `21 N700S③ バッテリー自走`
- active_topic: `22 L0系① リニア同期モータ`
- next_start: topic 22 のsource Markdownを正本として解説画像PowerPointを作成する。全必須成果物完成後に検証済み5問を教材だけで独立再解答する

## 新品質ゲート進捗
- [x] 01〜21 — PASS
- [ ] 22 L0系① リニア同期モータ — 制作前EXAM_ALIGNMENT検証、制作前独立解答5/5、解説本文、3段階例題、練習15問と完全解説、解説PDF、練習PDFまで完了。PPTXと完成後独立再解答は未完了

## 22 EXAM_ALIGNMENT検証結果
Topic 22単独で完答できる公式過去問5件を品質ゲート対象として確定済み。

1. R7上 機械 問5 — 同期発電機の並列運転条件、同期検定器
2. R6上 機械 問5 — 回転磁界、同期電動機の自己始動、同期引込み
3. R5下 機械 問6 — 極数・周波数・同期速度
4. H25 機械 問3 — 三相回転磁界、相順、電気角と機械角
5. H19 機械 問15(a) — 同期速度と角速度

制作前独立解答と公開解答の照合: 5 / 5 PASS。

範囲外としてR8上機械問3・問4・問5、R6上電力問15(b)は除外済み。範囲外知識をTopic 22へ追加していない。

## 22 source内容
source Markdown:
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md`

作成済み:
- 電験で問われる範囲
- 対称三相交流と回転磁界
- 磁極・電気角・機械角
- 同期速度 `Ns=120f/p` と逆算
- 同期角速度 `ωs=2πNs/60=4πf/p`
- 誘導機の滑りと同期機の同期運転の違い
- 同期電動機の制動巻線による自己始動・直流励磁・同期引込み
- 同期発電機の並列条件と同期検定器
- 回転同期機からリニア同期モータへの概念接続
- 基礎／本試験標準／複合の3段階例題
- 五肢択一15問＋完全解説

練習問題配分:
- 基礎: 4 / 15 = 26.7%
- 本試験標準: 8 / 15 = 53.3%
- 複合・応用: 3 / 15 = 20.0%
- 五肢択一: 15 / 15

15問は数値を再計算し、知識問題も再判定して一意解を確認済み。

## 22 成果物
- source Markdown: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md`
- 解説PDF: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_explanation.pdf`
- 練習PDF: `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor_practice.pdf`

解説PDFはA4縦4ページ。全4ページをレンダリング確認し、文字切れ・重なり・欠落がないことを確認済み。

練習PDFはA4縦4ページ。source Markdownの15問を全問五肢択一で収録し、解答・完全解説を付与。PDFium 200 dpiで全ページ目視確認し、pdftoppm/PDFiumの2系統でも全4ページが正常レンダリングされることを確認した。文字切れ・重なり・欠落なし。

## L0系一次資料・境界
JR東海一次資料で以下を確認済み。
- リニアモータは通常の回転モータを切り開き直線状に展開したものとして説明できる。
- 車上超電導磁石＝回転子、地上推進コイル＝固定子に対応する。
- 推進コイルのN/S極と車上磁石の吸引・反発で推進する。

実際の極ピッチ、実運転周波数、500 km/h時の具体計算はTopic 22へ入れていない。Topic 23との境界を維持している。

## 22 QA判定
`IN_PROGRESS`。source Markdownの本文・例題・練習問題、解説PDF、練習PDFは完成したが、必須のPowerPointと完成後の公式過去問独立再解答が未完了。完成数は21/38のまま。

## 次
source Markdownから解説画像PowerPointを作成する。全必須成果物完成後に検証済み5問を教材内容だけで独立再解答し、公式解答と照合して最終PASSを判定する。
