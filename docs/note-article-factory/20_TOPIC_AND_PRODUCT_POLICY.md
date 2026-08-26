# note記事生成 — TOPIC / PRODUCT POLICY

Updated: 2026-08-27

## 1. 基本ポジション

主軸は「AI活用の解説」ではなく、実際にAIを作業員として使った運用実録。

強い素材:

- AI workerの引き継ぎ
- STATUS.json / HANDOFF.md
- scheduler / GitHub正本運用
- 並列workerとGit競合
- CI失敗と復旧
- VM / runner / SSH停止
- TOEIC問題大量生成と独立QA
- GENERATEとFACTCHECKの分離
- 教材工場
- 動画生成pipeline
- アプリ開発のarchitecture migration
- AI自身による定期監査

## 2. 記事シリーズの優先順

固定順ではない。直近の出来事が強ければ入れ替える。

候補:

1. 自動化で楽になるはずがVM管理者になった話
2. AIが前回を忘れても続けられるSTATUS/HANDOFF運用
3. TOEIC大量生成で分かった「生成より検証が重い」問題
4. 100問生成＋100問独立検証を同じworkerで回す設計
5. 教材を作るのではなく教材工場を作った話
6. AI workerを並列化したらGitで衝突した話
7. CI greenでも構造が壊れるので17時監査を入れる話
8. GitHubの手順書を時間割としてschedulerに読ませる設計
9. ゆっくり動画生成でYMM4の実環境検証が最後に残る話
10. アプリ移行でtemporary compatibilityを消していく話

## 3. タイトル方針

タイトルは記事の主読者に合わせる。

一般層:
- 生活上の矛盾
- 面倒が増えた失敗
- 具体的な変化

技術層:
- STATUS.json / HANDOFF.md / CI / Git / worker等の具体語
- 数字・phase・件数

教材制作者:
- 100問 / 400問 / 1200問等の数量
- 重複0、QA、verifiedなど品質指標

避ける:

- 「完全ガイド」
- 「徹底解説」
- 「知らないと損」
- 「衝撃」
- 「神ツール」
- 「誰でも簡単」
- 「たった○分で」※実測がある場合を除く
- 誇張した金額・収益フック

## 4. 無料記事

無料記事では失敗・発見・改善内容まで隠さない。

役割:

- 読者に著者の一次情報を知ってもらう
- 信頼を作る
- 有料商品の考え方を理解してもらう

無料記事向き:

- VM失敗談
- Git競合事故
- 自動化したのに仕事が増えた話
- 生成よりQAが重かった話
- 仕組み化の考え方

## 5. 有料候補

有料価値は「秘密」ではなく完成品。

候補:

- STATUS.json template
- HANDOFF.md template
- MASTER_INSTRUCTIONS
- worker prompt
- recovery checklist
- QA checklist
- duplicate validation scripts
- 実装済みの運用ファイル一式

初期価格目安は過去調査を踏襲し、1,480〜1,980円級の単品実用記事を中心にする。3〜5本そろった後にマガジン化を検討する。

価格は自動workerが勝手に確定しない。記事本文では候補判定までに留める。

## 6. 重複防止

STATUS.jsonのtopic_keyを確認する。

同じ中心命題の記事を14日以内に再生成しない。

同じ出来事でも、読者・証拠・結論が明確に違う場合のみ別記事候補にできる。

例:

- 一般層向け「ChatGPTに毎回説明するのをやめた」
- 技術層向け「STATUS.json / HANDOFF.md schema設計」

は別記事になり得る。

## 7. 記事化しないもの

- 個人情報や機密
- 未公開の認証情報
- private repoの内容をそのまま公開する必要がある話
- 他人のメール本文
- 著作権上問題のある長い転載
- 確認していない噂
- 健康、政治、法律などを実体験のネタとして不用意に扱う高リスク記事

## 8. 送信後

Gmail送信後にSTATUS.jsonを更新し、次回workerが同じ話を再生成しないようにする。
