# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 5 / 21
- current_status: `topic_06_final_qa_needs_revision`
- last_completed_topic: `05 0系主変圧器の鉄心には何が起きている？`
- active_topic: `06 25kVからどうやって電圧が誘導される？`
- next_start: 練習sourceの過去問対応表を現行EXAM_ALIGNMENTへ同期する

## Topic 06 修正版EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] Topic 06固定範囲を確認
- [x] 二種一次「理論」を直近年度優先で確認
- [x] R8 問2(4)(5)は前段のビオ・サバール依存のため非採用
- [x] R7 問2(1)(2)(4)(5): 結合係数、磁気エネルギー、鎖交磁束、ファラデー則
- [x] R5 問2(2)〜(4): 鎖交磁束変化、速度、ファラデー則
- [x] R2 問2(1)〜(5): 自己インダクタンス、鎖交磁束保存、磁気エネルギー
- [x] H28 問1(3)(5): `Ψ=Li`、`W=Li²/2`
- [x] H30 問2(4)(5)は旧完成後独立再解答で3枝磁気回路の合成・磁束分流というTopic 05依存を検出したため除外
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
- [x] 最終QA実施: `NEEDS_REVISION / IN_PROGRESS`
- [ ] 練習sourceの過去問対応表をH21選定へ同期
- [ ] 最終QA再実施

## 今回進めた内容

Topic 06の最終QAを実施した。

- 必須成果物: PASS
- 修正版一次5問・16小問の独立再解答: `16 / 16 PASS`
- 教材外知識補完: 0件
- 二次数合わせ: 0件
- 固定範囲外論点の追加: 0件
- 表示QA・計算QA: PASS
- 成果物相互整合: NEEDS_REVISION

不整合は `06_transformer_electromagnetic_induction_practice.md` の「過去問対応」表。旧選定のH30問2(4)(5)が残り、現行のH21問2(2)(3)が反映されていない。練習問題・正答そのものの不具合は確認していない。

## 判定

Topic 06は `topic_06_final_qa_needs_revision`。完成数は `5 / 21` のまま。次工程は練習sourceの記録同期で、技術内容・問題・正答・固定範囲は変更しない。
