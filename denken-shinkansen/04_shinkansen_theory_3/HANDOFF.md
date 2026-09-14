# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜06は最終QAまでPASSし、`completed`。

Topic 07 `モーターはなぜ回る？` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source・練習PDFに続き、解説画像PowerPointまで完成した。固定公式過去問5問と制作前独立検証 `5 / 5 PASS` は変更していない。

- 完成数: `6 / 14`
- last completed: `06 0系の変圧器は何をしていた？`
- active topic: `07 モーターはなぜ回る？`
- current status: `topic_07_powerpoint_complete`
- Topic 07 source: `topics/07_motor_force_induction/07_motor_force_induction.md`
- Topic 07 explanation PDF: `topics/07_motor_force_induction/07_motor_force_induction_explanation.pdf`
- Topic 07 practice source: `topics/07_motor_force_induction/07_motor_force_induction_practice.md`
- Topic 07 practice PDF: `topics/07_motor_force_induction/07_motor_force_induction_practice.pdf`
- Topic 07 PowerPoint: `topics/07_motor_force_induction/07_motor_force_induction_images.pptx`

## 今回進捗

固定EXAM_ALIGNMENT・解説本文・練習問題を変更せず、Topic 07の解説画像PowerPointを作成した。

- 16:9・4スライド
- `F=BIl sinθ`、フレミング左手則、平行導体の引力・反発を可視化
- コイルの偶力・トルク `τ=NIAB sinφ` と角度定義を可視化
- ローレンツ力 `F=|q|vB sinθ`、負電荷の向き、`v⊥B` の円運動を整理
- 運動導体の誘導起電力 `e=Blv sinθ`、フレミング右手則、逆起電力の因果を整理
- 固定5問の要求事項を全件対応
- 全4スライド表示QA `4 / 4 PASS`
- スライド外形はみ出し `0件`
- PPTX ZIP整合性 `PASS`
- 直流機の電圧方程式・界磁方式・速度制御の追加 `0件`
- Topic 08以降の論点追加 `0件`
- 未確認0系実車値の追加 `0件`

## Topic 07 固定過去問

- 令和6年度下期 理論 問4: 平行導体間の電磁力と向き
- 令和5年度下期 理論 問4: 直線導体の磁界中でループ導体に働く合成電磁力
- 令和4年度上期 理論 問4: 運動導体の誘導起電力
- 令和2年度 理論 問3: 一様磁界中の電流ループに働く偶力
- 平成28年度 理論 問12: ローレンツ力の導出・向き・電子の運動

制作前独立検証: `5 / 5 PASS`

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

Topic 07の完成後公式過去問独立再解答を、固定EXAM_ALIGNMENT 5問について完成教材だけで実施する。

公式解答やsourceに保存された制作前検証結果を先に見ず、教材内の式・判断手順だけで解く。教材外・固定範囲外知識で補完した場合は正答でもFAILとする。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
