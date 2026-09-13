# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は26/38。01〜26がPASS。active topicは27 `補助電源② 車内照明`。

## 今回進捗
Topic 26の完成後独立再解答を実施した。選定5問・8小問を完成教材内の式・適用条件・解法手順だけで再構成し、導出後に電気技術者試験センター公式解答と照合して`8 / 8 PASS`。固定範囲外知識・未確認実車値による補完は0件で、Topic 26を`COMPLETED`とした。

更新:
- `topics/26_auxiliary_power/26_auxiliary_power.md` — 完成後独立再解答8 / 8 PASSと`COMPLETED`を記録
- `STATUS.md` — 完成数26/38、active topicをTopic 27へ更新
- `HANDOFF.md`

## Topic 26 品質ゲート対象
1. R7下 機械 問16(a)(b) — 三相ダイオード整流、交流→直流、電圧低下・導通損失 — 5 / 4 — PASS
2. R7下 機械 問15(a)(b) — 変圧器の鉄損・銅損、負荷率、効率 — 5 / 2 — PASS
3. R7上 機械 問9 — 全負荷効率、負荷力率、出力と損失 — 3 — PASS
4. R3 機械 問16(a)(b) — 単相半波ダイオード整流、RL負荷、平均直流電圧 — 1 / 3 — PASS
5. H30 機械 問11 — インバータ、オンオフ制御、逆並列ダイオード、波高値、PWM — 5 — PASS

制作前独立解答`8 / 8 PASS`、完成後独立再解答`8 / 8 PASS`。本文・解説PDF・練習PDF・PowerPointへの要求事項マッピングも全件完了。

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-14

## Topic 26 新幹線一次資料
- 東芝レビュー「国内新幹線向け 車両システムと電気品」2009年9月
  - https://www.global.toshiba/content/dam/toshiba/migration/corp/techReviewAssets/tech/review/2009/09/64_09pdf/a06.pdf
  - N700系への補助電源装置納入を確認
  - N700系7000番代・8000番代で補助電源装置の最適配置による冗長化を確認
- 東芝「Auxiliary Power Supply System」
  - https://www.global.toshiba/ww/products-solutions/railway/rolling-stock/auxiliary-power-supply.html
  - 一般的な鉄道車両用SIVの役割と冗長化思想を確認。ただし製品仕様をN700系実機値へ転用していない

## Topic 26 解説本文・PDF
- §1 電験で問う内容
- §2 補助電源装置の役割
- §3 交流・直流と変換方向
- §4 電圧変換と電力・効率
- §5 単相半波ダイオード整流とRL負荷
- §6 三相ダイオード整流
- §7 インバータの基本
- §8 変圧器の鉄損・銅損・負荷率・力率
- §9 本試験で再利用する解法アルゴリズム
- §10 新幹線への接続
- §11 頻出ミス・ひっかけ
- §12 3段階例題
- §13 過去問でどう出るか・本文マッピング
- §14 公式・解法まとめ
- 解説PDF: `topics/26_auxiliary_power/26_auxiliary_power_explanation.pdf`
- A4縦2ページ、180 dpi全ページ表示QA PASS

3段階例題は、基礎=効率、本試験標準=RL半波整流、複合=三相整流のリアクタンス＋導通損失。

## Topic 26 練習PDF
- `topics/26_auxiliary_power/26_auxiliary_power_practice.pdf`
- A4縦6ページ、15問（基礎4／標準8／複合3）、全問五肢択一・完全解説付き
- 選定5問・8小問を演習へ全件マッピング済み
- 数値計算を独立再計算し、正答の一意性を確認。正答位置A/B/C/D/E各3問
- 180 dpi全ページ表示QA PASS。文字切れ・重なり・ページ外はみ出しなし
- 固定範囲外・未確認実車値の追加なし

## Topic 26 解説画像PowerPoint
- `topics/26_auxiliary_power/26_auxiliary_power_images.pptx`
- 16:9、4スライド。選定5問・8小問の判断経路を固定範囲内で可視化
- Slide 1: 変換方向＋H30問11
- Slide 2: R3問16(a)(b) RL半波整流
- Slide 3: R7下問16(a)(b) 三相ダイオード整流
- Slide 4: R7下問15(a)(b)・R7上問9 効率・損失
- 全4スライドをLibreOfficeでPDF化し150 dpi表示QA PASS。文字切れ・重なり・ページ外はみ出しなし
- overflow検査0件、PPTX ZIP整合性検査PASS
- 固定範囲外・未確認実車値の追加なし

## Topic 26 完成後独立再解答
- R7下 機械 問16(a)(b): `5 / 4` — PASS
- R7下 機械 問15(a)(b): `5 / 2` — PASS
- R7上 機械 問9: `3` — PASS
- R3 機械 問16(a)(b): `1 / 3` — PASS
- H30 機械 問11: `5` — PASS

結果: `8 / 8 PASS`。必要公式の選択、適用条件、途中計算を完成教材内だけで再構成し、公式解答と全件一致。固定範囲外知識・未確認実車値による補完は0件。

## Topic 26 範囲境界
採用しない:
- R8上 機械 問9 — 変圧器短絡試験・漏れリアクタンス
- R8上 機械 問10 — パワー半導体デバイス固有動作
- R7上 機械 問8 — 単独運転・系統連系保護まで必要
- R7上 機械 問10 — 直流チョッパ。系列SPECに明示なし
- R6上 機械 問4 — 同期速度・すべり・誘導電動機速度制御が主題

チョッパ詳細、系統連系保護、誘導電動機速度制御、変圧器短絡試験・詳細等価回路、半導体素子各論、高調波対策は追加しない。新幹線補助電源の入力電圧、出力電圧、容量、周波数、効率、回路方式は今回も実値化していない。

## 現在の状態
- `current_status`: `topic_26_completed`
- 完成数: 26/38
- 01〜26: PASS
- active topic: 27 `補助電源② 車内照明`

## 次の正確な開始点
Topic 27の制作前EXAM_ALIGNMENTを行う。系列SPECの固定範囲は、LED、光束、光度、照度、lm、cd、lx、照明計算。固定範囲から広げず、直近年度を優先して公式過去問を原則5問以上選定し、制作前独立解答で正答・根拠・適用条件を確認する。
