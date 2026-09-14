# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜06は最終QAまでPASSし、`completed`。

Topic 07 `モーターはなぜ回る？` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source・練習PDF、解説画像PowerPointに続き、完成後公式過去問独立再解答まで完了した。固定公式過去問5問は公式解答と `5 / 5` 一致した。

- 完成数: `6 / 14`
- last completed: `06 0系の変圧器は何をしていた？`
- active topic: `07 モーターはなぜ回る？`
- current status: `topic_07_independent_reanswer_complete`
- Topic 07 source: `topics/07_motor_force_induction/07_motor_force_induction.md`
- Topic 07 explanation PDF: `topics/07_motor_force_induction/07_motor_force_induction_explanation.pdf`
- Topic 07 practice source: `topics/07_motor_force_induction/07_motor_force_induction_practice.md`
- Topic 07 practice PDF: `topics/07_motor_force_induction/07_motor_force_induction_practice.pdf`
- Topic 07 PowerPoint: `topics/07_motor_force_induction/07_motor_force_induction_images.pptx`
- Topic 07 reanswer: `topics/07_motor_force_induction/07_motor_force_induction_exam_recheck.md`

## 今回進捗

固定EXAM_ALIGNMENT・教材本文・練習問題・PowerPointを変更せず、Topic 07の完成後公式過去問独立再解答を実施した。

- 令和6年度下期 理論 問4 → `(2)`
- 令和5年度下期 理論 問4 → `(2)`
- 令和4年度上期 理論 問4 → `(3)`
- 令和2年度 理論 問3 → `(3)`
- 平成28年度 理論 問12 → `(2)`
- 公式解答との一致: `5 / 5 PASS`
- 教材だけで必要公式・途中式・方向判定を再構成可能: PASS
- 教材外知識の補完: `0問`
- 直流機詳細・Topic 08以降への依存: `0問`
- 未確認0系実車値への依存: `0問`

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

Topic 07の最終QAを実施する。

確認項目:
- 固定EXAM_ALIGNMENT 5問と完成後独立再解答 `5 / 5 PASS`
- 必須成果物の存在
- 解説PDF・練習PDF・PowerPointの既存QA記録
- source Markdownの進捗記録と実成果物の整合
- SPEC固定範囲と境界

不整合が1件でもあれば `NEEDS_REVISION` とし、修正後に再QAする。最終QAを通過するまで `completed` としない。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
