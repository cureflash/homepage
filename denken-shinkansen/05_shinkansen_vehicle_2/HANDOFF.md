# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜16は最終QAまで `PASS / completed`。完成数は `16 / 39`。

現在地は `topic_17_powerpoint_complete`。Topic 17 `パワー半導体の損失比較` は、制作前EXAM_ALIGNMENTで固定した一次4問＋二次1問・26答案要素を変更せず、解説source、解説PDF、練習問題source、練習PDF、解説画像PowerPointまで完成した。

解説画像PowerPointは16:9・4枚。1600×900表示QA `4 / 4 PASS`、PPTX ZIP整合性、LibreOffice PDF変換、python-pptx open、PDF文字抽出はPASS。固定5問・26答案要素への可視化・接続 `26 / 26 PASS`、SPEC指定7項目 `7 / 7 covered`、指定3可視化 `3 / 3 PASS`。固定EXAM_ALIGNMENT変更、SPEC外追加、未確認700系実車値の真値化はすべて0件。

次工程はTopic 17の完成後独立再解答前ゲートを作成する。完成数はまだ `16 / 39` のまま。

## Topic 17 固定EXAM_ALIGNMENT

source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison.md`

固定過去問:
- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R2 一次 機械 問2 (1)〜(5)
- H24 一次 機械 問6 (1)〜(5)
- H24 二次 機械・制御 問1 (1)〜(6)

品質ゲート:
- 一次: `4問・20答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・26答案要素`
- 制作前独立検証: `26 / 26 PASS`
- 公式解答／標準解答との内容不一致: `0件`
- 参考教材2系統以上: `PASS / e-sysnet.com + 電験王2`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## Topic 17 必須成果物

- 解説source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation_source.md` — `PASS`
- 解説PDF: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation.pdf` — `PASS / 4 pages`
- 練習source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_practice_source.md` — `PASS / 一次8＋二次4`
- 練習PDF: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_practice.pdf` — `PASS / 6 pages`
- PowerPoint: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_images.pptx` — `PASS / 4 slides`
- PowerPoint QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_powerpoint_qa.md`

PowerPoint QA:
- 16:9: `4枚`
- 1600×900表示: `4 / 4 PASS`
- LibreOffice PDF変換: `PASS / 4ページ`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 固定5問・26答案要素への可視化・接続: `26 / 26 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通一般仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / POWERPOINT_COMPLETE`

## Topic 17 範囲境界

- Topic 16のPWM・スイッチング周波数は前提確認だけに使い、多レベル波形・高調波解析は再展開しない。
- 後続TopicのSiC採用・機器小型化は先取りしない。
- 接合温度・冷却は損失から温度上昇へ接続する最小限の熱抵抗モデルまで扱う。
- 素子比較は一般モデル・教材内仮定値で行い、未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

教材用一般モデル:
- `P_cond≈V_onDI` または `I_rms,on^2R_on`
- `P_sw=f_s(E_on+E_off)`
- `T_j=T_a+P_lossR_θ`
- `η=P_out/(P_out+P_loss)`
- `V_a=D V_state1+(1-D)V_state2`

## 過去Topic

Topic 01〜16の個別の固定EXAM_ALIGNMENT、成果物、blind再解答、最終QA、既知注意事項は各Topic配下のsource・QAを正本とする。

## 次工程

Topic 17「パワー半導体の損失比較」の完成後独立再解答前ゲートを作成する。固定EXAM_ALIGNMENT・固定5問・26答案要素・SPEC指定7項目・3可視化は変更しない。
