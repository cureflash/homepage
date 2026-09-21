# Topic 38 clean blind v6 QA

更新日: 2026-09-21

対象: Topic 38「COMTRAC 列車追跡・進路制御・高信頼化」

candidate正本: `38_comtrac_train_tracking_route_control_reliability_clean_blind_v6_candidate.md`
candidate固定commit: `1b23c2148a5878d88df2a4e13346de3b21b163c3`

## freshness

判定: `PASS`

candidate固定前は、最新mainの必須正本、question-only intake、公式「問題」PDFだけを参照した。Topic 38 source/教材、prior candidate/QA、公式標準解答、保存済み正答を含むanswer-bearing資料はcandidate固定後に初めて参照した。

candidate固定後修正: `0件`

## 公式標準解答照合

| 固定過去問 | candidate | 公式標準解答 | 判定 |
|---|---|---|---|
| R8一次「機械」問8 | ヌ / ル / リ / ロ / ニ | ヌ / ル / リ / ロ / ニ | 5/5 PASS |
| R2一次「機械」問8 | ヌ / ハ / カ / チ / ロ | ヌ / ハ / ヲ / チ / ロ | 4/5 FAIL |
| H29一次「機械」問8 | リ / ヨ / ニ / ヲ / ヘ | リ / ヨ / ニ / ヲ / ヘ | 5/5 PASS |
| H26一次「機械」問3 | ヌ / ワ / チ / ハ / リ | ヌ / ワ / チ / ハ / リ | 5/5 PASS |
| H23一次「機械」問8 | ヨ / ホ / ヌ / ロ / ヘ | ヨ / ホ / ヌ / ロ / ヘ | 5/5 PASS |

合計: `24 / 25 FAIL`

唯一の不一致:

- R2一次「機械」問8(3)
- candidate: `カ / 中断`
- 公式標準解答: `ヲ / 割込み`
- 診断: 問題文が要求する状態変化の契機を「割込み」と識別すべきところ、candidateは割込み発生後の通常処理側の結果である「中断」を選んだ。candidate本文自身は「外部・内部の割込み」を根拠にしており、概念欠落ではなく選択肢対応の独立再解答ミス。

公式標準解答:
- R8: `https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf`
- R2: `https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf`
- H29: `https://www.shiken.or.jp/chief/upload/20170902_ch_second_a01.pdf`
- H26: `https://www.shiken.or.jp/chief/upload/20140906_ch_second_a01.pdf`
- H23: `https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf`

## 教材依存QA

判定: `25 / 25 PASS`

現行解説sourceで固定答案要素は以下のとおり全件接続済み。

- R8問8: §6で `5 / 5 connected`
- R2問8: §2・§14で `5 / 5 connected`
  - §2で割込みを「イベント発生に応じて通常処理から所定処理へ制御を移す仕組み」と明記し、ポーリングと区別。
  - §14で高優先度割込み発生時に通常処理を一時中断して割込み処理へ移る例を示し、「割込み」を「中断」と同一視しないための材料も存在する。
- H29問8: §9で `5 / 5 connected`
- H26問3: §10で `5 / 5 connected`
- H23問8: §4・§5で `5 / 5 connected`

したがってR2問8(3)のFAILは教材欠落ではない。教材remediationは不要。

## 品質ゲート判定

- freshness: `PASS`
- 公式標準解答一致: `24 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- candidate固定後修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC固定9項目変更: `0件`
- 二次問題件数合わせ: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

`EXAM_ALIGNMENT_SPEC.md` §10および§11により、公式過去問を独立再解答して正答できないためTopic 38は `completed` にしない。

## 次工程

fresh workerで `clean blind v7` を実施する。candidate固定前の参照制限はv6と同じとし、固定5問・25答案要素を変更しない。v6 candidateを修正・再利用しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。
