# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `14 / 22`
- current_status: `topic_15_powerpoint_complete`
- last_completed_topic: `14 L0系を500km/hで同期させる`
- active_topic: `15 新幹線の補機モーターを設計する`
- next_start: Topic 15 独立再解答前ゲート

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
- [ ] 独立再解答前ゲート
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

## 今回進めた内容
Topic 15解説画像PowerPointを作成した。固定一次3問＋二次2問・8答案要素と系列SPEC固定範囲を維持し、表示QA・overflow・ZIP整合性を通過した。仕様外論点、Topic 16以降の先取り、未確認新幹線補機実値の追加は行っていない。

## 判定
Topic 15は `topic_15_powerpoint_complete / IN_PROGRESS`。完成数は `14 / 22`。次はTopic 15独立再解答前ゲート。
