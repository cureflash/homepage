# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-18

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 17 / 21
- current_status: `topic_18_progress_records_synced`
- last_completed_topic: `17 GTO・IGBT・SiCはどうやって電流を操る？`
- active_topic: `18 新幹線のセンサ信号をどう増幅する？`
- next_start: Topic 18 最終QA再実施

## 完成済み

Topic 01〜17は、各テーマのEXAM_ALIGNMENT、必要成果物、完成後独立再解答、最終QAを通過し `PASS / completed`。

## Topic 18 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲: 理想オペアンプ、反転増幅、非反転増幅、加算回路、差動増幅、積分回路、微分回路、コンパレータ
- [x] 一次・二次を含む関連候補を直近年度から調査
- [x] R8 一次 理論 問8を採用
- [x] R1 一次 理論 問8を採用
- [x] H29 一次 理論 問8を採用
- [x] H23 一次 理論 問8を採用
- [x] H21 一次 理論 問8を採用
- [x] 品質ゲート対象を一次5問・25答案要素に固定
- [x] R4一次理論問7は利得帯域幅積・周波数特性を含むため非採用
- [x] R2一次理論問8は電圧安定化・トランジスタ・損失計算を含むため非採用
- [x] H26一次理論問8は発振回路が主題のため非採用
- [x] R8二次は2026-09-18時点で未実施、R7〜R1二次を確認
- [x] 固定範囲だけで完答する直接対応二次問題なし
- [x] 二次採用0問・二次数合わせ0件
- [x] Topic 19以降の先取り0件
- [x] 実車の特定センサ回路・定数の未確認追加0件

## Topic 18 制作進捗
- [x] 制作前EXAM_ALIGNMENT: 一次5問・25答案要素
- [x] 制作前blind独立再解答: `25 / 25 PASS`
- [x] 公式標準解答照合: `25 / 25`
- [x] 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- [x] 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- [x] 練習問題source＋練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- [x] 解説画像PowerPoint＋表示QA: `PASS / POWERPOINT_COMPLETE`
- [x] 完成後独立再解答: `25 / 25 PASS`
- [x] 初回最終QA: `NEEDS_REVISION / IN_PROGRESS`
- [x] 進捗記録同期: `PASS / topic_18_progress_records_synced`
- [ ] 最終QA再実施
- [ ] completed状態同期

## 今回進めた内容

初回最終QAで指摘された進捗記録4箇所だけをGitHub正本の実態へ同期した。

- 主source冒頭: stageを `PROGRESS_RECORDS_SYNCED`、次工程をTopic 18最終QA再実施へ同期
- 主source末尾: 次工程をTopic 18最終QA再実施へ同期
- 練習source冒頭: stageを `PROGRESS_RECORDS_SYNCED`、次工程をTopic 18最終QA再実施へ同期
- 練習source末尾: 次工程をTopic 18最終QA再実施へ同期
- 技術本文・固定EXAM_ALIGNMENT・練習問題・正答・PDF/PPTX・独立再解答結果の変更: `0件`
- 固定一次5問・25答案要素: 維持
- 完成後独立再解答: `25 / 25 PASS` 維持
- 二次採用: `0問`、二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`

## 判定

`PASS / topic_18_progress_records_synced / IN_PROGRESS`。

完成数は `17 / 21` のまま。次工程はTopic 18最終QA再実施。
