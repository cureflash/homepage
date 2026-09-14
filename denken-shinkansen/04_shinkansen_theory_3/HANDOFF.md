# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜06は最終QAまでPASSし、`completed`。

Topic 07 `モーターはなぜ回る？` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDFに続き、練習問題source・練習PDFまで完成した。固定公式過去問5問と制作前独立検証 `5 / 5 PASS` は変更していない。

- 完成数: `6 / 14`
- last completed: `06 0系の変圧器は何をしていた？`
- active topic: `07 モーターはなぜ回る？`
- current status: `topic_07_practice_pdf_complete`
- Topic 07 source: `topics/07_motor_force_induction/07_motor_force_induction.md`
- Topic 07 explanation PDF: `topics/07_motor_force_induction/07_motor_force_induction_explanation.pdf`
- Topic 07 practice source: `topics/07_motor_force_induction/07_motor_force_induction_practice.md`
- Topic 07 practice PDF: `topics/07_motor_force_induction/07_motor_force_induction_practice.pdf`

## 今回進捗

固定EXAM_ALIGNMENTと解説本文を変更せず、練習問題source・練習PDFを作成した。

- 全15問、全問五肢択一
- 基礎4問／本試験標準8問／複合・応用3問
- 正答位置 `(1)〜(5)` は各3問
- 固定5問の要求事項を全件練習へ接続
- 独立再計算・再判定: `15 / 15 PASS`
- PDF: A4縦5ページ
- 200 dpi全5ページ表示QA: `PASS`
- 文字抽出QA: `PASS`
- 直流機の電圧方程式・界磁方式・速度制御の追加: `0件`
- Topic 08以降の論点追加: `0件`
- 未確認0系実車値の追加: `0件`

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

固定EXAM_ALIGNMENT・解説本文・練習問題を変更せず、Topic 07の解説画像PowerPointを作成する。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
