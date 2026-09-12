# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` は最終QAまでPASSし、`completed`。

完成数: `1 / 14`

active topic: `02 なぜ新幹線は25,000Vなのか`

Topic 02は制作前EXAM_ALIGNMENTまで完了。解説本文以降は未着手。

## Topic 02 source

`topics/02_why_25kv/02_why_25kv.md`

## Topic 02 EXAM_ALIGNMENT結果

直近の公式理論問題から6候補を確認し、SPEC境界で再判定した。

- ゲート対象: 令和7年度下期 理論 問6
- ゲート対象外: 令和8年度上期 問5、令和7年度下期 問5、令和7年度上期 問5・問6・問7
- 対象外理由: 直並列回路、並列電源、回路網、RLC等の後続Topic知識が必要
- `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の5問未満例外を適用
- 公式正答番号・数値解はsourceへ転記していない。完成後に教材だけで独立再解答してから照合する

教材で必要な説明はsourceへ固定済み。中心は `V=RI`、`P=VI`、`Ploss=I²R`、`Q=I²Rt`、`I=P/V`、単純な電圧降下、同一電力時の高電圧化による抵抗損低減、送電効率の基本。

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

Topic 02の解説本文と3段階例題（基礎・本試験標準・複合/ひっかけ）を作成する。

この段階では次を守る。

- Topic 03の抵抗率・温度係数・直並列接続の体系的説明を先取りしない
- Topic 05のキルヒホッフ、重ね合わせ、テブナンを使わない
- Topic 08の正弦波・実効値、Topic 10の力率を使わない
- 25 kVを唯一絶対の最適値とは説明しない
- 実車値は一次資料確認なしに真値化しない
- 完成後独立再解答は、教材完成前には実施しない

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する。
- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする。
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない。
