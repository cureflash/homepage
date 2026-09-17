# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 現在地
- Topic 01〜14: 最終QA `PASS / completed`
- 完成数: `14 / 22`
- active topic: `15 新幹線の補機モーターを設計する`
- current status: `topic_15_practice_source_complete`
- 次工程: Topic 15 練習PDF

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 15 main source、解説PDF、直近変更を確認した。
- Topic 14は最終QA `PASS / completed` のまま変更なし。
- Topic 15 main sourceには制作前EXAM_ALIGNMENTが既に存在し、一次3問＋二次記述2問、計5問・8答案要素が固定済みであることを確認した。
- Topic 15の解説本文と基礎／本試験標準／複合の3段階例題、解説PDFは完成済みで、固定5問・8答案要素を維持している。
- 今回、Topic 15練習問題sourceを作成した。一次試験型10問・全問五肢択一、二次試験型5問、合計15問。
- 一次正答一意性 `10 / 10 PASS`、独立計算・論理QA `15 / 15 PASS`、固定5問・8答案要素へ `8 / 8` 接続した。
- 固定範囲外論点、Topic 16以降の先取り、未確認新幹線補機実値の真値化はいずれも `0件`。
- 固定公式過去問の個別正答記号・完成済み答案は保存していない。完成後のblind再解答条件を維持する。

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
- [x] 進捗記録整合: PASS
- 判定: `PASS / completed`

## Topic 14 進捗記録同期
- [x] main sourceの `## 状態` と末尾 `# 次工程` を実成果物へ同期
- [x] 練習source末尾 `# 次工程` を実成果物へ同期
- [x] 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの内容変更 `0件`
- [x] 固定範囲外論点・Topic 15以降先取り・未確認L0実値追加 `0件`

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
- 進捗記録同期: 完成
- 最終QA: `PASS / completed`

## Topic 15 固定範囲
- ポンプ
- ファン
- コンプレッサ
- 負荷特性
- 所要動力
- 効率
- インバータ駆動
- 可変速運転
- 相似則 `Q∝N`, `H∝N²`, `P∝N³`

境界:
- Topic 05〜09で完成済みの誘導機等価回路・最大トルク・PWM回路詳細・ベクトル制御詳細を再制作しない。
- Topic 16の蓄電池・DCリンク、Topic 17以降の制御系を先取りしない。
- 未確認の新幹線補機機種・定格電圧・電流・回転速度・効率・容量を実車値化しない。

## Topic 15 固定EXAM_ALIGNMENT
固定過去問:
- R06 一次 機械 問2 (5) — 1答案要素
- H25 一次 機械 問3 (1),(2) — 2答案要素
- H23 一次 機械 問1 (1),(2) — 2答案要素
- R04 二次 機械・制御 問3 (6) — 2答案要素
- R07 二次 機械・制御 問2 (1)の定格トルク部分 — 1答案要素

一次3問＋二次記述2問、計5問。ゲート対象8答案要素。

## Topic 15 解説source
- [x] `topics/15_auxiliary_motor_design/15_auxiliary_motor_design.md`
- [x] §1 試験論点と計算鎖
- [x] §2 `P=Tω`、`ω=2πN/60`、`T_M=Jα+T_L`
- [x] §3 ポンプ・ファン相似則、`T_L∝N²`、`P_fluid=ρgQH`、効率連鎖
- [x] §4 `V/f` 一定制御、電圧指令と周期、同期速度
- [x] §5 連続負荷と短時間加速負荷による容量判定
- [x] §6 新幹線補機への概念接続。未確認実車値は使用しない
- [x] §7 再利用可能な解法手順
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3`
- [x] 固定5問・8答案要素を本文へ `8 / 8` マッピング
- [x] 例題数値再計算 PASS
- [x] 固定範囲外論点追加 `0件`
- [x] Topic 16以降先取り `0件`
- [x] 未確認新幹線補機実値追加 `0件`
- [x] 固定公式過去問の個別正答記号・完成済み答案保存 `0件`

## Topic 15 解説PDF
- [x] `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_explanation.pdf`
- [x] A4縦5ページ
- [x] 200 dpi全5ページ表示QA `5 / 5 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 固定一次3問＋二次2問・8答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] 固定範囲外論点・Topic 16以降先取り・未確認新幹線補機実値追加 `0件`
- [x] SHA-256 `87535e7730fa674e1a03c63d8dd4a000f27c3be7c43a50a5667b42700f696313`

## Topic 15 練習問題source
- [x] `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／前提／単位／検算または論証付き
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 固定一次3問＋二次2問・8答案要素へ `8 / 8` 接続
- [x] コンプレッサへの三乗則無条件適用 `0件`
- [x] Topic 16以降先取り・未確認新幹線補機実値追加 `0件`

## Topic 15 現成果物
- main source: `topics/15_auxiliary_motor_design/15_auxiliary_motor_design.md`
- 制作前EXAM_ALIGNMENT: 完成
- 解説本文＋3段階例題: 完成
- 解説PDF: 完成
- 練習source: 完成
- 練習PDF: 未着手
- PowerPoint: 未着手
- 独立再解答前ゲート: 未着手
- 完成後独立再解答: 未着手
- 最終QA: 未着手

## 次に行うこと
Topic 15「新幹線の補機モーターを設計する」の練習PDFを作成し、A4表示QA・文字抽出QA・問題数／解説収録・数値再検算を行う。