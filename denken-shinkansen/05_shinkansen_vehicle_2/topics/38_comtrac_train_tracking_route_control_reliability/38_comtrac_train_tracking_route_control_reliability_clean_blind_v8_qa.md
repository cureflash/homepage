# Topic 38 clean blind v8 QA

更新日: 2026-09-21

対象: Topic 38「COMTRAC 列車追跡・進路制御・高信頼化」

candidate正本: `38_comtrac_train_tracking_route_control_reliability_clean_blind_v8_candidate.md`
candidate固定commit: `a99a6acf46e02cd9b06bd35320f31b7a6ab29668`

## freshness

判定: `PASS`

candidate固定前に参照したのは、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、question-only intake、公式「問題」PDFだけ。mandatory記録はv7後に非answer-bearing化済みで、保存済み正答・公式標準解答・Topic 38教材本文・prior clean-blind candidate/QAはcandidate commit後に初めて確認した。

candidate固定後修正: `0件`

## 公式標準解答照合

| 固定過去問 | v8 candidate | 公式標準解答 | 判定 |
|---|---|---|---|
| R8一次「機械」問8 | ヌ / ル / リ / ロ / ニ | ヌ / ル / リ / ロ / ニ | 5/5 PASS |
| R2一次「機械」問8 | ヌ / ハ / カ / チ / ロ | ヌ / ハ / ヲ / チ / ロ | 4/5 FAIL |
| H29一次「機械」問8 | リ / ヨ / ニ / ヲ / ヘ | リ / ヨ / ニ / ヲ / ヘ | 5/5 PASS |
| H26一次「機械」問3 | ヌ / ト / チ / ハ / リ | ヌ / ワ / チ / ハ / リ | 4/5 FAIL |
| H23一次「機械」問8 | ヨ / ホ / ヌ / ロ / ル | ヨ / ホ / ヌ / ロ / ヘ | 4/5 FAIL |

合計: `22 / 25 FAIL`

公式解答:
- R8: https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf
- R2: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf
- H29: https://www.shiken.or.jp/chief/upload/20170902_ch_second_a01.pdf
- H26: https://www.shiken.or.jp/chief/upload/20140906_ch_second_a01.pdf
- H23: https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf

## 不一致診断

### R2一次「機械」問8(3)

- candidate: `カ / 中断`
- 公式: `ヲ / 割込み`
- 原因: 問題文は「外部や内部の何により状態変化のタイミングを得るか」という発生契機を問う。candidateは割込みによって通常処理が中断される結果側を選択した。
- 教材不足: `NO`。解説source §2は割込みを「イベント発生に応じて通常処理から所定処理へ制御を移す仕組み」と定義し、§14も「高優先度割込み発生時に通常処理を一時中断」と両者を区別している。

### H26一次「機械」問3(2)

- candidate: `ト / 浮動充電方式`
- 公式: `ワ / 直流スイッチ方式`
- 原因: 問題文の「蓄電池を整流器とは別の充電器で充電し、サイリスタを用いて蓄電池をCVCF装置と接続する」構成名を、充電状態の一般語へ取り違えた。
- 教材不足: `NO`。解説source §10は「直流側の電源・蓄電池経路を切り替える方式では直流スイッチの役割を区別する」と明記し、固定過去問接続でもH26(2)を直流スイッチへ接続している。

### H23一次「機械」問8(5)

- candidate: `ル / カルノー図法`
- 公式: `ヘ / Quine–McCluskey法`
- 原因: 「計算機による機械的なアルゴリズム処理が容易」という限定を落とし、一般的な論理最小化手法のカルノー図法を選択した。
- 教材不足: `NO`。解説source §5はQuine–McCluskey法をmintermを体系的にまとめる論理最小化法として独立節で説明し、固定過去問接続でもH23(5)へ対応済み。

## 教材依存QA

判定: `25 / 25 PASS`

現行解説sourceの固定答案要素接続:

- R8問8: §6 `5 / 5 connected`
- R2問8: §2・§14 `5 / 5 connected`
- H29問8: §9 `5 / 5 connected`
- H26問3: §10 `5 / 5 connected`
- H23問8: §4・§5 `5 / 5 connected`

3件のFAILはいずれも教材に正しい識別材料が存在し、candidate側の独立再解答ミス。教材本文、固定EXAM_ALIGNMENT、SPEC固定9項目の修正は行わない。

## 二次試験ゲート

- 固定二次問題: `0問`
- 理由: Topic 38のコア論点へ直接対応する二次「機械・制御」記述問題を固定できていない。
- 件数合わせ採用: `0件`
- MASTER_SPEC / EXAM_ALIGNMENT_SPECの「直接対応が確認できる場合のみ採用」を維持。

## 品質ゲート判定

- freshness: `PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- candidate固定後修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC固定9項目変更: `0件`
- 二次問題件数合わせ: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

`EXAM_ALIGNMENT_SPEC.md` §10・§11により、公式過去問の独立再解答が全件正答ではないためTopic 38は `completed` にしない。

## 次工程

fresh workerで `clean blind v9` を実施する。固定5問・25答案要素は変更しない。v8 candidateは修正・再利用しない。

candidate固定前は、mandatory正本・question-only intake・公式「問題」PDFだけを確認し、Topic 38 source/教材、prior candidate/QA、公式標準解答、保存済み正答、answer-bearing commit diffを開かない。
