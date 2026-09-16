# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜10は最終QAまでPASSし、`completed`。Topic 11は前回最終QAで指摘された主source・練習sourceの進捗記録不整合を修正し、実成果物へ同期済み。最終QA再実施待ち。

- 完成数: `10 / 14`
- last completed: `10 新幹線が使う電力は「W」だけではない`
- active topic: `11 電力会社の三相交流をどう新幹線へ渡す？`
- current status: `topic_11_source_progress_synced / IN_PROGRESS`
- next start: Topic 11の最終QAを再実施する

## 今回進捗

Topic 11の主source・練習sourceの進捗記録だけを実成果物へ同期した。

- `11_three_phase_ac.md`: `status: INDEPENDENT_REANSWER_COMPLETE` へ更新
- `11_three_phase_ac_practice.md`: `stage: INDEPENDENT_REANSWER_COMPLETE` へ更新
- 旧「解説PDF作成」「解説画像PowerPoint作成」の次工程記録を除去
- 固定対象: 公式理論過去問5問・10答案要素
- 完成後独立再解答: `5 / 5問・10 / 10答案要素 PASS`
- 必須成果物・各表示QA・SPEC境界: 既存PASSを維持

技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX成果物は変更していない。次は最終QAを再実施し、進捗記録整合性を含めて再判定する。

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
完成後独立再解答: `5 / 5問・10 / 10答案要素 PASS`

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

上記は解説本文・解説PDF・練習問題・解説画像PowerPointへ反映済みで、完成後独立再解答でも固定10答案要素を教材だけで処理できることを確認済み。

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
  - 進捗メタデータ: 同期済み（`INDEPENDENT_REANSWER_COMPLETE`）
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
  - 進捗メタデータ: 同期済み（`INDEPENDENT_REANSWER_COMPLETE`）
- 練習PDF: `topics/11_three_phase_ac/11_three_phase_ac_practice.pdf`
  - A4縦3ページ
  - 200 dpi表示QA: `3 / 3 PASS`
  - 文字抽出QA: PASS
- 練習PDF QA: `topics/11_three_phase_ac/11_three_phase_ac_practice_qa.md` / PASS
- 解説画像PowerPoint: `topics/11_three_phase_ac/11_three_phase_ac_images.pptx`
  - 16:9・4枚
  - 200 dpi表示QA: `4 / 4 PASS`
  - overflow: 0件
  - ZIP/XML整合性: PASS
  - 固定過去問要求の可視化: `10 / 10`
- 解説画像PowerPoint QA: `topics/11_three_phase_ac/11_three_phase_ac_images_qa.md` / PASS
- 完成後独立再解答: `topics/11_three_phase_ac/11_three_phase_ac_exam_recheck.md` / `5 / 5問・10 / 10答案要素 PASS`
- 最終QA: `topics/11_three_phase_ac/11_three_phase_ac_final_qa.md` / `NEEDS_REVISION`（前回判定。進捗記録同期後の再実施待ち）

## 次に行うこと

Topic 11の最終QAを再実施する。

- 主source・練習sourceの進捗記録が実成果物と一致していることを確認する
- 固定5問・10答案要素の完成後独立再解答PASSを確認する
- 必須成果物・PDF/PPTX QA・固定範囲境界を再確認する
- 全件PASSならTopic 11を `completed` とし、Topic 12へ進む

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
