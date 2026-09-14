# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07の練習PDF `topics/07_phase_conversion/07_phase_conversion_practice.pdf` を完成した。A4縦3ページ・全12問、全問五肢択一。難易度は基礎3／標準7／複合2で、全問に正答・途中式または理由説明・主要誤答の説明を付けた。

固定5問・8小問のTopic 07要求事項を全件練習可能にし、200 dpi全3ページ表示QA・文字抽出QA・正答一意性をPASS。数値問題8問は別計算で `8 / 8 PASS`。QA記録は `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`。

制作前EXAM_ALIGNMENTの固定5問・8小問と `SPEC.md` の固定範囲は変更していない。Topic 08以降の電圧降下・線路損失、Topic 10の力率改善、Topic 11の短絡・保護、対称座標法・不平衡率の厳密計算、二種相当の厳密ベクトル導出、未確認の個別設備定格・配置は追加していない。

## 現在状態
- `current_status`: `topic_07_practice_pdf_complete`
- 完成数: `6/16`
- last completed: Topic 06 `275,000Vをどうやって25,000Vにする？`
- active: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- source: `topics/07_phase_conversion/07_phase_conversion.md`
- 解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
- 練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
- 練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`

## Topic 07 固定過去問
1. R7下 理論 問15(a)(b) — 線間/相電圧・三相電力 — `(3),(3)` PASS
2. R5下 理論 問15(a)(b) — Y/Δ・三相電力 — `(3),(4)` PASS
3. R4上 機械 問9 — スコット結線・二次90°・鉄道給電 — `(3)` PASS
4. H30 電力 問8 — 変圧比・三相電力 — `(3)` PASS
5. H27 機械 問7 — スコット結線・三相→直交二相・負荷平衡 — `(3)` PASS

制作前独立検証: `5問・8小問 / 8 PASS`。

## Topic 07 SPEC固定範囲
- 三相交流
- 単相交流
- 線間電圧
- 相電圧
- 三相電力
- き電用変圧器
- 相変換
- 三相側の負荷平衡
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線

理解目標は、三相から単相2回路を取り出す理由、各結線の目的、三相側不平衡の抑制、スコット結線の基本電圧関係、変形ウッドブリッジ・ルーフデルタが新幹線で使われる理由の概略まで。二種相当の厳密ベクトル導出は行わない。

境界:
- Topic 08以降の電圧降下・線路損失・き電回路詳細へ広げない
- Topic 10の力率改善へ広げない
- Topic 11の短絡・保護へ広げない
- 変形ウッドブリッジ結線・ルーフ・デルタ結線は概略に留める
- 未確認の個別新幹線変電所の結線・定格・配置を実値化しない

## 過去問から逆算した教材必須事項
- Y結線の `V_L=√3 V_phase`
- 三相有効電力 `P=√3 V_L I_L cosφ = 3V_phase I_phase cosφ`
- 大容量単相負荷を三相の一相だけから取ると三相側不平衡を生じること
- スコット結線はM/T変圧器2台で三相を直交する二つの単相（二相）へ変換すること
- スコット二次の2回路は180°ではなく90°位相差
- T側一次巻数がM側の `√3/2` に対応する基本関係
- 二相側負荷を平衡させると三相側不平衡を抑えられること
- スコット、変形ウッドブリッジ、ルーフ・デルタの目的を新幹線き電用変圧器として概略比較すること

## 練習PDF
- 全12問・全問五肢択一
- 基礎3／標準7／複合2
- 正答: `(3),(4),(3),(3),(4),(4),(3),(2),(2),(1),(2),(4)`
- 数値問題独立再計算: `8 / 8 PASS`
- 200 dpi全3ページ表示QA: PASS
- 文字抽出QA: PASS
- 正答一意性: PASS
- 固定5問・8小問の要求事項: 全件マッピング済み

## 次の正確な開始点
Topic 07「なぜ三相交流をそのまま架線へ流さない？」の解説画像PowerPointを作成し、表示QA・はみ出し検査・PPTX整合性を確認する。固定5問・8小問とSPEC境界を維持し、PowerPoint後もTopic 07を `completed` にはしない。