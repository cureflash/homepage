# 19 ミニ新幹線 複電圧主回路 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象
- PowerPoint: `19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- 固定EXAM_ALIGNMENT: `19_mini_shinkansen_dual_voltage_main_circuit.md`
- 解説source: `19_mini_shinkansen_dual_voltage_main_circuit_explanation_source.md`
- 練習source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`

## 構造・表示QA
- 画面比: `16:9`
- スライド数: `4枚`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- LibreOffice PDF変換: `PASS / 4ページ`
- pdftoppm 1600×900生成: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 同一generatorの1600×900表示目視QA: `4 / 4 PASS`

## 内容QA
1. Slide 1: 複電圧→主変圧器→主変換装置→主負荷・補助電源、電源切替、絶縁協調を機能ブロックで接続し、固定5問・9答案要素を明示。
2. Slide 2: `I1=Pout/(ηV1cosφ)`。教材用仮定で10 kV→800 A、8 kV→1000 A、比1.25を可視化。
3. Slide 3: `V2=V1N2/N1,tap`。1250→1.6 kV、1000→2.0 kV、800→2.5 kVを可視化。H25論点は一般原理としてのみ記載。
4. Slide 4: 同一出力条件比較と理想降圧変換 `Vo=DVd` の0.60/0.80を接続。変圧・変換、絶縁協調、電源切替を未確認実車仕様へ混同しない。

## 数値・論理QA
- `6.84×10^6/(0.95×10×10^3×0.90)=800 A`: `PASS`
- `6.84×10^6/(0.95×8×10^3×0.90)=1000 A`: `PASS`
- `1000/800=1.25`: `PASS`
- `12.5 kV→640 A`, `16 kV→500 A`, `20 kV→400 A`: `PASS`
- `10×200/1250=1.6 kV`, `10×200/1000=2.0 kV`, `10×200/800=2.5 kV`: `PASS`
- `720/1200=0.60`, `720/900=0.80`: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次4問＋二次1問 / 計5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9 / 変更なし`
- 固定5問・9答案要素への可視化・接続: `9 / 9 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 解説／練習の問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別
- size: `38357 bytes`
- SHA-256: `b42b0007f1a15c7b2758bb2a9796a110a562af68a87ffcb8f4e762a3af0062f0`

## 次工程
固定5問・9答案要素を教材だけでclean blind再解答し、公式解答・標準解答を先に見ず候補答案を固定したうえで照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。
