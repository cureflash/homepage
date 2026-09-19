# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

現在地は `topic_24_practice_pdf_complete`。active topic は Topic 24 `N700S 主電動機設計の比較`。

## 今回のreconcile

開始時main `883e98d656f6f7bb65e0d214bbffc6855b952545` を確認後、同系列workerの `285e99e576d48d49a022f7d8ce7fb272abe4e8d5`（Topic 24 practice source進捗同期）まで取り込んだ。最新 `STATUS.md` / `HANDOFF.md`、Topic 24ディレクトリ、直近車両二種コミットを再確認し、Topic 24は練習sourceまで完了、練習PDFは未作成だったため重複せず次工程のみ実施した。

既存品質ゲートを再利用し、同じ過去問の再調査・再解答は行っていない。

- R7一次「機械」問2: Topic 10 `5 / 5 PASS`
- R4一次「機械」問2 `(3)〜(5)`: Topic 12 `3 / 3 PASS`
- R2一次「機械」問3 `(1),(4),(5)`: Topic 12 `3 / 3 PASS`
- R3二次「機械・制御」問1 `(3),(4)`: Topic 10 `2 / 2 PASS`
- R7二次「機械・制御」問2 `(1),(3)`: Topic 24制作前新規照合 `4 / 4 PASS`

既存13答案要素の再調査・再解答: `0件`。

## 今回実施 — Topic 24 練習PDF

作成:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_practice.pdf`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_practice_pdf_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`

構成・QA:
- A4縦: `5 pages`
- PDFium 180 dpi: `5 / 5 PASS`
- Poppler 180 dpi: `5 / 5 PASS`
- ページ欠落・文字クリッピング・文字重なり・日本語欠落グリフ・破損グリフ: `0件`
- `pdftotext`: `PASS`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次記述式: `4 / 4`
- 合計: `12 / 12`、完全解説付き
- sourceから問題条件・正答・計算値の変更: `0件`
- 固定5問・17答案要素: 一次 `11 / 11`、二次 `6 / 6`、合計 `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`
- PDF SHA-256: `6905e73122ac1904ec0d4dd47561aba0875fe3687ba9b8c9dd7d08d867775b5b`

source中の近似記号 `≈` はPDFのCIDフォント表示で欠落を生じたため、PDF表示のみ「（近似）」「約」へ正規化した。式の意味、条件、数値、正答は変更していない。

この段階ではTopic 24全体を `completed` としない。固定5問・17答案要素のclean blind再解答もまだ実施しない。

## N700S実車接続

富士電機技報 2020 vol.93 no.2 p.95（5）で、N700S向け主電動機の6極化を一次メーカー資料として確認済み。

- https://www.fujielectric.co.jp/about/company/gihou_2020/pdf/93-02/FEJ93-02-000-2020.pdf

同資料の「駆動システム全体で約20%軽量化」は、SiC素子搭載、主電動機6極化、主変圧器冷却方式見直しを合わせた結果として扱う。主電動機単体・6極化単独の20%軽量化とは扱わない。

N700S主電動機の実運転周波数、実回転速度、実トルク、寸法、質量は確認不能のため教材値として真値化していない。練習問題の数値条件は一般教材用条件として明示した。

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

練習PDFでは `17 / 17 covered` を確認したが、これは完成後clean blindのPASSではない。PowerPoint完成後、Topic 24教材だけを使って固定5問・17答案要素を改めて再解答する。

## Topic 24 境界

- 電気角は `θ_e=(P/2)θ_m` を一般関係として扱い、固定第二種過去問の直接答案要素とは主張しない。
- 確認済み実車値は主電動機6極化まで。未確認の運転周波数・回転速度・トルク・寸法・質量を推定しない。
- 小型軽量化は公表事実と一般理論を分離する。
- Topic 10の損失・等価回路試験、Topic 12のPWM詳細、Topic 13の回生を独立主題として再展開しない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。練習PDFでも一般式はそのまま維持した。

## 次の安全な工程

Topic 24解説画像PowerPoint作成＋QA。固定5問・17答案要素、SPEC必須8項目、指定3可視化、N700S事実境界、Topic 21一般式を変更しない。PowerPoint完成後に固定5問・17答案要素をTopic 24教材だけでclean blind独立再解答する。完成数は `23 / 39` のまま。
