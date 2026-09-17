# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `13 / 22`
- current_status: `topic_14_progress_records_synced`
- last_completed_topic: `13 L0系のリニア同期モータを等価回路で考える`
- active_topic: `14 L0系を500km/hで同期させる`
- next_start: Topic 14 最終QA再実施

## 完了テーマ
- [x] Topic 01 最終QA PASS
- [x] Topic 02 最終QA PASS
- [x] Topic 03 最終QA PASS
- [x] Topic 04 最終QA PASS
- [x] Topic 05 最終QA PASS
- [x] Topic 06 最終QA PASS
- [x] Topic 07 最終QA PASS
- [x] Topic 08 最終QA PASS
- [x] Topic 09 最終QA PASS
- [x] Topic 10 最終QA PASS
- [x] Topic 11 最終QA PASS
- [x] Topic 12 最終QA PASS
- [x] Topic 13 最終QA PASS

## Topic 10 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] 一次4問＋二次記述1問、計5問を固定
- [x] 固定範囲へ直接対応する15答案要素を品質ゲート対象化
- [x] 制作前独立検証 `15 / 15 PASS`
- [x] 固定範囲外論点による件数合わせ 0件
- [x] H27の回生失効・電力貯蔵・運行間隔は除外
- [x] H24二次問3の無効電流・出力可能領域は除外
- [x] Topic 11半導体損失・熱、Topic 16蓄電池論点の追加 0件
- [x] 未確認実車回生効率の真値化 0件

### 固定過去問
- R06 一次 機械 問2: (1),(2)
- R05 一次 機械 問2: (1),(2),(3),(5)
- H28 一次 機械 問5: (3)〜(5)
- H27 一次 機械 問3: (1),(2)
- H24 二次 機械・制御 問3: (1),(2)a〜c

### 制作前独立検証
- R06 一次 機械 問2: `2 / 2 PASS`
- R05 一次 機械 問2: `4 / 4 PASS`
- H28 一次 機械 問5: `3 / 3 PASS`
- H27 一次 機械 問3: `2 / 2 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`

## Topic 10 解説source
- [x] §1 試験論点
- [x] §2 誘導機の `s<0` 発電機運転
- [x] §3 力行／回生の電力フロー
- [x] §4 `P_m=Tω` と四象限運転
- [x] §5 `V_v=V_L+jXI`、`P=V_L I`、PWM変調率
- [x] §6 回生効率
- [x] 頻出ミス・過去問接続・公式まとめ
- [x] 基礎・本試験標準・複合の3段階例題
- [x] 固定5問・15答案要素を本文へマッピング
- [x] 固定範囲外論点・未確認実車値の追加 0件

## Topic 10 解説PDF
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_explanation.pdf`
- [x] A4縦4ページ
- [x] 200 dpi全ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件`
- [x] 固定一次4問＋二次1問・15答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `4fbb34ed2d2f8d88be5b685ddeaba697ca1177cfa552777e065ddde66d14be77`

## Topic 10 練習問題source
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／前提／単位／検算または論証付き
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 固定一次4問＋二次1問・15答案要素へ全件接続
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] 末尾 `## 次工程` を実成果物へ同期

## Topic 10 練習PDF
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.pdf`
- [x] A4縦6ページ
- [x] 一次10問＋二次5問・完全解説を収録
- [x] 200 dpi全6ページ表示QA `6 / 6 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件`
- [x] 数値・論理再検算 `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次4問＋二次1問・15答案要素と固定範囲を維持
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `b18a4dafb0123a73d6b87ccaf75bd887cf7dcee6e4d510e9b6310fa5ecabc33d`

## Topic 10 解説画像PowerPoint
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_images.pptx`
- [x] 16:9・4枚
- [x] 回生固定電力フローを可視化
- [x] 誘導機の `s<0` 発電機運転と四象限運転を可視化
- [x] H24二次型 `P=V_L I`、`V_v=V_L+jXI`、PWM変調率を可視化
- [x] 回生効率と固定5過去問の接続を可視化
- [x] 1600×900相当の全4枚表示QA `4 / 4 PASS`
- [x] overflow `0件`
- [x] ZIP整合性 PASS
- [x] 固定一次4問＋二次1問・15答案要素を維持
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `77807ae3a7bbd10e7110a79316dacad7eaedb609d2ec4a482cfe473a5b5c310d`

## Topic 10 独立再解答前ゲート
- [x] 必須先読み対象を再監査
- [x] `HANDOFF.md` に保存されていたH24二次数値解を除去
- [x] 固定5過去問・15答案要素、教材本文、成果物は変更なし
- [x] 保存済み数値解を見ない新runから独立再解答可能な状態へ移行

## Topic 10 完成後独立再解答
- [x] 保存済み公式解答・標準解答を先に見ず、完成教材だけで固定5問を再解答
- [x] R06 一次 機械 問2: `2 / 2 PASS`
- [x] R05 一次 機械 問2: `4 / 4 PASS`
- [x] H28 一次 機械 問5: `3 / 3 PASS`
- [x] H27 一次 機械 問3: `2 / 2 PASS`
- [x] H24 二次 機械・制御 問3: `4 / 4 PASS`
- [x] 合計 `15 / 15 PASS`
- [x] 教材外知識補完 `0件`
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] 固定5問・15答案要素、教材本文、練習問題、PDF/PPTXの内容変更 `0件`

## Topic 10 最終QA
- [x] 必須成果物の実在: PASS
- [x] 一次4問＋二次1問・15答案要素の過去問対応: PASS
- [x] 完成後独立再解答 `15 / 15 PASS`
- [x] 練習問題・PDF/PPTX QA: PASS
- [x] 固定範囲境界・未確認実車値: PASS
- [x] 進捗記録整合: PASS
- 判定: `PASS / completed`

## Topic 11 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] Topic 11固定範囲「GTO・IGBT・SiC・導通損失・スイッチング損失・ON電圧・スイッチングエネルギー・スイッチング周波数・素子数・発熱・冷却・変換効率」を確認
- [x] 一次4問＋二次記述1問、計5問を固定
- [x] 固定範囲へ直接対応する15答案要素を品質ゲート対象化
- [x] 制作前独立検証 `15 / 15 PASS`
- [x] 固定範囲外論点による件数合わせ `0件`
- [x] Topic 12以降の極数・同期機・蓄電池・制御系論点の追加 `0件`
- [x] 未確認実車半導体定格・損失・温度・冷却性能の真値化 `0件`
- [x] 公式確認できない古いGTO問題を固定過去問として採用 `0件`

### 固定過去問
- R07 一次 機械 問4: (3),(5)
- R06 一次 機械 問2: (4)
- R02 一次 機械 問2: (3)〜(5)
- R04 一次 機械 問4: (1)〜(5)
- H22 二次 機械・制御 問3: (1),(2)

### 制作前独立検証
- R07 一次 機械 問4: `2 / 2 PASS`
- R06 一次 機械 問2: `1 / 1 PASS`
- R02 一次 機械 問2: `3 / 3 PASS`
- R04 一次 機械 問4: `5 / 5 PASS`
- H22 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`

## Topic 11 解説source
- [x] §1 試験論点・IGBT正式名称・素子識別
- [x] §2 ON導通損失・OFF漏れ電流の区別
- [x] §3 `W_sw=∫vi dt`、`W_off=V_dc I_dc T_2/2`、`P_sw=f_sw(W_on+W_off)`
- [x] §4 H22二次型のIGBT／逆並列ダイオード導通区間・平均電流積分
- [x] §5 素子数を含む総損失・発熱・冷却・変換効率
- [x] §6 GTO→IGBT→SiC比較とN700S接続
- [x] 解法手順・頻出ミス・公式まとめ
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3`
- [x] 固定5問・15答案要素を本文へ `15 / 15` マッピング
- [x] JR東海・東芝・三菱電機の公式資料を実車／メーカー根拠として追加
- [x] N700Sの7%消費電力量削減をSiC単独効果として扱わない
- [x] 固定範囲外論点・未確認実車値の追加 `0件`

## Topic 11 解説PDF
- [x] `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_explanation.pdf`
- [x] A4縦4ページ
- [x] 200 dpi全4ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 固定一次4問＋二次1問・15答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] GTO→IGBT→SiC比較は定性的設計観点と確認済みN700S SiC採用に限定
- [x] N700Sの7%削減をSiC単独効果として扱わない
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `a1fb0e6e845a57a2ad8575abbe6fa124ff92ba375934c75b3cc371a9766d02fd`

## Topic 11 練習問題source
- [x] `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／前提／単位／検算または論証付き
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 一次正答一意性QA `10 / 10 PASS`
- [x] 固定5過去問・15答案要素へ `15 / 15` 接続
- [x] J/W、μs/s、kHz/Hzの単位換算QA PASS
- [x] 素子1個と装置全体の損失区別 PASS
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] 末尾 `## 次工程` を実成果物へ同期

## Topic 11 練習PDF
- [x] `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_practice.pdf`
- [x] A4縦7ページ
- [x] 一次10問＋二次5問・完全解説を収録
- [x] 200 dpi全7ページ表示QA `7 / 7 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 主要数値再計算 Q3/Q4/Q9〜Q15 PASS
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次4問＋二次1問・15答案要素と固定範囲を維持
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `da6fd46d57ebea60acd2657b91fcb91a008ca5a8328cb81776c7a5debf2b2aa7`

## Topic 11 解説画像PowerPoint
- [x] `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_images.pptx`
- [x] 16:9・4枚
- [x] 導通損失・OFF漏れ・スイッチング損失と `P_sw=f_sw(W_on+W_off)` を可視化
- [x] H22二次型 IGBT／逆並列ダイオードの導通区間・平均電流積分を可視化
- [x] 素子1個→装置総損失→発熱・冷却・変換効率を可視化
- [x] GTO→IGBT→SiC比較、N700S SiC採用、固定5過去問対応を可視化
- [x] 1600×900相当の全4枚表示QA `4 / 4 PASS`
- [x] overflow `0件`
- [x] ZIP整合性 PASS
- [x] 固定一次4問＋二次1問・15答案要素を維持
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `a0440ffe6243ee6920a4e9102ead6d4a551fbdc4d2e2f937735d7ab20454d37e`

## Topic 11 独立再解答前ゲート
- [x] `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- [x] `HANDOFF.md` のH22二次代表数値解を除去
- [x] main sourceの制作前各答案要素の完成済み導出結果・数値解を除去
- [x] 固定5問・15答案要素、要求知識・使用式・教材内マッピングは変更なし
- [x] 教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- [x] 固定範囲外論点・未確認実車値追加 `0件`
- [x] 保存済み答案を先に見ない新runから完成後独立再解答可能

## Topic 11 完成後独立再解答
- [x] 公式解答・保存済み正答を先に見ず、完成教材だけで固定5問を再解答
- [x] R07 一次 機械 問4: `2 / 2 PASS`
- [x] R06 一次 機械 問2: `1 / 1 PASS`
- [x] R02 一次 機械 問2: `3 / 3 PASS`
- [x] R04 一次 機械 問4: `5 / 5 PASS`
- [x] H22 二次 機械・制御 問3: `4 / 4 PASS`
- [x] 合計 `15 / 15 PASS`
- [x] 教材外知識補完 `0件`
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] 固定5問・15答案要素、教材本文、練習問題、PDF/PPTXの内容変更 `0件`

## Topic 11 最終QA
- [x] 最終QA記録作成: `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_final_qa.md`
- [x] 必須成果物の実在: PASS
- [x] 一次4問＋二次1問・15答案要素の過去問対応: PASS
- [x] 完成後独立再解答 `15 / 15 PASS`
- [x] 練習問題・PDF/PPTX QA: PASS
- [x] 固定範囲境界・未確認実車値: PASS
- [x] 進捗記録整合: PASS
- 判定: `PASS / completed`

## Topic 11 進捗記録同期
- [x] 練習source末尾の旧「次は解説画像PowerPointを作成する」を、実成果物に合わせて「次は最終QAを再実施する」へ同期
- [x] 現行PowerPointのGit blob SHA `4ac2a83ea8eaa732508dd798552d5179a0899c8b` に対応するPowerPoint QA記録のSHA-256 `a0440ffe6243ee6920a4e9102ead6d4a551fbdc4d2e2f937735d7ab20454d37e` をSTATUSへ同期
- [x] 技術本文・固定EXAM_ALIGNMENT・練習問題・PDF/PPTXの内容変更 `0件`
- [x] 固定範囲外論点・未確認実車値の追加 `0件`

## Topic 12 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] Topic 12固定範囲「極数・同期速度・周波数・すべり・回転速度・トルク・出力・出力密度・インバータ定格」を確認
- [x] 一次2問＋二次記述3問、計5問を固定
- [x] 固定範囲へ直接対応する16答案要素を品質ゲート対象化
- [x] 制作前独立検証 `16 / 16 PASS`
- [x] 固定範囲外論点による件数合わせ `0件`
- [x] Topic 05〜06の等価回路・最大トルク、Topic 09のベクトル制御、Topic 13以降の同期機論点追加 `0件`
- [x] 未確認N700S主電動機定格値・インバータ電圧電流等の真値化 `0件`

### 固定過去問
- R07 一次 機械 問2: (2),(5)
- H25 一次 機械 問3: (1),(2)
- R07 二次 機械・制御 問2: (1),(3)
- R02 二次 機械・制御 問1: (1)〜(4)
- R01 二次 機械・制御 問1: (1)〜(4)

### 制作前独立検証
- R07 一次 機械 問2: `2 / 2 PASS`
- H25 一次 機械 問3: `2 / 2 PASS`
- R07 二次 機械・制御 問2: `4 / 4 PASS`
- R02 二次 機械・制御 問1: `4 / 4 PASS`
- R01 二次 機械・制御 問1: `4 / 4 PASS`
- 合計: `16 / 16 PASS`

## Topic 12 解説source
- [x] §1 試験論点と解法順
- [x] §2 `N_s=120f/P_p` と周波数逆算
- [x] §3 `s=(N_s-N)/N_s`、`N=(1-s)N_s`、`sN_s`、`f_2=sf`
- [x] §4 `ω=2πN/60`、`P_m=Tω`
- [x] §5 同一機械回転速度での4極・6極必要周波数比較
- [x] §6 インバータ定格と短時間過負荷耐量
- [x] §7 出力密度
- [x] §8 N700Sへの接続
- [x] 解法手順・頻出ミス・公式まとめ
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3`
- [x] 固定5問・16答案要素を本文へ `16 / 16` マッピング
- [x] 主要計算再検算 PASS
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`

## Topic 12 解説PDF
- [x] `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_explanation.pdf`
- [x] A4縦4ページ
- [x] 200 dpi全4ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 固定一次2問＋二次3問・16答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`
- [x] SHA-256 `ba9059d7410cbdabb23c7931b76dceecacfacbe632f5830b5f733f20bdcee954`

## Topic 12 解説PDF記録同期
- [x] 現在の4ページPDFに対するsourceのQA記録を正本とし、STATUS/HANDOFFを4ページ・`4 / 4 PASS`・SHA-256 `ba9059d7410cbdabb23c7931b76dceecacfacbe632f5830b5f733f20bdcee954`へ同期
- [x] 固定一次2問＋二次3問・16答案要素、3段階例題、固定範囲境界は変更なし
- [x] 未確認N700S実車値追加 `0件`
- [x] `BLOCKED_BEFORE_PRACTICE_SOURCE` を解除

## Topic 12 練習問題source
- [x] `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／単位／検算または条件限定付き
- [x] 独立計算・論理再検算 `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 固定5過去問・16答案要素へ `16 / 16` 接続
- [x] 4極・6極同一回転速度比較 `f_6/f_4=1.5` 再検算 PASS
- [x] インバータ定格／短時間過負荷は問題文で与えた容量条件だけで判定
- [x] 出力密度は教材用仮定値のみ
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`

## Topic 12 練習PDF
- [x] `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_practice.pdf`
- [x] A4縦4ページ
- [x] 一次10問＋二次5問・完全解説を収録
- [x] 200 dpi全4ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 数値・論理再検算 `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次2問＋二次3問・16答案要素と固定範囲を維持
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`
- [x] SHA-256 `f70c681e0f4c5b0ed71ebc0b3f78dcaf09e6968b5b5ce1100758e42c79efd90a`

## Topic 12 解説画像PowerPoint
- [x] `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_images.pptx`
- [x] 16:9・4枚
- [x] 極数→同期速度→すべり→角速度→出力・トルクの計算鎖を可視化
- [x] 同一機械回転速度で4極・6極の必要周波数比較 `f_6/f_4=1.5` を可視化
- [x] H25一次型のインバータ連続定格／短時間過負荷と出力密度を可視化
- [x] 固定一次2問＋二次3問・16答案要素への接続を可視化
- [x] 1601×900全4枚表示QA `4 / 4 PASS`
- [x] overflow `0件`
- [x] ZIP整合性 PASS
- [x] 固定一次2問＋二次3問・16答案要素を維持
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`
- [x] SHA-256 `0fcc83e90287e57901ef17c50497e2c4356c0322973de1b7d8628b0be286b17c`

## Topic 12 独立再解答前ゲート
- [x] `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- [x] `STATUS.md` / `HANDOFF.md` / main source / 練習source / blocker / PowerPoint QA を再監査
- [x] 固定5過去問の公式正答番号・標準解答本文の保存 `0件`
- [x] 固定5過去問の完成済み数値解・導出結果の保存 `0件`
- [x] 制作前検証はPASS数・要求知識・使用式・教材内マッピングのみを保持
- [x] 固定一次2問＋二次3問・16答案要素、教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- [x] 固定範囲外論点・未確認N700S実車値追加 `0件`
- [x] 判定 `BLIND_REANSWER_READY`
- [x] ゲート記録: `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_blind_reanswer_gate.md`

## Topic 12 完成後独立再解答
- [x] 公式解答・標準解答を開く前に、完成教材だけで固定5問・16答案要素を再解答
- [x] R07 一次 機械 問2: `2 / 2 PASS`
- [x] H25 一次 機械 問3: `2 / 2 PASS`
- [x] R07 二次 機械・制御 問2: `4 / 4 PASS`
- [x] R02 二次 機械・制御 問1: `4 / 4 PASS`
- [x] R01 二次 機械・制御 問1: `4 / 4 PASS`
- [x] 合計 `16 / 16 PASS`
- [x] 教材外知識補完 `0件`
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`
- [x] 教材本文・練習問題・PDF/PPTXの内容変更 `0件`
- [x] 記録: `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_independent_reanswer.md`

## Topic 12 最終QA
- [x] 最終QA記録: `topics/12_n700s_six_pole_motor_design/12_n700s_six_pole_motor_design_final_qa.md`
- [x] 必須成果物の実在: PASS
- [x] 一次2問＋二次3問・16答案要素の過去問対応: PASS
- [x] 完成後独立再解答 `16 / 16 PASS`
- [x] 練習問題・PDF/PPTX QA: PASS
- [x] 固定範囲境界・未確認N700S実車値: PASS
- [x] 進捗記録整合: PASS
- 判定: `PASS / completed`

## Topic 12 進捗記録同期
- [x] main sourceの `## 状態` と末尾 `# 次工程` を実成果物へ同期
- [x] 練習source末尾 `# 次工程` を実成果物へ同期
- [x] 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの内容変更 `0件`
- [x] 固定範囲外論点・未確認N700S実車値の追加 `0件`

## Topic 13 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] Topic 13固定範囲「同期機・界磁・電機子・同期リアクタンス・励磁・電機子反作用・フェーザ・リニア同期モータ・移動磁界」を確認
- [x] 一次4問＋二次記述1問、計5問を固定
- [x] 固定範囲へ直接対応する22答案要素を品質ゲート対象化
- [x] 制作前独立検証 `22 / 22 PASS`
- [x] R08一次機械問1は同期発電機の冷却方式で固定範囲外のため不採用
- [x] Topic 14の力率・負荷角・電力角特性・最大出力・無負荷飽和／短絡特性を追加 `0件`
- [x] リニア同期モータ直接対応の公式過去問を件数合わせで捏造 `0件`
- [x] 未確認L0実値の真値化 `0件`

### 固定過去問
- R07 一次 機械 問1: (1)〜(5)
- R06 一次 機械 問1: (1)〜(5)
- H29 一次 機械 問1: (1),(2),(5)
- H21 一次 機械 問5: (1)〜(5)
- R07 二次 機械・制御 問1: (1)の(a),(d),(e),(f)

### 制作前独立検証
- R07 一次 機械 問1: `5 / 5 PASS`
- R06 一次 機械 問1: `5 / 5 PASS`
- H29 一次 機械 問1の固定3答案要素: `3 / 3 PASS`
- H21 一次 機械 問5: `5 / 5 PASS`
- R07 二次 機械・制御 問1の固定4答案要素: `4 / 4 PASS`
- 合計: `22 / 22 PASS`

## Topic 13 解説source
- [x] §1 試験論点と解法順
- [x] §2 同期機・界磁・電機子・同期運転
- [x] §3 電機子反作用・増磁／減磁／交差磁化
- [x] §4 `X_s=X_a+X_l` と1相分等価回路
- [x] §5 `V`,`I`,`E`,`jX_sI` のフェーザ
- [x] §6 リニア同期モータ・移動磁界
- [x] §7 JR東海一次資料で確認した範囲だけL0接続
- [x] 解法手順・頻出ミス・公式まとめ
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3`
- [x] 固定5問・22答案要素を本文へ `22 / 22` マッピング
- [x] 主要計算再検算 PASS
- [x] 固定範囲外論点・Topic 14先取り・未確認L0実値の追加 `0件`

## Topic 13 解説PDF
- [x] `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_explanation.pdf`
- [x] A4縦5ページ
- [x] 200 dpi全5ページ表示QA `5 / 5 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 固定一次4問＋二次1問・22答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] 固定範囲外論点・Topic 14先取り・未確認L0実値追加 `0件`
- [x] SHA-256 `7d2a0fc7f61c78c24e28a709e3c65a855773298a8ec04ca77ae26af941af33fd`

## Topic 13 練習問題source
- [x] `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式または論証付き
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 固定一次4問＋二次1問・22答案要素へ `22 / 22` 接続
- [x] `N_s=120f/P`、`X_s=X_a+X_l`、発電機／電動機フェーザ計算を再検算 PASS
- [x] Topic 14先取り・固定範囲外論点・未確認L0実値追加 `0件`

## Topic 13 練習PDF
- [x] `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_practice.pdf`
- [x] A4縦4ページ
- [x] 一次10問＋二次5問・完全解説を収録
- [x] 200 dpi全4ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 問1〜問15の全設問存在確認 `15 / 15 PASS`
- [x] 数値・論理再検算 `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次4問＋二次1問・22答案要素と固定範囲を維持
- [x] Topic 14先取り・固定範囲外論点・未確認L0実値追加 `0件`
- [x] SHA-256 `92201e0833c5429c591de92c78c9fe7d7e9f27a638bf1b3110b63a91d1037996`

## Topic 13 解説画像PowerPoint
- [x] `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_images.pptx`
- [x] 16:9・4枚
- [x] 同期機→リニア同期モータの概念対応と `N_s=120f/P` を可視化
- [x] 電機子反作用（増磁・減磁・交差磁化）と `X_s=X_a+X_l` を可視化
- [x] `V`,`I`,`E`,`jX_sI` の1相分等価回路・フェーザを可視化
- [x] 固定一次4問＋二次1問・22答案要素への接続と固定範囲境界を可視化
- [x] 1601×900全4枚表示QA `4 / 4 PASS`
- [x] overflow `0件`
- [x] ZIP整合性 PASS
- [x] 固定一次4問＋二次1問・22答案要素を維持
- [x] Topic 14先取り・固定範囲外論点・未確認L0実値追加 `0件`
- [x] SHA-256 `7f74fb98811164f11b3c8ca6a3b2237eadc8f0cd2a9ae4ea73262de7d1fa06cc`

## Topic 13 独立再解答前ゲート
- [x] `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- [x] `STATUS.md` / `HANDOFF.md` / main source / 練習source / PowerPoint QA / Topic 13成果物一覧を再監査
- [x] 固定5過去問の公式正答番号・標準解答本文の保存 `0件`
- [x] 固定5過去問の完成済み個別解答・数値解・導出結果の保存 `0件`
- [x] 制作前検証はPASS数・要求知識・使用式・教材内マッピングのみを保持
- [x] main sourceの固定過去問個別正答記号・完成済み導出値の保存 `0件`
- [x] 固定一次4問＋二次1問・22答案要素、教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- [x] 固定範囲外論点・Topic 14先取り・未確認L0実値追加 `0件`
- [x] 判定 `BLIND_REANSWER_READY`
- [x] ゲート記録: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_blind_reanswer_gate.md`

## Topic 13 完成後独立再解答
- [x] 記録: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_independent_reanswer.md`
- [x] 公式解答・標準解答を開く前に、完成教材だけで固定5問・22答案要素を再解答
- [x] R07 一次 機械 問1: `5 / 5 PASS`
- [x] R06 一次 機械 問1: `5 / 5 PASS`
- [x] H29 一次 機械 問1の固定3答案要素: `3 / 3 PASS`
- [x] H21 一次 機械 問5: `5 / 5 PASS`
- [x] R07 二次 機械・制御 問1の固定4答案要素: `4 / 4 PASS`
- [x] 合計 `22 / 22 PASS`
- [x] 教材外知識補完 `0件`
- [x] 固定範囲外論点追加 `0件`
- [x] Topic 14依存 `0件`
- [x] 未確認L0実値依存 `0件`
- [x] 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXの内容変更 `0件`

## Topic 13 最終QA
- [x] 最終QA記録: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_final_qa.md`
- [x] 必須成果物の実在: PASS
- [x] 一次4問＋二次1問・22答案要素の過去問対応: PASS
- [x] 完成後独立再解答 `22 / 22 PASS`
- [x] 練習問題・PDF/PPTX QA: PASS
- [x] 固定範囲境界・未確認L0実値: PASS
- [x] 進捗記録整合: PASS
- 判定: `PASS / completed`

## Topic 13 進捗記録同期
- [x] main sourceの `## 状態` と末尾 `# 次工程` を実成果物へ同期
- [x] 練習source末尾 `# 次工程` を実成果物へ同期
- [x] 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの内容変更 `0件`
- [x] Topic 14先取り・固定範囲外論点・未確認L0実値追加 `0件`

## Topic 14 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] Topic 14固定範囲「内部起電力・端子電圧・同期リアクタンス・負荷角・力率・励磁・電力角特性・最大出力」を確認
- [x] 系列SPEC指定式 `P = EV/X × sinδ` と、許可された無負荷飽和曲線・短絡特性・短絡比・同期インピーダンスを固定範囲として確認
- [x] 一次1問＋二次記述4問、計5問を固定
- [x] 固定範囲へ直接対応する27答案要素を品質ゲート対象化
- [x] 制作前独立検証 `27 / 27 PASS`
- [x] Topic 13で採用済みの答案要素との重複採用 `0件`
- [x] R07二次問1・H29一次問1はTopic 13で明示的に除外したTopic 14該当部分だけを引継ぎ
- [x] 固定範囲外補完 `0件`
- [x] Topic 15以降依存 `0件`
- [x] 未確認L0実値の真値化 `0件`

### 固定過去問
- H29 一次 機械 問1: (3),(4) — 2答案要素
- R07 二次 機械・制御 問1: (1)の(b),(c)、(2)〜(5) — 7答案要素
- R06 二次 機械・制御 問1: (1)a〜c、(2)a〜c — 8答案要素
- R05 二次 機械・制御 問1: (3),(4)a,b,(5)a,b — 8答案要素
- H27 二次 機械・制御 問1: (1)a,b — 2答案要素

### 制作前独立検証
- H29 一次 機械 問1: `2 / 2 PASS`
- R07 二次 機械・制御 問1: `7 / 7 PASS`
- R06 二次 機械・制御 問1: `8 / 8 PASS`
- R05 二次 機械・制御 問1: `8 / 8 PASS`
- H27 二次 機械・制御 問1: `2 / 2 PASS`
- 合計: `27 / 27 PASS`

## Topic 14 解説source
- [x] `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization.md`
- [x] §1 試験論点と解法連鎖
- [x] §2 発電機／電動機フェーザ、力率角 `θ` と負荷角 `δ`
- [x] §3 `P=VE/X_s sinδ` をフェーザから導出し、1相・三相・p.u.を区別
- [x] §4 励磁・力率・電機子電流・V曲線
- [x] §5 `P_max=VE/X_s`、励磁低下・直列リアクタンス増加時の影響
- [x] §6 無負荷飽和曲線・三相短絡特性・短絡比・同期インピーダンス[p.u.]／[Ω]
- [x] §7 L0系はJR東海一次資料で確認した同期推進の概念接続に限定
- [x] §8 再利用可能な解法手順
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3`
- [x] 固定5問・27答案要素を本文へ `27 / 27` マッピング
- [x] 主要数値再計算 PASS
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`

## Topic 14 解説PDF
- [x] `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_explanation.pdf`
- [x] A4縦3ページ
- [x] 200 dpi全3ページ表示QA `3 / 3 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 固定一次1問＋二次4問・27答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`
- [x] SHA-256 `9e3af1ef9246da706aa83a2e2787a67c3c74afebc3bb950e677bd77f45f68d9b`

## Topic 14 練習問題source
- [x] `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／前提／単位／検算または論証付き
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 固定5過去問・27答案要素へ `27 / 27` 接続
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`

## Topic 14 練習PDF
- [x] `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_practice.pdf`
- [x] A4縦4ページ
- [x] 一次10問＋二次5問・解答／完全解説を収録
- [x] 200 dpi全4ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] 数値・論理再検算 `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次1問＋二次4問・27答案要素を維持
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`
- [x] SHA-256 `557a06402e67d214d45af477020ff5c11f6af488eb5d75546d98615b7182dc9d`

## Topic 14 解説画像PowerPoint
- [x] `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_images.pptx`
- [x] 16:9・4枚
- [x] 発電機／電動機フェーザと力率角 `θ`・負荷角 `δ` を可視化
- [x] `P=VE/X_s sinδ`、`P_max=VE/X_s`、励磁・リアクタンス変化を可視化
- [x] 励磁・力率・V曲線、同期調相機 `I=(V-E)/(jX_s)` を可視化
- [x] 無負荷飽和曲線・三相短絡特性・短絡比・同期インピーダンスを可視化
- [x] 1601×900全4枚表示QA `4 / 4 PASS`
- [x] overflow `0件`
- [x] PPTX ZIP整合性 PASS
- [x] 固定一次1問＋二次4問・27答案要素を維持
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`
- [x] Git blob SHA `2edf2ec7c42d4939e37c6d912bcc0756052aca5a`
- [x] SHA-256 `2c399f792e186246bc7893d100a343d52e085d1ac991c5cc92aeb949d5724c76`

## Topic 14 独立再解答前ゲート
- [x] `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- [x] `STATUS.md` / `HANDOFF.md` / main source / 練習source / PowerPoint QA / Topic 14成果物一覧を再監査
- [x] 固定5過去問の公式正答番号・標準解答本文の保存 `0件`
- [x] 固定5過去問の完成済み個別解答・数値解・導出結果の保存 `0件`
- [x] 制作前検証はPASS数・要求知識・使用式・教材内マッピングのみを保持
- [x] 練習sourceの正答・解説は教材自身の練習問題で、固定公式過去問の保存済み正答には該当しない
- [x] 固定一次1問＋二次4問・27答案要素、教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`
- [x] 判定 `BLIND_REANSWER_READY`
- [x] ゲート記録: `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_blind_reanswer_gate.md`

## Topic 14 完成後独立再解答
- [x] 記録: `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_independent_reanswer.md`
- [x] 公式解答・標準解答を開く前に、完成教材だけで固定5問・27答案要素を再解答
- [x] H29 一次 機械 問1: `2 / 2 PASS`
- [x] R07 二次 機械・制御 問1: `7 / 7 PASS`
- [x] R06 二次 機械・制御 問1: `8 / 8 PASS`
- [x] R05 二次 機械・制御 問1: `8 / 8 PASS`
- [x] H27 二次 機械・制御 問1: `2 / 2 PASS`
- [x] 合計 `27 / 27 PASS`
- [x] 教材外知識補完 `0件`
- [x] 固定範囲外論点・Topic 15以降依存・未確認L0実値依存 `0件`
- [x] 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXの内容変更 `0件`

## Topic 14 最終QA
- [x] 最終QA記録: `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_final_qa.md`
- [x] 必須成果物の実在: PASS
- [x] 一次1問＋二次4問・27答案要素の過去問対応: PASS
- [x] 完成後独立再解答 `27 / 27 PASS`
- [x] 練習問題・PDF/PPTX QA: PASS
- [x] 固定範囲境界・未確認L0実値: PASS
- [ ] 進捗記録整合: FAIL（main source 2箇所＋練習source 1箇所）
- 判定: `NEEDS_REVISION / IN_PROGRESS`

## Topic 14 進捗記録同期
- [x] main sourceの `## 状態` と末尾 `# 次工程` を実成果物へ同期
- [x] 練習source末尾 `# 次工程` を実成果物へ同期
- [x] 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの内容変更 `0件`
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`

## 今回進めた内容
Topic 14の進捗記録3箇所を実成果物へ同期した。main sourceの `## 状態` と末尾 `# 次工程`、練習source末尾 `# 次工程` のみを更新し、技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更していない。

## 判定
Topic 14は `topic_14_progress_records_synced / IN_PROGRESS`。完成数は `13 / 22`。次はTopic 14最終QA再実施。