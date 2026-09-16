# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜09は最終QAまでPASSし、`completed`。

Topic 10 `新幹線が使う電力は「W」だけではない` は、前回最終QAで指摘された主source・練習sourceの進捗記録不整合を解消した。最終QA再実施前のため `IN_PROGRESS` を維持する。

- 完成数: `9 / 14`
- last completed: `09 北陸新幹線は50Hzと60Hzをどう走る？`
- active topic: `10 新幹線が使う電力は「W」だけではない`
- current status: `topic_10_source_progress_synced / IN_PROGRESS`
- next start: Topic 10の最終QAを再実施する

## 今回進捗

Topic 10の主source・練習sourceの進捗記録を実成果物へ同期した。

- 主source `status`: `EXPLANATION_SOURCE_COMPLETE` → `INDEPENDENT_REANSWER_COMPLETE`
- 練習source `stage`: `PRACTICE_PDF_COMPLETE` → `INDEPENDENT_REANSWER_COMPLETE`
- 主sourceの旧「次は解説PDF作成」を除去
- 練習sourceの旧「次はPowerPoint作成」を除去
- 固定対象: 公式理論過去問5問・6答案要素
- 完成後独立再解答: `5 / 5問・6 / 6答案要素 PASS`
- 教材外知識補完: `0問`
- Topic 11以降の三相・半導体・高調波依存: `0問`
- 未確認新幹線実車力率・無効電力・補償方式依存: `0問`
- 技術本文・固定EXAM_ALIGNMENT・練習15問・正答・PDF/PPTX成果物: 変更なし

## Topic 10 SPEC固定範囲

扱う内容:
- 有効電力
- 無効電力
- 皮相電力
- 力率
- 位相差
- 複素電力の基本
- 力率改善
- コンデンサによる力率改善の基本

固定公式:

```text
P = VI cosφ
Q = VI sinφ
S = VI
S² = P² + Q²
cosφ = P / S
```

## Topic 10 固定過去問

1. 令和7年度上期 理論 問9
   - 誘導性負荷の力率、電流の同相・直交成分、並列抵抗追加後のベクトル合成
2. 令和5年度上期 理論 問9
   - `R-XL`直列回路のインピーダンス比と力率
3. 平成26年度 理論 問15(a)(b)
   - `S=VI`、`S²=P²+Q²`、有効・無効・皮相電力、無効電力からリアクタンス
4. 平成24年度 理論 問8
   - 電圧・電流・無効電力から有効電力と抵抗値へ接続
5. 平成22年度 理論 問8
   - 力率改善前後の位相角、容量性リアクタンスによる補償

制作前独立検証: `5 / 5問・6 / 6答案要素 PASS`
完成後独立再解答: `5 / 5問・6 / 6答案要素 PASS`

## 教材で必須となる説明

- `P[W]`、`Q[var]`、`S[VA]`の物理的意味と単位
- 位相差`φ`と力率`cosφ`、進み・遅れ
- `P=VIcosφ`、`Q=VIsinφ`、`S=VI`
- `S²=P²+Q²`と電力三角形
- `cosφ=P/S`と逆算
- 複素電力の基本
- 同じ有効電力でも力率が低いほど皮相電力・電流が大きくなること
- 電流の同相成分・直交成分とフェーザ合成
- コンデンサによる力率改善の基本原理
- `R-XL`回路の`cosφ=R/|Z|`と既習インピーダンスの接続
- 新幹線側は交流設備容量と力率の一般原理までとし、未確認実車値を真値化しない

## 境界

- Topic 11の三相交流、Y・Δ、線間/相電圧、三相電力公式を追加しない
- Topic 12以降の半導体・整流・インバータ・PWMを追加しない
- Topic 13側の高調波・ひずみ波電力を追加しない
- 電力科目・法規の三相配電設備・調相設備詳細を品質ゲートへ混在させない
- 未確認の新幹線実車力率、無効電力、補償装置仕様を推測しない

## Topic 10 成果物

- source: `topics/10_power_factor/10_power_factor.md`
  - EXAM_ALIGNMENT: 完成
  - 制作前独立検証: `5 / 5問・6 / 6答案要素 PASS`
  - 解説本文＋3段階例題: 完成
  - 固定過去問要求マッピング: `6 / 6`
  - 進捗記録: `INDEPENDENT_REANSWER_COMPLETE` へ同期済み
- 解説PDF: 完成
  - `topics/10_power_factor/10_power_factor_explanation.pdf`
  - QA: `topics/10_power_factor/10_power_factor_explanation_qa.md`
  - A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習source・練習PDF: 完成
  - source: `topics/10_power_factor/10_power_factor_practice.md`
  - PDF: `topics/10_power_factor/10_power_factor_practice.pdf`
  - QA: `topics/10_power_factor/10_power_factor_practice_qa.md`
  - 全15問・全問五肢択一、独立再計算 `15 / 15 PASS`、正答一意性 `15 / 15 PASS`
  - A4縦3ページ、200 dpi表示 `3 / 3 PASS`、文字抽出PASS
  - 固定5過去問・6答案要素への接続: `6 / 6`
  - 進捗記録: `INDEPENDENT_REANSWER_COMPLETE` へ同期済み
- 解説画像PowerPoint: 完成
  - `topics/10_power_factor/10_power_factor_images.pptx`
  - QA: `topics/10_power_factor/10_power_factor_images_qa.md`
  - 16:9・4枚、固定5過去問・6答案要素 `6 / 6`
  - 200 dpi表示 `4 / 4 PASS`、overflow `0件`、ZIP/XML整合性PASS
- 完成後独立再解答: 完成
  - `topics/10_power_factor/10_power_factor_exam_recheck.md`
  - `5 / 5問・6 / 6答案要素 PASS`
  - 教材外補完・後続Topic依存・未確認実車値依存: 0件
- 最終QA: 前回 `NEEDS_REVISION`
  - `topics/10_power_factor/10_power_factor_final_qa.md`
  - 技術内容・過去問対応・成果物・表示QA・SPEC境界はPASS
  - 指摘された進捗記録不整合は今回解消済み。再判定待ち

## 次に行うこと

Topic 10の最終QAを再実施する。主source・練習sourceの進捗記録同期済みを確認し、技術内容・過去問対応・成果物・表示QA・SPEC境界を再判定する。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない