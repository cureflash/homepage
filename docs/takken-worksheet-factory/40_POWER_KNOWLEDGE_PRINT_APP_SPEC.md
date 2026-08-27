# Power宅建 — Knowledge / Print / App 一体化仕様

この仕様は、現行の Phase 2「90単元 core fact 四肢択一化」と Phase 3「全問独立再解答・QA」を**最後まで完了した後にのみ**開始する後続フェーズを定義する。

現行フェーズを途中で作り替えたり、既存問題を未完了のまま新方式へ移行したりしてはならない。

## 1. 目的

Power宅建の学習体験を、次の一つの知識グラフで統合する。

1. 解説プリントで学習する
2. 穴埋めプリントで想起する
3. アプリで四肢択一を反復する
4. 間違えた問題の詳細解説を読む
5. 弱点 knowledge item を再出題する

紙教材とアプリ問題を別々に作らず、同じ canonical knowledge item を正本として派生させる。

## 2. 開始ゲート

このフェーズは以下をすべて満たすまで開始禁止。

- 90単元すべての core fact question generation が完了している
- `question_generation_complete: true`
- 現行問題を1問目から最後まで独立再解答済み
- `pending_validation == 0`
- `needs_revision` / `rejected` の必要処理が閉じている
- `validation_complete: true`

上記完了前は、重要論点50問化、knowledge item抽出、プリント再編を先行しない。

## 3. 重要論点の単位

単なる単語ではなく、宅建試験で独立して学習・反復する価値がある `exam_concept` を単位とする。

例:
- 専任媒介契約
- 専属専任媒介契約
- 35条書面
- 37条書面
- クーリング・オフ
- 抵当権
- 取消しと第三者
- 農地法3条
- 農地法4条・5条

`5年間`、`30日以内`、`国土交通大臣` のような断片語だけを独立50問化しない。これらは exam_concept 配下の knowledge item として管理する。

初期推定は約250〜300 exam_concept。実数は90単元・既存問題・公式過去問傾向を照合して確定する。

## 4. Canonical knowledge item

各 exam_concept は複数の `knowledge_items` を持つ。

各 knowledge item の最低フィールド:

- `knowledge_id`
- `concept_id`
- `claim`
- `conditions`
- `exceptions`
- `exam_year`
- `law_as_of`
- `primary_sources[]`
- `importance`
- `factcheck_status`

期間、数字、主体、原則、例外、比較対象は可能な限り独立 knowledge item に分解する。

## 5. 50問ドリル

原則として各 exam_concept につき50問を用意する。

ただし、同一テンプレートの数字・固有名詞差し替えによる水増しは禁止する。一部内容の重複は学習上許容し、重要 knowledge item は複数問題で反復してよい。

50問の目安構成:

- 直接知識・基本判定: 10
- 誤文判定・原則例外: 10
- 事例問題: 10
- 類似制度比較: 10
- 個数・組合せ・横断・応用: 10

各問題は最低限次を持つ。

- `question_id`
- `concept_id`
- `knowledge_refs[]`
- 問題文
- 4つの相異なる選択肢
- 正答
- `detailed_explanation`
- 各誤答肢が誤りである理由
- primary source refs
- generation / validation status

## 6. 一対一対応の定義

「プリントの1文 = 問題1問」とはしない。

代わりに次の双方向100% coverageを必須とする。

1. **Question -> Print coverage**
   - verified問題を解くために必要な全 knowledge item が、そのconceptの解説プリントに存在する。
   - プリントにない新知識を問題だけで要求しない。

2. **Print -> Question coverage**
   - 解説プリントに掲載する試験知識 knowledge item は、最低1問以上のverified問題から参照される。
   - 問題で一度も使わない試験知識を解説プリントへ勝手に追加しない。

重要知識について、1 knowledge item を複数問題が参照することは推奨する。

## 7. 問題解説を先に完成させる

新方式では、問題生成後すぐに解説プリントを直接書かない。

順序は以下。

1. exam_conceptを確定
2. knowledge_itemsを一次資料で確定
3. 50問を生成
4. 全50問を独立QA
5. 各問題の `detailed_explanation` と `knowledge_refs` を確定
6. verified 50問が参照する knowledge item を集約
7. 重複を整理して解説プリントを生成
8. 双方向coverage validatorを通す
9. worksheet / answer を同じ knowledge item から生成
10. 公開可能状態へ移す

## 8. 解説プリント

解説プリントは、verified問題の解説と knowledge item を材料として生成する。

同じ内容の重複説明はプリント生成時に統合してよい。ただし、問題側で必要な条件・例外を削ってはいけない。

推奨構造:

- この論点で覚えること
- 原則
- 例外
- 数字・期限
- 主体
- 比較表
- 時系列 / 手続フロー
- ひっかけポイント
- 50問で実際に問われる knowledge item 一覧

## 9. アプリ連携

アプリでは concept / knowledge item 単位で正答率を記録できるようにする。

間違えた問題から `knowledge_refs` を逆引きし、同じ knowledge item を参照する別問題を優先再出題できるようにする。

将来的な画面例:

- プリントを読む
- 50問トレーニング
- 間違いだけ解き直す
- 弱点知識だけ復習
- 解説を見る

## 10. QAと公開

未検証問題からプリントを公開しない。

- `pending_validation` 問題はproduction drillへ入れない
- `needs_revision` / `rejected` をプリント根拠に使わない
- 解説プリントは verified question / verified knowledge item のみから生成する
- 法令基準日は現行正本どおり2026-04-01
- 法改正時は knowledge item -> question -> explanation -> print の依存範囲を追跡可能にする

## 11. 移行方針

Phase 3完了後、現行のcore coverage問題は捨てない。

既存verified問題を新しい exam_concept / knowledge item にマッピングし、50問ドリルの一部として再利用する。足りない問題だけ追加生成する。

したがって後続フェーズは「ゼロから15,000問作り直す」のではなく、既存資産を正規化して拡張する。
