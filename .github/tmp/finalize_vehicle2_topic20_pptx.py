from pathlib import Path
import hashlib
base=Path('denken-shinkansen/05_shinkansen_vehicle_2')
topic=base/'topics/20_n700_feedback_control'
ppt=topic/'20_n700_feedback_control_images.pptx'
size=ppt.stat().st_size
sha=hashlib.sha256(ppt.read_bytes()).hexdigest()
qa=f'''# 20 N700系 フィードバック制御 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象
- PowerPoint: `20_n700_feedback_control_images.pptx`
- 固定EXAM_ALIGNMENT: `20_n700_feedback_control.md`
- 解説source: `20_n700_feedback_control_explanation_source.md`
- 練習source: `20_n700_feedback_control_practice_source.md`

## 構造・表示QA
- 画面比: `16:9`
- スライド数: `4枚`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- LibreOffice PDF変換: `PASS / 4ページ`
- pdftoppm 1600×900生成: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 1600×900表示目視QA: `4 / 4 PASS`

## 内容QA
1. Slide 1: 目標値、偏差、制御要素、制御対象、検出要素を一般フィードバックブロックとして接続。`L=CPH`、`Y/R=CP/(1+CPH)`、単位負帰還 `E/R=1/(1+G)`、直列・並列、特性方程式 `1+L=0` を可視化。
2. Slide 2: 一次遅れ `K/(Ts+1)`、極 `-1/T`、時定数、ステップ応答 `K(1-e^{{-t/T}})` を可視化。`t=T` で `0.632K` を明示。
3. Slide 3: 単位負帰還 `G_K=K/(s+1)` のゲイン変更応答と、`G_T=1/(Ts+1)` の時定数変更応答を同一条件比較。定常偏差の計算順を接続。
4. Slide 4: 二次遅れ、極と振動条件、三次Routh安定条件、入力別時間応答・最終値の定理の適用順を示し、固定5問・19答案要素へ接続。

## 数値・論理QA
- `1-e^-1 = 0.632120...`: `PASS`
- `K=0.5,1,2` の閉ループ定常値 `K/(1+K) = 1/3, 1/2, 2/3`: `PASS`
- 同モデルの実効時定数 `1/(1+K) = 2/3, 1/2, 1/3`: `PASS`
- `T=0.5,1,2 s` の `t=1 s` 応答 `1-e^{{-1/T}} = 0.865, 0.632, 0.393`: `PASS`
- 三次例 `s^3+3s^2+2s+K=0`: `0<K<6`: `PASS`
- `K=6` を漸近安定範囲へ含めない: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次1問＋二次4問 / 計5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19 / 変更なし`
- 固定5問・19答案要素への可視化・接続: `19 / 19 PASS`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一次8問＋二次4問の問題・正答・数式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- PID設計・代表根近似・周波数応答・ボード線図・状態空間法・根軌跡・現代制御・2自由度制御の追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別
- size: `{size} bytes`
- SHA-256: `{sha}`

## 次工程
固定5問・19答案要素を教材だけでclean blind再解答し、公式解答・標準解答を先に見ず候補答案を固定したうえで照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTX、練習問題・正答・数式は変更しない。
'''
(topic/'20_n700_feedback_control_powerpoint_qa.md').write_text(qa, encoding='utf-8')
status='''# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `19 / 39`
- current_status: `topic_20_powerpoint_complete`
- last_completed_topic: `19 ミニ新幹線 複電圧主回路`
- active_topic: `20 N700系 フィードバック制御`
- next_start: Topic 20完成後clean blind公式照合。固定5問・19答案要素を教材だけで独立再解答し、公式解答・標準解答は候補答案固定後に照合する

## 完了済み

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

## Topic 20 現在地

- 制作前EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_COMPLETE`
- clean blind公式照合: `未実施 / 次工程`
- 最終QA: `未実施`

## Topic 20 PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

成果物:
- PowerPoint: `topics/20_n700_feedback_control/20_n700_feedback_control_images.pptx`
- QA: `topics/20_n700_feedback_control/20_n700_feedback_control_powerpoint_qa.md`

品質:
- 16:9: `4 slides`
- python-pptx open / PPTX ZIP整合性: `PASS / PASS`
- LibreOffice PDF変換: `PASS / 4 pages`
- pdftoppm 1600×900: `4 / 4 PASS`
- 文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 目視表示QA: `4 / 4 PASS`
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一次8問＋二次4問の問題・正答・数式変更: `0件`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`

## Topic 20 固定ゲート

固定公式過去問:
- H25 一次 機械 問6 `(1)`: 1要素
- R7 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- R6 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R4 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R3 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- 合計: `5問・19答案要素`

固定SPEC境界:
- 伝達関数
- ブロック線図
- 開ループ
- 閉ループ
- 一次遅れ
- 二次遅れ
- 時定数
- 定常偏差
- 過渡応答
- 安定性
- 指定可視化: `ステップ応答`、`ゲイン変更時の応答`、`時定数変更時の応答`

境界:
- PIDパラメータ設計・代表根近似を追加しない。
- 周波数応答・ボード線図、状態空間法、根軌跡、現代制御、2自由度制御を追加しない。
- 未確認N700系実車制御値を真値化しない。

## worker reconcile

- Topic 20練習source commit: `4f7fc0ec9acb3f79aa7b83152adfd406a2a735e8`
- Topic 20練習PDF commit: `dad1d08bada18be7e5dc1804ae58ff5004725298`
- Topic 20練習PDF QA commit: `f9168a285a30ad527b85887ba246d606937ff44e`
- 直前の本系列正本同期: `07fcc657819b88a2e04c0a40c23fa43049b58d59`
- PowerPoint工程開始時main HEAD: `62434e5269a93d46570b5287e350fe4308aa4d89`
- 開始時HEAD差分は別系列 `02_shinkansen_power_3` の進捗同期のみで、本系列との競合・重複作業はない。
- 解説source/PDF、練習source/PDFを再作成せず、最初の未完了工程であるPowerPointのみ進めた。
- 詳細な工程QAは各topic配下の `*_qa.md` を正本とする。

## 次工程

Topic 20「N700系 フィードバック制御」の完成後clean blind公式照合。固定5問・19答案要素を教材だけで独立再解答し、候補答案を固定するまで公式解答・標準解答を参照しない。既存成果物・固定EXAM_ALIGNMENT・SPEC境界は変更しない。
'''
(base/'STATUS.md').write_text(status, encoding='utf-8')
handoff='''# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

現在地は `topic_20_powerpoint_complete`。last completed は Topic 19 `ミニ新幹線 複電圧主回路`。active topic は Topic 20 `N700系 フィードバック制御`。固定公式過去問5問・19答案要素、SPEC指定10項目・3可視化を変更せず、解説source/PDF、練習source/PDF、PowerPointまで完成・QA済み。

## 今回完了

成果物:
- PowerPoint: `topics/20_n700_feedback_control/20_n700_feedback_control_images.pptx`
- QA: `topics/20_n700_feedback_control/20_n700_feedback_control_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`

品質:
- 16:9: `4 slides`
- python-pptx open / PPTX ZIP整合性: `PASS / PASS`
- LibreOffice PDF変換: `PASS / 4 pages`
- pdftoppm 1600×900: `4 / 4 PASS`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 1600×900表示目視QA: `4 / 4 PASS`
- 固定答案要素: `19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一次8問＋二次4問の問題・正答・数式変更: `0件`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`

## 固定ゲート

固定公式過去問:
- H25 一次 機械 問6 `(1)`: 1要素
- R7 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- R6 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R4 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R3 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- 合計: `5問・19答案要素`

固定SPEC境界:
- 伝達関数
- ブロック線図
- 開ループ
- 閉ループ
- 一次遅れ
- 二次遅れ
- 時定数
- 定常偏差
- 過渡応答
- 安定性
- 可視化: `ステップ応答`、`ゲイン変更時の応答`、`時定数変更時の応答`

追加禁止・境界:
- PIDパラメータ設計、代表根近似。
- 周波数応答・ボード線図、状態空間法、根軌跡、現代制御、2自由度制御。
- 未確認N700系実車の制御器次数、ゲイン、時定数、伝達関数、制御周期等の真値化。

## reconcile

- 練習source commit `4f7fc0ec9acb3f79aa7b83152adfd406a2a735e8`、練習PDF `dad1d08bada18be7e5dc1804ae58ff5004725298`、QA `f9168a285a30ad527b85887ba246d606937ff44e` を引き継いだ。
- 直前の本系列正本同期は `07fcc657819b88a2e04c0a40c23fa43049b58d59`。
- PowerPoint工程開始時main HEAD `62434e5269a93d46570b5287e350fe4308aa4d89` は別系列 `02_shinkansen_power_3` の進捗同期で、本系列との競合なし。
- 既存の「車両二種を進行」「車両二種 30分補助」「車両二種 追加枠A」等が作成済みの解説source/PDF・練習source/PDFを再実施せず、最初の未完了工程PowerPointだけを進めた。

## 次の安全な工程

Topic 20完成後clean blind公式照合。

固定条件:
- 固定5問・19答案要素を教材だけで独立再解答する。
- 候補答案を固定するまで公式解答・標準解答を見ない。
- 固定EXAM_ALIGNMENT、SPEC境界、既存PDF/PPTX、練習問題・正答・数式を変更しない。
- clean blind照合PASS後に最終QAへ進む。

詳細な工程QAは各topic配下の `*_qa.md` を正本とする。
'''
(base/'HANDOFF.md').write_text(handoff, encoding='utf-8')
print('finalized', size, sha)
