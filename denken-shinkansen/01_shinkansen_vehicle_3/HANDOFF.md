# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は32/38。01〜32がPASS。active topicは33 `COMTRAC① 東海道新幹線全体をどう監視する？`。

## 今回進捗
Topic 33の完成後blind独立再解答前ゲートを監査した。必須先読み対象の `STATUS.md`・`HANDOFF.md`・主sourceに制作前正答番号または完成済み導出が残っているため、`BLIND_REANSWER_BLOCKED` と判定し、独立再解答は実施していない。

記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_blind_gate.md`

固定EXAM_ALIGNMENT、教材本文、練習問題、PDF/PPTXは変更していない。Topic 34/35範囲追加、未確認COMTRAC内部仕様追加はいずれも0件。

## Topic 33 成果物
- source: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking.md`
- 解説PDF: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_explanation.pdf`
- 練習source: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_practice.md`
- 練習PDF: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_practice.pdf`
- PowerPoint: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_images.pptx`
- blind gate記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_blind_gate.md`

解説PDFはA4縦4ページ・180 dpi表示QA `4 / 4 PASS`・文字抽出PASS。練習は15問（基礎4／標準8／複合3）・全問五肢択一・固定5問 `5 / 5` マッピング・独立QA `15 / 15 PASS`。PowerPointは16:9・4枚・固定5問 `5 / 5` 可視化・表示QA `4 / 4 PASS`・overflow/ZIP整合性PASS。

## Topic 33 固定EXAM_ALIGNMENT
1. R7下 機械 問14 — フローチャート・変数更新・条件分岐・反復
2. R5上 機械 問14 — フローチャート・変数更新・条件分岐・反復
3. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮
4. R4下 理論 問14 — 標本化・量子化・符号化・ディジタル伝送・A-D変換
5. R1 機械 問14 — 2進数の加減算・基数変換

制作前独立検証は `5 / 5 PASS`。品質ゲート対象は上記5問から変更しない。

## Topic 33 固定範囲境界
扱う:
- 列車番号、列車位置、ダイヤをデータとして捉える考え方
- 2進数と10進数の相互変換、2進数の基本演算
- 変数、代入、条件分岐、反復、フローチャート追跡
- 伝送路、雑音、多重化、変調、標本化、圧縮
- 標本化、量子化、符号化、2進符号
- 公開一次資料で確認できるCOMTRACの列車追跡・運行管理の役割

追加しない:
- Topic 34のAND・OR・NOT・真理値表・インターロック・進路制御
- Topic 35の運転整理・番線変更・冗長化
- COMTRAC内部の未確認データ形式、bit割当、更新周期、伝送速度、通信プロトコル、具体的アルゴリズム

## 現在の状態
- `current_status`: `topic_33_blind_reanswer_blocked`
- 完成数: 32/38
- 01〜32: PASS
- Topic 33制作前EXAM_ALIGNMENT: 完了
- Topic 33解説source/PDF: 完了
- Topic 33練習source/PDF: 完了
- Topic 33 PowerPoint: 完了
- Topic 33完成後blind独立再解答: `BLOCKED`

## 次の正確な開始点
主source・STATUS・HANDOFFからTopic 33の制作前正答番号・完成済み導出結果だけを除去する。教材本文・固定EXAM_ALIGNMENT・練習問題・PDF/PPTXは変更せず、blind再解答前ゲートを `READY` にする。独立再解答自体は、その次の別runで行う。
