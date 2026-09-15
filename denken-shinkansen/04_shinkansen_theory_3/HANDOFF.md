# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜06は最終QAまでPASSし、`completed`。

Topic 07 `モーターはなぜ回る？` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source・練習PDF、解説画像PowerPoint、完成後公式過去問独立再解答まで完了している。固定公式過去問5問は公式解答と `5 / 5 PASS`。

前回最終QAで唯一FAILだった主source・練習sourceの旧進捗記録を、GitHub正本上の実成果物へ同期した。教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・PDF/PPTX成果物は変更していない。次は最終QA再実施。

- 完成数: `6 / 14`
- last completed: `06 0系の変圧器は何をしていた？`
- active topic: `07 モーターはなぜ回る？`
- current status: `topic_07_source_progress_synced`
- Topic 07 source: `topics/07_motor_force_induction/07_motor_force_induction.md`
- Topic 07 explanation PDF: `topics/07_motor_force_induction/07_motor_force_induction_explanation.pdf`
- Topic 07 practice source: `topics/07_motor_force_induction/07_motor_force_induction_practice.md`
- Topic 07 practice PDF: `topics/07_motor_force_induction/07_motor_force_induction_practice.pdf`
- Topic 07 PowerPoint: `topics/07_motor_force_induction/07_motor_force_induction_images.pptx`
- Topic 07 reanswer: `topics/07_motor_force_induction/07_motor_force_induction_exam_recheck.md`
- Topic 07 final QA: `topics/07_motor_force_induction/07_motor_force_induction_final_qa.md`

## 今回進捗

Topic 07のsource進捗記録を実成果物へ同期した。

同期内容:
- 主source `status`: `source_progress_synced`
- 主sourceの練習問題source・練習PDF: 完成済みへ同期
- 主sourceのPowerPoint: `16:9・4枚 / 表示QA 4 / 4 PASS / はみ出し0件 / PPTX整合性PASS` へ同期
- 主sourceの完成後独立再解答: `5 / 5 PASS` へ同期
- 練習sourceの完成後独立再解答: `5 / 5 PASS` へ同期
- 主source・練習sourceの次工程: 最終QA再実施へ同期

変更なし:
- 教材本文
- 固定EXAM_ALIGNMENT 5問
- 数式・3段階例題
- 練習15問と完全解説
- 解説PDF・練習PDF・PowerPoint
- SPEC固定範囲・境界

## Topic 07 固定過去問

- 令和6年度下期 理論 問4: 平行導体間の電磁力と向き
- 令和5年度下期 理論 問4: 直線導体の磁界中でループ導体に働く合成電磁力
- 令和4年度上期 理論 問4: 運動導体の誘導起電力
- 令和2年度 理論 問3: 一様磁界中の電流ループに働く偶力
- 平成28年度 理論 問12: ローレンツ力の導出・向き・電子の運動

制作前独立検証: `5 / 5 PASS`
完成後独立再解答: `5 / 5 PASS`

## Topic 07 固定範囲

- 磁界
- 磁束密度
- 電流が磁界から受ける力
- フレミング左手則
- ローレンツ力の基本
- 電磁力
- コイルに働くトルク
- 電磁誘導
- 逆起電力
- フレミング右手則

主要式:

```text
F = BIl sinθ
F = qvB sinθ
e = Blv sinθ
```

本文では固定過去問の要求を解くため、これらから導ける平行導体の力とコイルトルクも扱う。

## Topic 07 境界

- 直流機の電圧方程式、界磁方式、速度制御は機械編へ送り、このTopicの完成ゲートへ入れない。
- Topic 08以降の正弦波、実効値、RLC、力率、三相交流、半導体、PWMを追加しない。
- 0系直流主電動機の未確認実車値・内部巻線・結線・制御方式を推測しない。
- Topic 06の磁界・磁束密度等は電磁力を解くための前提として必要最小限のみ再利用する。

## 次に行うこと

Topic 07の最終QAを再実施する。

確認対象:
- 必須成果物の実在
- 固定EXAM_ALIGNMENT 5問
- 完成後独立再解答 `5 / 5 PASS`
- 解説PDF・練習PDF・PowerPoint既存QA
- SPEC境界
- 主source・練習sourceの進捗記録整合性

全件PASSした場合のみ Topic 07を `completed` とし、完成数を `7 / 14` に更新してTopic 08へ進む。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
