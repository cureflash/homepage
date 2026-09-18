# Topic 14 - 新幹線の力率と電圧をどう維持する？

更新日: 2026-09-19

## 状態

`topic_14_source_progress_sync_complete`

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋PDF QA、練習問題・完全解説source、練習PDF＋PDF QA、PowerPoint作成、修正版learner-facing成果物に対する完成後blind独立再解答まで実施済み。完成後blindは固定5問・21答案要素を `21 / 21 PASS`。2026-09-19の最終QAでは技術内容・過去問対応品質ゲートはPASSしたが、進捗記録整合、現行GitHub正本PowerPointのQA指紋整合、Web公開にblockerがあった。本runで主source・解説source・練習sourceの進捗記録を現行工程へ同期した。残りは現行GitHub正本PowerPointの再QAとWebカタログ登録であり、Topic 14はまだ `completed` ではない。

成果物:
- `14_power_factor_voltage_control_explanation.md`
- `14_power_factor_voltage_control_explanation.pdf`
- `14_power_factor_voltage_control_explanation_pdf_qa.md`
- `14_power_factor_voltage_control_practice.md`
- `14_power_factor_voltage_control_practice.pdf`
- `14_power_factor_voltage_control_practice_pdf_qa.md`
- `14_power_factor_voltage_control_images.pptx`
- `14_power_factor_voltage_control_powerpoint_qa.md`
- `14_power_factor_voltage_control_blind_reanswer_20260919.md`
- `14_power_factor_voltage_control_final_qa.md`

## SPEC固定範囲

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` のTopic 14だけを正本とし、範囲を追加しない。

### 扱う内容

- 有効電力
- 無効電力
- 皮相電力
- 力率
- 電圧制御
- 無効電力補償
- コンデンサ
- リアクトル
- 電圧変動
- P-Q関係

### 計算・可視化

- 力率―線路電流
- 力率―損失
- 無効電力―受電点電圧

### 前提として再利用する既習事項

Topic 01〜13で扱った複素電力、三相交流、フェーザ、線路インピーダンス、電圧降下、変圧器％インピーダンス、送受電端電圧、簡易電力潮流を前提として再利用する。送電線静電容量と軽負荷時の電圧上昇は、固定過去問を解くために既習の線路特性から接続する範囲だけを使い、Topic 14の新規仕様として送電線理論を再展開しない。

### このTopicでは扱わない後続論点

- 回生、逆潮流、蓄電、電力融通（Topic 15）
- 短絡・地絡故障計算（Topic 16）
- 保護リレー、遮断器、保護協調（Topic 17）
- 雷サージ、進行波、絶縁協調（Topic 18）
- 電力系統安定度、P-V曲線による安定度判定（Topic 20）
- 周波数制御、負荷配分、経済運用（Topic 21）

未確認の新幹線実設備の力率、調相設備容量、受電点電圧変動量を真値として置かない。教材計算で数値を設定する場合は仮定値と明記する。

# EXAM_ALIGNMENT

資格: 第二種電気主任技術者

系列の主対象科目:
- 一次試験: 電力
- 二次試験: 電力・管理

正式品質ゲートに採用する科目:
- 一次試験: 電力、法規
- 二次試験: 電力・管理

対象論点:
- `S=P+jQ`、`|S|=sqrt(P^2+Q^2)` と力率 `cosφ=P/|S|`
- 遅れ・進み無効電力とP-Q関係
- 力率改善前後の無効電力差と必要コンデンサ容量
- 力率改善による線路電流・電力損失・電圧降下の変化
- 分路リアクトルによる進み無効電力の吸収と電圧上昇抑制
- 送受電端電圧、線路・変圧器リアクタンス、負荷P/Qを用いた電圧計算
- 指定受電端電圧を保つために必要な無効電力補償量の計算

## 直近年度優先の候補確認

公式正本:
- https://www.shiken.or.jp/chief/second/qa/
- 参照日: 2026-09-18

確認結果:
- 令和8年度一次「電力」問2: 調相設備を扱うが、問題全体ではコンデンサ・リアクトルの保護リレーと内部故障保護まで要求し、Topic 17の保護範囲を先取りするため正式採用しない。
- 令和8年度一次「電力」問3: 無効電力補償を含むが、P-V曲線と電圧安定性が問題全体の中心で、Topic 20の安定度範囲へ広がるため正式採用しない。
- 令和7年度一次「電力」・二次「電力・管理」: Topic 14固定範囲だけで問題全体を扱える直接問題を確認できず、件数合わせのため周辺問題を採らない。
- 令和6年度一次「電力」問5: 軽負荷送電線の電圧上昇、充電電流、フェーザ、分路リアクトルを一体で問うため採用。
- 令和5年度二次「電力・管理」問4: 有効・無効電力と配電線電圧を計算し、指定電圧を保つためのリアクトル容量を求めるため採用。
- 令和4年度一次「法規」問4: 電力用コンデンサ、分路リアクトル、電圧上昇・電圧降下、力率改善容量をTopic 14固定範囲内で直接問うため科目横断で採用。
- 令和2年度二次「電力・管理」問6: 負荷増設時の受電設備容量、力率、必要コンデンサ容量を途中式付きで求めるため採用。
- 平成23年度二次「電力・管理」問3: 線路・変圧器を含む受電端のP-Qと電圧を求め、指定受電端電圧に調整する調相設備種別・容量を求めるため採用。

### 科目横断採用の根拠

令和4年度一次「法規」問4は、科目名は法規だが、問題全体が有効・無効・皮相電力、力率、電圧変動、コンデンサ、リアクトル、力率改善容量というTopic 14固定事項で構成される。一次「電力」に限定して周辺問題を追加するより、上位仕様の「過去問から逆算」「固定範囲外を追加しない」を優先する。

## 正式固定する公式過去問

### 1. 令和6年度 第二種一次試験「電力」問5

公式問題:
https://www.shiken.or.jp/chief/upload/20240818_ch_second_q02.pdf

公式解答:
https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf

要求知識・解法:
- 軽負荷時に線路静電容量による充電電流が電圧へ与える影響を判断する
- 受電端電圧と送電端電圧の大小関係をフェーザで説明する
- 電圧上昇を抑えるために分路リアクトルを用いる理由を説明する
- コンデンサ性・リアクトル性の無効電力の向きを区別する
- 既習の送電線特性をTopic 14の無効電力・電圧制御へ接続する

設問型: 一次・多肢選択（5空欄）

答案要素: `5`

境界:
- 送電線の詳細な分布定数解析を新規主題にしない。
- サージ・絶縁協調へ広げない。

### 2. 令和4年度 第二種一次試験「法規」問4

公式問題:
https://www.shiken.or.jp/chief/upload/20220820_ch_second_q04.pdf

公式解答:
https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf

要求知識・解法:
- 静電容量増大と軽負荷時の受電端電圧上昇の関係を説明する
- 分路リアクトルによる電圧・無効電力調整を説明する
- 並列コンデンサによる力率改善、電圧降下抑制、損失低減を結び付ける
- `Q=P tanφ` を使い、改善前後の無効電力差から必要コンデンサ容量を求める
- コンデンサとリアクトルの役割を混同しない

設問型: 一次・多肢選択（5空欄）

答案要素: `5`

境界:
- 法令条文・保安規程を新規主題にしない。
- 直列リアクトルや消弧リアクトルを別テーマとして展開しない。

### 3. 令和5年度 第二種二次試験「電力・管理」問4

公式問題:
https://www.shiken.or.jp/chief/upload/20231112_ch_second_q01.pdf

公式標準解答:
https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf

要求知識・解法:
- 三相有効電力、無効電力、力率からP-Qを整理する
- 線路インピーダンスとP-Qから送受電端の電圧関係を計算する
- 発電・負荷条件が変わった後も指定端電圧を維持する条件を立てる
- 必要なリアクトル容量を計算する

設問型: 二次・記述計算

答案要素: `2`（(1)送電端電圧、(2)必要リアクトル容量）

境界:
- 逆潮流・回生を一般論として展開しない。
- 問題条件内の有効電力方向だけを扱い、Topic 15の逆潮流教材へ広げない。

### 4. 令和2年度 第二種二次試験「電力・管理」問6

公式問題:
https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf

公式標準解答:
https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

要求知識・解法:
- 複数負荷の有効・無効電力を合成する
- 受電設備容量制約から不足する力率改善量を求める
- 改善後の総合力率を求める
- P-Qベクトルで追加負荷と補償無効電力の関係を表す
- 目標力率から必要コンデンサ容量を逆算する

設問型: 二次・記述計算・ベクトル図

答案要素: `4`（(1)最小追加コンデンサ容量、(1)総合力率、(2)ベクトル図・角度、(3)目標力率用コンデンサ容量）

境界:
- 受電設備の保護・契約電力・料金計算へ広げない。

### 5. 平成23年度 第二種二次試験「電力・管理」問3

公式問題:
https://www.shiken.or.jp/chief/upload/20111127_ch_second_q01.pdf

公式標準解答:
https://www.shiken.or.jp/chief/upload/20111127_ch_second_a01.pdf

要求知識・解法:
- 変圧器％リアクタンスを指定側のオーム値へ換算する
- 線路リアクタンスと変圧器リアクタンスを含む送受電端電圧関係を立てる
- 有効電力と位相条件から負荷無効電力を求める
- 指定受電端電圧へ変更するために、コンデンサかリアクトルかをP-Qと電圧の関係から判定する
- 必要な無効電力補償容量を求める

設問型: 二次・記述計算

答案要素: `5`（(1)変圧器リアクタンス、(2)一次側電圧、(2)負荷無効電力、(3)調相設備種別、(3)容量）

境界:
- ％インピーダンスの一般論はTopic 08の既習事項として再利用し、再展開しない。
- 故障計算・短絡容量へ広げない。

## 正式品質ゲート

正式固定問題: `5問`

- 一次: `2問 / 10答案要素`
- 二次: `3問 / 11答案要素`
- 合計: `5問 / 21答案要素`
- 二次記述・計算問題: `3問`
- 直近年度優先確認: `PASS`
- Topic 14固定範囲外の問題による件数水増し: `0件`

制作前blind独立再解答は `20 / 21 PASS`。不足1答案要素は解説sourceで補強し、練習問8・問12で同型再訓練を追加した。修正前完成後blindはH23二次問3 (2a)のみ不足して `20 / 21 PASS` だったが、電圧側復元手順をlearner-facing成果物へ補強後、2026-09-19に固定5問・21答案要素を再実施して `21 / 21 PASS`。記録は `14_power_factor_voltage_control_blind_reanswer_20260919.md`。

## 参考教材

過去問要求の論点分解と解法確認にのみ用いる。文章・図・例題は複製しない。

- 基礎からわかる電気技術者の知識と資格「力率補正と送電電力」
  - https://e-sysnet.com/power_factor/
  - 参考観点: `P-Q-S`、力率、力率改善による電流・損失低減
- 基礎からわかる電気技術者の知識と資格「変電所に設置されている調相設備」
  - https://e-sysnet.com/synchronization/
  - 参考観点: コンデンサ、分路リアクトル、無効電力と電圧制御
- 電験王2「R6 一次 電力 問5」
  - https://denken-ou.com/c2/denryokur6-5/
- 電験王2「R4 一次 法規 問4」
  - https://denken-ou.com/c2/houkir4-4/
- 電験王2「R5 二次 電力・管理 問4」
  - https://denken-ou.com/c2/denryokukanrir5-4/
- 電験王2「R2 二次 電力・管理 問6」
  - https://denken-ou.com/c2/denryokukanrir2-6/

参照日: 2026-09-18。e-sysnet.com と電験王2の2系統を比較した。正答・試験範囲の最終権威は電気技術者試験センターの公式問題・公式解答／標準解答とする。

## SPEC項目―過去問対応

| SPEC項目 | 主な固定過去問 | 扱い |
|---|---|---|
| 有効電力 | R5二次 問4、R2二次 問6、H23二次 問3 | P-Q計算と電圧条件の既知量として扱う |
| 無効電力 | 全5問 | 遅れ・進み、補償前後、電圧との関係を扱う |
| 皮相電力 | R2二次 問6、R4一次 問4 | `|S|=sqrt(P^2+Q^2)` と設備容量制約へ接続 |
| 力率 | R4一次 問4、R2二次 問6 | `cosφ=P/|S|`、`Q=P tanφ`、目標力率から補償量を求める |
| 電圧制御 | R6一次 問5、R5二次 問4、H23二次 問3 | 無効電力を調整して受電点電圧を維持する |
| 無効電力補償 | 全5問 | 補償量の符号・設備種別・容量を計算する |
| コンデンサ | R4一次 問4、R2二次 問6、H23二次 問3 | 遅れ無効電力を補償し力率・電圧を改善する |
| リアクトル | R6一次 問5、R4一次 問4、R5二次 問4、H23二次 問3 | 進み無効電力を吸収し電圧上昇を抑える |
| 電圧変動 | R6一次 問5、R4一次 問4、R5二次 問4、H23二次 問3 | P-Q・線路リアクタンスと端電圧を関連付ける |
| P-Q関係 | R4一次 問4、R5二次 問4、R2二次 問6、H23二次 問3 | 電力三角形・フェーザ・補償量計算へ接続 |

## 教材で欠落不可の説明

1. `S=P+jQ`、`|S|=sqrt(P^2+Q^2)`、`cosφ=P/|S|`、`Q=P tanφ` の意味、符号、単位をつなげて説明する。
2. 同じ有効電力Pを送るとき、力率低下で皮相電力と線路電流が増えることを説明し、SPEC指定「力率―線路電流」へ接続する。
3. 線路損失は電流の二乗に比例するため、力率改善が損失低減につながることを式で示し、SPEC指定「力率―損失」へ接続する。
4. 遅れ負荷の無効電力をコンデンサで補償する場合、改善前後の `P tanφ` の差が必要補償量になることを導出する。
5. コンデンサと分路リアクトルが無効電力と電圧へ逆方向に作用することを、符号を明示して説明する。
6. 線路・変圧器のリアクタンスを介してP-Qが端電圧へ影響することを、固定二次問題を解ける形のフェーザ式・計算手順で説明する。
7. 指定端電圧を維持する問題では、補償後のQを未知数として電圧条件へ代入し、必要補償容量と設備種別を判定する手順を示す。
8. SPEC指定「無効電力―受電点電圧」は、教材内で条件を固定した一般モデルから再生成し、実設備値と混同しない。
9. R2二次型として、設備容量制約と目標力率の二つの条件から必要コンデンサ容量を別々に求められるようにする。
10. 新幹線への接続では、未確認の実設備容量や力率を真値化せず、単相列車負荷を受ける系統でP-Qと電圧を管理する一般原理として扱う。

## 制作前EXAM_ALIGNMENT判定

- SPEC指定10項目: `10 / 10 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- 一次・二次合計5問: `PASS`
- 二次記述・計算問題1問以上: `PASS / 3問`
- 公式問題・公式解答／標準解答の存在確認: `PASS`
- 参考教材2系統以上: `PASS / e-sysnet.com + 電験王2`
- 直近年度優先: `PASS`
- Topic 15以降の先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`
- 判定: `PASS / PREPRODUCTION_EXAM_ALIGNMENT_COMPLETE`

## 解説source進捗

- source: `14_power_factor_voltage_control_explanation.md`
- SPEC固定10項目: `10 / 10 covered`
- SPEC固定3可視化: `3 / 3 source data defined`
- 固定5問・21答案要素: `21 / 21 mapped`
- 制作前blind不足1要素: `1 / 1 explanation strengthened`
- 修正版完成後blind独立再解答: `21 / 21 PASS`
- 3段階例題: `3 / 3`
- Topic 15以降の先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`
- stage: `EXPLANATION_SOURCE_SYNCED_WITH_FINAL_QA / IN_PROGRESS`

## 解説PDF進捗

- PDF: `14_power_factor_voltage_control_explanation.pdf`
- QA: `14_power_factor_voltage_control_explanation_pdf_qa.md`
- A4縦: `5ページ`
- 200 dpi表示: `5 / 5 PASS`
- 文字抽出: `PASS / U+FFFD 0件`
- 3段階例題独立再計算: `3 / 3 PASS`
- 固定5問・21答案要素: `21 / 21 covered`
- 制作前blind不足1要素: `1 / 1 改善説明確認`
- H23二次問3 (2a) の電圧側復元: `PASS`
- stage: `EXPLANATION_PDF_COMPLETE`

## 練習source進捗

- source: `14_power_factor_voltage_control_practice.md`
- 全15問: 基礎4、本試験標準8、複合・応用3
- 二種一次型五肢択一: `10問`
- 二種二次型記述: `5問`
- 固定5問・21答案要素: `21 / 21 mapped`
- SPEC固定10項目: `10 / 10 covered`
- 制作前blind不足1要素: 問8・問12で再訓練
- 修正版完成後blind独立再解答: `21 / 21 PASS`
- Topic 15以降の先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`
- stage: `PRACTICE_SOURCE_SYNCED_WITH_FINAL_QA / IN_PROGRESS`

## 練習PDF進捗

- PDF: `14_power_factor_voltage_control_practice.pdf`
- QA: `14_power_factor_voltage_control_practice_pdf_qa.md`
- A4縦: `7ページ`
- 200 dpi表示: `7 / 7 PASS`
- 文字抽出: `PASS / U+FFFD 0件`
- 収録問題・完全解説: `15 / 15 PASS`
- 数値・論理独立再計算: `15 / 15 PASS`
- 一次型10問正答一意性: `10 / 10 PASS`
- 固定5問・21答案要素: `21 / 21 covered`
- 制作前blind不足1要素: 問8・問12で再訓練PASS
- stage: `PRACTICE_PDF_COMPLETE`

## PowerPoint進捗

- PPTX: `14_power_factor_voltage_control_images.pptx`
- QA: `14_power_factor_voltage_control_powerpoint_qa.md`
- 旧QA対象: `39281 bytes`, SHA-256 `3e8088524754227fbfddf027784cf2c5961fba01646b7ded626932eb70748047`
- 現行GitHub正本: `15002 bytes`, blob `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`
- 指紋不一致のため現行PPTXは `REQUIRES_REQA / CURRENT_BINARY_UNVERIFIED`
- 旧QAの4スライド表示PASS、overflow 0、PDF変換等の結果を現行バイナリへ流用しない。
- 固定5問・21答案要素と教材技術範囲は変更しない。

## 完成後blind独立再解答（修正版成果物、2026-09-19）

- record: `14_power_factor_voltage_control_blind_reanswer_20260919.md`
- R6一次「電力」問5: `5 / 5 PASS`
- R4一次「法規」問4: `5 / 5 PASS`
- R5二次「電力・管理」問4: `2 / 2 PASS`
- R2二次「電力・管理」問6: `4 / 4 PASS`
- H23二次「電力・管理」問3: `5 / 5 PASS`
- 一次: `10 / 10 PASS`
- 二次: `11 / 11 PASS`
- 合計: `5 / 5問・21 / 21答案要素 PASS`
- 制作前blind不足「最低必要容量を不足側へ丸めない」: `PASS / 改善維持`
- 前回完成後blind blocker H23二次問3 (2a) `66 kV側等価値 → 154 kV一次側`: `PASS / 改善確認`
- 固定EXAM_ALIGNMENT変更: `0件`
- 仕様追加: `0件`
- stage: `COMPLETION_BLIND_RERUN_PASS / IN_PROGRESS`

## 最終QA進捗

- record: `14_power_factor_voltage_control_final_qa.md`
- 技術内容・過去問対応品質ゲート: `PASS`
- 一次: `10 / 10 PASS`
- 二次: `11 / 11 PASS`
- 合計: `21 / 21 PASS`
- Topic全体判定: `NEEDS_REVISION / IN_PROGRESS`
- 本runで主source・解説source・練習sourceの旧進捗記録を現行工程へ同期済み。
- 残りblocker: `2件`
  1. 現行GitHub正本PowerPointを再QAし、現行blobに対応するQA記録へ更新する。
  2. `qualifications/denken-shinkansen/catalog.json` にTopic 14を登録する。

## 次工程

現行GitHub正本 `14_power_factor_voltage_control_images.pptx` を再QAし、現行blobに対応する `14_power_factor_voltage_control_powerpoint_qa.md` へ更新する。その後、Webカタログ登録、最終QA再判定を行う。全件PASSまではTopic 14を `completed` にせず、Topic 15へ進めない。