# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜11は最終QAまでPASSし、`completed`。Topic 12「300系はなぜVVVFになった？」は前回最終QAで指摘された主source・練習sourceの進捗記録不整合を修正し、実成果物へ同期済み。最終QA再実施待ち。

- 完成数: `11 / 14`
- last completed: `11 電力会社の三相交流をどう新幹線へ渡す？`
- active topic: `12 300系はなぜVVVFになった？`
- current status: `topic_12_source_progress_synced`
- next start: Topic 12の最終QAを再実施する

## 今回進捗

Topic 12の主source・練習sourceの進捗記録だけを実成果物へ同期した。

- `12_vvvf_semiconductor.md`: `status: INDEPENDENT_REANSWER_COMPLETE` へ更新
- `12_vvvf_semiconductor_practice.md`: `stage: INDEPENDENT_REANSWER_COMPLETE` へ更新
- 旧「解説PDF作成」「解説画像PowerPoint作成」の次工程記録を除去
- 固定対象: 公式理論過去問7問
- 完成後独立再解答: `7 / 7 PASS`
- 必須成果物・各表示QA・SPEC境界: 既存PASSを維持

技術本文、固定EXAM_ALIGNMENT、練習15問、正答、PDF/PPTX成果物、独立再解答結果は変更していない。次は最終QAを再実施し、進捗記録整合性を含めて再判定する。

## Topic 12 SPEC固定範囲

扱う内容:
- 半導体
- 導体・絶縁体との違い
- 真性半導体
- 不純物半導体
- p型 / n型
- キャリア
- pn接合
- 順方向 / 逆方向バイアス
- ダイオード
- 整流
- トランジスタの基本
- バイポーラトランジスタ
- FETの基本
- スイッチング素子

技術史の入口:

```text
ダイオード → 整流
サイリスタ → 電力制御
GTO → VVVF
IGBT → 高周波スイッチング
SiC → 低損失化
```

## 固定過去問

1. 令和7年度下期 理論 問11
2. 令和7年度上期 理論 問13
3. 令和6年度下期 理論 問11
4. 令和6年度上期 理論 問11
5. 令和4年度上期 理論 問11
6. 平成29年度 理論 問11
7. 平成28年度 理論 問11

制作前独立検証: `7 / 7 PASS`
完成後独立再解答: `7 / 7 PASS`

## 境界

- GTO・IGBT・SiCの詳細な損失、駆動方式、スイッチング周波数比較は機械編へ送る
- インバータ主回路、PWM、出力波形、高調波はTopic 13へ送る
- BJT/FETのバイアス設計、小信号等価回路、hパラメータ等は追加しない
- ホール効果・ホール素子を追加しない
- 光デバイスの詳細理論を追加しない
- 300系の主変換装置内部回路・保護回路・未確認実車値を推測しない
- 件数合わせのため系列SPEC外論点を追加しない

## 次に行うこと

Topic 12の最終QAを再実施する。

- 主source・練習sourceの進捗記録が実成果物と一致していることを確認する
- 固定7問の完成後独立再解答 `7 / 7 PASS` を確認する
- 必須成果物・PDF/PPTX QA・固定範囲境界を再確認する
- 全件PASSならTopic 12を `completed` とし、Topic 13へ進む

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
