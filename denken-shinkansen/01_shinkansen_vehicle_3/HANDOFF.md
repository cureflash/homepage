# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は25/38。01〜25がPASS。次のactive topicは26 `補助電源① 主回路の電気を車内設備へ`。

## 今回進捗
Topic 25 `L0系④ 誘導集電` の完成後独立再解答を実施した。選定5問・7小問を、保存済み正答を先に見ず、完成教材に収録した式・適用条件・解法手順だけで再解答し、電気技術者試験センター公式解答と照合した。7 / 7 PASSのためTopic 25を`COMPLETED`とした。

更新:
- `topics/25_l0_inductive_power_collection/25_l0_inductive_power_collection.md` — 完成後独立再解答結果を追記、`COMPLETED`
- `STATUS.md` — 完成数25/38、次Topic 26へ更新
- `HANDOFF.md`

## Topic 25 完成後独立再解答
1. R7下 機械 問16(a) — `P_D=1.0×36/3=12 W` — 再解答5 / 公式5 — PASS
2. R7下 機械 問16(b) — `X_L=2π×50×5.56×10^-4≈0.1747 Ω`、与式から`V_d≈262.1 V` — 再解答4 / 公式4 — PASS
3. R7下 機械 問15(a) — `P_out=37.5 kW`、総損失約`687.4 W`、鉄損=銅損より約`343.7 W`→344 W — 再解答5 / 公式5 — PASS
4. R7下 機械 問15(b) — `343.7/0.75^2≈611 W` — 再解答2 / 公式2 — PASS
5. R7上 機械 問9 — 力率1全負荷時の損失比`1/0.98-1`から力率0.8時`η≈97.5%` — 再解答3 / 公式3 — PASS
6. R6下 理論 問3 — `|e|=30×1/0.1=300 V` — 再解答2 / 公式2 — PASS
7. R4上 理論 問3 — `M=(86-40-10)/2=18 mH`、`k=18/√(40×10)=0.90` — 再解答2 / 公式2 — PASS

結果: 7 / 7 PASS。必要公式の選択、適用条件、途中計算を完成教材内だけで再構成でき、公式解答と全件一致。仕様外知識や未確認実車値による補完は不要だった。

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-13

## Topic 25 成果物・QA
- source: `topics/25_l0_inductive_power_collection/25_l0_inductive_power_collection.md` — EXAM_ALIGNMENT、解説本文、3段階例題、完成後独立再解答まで完了
- 解説PDF: `topics/25_l0_inductive_power_collection/25_l0_inductive_power_collection_explanation.pdf` — A4縦3ページ、全ページ表示QA PASS
- 練習PDF: `topics/25_l0_inductive_power_collection/25_l0_inductive_power_collection_practice.pdf` — A4縦5ページ、15問、全ページ表示QA PASS
- PowerPoint: `topics/25_l0_inductive_power_collection/25_l0_inductive_power_collection_images.pptx` — 3スライド、表示QA・overflow検査PASS

系列SPEC固定範囲は、電磁誘導、非接触給電、誘導集電、交流、電力変換、効率。共振方式、Q値、補償・整合回路、高周波インバータ詳細、未確認の実機コイル寸法・実運転周波数・定格電力・電圧・電流・伝送効率へは広げていない。R7下機械問16の三相ダイオード整流回路をL0系実機構成とは断定していない。

## 現在の状態
- `current_status`: `topic_25_completed`
- 完成数: 25/38
- 01〜25: PASS
- active topic: 26 `補助電源① 主回路の電気を車内設備へ`

## 次の正確な開始点
Topic 26の制作前EXAM_ALIGNMENTを実施する。系列SPEC固定範囲から関連する公式過去問を直近年度優先で原則5問以上調査し、制作前独立解答と教材要求事項を確定する。
