# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は27/38。01〜27がPASS。active topicは28 `空調・電熱`。

## 今回進捗
Topic 28 `空調・電熱` の解説PDFを完成した。A4縦4ページで、解説本文§1〜§15、3段階例題、固定EXAM_ALIGNMENT 5問・10小問への対応を収録。180 dpiで全4ページ表示QAを行い、文字切れ・重なり・ページ外はみ出し・破損グリフなしを確認した。仕様外論点・未確認実車値の追加は0件。

更新:
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_explanation.pdf`
- `STATUS.md` — `topic_28_explanation_pdf_complete`へ更新
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

## Topic 28 解説PDF
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_explanation.pdf`
- A4縦4ページ
- §1〜§15、3段階例題、固定5問・10小問の過去問対応表を収録
- 例題1: `100 V`、`10 Ω`、`5 min`からジュール熱`300 kJ`
- 例題2: 氷の融解潜熱＋水の顕熱を加算し、熱効率から`約32.4 min`
- 例題3: 体積→質量、`Q=mcΔT`、COPから`約2.61 h`
- 180 dpi全4ページ表示QA PASS
- 文字切れ・重なり・ページ外はみ出し・破損グリフなし
- 新幹線車内空調・電熱の未確認実車値は真値化していない

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
- `current_status`: `topic_28_explanation_pdf_complete`
- 完成数: 27/38
- 01〜27: PASS
- active topic: 28 `空調・電熱`
- Topic 28: EXAM_ALIGNMENT PASS / 解説本文完成 / 解説PDF完成 / 練習PDF以降未着手

## 次の正確な開始点
Topic 28の練習PDFを作成する。三種仕様に従い12問以上、基礎20〜30%・本試験標準50〜60%・複合約20%、少なくとも半数を五肢択一とし、完全解説と固定EXAM_ALIGNMENT 5問・10小問への対応を収録する。全ページ表示QAを行い、固定範囲外論点・未確認実車値を追加しない。

## 直前完了 Topic 27
Topic 27 `補助電源② 車内照明` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。選定5問・8小問は完成後も`8 / 8 PASS`で`COMPLETED`。