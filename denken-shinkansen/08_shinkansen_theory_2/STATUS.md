# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 4 / 21
- current_status: `topic_05_practice_pdf_complete`
- last_completed_topic: `04 架線と車体は巨大なコンデンサなのか？`
- active_topic: `05 0系主変圧器の鉄心には何が起きている？`
- next_start: Topic 05の解説画像PowerPointを作成する。固定EXAM_ALIGNMENT一次5問・16小問、二次非採用判断、固定範囲を変更しない

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
- [ ] 解説画像PowerPoint
- [ ] 完成後独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 05の練習問題source＋練習PDFを完成した。

- `topics/05_transformer_magnetic_circuit/05_transformer_magnetic_circuit_practice.md`
- `topics/05_transformer_magnetic_circuit/05_transformer_magnetic_circuit_practice.pdf`
- 全12問、すべて五肢択一
- 難易度: 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 正答一意性・計算再検算: `12 / 12 PASS`
- A4縦3ページ、200 dpi全ページ表示QA PASS
- 固定一次5問・16小問を練習問題へマッピング
- R7〜R5二次に直接対応がないため、二次数合わせは行っていない
- 変圧器等価回路、自己／相互インダクタンス、電磁誘導、同期機特性、表皮効果の追加: 0件
- 実車未確認値の使用: 0件

## 判定

Topic 05は `IN_PROGRESS / practice_pdf_complete`。完成数は `4 / 21` のまま。次は解説画像PowerPoint。