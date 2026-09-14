# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-15

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 6 / 21
- current_status: `topic_07_final_qa_needs_revision`
- last_completed_topic: `06 25kVからどうやって電圧が誘導される？`
- active_topic: `07 0系のモーターはなぜ力を出せる？`
- next_start: Topic 07の主source・練習sourceの旧進捗記録を現在地へ同期する

## Topic 06 修正版EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] Topic 06固定範囲を確認
- [x] 二種一次「理論」を直近年度優先で確認
- [x] R8 問2(4)(5)は前段のビオ・サバール依存のため非採用
- [x] R7 問2(1)(2)(4)(5): 結合係数、磁気エネルギー、鎖交磁束、ファラデー則
- [x] R5 問2(2)〜(4): 鎖交磁束変化、速度、ファラデー則
- [x] R2 問2(1)〜(5): 自己インダクタンス、鎖交磁束保存、磁気エネルギー
- [x] H28 問1(3)(5): `Ψ=Li`、`W=Li²/2`
- [x] H30 問2(4)(5)はTopic 05依存を検出したため除外
- [x] H21 問2(2)(3)を代替採用: 同一磁路で `L∝N²`、`M∝N1N2`
- [x] 品質ゲート対象を一次5問・16小問に維持
- [x] 修正版公式解答照合 `16 / 16`
- [x] R7〜R5二次「電力・管理」「機械・制御」を全6科目確認済み
- [x] 二次に固定範囲の直接対応問題がないため数合わせで採用しない判断を維持
- [x] 固定範囲外論点の追加 0件

## Topic 06 制作進捗
- [x] 制作前EXAM_ALIGNMENT
- [x] 解説本文
- [x] 3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source＋練習PDF
- [x] 解説画像PowerPoint
- [x] 旧EXAM_ALIGNMENT完成後独立再解答: `14 / 16 PASS / NEEDS_REVISION`
- [x] EXAM_ALIGNMENT是正: H30問2(4)(5) → H21問2(2)(3)
- [x] 修正版EXAM_ALIGNMENT完成後独立再解答: `16 / 16 PASS`
- [x] 初回最終QA: `NEEDS_REVISION / IN_PROGRESS`
- [x] 練習sourceの過去問対応表をH21選定へ同期
- [x] 最終QA再実施: `NEEDS_REVISION / IN_PROGRESS`
- [x] 主sourceの進捗記録を現在地へ同期
- [x] 最終QA再々実施: `PASS / completed`

## Topic 07 制作前EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲: ローレンツ力、`F=q(v×B)`、`F=BIl`、電子の運動、電界中・磁界中の荷電粒子、円運動、電子の比電荷
- [x] R7 一次 理論 問7 (1)〜(5): 磁界中の電子、ローレンツ力、円運動、周波数・周期
- [x] R5 一次 理論 問6 (1)〜(5): 交流電界中の電子運動
- [x] R3 一次 理論 問6 (1)〜(5): 一様電界領域を通過する電子運動
- [x] R1 一次 理論 問7 (1)〜(5): 磁界中の電子、サイクロトロン角周波数
- [x] H25 一次 理論 問6 (1)〜(5): サイクロトロン共鳴、加速電圧、比電荷
- [x] 品質ゲート対象を一次5問・25小問に固定
- [x] 公式解答25小問を照合済み
- [x] R8 問1はガウスの法則による球内電界導出が前提のためTopic 03依存として非採用
- [x] R8 問7・R2 問7は半導体論点のためTopic 16側として非採用
- [x] R7〜R5二次「電力・管理」「機械・制御」を確認し、固定範囲の直接対応問題なし
- [x] 二次数合わせ 0件
- [x] 直流機特性・固定範囲外論点の追加 0件
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答 25小問: `25 / 25 PASS`
- [x] 最終QA: `NEEDS_REVISION / IN_PROGRESS`

## 今回進めた内容

Topic 07の最終QAを実施した。

- 必須成果物の実在: PASS
- 固定一次5問・25小問の完成後独立再解答: `25 / 25 PASS`
- 教材外知識補完: 0件
- 固定範囲外論点追加: 0件
- 直流機特性追加: 0件
- 二次数合わせ: 0件
- 解説PDF・練習PDF・PowerPoint表示QA記録: PASS
- 主source冒頭・固定品質ゲート・次工程に旧進捗が残存
- 練習source次工程に旧進捗が残存
- 最終QA記録: `topics/07_motor_lorentz_force/07_motor_lorentz_force_final_qa.md`

## 判定

Topic 07は `NEEDS_REVISION / IN_PROGRESS`。技術内容と試験対応品質ゲートはPASSだが、主source・練習sourceの進捗記録が実在成果物と不整合。完成数は `6 / 21` のまま。次工程は進捗記録の同期。