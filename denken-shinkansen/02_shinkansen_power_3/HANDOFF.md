# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07のEXAM_ALIGNMENT再監査を完了し、`topics/07_phase_conversion/07_phase_conversion_exam_alignment_reaudit.md` を追加した。

初回固定5問・8小問は公式解答と `8 / 8` 一致したが、教材のみ完結は `2 / 8` だった。教材外補完を要したR7下理論問15、R5下理論問15、H27機械問7について、固定問題を通すためだけのRLC、力率・インピーダンス分解、Δ-Y/Y-Δ位相差等を教材へ追加せず、公式過去問側を再監査した。

R8上〜H18の第三種理論「三相交流」問題一覧と、第三種のスコット結線・三相変圧器候補を再確認した。RLC、力率改善、Δ-Y等価変換、二電力計、複素量・厳密ベクトル等、Topic 07固定範囲外の中間知識を必要とする問題は固定対象にしない。

新規にH22理論問9を確認した。平衡Y結線の線間/相電圧、線/相電流、三相電力、中性線電流を問う問題で、完成済みTopic 07教材の範囲だけで `(4)` と独立解答でき、公式解答と一致した。

この再監査により、現行SPEC固定範囲へ直接対応し完成教材だけで完答できる公式過去問は次の3問と確定した。

1. R4上 機械 問9 — スコット結線・二次90° — `(3)`
2. H30 電力 問8 — 変圧比・三相電力 — `(3)`
3. H22 理論 問9 — Y結線・線間/相関係・三相電力 — `(4)`

`MASTER_SPEC.md` の「該当問題が5問未満しか確認できない場合は確認できた全件を対象」とする例外を適用し、改定品質ゲートを `3問 / 3解答項目` とした。SPEC固定範囲変更0件、固定範囲外教材追加0件。

## 現在状態
- `current_status`: `topic_07_exam_alignment_reaudit_complete`
- 完成数: `6/16`
- last completed: Topic 06 `275,000Vをどうやって25,000Vにする？`
- active: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- source: `topics/07_phase_conversion/07_phase_conversion.md`
- EXAM_ALIGNMENT再監査: `topics/07_phase_conversion/07_phase_conversion_exam_alignment_reaudit.md`
- 解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
- 練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
- 練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`
- 解説画像PowerPoint: `topics/07_phase_conversion/07_phase_conversion_images.pptx`
- PowerPoint QA: `topics/07_phase_conversion/07_phase_conversion_powerpoint_qa.md`
- 初回独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md`

## 初回FAIL理由
- R7下 理論 問15(a)(b): 並列L/Cの無効電流相殺 `ωL=1/(ωC)` と並列RLCの有効電力処理がTopic 07教材にない。
- R5下 理論 問15(a)(b): `|Z|=V/I`、`cosφ=R/|Z|` からR/Xを求める中間知識がTopic 07教材にない。
- H27 機械 問7: Δ-Y/Y-Δの一次二次位相差30°がTopic 07教材にない。

これらは改定品質ゲートから除外し、教材範囲は広げない。

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

## 既存成果物QA
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦3ページ・全12問・全問五肢択一、数値問題独立再計算 `8 / 8 PASS`、表示QA・文字抽出QA・正答一意性PASS
- 解説画像PowerPoint: 16:9・4枚、全4枚表示QA、境界外はみ出し0件、PPTX ZIP整合性PASS
- SPEC固定範囲外追加: 0件

## 次の正確な開始点
Topic 07の改定EXAM_ALIGNMENT 3問を `07_phase_conversion.md` へ同期する。その後、R4上機械問9、H30電力問8、H22理論問9を完成教材だけで改めて独立再解答する。固定範囲は拡張しない。
