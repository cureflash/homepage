# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `29 / 39`
- current_status: `topic_29_complete_topic_30_exam_alignment_required`
- last_completed_topic: `29 L0系③ 超電導磁気浮上の電磁力`
- active_topic: `30 L0系④ 誘導集電・非接触電力伝送`
- next_start: Topic 30の制作前EXAM_ALIGNMENTを実施し、二種一次・二次を含む固定過去問候補を独立再計算・公式照合して品質ゲートを通す

Topic 01〜29は `PASS / completed`。完成数 `29 / 39`。

## Topic 29 最終結果

- final QA: `PASS / COMPLETED`
- clean blind v2 candidate lock: `18b7ea1d8796a4802e63c78088bb1fae87e70601`
- candidate固定後修正: `0件`
- 一次: `20 / 20 PASS`
- 二次: `4 / 4 PASS`
- 合計: `24 / 24 PASS`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

artifact:
- 解説PDF blob: `35ba843b81fd8fc08f76bd5de8aa9edee540d78f` / A4 4 pages / PDFium・Poppler `4 / 4 PASS`
- 練習PDF blob: `bebec9f9a6ed60178ca567e54060b37958ea2a27` / A4 11 pages / PDFium・Poppler `11 / 11 PASS`
- PowerPoint blob: `85394e303e8ff9bff19193a76b09d1db17406ec9` / 16:9 6 slides / render `6 / 6 PASS`

H23二次「機械・制御」問1(1)はcandidate `75.6 N・m`、公式 `75.7 N・m`。式・途中量は一致し、公式表示から `π_eff≈3.14003` と逆算できるため、`π=3.14` 相当の過去問固有丸め差として `PASS_WITH_ROUNDING_NOTE`。一般式は変更しない。

## Topic 30 系列SPEC固定範囲

### 主題

非接触給電を相互インダクタンスと結合回路として解析する。

### 扱う内容

- 相互インダクタンス
- 結合係数
- 誘導起電力
- 等価回路
- 交流電力
- 力率
- 変換効率

### 計算・グラフ

- 結合係数―伝送電力
- 負荷条件―効率
- 周波数特性

制作前に `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` に従い、公式過去問から固定候補を選定し、必要知識・式・答案要素を逆算する。未確認のL0系実車値は真値化しない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
