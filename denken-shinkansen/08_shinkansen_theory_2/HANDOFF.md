# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜11は `PASS / completed`。完成数は `11 / 21`。

current_status: `topic_12_exam_alignment_complete`

active_topic: `12 三相交流を新幹線へ渡す`

Topic 12は制作前EXAM_ALIGNMENTまで完了。固定公式過去問はH23一次「理論」問6 (1)〜(5)。制作前独立計算 `5 / 5 PASS`。一次・二次を含む関連候補を9件以上調査し、固定範囲外体系を必要とする問題は採用していない。

次工程はTopic 12の解説本文＋3段階例題。固定EXAM_ALIGNMENTと系列SPECの範囲だけで作成する。

## Topic 12 source

- source: `topics/12_three_phase_ac/12_three_phase_ac.md`
- stage: `EXAM_ALIGNMENT_COMPLETE`
- completion: `in_progress`

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

公式問題・公式解答を照合し、制作前に保存済み正答を使わず独立計算して `5 / 5 PASS`。個別正答番号は完成後ブラインド独立再解答を妨げないようsourceへ保存していない。

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

## Topic 12 次の解説で必ずカバーする事項

1. 平衡三相の120°位相差と正相順
2. 三相相電圧の複素ベクトル表示
3. Y結線の `VL=√3Vφ`、`IL=Iφ` と30°位相関係
4. Δ結線の `VL=Vφ`、`IL=√3Iφ` と30°位相関係
5. 線間電圧を相電圧のベクトル差で作る手順
6. Δ枝電流から線電流をベクトル合成する手順
7. `Ea+Eb+Ec=0` の利用
8. 平衡三相有効電力 `P=3VφIφcosφ=√3VLILcosφ`
9. ベクトル図による120°・30°関係の確認
10. 新幹線側は発電・送電から変電設備へ三相交流が渡る導入まで。き電用変圧器詳細へ踏み込まない

## Topic 12 制作前QA

- MASTER_SPEC: `PASS`
- EXAM_ALIGNMENT_SPEC: `PASS`
- 系列SPEC: `PASS`
- 一次・二次を含む関連候補調査: `9件以上`
- 固定公式過去問: `H23 一次 理論 問6 / 5小問`
- 公式問題・公式解答照合: `5 / 5`
- 制作前独立計算: `5 / 5 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認の新幹線変電設備値・内部結線追加: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

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

Topic 12「三相交流を新幹線へ渡す」の解説本文＋3段階例題を作成する。固定EXAM_ALIGNMENTのH23一次「理論」問6を完成教材だけで解けるよう、上記必須事項を欠落させず、固定範囲外へ広げない。