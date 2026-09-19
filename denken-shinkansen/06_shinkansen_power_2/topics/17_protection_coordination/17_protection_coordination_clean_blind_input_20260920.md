# Topic 17 制作前clean blind入力

実施準備日: 2026-09-20

## 目的

Topic 17固定EXAM_ALIGNMENTの一次3問＋二次2問、計5問・26答案要素を、保存済み候補答案・公式標準解答を先に見ずに独立再解答するための入力だけを固定する。

このファイルには候補答案、正答、前回不一致箇所を記載しない。

## 固定品質ゲート

- 一次: `3問 / 15答案要素`
- 二次: `2問 / 11答案要素`
- 合計: `5問 / 26答案要素`
- SPEC固定11項目マッピング: `11 / 11`
- 固定EXAM_ALIGNMENT変更: `0件`

## clean blindで使用する公式問題

### 1. 令和4年度 第二種一次試験「電力」問3

問題PDF:
https://www.shiken.or.jp/chief/upload/20220820_ch_second_q02.pdf

答案要素: `5`

### 2. 平成29年度 第二種一次試験「電力」問3

問題PDF:
https://www.shiken.or.jp/chief/upload/20170902_ch_second_q02.pdf

答案要素: `5`

### 3. 平成25年度 第二種一次試験「電力」問4

問題PDF:
https://www.shiken.or.jp/chief/upload/20130831_ch_second_q02.pdf

答案要素: `5`

### 4. 令和2年度 第二種二次試験「電力・管理」問2

問題PDF:
https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf

答案要素: `8`

### 5. 平成25年度 第二種二次試験「電力・管理」問3

問題PDF:
https://www.shiken.or.jp/chief/upload/20131124_ch_second_q01.pdf

答案要素: `3`

## 固定SPEC範囲

- CT
- VT
- 過電流継電器
- 地絡保護
- 差動保護
- 距離保護の基本
- 遮断器
- 遮断容量
- 保護協調
- 選択遮断
- 動作時間

Topic 16の短絡電流・短絡容量・％インピーダンス等は既習事項として必要範囲だけ再利用する。Topic 18以降の論点は追加しない。

## 実施手順

1. このファイルと上記5件の公式問題PDFだけを入力として使う。
2. `17_protection_coordination_preproduction_blind_20260920.md`、STATUS/HANDOFFの過去blind詳細、公式解答PDF、第三者解説を、候補答案固定前に開かない。
3. 一次15答案要素、二次11答案要素を根拠付きで独立回答し、候補答案を先に保存する。
4. 候補答案保存後にのみ公式標準解答を開いて照合する。
5. `26 / 26 PASS` の場合だけ教材本文へ進む。1要素でも不一致なら教材本文・PDF・PowerPointへ進まない。

## 境界

- 仕様追加: `0件`
- 固定5問・26答案要素変更: `0件`
- Topic 18以降先取り: `0件`
- 教材本文着手: `0件`
