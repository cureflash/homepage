# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_practice_pdf_complete`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05の解説画像PowerPoint。SPEC固定範囲と固定5過去問の要求事項を維持し、引用元を明記して表示QAを行う

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF完了。解説画像PowerPoint以降は未着手
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`

制作前EXAM_ALIGNMENTで固定した公式過去問5問を変更せず、解説本文・3段階例題・解説PDFに続き、練習PDF `topics/05_renewable_energy/05_renewable_energy_practice.pdf` を完成した。A4縦5ページ、全12問、基礎3／標準7／複合2、全問五肢択一＋完全解説。200 dpiで全5ページをレンダリング確認し、文字欠け・重なり・ページ外はみ出しなしでPASS。計算問題も独立再計算済み。未確認の列車消費電力・再エネ設備容量・蓄電容量は実値化しておらず、SPEC固定範囲外の論点も追加していない。

固定5過去問と練習問題の対応:
1. R8上 電力 問5 — 蓄電池・出力平滑化 → Q6, Q10
2. R7下 電力 問5 — 風力・誘導発電機・系統並列 → Q4
3. R6上 電力 問5 — 燃料電池 → Q5
4. R5上 電力 問5 — 風力・`P ∝ v^3` → Q2, Q11
5. R2 電力 問5 — 太陽光・パワーコンディショナ・需給 → Q1, Q7, Q12

SPEC固定範囲の地熱・設備利用率・発電量変動もQ3, Q8, Q9, Q12で確認する。

### 未着手成果物
- 解説画像PowerPoint
- 完成後独立再解答
- 最終QA

固定範囲外のバイオマス、小水力、洋上風力の直流送電等は追加していない。地熱発電はSPEC固定範囲なので教材へ収録するが、品質ゲート対象過去問は変更していない。

## Topic 04
Topic 04は最終QA PASSで `completed`。固定6過去問の完成後独立再解答6/6 PASS、教材外知識補完0件、仕様外追加0件。

完成成果物:
- source: `topics/04_nuclear_power/04_nuclear_power.md`
- 解説PDF: `topics/04_nuclear_power/04_nuclear_power_explanation.pdf`
- 練習PDF: `topics/04_nuclear_power/04_nuclear_power_practice.pdf`
- 解説画像PowerPoint: `topics/04_nuclear_power/04_nuclear_power_images.pptx`
- PowerPoint QA: `topics/04_nuclear_power/04_nuclear_power_powerpoint_qa.md`
- 独立再解答: `topics/04_nuclear_power/04_nuclear_power_independent_reanswer.md`
- 最終QA: `topics/04_nuclear_power/04_nuclear_power_final_qa.md`

## 次
Topic 05の解説画像PowerPointを作成する。固定5過去問の要求事項とSPEC固定範囲を外さず、引用画像は同一スライドと末尾一覧に出典を明記し、表示QAを行う。仕様外論点は追加しない。完成数は `4 / 16` のまま。