# STATUS - 新幹線車両・電験二種

更新日: 2026-09-12

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 0 / 39
- current_status: `topic_01_exam_alignment_research_complete`
- last_completed_topic: `none`
- active_topic: `01 0系① 主変圧器の等価回路`
- next_start: Topic 01で選定した公式過去問6問の公式解答を確認し、保存済み正答に依存せず要求式・中間知識・解法を独立検証して本文節へマッピングする。その後に本文を作成する

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次・二次合わせて6問選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [ ] 公式解答との照合を伴う要求事項の独立検証
- [ ] 解説本文
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `0系① 主変圧器の等価回路` の制作前EXAM_ALIGNMENTを作成した。

選定した公式過去問は、R7一次機械問3、R6二次機械・制御問2、R3二次機械・制御問2、R2二次機械・制御問2、H28二次機械・制御問2、H27二次機械・制御問2の6問。

要求論点は、変圧器の一次・二次換算、励磁回路、巻線抵抗・漏れリアクタンス、無負荷試験・短絡試験、%インピーダンス、電圧変動率、鉄損・銅損、規約効率・最大効率、負荷率との関係に整理した。

0系の実車接続では、既存の三種教材で一次資料確認済みの交流60 Hz 25 kV、主変圧器容量1650 kVA、低圧タップ切換、25段を再利用可能とした。一方、公開一次資料で確認できていない0系固有の等価回路定数、%インピーダンス、鉄損・銅損等は実値として扱わない。

## 判定
Topic 01 は `EXAM_ALIGNMENT` 制作前リサーチ段階まで進んだが、まだ `completed` ではない。MASTER_SPEC.md / EXAM_ALIGNMENT_SPEC.md の完成後品質ゲートを通過するまで完成数へ加算しない。
