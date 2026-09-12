# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-12

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は0/16。active topicは01 `新幹線の電気はどこから来る？`。

## 今回進捗
Topic 01を1段階進め、解説PDFを完成した。

source Markdown:
- `topics/01_power_system_overview/01_power_system_overview.md`

解説PDF:
- `topics/01_power_system_overview/01_power_system_overview_explanation.pdf`

完成済み本文を正本としてA4縦4ページへ整理した。追加仕様・追加論点は入れていない。

収録内容:
- 発電→送電→変電→配電→需要家の全体像
- 新幹線側の発電所→送電線→新幹線変電所→き電回路→電車線→パンタグラフ→車両
- 単相有効電力 `P=VI cosφ`
- 三相有効電力 `P=√3VI cosφ`
- 三相線路損失 `P_loss=3I²R`
- `P_loss=RP²/(V²cos²φ)` と損失率への式変形
- 高電圧化、力率改善と電流・損失の関係
- 三相3線式の必要導体量が単相2線式の `3/4` となる条件と導出
- 変電所の昇降圧・電圧調整・系統切換え・系統保護
- 周波数変換所・交直変換所の用途分類
- 基礎/本試験標準/複合の3段階例題
- 選定5問と本文節の対応表

## 過去問対応ゲート
制作前の選定5問はすでに公式解答を先に見ず独立再解答し、公式と5/5一致している。

1. R7上 電力 問13 — PASS
2. R6下 電力 問12 — PASS
3. R6上 電力 問11 — PASS
4. R4上 電力 問8 — PASS
5. R1 電力 問7 — PASS

解説PDFは、この5問に必要な知識・式・解法を本文の既定範囲内で整理している。

## PDF QA
- A4縦4ページ
- 180 dpiで全ページをPDFiumレンダリング
- pdftoppmでも全ページレンダリング確認
- 文字欠け・重なり・クリッピング・壊れたグリフなし

## Topic 01で維持する境界
Topic 01は電力編全体の地図を作る章であり、詳細章の内容を逆流させない。

- 水力・火力・原子力・再エネ詳細 → Topic 02〜05
- 変電所設備・計算詳細 → Topic 06
- 三相→単相変換詳細 → Topic 07
- 電圧降下・詳細電力計算 → Topic 08・10
- き電・送電設備詳細 → Topic 09
- 保護・遮断詳細 → Topic 11
- 配電・地中線詳細 → Topic 14
- 系統・蓄電詳細 → Topic 15

## QA判定
Topic 01: `IN_PROGRESS`。`EXAM_ALIGNMENT_GATE_PASS`、解説本文・解説PDF完成。練習PDF、PowerPointは未完了なので完成数は0/16のまま。

## 次の正確な開始点
Topic 01の解説本文・解説PDFをもとに、練習PDF（解答・完全解説付き）を作成する。
