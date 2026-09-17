# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `14 / 22`
- current_status: `topic_15_blind_reanswer_ready`
- last_completed_topic: `14 L0系を500km/hで同期させる`
- active_topic: `15 新幹線の補機モーターを設計する`
- next_start: Topic 15 完成後独立再解答

## 完了テーマ
- [x] Topic 01〜14 最終QA `PASS / completed`
- [ ] Topic 15 `IN_PROGRESS`

## Topic 15 固定範囲
系列 `SPEC.md` の次だけを扱う。

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
- Topic 05〜09の誘導機等価回路、最大トルク、PWM回路詳細、ベクトル制御内部理論を再制作しない。
- Topic 16以降の蓄電池・DCリンク・伝達関数・過渡応答・PID・安定判別・再粘着制御を先取りしない。
- 未確認の新幹線補機定格値を実車値として置かない。
- コンプレッサへファン・ポンプの三乗則を条件確認なしで適用しない。

## Topic 15 固定EXAM_ALIGNMENT
一次3問＋二次記述2問、計5問・8答案要素を品質ゲート対象とする。

- R06 一次 機械 問2 (5) — 1答案要素
- H25 一次 機械 問3 (1),(2) — 2答案要素
- H23 一次 機械 問1 (1),(2) — 2答案要素
- R04 二次 機械・制御 問3 (6) — 2答案要素
- R07 二次 機械・制御 問2 (1)の定格トルク部分 — 1答案要素

固定公式過去問の個別正答記号・完成済み答案は保存せず、完成後blind再解答条件を維持する。

## Topic 15 成果物
- [x] 制作前EXAM_ALIGNMENT
- [x] 解説source `topics/15_auxiliary_motor_design/15_auxiliary_motor_design.md`
- [x] 解説PDF `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_explanation.pdf`
- [x] 練習問題source `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_practice.md`
- [x] 練習PDF `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_practice.pdf`
- [x] 解説画像PowerPoint `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_images.pptx`
- [x] PowerPoint QA `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_powerpoint_qa.md`
- [x] 独立再解答前ゲート `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_blind_reanswer_gate.md`
- [ ] 完成後独立再解答
- [ ] 最終QA

## Topic 15 解説画像PowerPoint
- [x] 16:9・4枚
- [x] 補機負荷→回転機基本式→軸出力→効率→電気入力→インバータ容量の計算連鎖を可視化
- [x] ファン・ポンプ相似則 `Q∝N`, `H∝N²`, `P∝N³` を可視化
- [x] `V/f` 一定、電圧指令、電気周期 `T_e=1/f`、同期速度と実回転速度の区別を可視化
- [x] `T_M=Jα+T_L` による連続負荷・加速負荷の分離と容量判定を可視化
- [x] 120 dpi・1601×900 全4枚表示QA `4 / 4 PASS`
- [x] 文字・数式・図の欠落、重なり、切れ `0件`
- [x] overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] PPTX ZIP整合性 PASS
- [x] 固定一次3問＋二次2問・8答案要素を維持
- [x] コンプレッサへの三乗則無条件適用 `0件`
- [x] Topic 05〜09の詳細再制作 `0件`
- [x] Topic 16以降先取り `0件`
- [x] 未確認新幹線補機実値の真値化 `0件`
- [x] 固定公式過去問の個別正答記号・完成済み答案保存 `0件`
- [x] Git blob SHA `af72dc7052484b5e368a1ab16389e4571caa7d3b`

## Topic 15 独立再解答前ゲート
- [x] `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- [x] 最新main、`STATUS.md` / `HANDOFF.md` / main source / 練習source / PowerPoint QA / Topic 15成果物一覧を再監査
- [x] 既存の「機械二種を進行」枠のPowerPoint成果をreconcileし、重複制作 `0件`
- [x] 固定5過去問の公式正答番号・標準解答本文の保存 `0件`
- [x] 固定5過去問の完成済み個別解答・数値解・導出結果の保存 `0件`
- [x] 練習sourceの正答・解説は教材自身の練習問題で、固定公式過去問の保存済み正答には該当しない
- [x] 固定一次3問＋二次2問・8答案要素、教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- [x] コンプレッサへの三乗則無条件適用、Topic 16以降先取り、未確認新幹線補機実値追加 `0件`
- [x] 判定 `BLIND_REANSWER_READY`

## 今回進めた内容
Topic 15の完成後独立再解答前ゲートを実施した。既存枠のPowerPoint完成成果をreconcileし、重複制作せず、固定一次3問＋二次2問・8答案要素を維持した。公式正答・標準解答本文・完成済み個別答案の保存は `0件` で、blind再解答条件を満たす。

## 判定
Topic 15は `BLIND_REANSWER_READY / IN_PROGRESS`。完成数は `14 / 22`。次はTopic 15完成後独立再解答。
