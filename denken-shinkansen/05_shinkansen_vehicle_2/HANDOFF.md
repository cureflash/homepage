# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

現在地は `topic_24_explanation_pdf_complete`。active topic は Topic 24 `N700S 主電動機設計の比較`。

## 今回のreconcile

開始時main `122f922d9af650dcc884fcd4d808a60e6ed227ec` から、作業中に他系列Topic 16の更新がmainへ入ったため再取得し、`f189fdcb076d54e276b8b1b38f9a0f9e1bb61991` を親としてTopic 24成果を反映した。Topic 24ディレクトリ、最新 `STATUS.md` / `HANDOFF.md`、直近コミットを反映直前に再確認し、既存のTopic 24解説PDF・PDF QAがないことを確認した。

同時進行の更新は他系列であり、車両二種Topic 24の競合作業・重複工程は確認されなかった。

再利用済み品質ゲート:
- R7一次「機械」問2: Topic 10 `5 / 5 PASS`
- R4一次「機械」問2 `(3)〜(5)`: Topic 12 `3 / 3 PASS`
- R2一次「機械」問3 `(1),(4),(5)`: Topic 12 `3 / 3 PASS`
- R3二次「機械・制御」問1 `(3),(4)`: Topic 10 `2 / 2 PASS`
- R7二次「機械・制御」問2 `(1),(3)`: 制作前新規照合 `4 / 4 PASS`

既存13答案要素の再調査・再解答は行っていない。

## 今回実施 — Topic 24 解説PDF

作成:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_explanation.pdf`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_explanation_pdf_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

QA:
- A4縦: `6 pages`
- PDFium render: `6 / 6 PASS`
- Poppler render: `6 / 6 PASS`
- 文字抽出: `PASS`
- 置換文字 `�`: `0件`
- クリッピング・文字重なり・黒四角・破損グリフ: `0件`
- 固定5問・17答案要素: 一次 `11 / 11`、二次 `6 / 6`、合計 `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`
- PDF SHA-256: `c8cb9bd229f871e96667c5f845bcad8dfbdd7ecee2ceef7a01bd1bd95fe1aef8`

初回PDF QAで右端クリッピング1箇所を検出したため、行分割して根本修正し、全6頁をPDFium/Popplerで再レンダリングしてPASS後に正本へ反映した。

この段階ではTopic 24全体を `completed` としない。clean blind独立再解答も未実施。

## N700S実車接続

富士電機技報 2020 vol.93 no.2 p.95（5）で、N700S向け主電動機の6極化を一次メーカー資料として確認済み。

- https://www.fujielectric.co.jp/about/company/gihou_2020/pdf/93-02/FEJ93-02-000-2020.pdf

同資料の「駆動システム全体で約20%軽量化」は、SiC素子搭載、主電動機6極化、主変圧器冷却方式見直しを合わせた結果として扱う。主電動機単体・6極化単独の20%軽量化とは扱わない。

N700S主電動機の実運転周波数、実回転速度、実トルク、寸法、質量は確認不能のため教材値として真値化していない。

## Topic 24 固定EXAM_ALIGNMENT

固定過去問:
1. R7 一次「機械」問2 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問2 `(3)〜(5)` — 3答案要素
3. R2 一次「機械」問3 `(1),(4),(5)` — 3答案要素
4. R3 二次「機械・制御」問1 `(3),(4)` — 2答案要素
5. R7 二次「機械・制御」問2 `(1),(3)` — 4答案要素

集計:
- 一次: `3問 / 11答案要素`
- 二次: `2問 / 6答案要素`
- 合計: `5問 / 17答案要素`

完成後はTopic 24教材だけを使って固定5問・17答案要素をclean blind再解答する。PDF coverage `17 / 17` を完成判定へ流用しない。

## Topic 24 境界

- 電気角は `θ_e=(P/2)θ_m` を一般関係として説明し、固定第二種過去問の直接答案要素とは主張しない。
- 確認済み実車値は主電動機6極化まで。未確認の運転周波数・回転速度・トルク等を推定しない。
- 小型軽量化は公表事実と一般理論を分離する。
- Topic 13の回生を先取りしない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 24解説PDFにも過去問固有注記を収録した。

## 次の安全な工程

Topic 24練習sourceを作成する。一次型と二次記述型を含む練習問題・完全解説を固定17答案要素へ接続し、数値問題は途中計算・単位・検算、記述式は前提・式・理由説明まで採点可能な形にする。固定EXAM_ALIGNMENT、N700S事実境界、Topic 21一般式は変更しない。完成数は `23 / 39` のまま。
