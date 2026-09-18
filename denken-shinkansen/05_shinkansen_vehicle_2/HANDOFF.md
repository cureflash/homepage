# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜17は最終QAまで `PASS / completed`。完成数は `17 / 39`。

現在地は `topic_17_completed`。次の未完了テーマは Topic 18 `E2系 50Hz・60Hzと磁束`。

## Topic 17 完了記録

最終QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_final_qa.md`

判定: `PASS / completed`

固定EXAM_ALIGNMENT:
- R7 一次 機械 問4 (1)〜(5): 5要素
- R4 一次 機械 問4 (1)〜(5): 5要素
- R2 一次 機械 問2 (1)〜(5): 5要素
- H24 一次 機械 問6 (2)(3): 2要素
- H24 二次 機械・制御 問1 (1)〜(6): 6要素
- 一次: `17答案要素`
- 二次: `6答案要素`
- 合計: `5問・23答案要素`

H24一次 問6は問題自体を固定5問の一つとして維持するが、Topic 17に直接対応する `(2) 放熱設計`、`(3) 半導体接合部温度` のみゲート対象。照明固有の `(1)(4)(5)` は固定SPEC外として対象外。

完成後clean blind:
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 候補答案変更: `0件`
- 教材外知識での補完: `0件`
- 固定問題差替え: `0件`

成果物:
- 解説source: `PASS`
- 解説PDF: `PASS / 4 pages / 180 dpi 4 / 4`
- 練習source: `PASS / 一次8＋二次4`
- 練習PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- PowerPoint: `PASS / 4 slides / 1600×900 4 / 4`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

前回最終QAで検出した旧26答案要素前提の6記録は、是正後 `5問・23答案要素` とclean blind `23 / 23 PASS` へ同期済み。PDF/PPTX本体・問題・正答・数式・固定過去問は変更していない。

履歴:
- 再監査: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md`
- clean blind候補: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md`
- 旧 `blind_reanswer_gate.md` と旧 `blind_reanswer_candidates.md` は再マッピング前の履歴として保存

## Topic 18 固定SPEC境界

`SPEC.md` Topic 18 の固定範囲は次のとおり。

主題:
- 異なる電源周波数が変圧器・主変換装置・誘導機へ与える条件を解析する。

扱う内容:
- V/f
- 磁束
- 変圧器誘起電圧
- 鉄心磁束密度
- 同期速度
- インバータ出力周波数
- 機器定格

指定計算・グラフ:
- 周波数―磁束密度
- V/f特性
- 周波数―同期速度

この範囲を勝手に追加・変更しない。

## 次工程

Topic 18の制作前EXAM_ALIGNMENTを行う。最新mainと他worker成果をreconcileし、二種一次・二次を含む公式過去問を直近年度から調査して固定する。本文・PDF・PowerPoint等はEXAM_ALIGNMENT確定前に作らない。不整合や確定不能事項があれば推測せずblockerを記録して停止する。