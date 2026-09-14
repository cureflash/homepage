# STATUS - 新幹線車両・電験三種

更新日: 2026-09-14

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 27 / 38
- current_status: `topic_28_powerpoint_complete`
- last_completed_topic: `27 補助電源② 車内照明`
- active_topic: `28 空調・電熱`
- next_start: Topic 28の完成教材だけを使って固定EXAM_ALIGNMENT 5問・10小問を保存済み正答を見ずに独立再解答し、教材外知識補完0件を確認して品質ゲート判定を行う

## 新品質ゲート進捗
- [x] 01〜27 — PASS
- [ ] 28 空調・電熱 — IN_PROGRESS / EXAM_ALIGNMENT PASS (`10 / 10`) / explanation source complete / explanation PDF complete / practice PDF complete / PowerPoint complete

## 28 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・10小問。系列SPEC固定範囲は、空調、電熱、ジュール熱、熱量、電力、効率。

1. R8上 機械 問17(a)(b) — 木材・水の顕熱、蒸発潜熱、総合効率、乾燥時間 — `5 / 2` — PASS
2. R7上 機械 問17(a)(b) — 氷の融解熱、水の顕熱、電熱装置の熱効率・消費電力・時間 — `2 / 2` — PASS
3. R4上 機械 問17(a)(b) — ヒートポンプのCOP、消費電力量、供給熱量、水温上昇 — `5 / 5` — PASS
4. R1 機械 問17(a)(b) — 水の加熱熱量、COP、消費電力の逆算 — `2 / 3` — PASS
5. H28 機械 問17(a)(b) — 水の加熱熱量、COP、加熱時間 — `2 / 2` — PASS

制作前独立解答: `10 / 10 PASS`。

## 28 教材要求事項
- 抵抗加熱のジュール熱を`Q=I^2Rt=VIt=Pt=V^2t/R`として、成立条件・単位とともに扱う
- 顕熱`Q=mcΔT`、問題文提示の潜熱`Q=mL`を区別する
- 複数の加熱過程では`Q_total=ΣQ`として過程別の熱量を加算し、対象質量を先に整理する
- 熱効率`η=Q_use/(Pt)`と、その逆算`Q_use=ηPt`、`P=Q_use/(ηt)`、`t=Q_use/(ηP)`を扱う
- 空調に接続するヒートポンプは、過去問で直接要求される`COP=Q_out/W_in`と`Q_out=COP·P·t`を扱う
- 単位換算`1 kW=1 kJ/s`、`1 kWh=3.6 MJ`、`1 h=3600 s`、`1 min=60 s`を固定する
- 解法手順を、加熱対象・過程の分解→質量と温度差→必要熱量→効率/COP→電力・時間へ逆算→単位・桁の検算、の順で示す
- 頻出ミスとして、効率を掛ける/割る方向、COPと効率、kWとkWh、MJとkJ、時間換算、潜熱対象質量の取り違えを扱う

## 28 解説本文
- `topics/28_air_conditioning_heating/28_air_conditioning_heating.md` に§1〜§15の解説本文＋3段階例題を完成
- 固定5問・10小問の要求事項を本文各節と例題へ全件マッピング済み
- 解法順序を`加熱過程→質量・温度差→必要熱量→効率/COP→電力・時間→単位・桁の検算`として固定
- 新幹線車内空調・電熱の未確認実車値は真値化していない

## 28 解説PDF
- 解説PDF: `topics/28_air_conditioning_heating/28_air_conditioning_heating_explanation.pdf`
- A4縦4ページ。§1〜§15、3段階例題、固定5問・10小問対応表を収録
- 180 dpiで全4ページ表示QA PASS。文字切れ・重なり・ページ外はみ出し・破損グリフなし
- 固定範囲外論点・未確認実車値の追加なし

## 28 練習PDF
- source: `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.md`
- 練習PDF: `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.pdf`
- A4縦5ページ、全15問。基礎4問／標準8問／複合3問、全問五肢択一・完全解説付き
- 固定5問・10小問の要求事項を演習へ全件マッピング済み
- 対応: R8上問17(a)(b)=Q11・Q14、R7上問17(a)(b)=Q6・Q7・Q13、R4上問17(a)(b)=Q8・Q12・Q15、R1問17(a)(b)=Q9・Q10・Q15、H28問17(a)(b)=Q10・Q12・Q15
- 数値計算を独立再計算し、各数値問題の正答が選択肢内で一意であることを確認
- 正答位置はA/B/C/D/E各3問
- 180 dpiで全5ページ表示QA PASS。文字切れ・重なり・ページ外はみ出し・破損グリフなし
- 固定範囲外論点・未確認実車値の追加なし

## 28 解説画像PowerPoint
- PowerPoint: `topics/28_air_conditioning_heating/28_air_conditioning_heating_images.pptx`
- 16:9・4スライド。解法フロー、顕熱/潜熱/質量整理、熱効率ηとCOPの区別、固定5問・10小問への対応を可視化
- 固定5問・10小問の判断経路を全件収録。R8上・R7上は顕熱/潜熱/η、R4上・R1・H28はCOP系へ明示的に分岐
- 全4スライド表示QA PASS。文字切れ・重なり・破損グリフなし
- スライド境界overflow検査 `0件`、PPTX ZIP整合性検査 PASS
- 固定範囲外論点・未確認実車値の追加なし

## 28 範囲境界
固定範囲を広げないため、次は品質ゲート対象から除外した。

- R7下 機械 問12 — 熱伝導率・温度こう配・熱流が必要
- R6下 機械 問12 — 熱伝導・熱抵抗が主要求
- R6上 機械 問12 — 熱伝導率・熱抵抗・熱流と電気系の対応が主要求
- R5下 機械 問12 — 誘導加熱の透磁率・表皮効果・浸透深さが必要
- R5上 機械 問17 — 熱抵抗・熱流を用いる熱力学のオームの法則が主要求
- R4下 機械 問12 — アーク・誘電・誘導加熱等の方式各論が必要
- R3 機械 問17 — 放射伝熱・熱抵抗等が必要

熱伝導率、熱抵抗、熱流、対流、放射伝熱、加熱方式各論、冷媒物性・p-h線図等の冷凍サイクル詳細、湿度・換気・空気線図、未確認の新幹線空調・電熱実車値は追加しない。

## 直前完了 Topic 27
Topic 27 `補助電源② 車内照明` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。固定5問・8小問は完成後も`8 / 8 PASS`で`COMPLETED`。
