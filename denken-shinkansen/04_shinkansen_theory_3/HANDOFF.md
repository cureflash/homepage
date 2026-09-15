# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜07は最終QAまでPASSし、`completed`。

Topic 07 `モーターはなぜ回る？` は最終QA再実施で全品質ゲートPASS。固定公式過去問5問の完成後独立再解答は `5 / 5 PASS`、教材外知識補完・後続Topic依存・未確認0系実車値依存はいずれも `0問`。

- 完成数: `7 / 14`
- last completed: `07 モーターはなぜ回る？`
- active topic: `08 新幹線の交流25kVとは何なのか`
- current status: `topic_07_completed`
- next start: Topic 08の制作前EXAM_ALIGNMENT

## 今回進捗

Topic 07の最終QAを再実施した。

確認結果:
- 必須成果物の実在: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 3段階例題: PASS
- 練習15問: `15 / 15 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示QA・文字抽出QA PASS
- 練習PDF: A4縦5ページ、200 dpi表示QA・文字抽出QA PASS
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、はみ出し0件、PPTX整合性PASS
- 完成後独立再解答: `5 / 5 PASS`
- SPEC境界: PASS
- 主source・練習sourceの進捗記録整合性: PASS

教材本文・固定EXAM_ALIGNMENT・数式・3段階例題・練習15問・PDF/PPTX成果物の技術内容は変更していない。

## Topic 07 固定過去問

- 令和6年度下期 理論 問4: 平行導体間の電磁力と向き
- 令和5年度下期 理論 問4: 直線導体の磁界中でループ導体に働く合成電磁力
- 令和4年度上期 理論 問4: 運動導体の誘導起電力
- 令和2年度 理論 問3: 一様磁界中の電流ループに働く偶力
- 平成28年度 理論 問12: ローレンツ力の導出・向き・電子の運動

制作前独立検証: `5 / 5 PASS`
完成後独立再解答: `5 / 5 PASS`

## Topic 07 成果物

- source: `topics/07_motor_force_induction/07_motor_force_induction.md`
- explanation PDF: `topics/07_motor_force_induction/07_motor_force_induction_explanation.pdf`
- practice source: `topics/07_motor_force_induction/07_motor_force_induction_practice.md`
- practice PDF: `topics/07_motor_force_induction/07_motor_force_induction_practice.pdf`
- PowerPoint: `topics/07_motor_force_induction/07_motor_force_induction_images.pptx`
- reanswer: `topics/07_motor_force_induction/07_motor_force_induction_exam_recheck.md`
- final QA: `topics/07_motor_force_induction/07_motor_force_induction_final_qa.md`

## 次に行うこと

Topic 08 `新幹線の交流25kVとは何なのか` の制作前EXAM_ALIGNMENTを開始する。

系列SPECのTopic 08固定範囲:
- 交流 / 直流
- 正弦波
- 瞬時値 / 最大値 / 実効値 / 平均値
- 周期 / 周波数 / 角周波数
- 位相 / 位相差
- ベクトル表示の基本

系列SPECの重要公式:

```text
v = Vm sinωt
ω = 2πf
T = 1/f
V = Vm/√2
I = Im/√2
```

制作前に公式過去問を直近年度から調査し、三種は原則5問以上を固定する。Topic 09以降のRLC・リアクタンス・インピーダンス、Topic 10の力率、Topic 11の三相交流、Topic 12以降の半導体・PWMは勝手に追加しない。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
