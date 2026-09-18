# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜16は最終QAまで `PASS / completed`。完成数は `16 / 39`。

現在地は `topic_17_blind_reanswer_needs_revision`。Topic 17 `パワー半導体の損失比較` は、解説source、解説PDF、練習問題source、練習PDF、解説画像PowerPointまで完成済みで、成果物自体のQAはPASSしている。

完成後blind再解答を試行したところ、固定26答案要素のうち `23 / 26` はTopic 17教材だけで再導出できたが、H24一次「機械」問6の(1)(4)(5)は教材未収録だった。これらは電球形LEDランプの部品名、光への変換、自然空冷照明器具の具体的設計周囲温度という照明固有知識であり、Topic 17のSPEC固定範囲外である。教材へ追記すると仕様外追加になるため、現状をPASS扱いせずEXAM_ALIGNMENTの採用単位・マッピングを再監査する。

候補答案試行は `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates.md` に保存した。公式解答・標準解答は開いていない。

また本runでは工程形式確認のためTopic 16の候補答案記録を参照し、同一設問であるR7一次問4・R4一次問4の候補を事前に目にしている。Topic 17教材から再導出はしたが、strict blind provenanceのため、この10要素は次のclean runでTopic 16候補答案を参照せず再固定する。

## Topic 17 固定EXAM_ALIGNMENT

source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison.md`

固定過去問:
- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R2 一次 機械 問2 (1)〜(5)
- H24 一次 機械 問6 (1)〜(5)
- H24 二次 機械・制御 問1 (1)〜(6)

制作前固定時の記録:
- 一次: `4問・20答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・26答案要素`
- 制作前独立検証: `26 / 26 PASS`
- 参考教材2系統以上: `PASS / e-sysnet.com + 電験王2`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

ただし完成後blind再解答でH24一次問6の3要素が教材外と判明したため、制作前の `26 / 26` 接続判定を最終品質ゲートには使用しない。

## Topic 17 必須成果物

- 解説source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation_source.md` — `PASS`
- 解説PDF: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation.pdf` — `PASS / 4 pages`
- 練習source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_practice_source.md` — `PASS / 一次8＋二次4`
- 練習PDF: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_practice.pdf` — `PASS / 6 pages`
- PowerPoint: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_images.pptx` — `PASS / 4 slides`
- PowerPoint QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_powerpoint_qa.md`
- blind再解答前ゲート: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_gate.md` — `事前PASS / BLIND_REANSWER_READY`
- blind再解答候補試行: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates.md` — `NEEDS_REVISION / 23_OF_26_DERIVABLE`

## Topic 17 blind再解答試行

- R7一次: `5 / 5` 教材内再導出
- R4一次: `5 / 5` 教材内再導出
- R2一次: `5 / 5` 教材内再導出
- H24一次: `2 / 5` 教材内再導出、`3 / 5` 教材未収録
- H24二次: `6 / 6` 教材内再導出
- 合計: `23 / 26` 教材内再導出
- 教材未収録: H24一次 問6 (1)、(4)、(5)
- 公式解答・標準解答参照: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定7項目・3可視化変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- completed化: `不可`

H24一次 問6で教材内再導出できたのは、損失・放熱に関する(2)と接合温度に関する(3)。一方、(1)(4)(5)はTopic 17の7項目から外れるため、問題全体を5要素すべてゲート対象にした固定マッピングが適切だったかを再監査する必要がある。

## Topic 17 範囲境界

- 扱う内容: 導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。
- 指定可視化: 電流―導通損失、スイッチング周波数―損失、出力―変換効率。
- Topic 16のPWM・スイッチング周波数は前提確認だけに使い、多レベル波形・高調波解析は再展開しない。
- 後続TopicのSiC採用・機器小型化は先取りしない。
- 接合温度・冷却は損失から温度上昇へ接続する最小限の熱抵抗モデルまで扱う。
- 未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

教材用一般モデル:
- `P_cond≈V_onDI` または `I_rms,on^2R_on`
- `P_sw=f_s(E_on+E_off)`
- `T_j=T_a+P_lossR_θ`
- `η=P_out/(P_out+P_loss)`
- `V_a=D V_state1+(1-D)V_state2`

## 次工程

公式解答・標準解答はまだ開かない。H24一次「機械」問6の採用単位とTopic 17のSPEC境界を再監査し、仕様追加なしでEXAM_ALIGNMENTの誤マッピングを是正できるか判定する。その後、R7/R4を含む候補答案をclean条件で再固定する。