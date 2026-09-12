# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-12

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 0 / 16
- current_status: `topic_01_exam_alignment_scope_validation_complete`
- last_completed_topic: なし
- active_topic: `01 新幹線の電気はどこから来る？`
- next_start: Topic 01 の新選定5問を独立再解答し、公式解答と照合する。範囲内で5/5完答を確認してから本文制作へ進む

## 新品質ゲート進捗
- [ ] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT範囲再監査完了。独立再解答・本文・解説PDF・練習PDF・PowerPointは未完了
- [ ] 02〜16 — 未着手

## 01 EXAM_ALIGNMENT範囲再監査
前回の6問は、問題全体を教材だけで完答するにはTopic 01境界外の詳細知識が必要と判定し、最終品質ゲート対象から除外した。

除外:
1. R8上 電力 問6 — V結線詳細 → Topic 06・07
2. R8上 電力 問8 — 電線太さ・コロナ・サージ等 → Topic 09
3. R8上 電力 問11 — ネットワーク配電詳細 → Topic 14
4. R7下 電力 問1 — 水力分類詳細 → Topic 02
5. R7下 電力 問5 — 誘導・同期発電機詳細 → Topic 01境界外
6. R7下 電力 問6 — 避雷器詳細 → Topic 06・11

Topic 01の既定範囲に適合する次の5問へ差し替えた。

1. R7上 電力 問13 — 三相有効電力・力率・線路損失
2. R6下 電力 問12 — 三相有効電力・三相線路損失・損失率
3. R6上 電力 問11 — 三相方式と単相方式の基本的相違
4. R4上 電力 問8 — 三相負荷電流・抵抗損失
5. R1 電力 問7 — 変電所の昇降圧・電圧調整・系統切換え・系統保護

教材必須範囲は `topics/01_power_system_overview/01_power_system_overview.md` に更新済み。詳細章の内容をTopic 01へ逆流させず、`P=√3VI cosφ`、`P_loss=3I^2R`、三相/単相の位置付け、変電所の基本役割まででゲートを構成する。

source Markdown:
- `topics/01_power_system_overview/01_power_system_overview.md`

## 01 QA判定
`IN_PROGRESS`。範囲再監査は完了したが、新選定5問の独立再解答・公式解答照合と必須成果物が未完了のため、完成数は0/16のまま。

## 次
新選定5問を公式正答を先に見ず独立再解答し、公式解答と照合する。5/5で教材範囲内完答を確認した後、Topic 01の解説本文・3段階例題・12問以上の練習問題作成へ進む。
