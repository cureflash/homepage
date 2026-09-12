# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は0/16。active topicは01 `新幹線の電気はどこから来る？`。

## 今回進捗
Topic 01を1段階進め、解説画像PowerPointを完成した。

source Markdown:
- `topics/01_power_system_overview/01_power_system_overview.md`

解説PDF:
- `topics/01_power_system_overview/01_power_system_overview_explanation.pdf`

練習PDF:
- `topics/01_power_system_overview/01_power_system_overview_practice.pdf`

解説画像PowerPoint:
- `topics/01_power_system_overview/01_power_system_overview_images.pptx`

PowerPointは16:9・4枚。

構成:
1. 一般の電力系統と、新幹線の `発電所→送電線→新幹線変電所→き電回路→電車線→パンタグラフ→新幹線`
2. 単相 `P=VI cosφ`、三相 `P=√3VI cosφ`、`P_loss=3I²R`、高電圧化と損失率
3. 一般系統の三相交流と新幹線側の単相交流25 kV、三相3線式の必要導体量 `3/4`
4. 変電所の昇降圧・電圧調整・系統切換え・系統保護と、選定5問への接続

後続Topicの詳細論点は追加していない。

## 過去問対応ゲート
制作前の選定5問は、公式解答を先に見ず独立再解答し、公式と5/5一致済み。

1. R7上 電力 問13 — PASS
2. R6下 電力 問12 — PASS
3. R6上 電力 問11 — PASS
4. R4上 電力 問8 — PASS
5. R1 電力 問7 — PASS

`EXAM_ALIGNMENT_SPEC.md` に従い、成果物完成後の独立再解答は別途必要。今回runではそこまで進めていない。

## PowerPoint QA
- 16:9・4枚
- LibreOfficeでPDFへ変換
- pdftoppm 140 dpiで全4枚をレンダリング確認
- 文字欠け・重なり・クリッピングなし
- 解説本文の既定範囲のみを図解し、追加仕様・追加論点なし

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
Topic 01: `IN_PROGRESS`。`EXAM_ALIGNMENT_GATE_PASS`、解説本文・解説PDF・練習PDF・解説画像PowerPoint完成。完成後独立再解答が未完了なので完成数は0/16のまま。

## 次の正確な開始点
選定5問を、保存済み正答を先に見ず、完成教材だけで独立再解答し、公式解答と照合して最終PASSを判定する。
