# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜05は最終QAまで `PASS`。完成数は `5 / 39`。

現在地は `topic_06_powerpoint_complete`。active topicは Topic 06 `0系⑥ 主回路全体の電力・損失・効率`。

## Topic 06 EXAM_ALIGNMENT
source:
- `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency.md`

品質ゲート対象を一次3問＋二次2問、計5問で固定している。

- R8 一次 機械 問3
  - 変圧器の損失、規約効率、最大効率条件
  - 公式解答 `(1)=ト, (2)=ロ, (3)=ヌ, (4)=リ, (5)=ヲ`
- R5 一次 機械 問1
  - 回転機の効率、機械損・鉄損・銅損・漂遊負荷損・固定損
  - 公式解答 `(1)=リ, (2)=ロ, (3)=ル, (4)=ニ, (5)=ヨ`
- H30 一次 機械 問5
  - 変圧器の無負荷損・負荷損・鉄損・規約効率
  - 公式解答 `(1)=ホ, (2)=ワ, (3)=ヌ, (4)=カ, (5)=ヘ`
- R2 二次 機械・制御 問2
  - 鉄損 `400 W`、定格銅損 `624 W`、最大効率負荷率 `80.0 %`、最大効率 `99.0 %`、負荷率30 %・力率60 %で `97.5 %`
- H22 二次 機械・制御 問2
  - 鉄損 `1.04 kW`、定格銅損 `4.93 kW`、最大効率条件 `鉄損=負荷時銅損`、負荷率 `0.45826`、最大効率約 `98.5 %`

二次記述2問を含み、二種一次・二次合計の原則5問以上を満たす。R7一次機械問3はTopic 01寄りのため採用しない。IGBT等のスイッチング損失も件数合わせで追加しない。

## Topic 06 完了済み工程
- 解説source: 完了
- 解説PDF: A4縦5ページ、180 dpi Visual QA `PASS`
- 練習source: 一次8問＋二次4問、計算・論理 `12 / 12 PASS`
- 練習PDF: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice.pdf`
- 練習PDF QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice_qa.md`
  - A4縦3ページ
  - 一次8問＋二次4問を収録
  - 180 dpi全ページ Visual QA `PASS`
  - 文字抽出QA `PASS`
  - 計算・論理 `12 / 12 PASS`
- 解説画像PowerPoint: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_images.pptx`
- PowerPoint QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_images_qa.md`
  - 16:9・4スライド
  - SPEC指定の4可視化対象を反映
  - 180 dpi全4スライド Visual QA `PASS`
  - overflow `0件`
  - PPTX ZIP整合性 `PASS`
- 完成後独立再解答: 未実施
- 最終QA: 未実施

## Topic 06 固定範囲
扱う内容:
- 主変圧器損失
- 整流器損失
- 主電動機損失
- 機械損
- 入力電力
- 軸出力
- 総合効率
- 発熱
- 冷却

指定計算・グラフ:
- 負荷率―総合効率
- 機器別損失内訳
- 入力電力―車輪側出力
- 条件変更時の損失比較

範囲境界:
- サイリスタ位相制御、チョッパ、誘導機、PWM/VVVF、回生・四象限運転、IGBT/SiC、詳細熱モデルは追加しない。
- 未確認の0系固有損失値、冷却容量、編成出力、歯車損失は実値として置かない。
- 整流器損失は交流入力と直流出力の差として扱い、後世代のスイッチング損失モデルへ拡張しない。

## 次の正確な開始点
Topic 06の完成後独立再解答を実施する。

1. 固定EXAM_ALIGNMENTのR8一次、R5一次、H30一次、R2二次、H22二次を対象にする。
2. 公式解答・保存済み正答を先に見ず、完成教材だけで解法を再構築する。
3. 教材外知識で補完した場合は正答でもFAILとする。
4. 各小問・記述計算の結果と根拠を独立再解答記録へ残す。
5. 固定範囲外の問題・論点を追加しない。
6. 最終QAは独立再解答の次工程とする。
