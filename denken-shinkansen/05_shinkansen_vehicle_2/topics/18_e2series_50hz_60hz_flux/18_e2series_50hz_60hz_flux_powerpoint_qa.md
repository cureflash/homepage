# 18 E2系 50Hz・60Hzと磁束 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象
- PowerPoint: `18_e2series_50hz_60hz_flux_images.pptx`
- 固定EXAM_ALIGNMENT: `18_e2series_50hz_60hz_flux.md`
- 解説source: `18_e2series_50hz_60hz_flux_explanation_source.md`

## 構造・表示QA
- 画面比: `16:9`
- スライド数: `4枚`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- 同一生成sourceのLibreOffice PDF変換: `PASS / 4ページ`
- 同一生成sourceの1600×900表示QA: `4 / 4 PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`

## 内容QA
1. Slide 1: 交流入力 `f_src=50/60 Hz` とインバータ出力 `f_inv` を分離し、変圧器 `E=4.44fNΦ_m`、`B_m=Φ_m/A`、機器定格、V/f、同期速度、滑り、二次周波数を一つの流れで可視化。
2. Slide 2: SPEC指定「周波数―磁束密度」。60 Hz時 `B_m=1.00 p.u.` の一般モデルで `B_m(f)=60/f`。50 Hz=`1.20 p.u.`、60 Hz=`1.00 p.u.`。
3. Slide 3: SPEC指定「V/f特性」。`V(f)=f/60`、`V/f=1/60 p.u./Hz`。50 Hz・200 V基準から30 Hz→120 Vへ接続。
4. Slide 4: SPEC指定「周波数―同期速度」。4極一般モデル `N_s=30f_inv`、50 Hz=`1500 min^-1`、60 Hz=`1800 min^-1`。R2二次型の相対速度7要素を可視化。

## 数値・論理QA
- `B_m(50)=60/50=1.20 p.u.`: `PASS`
- `B_m(60)=60/60=1.00 p.u.`: `PASS`
- `V(30)=30/60=0.50 p.u.`: `PASS`
- `200/50×30=120 V`: `PASS`
- 4極 `N_s(50)=1500 min^-1`: `PASS`
- 4極 `N_s(60)=1800 min^-1`: `PASS`
- 6極・50 Hz・`s=0.040`: `N_s=1000`, `N=960`, `sN_s=40 min^-1`, `f_2=2.0 Hz`, 回転子磁界/固定子=`1000 min^-1`: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次3問＋二次2問 / 計5問 / 変更なし`
- 固定答案要素: `一次7＋二次8 / 15 / 15 変更なし`
- 固定5問・15答案要素への可視化・接続: `15 / 15 PASS`
- R2二次 問1の回転磁界相対速度7要素: `7 / 7 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 解説／練習の問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別
- size: `37691 bytes`
- SHA-256: `a8adfaadba1170fe9188302479e3bcd71dd972000b87147c313fcd8e3a88e878`

## 次工程
固定5問・15答案要素を教材だけでclean blind再解答し、公式解答・標準解答を先に見ず候補答案を固定したうえで照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。
