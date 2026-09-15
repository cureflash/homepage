# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-16

## 現在地
Topic 01〜10は最終QAまで `PASS / completed`。

完成数: `10 / 22`

active topic: `11 GTO→IGBT→SiCの損失を計算する`

current status: `topic_11_blind_reanswer_ready`

## Topic 10 固定範囲
- 力行
- 回生
- 誘導機の発電機運転
- 四象限運転
- DCリンク
- PWMコンバータ
- 架線への電力回生
- 回生効率

固定電力フロー:
`車輪 → 誘導電動機 → インバータ → DCリンク → コンバータ → 架線`

境界:
- H27一次問3の回生失効・電力貯蔵・運行間隔は追加しない。
- H24二次問3の無効電流・出力可能領域は追加しない。
- Topic 11のパワー半導体損失・熱設計は追加しない。
- Topic 16の蓄電池・DCリンク給電は追加しない。
- 未確認の新幹線実車回生効率を真値として追加しない。

## Topic 10 固定EXAM_ALIGNMENT
固定過去問:
- R06 一次 機械 問2: (1),(2)
- R05 一次 機械 問2: (1),(2),(3),(5)
- H28 一次 機械 問5: (3)〜(5)
- H27 一次 機械 問3: (1),(2)
- H24 二次 機械・制御 問3: (1),(2)a〜c

一次4問＋二次記述1問、計5問。ゲート対象15答案要素。

制作前独立検証:
- R06 一次 機械 問2: `2 / 2 PASS`
- R05 一次 機械 問2: `4 / 4 PASS`
- H28 一次 機械 問5: `3 / 3 PASS`
- H27 一次 機械 問3: `2 / 2 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`

## Topic 10 source
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant.md`

source完成内容:
- 公式一次4問＋二次1問の固定EXAM_ALIGNMENT
- 15答案要素の要求知識・式・設問型
- §1 試験論点
- §2 `N_s=120f/p`、`s=(N_s-N)/N_s`、`s<0` の発電機運転
- §3 力行／回生の電力フロー
- §4 `P_m=Tω` と四象限運転
- §5 `Vv=VL+jXI`、`P=VL I`、PWM変調率
- §6 回生効率
- 頻出ミス・過去問接続・公式まとめ
- 基礎・本試験標準・複合の3段階例題
- 固定5問・15答案要素の本文マッピング
- 完成後独立再解答 `15 / 15 PASS`

## Topic 10 解説PDF
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_explanation.pdf`: `completed`
- A4縦4ページ
- 200 dpi全4ページ Visual QA: `4 / 4 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件`
- 固定一次4問＋二次1問・15答案要素: 維持
- 3段階例題: `3 / 3`収録
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `4fbb34ed2d2f8d88be5b685ddeaba697ca1177cfa552777e065ddde66d14be77`

## Topic 10 練習問題source
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.md`: `completed`
- 一次試験型10問: 全問五肢択一
- 二次試験型5問: 記述・途中式／前提／単位／検算または論証付き
- 独立計算・論理QA: `15 / 15 PASS`
- 一次正答一意性: `10 / 10 PASS`
- 固定5過去問・15答案要素: 全件接続
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 末尾 `## 次工程` の旧「練習PDF作成」は実成果物に合わせて同期済み。

## Topic 10 練習PDF
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.pdf`: `completed`
- A4縦6ページ
- 一次10問＋二次5問・完全解説を収録
- 200 dpi全6ページ Visual QA: `6 / 6 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件`
- 数値・論理再検算: `15 / 15 PASS`
- 一次正答一意性: `10 / 10 PASS` を維持
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `b18a4dafb0123a73d6b87ccaf75bd887cf7dcee6e4d510e9b6310fa5ecabc33d`

## Topic 10 解説画像PowerPoint
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_images.pptx`: `completed`
- 16:9・4枚
- 固定電力フロー、`s<0` 発電機運転、四象限、H24二次型フェーザ/PWM計算、回生効率を可視化
- Visual QA: `4 / 4 PASS`（1600×900相当）
- overflow: `0件`
- ZIP整合性: `PASS`
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `77807ae3a7bbd10e7110a79316dacad7eaedb609d2ec4a482cfe473a5b5c310d`

## Topic 10 完成後独立再解答
- 保存済み公式解答・標準解答を先に見ず、完成教材だけで固定5問を再解答した。
- R06 一次 機械 問2: `2 / 2 PASS`
- R05 一次 機械 問2: `4 / 4 PASS`
- H28 一次 機械 問5: `3 / 3 PASS`
- H27 一次 機械 問3: `2 / 2 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 固定5問・15答案要素、教材本文、練習問題、PDF/PPTXは変更していない。

## Topic 10 最終QA
- 記録: `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_final_qa.md`
- 必須成果物実在: PASS
- 固定一次4問＋二次1問・15答案要素: PASS
- 完成後独立再解答: `15 / 15 PASS`
- 練習問題・PDF/PPTX QA: PASS
- 固定範囲境界・未確認実車値: PASS
- 進捗記録整合: PASS
- 判定: `PASS / completed`

## Topic 11 固定範囲
- GTO
- IGBT
- SiC
- 導通損失
- スイッチング損失
- ON電圧
- スイッチングエネルギー
- スイッチング周波数
- 素子数
- 発熱
- 冷却
- 変換効率

基本関係:
`総損失 = 導通損失 + スイッチング損失`

境界:
- Topic 12の極数・同期速度・出力密度を追加しない。
- Topic 13〜14の同期機・フェーザ・電力角特性を追加しない。
- Topic 16の蓄電池・DCリンク給電を追加しない。
- Topic 17以降の制御論点を追加しない。
- 未確認の実車半導体定格・損失・温度・冷却性能を真値として追加しない。
- 非公式転載だけで確認した古いGTO問題を公式過去問として固定しない。

## Topic 11 固定EXAM_ALIGNMENT
固定過去問:
- R07 一次 機械 問4: (3),(5)
- R06 一次 機械 問2: (4)
- R02 一次 機械 問2: (3)〜(5)
- R04 一次 機械 問4: (1)〜(5)
- H22 二次 機械・制御 問3: (1),(2)

一次4問＋二次記述1問、計5問。ゲート対象15答案要素。

制作前独立検証:
- R07 一次 機械 問4: `2 / 2 PASS`
- R06 一次 機械 問2: `1 / 1 PASS`
- R02 一次 機械 問2: `3 / 3 PASS`
- R04 一次 機械 問4: `5 / 5 PASS`
- H22 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`

## Topic 11 source
- `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal.md`
- 制作前EXAM_ALIGNMENT: `completed`
- 解説本文＋3段階例題: `completed`
- 公式一次4問＋二次1問、15答案要素を固定
- §1 試験論点、IGBT正式名称、素子識別
- §2 ON導通損失、OFF漏れ電流との区別
- §3 `W_sw=∫vi dt`、線形切換損失、`P_sw=f_sw(W_on+W_off)`、ソフトスイッチング
- §4 H22二次型のIGBT／逆並列ダイオード導通区間と全周期平均電流
- §5 素子数を含む総損失、発熱、冷却、変換効率
- §6 GTO→IGBT→SiC比較とN700SのSiC主変換装置への接続
- 基礎・本試験標準・複合の3段階例題 `3 / 3`
- 固定5問・15答案要素の本文マッピング `15 / 15`
- JR東海、東芝、三菱電機の公式資料を実車・メーカー根拠として記録
- N700SのN700A比7%消費電力量削減は車両全体の効果として扱い、SiC単独効果へ誤帰属しない
- 制作前独立検証: `15 / 15 PASS`
- 独立再解答前ゲート: `BLIND_REANSWER_READY`
- 制作前の保存済み答案・完成済み導出結果は必須先読みsourceから除去済み
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 完成後独立再解答は未実施

## Topic 11 解説PDF
- `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_explanation.pdf`: `completed`
- A4縦4ページ
- 200 dpi全4ページ Visual QA: `4 / 4 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- 固定一次4問＋二次1問・15答案要素: 維持
- 3段階例題: `3 / 3`収録
- GTO→IGBT→SiC比較: 定性的設計観点＋確認済みN700S SiC採用に限定
- N700Sの7%削減: SiC単独効果へ誤帰属なし
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `a1fb0e6e845a57a2ad8575abbe6fa124ff92ba375934c75b3cc371a9766d02fd`

## Topic 11 練習問題source
- `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_practice.md`: `completed`
- 一次試験型10問: 全問五肢択一
- 二次試験型5問: 記述・途中式／前提／単位／検算または論証付き
- 独立計算・論理QA: `15 / 15 PASS`
- 一次正答一意性QA: `10 / 10 PASS`
- 固定5過去問・15答案要素: `15 / 15` 接続
- J/W、μs/s、kHz/Hzの単位換算QA: PASS
- 素子1個と装置全体の損失区別: PASS
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`

## Topic 11 練習PDF
- `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_practice.pdf`: `completed`
- A4縦7ページ
- 一次10問＋二次5問・完全解説を収録
- 200 dpi全7ページ Visual QA: `7 / 7 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- 主要数値再計算: Q3/Q4/Q9〜Q15 PASS
- 一次正答一意性QA: `10 / 10 PASS` 維持
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `da6fd46d57ebea60acd2657b91fcb91a008ca5a8328cb81776c7a5debf2b2aa7`

## Topic 11 解説画像PowerPoint
- `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_images.pptx`: `completed`
- 16:9・4枚
- 導通損失・OFF漏れ・スイッチング損失、H22二次型導通区間・平均電流、総損失から発熱・冷却・効率、GTO→IGBT→SiCとN700S接続を可視化
- Visual QA: `4 / 4 PASS`（1600×900相当）
- overflow: `0件`
- ZIP整合性: `PASS`
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `bd195a931abecfa723e895f8082f7e54964bb9c88afba52420cde6777a31b704`

## Topic 11 独立再解答前ゲート
- `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- `HANDOFF.md` のH22二次代表数値解を除去
- main sourceの制作前各答案要素の完成済み導出結果・数値解を除去
- 固定5問・15答案要素、要求知識、使用式、教材内マッピングは変更なし
- 教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 判定: `BLIND_REANSWER_READY`

## 次に行うこと
公式解答・保存済み正答を先に見ず、完成教材だけを使って固定5問・15答案要素を独立再解答する。解答完了後に公式解答・標準解答と照合し、教材外知識補完の有無を判定する。