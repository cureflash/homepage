# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 3 / 14
- current_status: `topic_04_explanation_pdf_complete`
- last_completed_topic: `03 架線はただの銅線ではない`
- active_topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- next_start: Topic 04の確定済みEXAM_ALIGNMENTと解説本文を基に、練習問題source・練習PDFを作成し、全ページ表示QAを行う

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
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 04 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 04固定範囲でゲート対象6問を確定
- [x] 固定範囲外の近接論点を境界整理
- [x] e-sysnet・電験王の説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [ ] 練習問題source・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` の解説PDFを完成した。

更新成果物:
- `topics/04_electric_field_capacitance/04_electric_field_capacitance_explanation.pdf`

PDF仕様・QA:
- A4縦 6ページ
- 確定済みsourceの本文、3段階例題、6公式過去問への対応、公式・解法まとめを収録
- 200 dpiで全6ページをレンダリングし、文字欠け・数式欠け・重なり・ページ外はみ出しなしを確認
- 文字抽出で置換文字0件、例題1〜3・過去問対応・新幹線への接続・静電エネルギー節の存在を確認

境界は維持:
- 電束密度・ガウスの法則は追加しない
- 絶縁破壊電界、必要離隔距離、沿面距離、アーク、絶縁協調は追加しない
- RC過渡、容量性リアクタンス、RLC・交流位相は後続Topicへ送る
- 未確認の実車静電容量・電界強度・碍子寸法等を真値化しない

## 判定

Topic 04は `EXPLANATION_PDF_COMPLETE`。完成数は `3 / 14` のまま。次工程は練習問題source・練習PDF＋全ページ表示QA。