# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `30 / 39`
- current_status: `topic_31_pending_exam_alignment`
- last_completed_topic: `30 L0系④ 誘導集電・非接触電力伝送`
- active_topic: `31 補助電源変換器`
- next_start: 最新main・系列正本・直近worker成果をreconcileし、Topic 31の制作前EXAM_ALIGNMENTを公式過去問から固定する

Topic 01〜30は `PASS / completed`。完成数 `30 / 39`。

## Topic 30 最終結果

判定: `PASS / COMPLETED`

clean blind:
- candidate: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_candidate.md`
- candidate blob SHA: `33b53e26f54b8619da9819e2ce48cb2250ad13b1`
- candidate lock commit: `a9295e2a018f4d75d3b99ac7c5c6c9044528c8e7`
- compare QA: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_compare_qa.md`
- candidate固定後修正: `0件`

完成後独立再解答:
- R8 一次「理論」問5: `5 / 5 PASS`
- R7 一次「理論」問2: `5 / 5 PASS`
- H30 一次「理論」問2: `5 / 5 PASS`
- H30 一次「機械」問5: `5 / 5 PASS`
- R2 二次「機械・制御」問2: `5 / 5 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 合計: `25 / 25 PASS`
- 公式照合不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

成果物QA:
- 解説source＋source QA: `PASS`
- 解説PDF: blob `a3926909e5240e4d77042f12e903f299f81d6800` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- 練習source＋source QA: `PASS`
- 練習PDF: blob `f1e9650e39e236a6fb3629fd93a234dfbafe89c2` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- PowerPoint: blob `1b6841ad16eb59c9d9d80daf2cbdd51c45446641` / 16:9 6枚 / render `6 / 6 PASS`
- 固定5問・25答案要素への教材接続: `25 / 25 PASS`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 31範囲先取り: `0件`
- exact blocker: `0件`

R2二次問2はcandidateと公式の未丸め途中値に最終表示へ影響しない微小差があるが、公式表示の5答案要素 `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` は全一致。candidateは変更していない。

## Topic 31 系列SPEC固定範囲

### 主題

`31 補助電源変換器`

### 扱う内容

- インバータ
- コンバータ
- 三相負荷
- 力率
- 高調波
- 変換損失
- 効率
- 負荷変動

制作前に `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` に従って、二種一次・二次を合わせ原則5問以上の公式過去問を調査し、必要論点・式・設問型を固定する。二次対象論点で該当記述問題が確認できる場合は最低1問を含める。固定前に教材制作へ進まない。

実車・設備仕様は一次資料で確認できたものだけを実値として扱い、未確認値を推測で確定しない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
