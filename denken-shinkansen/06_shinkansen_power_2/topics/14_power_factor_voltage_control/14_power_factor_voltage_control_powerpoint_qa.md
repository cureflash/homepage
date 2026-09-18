# Topic 14 PowerPoint QA

更新日: 2026-09-18

## 対象
- `14_power_factor_voltage_control_images.pptx`
- 16:9
- 4スライド

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `06_shinkansen_power_2/SPEC.md`
- `14_power_factor_voltage_control.md`
- `14_power_factor_voltage_control_explanation.md`
- `14_power_factor_voltage_control_practice.md`

## スライド対応
1. P-Q-S、力率、線路電流、線路損失、コンデンサ補償
   - `S=P+jQ`, `|S|=sqrt(P^2+Q^2)`, `cosφ=P/|S|`, `Q=P tanφ`
   - `I=P/(sqrt(3)V cosφ)`
   - `Ploss=3I^2R`, `Ploss∝1/cos^2φ`
   - P-Q平面と `Qc=P(tanφ1-tanφ2)`
   - SPEC可視化「力率―線路電流」「力率―損失」
2. 無効電力と受電点電圧、コンデンサ／分路リアクトル、軽負荷時電圧上昇
   - `Vs≒Vr+(RP+XQ)/Vr`
   - `Q>0` 遅れで電圧降下増加、`Q<0` 進みで電圧上昇方向
   - SPEC可視化「無効電力―受電点電圧」
   - 充電電流、`Vr>Vs`、フェランチ効果、分路リアクトル
3. 指定電圧から必要無効電力を逆算
   - 変圧器 `%X` のΩ換算と `Xtotal=Xt+Xline`
   - R-X近似型: `Vs-Vr=(RP+XQnet)/Vr`
   - リアクタンス系統型: `P=VsVr sinδ/X`, `Qr=(VsVr cosδ-Vr^2)/X`
   - `Qdevice=Qnet-Qload` の符号でコンデンサ／リアクトルを判定
4. 受電設備容量制約・最低必要容量・丸め
   - `sqrt(P^2+Qafter^2)<=ST`
   - `Qc,min=Qbefore-sqrt(ST^2-P^2)`
   - P-Q容量円
   - 仮定値 `1.877 Mvar` の境界に対し0.1 Mvar刻みなら `1.9 Mvar`
   - `1.8 Mvar -> 9.035 MVA FAIL`, `1.9 Mvar -> 8.989 MVA PASS`

## SPEC固定10項目同期
- 有効電力: Slides 1, 3, 4
- 無効電力: Slides 1–4
- 皮相電力: Slides 1, 4
- 力率: Slides 1, 4
- 電圧制御: Slides 2, 3
- 無効電力補償: Slides 1–4
- コンデンサ: Slides 1–4
- リアクトル: Slides 2, 3
- 電圧変動: Slides 2, 3
- P-Q関係: Slides 1, 2, 4

固定10項目: `10 / 10 PASS`。

## SPEC固定3可視化同期
- 力率―線路電流: Slide 1
- 力率―損失: Slide 1
- 無効電力―受電点電圧: Slide 2

固定3可視化: `3 / 3 PASS`。いずれも解説sourceで固定した教材用仮定値を使用し、実設備値として扱っていない。

## 正式過去問品質ゲート同期
- 令和6年度 第二種一次「電力」問5: `5答案要素`
  - 充電電流: Slide 2
  - `Vr>Vs`: Slide 2
  - フェランチ効果: Slide 2
  - フェーザ・進みQ判断: Slide 2
  - 分路リアクトル: Slide 2
- 令和4年度 第二種一次「法規」問4: `5答案要素`
  - 静電容量・フェランチ効果・分路リアクトル: Slide 2
  - 力率改善による電圧降下・損失低減: Slides 1, 2
  - `P(tanφ1-tanφ2)`: Slide 1
- 令和5年度 第二種二次「電力・管理」問4: `2答案要素`
  - 送電端電圧: Slides 2, 3
  - 必要リアクトル容量: Slide 3
- 令和2年度 第二種二次「電力・管理」問6: `4答案要素`
  - 最小追加コンデンサ容量: Slide 4
  - 総合力率: Slides 1, 4
  - P-Qベクトル図・角度: Slides 1, 4
  - 目標力率用コンデンサ容量: Slides 1, 4
- 平成23年度 第二種二次「電力・管理」問3: `5答案要素`
  - 変圧器リアクタンス: Slide 3
  - 一次側電圧: Slide 3
  - 負荷無効電力: Slide 3
  - 調相設備種別: Slide 3
  - 調相設備容量: Slide 3

固定5問・21答案要素: `21 / 21` をPowerPoint内へ接続。

この `21 / 21` はPowerPoint説明カバレッジであり、完成後blind独立再解答のPASSではない。

## 制作前blind不足1要素の改善維持
制作前blindで不足した令和2年度二次問6の「最低必要コンデンサ容量を不足側へ丸めない」処理について、Slide 4で以下を固定した。

1. 容量制約を不等式 `sqrt(P^2+Qafter^2)<=ST` として扱う。
2. 境界 `Qc,min` を算出する。
3. 離散容量では境界を下回らない値を採る。
4. `1.8 Mvar` と `1.9 Mvar` を再代入し、前者FAIL・後者PASSを確認する。
5. 目標力率条件は設備容量制約と別式で解く。

制作前不足1答案要素への説明維持: `1 / 1 PASS`。

## 範囲確認
- Topic 15 回生・逆潮流・蓄電・電力融通: 追加なし
- Topic 16 故障計算: 追加なし
- Topic 17 保護リレー・遮断器・保護協調: 追加なし
- Topic 18 雷サージ・進行波・絶縁協調: 追加なし
- Topic 20 P-V曲線・安定度: 追加なし
- Topic 21 周波数制御・経済運用: 追加なし
- 未確認の新幹線実設備力率・調相容量・実測電圧変動: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 表示QA
- 全4スライドをLibreOffice経由でレンダリングし目視確認: `4 / 4 PASS`
- レンダリング寸法: `1601 x 900` / slide
- 文字切れ: `0件`
- 文字重なり: `0件`
- 図形はみ出し: `0件`
- 数式・単位: `PASS`
- 教材上仮定値の明示: Slides 1, 2, 3, 4

## 機械QA
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS / No errors detected`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件`
- 主要語句抽出確認: 力率、線路電流、線路損失、無効電力、受電点電圧、分路リアクトル、コンデンサ、`Qc,min`、フェランチ効果 — 全件PASS
- SHA-256: `5a3baf450952569f820ae03d539f5c36d8dd0ceb3ec620d0f9cb51b5f8470d6f`

## 判定
`PASS / topic_14_powerpoint_complete`

次段階は固定5問・21答案要素の完成後blind独立再解答。固定EXAM_ALIGNMENT、問題・答案要素、教材技術内容は変更しない。
