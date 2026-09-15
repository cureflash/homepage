# Topic 07 最終QA記録

対象: `07 モーターはなぜ回る？`

実施日: 2026-09-15

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`04_shinkansen_theory_3/SPEC.md` の既定範囲だけで最終QAを再実施した。新しい仕様・固定範囲外論点は追加していない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。最終QA判定後に主source・練習sourceへ完了進捗だけを同期したため、下表はその同期後の現行blob SHAである。教材本文・問題・解答の技術内容は変更していない。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `5d2bd55286974c19cc1ed799783c253c712b7d1c` | PASS |
| 解説PDF | `deb268be3332cd66b2c153472dbf68686cd59954` | PASS |
| 練習source | `79f7e3ce36ceabad3a91a3caca71238794308f02` | PASS |
| 練習PDF | `83bcca508a46980bb50b5407f21de2b676337dfe` | PASS |
| 解説画像PowerPoint | `6d955a2f729a5ea37c5a87f8f68a8fcfa98e4056` | PASS |
| 完成後独立再解答 | `4385b743d303773de141f3e9819ce0312b8abfca` | PASS |

## 過去問対応品質ゲート

固定EXAM_ALIGNMENTは次の公式理論過去問5問。

1. 令和6年度下期 理論 問4 — 平行導体間の電磁力と向き
2. 令和5年度下期 理論 問4 — 直線導体の磁界中でループ導体に働く合成電磁力
3. 令和4年度上期 理論 問4 — 運動導体の誘導起電力
4. 令和2年度 理論 問3 — 一様磁界中の電流ループに働く偶力
5. 平成28年度 理論 問12 — ローレンツ力の導出・向き・電子の運動

source Markdownでは5問の要求事項を全件本文・例題へマッピング済み。完成後独立再解答は `(2), (2), (3), (3), (2)` で公式解答と `5 / 5 PASS`。

- 教材外知識補完: `0問`
- 直流機詳細・後続Topic知識への依存: `0問`
- 未確認0系実車値への依存: `0問`

判定: PASS。

## 教材・成果物QA

- 3段階例題: 基礎 / 本試験標準 / 複合・ひっかけを収録 — PASS
- 練習問題: 15問、全問五肢択一、基礎4 / 標準8 / 複合3、独立再計算・再判定 `15 / 15 PASS`
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦5ページ、200 dpi全5ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、はみ出し0件、PPTX整合性PASS

判定: PASS。

## SPEC境界

次を完成ゲートへ追加していない。

- 直流機の電圧方程式、界磁方式、速度制御
- Topic 08以降の正弦波、実効値、RLC、力率、三相交流、半導体、PWM
- 0系直流主電動機の未確認実車値、内部巻線、結線、制御方式の推測

判定: PASS。

## 進捗記録整合性

前回最終QAで唯一FAILだった主source・練習sourceの旧進捗記録は、実成果物へ同期済みであることを再確認した。

- 主source: 練習PDF、PowerPoint、完成後独立再解答まで実態と一致
- 練習source: PowerPoint、完成後独立再解答まで実態と一致
- STATUS / HANDOFF: 最終QA再実施を次工程として保持し、判定時点の実態と一致

最終QA判定後、主source・練習source・STATUS・HANDOFFへ `completed` とTopic 08開始点を同期済み。

判定: PASS。

## 最終判定

- 必須成果物: PASS
- 三種公式過去問5問のEXAM_ALIGNMENT: PASS
- 教材で必要な中間知識: PASS
- 3段階例題: PASS
- 練習問題数・難易度配分・本試験形式: PASS
- 解説PDF・練習PDF・PowerPoint既存QA: PASS
- SPEC境界: PASS
- 完成後独立再解答: `5 / 5 PASS`
- 教材外知識補完: `0件`
- 後続Topic知識への依存: `0件`
- 未確認0系実車値への依存: `0件`
- source進捗記録整合性: PASS

結論: Topic 07は `PASS / completed`。完成数を `7 / 14` とし、次はTopic 08「新幹線の交流25kVとは何なのか」の制作前EXAM_ALIGNMENTへ進む。