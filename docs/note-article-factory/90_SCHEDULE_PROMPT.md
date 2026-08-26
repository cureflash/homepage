# 朝5時 note記事worker — schedule prompt

このファイルは、将来scheduled taskへそのまま登録するための正本promptである。

---

毎朝、note向けの記事草稿を1本作成し、本人のGmailへ送信する。noteへの自動投稿は行わない。

最初にGitHub repository `cureflash/homepage` の最新 `main` を取得し、以下を完全に読む。

- `docs/note-article-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/note-article-factory/10_STYLE_AND_AI_SMELL_SPEC.md`
- `docs/note-article-factory/20_TOPIC_AND_PRODUCT_POLICY.md`
- `docs/note-article-factory/STATUS.json`

次に、利用可能な最近のチャット履歴・personal context・現在のscheduled task実行状況を確認し、直近24〜72時間で実際に進んだ作業、失敗、想定外、数字、設計変更、復旧、品質検証を抽出する。記事候補に関係するGitHub repositoryがある場合は、必ず最新mainのSTATUS / HANDOFF / EXECUTION_PLAN / commits / PR / CI状態等を確認し、古い会話上の数字を事実として使わない。

その日の記事テーマを1つだけ選ぶ。一般的なAI活用Tipsより、本人しか持っていない一次情報を優先する。同じ中心テーマを短期間に繰り返さないよう `STATUS.json` の recent_topic_keys を確認する。

主読者を次から1つ選ぶ。

- AIを使う会社員・副業層
- AIヘビーユーザー・個人開発者
- 教材・コンテンツ制作者

`00_MASTER_INSTRUCTIONS.md` の方針に従って、推奨タイトル1本、代替タイトル2本、本文全文、候補タグ5〜8個、無料記事か将来の有料候補かの判定を作る。

本文は実録を背骨にし、数字を証拠として使い、難しい技術は普通の言葉へ翻訳する。成功者を演じない。実際の失敗・制約・未完了も必要なら書く。架空の体験、会話、感情、収益、PV、時間削減、利用者反応を作らない。

初稿後に `10_STYLE_AND_AI_SMELL_SPEC.md` の全セルフ監査項目を1つずつ内部確認する。AI臭さが残っている箇所は、類義語置換ではなく段落・論理・具体性から書き直す。特に、空虚な予告・総括、根拠のない強調、AではなくB型の決め台詞、自問自答、接続詞の連打、均一な文長・段落長、箇条書き病、教科書型見出し、過度に前向きな結論、同じ主張の言い換え反復、一般論による水増しを残さない。

完成後、接続済みGmailで本人のメールアドレスを正規に解決して本人宛てに送信する。アドレスを推測しない。

件名:
`[note草稿] <推奨タイトル>`

本文には次の順で入れる。

1. 今日このテーマを選んだ理由（2〜4文）
2. 想定読者
3. 推奨タイトル
4. 代替タイトル2本
5. note本文全文
6. 候補タグ
7. 無料記事 / 将来の有料候補判定

送信に成功した後だけ `docs/note-article-factory/STATUS.json` を更新し、date、topic_key、title、target_reader、source_projects、article_type、sent_status を記録する。GitHub mainが並行更新されていた場合はreconcileし、他workerの変更を巻き戻さない。

メール送信に失敗した場合はsent_statusを成功扱いにせず、記事内容と失敗理由を報告する。

noteへのログイン、下書き作成、公開、価格設定は行わない。
