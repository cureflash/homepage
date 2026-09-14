# HANDOFF

updated: 2026-09-14
series: `06_shinkansen_power_2`
active_topic: `04`
current_status: `topic_04_powerpoint_complete`

## 今回完了

Topic 04「むつの原子炉を積んだ原子力新幹線を東京から佐世保まで走らせる」の解説画像PowerPointを完成した。

成果物:
- `topics/04_nuclear_power/04_nuclear_power_images.pptx`
- `topics/04_nuclear_power/04_nuclear_power_powerpoint_qa.md`
- 16:9・4スライド
- 全4スライド表示QA: `PASS`
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS`

正式選定5問は変更なし:
- R7 二種一次「電力」問5
- H22 二種一次「電力」問1
- R3 二種一次「電力」問5
- R1 二種二次「電力・管理」問1
- R3 二種二次「電力・管理」問6

PowerPointでは固定範囲だけを可視化した。T-s線図・潜熱・過熱蒸気・臨界点、ランキンサイクル・再熱・再生、多段効率・所内電力、非常用電源・停止時補機、速度調定率・並列負荷分担を固定5問へ接続した。

制作前独立検証 `5 / 5 PASS`、練習15問独立QA `15 / 15 PASS` を維持。教材外知識補完、SPEC外追加、未確認実設備値追加はいずれも `0件`。

## 次に行う

Topic 04 の完成後独立再解答を実施する。

正式選定5問について、保存済み正答を先に見ず、完成教材だけで一次3問・二次2問を再解答する。教材外知識で補完した場合はFAILとする。

## 範囲境界

Topic 04は `SPEC.md` 記載の原子炉熱出力、蒸気発生、タービン出力、発電端出力、所内電力、熱効率、多段効率、負荷変動、負荷追従、主機トリップ等の過渡応答概念を上限とする。

核燃料サイクル、放射線・遮蔽・被ばく、原子炉事故時の放射線安全、法規制、社会的受容、新型炉等へ拡張しない。
