# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-15

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 8 / 21
- current_status: `topic_09_blind_reanswer_blocked_by_answer_leak`
- last_completed_topic: `08 L0系はどうやって磁石だけで浮いて進む？`
- active_topic: `09 新幹線の25kV交流をフェーザで表す`
- next_start: Topic 09主sourceの保存済み公式正答値だけを必須先読み対象から除去し、`topic_09_blind_reanswer_ready` にする

## Topic 06 制作進捗
- [x] 制作前EXAM_ALIGNMENT
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source＋練習PDF
- [x] 解説画像PowerPoint
- [x] 旧EXAM_ALIGNMENT完成後独立再解答: `14 / 16 PASS / NEEDS_REVISION`
- [x] EXAM_ALIGNMENT是正: H30問2(4)(5) → H21問2(2)(3)
- [x] 修正版EXAM_ALIGNMENT完成後独立再解答: `16 / 16 PASS`
- [x] 練習sourceの過去問対応表をH21選定へ同期
- [x] 主sourceの進捗記録を現在地へ同期
- [x] 最終QA再々実施: `PASS / completed`

## Topic 07 制作進捗
- [x] 制作前EXAM_ALIGNMENT: 一次5問・25小問
- [x] R7〜R5二次を確認し、固定範囲の直接対応問題なし
- [x] 二次数合わせ 0件
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source＋練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答: `25 / 25 PASS`
- [x] 主source・練習sourceの進捗記録同期
- [x] 最終QA再実施: `PASS / completed`

## Topic 08 制作進捗
- [x] 制作前EXAM_ALIGNMENT: 一次4問・6小問
- [x] 二次の直接対応問題なし、二次数合わせ0件
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source＋練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答: `6 / 6 PASS`
- [x] 主sourceの進捗記録同期
- [x] 最終QA再実施: `PASS / completed`

## Topic 09 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲: 瞬時値、実効値、平均値、正弦波、位相差、複素数表示、フェーザ、複素インピーダンス
- [x] R7 一次 理論 問3(1)(2): フェーザ位相・ベクトル三角形
- [x] R5 一次 理論 問4(1): 複素インピーダンス・フェーザ電流
- [x] R3 一次 理論 問4(3)(4): RLC複素インピーダンス・フェーザ電流
- [x] H26 一次 理論 問3(1)(2): フェーザ差・ベクトルの大きさ
- [x] H21 一次 理論 問3(1)〜(4): アドミタンス、フェーザ、実効値⇔最大値、瞬時値
- [x] 品質ゲート対象を一次5問・11小問に固定
- [x] 公式解答照合 `11 / 11 PASS`
- [x] R7〜R5二次を確認し、固定範囲の直接対応問題なし
- [x] 二次採用0問・二次数合わせ0件
- [x] 共振/Q値、三相回路、複素電力等の後続Topic追加0件
- [x] 未確認実設備値追加0件

## Topic 09 制作進捗
- [x] 制作前EXAM_ALIGNMENT
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source＋練習PDF
- [x] 解説画像PowerPoint
- [ ] 完成後独立再解答: `BLOCKED`（必須先読みsourceに保存済み正答値が残存）
- [ ] 最終QA

## 今回進めた内容

Topic 09の完成後独立再解答に入る前の品質ゲートを監査した。

- MASTER_SPECは各runでactive themeの既存成果物を必須先読みとする
- EXAM_ALIGNMENT_SPECは完成後独立再解答を「保存済み正答を先に見ず」に行うことを要求する
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor.md` のEXAM_ALIGNMENT表に保存済み公式正答値が残っている
- このため、現状の必須先読み手順のまま独立再解答すると品質ゲート条件を満たせない
- HANDOFFから公式正答値は除去済み
- 主source側は未除去なので、本runでは独立再解答を実施していない
- 固定一次5問・11小問、二次採用0問、二次数合わせ0件、固定範囲、技術本文、成果物はいずれも変更していない

## exact blocker

`topics/09_25kv_ac_phasor/09_25kv_ac_phasor.md` の品質ゲート表に保存済み公式正答値が残っており、MASTER_SPECの必須先読みとEXAM_ALIGNMENT_SPECのblind再解答条件が同時に成立しない。

解除条件は、主sourceの公式正答値だけを除去し、問題選定・要求知識・「公式解答照合11 / 11 PASS」の事実を保持すること。その編集runでは独立再解答せず、次runで必須先読み対象に正答値がないことを確認してから完成教材のみで再解答する。

## 判定

Topic 09は `BLIND_REANSWER_BLOCKED / IN_PROGRESS`。完成数は `8 / 21` のまま。次工程は主sourceの正答値除去による `topic_09_blind_reanswer_ready` 化。