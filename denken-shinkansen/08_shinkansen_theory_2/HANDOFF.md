# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜11は `PASS / completed`。完成数は `11 / 21`。

current_status: `topic_12_final_qa_needs_revision`

active_topic: `12 三相交流を新幹線へ渡す`

Topic 12は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF＋QA、解説画像PowerPoint＋表示QA、完成後独立再解答、初回最終QAまで実施済み。固定公式過去問H23一次「理論」問6 (1)〜(5)は完成後独立再解答 `5 / 5 PASS`、二次採用0問・二次数合わせ0件。初回最終QAは技術内容・成果物QAはPASSだが、主source・練習sourceの旧進捗記録が残るため `NEEDS_REVISION / IN_PROGRESS`。

次工程はTopic 12の旧進捗記録同期。その後に最終QAを再実施する。

## Topic 12 成果物

- source: `topics/12_three_phase_ac/12_three_phase_ac.md`
- 解説PDF: `topics/12_three_phase_ac/12_three_phase_ac_explanation.pdf`
- 練習source: `topics/12_three_phase_ac/12_three_phase_ac_practice.md`
- 練習PDF: `topics/12_three_phase_ac/12_three_phase_ac_practice.pdf`
- PowerPoint: `topics/12_three_phase_ac/12_three_phase_ac_images.pptx`
- PowerPoint QA: `topics/12_three_phase_ac/12_three_phase_ac_powerpoint_qa.md`
- 独立再解答: `topics/12_three_phase_ac/12_three_phase_ac_reanswer.md`
- 最終QA: `topics/12_three_phase_ac/12_three_phase_ac_final_qa.md`
- stage: `FINAL_QA_NEEDS_REVISION`
- completion: `IN_PROGRESS`

## Topic 12 固定範囲

系列SPECどおり次だけを扱う。

- Y結線
- Δ結線
- 相電圧
- 線間電圧
- 相電流
- 線電流
- 三相電力
- 平衡三相回路
- ベクトル図

境界:

- 不平衡三相回路・対称座標法・地絡/短絡計算を追加しない
- 単位法・百分率インピーダンスを追加しない
- 送配電線の電圧降下・損失設計を追加しない
- 変圧器の等価回路・巻数比・漏れリアクタンス・V結線の機器設計へ広げない
- 同期機・誘導機の機器特性へ広げない
- 新幹線変電所のき電用変圧器の内部結線・未確認実設備値を推測しない
- Topic 13以降の複素電力・高調波・過渡現象を先取りしない

## Topic 12 固定EXAM_ALIGNMENT

品質ゲート対象はH23一次「理論」問6の1問・5小問。

- (1): 120°位相差を持つ三相電圧の複素ベクトル表示
- (2)(3): Y電源の相電圧差からΔ負荷の枝電流を求める
- (4): 接続点で枝電流をベクトル合成して線電流を求める
- (5): 複素ベクトルの大きさから `√3` 関係を得る

公式問題・公式解答を照合済み。制作前独立計算 `5 / 5 PASS`、完成後独立再解答も `5 / 5 PASS`。

原則5問以上の「調査」は、一次・二次を含む関連候補9件以上の確認で満たした。固定範囲だけで完答できない問題を品質ゲートへ数合わせで採用しない。

## Topic 12 二次試験の扱い

2026-09-16時点でR8二次は未実施。R7〜R5二次「電力・管理」「機械・制御」を公式問題で確認した。

- R7 電力・管理 問2: 三相3線式だが、1線地絡・対称座標法が主で固定範囲外
- R6 電力・管理 問3: 三相系統だが、地絡故障・通信線誘導が主で固定範囲外
- R5 電力・管理 問3: 三相3線式送電だが、同期発電機・過渡安定度・等面積法が主で固定範囲外
- R7〜R5 機械・制御: 同期機・誘導機・変圧器等の機器固有体系を必要とし、固定範囲だけで完結する直接対応問題なし

二次採用 `0問`、二次数合わせ `0件`。

## Topic 12 過去問候補の採否

- H23 一次 理論 問6: 採用。固定範囲だけで全5小問を完答可能
- H23 一次 機械 問3: 非採用。変圧器等価回路・巻数比等を要する
- H29 一次 電力 問6: 非採用。単位法が主題
- H30 一次 電力 問7: 非採用。三相電力式は使うが送電損失・導体量設計が主題
- H26 二次 電力・管理 問4: 非採用。配電線電圧降下が主題
- R7〜R5 二次: 上記のとおり直接対応なし

## Topic 12 解説本文でカバー済みの事項

1. 平衡三相の120°位相差と正相順
2. 三相相電圧の複素ベクトル表示
3. Y結線の `VL=√3Vφ`、`IL=Iφ` と30°位相関係
4. Δ結線の `VL=Vφ`、`IL=√3Iφ` と30°位相関係
5. 線間電圧を相電圧のベクトル差で作る手順
6. Δ枝電流から線電流をベクトル合成する手順
7. `Ea+Eb+Ec=0` の利用
8. 平衡三相有効電力 `P=3VφIφcosφ=√3VLILcosφ`
9. ベクトル図による120°・30°関係の確認
10. 新幹線側は発電・送電から変電設備へ三相交流が渡る導入までに限定

3段階例題も収録済み。

- 基礎: Y結線の相電圧から線間電圧と30°関係
- 本試験標準: Δ抵抗負荷の枝電流・線電流・三相有効電力
- 複合: Y電源の相電圧からΔ枝電流、線電流まで複素ベクトルで導出

固定H23一次「理論」問6の要求事項は本文・例題へ `5 / 5小問` 接続した。

## Topic 12 解説本文QA

- 固定EXAM_ALIGNMENT要求事項: `5 / 5小問`
- 3段階例題: `3 / 3`
- Y/Δの線間量・相量: `PASS`
- 120°・30°・`√3` のベクトル根拠: `PASS`
- 三相有効電力: `PASS`
- 二次採用方針変更: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 13以降の先取り: `0件`
- 未確認の新幹線変電設備値・内部結線追加: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 12 解説PDF QA

- PDF: `topics/12_three_phase_ac/12_three_phase_ac_explanation.pdf`
- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 固定H23一次「理論」問6の5小問への接続: `5 / 5`
- 3段階例題: `3 / 3`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認の新幹線変電設備値・内部結線追加: `0件`
- Topic 13以降の先取り: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 12 練習問題・PDF QA

- 練習source: `topics/12_three_phase_ac/12_three_phase_ac_practice.md`
- 練習PDF: `topics/12_three_phase_ac/12_three_phase_ac_practice.pdf`
- 一次試験型12問・全問五肢択一
- 難易度: 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 数値・ベクトル独立再計算: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定H23一次「理論」問6要求への接続: `5 / 5小問`
- PDF: A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 13以降の先取り: `0件`
- 未確認の新幹線変電設備値・内部結線追加: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 12 PowerPoint QA

- PowerPoint: `topics/12_three_phase_ac/12_three_phase_ac_images.pptx`
- 16:9 / 5枚
- 全スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- 固定H23一次「理論」問6の5小問要求を可視化: `5 / 5`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認の新幹線変電設備値・内部結線追加: `0件`
- Topic 13以降の先取り: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## Topic 12 完成後独立再解答

- 記録: `topics/12_three_phase_ac/12_three_phase_ac_reanswer.md`
- 固定H23一次「理論」問6 (1)〜(5)を完成教材の範囲だけで再導出
- 独立答案: `ロ, ヲ, リ, ホ, ヨ`
- 公式標準解答: `ロ, ヲ, リ, ホ, ヨ`
- 照合: `5 / 5 PASS`
- 教材だけで120°位相差を複素ベクトル化: PASS
- 教材だけで線間電圧からΔ枝電流を導出: PASS
- 教材だけで接続点の線電流をベクトル合成: PASS
- `√3` 関係を複素ベクトルの大きさから再導出: PASS
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 13以降の先取り: `0件`
- 未確認の新幹線変電設備値・内部結線追加: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## Topic 12 初回最終QA

- 記録: `topics/12_three_phase_ac/12_three_phase_ac_final_qa.md`
- 必須成果物実在: `PASS`
- 固定H23一次「理論」問6・5小問の独立再解答: `5 / 5 PASS`
- 二次採用0問・二次数合わせ0件: `PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- SPEC固定範囲境界: `PASS`
- 進捗記録整合: `FAIL`
  - 主source冒頭が `POWERPOINT_COMPLETE`／次工程「完成後独立再解答」のまま
  - 主source末尾が次工程「完成後独立再解答」のまま
  - 練習source末尾が次工程「解説画像PowerPoint＋表示QA」のまま

判定: `NEEDS_REVISION / IN_PROGRESS`

技術内容・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの修正は不要。進捗記録だけを実態へ同期する。

## 参考資料

参照日: 2026-09-16

公式正本:
- 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」 https://www.shiken.or.jp/chief/second/qa/
- H23一次試験問題 https://www.shiken.or.jp/chief/upload/20110903_ch_second_q01.pdf
- H23一次試験標準解答 https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf
- R7二次 電力・管理 https://www.shiken.or.jp/chief/upload/20251116_ch_second_q01.pdf
- R7二次 機械・制御 https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf
- R6二次 電力・管理 https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q01.pdf
- R6二次 機械・制御 https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf
- R5二次 電力・管理 https://www.shiken.or.jp/chief/upload/20231112_ch_second_q01.pdf
- R5二次 機械・制御 https://www.shiken.or.jp/chief/upload/20231112_ch_second_q02.pdf

説明粒度・候補確認:
- e-sysnet「三相交流回路」 https://e-sysnet.com/%E4%B8%89%E7%9B%B8%E4%BA%A4%E6%B5%81%E5%9B%9E%E8%B7%AF/
- 電験王2 H23理論問6 https://denken-ou.com/c2/rironh23-6/
- 電験王2 H23機械問3 https://denken-ou.com/c2/kikaih23-3/
- 電験王2 H29電力問6 https://denken-ou.com/c2/denryokuh29-6/
- 電験王2 H30電力問7 https://denken-ou.com/c2/denryokuh30-7/
- 電験王2 H26電力・管理問4 https://denken-ou.com/c2/denryokukanrih26-4/

## 直前完了Topic

Topic 11「ATCはなぜ特定の周波数を見分けられる？」は `PASS / completed`。

- 固定一次5問・25小問
- 完成後独立再解答 `25 / 25 PASS`
- 二次採用0問・二次数合わせ0件
- 解説source/PDF、練習source/PDF、PowerPoint、表示QA、最終QAまで完了
- 固定範囲外追加0件、未確認ATC実設備値追加0件

## 次に行うこと

Topic 12の主source・練習sourceに残る旧進捗記録3箇所を実成果物へ同期する。技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更しない。同期後に最終QAを再実施する。