# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 6 / 16
- current_status: `topic_07_exam_alignment_reaudit_complete`
- last_completed_topic: `06 275,000Vをどうやって25,000Vにする？`
- active_topic: `07 なぜ三相交流をそのまま架線へ流さない？`
- next_start: Topic 07の改定EXAM_ALIGNMENT（R4上機械問9、H30電力問8、H22理論問9の3問）を主sourceへ同期し、完成教材だけで改めて独立再解答する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、最終QA PASS
- [x] 05 新幹線を再エネだけで走らせられる？ — 固定5過去問、必須成果物、表示QA、修正版教材での独立再解答5/5 PASS、教材外知識補完0件、SPEC境界を最終QAで確認し `completed`
- [x] 06 275,000Vをどうやって25,000Vにする？ — 固定5過去問、必須成果物、表示QA、完成後独立再解答5/5 PASS、教材外知識補完0件、source進捗整合・SPEC境界を最終QAで確認し `completed`
- [ ] 07 なぜ三相交流をそのまま架線へ流さない？ — 必須成果物まで完成。初回完成後独立再解答で教材外補完6小問を検出し `NEEDS_REVISION`。EXAM_ALIGNMENT再監査を完了し、SPEC固定範囲内で完答できる公式過去問をR4上機械問9・H30電力問8・H22理論問9の3問へ見直した。次は主source同期＋改定3問の独立再解答
- [ ] 08〜16 — 未完了

## Topic 05 完了記録
source: `topics/05_renewable_energy/05_renewable_energy.md`
解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf`
練習PDF: `topics/05_renewable_energy/05_renewable_energy_practice.pdf`
解説画像PowerPoint: `topics/05_renewable_energy/05_renewable_energy_images.pptx`
PowerPoint QA: `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`
独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`
最終QA: `topics/05_renewable_energy/05_renewable_energy_final_qa.md`

固定5過去問:
- R8上 電力 問5: `(4)` — PASS
- R7下 電力 問5: `(5)` — PASS
- R6上 電力 問5: `(1)` — PASS
- R5上 電力 問5: `(2)` — PASS
- R2 電力 問5: `(3)` — PASS

公式解答との一致 `5 / 5`、教材のみ完結 `5 / 5`、教材外知識補完 `0件`。初回FAIL原因だった日射代表値とNaS電池エネルギー密度比較はsource・解説PDFへ補強済み。

表示QA:
- 解説PDF: 補強後A4縦4ページ、200 dpi全ページPASS
- 練習PDF: A4縦5ページ・12問、200 dpi全ページPASS、数値問題独立再計算PASS
- PowerPoint: 16:9・4枚、全4枚表示QA・境界外はみ出し・ZIP整合性PASS

固定範囲外のバイオマス、小水力、洋上風力の直流送電等は追加していない。未確認の新幹線消費電力・再エネ設備容量・蓄電容量は実値化していない。

## Topic 06 完了記録
source: `topics/06_substation/06_substation.md`
解説PDF: `topics/06_substation/06_substation_explanation.pdf`
練習PDF: `topics/06_substation/06_substation_practice.pdf`
解説画像PowerPoint: `topics/06_substation/06_substation_images.pptx`
PowerPoint QA: `topics/06_substation/06_substation_powerpoint_qa.md`
独立再解答: `topics/06_substation/06_substation_independent_reanswer.md`
最終QA: `topics/06_substation/06_substation_final_qa.md`

固定5過去問:
- R7下 電力 問6 — 避雷器 — `(1)` PASS
- R6下 電力 問7 — 計器用変成器 — `(4)` PASS
- R4上 電力 問7 — 過電流継電器の限時特性 — `(1)` PASS
- R3 電力 問8 — 断路器 — `(4)` PASS
- R2 電力 問7 — 真空遮断器 — `(5)` PASS

制作前独立検証 `5 / 5 PASS`。固定5過去問の要求事項から逆算した解説本文＋3段階例題をsourceへ完成し、全件を教材節へマッピング済み。

解説PDFはA4縦4ページ。200 dpi全4ページ表示QA・文字抽出QA PASS。

練習PDFはA4縦3ページ・全12問、全問五肢択一。難易度は基礎3／標準7／複合2、全問に完全解説を付けた。固定5過去問は避雷器=問8・12、計器用変成器=問3・5・11・12、過電流継電器=問9・10、断路器=問6・12、真空遮断器=問7へ接続した。200 dpi全3ページ表示QA PASS、文字抽出QA PASS。数値問題は問1=8,800回、問4=440A、問5=3.5A、問11=2.75Aを別計算で再確認し `4 / 4 PASS`。

解説画像PowerPointは16:9・4枚。固定5過去問の要求事項を全件可視化し、全4枚表示QA、`slides_test.py` による境界外はみ出し検査、PPTX ZIP整合性をPASS。固定範囲外論点・未確認実値の追加は0件。

完成後独立再解答は `(1), (4), (1), (4), (5)` で公式解答と `5 / 5` 一致。教材のみ完結 `5 / 5`、教材外知識補完 `0件`、固定範囲外追加 `0件`。sourceの状態・EXAM_ALIGNMENT・次工程への同期も確認済み。

最終QAでは必須成果物の実在、固定5過去問のEXAM_ALIGNMENT、複数系統の参考教材、表示QA、完成後独立再解答、source進捗整合、SPEC固定範囲・除外境界を確認し、全件PASS。Topic 06を `completed` とした。

SPEC固定範囲は変電所、変圧器、母線、遮断器、断路器、計器用変成器、避雷器、保護リレー、受電電圧、き電電圧。GIS、調相設備、短絡電流・遮断容量・%インピーダンス計算、配電線詳細保護、三相→単相変換方式等は追加していない。

## Topic 07 進捗記録
source: `topics/07_phase_conversion/07_phase_conversion.md`
EXAM_ALIGNMENT再監査: `topics/07_phase_conversion/07_phase_conversion_exam_alignment_reaudit.md`
解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`
解説画像PowerPoint: `topics/07_phase_conversion/07_phase_conversion_images.pptx`
PowerPoint QA: `topics/07_phase_conversion/07_phase_conversion_powerpoint_qa.md`
独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md`

初回固定5過去問・8小問:
- R7下 理論 問15(a)(b) — 線間/相電圧・三相電力 — `(3),(3)`
- R5下 理論 問15(a)(b) — Y/Δ・三相電力 — `(3),(4)`
- R4上 機械 問9 — スコット結線・二次90° — `(3)`
- H30 電力 問8 — 変圧比・三相電力 — `(3)`
- H27 機械 問7 — スコット結線・三相側不平衡緩和 — `(3)`

制作前独立検証 `8 / 8 PASS`。公式問題・公式解答を正本とし、電験王・電験三種まとめましたの複数系統で説明粒度と解法を確認した。

解説本文＋3段階例題をsourceへ完成。Y/Δの線間・相関係、平衡三相電力、単相大容量負荷と三相側不平衡、スコット結線の二次90°・T側一次巻数 `√3/2`、変形ウッドブリッジ結線・ルーフ・デルタ結線の概略を固定範囲内で整理した。新幹線側は鉄道・運輸機構の公開資料を一次資料として確認した。

解説PDFはA4縦4ページ。固定5問・8小問へ接続するY/Δの線間・相関係、三相有効電力、単相負荷と三相側不平衡、スコット結線、3方式比較、3段階例題、頻出ミス、過去問対応表を収録した。200 dpi全4ページ表示QA PASS、文字抽出QA PASS。黒四角・欠損文字・はみ出しは最終レンダーで0件。

練習PDFはA4縦3ページ・全12問、全問五肢択一。難易度は基礎3／標準7／複合2で、全問に正答・途中式または理由説明・主要誤答の説明を付けた。初回固定5問・8小問のTopic 07要求事項を全件練習可能にし、200 dpi全3ページ表示QA・文字抽出QA・正答一意性をPASS。数値問題は8問を別計算で再確認し `8 / 8 PASS`。

解説画像PowerPointは16:9・4枚。初回固定5問・8小問の要求事項を全件可視化し、全4枚表示QA、`slides_test.py` による境界外はみ出し検査、PPTX ZIP整合性をPASS。SPEC固定範囲外の追加・未確認実値の追加は0件。

初回完成後独立再解答は公式解答と `8 / 8` 一致したが、教材のみ完結は `2 / 8`。R7下理論問15(a)(b)は並列RLCの相殺・有効電力、R5下理論問15(a)(b)は力率とインピーダンスの関係、H27機械問7はΔ-Y/Y-Δの30°位相差が現在の学習用教材にないため、合計6小問で教材外知識補完が必要だった。`EXAM_ALIGNMENT_SPEC.md` に従い `NEEDS_REVISION` とした。

EXAM_ALIGNMENT再監査では、R8上〜H18の第三種理論・三相交流問題と第三種のスコット結線・三相変圧器候補を再確認した。固定範囲外のRLC、力率・インピーダンス分解、Δ-Y等価変換、二電力計、複素量・厳密ベクトル等を必要とする問題は採用しない。新規にH22理論問9を確認し、既存教材だけで `(4)` と独立解答でき、公式解答と一致した。

改定品質ゲート対象は3問:
- R4上 機械 問9 — `(3)`
- H30 電力 問8 — `(3)`
- H22 理論 問9 — `(4)`

現行SPEC固定範囲へ直接対応し教材だけで完答できる公式過去問が3問しか確認できないため、`MASTER_SPEC.md` の5問未満例外を適用する。SPEC固定範囲変更0件、固定範囲外教材追加0件。

Topic 07固定範囲は三相交流、単相交流、線間/相電圧、三相電力、き電用変圧器、相変換、三相側負荷平衡、スコット結線、変形ウッドブリッジ結線、ルーフ・デルタ結線。二種相当の厳密ベクトル導出、Topic 08以降の電圧降下・線路損失・き電回路詳細、Topic 10の力率改善、Topic 11の短絡・保護へは拡張していない。未確認の個別設備定格・配置も実値化していない。

## 次
Topic 07の改定EXAM_ALIGNMENT 3問を主sourceへ同期し、完成教材だけで3問を改めて独立再解答する。固定範囲は拡張しない。
