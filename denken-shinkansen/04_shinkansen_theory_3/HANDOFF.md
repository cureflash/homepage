# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` とTopic 02 `なぜ新幹線は25,000Vなのか` は最終QAまでPASSし、`completed`。

完成数: `2 / 14`

active topic: `03 架線はただの銅線ではない`

## 今回進捗

Topic 02を1段階進め、最終QAを完了した。

更新成果物:
- `topics/02_why_25kv/02_why_25kv_final_qa.md`
- `STATUS.md`
- `HANDOFF.md`

判定: `PASS / completed`

## Topic 02 完成証跡

source Markdown:
`topics/02_why_25kv/02_why_25kv.md`

解説PDF:
`topics/02_why_25kv/02_why_25kv_explanation.pdf`

練習PDF:
`topics/02_why_25kv/02_why_25kv_practice.pdf`

解説画像PowerPoint:
`topics/02_why_25kv/02_why_25kv_images.pptx`

最終QA:
`topics/02_why_25kv/02_why_25kv_final_qa.md`

現在blob:
- source Markdown: `44cda46bff4cdf203b0ea2bd7c4f6023402f4a8d`
- 解説PDF: `3f8d9dd2b8cfbf9e3a2dc4f259f30d63e822fea0`
- 練習PDF: `6ea946c22814273b3ab127841046ef7ca5791380`
- PowerPoint: `98b0a91a3c5635b77b8a4eebe5e72980cd6f7027`

## Topic 02 EXAM_ALIGNMENT・QA結果

直近の公式理論問題6候補をTopic 02のSPEC境界で再判定済み。

- ゲート対象: 令和7年度下期 理論 問6
- ゲート対象外: 令和8年度上期 問5、令和7年度下期 問5、令和7年度上期 問5・問6・問7
- 対象外理由: 直並列回路、並列電源、回路網、RLC等の後続Topic知識が必要
- Topic 02単独で完答できる問題が1問のみ確認できたため、5問未満例外を適用

完成教材だけで令和7年度下期 理論 問6を独立再解答し、次を得た。

```text
V1 = 2.25 × 3 = 6.75 V
V2 = 3.45 × 2 = 6.90 V

6.75 = E - 3r
6.90 = E - 2r

r = 0.15 Ω
E = 7.20 V
```

- 独立解答: 選択肢 `(2)`
- 公式正答: `(2)`
- 判定: `1 / 1 PASS`
- 教材外知識補完: 0件
- Topic 03以降の知識使用: 0件

成果物QA:
- 解説PDF: A4縦2ページ。現行blobは200 dpi全ページ表示QA PASS版と一致
- 練習PDF: A4縦5ページ、12問、全問五肢択一・完全解説。現行blobは200 dpi全ページ表示QA PASS版と一致
- PowerPoint: 16:9、7枚。現行blobは全スライド表示QA・overflow検査 PASS版と一致

境界確認:
- Topic 03の抵抗率・温度係数・直並列接続の体系的説明を先取りしていない
- Topic 05のキルヒホッフ・重ね合わせ・テブナンを使っていない
- Topic 08の正弦波・実効値、Topic 10の力率を使っていない
- 25 kVを唯一絶対の最適値と断定していない
- 教材用の10 MW、25 kV / 5 kV、0.50 Ωは仮定値として扱い、未確認実車値を真値化していない
- 仕様追加なし

## Topic 01 完成証跡

source Markdown:
`topics/01_train_power_basics/01_train_power_basics.md`

解説PDF:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

練習PDF:
`topics/01_train_power_basics/01_train_power_basics_practice.pdf`

解説画像PowerPoint:
`topics/01_train_power_basics/01_train_power_basics_images.pptx`

最終QA:
`topics/01_train_power_basics/01_train_power_basics_final_qa.md`

## 次に行うこと

Topic 03 `架線はただの銅線ではない` の制作前EXAM_ALIGNMENTを行う。

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- `SPEC.md` のTopic 03固定範囲から仕様を追加しない
- 公式過去問を直近年度から調査し、三種は原則5問以上、該当問題が5問未満なら確認できた全件を対象とする
- 複数の電験解説資料で説明粒度を確認する
- 過去問要求事項から教材で必要な説明を固定してから本文制作へ進む
- 未確認の新幹線実車・架線値を真値化しない

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
