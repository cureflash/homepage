# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_blind_reanswer_needs_revision`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: Topic 23解説source・練習sourceへR2一次問2で露呈した2点だけを最小修正し、対応成果物の同期要否をQAする

## 完了済み

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

## Topic 22 最終QA

判定: `PASS / COMPLETED`

- 固定過去問: 第二種一次2問＋二次3問 = `5問`
- 一次答案要素: `3 / 3 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- clean blind候補固定後の答案変更: `0件`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_source.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_pdf_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_source.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_pdf_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_images.pptx`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_powerpoint_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_candidates_clean.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_official_check.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_final_qa.md`

### clean blind reconcile

先行 `10 / 11` 記録は、Topic 22が前提参照を許可するTopic 20フィードバック制御教材を参照範囲から外したworkerの診断だった。有効候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定され、許可されたTopic 20既習内容を用いてH21二次 問4 `(5a)` を正しく導出。その後の公式照合で `11 / 11 PASS`。重複照合ファイルは削除し、`22_e5_readhesion_control_blind_reanswer_official_check.md` を公式照合記録として残す。Topic 22本文・一般式・PDF/PPTXへの追加修正は不要。

## Topic 23 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17`
- 二次答案要素: `6`
- 合計答案要素: `23`
- 二次記述・計算問題: `1問`
- Topic 17で検証済みの同一5問・23答案要素を再利用し、過去問再調査・再解答の重複実施はしない
- Topic 23追加責務: SiC、N700S接続、損失低減→発熱低減→冷却簡素化→小型軽量化の因果
- SPEC固定8項目: 変更なし
- SPEC指定3可視化: 変更なし
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 23 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`（clean blind後に2点の補強必要）

- 固定5問: `5 / 5 unchanged`
- 一次答案要素: 当初 `17 / 17 covered` 判定だったが、clean blindでR2一次問2 `(2),(4)` の説明不足を検出
- 二次答案要素: `6 / 6 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 regeneration-ready`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`（source補強後に同期要否QA）

- A4縦: `5 pages`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- 文字抽出・破損グリフ: `PASS`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 仮定値／実車値境界: `PASS`

## Topic 23 練習source / 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`（clean blind後に2点の補強・同期要否QA）

- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 解説画像PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`（source補強後に同期要否QA）

- 16:9: `6 slides`
- python-pptx再オープン: `6 / 6 PASS`
- ZIP整合性: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- pdftoppm 150 dpi: `6 / 6 PASS`
- geometry overflow: `0`
- クリッピング・文字重なり・欠落グリフ: `0`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 covered`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 clean blind独立再解答

判定: `FAIL / NEEDS_REVISION`

- 候補固定commit: `17837d40774f12e8348e9b55f250d5573b35f901`
- 固定5問: `4問完全一致 + R2一次問2で2要素不一致`
- 一次答案要素: `15 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `21 / 23 PASS`
- 候補固定後の答案変更: `0件`
- R2一次問2 `(2)`: 候補 `(1-D)V_dc`、公式 `D V_dc`。原因はSオン／オフ時のダイオード電圧状態の取り違え
- R2一次問2 `(4)`: 候補 `(1/6)V_dc I_dc T_2`、公式 `(1/2)V_dc I_dc T_2`。原因は公式図3の `i_s v_s` 三角波を別の同時直線ランプモデルへ置換したこと
- H24二次6要素: `6 / 6 PASS`。未丸め値と公式3桁値の差のみ
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 新たなexact blocker: `0件`

成果物追加:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_candidates_clean.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_official_check.md`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23の固定R2一次問2に必要な2点だけを解説source・練習sourceへ最小修正する。降圧チョッパの状態表で `V=D V_dc` を明示し、スイッチングエネルギーは問題で与えられた `p(t)=v(t)i(t)` 波形をそのまま積分する読図手順を追加する。SPEC・一般式・固定EXAM_ALIGNMENTは変更しない。対応する解説PDF・練習PDF・PowerPointの同期要否をQAし、修正後に新しいclean blind再試験を別記録で行う。
