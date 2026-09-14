# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_explanation_pdf_resynced`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05のsource進捗メタデータを解説PDF同期済みにそろえる

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 初回独立再解答5/5正答だが教材のみゲートで不足した既存要求事項2点をsourceへ補強し、解説PDFにも同期・全ページ表示QA済み。再独立再解答前のため `completed` にはしない
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`
解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf`
独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`

制作前EXAM_ALIGNMENTで固定した5問は変更していない。初回独立再解答は候補解答 `(4),(5),(1),(2),(3)` で公式解答と5/5一致したが、R2 電力 問5の日射代表値とR8上 電力 問5のNaS電池エネルギー密度比較が完成教材に不足していたため `NEEDS_REVISION / FAIL` とした。

前回sourceへ補強した次の2点を、今回解説PDFへ同期した。
1. R2 電力 問5 — 地表に入射する太陽光エネルギーの代表値 `約1 kJ/(m²·s)`（=`約1 kW/m²`）
2. R8上 電力 問5 — ナトリウム・硫黄電池の単位質量当たりエネルギー密度は、同問では鉛蓄電池の約3倍として扱う

解説PDFはA4縦4ページ。200 dpiで全4ページ表示QA PASS。クリップ、重なり、文字化けはなく、上記2点が学習者向けPDFに明示されていることを確認した。

固定5過去問、SPEC固定範囲、除外問題は変更していない。バイオマス、小水力、洋上風力の直流送電等は追加していない。完成数は `4 / 16` のまま。

source本文の知識内容は補強済みだが、source冒頭の状態・末尾の次工程はPDF未同期時点の記録のため、次工程で進捗メタデータだけを同期する。

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
Topic 05 sourceの状態・次工程だけを、解説PDF同期済みの現在地へそろえる。教材本文、固定5過去問、SPEC固定範囲、除外問題は変更しない。