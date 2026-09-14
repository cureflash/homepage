# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない`、Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？`、Topic 05 `パンタグラフから入った電気はどこへ行く？` は最終QAまでPASSし、`completed`。

Topic 06 `0系の変圧器は何をしていた？` は最終QAを実施したが、主sourceの進捗記録不整合により `NEEDS_REVISION`。過去問対応品質ゲート自体は固定5問 `5 / 5 PASS`。

- 完成数: `5 / 14`
- last completed: `05 パンタグラフから入った電気はどこへ行く？`
- active topic: `06 0系の変圧器は何をしていた？`
- current status: `topic_06_final_qa_needs_revision`
- Topic 06 source: `topics/06_transformer_magnetics/06_transformer_magnetics.md`
- Topic 06 explanation PDF: `topics/06_transformer_magnetics/06_transformer_magnetics_explanation.pdf`
- Topic 06 practice source: `topics/06_transformer_magnetics/06_transformer_magnetics_practice.md`
- Topic 06 practice PDF: `topics/06_transformer_magnetics/06_transformer_magnetics_practice.pdf`
- Topic 06 PowerPoint: `topics/06_transformer_magnetics/06_transformer_magnetics_images.pptx`
- Topic 06 independent reanswer: `topics/06_transformer_magnetics/06_transformer_magnetics_exam_recheck.md`
- Topic 06 final QA: `topics/06_transformer_magnetics/06_transformer_magnetics_final_qa.md`

## 今回進捗

Topic 06の最終QAを実施した。

PASS項目:
- 必須成果物の実在
- 固定EXAM_ALIGNMENT 5問と教材マッピング
- 完成後独立再解答 `5 / 5 PASS`
- 教材外知識補完 `0問`
- 後続Topic知識への依存 `0問`
- 未確認0系実車値への依存 `0問`
- Topic 06固定範囲と境界

FAIL項目:
- `06_transformer_magnetics.md` の進捗記録整合性

主sourceは現在も、
- `status: EXPLANATION_SOURCE_COMPLETE`
- 「完成後独立再解答は未実施」
- `完成後独立再解答: 未実施`
- `最終QA: 未実施`
- 次工程「解説PDFを作成する」

となっている。一方GitHub正本には解説PDF、練習PDF、PowerPoint、独立再解答 `5 / 5 PASS` が存在する。

したがって最終判定は `NEEDS_REVISION / in_progress`。完成数は増やさない。

## Topic 06 固定範囲

- 電流と磁界
- アンペアの法則の基本
- 磁束
- 磁束密度
- 透磁率
- 起磁力
- 磁気抵抗
- 磁気回路
- 電磁誘導
- ファラデーの法則
- レンツの法則
- 自己誘導
- 相互誘導
- インダクタンス
- 磁気エネルギー

必須関係式・判断:

```text
Φ = BA
B = μH
Fm = NI
Rm = l / (μA)
Φ = Fm / Rm = NI / Rm
Ψ = NΦ
L = Ψ / I = NΦ / I
W = 1/2 LI²
M = k√(L1L2)
Lseries = L1 + L2 ± 2M
e = -N dΦ/dt
V1 / V2 = N1 / N2
```

## Topic 06 境界確認

- Topic 07の電磁力、導体に働く力、運動導体の誘導起電力、モータの回転原理を完成ゲートへ混在させない。
- Topic 08・09の正弦波、実効値、RLC、リアクタンス、インピーダンス、交流位相を追加しない。
- Topic 10・11の力率、無効電力、三相交流、Y・Δを追加しない。
- Topic 12・13の半導体、スイッチング、PWMを追加しない。
- 変圧器の損失・効率・電圧変動率・詳細等価回路を必須範囲へ広げない。
- 0系主変圧器の未確認実車値・内部巻線・結線・保護回路を推測しない。

## 次に行うこと

Topic 06主source `06_transformer_magnetics.md` の進捗記録だけをGitHub正本の現在地へ同期する。

変更対象:
- 冒頭 `status`
- 完了判定説明
- 完成後独立再解答の状態
- 最終QAの状態
- `次工程`

変更しないもの:
- 教材本文
- 固定EXAM_ALIGNMENT 5問
- 数式
- 3段階例題
- SPEC固定範囲・境界

同期後に最終QAを再実施し、PASSするまで `completed` としない。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
