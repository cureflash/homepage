# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-18

## 現在地

Topic 01〜12は `completed`。

完成数: `12 / 12`

current_status: `series_completed`

last_completed_topic: `12 電気数学総合`

active_topic: `なし`

next_start: `10_electrical_math_2 / Topic 16 解説画像PowerPoint＋表示QA`

## Topic 11 固定仕様範囲

系列 `SPEC.md` のTopic 11だけを対象とする。

扱う:
- 一次関数
- 二次関数
- 反比例
- 指数関数
- 正弦波
- 傾き
- 面積
- 最大・最小
- パラメータ変化
- 変圧器効率、誘導機トルク、ダイオード特性、RLC周波数特性、速度―時間曲線等の特性曲線読解

既習事項として使用する:
- Topic 06〜09の微分・積分、傾き・面積
- Topic 10の指数応答
- 本系列以前に学習済みの基本回路・機器知識

このTopicで新規に体系化しない:
- 微分・積分の再導入
- RC/RL過渡現象の再体系化
- ラプラス変換
- 伝達関数
- ボード線図
- PID等の制御理論体系
- 各機器の詳細設計論

## Topic 11 制作前EXAM_ALIGNMENT

主source:
`topics/11_graph_characteristic_curves/11_graph_characteristic_curves.md`

品質ゲート対象は次の5問で固定。

- R7下 機械 問1: 直流分巻電動機の負荷電流に対する回転速度・トルク特性から正しい図を選ぶ
- R6下 理論 問13: トランジスタ静特性と直流負荷線の交点から動作点を読み、抵抗値へ接続する
- R6下 理論 問9: RC直列回路で周波数を50 Hzから60 Hzへ変えたときの電流変化を求める
- R5上 機械 問7: 電動機と負荷のトルク対速度曲線から安定・不安定動作点を判断する
- R5上 機械 問9: 変圧器の負荷率変化と最大効率条件を求める

固定5問から逆算した必須説明15項目を主sourceへ記録済み。

参考教材は複数系統を確認済み。
- 電気技術者試験センター公式過去問題
- e-sysnet: 三相誘導電動機の特性、トランジスタ増幅回路、RLC並列共振回路
- 電験三種まとめました: 誘導機トルク-回転速度曲線、R5上機械問7、R5上機械問9

令和8年度上期から遡って候補を確認し、件数合わせのために固定範囲外へ広げていない。

除外した主な候補:
- 伝達関数・ボード線図を新規に必要とする制御問題
- R4下 機械 問4のV曲線: 固定5問をより新しい年度で確保できたため追加しない
- H28 機械 問10の太陽電池I-V/P-V特性: 太陽光発電システム固有知識を品質ゲートへ追加しない
- R2 機械 問7: R5上 機械 問7と同型の再出題のため重複計上しない

## Topic 11 制作前独立解答

固定5問を公式解答参照前に独立解答し、その後に公式解答と照合済み。

結果: `5 / 5 PASS`。

完成後独立再解答のブラインド条件を守るため、個別の選択肢番号・数値解・導出はHANDOFFには保存しない。履歴は主sourceの`## 制作前独立解答・公式解答照合`節にのみ残し、完成後独立再解答を確定するまでは参照しない。

固定EXAM_ALIGNMENT変更0件。固定範囲外補完0件。

## Topic 11 解説本文＋3段階例題

主sourceへ固定15項目を `15 / 15` 実装し、固定5過去問を `5 / 5` 教材内マッピングした。

本文で扱った主な読解:
- 軸・単位・目盛・基本5関数形
- 傾き・面積・最大最小
- 交点と安定・不安定
- 曲線群・負荷線・局所補間
- 周波数・負荷等のパラメータ変化
- 分巻電動機、誘導機、変圧器効率、ダイオード非線形特性、RLC周波数特性、速度―時間曲線

3段階例題:
- 基礎: 速度―時間曲線 → `a=1.0 m/s^2`、`x=200 m`
- 本試験標準: 変圧器最大効率 → 負荷率 `0.50`、`η≈97.6 %`
- 複合・ひっかけ: 負荷線・曲線群・補間 → `I_C=3.0 mA`、`I_B≈17.5 μA`、`R_B≈246 kΩ`

独立再計算 `3 / 3 PASS`。

固定EXAM_ALIGNMENT変更0件。伝達関数・ボード線図・PID等の固定範囲外追加0件。

## Topic 11 解説PDF

主sourceを正本として次を反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_explanation.pdf`
- A4縦4ページ
- 200 dpi表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 固定必須説明 `15 / 15`
- 3段階例題の数値整合 `3 / 3 PASS`
- 固定5過去問への教材内対応 `5 / 5`
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID等の固定範囲外追加0件

## Topic 11 練習問題source

次をGitHub正本へ反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_practice.md`
- 全12問・全問五肢択一
- 基礎3 / 標準7 / 複合2
- 固定5過去問への接続 `5 / 5 PASS`
- 固定必須説明15項目への練習接続 `15 / 15 PASS`
- 数値・論理QA `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID等の固定範囲外追加0件

練習source判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

## Topic 11 練習PDF

練習問題sourceを正本として次をGitHub正本へ反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_practice.pdf`
- A4縦5ページ
- 200 dpi表示QA `5 / 5 PASS`
- 文字抽出QA `PASS`
- 全12問・全問五肢択一、解答・完全解説付き
- 練習sourceの正答・数値との整合 `12 / 12 PASS`
- 固定5過去問への接続 `5 / 5`
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID等の固定範囲外追加0件

## Topic 11 解説画像PowerPoint

主sourceと完成済み教材の固定範囲だけを使い、次をGitHub正本へ反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_images.pptx`
- 16:9・5枚
- 200 dpi表示QA `5 / 5 PASS`
- overflow `0件`
- PPTX ZIP整合性 `PASS`
- 軸→意味→式の読解順序、基本5関数形、傾き・面積、交点・安定性・負荷線、変圧器最大効率・RC/RLC周波数変化を図解
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID等の固定範囲外追加0件

## Topic 11 完成後独立再解答 ブラインドゲート

次をGitHub正本へ反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_blind_gate.md`
- 判定: `BLIND_REANSWER_READY / IN_PROGRESS`
- 固定品質ゲート5問は変更なし
- 固定EXAM_ALIGNMENT・教材成果物・問題・正答は変更なし
- HANDOFFから制作前独立解答の個別正答を除去
- 主sourceの制作前独立解答節は、完成後独立再解答を確定するまでは参照しない
- 伝達関数・ボード線図・PID等の固定範囲外追加0件

このrunでは保存済み個別正答を視認済みのため、完成後独立再解答そのものは実施しない。

判定: `topic_11_blind_gate_ready / IN_PROGRESS`。

## Topic 11 完成教材だけでの公式過去問独立再解答

次をGitHub正本へ反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_independent_reanswer.md`
- ブラインド条件を守り、公式解答・制作前独立解答節を参照する前に固定5問の解答を確定
- 固定品質ゲート5問は変更なし
- R7下 機械 問1: `(5)` PASS
- R6下 理論 問13: `(2)` PASS
- R6下 理論 問9: `(3)` PASS
- R5上 機械 問7: `(4)` PASS
- R5上 機械 問9: `(4)` PASS
- 公式解答照合 `5 / 5 PASS`
- 教材外知識補完0件
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID等の固定範囲外追加0件

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`。

Topic 11はまだ `completed` としない。

## Topic 11 最終QA（初回）

次をGitHub正本へ反映した。

- `topics/11_graph_characteristic_curves/11_graph_characteristic_curves_final_qa.md`
- 必須成果物実在: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 完成後独立再解答: `5 / 5 PASS`
- 練習QA: `12 / 12 PASS`
- 仕様境界: PASS
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件
- source進捗整合: FAIL
  - 主source冒頭 `## 状態` が解説本文完成時点のまま
  - 主source末尾 `## 次工程` が解説PDF作成のまま
  - 練習source末尾 `## 次工程` が練習PDF作成のまま

判定: `NEEDS_REVISION / IN_PROGRESS`。

技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、完成後独立再解答結果は変更しない。

## Topic 11 旧進捗記録同期

初回最終QAでFAILだった旧進捗記録3箇所だけを現在地へ同期した。

- 主source冒頭 `## 状態`: 完成教材・独立再解答完了、最終QA再判定待ちへ同期
- 主source末尾 `## 次工程`: `Topic 11の最終QAを再判定` へ同期
- 練習source末尾 `## 次工程`: `Topic 11の最終QAを再判定` へ同期
- 技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、完成後独立再解答結果は変更なし
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件

判定: `topic_11_source_progress_sync_complete / IN_PROGRESS`。

## Topic 11 最終QA再判定

初回FAIL原因の解消を確認し、最終QAを再判定した。

- 必須成果物実在: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 練習QA: `12 / 12 PASS`
- 表示QA・成果物実在: PASS
- source進捗整合: PASS
- 教材外知識補完0件
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件

判定: `PASS / completed`。

## Topic 12 固定仕様範囲

系列 `SPEC.md` の Topic 12「電気数学総合」だけを対象とする。

扱う:
- Topics 01〜11で導入済みの数学を、理論・電力・機械の代表問題へ横断的に接続する
- 問題文から既知量・未知量・単位・必要な数学を抽出する
- 単位、三角関数、複素数・フェーザ、微分・積分、指数関数、グラフを必要な問題で再利用する
- 一つの問題へ全項目を無理に詰め込まず、複数の代表問題で数学の役割を整理する

既習事項として使用する:
- Topics 01〜11の全内容
- 完了済みの理論・電力・機械系列の基本公式・機器知識

このTopicで新規に体系化しない:
- ラプラス変換
- 伝達関数
- ボード線図
- PID等の制御理論体系
- フーリエ級数・フーリエ変換
- 偏微分方程式・高度な微分方程式解法
- 新しい機器設計論・発電設備設計論
- 法規科目固有の規定
- 未確認の新幹線実車値・設備仕様

## Topic 12 制作前EXAM_ALIGNMENT

主source:
`topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive.md`

令和8年度上期の公式問題を直近年度として確認し、品質ゲート対象を次の5問で固定した。

- R8上 理論 問9: R・L・Cを含む単相3線式交流回路。複素インピーダンス・フェーザ合成・絶対値
- R8上 理論 問17: 環状コイル。正弦波・周波数・電磁誘導・微分・比例関係
- R8上 電力 問15: 揚水発電。単位・百分率・効率・電力/電力量・流量/時間
- R8上 機械 問15: 三相同期電動機。三相電力・同期速度・角速度・トルク・フェーザ
- R8上 機械 問16: 三相ダイオード全波整流。三相正弦波・線間電圧・波形・定積分・平均値・脈動率

固定5問から逆算した必須説明20項目を主sourceへ記録済み。

参考教材は複数系統を確認済み。
- 電気技術者試験センター公式過去問題
- e-sysnet: 単相交流並列回路、電磁誘導、水力・揚水発電、三相同期電動機
- 電験三種まとめました: 揚水発電の同型問題
- 電気主任技術者のナレッジノート: R8上機械の説明粒度確認

ブラインド条件維持:
- R8上 理論 問10は Topic 10の品質ゲートで既に使用し、保存済み独立解答・公式正答が存在するためTopic 12では再利用しない
- Topic 12の固定5問には保存済み正答を持つ既存ゲート問題を含めない
- 個別の選択肢番号・数値解は制作前独立解答節にのみ保存し、完成後独立再解答を確定するまでは参照しない

固定範囲外として除外した主な候補:
- R8上 機械 問13: 伝達関数・制御理論体系が必要
- R8上 電力 問16: 送電線の幾何・機械計算を件数合わせで追加しない
- R8上 理論 問14: 固定5問より数学の横断接続が少ないため追加しない
- 法規科目計算: SPECの理論・電力・機械横断から外れるため追加しない

R8上 電力 問15は Topic 09では水力設備知識が固定範囲外だったため除外したが、Topic 12では完了済み電力系列を前提に数学を横断接続するため採用する。水力発電設備自体を新規体系化しない。

制作前EXAM_ALIGNMENT判定: `PASS / EXAM_ALIGNMENT_COMPLETE`。

固定EXAM_ALIGNMENT変更0件。保存済み正答を持つ問題の再利用0件。伝達関数等の未導入数学追加0件。法規固有論点追加0件。未確認新幹線実値追加0件。

## Topic 12 制作前独立解答

固定5問を公式解答参照前に独立解答し、答案確定後に電気技術者試験センターの公式解答と照合した。

結果: `5 / 5問・9 / 9答案要素 PASS`。

- 理論 問9: PASS
- 理論 問17(a)(b): PASS / PASS
- 電力 問15(a)(b): PASS / PASS
- 機械 問15(a)(b): PASS / PASS
- 機械 問16(a)(b): PASS / PASS
- 問題要求・使用式・途中計算・正答根拠: 全件確認
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外補完0件
- 保存済み正答の事前参照0件

完成後独立再解答のブラインド条件を守るため、個別の選択肢番号・数値解・導出はHANDOFFには保存しない。詳細履歴は主sourceの `## 制作前独立解答・公式解答照合` 節にのみ残し、完成後独立再解答を確定するまでは参照しない。

判定: `PASS / PREPRODUCTION_INDEPENDENT_ANSWER_COMPLETE`。

## Topic 12 解説本文＋3段階例題

主sourceへ固定必須説明20項目を `20 / 20` 実装し、固定5過去問を `5 / 5` 教材内マッピングした。

本文で扱った主な接続:
- 総合問題の既知量・未知量・単位・必要数学の抽出
- SI接頭語、百分率、次元、比例・反比例、有効数字
- 正弦波、実効値、周波数、120°位相差、三相電力
- RLC複素インピーダンス、フェーザ合成、絶対値
- `e=-N dΦ/dt` と `E∝fΦ_m`
- `E=∫Pdt`、効率、揚水の損失水頭、`Q_gT_g=Q_pT_p`
- `n_s=120f/p`、`ω=2πn/60`、`P=ωT`
- 周期波形の最大・最小・代表区間積分・平均値
- Topic 10の指数一次過渡の既習事項としての再接続
- 未確認実車値を使わない新幹線側の数学接続整理

3段階例題:
- 基礎: 正弦波磁束の微分 → `E_m≈125.7 V`、`E≈88.9 V`
- 本試験標準: 三相同期電動機 → `n_s=1500 min^-1`、`P_out≈49.9 kW`、`T≈318 N·m`
- 複合・ひっかけ: 三相整流波形 → `V_LL≈207.8 V`、`V_max≈293.9 V`、`V_min≈254.6 V`、`V_avg≈280.7 V`、`δ≈0.140`

例題独立再計算 `3 / 3 PASS`。

固定EXAM_ALIGNMENT変更0件。伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件。未確認新幹線実車値追加0件。

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`。

## Topic 12 解説PDF

主sourceを正本として次を反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_explanation.pdf`
- A4縦6ページ
- 200 dpi表示QA `6 / 6 PASS`
- 文字抽出QA `PASS`
- 固定必須説明 `20 / 20`
- 3段階例題の数値整合 `3 / 3 PASS`
- 固定5過去問への教材内対応 `5 / 5`
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件
- 未確認の新幹線実車値追加0件

判定: `topic_12_explanation_pdf_complete / IN_PROGRESS`。

## Topic 12 練習問題source

次をGitHub正本へ反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_practice.md`
- 全12問・全問五肢択一
- 基礎3 / 標準7 / 複合2
- 数値・論理独立再計算 `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- 固定5過去問への接続 `5 / 5 PASS`
- 固定必須説明20項目への練習接続 `20 / 20 PASS`
- 解答解説は全問で使用式・理由・代入・中間計算・最終値または判断根拠・検算を記載
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件
- 未確認の新幹線実車値追加0件

練習source判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

## Topic 12 練習PDF

練習問題sourceを正本として次をGitHub正本へ反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_practice.pdf`
- A4縦6ページ
- 200 dpi表示QA `6 / 6 PASS`
- 文字抽出QA `PASS`
- 全12問・全問五肢択一、解答・完全解説付き
- 練習sourceの正答・数値との整合 `12 / 12 PASS`
- 固定5過去問への接続 `5 / 5`
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件
- 未確認の新幹線実車値追加0件

判定: `topic_12_practice_pdf_complete / IN_PROGRESS`。

## Topic 12 解説画像PowerPoint

主sourceと完成済み教材の固定範囲だけを使い、次をGitHub正本へ反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_images.pptx`
- 16:9・5枚
- 200 dpi表示QA `5 / 5 PASS`
- overflow `0件`
- PPTX ZIP整合性 `PASS`
- 総合解法順序、正弦波→フェーザ→RLC、正弦波微分→電磁誘導、揚水・三相同期機の量の鎖、三相整流波形→定積分平均を図解
- 固定5過去問への接続 `5 / 5`
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件
- 未確認の新幹線実車値追加0件

判定: `topic_12_explanation_images_complete / IN_PROGRESS`。

## Topic 12 完成後独立再解答 ブラインドゲート

次をGitHub正本へ反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_blind_gate.md`
- 判定: `BLIND_REANSWER_READY / IN_PROGRESS`
- 固定品質ゲート5問は変更なし
- 固定EXAM_ALIGNMENT・教材成果物・問題・正答は変更なし
- HANDOFFには制作前独立解答の個別正答・数値解・導出を保存しない状態を維持
- 主sourceの制作前独立解答節は、完成後独立解答を確定するまで参照しない
- 伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件
- 法規固有論点追加0件
- 未確認の新幹線実車値追加0件

判定: `topic_12_blind_gate_ready / IN_PROGRESS`。

## Topic 12 完成教材だけでの公式過去問独立再解答

次をGitHub正本へ反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_independent_reanswer.md`
- 前回のブラインド汚染実行は無効扱いのまま、本実行では保存済み個別正答を含む主source区間を参照せずに固定5問の答案を先に確定
- 固定品質ゲート5問は変更なし
- 公式解答照合 `5 / 5問・9 / 9答案要素 PASS`
- 教材外知識補完0件
- 固定EXAM_ALIGNMENT変更0件
- 伝達関数・ボード線図・PID・フーリエ解析等の固定範囲外追加0件
- 法規固有論点追加0件
- 未確認の新幹線実車値追加0件

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`。

Topic 12はまだ `completed` としない。

## Topic 12 最終QA（初回）

次をGitHub正本へ反映した。

- `topics/12_electrical_math_comprehensive/12_electrical_math_comprehensive_final_qa.md`
- 必須成果物実在: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立検証: `5 / 5問・9 / 9答案要素 PASS`
- 完成後独立再解答: `5 / 5問・9 / 9答案要素 PASS`
- 練習QA: `12 / 12 PASS`
- 表示QA・成果物実在: PASS
- 仕様境界: PASS
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件
- source進捗整合: FAIL
  - 主source冒頭 `## 状態` が解説本文完成時点のまま
  - 主source末尾 `## 次工程` が解説PDF作成のまま
  - 練習source末尾 `## 次工程` が練習PDF作成のまま

判定: `NEEDS_REVISION / IN_PROGRESS`。

技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、完成後独立再解答結果は変更しない。

## Topic 12 旧進捗記録同期

初回最終QAでFAILだった旧進捗記録3箇所だけを現在地へ同期した。

- 主source冒頭 `## 状態`: 完成教材・独立再解答完了、最終QA再判定待ちへ同期
- 主source末尾 `## 次工程`: `Topic 12の最終QAを再判定する` へ同期
- 練習source末尾 `## 次工程`: `Topic 12の最終QAを再判定する` へ同期
- 技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、完成後独立再解答結果は変更なし
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件

判定: `topic_12_source_progress_sync_complete / IN_PROGRESS`。

## Topic 12 最終QA再判定

初回FAIL原因の解消を確認し、最終QAを再判定した。

- 必須成果物実在: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立検証: `5 / 5問・9 / 9答案要素 PASS`
- 完成後独立再解答: `5 / 5問・9 / 9答案要素 PASS`
- 練習QA: `12 / 12 PASS`
- 表示QA・成果物実在: PASS
- source進捗整合: PASS
- 教材外知識補完0件
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件
- 未確認実車値追加0件

判定: `PASS / completed`。

Topic 12完了により `09_electrical_math_3` は `12 / 12 completed`。

## 次工程

MASTER_SPECの制作順では次は `10_electrical_math_2`。GitHub正本の同系列STATUSでは Topic 16「数値微分・数値積分」の解説画像PowerPoint＋表示QAが次工程。