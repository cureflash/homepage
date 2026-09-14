# Topic 05 PowerPoint QA

実施日: 2026-09-14

対象:
`05_integral_energy_images.pptx`

判定: `PASS`

## 内容

- 16:9、全5スライド
- Slide 1: `E=∫Pdt` / `W=∫Fdx` / `W=∫w dV`、平均値/RMS、解法判定
- Slide 2: R4二次 問3(1) の RMS→波高値→三相全波整流平均値積分
- Slide 3: H25一次 問1の電界エネルギー、一定電圧、電源との授受、外力仕事
- Slide 4: R7/R6/R2 の磁気エネルギー、結合、円柱体積積分、鎖交磁束保存
- Slide 5: 固定6問・16対象項目対応表とSPEC境界

## QA

- LibreOfficeでPDF変換: PASS
- 全5スライド表示確認: PASS
- 文字切れ・重なり・空白ページ・文字化け: なし
- キャンバス外はみ出し: なし (`slides_test.py` PASS)
- ZIP整合性: PASS
- 固定EXAM_ALIGNMENT 6問・16対象項目との接続: 維持
- Topic 06以降、選定問題の対象外小問、未確認実車値・実車固有制御則: 追加なし

## 次工程

完成教材だけを使い、保存済み正答を先に見ずに固定6問・16対象項目を独立再解答し、公式解答・標準解答と照合する。
