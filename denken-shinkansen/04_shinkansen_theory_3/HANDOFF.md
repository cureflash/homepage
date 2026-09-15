# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜07は最終QAまでPASSし、`completed`。

Topic 08 `新幹線の交流25kVとは何なのか` は最終QAを実施し、`NEEDS_REVISION / IN_PROGRESS`。過去問対応品質ゲート、必須成果物、既存表示QA、SPEC境界はPASSしている。未完了理由は主source・練習sourceの進捗記録が実在成果物より古いことだけである。

- 完成数: `7 / 14`
- last completed: `07 モーターはなぜ回る？`
- active topic: `08 新幹線の交流25kVとは何なのか`
- current status: `topic_08_final_qa_needs_revision`
- next start: 主source・練習sourceの進捗記録だけを実成果物へ同期する

## 今回進捗

Topic 08の最終QAを実施し、記録を `topics/08_ac_25kv_basics/08_ac_25kv_basics_final_qa.md` に追加した。

PASS:
- 固定公式過去問: `4問`（MASTER_SPEC / EXAM_ALIGNMENT_SPECの5問未満例外）
- 完成後独立再解答: `4 / 4 PASS`
- 独立解答列: `(5), (3), (5), (1)`
- 公式解答列: `(5), (3), (5), (1)`
- 練習問題: 15問、独立再計算・再判定 `15 / 15 PASS`、正答一意性 `15 / 15 PASS`
- 解説PDF: 200 dpi表示QA `2 / 2 PASS`、文字抽出QA PASS
- 練習PDF: 200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- PowerPoint: 既存進捗記録で表示QA `4 / 4 PASS`、overflow検査PASS、ZIP整合性PASS
- 教材外知識補完: `0問`
- RLC・リアクタンス・力率・三相・高調波等の後続Topic依存: `0問`
- 非正弦波論点への依存: `0問`
- 未確認新幹線実車値依存: `0問`

FAIL:
- 主source `08_ac_25kv_basics.md` の冒頭statusが `EXPLANATION_SOURCE_COMPLETE` のまま
- 主source §23が「解説PDF・練習・PowerPoint: 未着手」「完成後独立再解答: 未実施」「次工程: 解説PDF作成」のまま
- 練習source `08_ac_25kv_basics_practice.md` のstageが `PRACTICE_PDF_COMPLETE` のまま

教材本文、固定EXAM_ALIGNMENT、問題、解答、PDF/PPTX成果物の技術内容には修正理由なし。次工程は進捗メタデータだけを同期する。

## Topic 08 固定過去問

- 令和7年度上期 理論 問8: 正弦波電流の瞬時値から指定値へ最初に到達する時刻
- 令和6年度下期 理論 問8: 位相・最大値が異なる同一周波数正弦波電圧の合成
- 令和3年度 理論 問8: 波形から最大値・周波数・位相を読み、抵抗電流の瞬時値式を選択
- 平成21年度 理論 問9: 正弦波電流の瞬時値から指定値へ最初に到達する時刻

制作前独立検証: `4 / 4 PASS`
完成後独立再解答: `4 / 4 PASS`

令和7年度上期 問8と平成21年度 問9は同一内容の再出題。要求事項は重複カウントしない。

## Topic 08 本文・PDF収録範囲

- 直流と交流、正弦波
- `v=Vm sin(ωt+φ)`の各量・単位・使い方
- `T=1/f`、`ω=2πf`、`ωt=2πft`
- 最大値・実効値・1周期平均
- 位相・位相差、進み・遅れ
- 同一周波数正弦波の基本ベクトル合成
- 波形から最大値・周期・周波数・位相を読む手順
- 指定瞬時値へ最初に到達する時刻の選び方
- 純抵抗で電圧・電流が同相となる固定過去問対応知識
- 新幹線25kVを実効値として扱い、正弦波なら最大値`25√2 kV ≒ 35.4 kV`となること

3段階例題:
1. 基礎: 瞬時値式から最大値・実効値・周波数・周期を読む
2. 本試験標準: 指定瞬時値へ最初に到達する時刻
3. 複合: 位相の異なる同一周波数正弦波の合成と実効値

## Topic 08 練習問題構成

- Q1〜Q4: 基礎4問
- Q5〜Q12: 本試験標準8問
- Q13〜Q15: 複合・応用3問
- R7上 問8 / H21 問9の要求: Q6, Q13
- R6下 問8の要求: Q9, Q10, Q14, Q15
- R3 問8の要求: Q1, Q2, Q3, Q7, Q8, Q11, Q12
- 実効値・1周期平均・25kVの読み方: Q4, Q5, Q15

## Topic 08 PowerPoint構成

- 1枚目: 新幹線25kVは実効値、最大値`25√2 kV ≒ 35.4 kV`、瞬時値・1周期平均
- 2枚目: 波形から周期・周波数・角周波数・位相を読む手順、純抵抗の同相
- 3枚目: 同一周波数正弦波の基本ベクトル合成
- 4枚目: 指定瞬時値への最初の到達時刻と波形読取の本試験解法フロー、固定4問対応

## Topic 08 境界

- Topic 09のRLC、誘導性/容量性リアクタンス、インピーダンス、共振を追加しない
- Topic 10の有効・無効・皮相電力、力率を追加しない
- Topic 11の三相交流、Y・Δ、線間/相電圧を追加しない
- Topic 12以降の半導体・整流・PWM・高調波を追加しない
- 非正弦波の波形率・波高率、三角波・方形波比較を追加しない
- 新幹線の周波数切替・50/60Hz対応はTopic 09へ送る

## Topic 08 成果物

- source: `topics/08_ac_25kv_basics/08_ac_25kv_basics.md`
  - EXAM_ALIGNMENT: 完成
  - 解説本文＋3段階例題: 完成
  - 進捗記録: 要同期
- 解説PDF: `topics/08_ac_25kv_basics/08_ac_25kv_basics_explanation.pdf`
  - A4縦2ページ
  - 200 dpi表示QA `2 / 2 PASS`
  - 文字抽出QA `PASS`
- 解説PDF QA記録: `topics/08_ac_25kv_basics/08_ac_25kv_basics_explanation_qa.md`
- 練習source: `topics/08_ac_25kv_basics/08_ac_25kv_basics_practice.md`
  - 全15問・全問五肢択一
  - 独立再計算・再判定 `15 / 15 PASS`
  - 正答一意性 `15 / 15 PASS`
  - 進捗記録: 要同期
- 練習PDF: `topics/08_ac_25kv_basics/08_ac_25kv_basics_practice.pdf`
  - A4縦4ページ
  - 200 dpi表示QA `4 / 4 PASS`
  - 文字抽出QA `PASS`
- 練習PDF QA記録: `topics/08_ac_25kv_basics/08_ac_25kv_basics_practice_qa.md`
- 解説画像PowerPoint: `topics/08_ac_25kv_basics/08_ac_25kv_basics_images.pptx`
  - 16:9・4枚
  - 表示QA `4 / 4 PASS`
  - overflow検査 `PASS`
  - ZIP整合性 `PASS`
- 完成後独立再解答記録: `topics/08_ac_25kv_basics/08_ac_25kv_basics_exam_recheck.md`
  - 固定4問 `4 / 4 PASS`
- 最終QA記録: `topics/08_ac_25kv_basics/08_ac_25kv_basics_final_qa.md`
  - `NEEDS_REVISION / IN_PROGRESS`
  - 唯一のFAIL: source進捗記録整合性

## 次に行うこと

主source・練習sourceの進捗記録だけを、解説PDF・練習PDF・PowerPoint・完成後独立再解答まで完了している実態へ同期する。教材本文、固定EXAM_ALIGNMENT、数式、例題、問題、解答、PDF/PPTX内容は変更しない。

同期後、Topic 08の最終QAを再実施し、全品質ゲートPASSの場合のみ`completed`とする。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
