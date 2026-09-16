# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は33/38。01〜33がPASS。active topicは34 `COMTRAC② 進路をどう自動制御する？`。

## 今回進捗
Topic 33 `COMTRAC① 東海道新幹線全体をどう監視する？` の最終QAを再実施し、`PASS / COMPLETED` と判定した。

前回唯一の未完了理由だった主sourceの進捗記録不整合は修正済み。再判定では、固定5過去問の完成後blind独立再解答 `5 / 5 PASS`、必須成果物、練習QA、表示QA、進捗記録整合、固定範囲境界を全件PASS確認した。技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更していない。

最終QA記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_final_qa.md`

## Topic 33 完了条件
- 固定公式過去問: 5問
- 制作前独立解答: `5 / 5 PASS`
- 完成後blind独立再解答: `5 / 5 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による正答補完: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 解説PDF: A4縦4ページ、180 dpi表示QA `4 / 4 PASS`、文字抽出PASS
- 練習: 15問（基礎4／標準8／複合3）、全問五肢択一、独立QA `15 / 15 PASS`
- 練習PDF: A4縦4ページ、180 dpi表示QA `4 / 4 PASS`、文字抽出PASS
- PowerPoint: 16:9・4枚、固定5問 `5 / 5` 可視化、表示QA `4 / 4 PASS`、overflow/ZIP整合性PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- 最終判定: `PASS / COMPLETED`

## Topic 33 固定範囲境界
扱った:
- 列車番号、列車位置、ダイヤをデータとして捉える考え方
- 2進数と10進数の相互変換、2進数の基本演算
- 変数、代入、条件分岐、反復、フローチャート追跡
- 伝送路、雑音、多重化、変調、標本化、圧縮
- 標本化、量子化、符号化、2進符号
- 公開一次資料で確認できるCOMTRACの列車追跡・運行管理の役割

追加していない:
- Topic 34のAND・OR・NOT・真理値表・インターロック・進路制御
- Topic 35の運転整理・番線変更・冗長化
- COMTRAC内部の未確認データ形式、bit割当、更新周期、伝送速度、通信プロトコル、具体的アルゴリズム

## 現在の状態
- `current_status`: `topic_33_completed`
- 完成数: 33/38
- 01〜33: PASS
- last completed: 33 `COMTRAC① 東海道新幹線全体をどう監視する？`
- active topic: 34 `COMTRAC② 進路をどう自動制御する？`

## Topic 34 系列SPEC固定範囲
- 進路制御
- 条件判定
- AND
- OR
- NOT
- 真理値表
- インターロック
- 論理回路

主題は「駅の進路と列車運行を安全に制御する」。仕様外論点や未確認COMTRAC内部仕様を追加しない。

## 次の正確な開始点
Topic 34の制作前EXAM_ALIGNMENTを実施する。公式過去問を直近年度から調査し、関連問題を原則5問以上固定して、要求知識・使用式・設問型・教材で必要な説明を先に確定する。本文・PDF等の制作へ先行しない。
