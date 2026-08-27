# 宅建 Question Generation / Solve-All QA Spec

この文書は、90単元の教材データ生成後に実行する四肢択一問題生成と全件独立再解答の正本仕様である。

## 1. フェーズ境界

90単元の教材データが揃ったことと、問題生成が完了したことは同義ではない。既存unitの `questions: []` が空の間は `generation_complete: true` にしてはならない。

進行順は次のとおり。

1. 90単元の教材データ生成を完了する。
2. 各unitの `facts[]` を基礎に四肢択一問題を生成する。
3. 全unitの予定問題が生成され、全問が `pending_validation` になった時点で `question_generation_complete: true` と `generation_complete: true` を記録する。
4. 次runから問題ID順に1問目から全件独立再解答を開始する。
5. 全問の検証・必要修正が終わるまで新規問題生成へ戻らない。

## 2. 問題数の決め方

件数ノルマを先に固定して低品質問題を水増ししない。各unitの独立して問える主要 `fact` を最低1回は直接測定することをcoverage基準とする。

- 原則: 1 core factにつき最低1問。
- 同一factから複数問を作る場合は、単なる固有名詞・数字差し替えではなく、主体、時期、例外、適用条件、取引類型など別の誤答パターンを測る場合に限る。
- 1つの問題で複数factを安全に統合できる場合は統合してよい。
- 全90unitについてcore fact coverageが100%になった時点で予定問題生成完了とする。

## 3. 正本question schema

各問題は最低限次を持つ。

```text
id
unitId
unitOrder
factIds[]
examYear
lawAsOf
stem
choices[4]
proposedAnswerIndex
explanation
sourceIds[]
validationStatus
validationMeta
```

### 必須条件

- `id` は安定ID。形式は `takken-q-<unitOrder>-<serial>` を基本とする。
- `choices` は4件ちょうどで、同一文字列を含めない。
- `proposedAnswerIndex` は0〜3。
- 生成時は必ず `validationStatus: "pending_validation"`。
- `examYear: 2026`、`lawAsOf: "2026-04-01"`。
- `factIds` と `sourceIds` はunit正本に実在するIDだけを参照する。
- 未検証問題を公開・模試・本番poolへ入れない。

## 4. 四肢択一生成規則

正解は原則1つだけにする。誤答肢はランダムな嘘ではなく、宅建で起こりやすい混同から作る。

- 主体の入替え
- 期限・期間・割合・金額の入替え
- 原則と例外の逆転
- 許可 / 届出 / 免許 / 登録の混同
- 契約前 / 契約後の入替え
- 売買 / 賃貸、宅建業者 / 一般人の適用範囲混同
- 知事 / 国土交通大臣等の権限混同
- 長期 / 短期、課税 / 非課税、必要 / 不要の混同

生成時点で以下を機械確認する。

- ID重複なし
- stem完全重複なし
- choices内重複なし
- proposedAnswerIndex範囲内
- unit/fact/source参照整合
- 正答位置の極端な偏りなし
- normalized stem/choiceによる近似重複チェック

## 5. Solve-All Validation

検証では保存済みの `proposedAnswerIndex`、`explanation`、`sourceIds` を最初に見ない。

1. 問題文と4選択肢だけを読む。
2. 自力で正解候補と理由を確定する。
3. 必要な場合は2026-04-01基準の一次資料を独立して開く。
4. その後で保存済み正答・解説・根拠と比較する。
5. 各問題を個別に `verified` / `needs_revision` / `rejected` と判定する。

確認項目:

- 正解が本当に1つだけか。
- 別解、条件不足、文言解釈の揺れがないか。
- 法令、判例、制度、期限、金額、主体、例外が基準日時点で正しいか。
- 改正前情報が混ざっていないか。
- 誤答肢が別解にならないか。
- 解説が正答根拠を正確に説明しているか。
- intended factを実際に測れているか。
- 同一/近似問題が過剰でないか。

明確で最小の修正で直せる場合は問題・選択肢・正答・解説・根拠を一体で修正し、再度独立再解答して通った場合のみ `verified` にする。

## 6. Checkpoint

- 問題生成: unit順に連続して進め、品質優先。安全なunit境界で保存する。
- 全件検証: 問題ID順に25問を基本checkpointとし、1run最大100問程度。
- checked件数とverified件数は分けて記録する。
- 途中を飛ばさず `next_validation_question_id` をSTATUSへ保存する。

## 7. Completion

`generation_complete: true` 条件:

- 90unitの教材データ生成完了
- 全90unitでcore fact coverage 100%
- 予定した全四肢択一問題が保存済み
- 全問 `pending_validation`
- schema/duplicate/reference validation成功

`validation_complete: true` 条件:

- 問題1から最終問題まで全件を一度以上独立再解答済み
- pending_validation = 0
- needs_revisionの必要修正が完了
- rejectedは本番poolから隔離済み
- verified問題のみが公開可能状態
