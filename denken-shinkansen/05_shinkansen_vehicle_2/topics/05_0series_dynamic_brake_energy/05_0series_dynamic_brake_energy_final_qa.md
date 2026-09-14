# Topic 05 最終QA

実施日: 2026-09-14

対象: `05 0系⑤ 発電ブレーキのエネルギー解析`

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`

## 成果物存在確認
GitHub正本上で次の成果物を確認した。

- source Markdown: `05_0series_dynamic_brake_energy.md`
- 練習問題source: `05_0series_dynamic_brake_energy_practice_source.md`
- 解説PDF: `05_0series_dynamic_brake_energy_explanation.pdf`
- 練習PDF: `05_0series_dynamic_brake_energy_practice.pdf`
- 解説画像PowerPoint: `05_0series_dynamic_brake_energy_images.pptx`
- 完成後独立再解答記録: `05_0series_dynamic_brake_energy_independent_reanswer.md`

前工程のQA記録では、解説PDFはA4縦5ページ・全5ページ180 dpi Visual QA PASS、練習PDFはA4縦3ページ・全3ページ180 dpi Visual QA PASS、PowerPointは16:9・5スライド・全5スライドVisual QA・overflow検査・ZIP整合性 PASS。練習問題は一次8問（全問五肢択一）＋二次4問（記述式）の計12問で、計算・論理QAは `12 / 12 PASS`。

## EXAM_ALIGNMENT整合確認
系列SPECのTopic 05固定範囲は次のとおり。

- 発電機運転
- 発電電圧
- 制動電流
- 制動抵抗
- 制動電力
- 制動トルク
- 運動エネルギー
- 発熱量
- 速度低下

指定計算・グラフ:
- 速度―制動力
- 速度―制動電力
- 時間―速度
- 制動抵抗の発熱量

固定範囲へ直接または必須計算基礎として接続する公式過去問は次の2問。

- R5 一次 機械 問2 — 固定範囲 `(2)(3)` と車上抵抗消費の記述
- H24 二次 機械・制御 問1 — 固定範囲の前提計算 `(1)(2)`

二種の一次・二次合計「原則5問以上」は維持しているが、固定範囲を守って公式公開問題からゲート化できたのは2問。件数合わせで回生、誘導機制動、可逆チョッパ、VVVF等を追加していない。

教材本文・練習・PowerPointは次の式と解法へ接続しており、固定範囲と整合する。

```text
E = k_e Φω
I_b = E/(R_a+R_b)
T_b = k_t Φ I_b
P_g = E I_b
P_R = I_b^2 R_b
P_Cu = I_b^2 R_a
Q_R = ∫P_R dt
K = 1/2 m_eq v^2
m_eq dv/dt = -F_b
```

## 完成後独立再解答
完成教材だけを使った独立再解答記録を確認した。

- R5 一次 機械 問2 `(2)=ホ` — PASS
- R5 一次 機械 問2 `(3)=チ` — PASS
- R5 一次 機械 問2 車上抵抗消費の説明 — PASS
- H24 二次 機械・制御 問1 `(1) R_a=0.500 Ω` — PASS
- H24 二次 機械・制御 問1 `(2) E=187.5 V ≒ 188 V` — PASS

合計 `5 / 5 PASS`。教材外知識による補完0件、固定範囲外論点への依存0件、未確認0系実値の追加0件。

## 範囲・実車値確認
既存成果物と各QA記録では、次の後続論点を追加していない。

- 回生・四象限運転
- 可逆チョッパのスイッチング・通流率・昇圧動作
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF（Topic 10以降）
- 未確認の0系固有数値

数値例はH24固定範囲の既知値を明示して使う箇所以外、教材用仮定値として扱っている。

## 進捗記録整合確認
内容・成果物・独立再解答・表示QAはPASS条件を満たしているが、source Markdownの進捗記録がGitHub正本の実在成果物と一致していない。

`05_0series_dynamic_brake_energy.md` には現在も次の旧状態が残っている。

- 「解説PDF、練習問題、練習PDF、解説画像PowerPoint、完成後独立再解答、最終QAは未実施」
- `完成後独立再解答: 未実施`
- 次工程が「解説PDFを作成」となっている

また、`05_0series_dynamic_brake_energy_practice_source.md` には「PDF自体は次工程」と残っているが、練習PDFは既に存在しQAもPASSしている。

このため、成果物は揃っていても正本内の進捗記録が相互不整合であり、このrunでは `completed` にしない。

## 品質ゲート判定
- 過去問マッピング: PASS
- 一次・二次の双方を含む: PASS
- 二次記述式への接続: PASS
- 公式の意味・成立条件・解法手順: PASS
- 基礎・本試験標準・複合の3段階例題: PASS
- 練習問題の一次/二次接続: PASS
- SPEC指定4グラフ: PASS
- 完成教材だけでの独立再解答: `5 / 5 PASS`
- 教材外知識の補完: 0件
- 範囲逸脱: なし
- 未確認実車値の実値化: なし
- 必須成果物の存在: PASS
- 表示QA記録: PASS
- source内進捗記録の整合: FAIL

最終QA: `NEEDS_REVISION`

Topic 05は未完了のままとする。次工程は、内容・数式・過去問選定を変更せず、`05_0series_dynamic_brake_energy.md` と `05_0series_dynamic_brake_energy_practice_source.md` の旧進捗記録だけを現在地へ同期する。同期後に最終QAを再実施する。