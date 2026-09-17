# STATUS - 新幹線車両・電験三種

更新日: 2026-09-17

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 34 / 38
- current_status: `topic_35_progress_records_synced`
- last_completed_topic: `34 COMTRAC② 進路をどう自動制御する？`
- active_topic: `35 COMTRAC③ ダイヤが乱れたらどうする？`
- next_start: Topic 35の最終QAを再実施する。前回唯一FAILだった進捗記録整合を再確認し、技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果は変更しない

## 新品質ゲート進捗
- [x] 01〜34 — PASS

## 35 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、遅延、列車順序、番線変更、運転整理、情報処理、条件分岐、冗長化。

1. R7下 機械 問14 — フローチャート・変数更新・条件分岐・反復 — PASS
2. R5上 機械 問14 — フローチャート・変数更新・条件分岐・反復 — PASS
3. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮 — PASS
4. R4下 理論 問14 — 標本化・量子化・符号化・ディジタル伝送・A-D変換 — PASS
5. H26 機械 問13 — シーケンス制御・工程/手順・条件による動作・PLC — PASS

制作前独立解答: `5 / 5問 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認COMTRAC内部仕様依存: `0件`。
個別正答番号・完成導出結果は完成後blind再解答保護のため必須先読みsourceへ保存しない。

新幹線側はJR東海・JR東海情報システム公開資料で確認できるCOMTRACの運転管理、運転計画変更、遅延波及防止、第2総合指令所までを根拠とし、具体的な列車優先順位、番線変更判定式、運転整理ルール、自動化範囲、内部切替方式は断定しない。2018年JR東海資料の「複数計算機への機能分散」は故障影響範囲を小さくする構成変更として扱い、冗長化と同義にしない。

source: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management.md`

## 35 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「代入と条件分岐」／標準「変数更新と反復」／複合「標本化・量子化・条件判断」
- 固定EXAM_ALIGNMENT: `5 / 5問` 本文マッピング済み
- フローチャート: 処理→更新→判定→分岐を順に追跡
- 変数更新・反復: 更新前/更新後を分離し、反復ごとに現在値を保持
- シーケンス制御: 定めた手順・条件に従う制御として、フィードバック制御との区別を明示
- PLC: 入力を読み、記憶プログラムに従い論理・順序処理して出力する一般説明まで
- 情報伝送: 伝送路、雑音、多重化、搬送波、変調波、圧縮
- A-D変換: 標本化→量子化→符号化、`f_s>=2f_max`、`T_s=1/f_s`、`L=2^n`
- 例題再計算: `3 / 3 PASS`
- COMTRAC接続: 運転管理・運転計画変更・遅延波及防止・第2総合指令所の公開事実まで
- 具体的列車優先順位・番線変更判定式・運転整理ルール・内部切替方式追加: `0件`
- 機能分散と冗長化の混同: `0件`
- Topic 36以降先取り: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 個別正答番号・完成済み最終導出の保存: `0件`

## 35 解説PDF
- `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_explanation.pdf`
- A4縦5ページ
- 本文§1〜§15、3段階例題、固定5問の対応を収録
- 180 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `5 / 5` 反映
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`
- QA記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_explanation_pdf_qa.md`

## 35 練習source
- source: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_practice.md`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問: `5 / 5` 練習マッピング
- 独立数値・論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`

## 35 練習PDF
- PDF: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_practice.pdf`
- A4縦5ページ、全15問（基礎4／標準8／複合3）＋完全解説
- 正答位置: A/B/C/D/E各3問
- 180 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- 独立数値・論理再計算: `15 / 15 PASS`
- 固定EXAM_ALIGNMENT: `5 / 5` 接続
- 複数正答: `0件`
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`
- QA記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_practice_pdf_qa.md`

## 35 PowerPoint QA
- `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_images.pptx`
- 画面比率: `16:9`
- スライド数: `3`
- 固定EXAM_ALIGNMENT: `5 / 5問` 可視化
- 180 dpi全スライド表示QA: `3 / 3 PASS`
- overflow検査: `0件 / PASS`
- PPTX ZIP整合性: PASS
- 外部引用画像: `0件`
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`
- QA記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_images_qa.md`

## 35 完成後blind独立再解答
`5 / 5問 PASS`。
- 公式問題PDFと完成教材だけで先に全5問を導出し、全選択肢・根拠確定後に公式解答表と照合
- R7下 機械 問14: 選択肢3 — PASS
- R5上 機械 問14: 選択肢3 — PASS
- R4下 機械 問13: 選択肢3 — PASS
- R4下 理論 問14: 選択肢5 — PASS
- H26 機械 問13: 選択肢3 — PASS
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による補完: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様依存: `0件`
- 機能分散と冗長化の混同: `0件`
- 教材本文・固定EXAM_ALIGNMENT・練習問題・PDF・PowerPointは変更なし
- 記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_independent_reanswer.md`

## 35 最終QA
`NEEDS_REVISION / IN_PROGRESS`。
- 必須成果物: PASS
- 固定5過去問の完成後blind独立再解答: `5 / 5問 PASS`
- 練習問題QA: `15 / 15 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 固定範囲境界: PASS
- 進捗記録整合: FAIL
- 未完了理由: main source冒頭の状態・次工程、解説PDF QAの次工程の計3箇所が旧工程のまま
- 技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果は変更なし
- 完成数は34/38を維持
- 記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_final_qa.md`

## 35 進捗記録同期
`topic_35_progress_records_synced / IN_PROGRESS`。
- main source冒頭 `## 状態`: 実成果物・blind独立再解答完了状態へ同期
- main source `次工程`: 「解説PDF作成」から「最終QA再実施」へ同期
- 解説PDF QA `次工程`: 「練習source」から「最終QA再実施」へ同期
- 技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果: 変更なし
- 次工程: Topic 35の最終QA再実施

## 34 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・6答案要素。系列SPEC固定範囲は、進路制御、条件判定、AND、OR、NOT、真理値表、インターロック、論理回路。

1. R7上 機械 問14 — AND・OR・NOT、論理回路、出力波形 — PASS
2. R6下 機械 問18(a) — AND・OR・NOT、真理値表 — PASS
3. R6下 機械 問18(b) — 多段論理回路、条件判定 — PASS
4. R5下 機械 問14 — 真理値表から論理式 — PASS
5. R2 機械 問14 — 真理値表から論理式 — PASS
6. H27 機械 問14 — 4入力真理値表から論理式 — PASS

制作前独立解答: `5 / 5問・6 / 6答案要素 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 35範囲追加: `0件`。
未確認COMTRAC内部仕様追加: `0件`。
R6下 機械 問14 / H25 機械 問14はR7上 機械 問14との重複再出題として件数に含めない。
R6上 機械 問14はExOR・NORを要求するため固定範囲外として除外。
個別正答番号・完成導出結果は完成後blind再解答保護のため必須先読みsourceへ保存しない。

source: `topics/34_comtrac_route_control/34_comtrac_route_control.md`

## 34 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「AND・OR・NOT」／標準「多段論理回路と時間区間」／複合「許可条件・代替条件・禁止条件」
- 固定EXAM_ALIGNMENT: `5問・6答案要素 / 6答案要素` 本文マッピング済み
- AND: `Y=A·B`、OR: `Y=A+B`、NOT: `Y=NOT(A)`
- 真理値表: 2入力基本表、`n`入力の行数 `2^n`
- 多段論理回路: 中間信号へ分解し入力側から順に評価
- 入力波形: 全変化時刻で区切り、区間ごとに0/1を評価して出力波形を再構成
- 真理値表→論理式: 候補式を各行へ代入し不一致候補を除外
- 条件判定: 必要条件=AND、代替条件=OR、禁止条件=NOTの学習モデル
- インターロック: 両立してはならない動作を条件で拘束する一般原則として説明
- JR東海/JTIS公開範囲でCOMTRAC/PRCの進路制御という役割へ接続
- 具体的論理式・判定順序・実インターロック条件は学習用モデルと明記し実装事実とは断定しない
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 34 解説PDF
- `topics/34_comtrac_route_control/34_comtrac_route_control_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6答案要素の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 34 練習source / PDF
- source: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.md`
- PDF: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6答案要素: `6 / 6` 練習マッピング
- 独立論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦5ページ、180 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 34 PowerPoint QA
- `topics/34_comtrac_route_control/34_comtrac_route_control_images.pptx`
- 画面比率: `16:9`
- スライド数: `4`
- 固定5問・6答案要素: `6 / 6` 可視化
- 表示QA: `4 / 4 PASS`
- overflow検査: PASS
- PPTX ZIP整合性: PASS
- 外部引用画像: `0件`
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 34 完成後blind独立再解答 前ゲート
`BLIND_REANSWER_READY`。
- 必須先読み対象から、Topic 34固定問題と同一再出題の個別正答番号・完成済み導出結果をblind保護済み
- Topic 32のPASS判定・固定EXAM_ALIGNMENT・教材成果物は変更なし
- Topic 34の固定5問・6答案要素、教材本文、練習問題、PDF、PowerPointは変更なし
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 記録: `topics/34_comtrac_route_control/34_comtrac_route_control_blind_gate.md`

## 34 完成後blind独立再解答 試行
`RETRY_REQUIRED / NOT_COUNTED`。
- 問題本文・図表を補完する途中で、第三者解説ページおよび公式解答表の正答表示へ到達した要素が発生
- 全5問・6答案要素について「保存済み正答・公式解答を先に見ずに再解答した」と厳密に証明できないため、本試行は品質ゲートの合格件数へ算入しない
- 個別正答番号・完成導出は必須先読み対象へ保存しない
- 固定5問・6答案要素、教材本文、練習問題、PDF、PowerPointは変更なし
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 記録: `topics/34_comtrac_route_control/34_comtrac_route_control_blind_reanswer_attempt.md`

## 34 完成後blind独立再解答
`5 / 5問・6 / 6答案要素 PASS`。
- 新しいblind実行として、公式解答・第三者解説の正答表示を開く前に、公式問題PDFと完成教材だけで全6答案要素を導出
- 真理値表から論理式を選ぶ設問は、候補式の上線範囲を問題画像へ再照合してから0/1代入を実施
- 全答案要素の選択肢確定後にのみ公式解答表を開いて照合
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による補完: `0件`
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 教材本文・固定EXAM_ALIGNMENT・練習問題・PDF・PowerPointは変更なし
- 記録: `topics/34_comtrac_route_control/34_comtrac_route_control_independent_reanswer.md`

## 34 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問・6答案要素の完成後blind独立再解答: `5 / 5問・6 / 6答案要素 PASS`
- 練習問題QA: `15 / 15 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- Topic 34を `completed` とし、完成数を34/38へ更新
- 記録: `topics/34_comtrac_route_control/34_comtrac_route_control_final_qa.md`

## 33 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、列車番号、列車位置、ダイヤ、データ表現、2進数、情報処理、データ伝送。

1. R7下 機械 問14 — フローチャート・変数更新・条件分岐・反復 — PASS
2. R5上 機械 問14 — フローチャート・変数更新・条件分岐・反復 — PASS
3. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮 — PASS
4. R4下 理論 問14 — 標本化・量子化・符号化・ディジタル伝送・A-D変換 — PASS
5. R1 機械 問14 — 2進数の加減算・基数変換 — PASS

制作前独立解答: `5 / 5 PASS`。
完成後blind独立再解答: `5 / 5 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 34のAND・OR・NOT・真理値表・インターロック追加: `0件`。
Topic 35の運転整理・番線変更・冗長化追加: `0件`。
未確認COMTRAC内部仕様追加: `0件`。

source: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking.md`

## 33 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「2進数の相互変換」／標準「フローチャートの変数更新」／複合「標本化・符号化・伝送用語」
- 固定EXAM_ALIGNMENT: `5 / 5` 本文マッピング済み
- 2進数: 桁の重み、10進数との相互変換、加減算、`n` bitの表現数 `2^n`
- 情報処理: 変数、代入、更新順序、条件分岐、反復、フローチャート追跡
- A-D変換: 標本化→量子化→符号化
- 標本化条件: `f_s>=2f_max`, `T_s<=1/(2f_max)`
- データ伝送: 伝送路、雑音、多重化、搬送波、変調波、圧縮
- JR東海一次資料の公開範囲でCOMTRACの運転管理・全列車状況監視を接続
- 列車番号・列車位置・ダイヤはデータ例として扱い、COMTRAC内部実装とは断定しない
- Topic 34範囲追加: `0件`
- Topic 35範囲追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 33 解説PDF
- `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `5 / 5` 反映
- Topic 34範囲追加: `0件`
- Topic 35範囲追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 33 練習source / PDF
- source: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_practice.md`
- PDF: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問: `5 / 5` 練習マッピング
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦4ページ、180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- Topic 34範囲追加: `0件`
- Topic 35範囲追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 33 PowerPoint QA
- `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_images.pptx`
- 画面比率: `16:9`
- スライド数: `4`
- 固定5過去問: `5 / 5` 可視化
- 表示QA: `4 / 4 PASS`
- overflow検査: PASS
- PPTX ZIP整合性: PASS
- 外部引用画像: `0件`
- Topic 34範囲追加: `0件`
- Topic 35範囲追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## 33 完成後blind独立再解答 前ゲート
`BLIND_REANSWER_READY`。
- `EXAM_ALIGNMENT_SPEC.md` が要求する「保存済み正答を先に見ない」条件に合わせ、必須先読み対象からTopic 33固定5問の制作前個別正答番号・完成済み導出結果を除去済み
- 過去テーマの記録中に同じ固定問題が現れる箇所も、該当する個別正答・導出だけをblind保護対象として非表示化
- 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXは変更なし
- 記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_blind_gate.md`

## 33 完成後blind独立再解答
- R7下 機械 問14 — `(10,2)→(12,5)→(17,11)→(28,23)→(51,23)`、`A>40`で終了 → 選択肢3 — PASS
- R5上 機械 問14 — `(10,2)→(12,5)→(17,26)→(43,26)`、`A>40`で終了 → 選択肢3 — PASS
- R4下 機械 問13 — 雑音／多重化／変調波／標本化／圧縮を対応 → 選択肢3 — PASS
- R4下 理論 問14 — 時間波形表示にFFTは必須ではないため誤りは(5) → 選択肢5 — PASS
- R1 機械 問14 — `A+B=42`, `A-B=12` より `2B=30`、`B=15=(1111)_2` → 選択肢2 — PASS
- 合計: `5 / 5 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による正答補完: `0件`
- Topic 34/35範囲追加: `0件`
- 未確認COMTRAC内部仕様依存: `0件`
- 記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_independent_reanswer.md`

## 33 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5過去問の完成後blind独立再解答: `5 / 5 PASS`
- 練習問題QA: `15 / 15 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 33を `completed` とし、完成数を33/38へ更新
- 記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_final_qa.md`

## 32 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・6対象項目。系列SPEC固定範囲は、速度検出、速度照査、ブレーキ指令、フィードバック、ブロック線図、AND、OR、フェイルセーフ。

1. R8上 機械 問13 — ブロック線図・負帰還・伝達関数 — `4` — PASS
2. R7下 機械 問18(a) — 一次遅れ閉ループ伝達関数 — `2` — PASS
3. R7下 機械 問18(b) — 周波数応答・ボード線図 — `2` — PASS
4. R6下 機械 問13 — P・I・Dと定常・過渡特性 — `2` — PASS
5. R6下 機械 問14 — AND・OR・NOT、論理式、タイムチャート — PASS（個別正答はTopic 34 blind保護対象）
6. R6上 機械 問13 — シーケンス・フィードバック・インタロック — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
完成後独立再解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認新幹線ATC実車値追加: `0件`。

source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control.md`

## 32 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「一次遅れ系の折点と低周波利得」／標準「内部信号から伝達関数を求める」／複合「論理式とシーケンス判断」
- 固定EXAM_ALIGNMENT: `6 / 6` 本文マッピング済み
- 負帰還: `C/R=G/(1+GH)`
- 固定過去問型: `C/R=(1+jωT1)/(1+jωT2)` を内部信号から導出
- 一次遅れ: `W(jω)=K/(1+jωT)`、`ωc=1/T`、低周波利得 `20log10K`、折点後 `-20 dB/dec`
- P・I・D: I=定常特性改善、D=過渡特性改善、Pは両特性へ影響
- 論理回路: AND・OR・NOT、論理式、タイムチャート追跡（個別式はTopic 34 blind保護対象）
- シーケンス制御・インタロック・フェイルセーフの一般原則
- JRTT公開範囲のATC方式世代差のみ収録
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 32 解説PDF
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6対象項目の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 32 練習source / PDF
- source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.md`
- PDF: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6対象項目: `6 / 6` 練習マッピング
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦4ページ、180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

## 32 練習QA
- 問題数: `15 / 15`
- 基礎/標準/複合: `4 / 8 / 3`
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` マッピング
- 独立数値・論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF表示QA: 180 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

## 32 PowerPoint QA
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_images.pptx`
- 画面比率: `16:9`
- スライド数: `4`
- 内容: ATC速度制御の一般制御系対応、負帰還・ブロック線図、一次遅れ周波数応答とP・I・D、AND/OR/NOT・シーケンス・インタロック・フェイルセーフ
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` 可視化
- 表示QA: `4 / 4 PASS`
- overflow検査: PASS
- PPTX ZIP整合性: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

## 32 完成後独立再解答
- R8上 機械 問13 — 内部信号を連立し `C/R=(1+jωT1)/(1+jωT2)` → 選択肢4 — PASS
- R7下 機械 問18(a) — `T=0.2 s, K=10` より `C/R=10/(1+j0.2ω)` → 選択肢2 — PASS
- R7下 機械 問18(b) — 低周波利得 `20 dB`、折点 `5 rad/s`、以後 `-20 dB/dec` → 選択肢2 — PASS
- R6下 機械 問13 — I=定常特性改善、D=過渡特性改善、P=両特性へ影響 → 選択肢2 — PASS
- R6下 機械 問14 — PASS（個別正答・完成済み導出はTopic 34 blind保護対象）
- R6上 機械 問13 — シーケンス/フィードバック、有接点、インタロック、タイムチャートを対応 → 選択肢2 — PASS
- 合計: `6 / 6 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による正答補完: `0件`
- 未確認実車値依存: `0件`
- 記録: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_final_qa.md`

## 32 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問・6対象項目の完成後独立再解答: `6 / 6 PASS`
- 練習問題QA: `15 / 15 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 32を `completed` とし、完成数を32/38へ更新

## 31 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・6対象項目。系列SPEC固定範囲は、信号、周波数、情報伝送、センサ、デジタル信号、論理判断。

1. R7下 機械 問14 — フローチャートの条件分岐・反復による論理判断 — PASS（Topic 33 blind保護対象）
2. R5上 機械 問18(a) — パルス信号の動作周波数から周期を求める — `3` — PASS
3. R5上 機械 問18(b) — CPIと1命令実行時間から動作周波数を求める — `4` — PASS
4. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮 — PASS（Topic 33 blind保護対象）
5. R4下 理論 問14 — 標本化・量子化・符号化・伝送路雑音・A-D変換 — PASS（Topic 33 blind保護対象）
6. R4上 機械 問14 — センサ・アナログ/デジタル・A-D/D-A・インタフェース — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
完成後独立再解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 32の速度照査・ブレーキ指令・フィードバック・ブロック線図・AND/OR追加: `0件`。
未確認新幹線ATC実車値追加: `0件`。

source: `topics/31_atc_signal_transmission/31_atc_signal_transmission.md`

## 31 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「周期と周波数」／標準「標本化条件」／複合「デジタル処理時間と条件判断」
- 固定EXAM_ALIGNMENT: `6 / 6` 本文マッピング済み
- 周期・周波数: `f=1/T`, `T=1/f`
- 処理時間: `t_instruction=CPI/f`
- A-D変換: 標本化→量子化→符号化
- 標本化条件: `f_s>=2fmax`, `T_s<=1/(2fmax)`
- 情報伝送: 伝送路、雑音、多重化、搬送波、変調波、圧縮
- センサ・信号処理: アナログ→A-D→デジタル処理、D-A、インタフェース
- 論理判断: 条件分岐・反復の追跡まで
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 解説PDF
- `topics/31_atc_signal_transmission/31_atc_signal_transmission_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6対象項目の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 練習source / PDF
- source: `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.md`
- PDF: `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6対象項目: `6 / 6` 練習マッピング
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦4ページ、180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 練習QA
- 問題数: `15 / 15`
- 基礎/標準/複合: `4 / 8 / 3`
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` マッピング
- 数値・論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF表示QA: 180 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 31 PowerPoint QA
- `topics/31_atc_signal_transmission/31_atc_signal_transmission_images.pptx`
- 画面比率: `16:9`
- スライド数: `4`
- 内容: 地上→車上の情報伝送骨格、周期・周波数とCPI、A-D変換と標本化、伝送用語と条件分岐・反復
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` 可視化
- 表示QA: `4 / 4 PASS`
- overflow検査: PASS
- PPTX ZIP整合性: PASS
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 完成後独立再解答
- R7下 機械 問14 — PASS（個別正答・導出はTopic 33 blind保護のため非表示）
- R5上 機械 問18(a) — `T=1/(2.5 GHz)=0.4 ns` → 選択肢3 — PASS
- R5上 機械 問18(b) — `f=4/(20 ns)=200 MHz` → 選択肢4 — PASS
- R4下 機械 問13 — PASS（個別正答・導出はTopic 33 blind保護対象）
- R4下 理論 問14 — PASS（個別正答・導出はTopic 33 blind保護対象）
- R4上 機械 問14 — アナログ/デジタル・A-D/D-A・インタフェースを対応 → 選択肢2 — PASS
- 合計: `6 / 6 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 記録: `topics/31_atc_signal_transmission/31_atc_signal_transmission_final_qa.md`

## 31 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問・6対象項目の完成後独立再解答: `6 / 6 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 31を `completed` とし、完成数を31/38へ更新

## 30 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、レール、軌道回路、車軸短絡、電圧、電流、短絡、リレー、列車検知。

1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。
完成後独立再解答: `5 / 5 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外論点の件数合わせ追加: `0件`。
未確認実車値追加: `0件`。

## 30 成果物
- 解説source / EXAM_ALIGNMENT: `topics/30_atc_train_detection/30_atc_train_detection.md` — 制作前EXAM_ALIGNMENT＋解説本文§1〜§15＋3段階例題。進捗記録整合PASS
- 解説PDF: `topics/30_atc_train_detection/30_atc_train_detection_explanation.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 練習source: `topics/30_atc_train_detection/30_atc_train_detection_practice.md` — 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、固定5問を全件マッピング
- 練習PDF: `topics/30_atc_train_detection/30_atc_train_detection_practice.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 解説画像PowerPoint: `topics/30_atc_train_detection/30_atc_train_detection_images.pptx` — 16:9・4枚、固定5過去問の解法経路を可視化、全4枚表示QA PASS、ZIP整合性PASS
- 完成後独立再解答記録 / 最終QA: `topics/30_atc_train_detection/30_atc_train_detection_final_qa.md` — 再解答 `5 / 5 PASS`、最終判定 `PASS / COMPLETED`

## 30 練習QA
- 問題数: `15 / 15`
- 基礎/標準/複合: `4 / 8 / 3`
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT要求事項: `5 / 5` マッピング
- 独立計算・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF表示QA: 180 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 30 PowerPoint QA
- 画面比率: `16:9`
- スライド数: `4`
- 内容: 軌道回路の列車なし/あり、直列・並列・分圧・短絡、固定5過去問の解法経路、再利用解法アルゴリズム
- 固定EXAM_ALIGNMENT要求事項: `5 / 5` 可視化
- 表示QA: `4 / 4 PASS`
- ZIP整合性: PASS
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 30 完成後独立再解答
- R8上 理論 問7 — `Rx=VR/(IR-V)` → 選択肢4 — PASS
- R7上 理論 問6 — `R2=25Ω, R1=225Ω`、短絡時 `0.444...A` → 選択肢2 — PASS
- R7上 理論 問7 — 閉時 `Req=4Ω`、`10||R=2Ω` より `R=2.5Ω` → 選択肢1 — PASS
- R5下 理論 問7 — `R1=20Ω, R2=30Ω, r=60Ω` → 選択肢5 — PASS
- H27 理論 問6 — 開閉時の等価抵抗条件を連立し `R4=1Ω, R3=2Ω` → 選択肢2 — PASS
- 合計: `5 / 5 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 30 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問の完成後独立再解答: `5 / 5 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 30を `completed` とし、完成数を30/38へ更新

## 30 範囲境界
追加しない:
- ATC信号の周波数・符号化・情報伝送（Topic 31）
- 速度検出、速度照査、ブレーキ指令、AND/OR、フェイルセーフ（Topic 32）
- リレーシーケンス、保護リレー方式
- RC/RL/RLC過渡現象
- 軌道回路の詳細な方式各論
- 未確認の新幹線軌道回路電圧・電流・車軸短絡抵抗・リレー動作値

## 直前完了
Topic 34 `COMTRAC② 進路をどう自動制御する？` は固定5問・6答案要素の完成後blind独立再解答 `5 / 5問・6 / 6答案要素 PASS`、必須成果物・練習QA・表示QA・進捗記録整合・固定範囲境界すべてPASS、教材外知識補完・固定範囲外追加・未確認COMTRAC内部仕様追加0件で `PASS / COMPLETED`。完成数34/38。

## 次テーマ工程
Topic 35の最終QAを再実施する。前回唯一FAILだった進捗記録整合を再確認し、技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果は変更しない。
