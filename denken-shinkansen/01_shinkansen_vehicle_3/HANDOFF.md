# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は27/38。01〜27がPASS。active topicは28 `空調・電熱`。

## 今回進捗
Topic 28 `空調・電熱` の練習source＋練習PDFを完成した。A4縦5ページ、全15問（基礎4／標準8／複合3）、全問五肢択一・完全解説付き。固定EXAM_ALIGNMENT 5問・10小問を演習へ全件マッピングし、数値計算を独立再計算して正答の一意性を確認した。正答位置はA/B/C/D/E各3問。180 dpiで全5ページ表示QA PASS。仕様外論点・未確認実車値の追加は0件。

更新:
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.md`
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.pdf`
- `STATUS.md` — `topic_28_practice_pdf_complete`へ更新
- `HANDOFF.md`

## Topic 28 品質ゲート対象
1. R8上 機械 問17(a)(b) — 木材・水の顕熱、蒸発潜熱、総合効率、乾燥時間 — `5 / 2` — PASS
2. R7上 機械 問17(a)(b) — 氷の融解熱、水の顕熱、電熱装置の熱効率・消費電力・時間 — `2 / 2` — PASS
3. R4上 機械 問17(a)(b) — ヒートポンプのCOP、消費電力量、供給熱量、水温上昇 — `5 / 5` — PASS
4. R1 機械 問17(a)(b) — 水の加熱熱量、COP、消費電力 — `2 / 3` — PASS
5. H28 機械 問17(a)(b) — 水の加熱熱量、COP、加熱時間 — `2 / 2` — PASS

制作前独立解答: `10 / 10 PASS`。

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-14

## Topic 28 教材要求事項
- ジュール熱 `Q=I^2Rt=VIt=Pt=V^2t/R`
- 顕熱 `Q=mcΔT`
- 問題文提示の潜熱 `Q=mL`
- 複数加熱過程の `Q_total=ΣQ`
- 熱効率 `η=Q_use/(Pt)` と電力・時間の逆算
- ヒートポンプの `COP=Q_out/W_in` と `Q_out=COP·P·t`
- `1 kW=1 kJ/s`、`1 kWh=3.6 MJ`、時間・熱量の単位換算
- 加熱対象・過程→質量・温度差→熱量→効率/COP→電力・時間→検算の解法順序

## Topic 28 練習PDF
- source: `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.md`
- PDF: `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.pdf`
- A4縦5ページ、15問（基礎4／標準8／複合3）
- 全問五肢択一・完全解説付き
- 対応: R8上問17(a)(b)=Q11・Q14、R7上問17(a)(b)=Q6・Q7・Q13、R4上問17(a)(b)=Q8・Q12・Q15、R1問17(a)(b)=Q9・Q10・Q15、H28問17(a)(b)=Q10・Q12・Q15
- 固定5問・10小問の要求事項を全件演習へマッピング済み
- 数値問題を独立再計算し、正答は各設問で一意
- 正答位置A/B/C/D/E各3問
- 180 dpi全5ページ表示QA PASS。文字切れ・重なり・ページ外はみ出し・破損グリフなし

## Topic 28 範囲境界
追加しない:
- 熱伝導率、熱抵抗、熱流、対流、放射伝熱
- 誘導加熱の表皮効果・浸透深さ・透磁率、誘電加熱、アーク加熱、マイクロ波加熱等の方式各論
- 冷媒物性、冷凍サイクル詳細、p-h線図、エンタルピー計算
- 湿度、換気、空気線図、顕熱比等の空調設計論点
- 未確認の新幹線車内空調・電熱設備の容量、COP、電圧、消費電力、設定温度等の実車値

品質ゲート対象外:
- R7下 機械 問12 — 熱伝導率・温度こう配・熱流
- R6下 機械 問12 — 熱伝導・熱抵抗
- R6上 機械 問12 — 熱伝導率・熱抵抗・熱流と電気系の対応
- R5下 機械 問12 — 誘導加熱の透磁率・表皮効果・浸透深さ
- R5上 機械 問17 — 熱力学のオームの法則
- R4下 機械 問12 — 複数の電気加熱方式各論
- R3 機械 問17 — 放射伝熱・熱抵抗

## 現在の状態
- `current_status`: `topic_28_practice_pdf_complete`
- 完成数: 27/38
- 01〜27: PASS
- active topic: 28 `空調・電熱`
- Topic 28: EXAM_ALIGNMENT PASS / 解説本文完成 / 解説PDF完成 / 練習PDF完成 / PowerPoint以降未着手

## 次の正確な開始点
Topic 28の解説画像PowerPointを作成する。固定EXAM_ALIGNMENT 5問・10小問の解法・判断経路を可視化し、表示QA、スライド境界overflow検査、PPTX ZIP整合性検査を行う。固定範囲外論点・未確認実車値を追加しない。

## 直前完了 Topic 27
Topic 27 `補助電源② 車内照明` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。選定5問・8小問は完成後も`8 / 8 PASS`で`COMPLETED`。
