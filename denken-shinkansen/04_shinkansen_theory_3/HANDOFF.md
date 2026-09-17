# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜12は最終QAまでPASSし、`completed`。次はTopic 13「インバータはどうやって三相交流を作る？」の制作前EXAM_ALIGNMENT。

- 完成数: `12 / 14`
- last completed: `12 300系はなぜVVVFになった？`
- active topic: `13 インバータはどうやって三相交流を作る？`
- current status: `topic_12_completed`
- next start: Topic 13の制作前EXAM_ALIGNMENTを実施する

## 今回進捗

Topic 12の最終QAを再実施し、`PASS / completed` とした。

- 前回唯一FAILだった主source・練習sourceの進捗記録不整合: 解消
- 固定対象: 公式理論過去問7問
- 制作前独立検証: `7 / 7 PASS`
- 完成後独立再解答: `7 / 7 PASS`
- 公式解答一致: `7 / 7`
- 教材外補完: `0件`
- 解説PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- PowerPoint: 16:9・4枚、表示 `4 / 4 PASS`、overflow 0件、ZIP/XML整合性PASS
- SPEC固定範囲外追加: `0件`
- 進捗記録整合性: PASS
- `12_vvvf_semiconductor.md`: `status: COMPLETED`
- `12_vvvf_semiconductor_practice.md`: `stage: COMPLETED`

技術本文、固定EXAM_ALIGNMENT、練習15問、正答、PDF/PPTX、独立再解答結果は変更していない。

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

Topic 13「インバータはどうやって三相交流を作る？」の制作前EXAM_ALIGNMENTを実施する。

- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`を再確認する
- Topic 13固定範囲に直接対応する公式「理論」過去問を直近年度優先で確認する
- 固定範囲だけで解ける問題を品質ゲート対象として確定する
- 制作前独立検証を行い、系列SPEC外論点を件数合わせで追加しない

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
