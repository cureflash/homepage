# Topic 12 exact blocker — 解説PDFとQA記録の不整合

更新日: 2026-09-16

## 状態

`BLOCKED_BEFORE_PRACTICE_SOURCE`

Topic 12「N700Sの6極モーターを設計側から見る」は、練習問題sourceへ進む前に解説PDFの成果物整合を復旧する必要がある。

## 確認した最新main

- main HEAD: `b365aa554bbaeaa498c066a3d6d79953e5f1e2a2`
- commit message: `Replace Topic 12 explanation PDF with verified artifact`
- このcommitで変更されたのは `12_n700s_six_pole_motor_design_explanation.pdf` のみ。
- 現在のPDF Git blob SHA: `c02c540195e3d6c22bc3a961b003007c0a6807f5`

## exact blocker

`STATUS.md`、`HANDOFF.md`、Topic 12 sourceは、解説PDFについて次を記録したままである。

- A4縦5ページ
- 200 dpi表示QA `5 / 5 PASS`
- SHA-256 `318e5335e69fa35c049debb134e708ef0222a34823196c9beedd45d49295218c`

しかし、最新mainで置換された現在のPDFはPDF page treeで `/Count 4` を持ち、4ページ成果物である。置換後PDFのGit blob SHAも、記録時の成果物とは異なる。

したがって、現在のGitHub正本は「5ページ成果物に対するQA記録」と「4ページの実在PDF」が一致していない。既存の `5 / 5 PASS` と記録済みSHA-256を現在のPDFへそのまま流用してはいけない。

## 解除条件

次のどちらかを完了するまで先へ進まない。

1. QA済みの正しい5ページPDFを復元し、記録済みQA・SHA-256と一致させる。
2. 現在の4ページPDFを対象に表示QA・文字抽出QA・固定5問16答案要素・3段階例題・固定範囲境界を再検証し、`STATUS.md` / `HANDOFF.md` / Topic 12 sourceのページ数・QA結果・SHA-256を実成果物へ同期する。

## 今回の扱い

- 練習問題sourceは作成しない。
- 固定EXAM_ALIGNMENT、教材本文、過去問対応、仕様範囲は変更しない。
- 推測でQA記録を更新しない。
- 仕様追加 `0件`。
