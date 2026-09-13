# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 4 / 21
- current_status: `topic_05_powerpoint_complete`
- last_completed_topic: `04 架線と車体は巨大なコンデンサなのか？`
- active_topic: `05 0系主変圧器の鉄心には何が起きている？`
- next_start: Topic 05の完成教材のみで固定EXAM_ALIGNMENT一次5問・16小問を独立再解答する。二次非採用判断、固定範囲を変更しない

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
- [ ] 完成後独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 05の解説画像PowerPointを完成した。

- `topics/05_transformer_magnetic_circuit/05_transformer_magnetic_circuit_images.pptx`
- 16:9、5スライド
- Slide 1: `I → NI → H → B → Φ` と本Topicの3本柱
- Slide 2: アンペアの周回積分、無限長直線電流、円柱導体内部、磁気エネルギー
- Slide 3: 起磁力・磁気抵抗・空隙を含む磁気回路、環状鉄心の厳密積分と近似
- Slide 4: B-H曲線、磁気飽和、残留磁束密度、保磁力、ヒステリシス損
- Slide 5: 固定一次5問・16小問への対応と固定範囲境界
- 全5スライドをレンダリングし、クリッピング・重なり・欠落・文字化けなし
- `slides_test.py` overflow検査 PASS
- PPTX ZIP整合性 PASS
- R7〜R5二次に直接対応がないため、二次数合わせは行っていない
- 変圧器等価回路、自己／相互インダクタンス、ファラデーの法則、誘導起電力、同期機特性、表皮効果の追加: 0件
- 実車未確認値の使用: 0件

## 判定

Topic 05は `IN_PROGRESS / powerpoint_complete`。完成数は `4 / 21` のまま。次は完成後独立再解答。
