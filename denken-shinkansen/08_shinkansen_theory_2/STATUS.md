# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 4 / 21
- current_status: `topic_05_final_qa_needs_revision`
- last_completed_topic: `04 架線と車体は巨大なコンデンサなのか？`
- active_topic: `05 0系主変圧器の鉄心には何が起きている？`
- next_start: Topic 05の解説source・練習sourceに残る旧進捗記録を現在地へ同期する。技術内容・固定EXAM_ALIGNMENT・問題・正答・二次非採用判断は変更しない

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
- [x] 最終QA実施（`NEEDS_REVISION`）

## 今回進めた内容

Topic 05の最終QAを実施した。

- 必須成果物はGitHub正本上に全件存在
- 固定一次5問・16小問の独立再解答は `16 / 16 PASS`
- 教材外の電気理論による補完: 0件
- 固定範囲外論点の追加: 0件
- R7〜R5二次に直接対応がない判断を維持し、二次数合わせ: 0件
- 解説PDF: A4縦6ページ、全ページ表示QA PASS
- 練習PDF: A4縦3ページ、全ページ表示QA PASS
- 練習12問: 正答一意性・計算再検算 `12 / 12 PASS`
- PowerPoint: 16:9・5スライド、全スライド表示QA・overflow検査・ZIP整合性PASS
- `05_transformer_magnetic_circuit.md` 冒頭状態欄がPDF・練習・PowerPoint・独立再解答を未着手扱いのまま残っていることを検出
- `05_transformer_magnetic_circuit_practice.md` 冒頭状態欄が練習PDF完成時点のまま残っていることを検出
- 技術内容・固定EXAM_ALIGNMENT・二次非採用判断・独立再解答結果には矛盾なし

## 判定

Topic 05は `NEEDS_REVISION / IN_PROGRESS`。未完了理由はsource 2ファイルの進捗記録不整合のみ。完成数は `4 / 21` のまま。次はsource状態記録の同期。
