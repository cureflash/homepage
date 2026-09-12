# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 1 / 14
- current_status: `topic_01_completed`
- last_completed_topic: `01 新幹線1編成はどれだけ電気を食う？`
- active_topic: `02 なぜ新幹線は25,000Vなのか`
- next_start: Topic 02の制作前EXAM_ALIGNMENTを行う。公式過去問を直近年度優先で原則5問以上調査し、要求知識・式・設問型・教材で必要な説明をsource Markdownへ先に固定する

## Topic 01 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 公式過去問5問の関連候補を確認
- [x] e-sysnet、電験三種まとめました、電験王の説明粒度を確認
- [x] source Markdownを作成し、必要説明事項と境界論点を記録
- [x] 既存5候補をSPEC境界で再判定
- [x] 平成29年度理論問14をTopic 01単独の独立再解答ゲート対象として確定
- [x] Topic 05または後続Topicの知識を必要とする候補を独立再解答ゲートから除外
- [x] 平成18年度〜令和8年度上期の理論問題を横断確認し、追加候補の要求知識を再判定
- [x] 独立再解答ゲート対象の公式過去問集合を確定（5問未満例外を適用し、平成29年度理論問14の1問）
- [x] EXAM_ALIGNMENT確定
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（15問、全問五肢択一、完全解説）
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] QA PASS

## 今回進めた内容

Topic 01 `新幹線1編成はどれだけ電気を食う？` の最終QAを実施し、`topics/01_train_power_basics/01_train_power_basics_final_qa.md` に記録した。

確認結果:

- 必須成果物4種のGitHub実在: PASS
- 三種公式過去問のEXAM_ALIGNMENT: PASS（5問未満例外を適正適用）
- source Markdownと解説PDF・練習PDF・PowerPointの対応: PASS
- 練習PDF15問（基礎4・本試験標準8・複合応用3、全問五肢択一）の仕様適合: PASS
- 計算・単位・有効数字の整合: PASS
- 実車値・仮定値の区別: PASS
- 既実施レンダリングQAと現行blob SHAの対応: PASS
- 完成後独立再解答: 平成29年度理論問14 1 / 1 PASS、教材外知識補完0件

## 判定

Topic 01を `completed` とする。完成数を `1 / 14` に更新し、最初の未完了テーマをTopic 02へ移した。
