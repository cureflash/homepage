# Topic 09 練習PDF — BLOCKER

更新日: 2026-09-16

## 状態
- 判定: `BLOCKED / IN_PROGRESS`
- 対象工程: Topic 09「直流機方式の損失・熱設計」練習PDF
- `STATUS.md` / `HANDOFF.md` の正本上の次工程は練習PDFのまま維持する。
- 完成数 `8 / 39` は変更しない。

## 完了済みのローカル検証
`09_dc_machine_loss_thermal_design_practice_source.md` の固定範囲だけから、A4縦4ページの練習PDFを生成し、以下を検証した。

- 一次8問＋二次4問: 全件収録
- 一次正答・解説、二次途中式・単位・理由説明: 収録
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・14対象項目を維持
- 計算・論理QA: `12 / 12 PASS`
- 文字抽出: `PASS`
- Unicode置換文字: `0件`
- 固定範囲外論点追加: `0件`
- 未確認100系・200系実車値追加: `0件`

## exact blocker
現在使用可能なGitHub書込コネクタでは、UTF-8テキストは正本へ直接反映できる一方、生成済みPDFのローカルファイルをファイル参照として渡す書込経路がない。Git blobのbase64書込は可能だが、この実行環境では長いbinary payloadを完全性保証付きで転送できず、試行時にpayload切断を検出した。

不完全なPDFを正本へ置くことは品質ゲート違反になるため、PDF本体はcommitしていない。試行用の一時ファイルは削除済みで、正本ツリーには残していない。

## 再開条件
PDFバイト列を欠落なくGitHub blobへ書き込める経路が確保できた時点で、生成済みPDFを正本へ反映し、GitHub上の実ファイルを再取得して表示・文字抽出・SHA-256整合を再確認する。その後に `topic_09_practice_pdf_complete` へ進める。
