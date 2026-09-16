# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-16

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `10 / 22`
- current_status: `topic_11_progress_records_synced`
- last_completed_topic: `10 新幹線はモーターを発電機にして止まる`
- active_topic: `11 GTO→IGBT→SiCの損失を計算する`
- next_start: Topic 11 最終QA再実施

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
- [x] 固定5問・15答案要素へ `15 / 15` 接続
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
- [ ] 進捗記録整合: FAIL（2件・前回判定）
- 判定: `NEEDS_REVISION / IN_PROGRESS`（前回判定）

## Topic 11 進捗記録同期
- [x] 練習source末尾の旧「次は解説画像PowerPointを作成する」を、実成果物に合わせて「次は最終QAを再実施する」へ同期
- [x] 現行PowerPointのGit blob SHA `4ac2a83ea8eaa732508dd798552d5179a0899c8b` に対応するPowerPoint QA記録のSHA-256 `a0440ffe6243ee6920a4e9102ead6d4a551fbdc4d2e2f937735d7ab20454d37e` をSTATUSへ同期
- [x] 技術本文・固定EXAM_ALIGNMENT・練習問題・PDF/PPTXの内容変更 `0件`
- [x] 固定範囲外論点・未確認実車値の追加 `0件`

## 今回進めた内容
Topic 11の前回最終QAで検出した進捗記録2件を同期した。練習sourceの旧次工程を実成果物へ合わせ、PowerPoint QA記録とSTATUSのSHA-256記録を現行blob基準で一致させた。教材内容・固定一次4問＋二次1問・15答案要素・完成後独立再解答結果は変更していない。

## 判定
Topic 11は `topic_11_progress_records_synced / IN_PROGRESS`。完成数は `10 / 22`。次は最終QAを再実施する。