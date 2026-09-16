# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `11 / 16`。Topic 01〜11は品質ゲートPASSでcompleted。active topicは12「新幹線のコンピュータは何をしている？」。

## 今回進捗
Topic 12の最終QAを実施し、`NEEDS_REVISION / IN_PROGRESS` と判定した。固定EXAM_ALIGNMENT 6問・8答案要素の完成後blind独立再解答 `8 / 8 PASS`、必須成果物、解説PDF・練習PDF・PowerPointの表示QA、固定範囲境界はPASS。未完了理由は進捗記録3箇所が旧工程のまま残っていることのみ。

独立再解答記録: `topics/12_information_processing/12_information_processing_independent_reanswer.md`
source: `topics/12_information_processing/12_information_processing.md`
explanation PDF: `topics/12_information_processing/12_information_processing_explanation.pdf`
explanation PDF QA: `topics/12_information_processing/12_information_processing_explanation_pdf_qa.md`
practice source: `topics/12_information_processing/12_information_processing_practice.md`
practice PDF: `topics/12_information_processing/12_information_processing_practice.pdf`
practice PDF QA: `topics/12_information_processing/12_information_processing_practice_pdf_qa.md`
PowerPoint: `topics/12_information_processing/12_information_processing_images.pptx`
PowerPoint QA: `topics/12_information_processing/12_information_processing_powerpoint_qa.md`

## Topic 12 最終QA
- 判定: `NEEDS_REVISION / IN_PROGRESS`
- 技術内容: `PASS`
- 固定6問・8答案要素の完成後blind独立再解答: `8 / 8 PASS`
- 必須成果物実在: `PASS`
- 解説PDF表示QA: `4 / 4 PASS`
- 練習PDF表示QA: `3 / 3 PASS`
- PowerPoint表示QA: `4 / 4 PASS`
- PowerPoint ZIP整合性: `PASS`
- 固定範囲境界: `PASS`
- 教材外・固定範囲外知識補完: `0件`
- 進捗記録整合: `FAIL`
- 旧進捗1: 主source `## 次工程` が解説PDF作成のまま
- 旧進捗2: 練習source `## 次工程` が練習PDF作成のまま
- 旧進捗3: 練習PDF QA `## 次工程` がPowerPoint作成のまま
- 固定EXAM_ALIGNMENT、技術本文、問題・正答、PDF/PPTX、独立再解答結果の修正要否: `なし`

## Topic 12 固定範囲
系列 `SPEC.md` に従い、次だけを扱う。

- 2進数
- 16進数
- ビット
- バイト
- 論理回路
- AND / OR / NOT / NAND / NOR / XOR
- 論理式
- 真理値表
- A/D変換
- D/A変換
- センサ
- 情報伝送

基本構成:

`センサ → 電気信号 → A/D変換 → デジタルデータ → 演算・論理判断 → 制御指令 → 機器`

過去問要求から上記固定範囲内で、基数変換、2進数の加減算、基本論理式の簡単化、真理値表と論理式・論理回路の相互変換、組合せ論理回路の出力追跡までを扱う。

カルノー図、フリップフロップ、記憶装置、プログラム・フローチャート、符号付き2進数・補数表現、通信プロトコル、インタフェース規格は追加しない。

## Topic 12 EXAM_ALIGNMENT
固定した品質ゲート対象:

- R8上 機械 問14 — 2進数・10進数・16進数の相互変換、大小比較
- R8上 機械 問18(a)(b) — ブール代数、積和形式・和積形式の簡単化
- R7上 機械 問14 — AND / OR / NOT回路、入力波形から出力波形を導出
- R5下 機械 問14 — 真理値表から論理式を判別
- R1 機械 問14 — 2進数の和・差から未知数を逆算
- H28 機械 問18(a)(b) — 基本ゲートの真理値表、組合せ回路の2段接続

品質ゲート対象: `6問・8答案要素`
制作前独立検証・公式解答照合: `8 / 8 PASS`
教材外・固定範囲外補完: `0件`

## 完成後blind独立再解答
公式解答・保存済み選択肢番号を先に見ず、完成教材だけで全8答案要素を再導出した。

- R8上 機械 問14: `(5)` / 公式 `(5)` / PASS
- R8上 機械 問18(a): `(5)` / 公式 `(5)` / PASS
- R8上 機械 問18(b): `(4)` / 公式 `(4)` / PASS
- R7上 機械 問14: `(3)` / 公式 `(3)` / PASS
- R5下 機械 問14: `(5)` / 公式 `(5)` / PASS
- R1 機械 問14: `(2)` / 公式 `(2)` / PASS
- H28 機械 問18(a): `(4)` / 公式 `(4)` / PASS
- H28 機械 問18(b): `(3)` / 公式 `(3)` / PASS

結果: `8 / 8 PASS`
公式解答・保存済み選択肢番号の事前参照: `0件`
教材外・固定範囲外知識による補完: `0件`
固定EXAM_ALIGNMENT変更: `0件`
固定範囲外追加: `0件`
車種固有通信仕様の推測: `0件`

## 解説本文・PDFの現状
固定8答案要素を次へ接続済み。

- R8上 問14 → §2、§3、基礎例題
- R8上 問18(a)(b) → §6、§12、複合例題
- R7上 問14 → §5、§8、§12、複合例題
- R5下 問14 → §5、§7、§12
- R1 問14 → §4、§12、本試験標準例題
- H28 問18(a)(b) → §5、§7、§8、§12、複合例題

本文マッピング: `8 / 8 PASS`
3段階例題: `3 / 3 PASS`
解説source QA: `PASS`
解説PDF: 完成（A4縦4ページ）
解説PDF表示QA: `4 / 4 PASS`
解説PDF文字抽出QA: `PASS`
解説PDF文字切れ・重なり・ページ外はみ出し・破損グリフ: `0件`
解説PDF固定過去問マッピング: `8 / 8`

## 練習問題sourceの現状
- 全12問、全問五肢択一。
- 構成: 基礎3 / 本試験標準7 / 複合・応用2。
- R8上 問14 → 問1、問4。
- R8上 問18(a)(b) → 問8、問9。
- R7上 問14 → 問10。
- R5下 問14 → 問7、問11。
- R1 問14 → 問5、問6。
- H28 問18(a)(b) → 問2、問10、問11。
- 固定6問・8答案要素への接続: `8 / 8 PASS`。
- 独立計算・論理QA: `12 / 12 PASS`。
- 正答一意性QA: `12 / 12 PASS`。
- 固定EXAM_ALIGNMENT変更: `0件`。
- 固定範囲外論点追加: `0件`。
- Topic 13以降の先取り: `0件`。
- 車種固有仕様の推測: `0件`。
- 練習PDF: 完成（A4縦3ページ）。
- 練習PDF表示QA: `3 / 3 PASS`。
- 練習PDF文字抽出QA: `PASS`。
- 練習PDF文字切れ・重なり・ページ外はみ出し・欠落・破損グリフ: `0件`。
- 練習PDF固定過去問マッピング: `8 / 8`。

## 解説画像PowerPointの現状
- 16:9・4枚。
- Slide 1: 情報処理の基本構成とA/D・D/Aの方向。
- Slide 2: 2進・10進・16進相互変換、4bit対応、bit/byte、和差から未知数逆算。
- Slide 3: AND / OR / NAND / NOR / XORの真理値表、論理式簡単化。
- Slide 4: 組合せ回路を論理式へ変換し、入力変化ごとに0/1評価する手順。
- 固定6問・8答案要素への接続: `8 / 8 PASS`。
- 表示QA: `4 / 4 PASS`。
- スライド外はみ出し: `0件`。
- 文字欠落・重なり・判読不能: `0件`。
- ZIP整合性: `PASS`。
- 外部画像: `0点`。PowerPoint図形・テキストで独自作成。
- 固定EXAM_ALIGNMENT変更: `0件`。
- 固定範囲外論点追加: `0件`。
- Topic 13以降の先取り: `0件`。
- 車種固有仕様の推測: `0件`。

## 非選定・重複扱い
- R7下 機械 問14: フローチャート・プログラム実行が主題で固定範囲外。
- R6上 機械 問18: n進数・D/A変換と重なるが、符号付き8bit・補数表現が正答要件で固定範囲外。
- R4上 機械 問14: A/D・D/A・センサと重なるが、インタフェースが正答要件で固定範囲外。
- R6下 機械 問14: R7上 問14と同一の論理回路・入力波形問題のため、調査はしたが品質ゲートを二重加算しない。
- 参考サイトで使われるカルノー図は系列SPEC固定範囲外なので追加しない。

## 解説本文へ反映済みの必須内容
1. 位取り記数法による2進・10進・16進の相互変換。
2. 16進1桁 = 2進4bit の対応。
3. bit / byte の意味と関係。
4. 2進数の加減算と、和・差から未知数を逆算する手順。
5. AND / OR / NOT / NAND / NOR / XOR の図記号識別点・論理式・真理値表。
6. 相補・分配・吸収・ド・モルガン則を過去問の簡単化に必要な範囲で使用。
7. 真理値表 ↔ 論理式 ↔ 論理回路の相互変換。
8. 組合せ論理回路の入力が時間変化する場合の区間ごとの0/1評価。
9. A/D変換とD/A変換の役割。
10. `センサ → 電気信号 → A/D変換 → デジタルデータ → 演算・論理判断 → 制御指令 → 機器` の流れ。
11. 情報伝送は機器間でデータ・指令を受け渡す概念まで。通信規格・プロトコルは追加しない。
12. 新幹線側は公開資料で確認できる状態監視・情報処理の概念に限定し、N700S固有のネットワーク規格・伝送速度・CPU・通信周期等を推測しない。

## 参考資料
公式:
- https://www.shiken.or.jp/chief/third/qa/
- R8上: `20260830_ch_third_q03.pdf` / `20260830_ch_third_a01.pdf`
- R7上: `20250831_ch_third_q03.pdf` / `20250831_ch_third_a01.pdf`
- R5下: `20240324_ch_third_q03.pdf` / `20240324_ch_third_a01.pdf`
- R1: `20190901_ch_third_q03.pdf` / `20190901_ch_third_a01.pdf`
- H28: `20160904_ch_third_q03.pdf` / `20160904_ch_third_a01.pdf`

学習資料:
- e-sysnet「論理回路とn進数」: https://e-sysnet.com/%E8%AB%96%E7%90%86%E5%9B%9E%E8%B7%AF%E3%81%A8n%E9%80%B2%E6%95%B0/
- 電験王 R8上 機械 問18: https://denken-ou.com/kikair8-1-18/
- 電験王 R7上 機械 問14: https://denken-ou.com/kikair7-1-14/
- 電験王 R5下 機械 問14: https://denken-ou.com/kikair5-2-14/
- 電験三種まとめました R5下 機械 問14: https://yaku-tik.com/denken/r5s-k14/

鉄道側:
- JR東海「東海道新幹線～不断のサービスの充実～」: https://company.jr-central.co.jp/sustainability/social/service/
- 三菱電機「車両システム」: https://www.mitsubishielectric.co.jp/traffic/products/train/

参照日: 2026-09-17

## Topic 11 完了状態
Topic 11「空転した車輪をどう立て直す？」は最終QA `PASS / completed`。固定R4下 機械 問14、完成後独立再解答 `1 / 1 PASS`、必須成果物・表示QA・進捗記録整合・固定範囲境界は全件PASS。完成数は `11 / 16`。

## 次に行う
Topic 12の旧進捗記録3箇所だけを実成果物へ同期する。対象は主source `## 次工程`、練習source `## 次工程`、練習PDF QA `## 次工程`。技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、独立再解答結果は変更しない。