# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜12は `PASS / completed`。完成数は `12 / 21`。

current_status: `topic_13_explanation_pdf_complete`

active_topic: `13 新幹線の交流電力を複素数で扱う`

Topic 13は解説本文＋3段階例題、解説PDF＋表示QAまで完了。固定公式過去問は一次3問・15小問＋二次1問・4答案要素で、要求接続は `19 / 19`。制作前独立再解答 `19 / 19 PASS`、二次採用1問・4答案要素、二次数合わせ0件を維持している。

次工程はTopic 13の練習問題source＋練習PDF。

## Topic 13 成果物

- source: `topics/13_complex_power/13_complex_power.md`
- stage: `EXPLANATION_PDF_COMPLETE`
- completion: `in_progress`
- 解説PDF: `topics/13_complex_power/13_complex_power_explanation.pdf`
- 解説PDF QA: `topics/13_complex_power/13_complex_power_explanation_pdf_qa.md`
- 練習source/PDF: 未作成
- PowerPoint: 未作成
- 完成後独立再解答: 未実施
- 最終QA: 未実施

## Topic 13 固定範囲

系列SPECどおり次だけを扱う。

- 複素電力
- 有効電力
- 無効電力
- 皮相電力
- 力率
- `S = VI*`
- 電力三角形
- 電力円線図の概念

新幹線側は大容量交流負荷の例として使用する。

境界:

- 送電線の単位法・百分率インピーダンス・潮流計算を追加しない
- 送電線の電圧降下設計・電圧安定限界の導出へ広げない
- 調相設備・変圧器・同期機等の設備固有設計へ広げない
- 電力円線図は概念までとし、送電系統の詳細設計計算を追加しない
- Topic 14の高調波・非正弦波解析、Topic 15の過渡現象を先取りしない
- 未確認の新幹線主回路・変電設備の内部仕様や実設備値を推測しない

## Topic 13 固定EXAM_ALIGNMENT

品質ゲート対象は一次3問・15小問＋二次1問・4答案要素、合計 `4問・19答案要素`。

- R7 一次 理論 問3 (1)〜(5): 位相、`P=EIcosφ`、コンデンサによる電力条件変化
- H22 一次 理論 問2 (1)〜(5): RC回路の実効値・位相・消費有効電力
- H21 一次 理論 問3 (1)〜(5): 複素アドミタンス、フェーザ、平均電力
- R2 二次 電力・管理 問6 (1)〜(3): P/Q/S、総合力率、P-Qベクトル、力率改善

公式問題・公式標準解答を照合済み。制作前独立再解答 `19 / 19 PASS`。完成後ブラインド再解答を妨げないため、選択肢記号・最終数値答案はsourceへ保存していない。

関連候補は一次・二次合わせ8件を確認した。H30二次「電力・管理」問3、H25二次「電力・管理」問4は電力円線図に直接関連するが、送電線モデル・単位法・電圧安定度等を要するため非採用。R7二次「電力・管理」問3も％インピーダンス・単位法・短絡容量を要するため非採用。R8二次は2026-09-16時点で未実施。

二次採用 `1問・4答案要素`、二次数合わせ `0件`。

## Topic 13 解説本文で必須の事項

1. 実効値フェーザによる `S=VI*` と共役を用いる理由
2. `S=P+jQ` とP/Q/|S|の意味
3. `P=VIcosφ`、`Q=VIsinφ`、`|S|=VI`
4. `P^2+Q^2=|S|^2`、`cosφ=P/|S|`、電力三角形
5. 遅れQ正・進みQ負の符号規約
6. `S=|I|^2Z` 等からP/Qを求める手順
7. 有効電力と無効電力の物理的意味
8. 力率改善用コンデンサによるQ・皮相電力の変化
9. 複数負荷のP/Q合算と総合力率
10. 固定一次3問へ接続するフェーザ→平均電力の手順
11. R2二次問6へ接続するP-Qベクトル、皮相電力上限、目標力率から必要Qを逆算する手順
12. 電力円線図は概念まで。送電線の詳細導出は行わない
13. 新幹線は大容量交流負荷の例に限定し、未確認実値を追加しない

## Topic 13 制作前QA

- MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC: `PASS`
- 一次・二次関連候補: `8件`
- 固定品質ゲート: `4問・19答案要素`
- 公式問題・公式標準解答照合: `19 / 19`
- 制作前独立再解答: `19 / 19 PASS`
- 二次採用: `1問・4答案要素`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 14以降の先取り: `0件`
- 未確認新幹線実設備値追加: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 13 解説本文でカバー済みの事項

1. 瞬時電力から平均有効電力 `P=VIcosφ` を導出し、実効値フェーザの `S=VI*` へ接続
2. 共役で電圧角と電流角の差を作る理由
3. `S=P+jQ`、`P=VIcosφ`、`Q=VIsinφ`、`|S|=VI`
4. `P^2+Q^2=|S|^2`、力率、電力三角形
5. 遅れQ正・進みQ負の符号規約
6. `S=|I|^2Z`、`S=|V|^2Y*` とP/Qの読み方
7. 有効電力・無効電力の物理的意味
8. 力率改善用コンデンサでPを変えずQ・|S|を減らす基本関係
9. 複数負荷のP/Q合算と総合力率
10. 異周波数フェーザを直接合成せず周波数ごとに平均電力を求める手順
11. 皮相電力上限から許容Qと必要補償Qを逆算する手順
12. 目標力率から `Qtarget` と必要 `Qc` を逆算する手順
13. P-Q平面と電力円線図の概念。送電線詳細導出は未追加
14. 新幹線側は大容量交流負荷の一般例に限定し、未確認実値を未追加

3段階例題も収録済み。

- 基礎: 実効値フェーザからP/Q/|S|/力率
- 本試験標準: `Z=R+jX` から電流と `S=|I|^2Z` を二経路で導出
- 複合・二次型: 複数負荷のP/Q合算、総合力率、目標力率0.95と皮相電力上限から必要Qを逆算

固定4問・19答案要素は本文・例題へ `19 / 19` 接続した。

## Topic 13 解説本文QA

- 固定EXAM_ALIGNMENT要求事項: `4問・19 / 19答案要素`
- 3段階例題: `3 / 3`
- `S=VI*` と共役の理由: `PASS`
- P/Q/|S|・電力三角形・力率: `PASS`
- 遅れ/進み符号: `PASS`
- `S=|I|^2Z` / `S=|V|^2Y*`: `PASS`
- フェーザ/アドミタンス→平均有効電力: `PASS`
- 複数負荷P/Q合算・総合力率: `PASS`
- 力率改善・皮相電力上限・必要Q逆算: `PASS`
- 電力円線図の詳細導出追加: `0件`
- 二次採用方針変更: `0件`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 14以降の先取り: `0件`
- 未確認新幹線実設備値追加: `0件`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 13 解説PDF QA

- PDF: `topics/13_complex_power/13_complex_power_explanation.pdf`
- QA記録: `topics/13_complex_power/13_complex_power_explanation_pdf_qa.md`
- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 固定4問・19答案要素への接続: `19 / 19`
- 3段階例題: `3 / 3`
- 二次採用: `1問・4答案要素`
- 二次数合わせ: `0件`
- 電力円線図の詳細導出追加: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 14以降の先取り: `0件`
- 未確認新幹線主回路・変電設備値追加: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 12 成果物

- source: `topics/12_three_phase_ac/12_three_phase_ac.md`
- 解説PDF: `topics/12_three_phase_ac/12_three_phase_ac_explanation.pdf`
- 練習source: `topics/12_three_phase_ac/12_three_phase_ac_practice.md`
- 練習PDF: `topics/12_three_phase_ac/12_three_phase_ac_practice.pdf`
- PowerPoint: `topics/12_three_phase_ac/12_three_phase_ac_images.pptx`
- PowerPoint QA: `topics/12_three_phase_ac/12_three_phase_ac_powerpoint_qa.md`
- 独立再解答: `topics/12_three_phase_ac/12_three_phase_ac_reanswer.md`
- 最終QA: `topics/12_three_phase_ac/12_three_phase_ac_final_qa.md`
- stage: `COMPLETED`
- completion: `completed`

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
5. 線間電圧を二つの相電圧のベクトル差として作る手順
6. Δ負荷の枝電流を `Iφ=Vφ/Zφ` で求め、接続点の線電流を枝電流のベクトル和・差から求める手順
7. 平衡時の `Ea+Eb+Ec=0` と、対称な3ベクトルの和を計算へ使う方法
8. 平衡三相有効電力 `P=3VφIφcosφ=√3 VLILcosφ` と、Y/Δで同じ線間量の式へ到達すること
9. ベクトル図で120°、30°、線間量と相量の関係を確認する方法
10. 新幹線への接続は「発電・送電側で三相交流が用いられ、変電設備へ電力が渡る」という導入に限定し、き電用変圧器の内部結線・実設備値を推測しない

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

## Topic 12 進捗記録同期

初回最終QAで指摘された旧進捗記録3箇所を実成果物へ同期済み。

- 主source冒頭: `SOURCE_PROGRESS_SYNCED`、完成後独立再解答 `5 / 5 PASS`、次工程「最終QA再実施」
- 主source末尾: 完成後独立再解答・初回最終QA実施済みを反映し、旧次工程を除去
- 練習source: `SOURCE_PROGRESS_SYNCED`、完成後独立再解答 `5 / 5 PASS`、次工程「最終QA再実施」
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX変更: `0件`
- 二次採用0問・二次数合わせ0件を維持
- SPEC固定範囲外追加0件

現在 `SOURCE_PROGRESS_SYNCED / IN_PROGRESS`。

## Topic 12 最終QA再実施

- 記録: `topics/12_three_phase_ac/12_three_phase_ac_final_qa.md`
- 必須成果物実在: `PASS`
- 固定H23一次「理論」問6・5小問の独立再解答: `5 / 5 PASS`
- 二次採用0問・二次数合わせ0件: `PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- SPEC固定範囲境界: `PASS`
- 初回blocker 3件の解消確認: `PASS`
- 判定: `PASS / FINAL_QA_COMPLETE`

## Topic 12 completed状態同期

最終QA PASS後、主source・練習source・STATUS・HANDOFFを完了状態へ同期した。

- 主source: `COMPLETED / completed`
- 練習source: `COMPLETED / completed`
- STATUS・HANDOFF: 完成数 `12 / 21`、次Topicを13へ同期
- 固定H23一次「理論」問6・5小問の完成後独立再解答: `5 / 5 PASS`
- 二次採用: `0問`、二次数合わせ: `0件`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX変更: `0件`
- SPEC固定範囲外追加: `0件`

最終判定: `PASS / completed`

## 参考資料

参照日: 2026-09-16

Topic 13 公式正本:
- 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」 https://www.shiken.or.jp/chief/second/qa/
- R7一次 理論 https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf
- R7一次 標準解答 https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf
- R2二次 電力・管理 https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf
- R2二次 標準解答 https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf
- H30二次 電力・管理 https://www.shiken.or.jp/chief/upload/20181118_ch_second_q01.pdf
- H25二次 電力・管理 https://www.shiken.or.jp/chief/upload/20131124_ch_second_q01.pdf
- H22一次 理論 https://www.shiken.or.jp/chief/upload/20100904_ch_second_q01.pdf
- H22一次 標準解答 https://www.shiken.or.jp/chief/upload/20100904_ch_second_a01.pdf
- H21一次 理論 https://www.shiken.or.jp/chief/upload/20090905_ch_second_q01.pdf
- H21一次 標準解答 https://www.shiken.or.jp/chief/upload/20090905_ch_second_a01.pdf

Topic 13 説明粒度・候補確認:
- e-sysnet「力率とは」 https://e-sysnet.com/power_factor/
- e-sysnet「交流電力」 https://e-sysnet.com/power-factor/
- 電験王2 R7理論問3 https://denken-ou.com/c2/rironr7-3/
- 電験王2 H22理論問2 https://denken-ou.com/c2/rironh22-2/
- 電験王2 H21理論問3 https://denken-ou.com/c2/rironh21-3/
- 電験王2 R2電力・管理問6 https://denken-ou.com/c2/denryokukanrir2-6/
- 電験王2 H30電力・管理問3 https://denken-ou.com/c2/denryokukanrih30-3/
- 電験王2 H25電力・管理問4 https://denken-ou.com/c2/denryokukanrih25-4/

Topic 12 公式正本:
- H23一次試験問題 https://www.shiken.or.jp/chief/upload/20110903_ch_second_q01.pdf
- H23一次試験標準解答 https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf
- R7二次 電力・管理 https://www.shiken.or.jp/chief/upload/20251116_ch_second_q01.pdf
- R7二次 機械・制御 https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf
- R6二次 電力・管理 https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q01.pdf
- R6二次 機械・制御 https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf
- R5二次 電力・管理 https://www.shiken.or.jp/chief/upload/20231112_ch_second_q01.pdf
- R5二次 機械・制御 https://www.shiken.or.jp/chief/upload/20231112_ch_second_q02.pdf

## 直前完了Topic

Topic 12「三相交流を新幹線へ渡す」は `PASS / completed`。

- 固定H23一次「理論」問6・5小問
- 完成後独立再解答 `5 / 5 PASS`
- 二次採用0問・二次数合わせ0件
- 解説source/PDF、練習source/PDF、PowerPoint、表示QA、最終QAまで完了
- 固定範囲外追加0件、未確認新幹線変電設備値追加0件

## 次に行うこと

Topic 13「新幹線の交流電力を複素数で扱う」の練習問題source＋練習PDFを作成する。固定4問・19答案要素への接続を維持し、送電線単位法・詳細な電力円線図導出・Topic 14以降を追加しない。