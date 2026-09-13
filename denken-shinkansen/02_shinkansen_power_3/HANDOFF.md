# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は2/16。Topic 01・02は完成済み。active topicは03 `JR東日本はなぜ火力発電所まで持っている？`。

## 今回進捗
Topic 03を1段階進め、解説PDFを完成した。A4縦6ページ、200 dpiで全6ページをレンダリングして表示QAを行い、文字欠け・クリップ・重なり・壊れた数式記号なしでPASS。制作前 `EXAM_ALIGNMENT` の6問・7小問で要求された固定範囲を収録し、固定範囲外の詳細煙風道設備、再熱/再生サイクル、燃焼化学、保護装置は追加していない。

更新成果物:
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- `STATUS.md`
- `HANDOFF.md`

## Topic 03 制作前過去問対応ゲート
1. R8上 電力 問3 — 復水器の凝縮・真空度・タービン効率 — 独立 (1) / 公式 (1) — PASS
2. R7下 電力 問15(a) — 発熱量・燃料消費量・発電電力量から発電端効率 — 独立 (4) / 公式 (4) — PASS
3. R7上 電力 問2 — 蒸気タービン効率・比エンタルピー差・使用蒸気量 — 独立 (5) / 公式 (5) — PASS
4. R6上 電力 問3 — ガスタービンコンバインドサイクルと汽力発電の比較 — 独立 (4) / 公式 (4) — PASS
5. R3 電力 問15(a) — 発電端/送電端電力量・所内率 — 独立 (2) / 公式 (2) — PASS
6. R3 電力 問15(b) — 燃料発熱量・発電端熱効率 — 独立 (4) / 公式 (4) — PASS
7. R1 電力 問15(a) — タービン熱消費率・復水器損失・タービン出力 — 独立 (3) / 公式 (3) — PASS

結果: `7/7 PASS`。

## Topic 03で固定した教材範囲
`SPEC.md` から追加しない。

- 汽力発電
- ガスタービン発電
- コンバインドサイクル
- ボイラ
- 蒸気タービン
- 復水器
- 発電機
- 熱効率
- 熱消費率
- 発電端効率
- 所内率
- 発熱量と発電電力量
- 発電端出力と送電端出力

過去問から確定した中間知識:
- 復水器の凝縮・真空度とタービン出口圧力・効率の関係
- 比エンタルピー差とタービン効率から使用蒸気量を求める式
- `kW/kWh/MW/MWh/kJ/MJ` の単位換算
- 熱消費率 `q[kJ/(kWh)]` と `η=3600/q`
- 発電端/送電端と所内率 `Ps=Pg(1-L)`, `Ws=Wg(1-L)`
- ガスタービン・コンバインドサイクルと汽力発電の比較

境界:
- R7上 問3の節炭器・過熱器・再熱器・電気集じん装置・空気予熱器の詳細通過順は追加しない
- R6下 問2の再熱/再生サイクル・給水加熱器・節炭器の個別論点は追加しない
- R7下 問15(b)、R6下 問15(b)の炭素組成・化学量論・CO2計算は追加しない
- R7下 電力 問3の保護装置・継電器・トリップ機構は追加しない
- JR東日本川崎発電所等の実設備値は一次資料で確認できたものだけを使用する

## Topic 03 source
- `topics/03_thermal_power/03_thermal_power.md`
- source状態: `explanation_body_complete`
- 公式過去問6問・7小問の要求知識・使用式・設問型を記録
- 参考教材はe-sysnet、電験王、電験三種まとめましたを確認
- 制作前独立再解答 `7/7 PASS`
- 解説本文・3段階例題を作成済み
- 解説PDF: completed / display QA PASS
- 練習PDF・PowerPoint・完成後独立再解答は未着手

## Topic 03 解説本文の収録内容
- 汽力発電のエネルギー変換と固定範囲機器の入出力関係
- 復水器の凝縮・真空度・タービン出口圧力・熱落差・効率の因果関係
- `P=ηt m_dot(h1-h2)` と使用蒸気量逆算、`kg/s↔t/h`
- `Qin=mfHf`、`1 kWh=3600 kJ`、発電端熱効率
- 熱消費率 `η=3600/q` と簡略熱収支 `qP=3600P+Qc`
- 所内率 `Ps=Pg(1-L)`, `Ws=Wg(1-L)` と逆算
- ガスタービン・コンバインドサイクルの排熱利用、始動停止、負荷追従、外気温、温排水の定性判断
- 再利用可能な火力計算の解法手順
- 基礎例題: 発電端熱効率と熱消費率
- 本試験標準例題: 蒸気タービンの使用蒸気量
- 複合・ひっかけ例題: 発電端/送電端電力量と燃料熱量
- 選定7小問と本文節の対応表

## Topic 03 解説PDF
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- A4縦6ページ
- 200 dpiで全6ページ表示QA PASS
- 制作前6問・7小問の要求論点、3段階例題、過去問対応表、公式まとめを収録
- 固定範囲外論点の追加0件
- 未確認実設備値の真値化0件

## Topic 03 新幹線側一次資料
JR東日本公式だけを使用。

- `https://www.jreast.co.jp/epd/works/kawasaki/`
  - 川崎発電所は1930年運転開始、現在は天然ガス主体、発電機4台で列車運行に必要な電力を供給
- `https://www.jreast.co.jp/company/csr/environment/carbon-neutral/`
  - 自営火力発電所は神奈川県川崎市、総出力80.9万kW、都市ガス・天然ガスを使用
- `https://www.jreast.co.jp/esio/our-works/project06.html`
  - ガスタービン発電と汽力発電を組み合わせる複合サイクル発電を採用

未確認実値の真値化は行っていない。

## Topic 02 完了状態
Topic 02 `上越新幹線を水の力で走らせる` は、source Markdown・解説PDF・練習PDF・解説画像PowerPoint・完成後独立再解答・最終QAまで完了済み。品質ゲート対象6問・7小問の完成後独立再解答は `7/7 PASS`、判定は `PASS / completed`。

主な成果物:
- `topics/02_hydropower/02_hydropower.md`
- `topics/02_hydropower/02_hydropower_explanation.pdf`
- `topics/02_hydropower/02_hydropower_practice.pdf`
- `topics/02_hydropower/02_hydropower_images.pptx`
- `topics/02_hydropower/02_hydropower_exam_reanswer.md`
- `topics/02_hydropower/02_hydropower_final_qa.md`

## 現在状態
- `current_status`: `topic_03_explanation_pdf_complete`
- 完成数: `2/16`
- last completed: Topic 02
- active: Topic 03

## 次の正確な開始点
Topic 03「JR東日本はなぜ火力発電所まで持っている？」の解説本文・解説PDFを正本として練習PDFを作成し、全ページ表示QAを行う。制作前 `EXAM_ALIGNMENT` の6問・7小問に対応する固定範囲を維持し、`SPEC.md` から仕様を追加しない。