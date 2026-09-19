# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

現在地は `topic_23_completed`。次の未完了テーマは Topic 24 `N700S 主電動機設計の比較`。

## Topic 23 最終状態

Topic 23は、固定EXAM_ALIGNMENT、必須成果物、成果物QA、修正後clean blind、最終QAを完了した。

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後clean blind候補固定commit: `5d28e38e9151edc9d2ca3e309783aea2e6b9272f`
- 修正後公式照合: `23_n700s_sic_main_converter_blind_reanswer_remediated_official_check.md` = `PASS / 23_OF_23`
- 最終QA: `23_n700s_sic_main_converter_final_qa.md` = `PASS / COMPLETED`
- SPEC固定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 初回clean blind候補後編集: `0件`
- 修正後clean blind候補後編集: `0件`
- 新たなexact blocker: `0件`

## Topic 23 初回clean blindと補強履歴

初回clean blindは `21 / 23 PASS / NEEDS_REVISION`。不一致はR2一次「機械」問2 `(2),(4)` の2点だけ。

補強内容:

1. `(2)` は問題図の「矢印極性→状態表→平均値」の順を明示し、固定図では `V=D V_dc` とした。
2. `(4)` は固定図3の `p(t)=i_s v_s` 三角波を積分し、`W_off=(1/2)V_dc I_dc T_2` とした。
3. 練習一次問4の `VI t_s/6` は相補的直線ランプ条件だけに限定した。
4. 一般式 `E_sw=∫v(t)i(t)dt` は変更していない。

補強後、解説PDF・練習PDF・PowerPointを再同期し、修正後clean blindで `23 / 23 PASS`。

## Topic 23 成果物同期状態

- 解説PDF: `PASS / RESYNCED`
  - A4縦 `5 pages`
  - PDFium / Poppler `5 / 5 PASS`
  - 固定23答案要素 `23 / 23 covered`
- 練習PDF: `PASS / RESYNCED`
  - A4縦 `5 pages`
  - 一次8問＋二次4問 `12 / 12`
  - PDFium / pdftoppm `5 / 5 PASS`
  - 固定23答案要素 `23 / 23 covered`
- PowerPoint: `PASS / RESYNCED`
  - `23_n700s_sic_main_converter_images.pptx`
  - 16:9 `6 slides`
  - SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
  - LibreOffice / pdftoppm `6 / 6 PASS`
  - geometry overflow `0`
  - 固定23答案要素 `23 / 23 covered`
  - SPEC固定8項目 `8 / 8 covered`
  - SPEC指定3可視化 `3 / 3 PASS`

## Topic 23 実車値境界

維持事項:

- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替えない。
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張しない。
- N700S未公表の `V_on`, `R_on`, `E_on`, `E_off`, `f_s`, `T_j`, `R_th` を真値化しない。
- 比較計算値は教材用仮定値として扱う。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次の安全な工程

Topic 24「N700S 主電動機設計の比較」の制作前EXAM_ALIGNMENTから開始する。

系列 `SPEC.md` の固定範囲は次のとおり。

- 極数
- 同期速度
- すべり
- 周波数
- 回転速度
- トルク
- 電気角
- 小型軽量化

指定3可視化:

1. 極数・周波数―同期速度
2. すべり―実回転速度
3. 条件変更時の速度比較

まず第二種公式過去問を直近年度から確認し、一次・二次を合わせ原則5問以上、答案要素、直接／橋渡し区分、教材で欠落不可の説明を固定する。固定前に教材本文・PDF・PowerPointへ進まない。未確認N700S主電動機実値は推定で真値化しない。
