# Topic 29 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## 対象

- `29_l0_superconducting_magnetic_levitation_force_images.pptx`
- canonical blob SHA: `2919bbe2b6763bcd73e246fd3e76c17305e9e662`
- file size: `376,373 bytes`
- SHA-256: `19f86b51ebbdc96b62c9fcfd023843d421f4377991b8b1b1db07a09dd6d99b3a`
- 16:9 / `6 slides`

## reconcile / artifact identity

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 28最終成果、Topic 29の制作前EXAM_ALIGNMENT・解説source/PDF・練習source/PDF、直近コミット、既存車両二種worker成果をreconcileした。

開始時点の正本は `topic_29_practice_pdf_complete` で、現行mainにTopic 29 PowerPoint canonical artifactは存在しなかったため重複作業はない。Topic 28で確立済みのconnector経由binary upload truncate回避手順を踏襲し、GitHub Actions上で生成・canonical artifact自体を検証してmainへcommitした。

GitHub Actions run `35490660751`: `success`。canonical artifact commit: `f13526415dda3d64f8c4bd649f8b005f026448e9`。

初回run `35490591379` はQAの期待値 `I(30), I(60)` を誤って固定したため数値assertで停止した。artifactはcommitされていない。式を変更せず独立再計算値へ期待値を訂正し、再runで全gateを通過した。

## canonical構造・表示QA

- GitHub Actions build/validation: `PASS`
- PPTX ZIP integrity: `PASS`
- python-pptx open: `PASS`
- slide count: `6 / 6`
- 16:9 geometry: `PASS`
- slide geometry bounds: `6 / 6 PASS`
- LibreOffice headless PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS` (`12,976 bytes`)
- 必須表示トークン: `PASS`
- 置換文字 `�`: `0件`

## EXAM_ALIGNMENT gate

固定EXAM_ALIGNMENTは変更していない。

1. R8 一次「理論」問2 `(1)〜(5)` — `5答案要素`
2. R7 一次「理論」問2 `(1)〜(5)` — `5答案要素`
3. R4 一次「理論」問2 `(1)〜(5)` — `5答案要素`
4. R2 一次「理論」問2 `(1)〜(5)` — `5答案要素`
5. H23 二次「機械・制御」問1 `(1)〜(4)` — `4答案要素`

集計:
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `4 / 4 connected`
- 合計答案要素: `24 / 24 connected`

## SPEC gate

SPEC必須8項目:
- ファラデーの法則: `PASS`
- 相互誘導: `PASS`
- 誘導電流: `PASS`
- 磁気エネルギー: `PASS`
- 電磁力: `PASS`
- 超電導磁石: `PASS`
- 浮上力: `PASS`
- 案内力: `PASS`

集計: `8 / 8 PASS`。

SPEC指定3可視化:
1. 磁束変化―誘導起電力: `PASS`
2. 速度―誘導電流: `PASS`
3. 速度―電磁力: `PASS`

集計: `3 / 3 PASS`。

## 数値・式QA

- `Ψ=NΦ`: `PASS`
- `e=-dΨ/dt`: `PASS`
- `Ψ=Ψ(x)` → `e=-v dΨ/dx`: `PASS`
- `Z=R+jωL`, `|I|=|E|/sqrt(R^2+(ωL)^2)`: `PASS`
- `W'_m=1/2 L(x)i^2`, `F=(∂W'_m/∂x)_i=1/2 i^2 dL/dx`: `PASS`
- 鎖交磁束一定時 `F=-(∂W_m/∂x)_Ψ`: `PASS`
- 相互インダクタンス `F=i_1 i_2 dM/dx`, `T=i_1 i_2 dM/dθ`: `PASS`
- 教材例 `Ψ=0.12 cos(2π50t)` → `E_hat=37.6991 V`, `E_rms=26.6573 V≈26.7 V`: `PASS`
- 教材モデル `I_rms(10)=2.26274 A`, `I_rms(30)=2.74398 A`, `I_rms(60)=2.80659 A`: `PASS`
- `F_model=40 I_rms`、`v=30 m/s` → `109.759 N≈110 N`: `PASS`
- H23橋渡し `s=(N_s-N)/N_s`, `f_2=sf_1`, 逆相制動 `s_p=2-s`: `PASS`

## 境界・安全QA

- L0系実車接続は一次資料で確認済みの「超電導磁石が浮上・案内コイルを高速通過→誘導電流→吸引・反発で浮上、左右偏位に対して中央へ戻す案内力」まで: `維持`
- 未確認L0系の磁界・コイル電流・`R/L/M`・幾何寸法・浮上力・案内力・速度しきい値の真値化: `0件`
- 教材用 `I_rms(v)` / `F_model(v)` を実車速度特性へ一般化: `0件`
- Topic 30「誘導集電・非接触電力伝送」の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## Topic 21過去問固有注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 最終判定

判定: `PASS / POWERPOINT_COMPLETE`

Topic 29はまだ `completed` としない。次工程は、完成後clean blind独立再解答の候補を公式解答を先に見ずに固定し、その後公式照合・最終QAへ進む。
