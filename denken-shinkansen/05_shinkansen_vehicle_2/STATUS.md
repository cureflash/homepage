# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `16 / 39`
- current_status: `topic_17_clean_blind_candidates_fixed`
- last_completed_topic: `16 700系 多レベル変換器とPWM`
- active_topic: `17 パワー半導体の損失比較`
- next_start: 固定済みclean blind候補23答案要素を、電気技術者試験センター公式解答・標準解答と照合する。候補答案は変更せず、正誤と教材内導出根拠を記録する

## 完了済み

Topic 01〜16は最終QAまで `PASS / completed`。完成数は `16 / 39`。

## Topic 17 EXAM_ALIGNMENT再監査

H24一次「機械」問6の採用単位を公式問題文から再監査した。

旧マッピング:
- H24一次 問6 (1)〜(5) を5答案要素すべてゲート対象
- 固定総数: 一次20＋二次6 = 26答案要素

是正後:
- H24一次 問6は問題自体を固定5問の一つとして維持
- ゲート対象は (2) 放熱設計、(3) 半導体接合部温度のみ
- (1) LEDランプ構成部品、(4) 光への変換、(5) 自然空冷照明器具の具体的設計周囲温度はTopic 17の固定SPEC外なので対象外
- 固定総数: 一次17＋二次6 = `23答案要素`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

監査記録:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md`
- source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison.md`

## Topic 17 固定EXAM_ALIGNMENT

固定過去問は一次4問＋二次1問、計5問を維持する。

- R7 一次 機械 問4 (1)〜(5): 5要素
- R4 一次 機械 問4 (1)〜(5): 5要素
- R2 一次 機械 問2 (1)〜(5): 5要素
- H24 一次 機械 問6 (2)(3): 2要素
- H24 二次 機械・制御 問1 (1)〜(6): 6要素

合計: `23答案要素`。

## Topic 17 成果物

- 解説source: `PASS`
- 解説PDF: `PASS / 4 pages / display QA PASS`
- 練習問題source: `PASS / 一次8問＋二次4問`
- 練習PDF: `PASS / 6 pages / display QA PASS`
- 解説画像PowerPoint: `PASS / 4 slides`
- 成果物自体の判定: `PASS`

旧成果物・旧QAの「固定5問・26答案要素 `26 / 26`」表記は再マッピング前の履歴値であり、最終品質ゲートには使用しない。

## Topic 17 clean blind再解答

是正後の固定5問・23答案要素をclean条件で再解答し、公式解答・標準解答を開く前に候補答案を固定した。

- 旧候補答案ファイル: `未参照`
- 公式解答・標準解答: `未参照`
- 電験解説サイトの各問題解説: `未参照`
- R7一次 問4: `5 / 5 candidate fixed`
- R4一次 問4: `5 / 5 candidate fixed`
- R2一次 問2: `5 / 5 candidate fixed`
- H24一次 問6 (2)(3): `2 / 2 candidate fixed`
- H24二次 問1: `6 / 6 candidate fixed`
- 合計: `23 / 23 candidate fixed`
- 公式照合: `未実施`
- completed化: `不可`

候補答案記録:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md`

## Topic 17 SPEC固定範囲

扱う内容は導通損失、スイッチング損失、スイッチング周波数、素子電流、接合温度、冷却、変換効率。指定可視化は電流―導通損失、スイッチング周波数―損失、出力―変換効率。

Topic 16の多レベル波形・高調波解析は再展開せず、後続TopicのSiC採用・機器小型化を先取りしない。未確認700系実車の素子型式・定格・損失・温度・冷却条件・効率を真値化しない。

## 次工程

固定済みclean blind候補23答案要素を、電気技術者試験センター公式解答・標準解答と照合する。候補答案は変更せず、正誤と教材内導出根拠を記録する。