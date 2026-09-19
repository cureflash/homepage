# 22 E5系 再粘着制御 — 解説画像PowerPoint QA

更新日: 2026-09-19

## reconcile

開始時に最新main、`STATUS.md` / `HANDOFF.md`、直近車両二種commit、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`、Topic 22の固定EXAM_ALIGNMENT・解説source・練習source・両PDF QAを再確認した。

- 開始時main: `cb3c0e20d1c2bbfc6ccab986d34304543475381e`
- 直近の車両二種成果: `c7e807c200225d752fdf38f23f2c2d56f7f02c0e` の Topic 22 練習PDF＋QA
- それ以降のmain更新は他系列であり、Topic 22 PowerPointとの競合なし
- 固定5問・11答案要素、SPEC固定8項目・指定3可視化を変更していない

## 対象

- PowerPoint: `22_e5_readhesion_control_images.pptx`
- 固定EXAM_ALIGNMENT: `22_e5_readhesion_control.md`
- 解説source: `22_e5_readhesion_control_explanation_source.md`
- 練習source: `22_e5_readhesion_control_practice_source.md`

## 構造・表示QA

- 画面比: `16:9`
- スライド数: `5枚`
- python-pptx open: `PASS / 5 slides`
- PPTX ZIP整合性: `PASS`
- shape geometry overflow: `0件`
- LibreOffice PDF変換: `PASS / 5ページ`
- pdftoppm `1601×900`: `5 / 5 PASS`
- PDF文字抽出: `PASS`
- Unicode replacement char / `(cid:)`: `0 / 0`
- 表示目視QA: `5 / 5 PASS`
- スライド外周クリップ・欠落・文字重なり: `0件`

## 内容QA

1. Slide 1: 回転磁界、同期速度 `N_s=120f/P`、すべり `s=(N_s-N)/N_s`、`N=(1-s)N_s`、`f2=sf`、条件付き `T∝s` を示し、誘導機すべりと車輪側速度差 `e_v=v_w-v_ref` を明確に分離。
2. Slide 2: `F_ad,max=μW`、`T_ad,max=F_ad,max r`、空転・滑走の判定、速度・トルク情報での検知、検出→トルク低減→速度差収束→再粘着判定→トルク復帰の簡略閉ループを可視化。
3. Slide 3: SPEC指定「粘着限界―速度」。source固定の `W=80 kN`、`μ(v)=0.24-0.00030v` による5点を可視化。
4. Slide 4: SPEC指定「指令トルク―粘着限界」。`v=100 km/h`、`r=0.43 m`、`T_ad,max=7.224 kN·m` と7時点の `T_cmd` を同一軸で可視化。
5. Slide 5: SPEC指定「簡略再粘着応答」。7時点の速度差 `e_v` と `T_cmd` を同じ時間軸で対応させ、H21二次の橋渡し技能として定常偏差・速応性・減衰を分けて読むことを明示。

全ての図中数値は解説sourceの「学習用仮定値」だけを使い、E5系実車値として扱っていない。

## 数値・論理QA

- `N_s=120f/P`: `PASS`
- `s=(N_s-N)/N_s`, `N=(1-s)N_s`: `PASS`
- `f2=sf`: `PASS`
- `T∝s` の成立条件限定: `PASS`
- 誘導機すべりと車輪側速度差の分離: `PASS`
- `F_ad,max=μW`: `PASS`
- `T_ad,max=F_ad,max r`: `PASS`
- 粘着限界―速度 5点: `5 / 5 PASS` (`19.2, 18.0, 16.8, 15.6, 14.4 kN`)
- `16.8×0.43=7.224 kN·m`: `PASS`
- 指令トルク時系列: `7 / 7 PASS`
- 簡略速度差時系列: `7 / 7 PASS`
- `t=2 s` で `7.8 > 7.224`: `PASS`
- 検出→低減→収束→復帰の順序: `PASS`
- ゲイン増加を定常偏差・速応性・減衰へ分解して評価: `PASS`

## 過去問対応品質ゲート

固定過去問は変更しない。

- H28 一次 機械 問5 `(4),(5)`: `2答案要素 / 直接`
- R2 一次 機械 問3 `(1)`: `1答案要素 / 橋渡し`
- R7 二次 機械・制御 問2 `s1`,`N2`: `2答案要素 / 橋渡し`
- R2 二次 機械・制御 問1 `(2),(3),(4)`: `3答案要素 / 橋渡し`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)`: `3答案要素 / 橋渡し`

品質判定:
- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 詳細等価回路・詳細ベクトル制御・粘着推定器・軸重移動補償の新規主題化: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別

- size: `14561 bytes`
- SHA-256: `dd06f2a02d5327fdc9dc70be89f3f8949f75669619f740daf34f4d1fa47450f8`

## 後続工程

Topic 22完成後clean blind独立再解答。固定5問・11答案要素を教材だけで解き、候補を先に固定してから公式解答・標準解答と照合する。
