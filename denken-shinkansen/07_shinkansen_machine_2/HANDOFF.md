# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 現在地
- Topic 01〜13: 最終QA `PASS / completed`
- 完成数: `13 / 22`
- active topic: `14 L0系を500km/hで同期させる`
- current status: `topic_14_final_qa_needs_revision`
- 次工程: Topic 14 進捗記録同期

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 14の実成果物を確認し、制作前EXAM_ALIGNMENT・解説source・解説PDF・練習問題source・練習PDF・解説画像PowerPointまで完成済みであることを確認した。
- Topic 14の独立再解答前ゲートを実施し、必須先読み対象に固定5過去問の公式正答・標準解答・完成済み個別解答が保存されていないことを確認した。
- Topic 13でR07二次問1・H29一次問1のうちTopic 14範囲を明示的に除外していたため、その非重複部分だけをTopic 14へ引き継いでいる。
- Topic 13で採用済み答案要素の重複採用は `0件`。
- 完成教材だけで固定5問・27答案要素をblind再解答し、答案確定後に公式解答・標準解答と照合して `27 / 27 PASS`。教材外補完・固定範囲外追加・Topic 15以降依存・未確認L0実値依存はいずれも `0件`。
- 最終QAを実施し、必須成果物・過去問対応・独立再解答・練習QA・PDF/PPTX QA・固定範囲境界はPASS。main source 2箇所＋練習source 1箇所の旧進捗記録だけが未同期のため `NEEDS_REVISION / IN_PROGRESS` とした。

## Topic 14 固定範囲
- 内部起電力
- 端子電圧
- 同期リアクタンス
- 負荷角
- 力率
- 励磁
- 電力角特性
- 最大出力
- `P = EV/X × sinδ`
- 無負荷飽和曲線・三相短絡特性・短絡比・同期インピーダンスは系列SPECが許可する範囲で通常の同期発電機へ戻って説明可

境界:
- Topic 13の同期機構造・電機子反作用・フェーザ記号認識を再制作しない。
- 突極機の二反作用法、過渡／初期過渡リアクタンス、突発短絡過渡、等面積法、AVR/PSSは追加しない。
- Topic 15以降を先取りしない。
- 未確認L0推進コイル寸法・極ピッチ・電圧・電流・推力・500 km/h時の電気周波数を実値化しない。
- リニア同期モータ直接対応の公式過去問を件数合わせで作らない。

## Topic 14 固定EXAM_ALIGNMENT
固定過去問:
- H29 一次 機械 問1: (3),(4) — 2答案要素
- R07 二次 機械・制御 問1: (1)の(b),(c)、(2)〜(5) — 7答案要素
- R06 二次 機械・制御 問1: (1)a〜c、(2)a〜c — 8答案要素
- R05 二次 機械・制御 問1: (3),(4)a,b,(5)a,b — 8答案要素
- H27 二次 機械・制御 問1: (1)a,b — 2答案要素

一次1問＋二次記述4問、計5問。ゲート対象27答案要素。

制作前独立検証:
- H29 一次 機械 問1: `2 / 2 PASS`
- R07 二次 機械・制御 問1: `7 / 7 PASS`
- R06 二次 機械・制御 問1: `8 / 8 PASS`
- R05 二次 機械・制御 問1: `8 / 8 PASS`
- H27 二次 機械・制御 問1: `2 / 2 PASS`
- 合計: `27 / 27 PASS`

## Topic 14 解説source
- [x] フェーザ、力率角 `θ`、負荷角 `δ` を区別
- [x] 電機子抵抗無視の条件下で `P=VE/X_s sinδ` をフェーザから導出
- [x] 1相・三相実単位・p.u.の係数を明示
- [x] 励磁変化と力率・電機子電流・V曲線を説明
- [x] `P_max=VE/X_s`、励磁低下・直列リアクタンス増加時の影響を説明
- [x] 無負荷飽和曲線・三相短絡特性・短絡比・同期インピーダンス[p.u.]／[Ω]を説明
- [x] L0系は同期理論への概念接続に限定し、未確認実値を使用しない
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3`
- [x] 固定5問・27答案要素を本文へ `27 / 27` マッピング
- [x] 例題数値再計算 PASS
- [x] 固定範囲外補完 `0件`
- [x] Topic 15以降依存 `0件`
- [x] 未確認L0実値追加 `0件`

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
- [x] 公式解答・標準解答を開く前に完成教材だけで固定5問・27答案要素を再解答
- [x] H29 一次 機械 問1: `2 / 2 PASS`
- [x] R07 二次 機械・制御 問1: `7 / 7 PASS`
- [x] R06 二次 機械・制御 問1: `8 / 8 PASS`
- [x] R05 二次 機械・制御 問1: `8 / 8 PASS`
- [x] H27 二次 機械・制御 問1: `2 / 2 PASS`
- [x] 合計 `27 / 27 PASS`
- [x] 教材外知識補完 `0件`
- [x] 固定範囲外論点・Topic 15以降依存・未確認L0実値依存 `0件`
- [x] 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXの内容変更 `0件`
- [x] 記録: `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_independent_reanswer.md`

## Topic 14 最終QA
- [x] 記録: `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization_final_qa.md`
- [x] 必須成果物の実在: PASS
- [x] 一次1問＋二次4問・27答案要素の過去問対応: PASS
- [x] 完成後独立再解答 `27 / 27 PASS`
- [x] 練習問題・PDF/PPTX QA: PASS
- [x] 固定範囲境界・未確認L0実値: PASS
- [ ] 進捗記録整合: FAIL（main source 2箇所＋練習source 1箇所）
- 判定: `NEEDS_REVISION / IN_PROGRESS`

## Topic 14 現成果物
- main source: `topics/14_l0_500kmh_synchronization/14_l0_500kmh_synchronization.md`
- 制作前EXAM_ALIGNMENT: 完成
- 解説本文＋3段階例題: 完成
- 解説PDF: 完成
- 練習source: 完成
- 練習PDF: 完成
- PowerPoint: 完成
- 独立再解答前ゲート: 完成
- 完成後独立再解答: `27 / 27 PASS`
- 最終QA: `NEEDS_REVISION / IN_PROGRESS`

## 次に行うこと
技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXを変更せず、main sourceの `## 状態` と末尾 `# 次工程`、練習source末尾 `# 次工程` の3箇所だけを実成果物へ同期する。その後、Topic 14最終QAを再実施する。