# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 4 / 21
- current_status: `topic_05_source_status_synced`
- last_completed_topic: `04 架線と車体は巨大なコンデンサなのか？`
- active_topic: `05 0系主変圧器の鉄心には何が起きている？`
- next_start: Topic 05の最終QAを再実施する。技術内容・固定EXAM_ALIGNMENT・問題・正答・二次非採用判断は変更せず、全品質ゲートPASSの場合のみcompletedにする

## Topic 05 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] Topic 05固定範囲を確認
- [x] 二種一次「理論」を直近年度優先で確認
- [x] 品質ゲート対象を一次5問・16小問に固定
- [x] R6 問2(1)〜(2): アンペアの周回積分、磁界、磁気エネルギー
- [x] R5 問2(1): 無限長直線電流の磁束密度
- [x] R4 問2(1)〜(5): 環状鉄心、磁束、磁気抵抗、磁気回路近似
- [x] R3 問2(1)〜(5): B-H曲線、ヒステリシス、残留磁束密度、保磁力、損失
- [x] H30 問2(1)〜(3): 空隙を含む磁気回路、磁気抵抗、磁束密度
- [x] R8 問2はビオ・サバール＋ファラデー中心のため非採用
- [x] R7 問2は自己・相互インダクタンス＋トルク＋電磁誘導中心のため非採用
- [x] R6 問2(3)〜(5)の導電率・表皮効果を除外
- [x] R5 問2(2)〜(5)の鎖交磁束・ファラデー則を除外
- [x] H30 問2(4)(5)の自己・相互インダクタンスを除外
- [x] R7〜R5二次「電力・管理」「機械・制御」を確認
- [x] 二次に固定範囲の直接対応問題がないため数合わせで採用しない判断を記録
- [x] e-sysnet・電験王の説明粒度を確認

## Topic 05 制作進捗
- [x] 制作前EXAM_ALIGNMENT
- [x] 解説本文
- [x] 3段階例題
- [x] 解説PDF＋表示QA
- [x] 練習問題source＋練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答
- [x] 初回最終QA実施（`NEEDS_REVISION`）
- [x] 解説source・練習sourceの旧進捗記録を現在地へ同期
- [ ] 最終QA再実施

## 今回進めた内容

Topic 05を1段階進め、初回最終QAで検出されたsource進捗記録2箇所の不整合を解消した。

- `05_transformer_magnetic_circuit.md` の状態欄を、必須成果物・独立再解答・初回最終QAまで実施済みの現在地へ同期
- 同source末尾の独立再解答・次工程記録も現在地へ同期
- `05_transformer_magnetic_circuit_practice.md` の状態欄を現在地へ同期
- 技術内容の変更: 0件
- 固定EXAM_ALIGNMENTの変更: 0件
- 練習問題・正答の変更: 0件
- 二次非採用判断の変更: 0件
- 固定範囲外論点の追加: 0件

## 判定

Topic 05は `IN_PROGRESS`。初回最終QAの唯一の残件だったsource進捗記録不整合は解消済み。完成数は `4 / 21` のまま。次は最終QA再実施。