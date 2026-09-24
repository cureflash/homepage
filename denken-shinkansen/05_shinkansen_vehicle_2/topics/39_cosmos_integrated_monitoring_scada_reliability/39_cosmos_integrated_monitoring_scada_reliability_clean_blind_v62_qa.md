# Topic 39 clean blind v62 QA

作成日: 2026-09-24
Candidate commit: `5eef77beb36def0f6c237a75eb50ceb9bf617b3f`

## Freshness

PASS。

candidate固定前に参照したのは、指定された仕様書・sanitized STATUS/HANDOFF・question-only intake・intake記載の公式問題PDFのみ。公式標準解答PDF、過去clean-blind candidate/QA、Topic 39 answer-bearing教材・QAはcandidate commit後に初めて開いた。

## Official-answer agreement

### R4 一次「機械」問3

- 5 / 5
- PASS

### R3 一次「機械」問8

- 5 / 5
- PASS

### H30 一次「機械」問8

- 4 / 5
- FAIL
- 不一致: (5) candidate=`ヘ（IP）`、公式=`イ（DHCP）`
- 問題文は「(5) サーバ」を問うており、IPアドレス等を自動割当するサーバはDHCPサーバ。

### H25 一次「機械」問8

- 5 / 5
- PASS

一次合計: 19 / 20

### R2 二次「電力・管理」問2 — 固定5群

1. 小問(1)前半: PASS
   - 計器用変成器の役割、CT / VTの例を満たす。
2. 小問(1)後半: PASS
   - 比誤差式 `ε = (K_n - K) / K × 100 [%]` を満たす。
3. 小問(2): FAIL
   - 必要動作時の確実動作、不要動作防止までは含むが、公式解答が求める `点検・自動監視`、`低故障率`、`冗長化` の列挙を欠く。
4. 小問(3)前半: FAIL
   - candidate=`5サイクル / 引外し装置`。
   - 公式解答=`5サイクル及び3サイクル / 引外しコイル（トリップコイル）`。
5. 小問(3)後半: PASS
   - 引外し自由の機能と目的を満たす。

二次合計: 3 / 5

### 総合

- official-answer agreement: 22 / 25
- fixed 5-group boundary: PASS
- 判定: FAIL

## Teaching-material derivability

25 / 25、PASS。

Topic 39のsource/teaching materialには、一次4問の全答案、R2二次の固定5群に必要な内容（CT/VT、比誤差式、保護リレー信頼性の点検・自動監視/低故障率/冗長化、5サイクル及び3サイクル、引外しコイル、引外し自由）が明示されている。既存QAでもderivability 25/25が確認済み。

したがって今回のFAILは教材欠落ではなくsolver-side mismatchであり、教材本文の修正は不要。

## Completion verdict

FAIL。

- Topic 39は未完了のまま。
- series completionは 38 / 39 のまま。
- clean-blindはv63へ進める。
- v63 fresh workerはcandidate固定前に本QAを開いてはならない。exact answer-bearing mismatchは本QAに隔離する。
