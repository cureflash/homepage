# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は32/38。01〜32がPASS。active topicは33 `COMTRAC① 東海道新幹線全体をどう監視する？`。

## 今回進捗
Topic 33の固定EXAM_ALIGNMENT 5問と解説本文§1〜§15＋3段階例題・解説PDFを変更せず、練習source / PDFを完成した。

source: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_practice.md`
PDF: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_practice.pdf`

- 全15問（基礎4／標準8／複合3）
- 全問五肢択一＋完全解説
- 正答位置 A/B/C/D/E各3問
- 固定5過去問 `5 / 5` 練習マッピング
- 独立数値・論理QA `15 / 15 PASS`
- 複数正答 `0件`
- PDF A4縦5ページ
- 180 dpi全ページ表示QA `5 / 5 PASS`
- 文字抽出QA PASS
- Topic 34範囲追加 `0件`
- Topic 35範囲追加 `0件`
- 未確認COMTRAC内部仕様追加 `0件`

## Topic 33 固定EXAM_ALIGNMENT
1. R7下 機械 問14 — フローチャート・変数更新・条件分岐・反復 — `3` — PASS
2. R5上 機械 問14 — フローチャート・変数更新・条件分岐・反復 — `3` — PASS
3. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮 — `3` — PASS
4. R4下 理論 問14 — 標本化・量子化・符号化・ディジタル伝送・A-D変換 — `5` — PASS
5. R1 機械 問14 — 2進数の加減算・基数変換 — `2` — PASS

制作前独立解答: `5 / 5 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。

## Topic 33 練習マッピング
- R7下 機械 問14 — Q6, Q7, Q8, Q14
- R5上 機械 問14 — Q6, Q7, Q8, Q14
- R4下 機械 問13 — Q4, Q10, Q11, Q15
- R4下 理論 問14 — Q3, Q4, Q9, Q12, Q15
- R1 機械 問14 — Q1, Q2, Q5, Q13

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
- `current_status`: `topic_33_practice_pdf_complete`
- 完成数: 32/38
- 01〜32: PASS
- Topic 33制作前EXAM_ALIGNMENT: `5 / 5 PASS`
- Topic 33解説source: 完了
- Topic 33解説PDF: 完了
- Topic 33練習source / PDF: 完了
- Topic 33 PowerPoint: 未着手

## 次の正確な開始点
Topic 33の固定EXAM_ALIGNMENT、解説本文、練習source/PDFを変更せず、解説画像PowerPointを作成する。Topic 34/35範囲と未確認COMTRAC内部仕様は追加しない。