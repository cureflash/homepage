# Topic 16 解説画像PowerPoint QA

更新日: 2026-09-18

対象: `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_images.pptx`

## 成果物
- 16:9・4枚
- 1枚目: 起電力＋内部抵抗、`V=E±Ir`、`I²r`、公称電圧、Ah/Wh/平均電圧/重量エネルギー密度
- 2枚目: C-rate、充放電電流・時間、端子電圧波形
- 3枚目: 蓄電池→DC/DC→DCリンク→主変換装置→主電動機、変換効率、N700S公式確認範囲
- 4枚目: 固定一次4問＋二次1問・12答案要素の解法チェーン

## 表示・ファイルQA
- [x] LibreOffice headlessでPDF変換 PASS
- [x] 120 dpi、1601×900で全4枚表示確認 `4 / 4 PASS`
- [x] 文字・数式・図の欠落、重なり、切れ `0件`
- [x] スライド境界overflow `0件`
- [x] PDF文字抽出のUnicode置換文字 `0件`
- [x] `(cid:)` `0件`
- [x] PPTX ZIP整合性 PASS
- [x] PPTX SHA-256 `9f353e07e6e97a181bd8ddf8b26687dbe6965a5b46edba8a829fcfeb6b0a2e1e`
- [x] Git blob SHA `aa70f00cef9035e47b2afec61d9d5cae5cd3145c`

## 試験対応・範囲QA
- [x] 固定一次4問＋二次記述1問、計5問・12答案要素を維持
- [x] R02/H30/H26/H18/H23の固定12答案要素を4枚で可視化
- [x] `V=E±Ir`, `P_loss=I²r`, `Q=It`, `W=VIt=VQ`, `V_avg=Wh/Ah`, `I=kC_Ah`, `t=1/k`, `P_out=ηP_in` を可視化
- [x] DC/DCとDCリンクの役割を固定範囲内で可視化
- [x] N700S実車事実と一般化ブロックを区別
- [x] 未確認N700S実車値の真値化 `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 固定公式過去問の個別正答記号・完成済み数値解掲載 `0件`

判定: `PASS / topic_16_powerpoint_complete`
