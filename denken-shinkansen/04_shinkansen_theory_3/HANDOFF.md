# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜10は最終QAまでPASSし、`completed`。Topic 11は練習問題source・練習PDF＋QAまで完了した。

- 完成数: `10 / 14`
- last completed: `10 新幹線が使う電力は「W」だけではない`
- active topic: `11 電力会社の三相交流をどう新幹線へ渡す？`
- current status: `topic_11_practice_pdf_complete / IN_PROGRESS`
- next start: Topic 11の解説画像PowerPointを作成する

## 今回進捗

Topic 11の練習問題source・練習PDFを作成し、内容QA・全ページ表示QA・文字抽出QAを完了した。

- 練習問題: 全15問・全問五肢択一
- 難易度: 基礎4 / 本試験標準8 / 複合・応用3
- 数値・論理再計算: `15 / 15 PASS`
- 正答一意性: `15 / 15 PASS`
- 正答位置: `(1)`〜`(5)` 各3問
- 固定対象: 公式理論過去問5問・10答案要素
- 練習問題への接続: `10 / 10`
- 練習PDF: A4縦3ページ
- 200 dpi全ページ表示QA: `3 / 3 PASS`
- 文字抽出QA: PASS
- 文字切れ・重なり・欠落・黒四角・置換文字: `0件`
- 境界維持: 不平衡三相、高調波、電力計測、Y-Δインピーダンス変換、具体的き電変圧器結線、Topic 12以降の半導体・整流・PWM、未確認実設備値の追加0件
- source: `topics/11_three_phase_ac/11_three_phase_ac_practice.md`
- PDF: `topics/11_three_phase_ac/11_three_phase_ac_practice.pdf`
- QA: `topics/11_three_phase_ac/11_three_phase_ac_practice_qa.md` / PASS

## Topic 11 SPEC固定範囲

扱う内容:
- 三相交流
- 相順
- 平衡三相
- Y結線
- Δ結線
- 相電圧
- 線間電圧
- 相電流
- 線電流
- 三相電力

固定公式:

```text
Y結線：VL = √3 Vp
Δ結線：IL = √3 Ip
P = √3 VL IL cosφ
```

## Topic 11 固定過去問

1. 令和5年度下期 理論 問15(a)(b)
   - Y結線の線間/相電圧・電流、同一負荷のΔ結線、三相消費電力
2. 令和4年度下期 理論 問15(a)(b)
   - Y結線R-L負荷とΔ結線抵抗負荷、枝電流、三相消費電力
3. 令和元年度 理論 問16(a)(b)
   - 平衡Y結線RLC負荷の1相等価回路、線電流、三相有効電力
4. 平成29年度 理論 問16(a)(b)
   - Y結線R-L負荷の三相有効電力・力率、Δ結線コンデンサ
5. 平成26年度 理論 問16(a)(b)
   - Y結線負荷の有効・無効電力、Δ結線コンデンサの三相無効電力

制作前独立検証: `5 / 5問・10 / 10答案要素 PASS`

## 教材で必須となる説明

- 三相交流、平衡・対称、120°位相差
- 相順の基本
- 相電圧/線間電圧、相電流/線電流の区別
- Y結線: `VL=√3Vp`, `IL=Ip`
- Δ結線: `VL=Vp`, `IL=√3Ip`
- Yで線間電圧から相電圧へ`1/√3`して1相回路を解く手順
- Δで各枝に線間電圧が加わることから枝電流を求める手順
- 平衡三相負荷では1相分の電力を3倍すること
- `P=3VpIp cosφ`から`P=√3VLILcosφ`へ接続すること
- 三相電力公式の逆算
- Y負荷とΔ負荷が混在する問題で、各枝にかかる電圧を先に判定する解法
- Topic 08〜10のRLC・力率・無効電力は既習事項としてのみ使用する
- 新幹線側は三相系統→単相25 kV→車内三相という概念接続までとし、具体的なき電変圧器結線を推測しない

上記は解説本文・解説PDF・練習問題へ反映済み。

## 境界

- 不平衡三相回路を品質ゲートへ追加しない
- 新幹線変電所の具体的な三相→単相変換方式・き電変圧器結線は電力編へ送る
- Topic 12以降の半導体・整流・インバータ・PWM・高調波を追加しない
- Topic 14の電力計・測定回路を品質ゲートへ混在させない
- Y-Δインピーダンス変換等を件数合わせのため必須範囲へ追加しない
- 未確認の実設備値・変電設備仕様を真値化しない

## Topic 11 成果物

- source: `topics/11_three_phase_ac/11_three_phase_ac.md`
  - EXAM_ALIGNMENT: 完成
  - 固定過去問: 5問・10答案要素
  - 制作前独立検証: `5 / 5問・10 / 10答案要素 PASS`
  - 解説本文＋3段階例題: 完成
  - 固定過去問要求の本文マッピング: `10 / 10`
- 解説PDF: `topics/11_three_phase_ac/11_three_phase_ac_explanation.pdf`
  - A4縦4ページ
  - 200 dpi表示QA: `4 / 4 PASS`
  - 文字抽出QA: PASS
  - 固定過去問要求のPDF反映: `10 / 10`
- 解説PDF QA: `topics/11_three_phase_ac/11_three_phase_ac_explanation_qa.md` / PASS
- 練習source: `topics/11_three_phase_ac/11_three_phase_ac_practice.md`
  - 15問（基礎4 / 本試験標準8 / 複合3）、全問五肢択一
  - 数値・論理QA: `15 / 15 PASS`
  - 正答一意性: `15 / 15 PASS`
  - 固定過去問要求への接続: `10 / 10`
- 練習PDF: `topics/11_three_phase_ac/11_three_phase_ac_practice.pdf`
  - A4縦3ページ
  - 200 dpi表示QA: `3 / 3 PASS`
  - 文字抽出QA: PASS
- 練習PDF QA: `topics/11_three_phase_ac/11_three_phase_ac_practice_qa.md` / PASS
- 解説画像PowerPoint: 未作成
- 完成後独立再解答: 未実施
- 最終QA: 未実施

## 次に行うこと

Topic 11の解説画像PowerPointを作成する。固定5問・10答案要素とSPEC境界を維持する。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
