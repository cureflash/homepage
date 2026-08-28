# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-28

## 今回完了
`01 プラレール① 電気編` を1テーマ完結のcheckpointとして作成した。

成果物:
- `topics/01_plarail_electric/01_plarail_electric_explanation.pdf`
- `topics/01_plarail_electric/01_plarail_electric_practice.pdf`
- `topics/01_plarail_electric/01_plarail_electric_images.pptx`
- `topics/01_plarail_electric/01_plarail_electric.md`

## 事実確認
- タカラトミー公式の現行「ライト付E7系新幹線かがやき」は単3形乾電池1本使用で電動走行。
- Panasonic公式の単3形アルカリ乾電池 LR6EJ/4SE は1.5 V。

## 非公開値の扱い
対象プラレール車両のモーター電流、巻線抵抗、回転数、効率は公式資料から確認できなかった。教材中の `I = 0.30 A` は学習用仮定値であり、そこから求める `0.45 W`、`5.0 Ω` も学習用計算値として明記した。判断要求ではなく、真値と仮定値を分離することで進行可能なためメール通知は不要。

## 検証
- 解説PDF: 2ページを160 dpiでレンダリングして目視確認。クリップ・文字化け・重なりなし。
- 練習PDF: 2ページ生成。12問の式・単位・最終値を独立再計算。
- PowerPoint: 6スライド。LibreOfficeでPDFへ変換し全スライドをモンタージュ目視確認。クリップ・重なりなし。

## 次の開始点
`02 プラレール② 機械編`

扱う内容: 回転速度、角速度、トルク、出力、`P = ωT`、ギヤ、減速比、車軸、車輪、効率、損失。
