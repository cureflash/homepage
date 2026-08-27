# Power古典 CONTENT/QA 正本

## 目的
Power TOEIC の共通 Drill Engine / QA思想を再利用し、高校生向け古文・漢文の問題DBだけを構築する。古典専用エンジンを fork / 再実装しない。

## 正本
- taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- pending questions: `subjects/japanese/power-classics/data/questions/**/pending/*.json`
- QA records: `subjects/japanese/power-classics/data/questions/qa/*.qa.json`
- schema: `docs/power-classics/30_QUESTION_AND_QA_SPEC.md`
- status: `docs/power-classics/CONTENT_STATUS.json`
- handoff: `docs/power-classics/CONTENT_HANDOFF.md`

## 階層
`subject -> category -> subcategory -> micro_skill -> question`

各問題は primary micro-skill を必ず1つだけ持つ。大分類・小分類・任意範囲・古文総合・漢文総合・古典総合は taxonomy tag/filter で再結合する。

## 生成
Phase A は taxonomy 上から未充足 skill を横に埋める。有限暗記技能は 30-100 問、文脈判定・識別・読解は原則100問。1 run 最大100問。25問ごとに安全checkpoint可。

生成問題は `pending_validation` で保存する。問題生成時の提案正答は production approved ではない。

## QA
古い `pending_validation` から最大100問を取得し、`proposed_answer_index` と `explanation` を先に見ず、stem + choices だけで独立再解答する。判定は `verified / needs_revision / rejected`。

古文では活用・助動詞接続・古語法・敬語方向・主語・文脈の一意性を検査する。漢文では返り点・訓読・書き下し・句法・送り仮名・解釈の一意性を検査する。曖昧な問題を verified にしない。

## 必須機械検査
- ID一意
- choices は4つ・可視文字列が相異
- answer index 0..3
- taxonomy ID存在
- explanation存在
- template/generator version存在
- QA status明示
- stem完全重複検査
- 可能な範囲で近似重複検査
- 正解位置分布の極端な偏りを避ける

## 並行worker
毎回最新 main / open work を確認し、すでに同じskillが生成済みなら重複生成せず reconcile する。GitHub 反映は非force。CONTENT_STATUS と CONTENT_HANDOFF を必ず更新する。
