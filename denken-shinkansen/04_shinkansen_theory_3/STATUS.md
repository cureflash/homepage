# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 2 / 14
- current_status: `topic_03_practice_pdf_complete`
- last_completed_topic: `02 なぜ新幹線は25,000Vなのか`
- active_topic: `03 架線はただの銅線ではない`
- next_start: Topic 03の確定済みEXAM_ALIGNMENT・解説PDF・練習PDFを基準に、解説画像PowerPointを作成する

## Topic 01 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 02 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 03 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 03固定範囲でゲート対象6問を確定
- [x] Topic 05以降へ送る境界論点を整理
- [x] e-sysnet、電験王、電験三種まとめましたの説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 03 `架線はただの銅線ではない` を1段階進め、確定済みEXAM_ALIGNMENTと系列SPECだけを基準に練習問題source・練習PDFを作成した。

更新成果物:
- 練習source: `topics/03_catenary_resistance/03_catenary_resistance_practice.md`
- 練習PDF: `topics/03_catenary_resistance/03_catenary_resistance_practice.pdf`

練習問題:
- 全15問、全問五肢択一
- 基礎4問（26.7%）
- 本試験標準8問（53.3%）
- 複合・応用3問（20.0%）
- 選定済み6過去問が要求する `R=ρl/S`、直列・並列、未知抵抗逆算、温度係数、一定電圧時の電流変化、電力比較、電圧降下を全件練習問題へ対応付けた
- 解答は使用式、式を選ぶ理由、代入、中間値、最終値、主要誤答ポイントを収録
- Q12の新幹線接続値は既存sourceと同じ教材用仮定値のみを使用し、実車値として扱っていない
- キルヒホッフ則、最大電力供給、正弦波、RLC等の後続Topic論点は追加していない

練習PDF QA:
- A4縦6ページ
- 200 dpiで全6ページを再レンダリングし、文字切れ・重なり・黒塗り・欠落なしを確認
- PDF preflight: 6ページ、openable、非暗号化、スキャンPDFではない
- SPEC範囲外の仕様追加: なし

## 判定

Topic 03は `PRACTICE_PDF_COMPLETE / IN_PROGRESS`。完成数は `2 / 14` のまま。次工程は解説画像PowerPointの作成。
