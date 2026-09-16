# Topic 12 exact blocker — 解説PDFとQA記録の不整合

更新日: 2026-09-16

## 状態

`RESOLVED`

Topic 12「N700Sの6極モーターを設計側から見る」で発生していた、解説PDFと進捗記録の不整合は解消した。

## 原因

`12_n700s_six_pole_motor_design_explanation.pdf` が4ページ成果物へ置換された後、Topic 12 source側では現行PDFに対するQA記録へ修正済みだった一方、`STATUS.md` と `HANDOFF.md` に旧5ページ成果物の記録が残っていた。

現行sourceのQA記録:

- A4縦4ページ
- 200 dpi表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- Unicode置換文字 `0件`
- `□`置換 `0件`
- `(cid:)` `0件`
- 固定一次2問＋二次記述3問、16答案要素: 維持
- 3段階例題: `3 / 3`収録
- 固定範囲外論点・未確認N700S実車値追加: `0件`
- SHA-256: `ba9059d7410cbdabb23c7931b76dceecacfacbe632f5830b5f733f20bdcee954`

## 解消内容

- `STATUS.md` を現行4ページPDFのQA記録へ同期。
- `HANDOFF.md` を現行4ページPDFのQA記録へ同期。
- Topic 12 sourceの技術本文・固定EXAM_ALIGNMENT・3段階例題は変更していない。
- 固定一次2問＋二次3問・16答案要素は変更していない。
- 仕様追加 `0件`。
- 未確認N700S実車値追加 `0件`。

## 次工程

`BLOCKED_BEFORE_PRACTICE_SOURCE` を解除した。次はTopic 12の練習問題sourceを作成する。