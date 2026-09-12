# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 1 / 16
- current_status: `topic_02_exam_alignment_complete`
- last_completed_topic: `01 新幹線の電気はどこから来る？`
- active_topic: `02 上越新幹線を水の力で走らせる`
- next_start: Topic 02 の解説本文＋3段階例題。制作前 `EXAM_ALIGNMENT` の要求事項を固定範囲内で本文へ対応させる

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT範囲再監査、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [ ] 02 上越新幹線を水の力で走らせる — 制作前EXAM_ALIGNMENT完了。公式過去問6問・7小問を独立検証し7/7 PASS。本文以降は未着手
- [ ] 03〜16 — 未着手

## 01 EXAM_ALIGNMENT範囲再監査
前回の6問は、問題全体を教材だけで完答するにはTopic 01境界外の詳細知識が必要と判定し、最終品質ゲート対象から除外した。

除外:
1. R8上 電力 問6 — V結線詳細 → Topic 06・07
2. R8上 電力 問8 — 電線太さ・コロナ・サージ等 → Topic 09
3. R8上 電力 問11 — ネットワーク配電詳細 → Topic 14
4. R7下 電力 問1 — 水力分類詳細 → Topic 02
5. R7下 電力 問5 — 誘導・同期発電機詳細 → Topic 01境界外
6. R7下 電力 問6 — 避雷器詳細 → Topic 06・11

Topic 01の既定範囲に適合する次の5問へ差し替え済み。

1. R7上 電力 問13 — 三相有効電力・力率・線路損失
2. R6下 電力 問12 — 三相有効電力・三相線路損失・損失率
3. R6上 電力 問11 — 三相方式と単相方式の基本的相違
4. R4上 電力 問8 — 三相負荷電流・抵抗損失
5. R1 電力 問7 — 変電所の昇降圧・電圧調整・系統切換え・系統保護

## 01 制作前独立再解答
公式解答を先に見ず5問を再解答し、その後に電気技術者試験センター公式解答と照合した。

- R7上 問13: 独立解答 (2) / 公式 (2) — PASS
- R6下 問12: 独立解答 (2) / 公式 (2) — PASS
- R6上 問11: 独立解答 (2) / 公式 (2) — PASS
- R4上 問8: 独立解答 (5) / 公式 (5) — PASS
- R1 問7: 独立解答 (3) / 公式 (3) — PASS

5/5一致。

## 01 成果物
- source Markdown: `topics/01_power_system_overview/01_power_system_overview.md`
- 解説PDF: `topics/01_power_system_overview/01_power_system_overview_explanation.pdf`
- 練習PDF: `topics/01_power_system_overview/01_power_system_overview_practice.pdf`
- 解説画像PowerPoint: `topics/01_power_system_overview/01_power_system_overview_images.pptx`
- 完成後QA: `topics/01_power_system_overview/01_power_system_overview_final_qa.md`

解説PDFはA4縦4ページ、練習PDFはA4縦7ページ・全15問、PowerPointは16:9・4枚。各表示確認は完了済み。

## 01 完成後独立再解答
完成教材の既定範囲だけで選定5問を再解答し、解答確定後に公式解答と照合した。

- R7上 問13: (2) — PASS
- R6下 問12: (2) — PASS
- R6上 問11: (2) — PASS
- R4上 問8: (5) — PASS
- R1 問7: (3) — PASS

結果: `5/5 PASS`。教材外知識の補完0件。
詳細は `topics/01_power_system_overview/01_power_system_overview_final_qa.md`。

## 01 QA判定
`PASS / completed`。`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成条件を満たしたため、完成数を1/16へ更新した。

## 02 制作前EXAM_ALIGNMENT
source: `topics/02_hydropower/02_hydropower.md`

品質ゲート対象:
1. R8上 電力 問2 — 理論的包蔵水力・年間電力量
2. R8上 電力 問15(a)(b) — 揚水発電の出力・入力・運転時間・総合効率
3. R7下 電力 問2 — 単位体積当たりの運動エネルギー
4. R7上 電力 問1 — `P=ρgQH` の単位と `9.8QH[kW]`
5. R3 電力 問2 — 連続の関係とベルヌーイの定理
6. H25 電力 問1 — 衝動/反動水車と代表形式

制作前独立再解答は7小問すべて公式解答と一致し、`7/7 PASS`。

境界維持:
- ダム形式・発電所分類の詳細は追加しない
- 比速度・キャビテーション・水撃作用・サージタンク・調速機は追加しない
- 発電機の同期機/誘導機としての詳細は追加しない
- 信濃川発電設備の実値は一次資料確認前に真値化しない

## 次
Topic 02の解説本文＋基礎・本試験標準・複合/ひっかけの3段階例題を作成する。完成数は1/16のまま。
