# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜10は最終QAまでPASSし、`completed`。

- 完成数: `10 / 14`
- last completed: `10 新幹線が使う電力は「W」だけではない`
- active topic: `11 電力会社の三相交流をどう新幹線へ渡す？`
- current status: `topic_10_final_qa_passed / completed`
- next start: Topic 11の制作前EXAM_ALIGNMENTを実施する

## 今回進捗

Topic 10の最終QAを再実施し、`PASS / completed` とした。

- 固定対象: 公式理論過去問5問・6答案要素
- 完成後独立再解答: `5 / 5問・6 / 6答案要素 PASS`
- 教材外知識補完: `0問`
- Topic 11以降の三相・半導体・高調波依存: `0問`
- 未確認新幹線実車力率・無効電力・補償方式依存: `0問`
- 固定過去問要求の本文マッピング: `6 / 6`
- 練習問題: `15 / 15 PASS`、正答一意性 `15 / 15 PASS`
- 解説PDF: 200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習PDF: 200 dpi表示 `3 / 3 PASS`、文字抽出PASS
- PowerPoint: 表示 `4 / 4 PASS`、overflow 0件、ZIP/XML整合性PASS
- SPEC固定範囲外追加: `0件`
- 前回FAILだった主source・練習sourceの進捗記録不整合: 解消済み
- 最終QA判定に合わせ、主source `status` と練習source `stage` を `COMPLETED` へ同期
- 技術本文・固定EXAM_ALIGNMENT・練習15問・正答・PDF/PPTX内容: 変更なし

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
最終QA: `PASS / completed`

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

- Topic 11の三相交流、Y・Δ、線間/相電圧、三相電力公式をTopic 10へ追加しない
- Topic 12以降の半導体・整流・インバータ・PWMをTopic 10へ追加しない
- Topic 13側の高調波・ひずみ波電力をTopic 10へ追加しない
- 電力科目・法規の三相配電設備・調相設備詳細をTopic 10の品質ゲートへ混在させない
- 未確認の新幹線実車力率、無効電力、補償装置仕様を推測しない

## Topic 10 成果物

- source: `topics/10_power_factor/10_power_factor.md`
  - EXAM_ALIGNMENT: 完成
  - 制作前独立検証: `5 / 5問・6 / 6答案要素 PASS`
  - 解説本文＋3段階例題: 完成
  - 固定過去問要求マッピング: `6 / 6`
  - 進捗記録: `COMPLETED`
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
  - 進捗記録: `COMPLETED`
- 解説画像PowerPoint: 完成
  - `topics/10_power_factor/10_power_factor_images.pptx`
  - QA: `topics/10_power_factor/10_power_factor_images_qa.md`
  - 16:9・4枚、固定5過去問・6答案要素 `6 / 6`
  - 200 dpi表示 `4 / 4 PASS`、overflow `0件`、ZIP/XML整合性PASS
- 完成後独立再解答: 完成
  - `topics/10_power_factor/10_power_factor_exam_recheck.md`
  - `5 / 5問・6 / 6答案要素 PASS`
  - 教材外補完・後続Topic依存・未確認実車値依存: 0件
- 最終QA: `PASS / completed`
  - `topics/10_power_factor/10_power_factor_final_qa.md`

## 次に行うこと

Topic 11「電力会社の三相交流をどう新幹線へ渡す？」の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`の固定範囲に従い、公式過去問から品質ゲート対象を確定する。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
