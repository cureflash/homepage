# Topic 07 解説PDF QA・進捗記録

更新日: 2026-09-15

状態: `explanation_pdf_complete`

対象: Topic 07「GTO→IGBT→SiCで何が変わった？」

## 成果物

- 解説source: `07_power_semiconductors.md`
- 解説PDF: `07_power_semiconductors_explanation.pdf`
- PDF: A4縦 5ページ

## 反映範囲

既存sourceの固定範囲だけをPDFへ反映した。

- ダイオード、サイリスタ、GTO、MOSFET、IGBT、SiC
- オン状態・オフ状態
- 導通損失 `Pcond`
- スイッチング損失 `Psw=(Eon+Eoff)fs`
- 総損失 `Ploss=Pcond+Psw`
- 変換効率 `η=Pout/(Pout+Ploss)`
- 発熱・冷却・小型軽量化の因果
- 逆並列ダイオードとPWM
- 300系GTO、700系IGBT、N700S SiCの一次・技術資料で確認済み範囲
- 3段階例題
- 固定EXAM_ALIGNMENT 5問への教材内マッピング

固定EXAM_ALIGNMENTは変更していない。制作前検証 `5 / 5 PASS` を維持する。

## PDF QA

- 200 dpi全5ページ表示QA: `PASS`
- 文字切れ・重なり・欠落グリフ: `0件`
- 文字抽出QA: `PASS`
- 抽出確認: `GTO`、`IGBT`、`SiC`、`Pcond`、`Psw`、`Ploss`、`99.1`、`R5`、`R2`、`H30`、`H29`、`H23`、`例題1`、`例題2`、`例題3`、`5 / 5`
- 固定範囲外論点の追加: `0件`
- 未確認実車値の追加: `0件`

## 次工程

Topic 07の練習問題sourceを作成する。三種仕様どおり原則12問以上、少なくとも半数を五肢択一とし、固定EXAM_ALIGNMENT 5問から逆算した範囲だけを扱う。
