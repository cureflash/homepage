# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `15 / 22`
- current_status: `topic_16_practice_pdf_complete`
- last_completed_topic: `15 新幹線の補機モーターを設計する`
- active_topic: `16 N700Sバッテリーから主回路へ電力を送る`
- next_start: Topic 16 解説画像PowerPoint作成

## 完了テーマ
- [x] Topic 01〜15 最終QA `PASS / completed`
- [ ] Topic 16 `IN_PROGRESS` — 練習PDF完成

## Topic 15 固定範囲
系列 `SPEC.md` の次だけを扱う。

- ポンプ
- ファン
- コンプレッサ
- 負荷特性
- 所要動力
- 効率
- インバータ駆動
- 可変速運転
- 相似則 `Q∝N`, `H∝N²`, `P∝N³`

境界:
- Topic 05〜09の誘導機等価回路、最大トルク、PWM回路詳細、ベクトル制御内部理論を再制作しない。
- Topic 16以降の蓄電池・DCリンク・伝達関数・過渡応答・PID・安定判別・再粘着制御を先取りしない。
- 未確認の新幹線補機定格値を実車値として置かない。
- コンプレッサへファン・ポンプの三乗則を条件確認なしで適用しない。

## Topic 15 固定EXAM_ALIGNMENT
一次3問＋二次記述2問、計5問・8答案要素を品質ゲート対象とする。

- R06 一次 機械 問2 (5) — 1答案要素
- H25 一次 機械 問3 (1),(2) — 2答案要素
- H23 一次 機械 問1 (1),(2) — 2答案要素
- R04 二次 機械・制御 問3 (6) — 2答案要素
- R07 二次 機械・制御 問2 (1)の定格トルク部分 — 1答案要素

完成後独立再解答は公式解答・標準解答を開く前に教材だけで実施し、その後公式照合した。

## Topic 15 成果物
- [x] 制作前EXAM_ALIGNMENT
- [x] 解説source `topics/15_auxiliary_motor_design/15_auxiliary_motor_design.md`
- [x] 解説PDF `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_explanation.pdf`
- [x] 練習問題source `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_practice.md`
- [x] 練習PDF `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_practice.pdf`
- [x] 解説画像PowerPoint `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_images.pptx`
- [x] PowerPoint QA `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_powerpoint_qa.md`
- [x] 独立再解答前ゲート `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_blind_reanswer_gate.md`
- [x] 完成後独立再解答 `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_independent_reanswer.md`
- [x] 最終QA記録 `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_final_qa.md` — `PASS / completed`

## Topic 15 解説画像PowerPoint
- [x] 16:9・4枚
- [x] 補機負荷→回転機基本式→軸出力→効率→電気入力→インバータ容量の計算連鎖を可視化
- [x] ファン・ポンプ相似則 `Q∝N`, `H∝N²`, `P∝N³` を可視化
- [x] `V/f` 一定、電圧指令、電気周期 `T_e=1/f`、同期速度と実回転速度の区別を可視化
- [x] `T_M=Jα+T_L` による連続負荷・加速負荷の分離と容量判定を可視化
- [x] 120 dpi・1601×900 全4枚表示QA `4 / 4 PASS`
- [x] 文字・数式・図の欠落、重なり、切れ `0件`
- [x] overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] PPTX ZIP整合性 PASS
- [x] 固定一次3問＋二次2問・8答案要素を維持
- [x] コンプレッサへの三乗則無条件適用 `0件`
- [x] Topic 05〜09の詳細再制作 `0件`
- [x] Topic 16以降先取り `0件`
- [x] 未確認新幹線補機実値の真値化 `0件`
- [x] Git blob SHA `af72dc7052484b5e368a1ab16389e4571caa7d3b`

## Topic 15 独立再解答前ゲート
- [x] `MASTER_SPEC.md` の必須先読み対象と `EXAM_ALIGNMENT_SPEC.md` のblind再解答条件を再監査
- [x] 最新main、`STATUS.md` / `HANDOFF.md` / main source / 練習source / PowerPoint QA / Topic 15成果物一覧を再監査
- [x] 既存のPowerPoint成果をreconcileし、重複制作 `0件`
- [x] 固定5過去問の公式正答番号・標準解答本文の保存 `0件`
- [x] 固定5過去問の完成済み個別解答・数値解・導出結果の保存 `0件`
- [x] 固定一次3問＋二次2問・8答案要素、教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更なし
- [x] コンプレッサへの三乗則無条件適用、Topic 16以降先取り、未確認新幹線補機実値追加 `0件`
- [x] 判定 `BLIND_REANSWER_READY`

## Topic 15 完成後独立再解答
- [x] 公式解答・標準解答を開く前に完成教材だけで固定5問・8答案要素を再解答
- [x] R06 一次 機械 問2 (5): `V_1/f_1=一定` → `1 / 1 PASS`
- [x] H25 一次 機械 問3 (1),(2): 回転角速度・過負荷耐量 → `2 / 2 PASS`
- [x] H23 一次 機械 問1 (1),(2): 一次周波数・励磁電流 → `2 / 2 PASS`
- [x] R04 二次 機械・制御 問3 (6): 25 Hzで信号振幅 `0.45`、周期 `40 ms` → `2 / 2 PASS`
- [x] R07 二次 機械・制御 問2 (1) 定格トルク: `181 N·m` → `1 / 1 PASS`
- [x] 公式解答・標準解答照合 `8 / 8 PASS`
- [x] 教材外知識補完 `0件`
- [x] コンプレッサへの三乗則無条件適用、Topic 05〜09詳細再制作、Topic 16以降依存、未確認実値依存 `0件`
- [x] 判定 `PASS / independent_reanswer_complete`

## Topic 15 最終QA
- [x] 必須成果物実在確認 PASS
- [x] 固定一次3問＋二次2問・8答案要素 `8 / 8 PASS`
- [x] 完成後独立再解答 `8 / 8 PASS`
- [x] 練習問題・解説PDF・練習PDF・PowerPoint QA PASS
- [x] 固定範囲境界 PASS
- [x] 前回blockerだった進捗記録3箇所を実成果物状態へ同期済み
- [x] 最終QA再実施 `PASS / completed`

## Topic 16 固定範囲
系列 `SPEC.md` の次だけを扱う。

- リチウムイオン電池
- 起電力
- 内部抵抗
- 放電電流
- 電圧降下
- Ah
- Wh
- C-rate
- DCリンク
- DC/DC変換の概念
- 変換効率

境界:
- 電池材料・電極反応・BMSを独立論点として追加しない。
- Topic 07〜10のPWM変換器・インバータ・回生の回路詳細を再制作しない。
- Topic 17以降の伝達関数・過渡応答・PID・安定判別・再粘着制御を先取りしない。
- N700Sの電池電圧、容量、セル数、内部抵抗、C-rate、効率等を一次資料未確認のまま実車値として置かない。

## Topic 16 固定EXAM_ALIGNMENT
一次4問＋二次記述1問、計5問・12答案要素を品質ゲート対象とする。

- R02 一次 機械 問4 (1),(4),(5) — 3答案要素
- H30 一次 機械 問6 (3),(4) — 2答案要素
- H26 一次 機械 問3 (1) — 1答案要素
- H18 一次 機械 問3 (1) — 1答案要素
- H23 二次 機械・制御 問3 (3),(4) — 5答案要素

固定問題の正答記号・完成済み数値解は保存せず、完成教材後に独立再解答してから公式解答・標準解答と照合する。

## Topic 16 制作前EXAM_ALIGNMENT
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link.md` を作成
- [x] R08一次「機械」まで直近年度から公式過去問を確認
- [x] 一次4問＋二次記述1問、計5問・12答案要素を固定
- [x] H23二次「機械・制御」問3を二次記述品質ゲートに含めた
- [x] R07一次「機械」問5は一般電気化学・鉛蓄電池中心で固定範囲への直接性が低いため件数合わせ採用なし
- [x] 参考教材2系統以上を確認
- [x] 未確認N700S実車値追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] 正答記号・完成済み数値解保存 `0件`
- [x] 判定 `PASS / topic_16_exam_alignment_complete`

## Topic 16 解説source
- [x] 起電力・内部抵抗・放電/充電端子電圧 `V=E∓Ir` を説明
- [x] Ah・Wh・平均電圧・C-rate・`I²r` を式、単位、逆算まで説明
- [x] H23二次型の定電流区間について、充放電電流・端子電圧波形・充放電時間を説明
- [x] 内部抵抗損と充電効率の比較を `I²r` から説明
- [x] DC/DC・DCリンク・変換効率を固定範囲内で説明
- [x] N700S自走用SCiBと駆動システムへの給電関係を東芝公式資料で確認
- [x] 基礎／本試験標準／複合の3段階例題を作成・再計算PASS
- [x] 固定12答案要素を本文へ `12 / 12` 接続
- [x] 未確認N700S実車値の真値化 `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 固定問題の個別正答記号・完成済み数値解保存 `0件`
- [x] 判定 `PASS / topic_16_explanation_source_complete`

## Topic 16 解説PDF
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation.pdf` を作成
- [x] A4縦・8ページ
- [x] 固定一次4問＋二次記述1問・12答案要素を維持
- [x] 固定12答案要素をPDFへ `12 / 12` 接続
- [x] 基礎／本試験標準／複合の3段階例題を収録し、数値再計算PASS
- [x] N700S実車事実と教材用仮定値の区別を維持
- [x] 160 dpi 全8ページ表示QA `8 / 8 PASS`
- [x] 文字・数式・表の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 未確認N700S実車値の真値化 `0件`
- [x] 固定問題の個別正答記号・完成済み数値解掲載 `0件`
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation_pdf_qa.md`
- [x] PDF SHA-256 `b9c88d84c1914d8d939356694603228b8303df38312e7f22cc5674b4ad90b3c0`
- [x] PDF Git blob SHA `ec0988d134a802f9f54f1e1f54af442e6bde23b6`
- [x] 判定 `PASS / topic_16_explanation_pdf_complete`

## Topic 16 練習source
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.md` を作成
- [x] 一次試験型10問、全問五肢択一
- [x] 二次試験型5問、途中式・前提・単位・検算または論証付き
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 固定一次4問＋二次記述1問・12答案要素へ `12 / 12` 接続
- [x] H23二次型の充放電電流・端子電圧波形・充放電時間・`I²r` 損失比較を記述式で収録
- [x] 未確認N700S実車値の真値化 `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 固定問題の個別正答記号・完成済み数値解掲載 `0件`
- [x] 判定 `PASS / topic_16_practice_source_complete`

## Topic 16 練習PDF
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.pdf` を作成
- [x] A4縦・5ページ
- [x] 一次10問＋二次5問の解答・解説を収録
- [x] 固定一次4問＋二次記述1問・12答案要素を維持し `12 / 12` 接続
- [x] 主要数値29チェックポイント `29 / 29 PASS`
- [x] 160 dpi 全5ページ表示QA `5 / 5 PASS`
- [x] 文字・数式・表の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] 未確認N700S実車値の真値化 `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 固定問題の個別正答記号・完成済み数値解掲載 `0件`
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice_pdf_qa.md`
- [x] PDF SHA-256 `ec0ac0e9c6e95a662f42c0a4526b4c2287c322a7bb458809e12a61319f2e93dc`
- [x] PDF Git blob SHA `ea328bb7d1f2dd4a8d3adb74e1a7a67ccaf2a4d0`
- [x] 判定 `PASS / topic_16_practice_pdf_complete`

## 今回進めた内容
Topic 16の練習PDFを作成した。一次10問＋二次5問の解答・解説を収録し、固定一次4問＋二次記述1問・12答案要素への `12 / 12` 接続を維持した。主要数値29チェックポイントは `29 / 29 PASS`、160 dpi表示QAは `5 / 5 PASS`、文字抽出QAもPASS。未確認実車定格、材料反応、BMS、チョッパ回路詳細、Topic 17以降は追加していない。

## 判定
Topic 16は `topic_16_practice_pdf_complete / IN_PROGRESS`。完成数は `15 / 22`。次は Topic 16 解説画像PowerPoint作成。
