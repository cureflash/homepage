# Topic 39 clean blind v54 candidate

更新日: 2026-09-22

## freshness

- base main: `23b245ea99b9447344c90eeab50631fd74f8fee0`
- candidate固定前に参照したTopic 39資料: sanitized `STATUS.md` / `HANDOFF.md`、`39_cosmos_integrated_monitoring_scada_reliability_clean_blind_intake.md`、intake指定の公式「問題」PDFのみ。
- v1〜v53 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材・answer-bearing QA: candidate固定前は未参照。
- freshness: `PASS`
- 固定5問・25答案要素: 変更なし。
- R2二次: intake記載の固定5群境界を維持。

## 独立解答

### 1. R4一次「機械」問3 — 計器用変成器

1. 負担
2. 励磁
3. 小さ
4. 比誤差
5. 短絡

### 2. R3一次「機械」問8 — A/D変換

1. 2
2. 誤差
3. 時間
4. MSB
5. サンプルホールド

### 3. H30一次「機械」問8 — LAN中継機器・アドレス

1. リピータ
2. ブリッジ
3. MAC
4. Wi-Fi
5. DHCP

### 4. H25一次「機械」問8 — 変調・復調

1. 搬送波
2. 復調
3. AM
4. 直交振幅変調
5. ASK

### 5. R2二次「電力・管理」問2 — 固定5群

1. 計器用変成器は、電力系統の高電圧・大電流を計器や保護リレーで扱える低電圧・小電流に変換し、測定・保護に用いる。代表例は計器用変圧器（VT/PT）と変流器（CT）。
2. 比誤差は `ε = (K_n - K) / K × 100 [%]`。
3. 信頼性とは、保護すべき事故時には確実に動作し、保護対象外・平常時には不要動作・誤動作しないこと。
4. 77又は66 kV系統の遮断器の定格遮断時間は3サイクル。保護リレーから事故除去指令を受ける箇所は引外し装置（トリップコイル）。
5. 引外し自由（トリップフリー）は、投入操作中または投入指令が継続していても引外し指令を受ければ投入操作に拘束されず遮断できる機能で、事故状態への投入継続・再投入を防ぎ、事故を確実に除去するためのもの。

## 公式 question-only source

- R4一次「機械」: `https://www.shiken.or.jp/chief/upload/20220820_ch_second_q03.pdf`
- R3一次「機械」: `https://www.shiken.or.jp/chief/upload/20210821_ch_second_q03.pdf`
- H30一次「機械」: `https://www.shiken.or.jp/chief/upload/20180901_ch_second_q03.pdf`
- H25一次「機械」: `https://www.shiken.or.jp/chief/upload/20130831_ch_second_q03.pdf`
- R2二次「電力・管理」: `https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf`

candidate固定後にのみ公式標準解答・既存教材との照合を行う。
