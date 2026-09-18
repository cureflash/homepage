from pathlib import Path

ROOT = Path('denken-shinkansen/05_shinkansen_vehicle_2')
TOPIC = ROOT / 'topics/16_700series_multilevel_converter_pwm'


def replace_once(path: Path, old: str, new: str) -> None:
    text = path.read_text(encoding='utf-8')
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f'{path}: expected exactly 1 match, found {count}: {old[:100]!r}')
    path.write_text(text.replace(old, new, 1), encoding='utf-8')


main = TOPIC / '16_700series_multilevel_converter_pwm.md'
practice = TOPIC / '16_700series_multilevel_converter_pwm_practice_source.md'
status = ROOT / 'STATUS.md'
handoff = ROOT / 'HANDOFF.md'

# Main source: correct the single blind-QA gap without widening the fixed scope.
replace_once(
    main,
    '制作前 `EXAM_ALIGNMENT` と解説本文＋3段階例題を完了した。固定過去問は一次4問＋二次1問、計5問・26答案要素のまま変更していない。本文でSPEC指定8項目・3可視化と固定26答案要素を接続し、例題数値を再計算した。判定は `PASS / EXPLANATION_SOURCE_COMPLETE`。正答記号・固定過去問の個別最終解は保存していない。',
    '制作前 `EXAM_ALIGNMENT` と解説本文＋3段階例題を完了した。固定過去問は一次4問＋二次1問、計5問・26答案要素のまま変更していない。本文でSPEC指定8項目・3可視化と固定26答案要素を接続し、例題数値を再計算した。完成後blind再解答QAで R7一次「機械」問4 (3) の自己消弧形スイッチング素子の識別説明不足を検出したため、公式問題文・解答群に基づき IGBT と MOSFET の識別、および逆並列ダイオードとの役割の違いだけを最小補正した。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデルは変更していない。'
)
replace_once(main, 'current_status: `topic_16_explanation_source_complete`', 'current_status: `topic_16_source_revision_complete`')
replace_once(main, '次工程: 固定EXAM_ALIGNMENTを変更せず、解説PDFを制作する。', '次工程: 修正版sourceを解説PDF・練習PDF・PowerPointへ同期し、表示QA後にblind再解答前ゲートを作り直す。')
replace_once(
    main,
    '| R7 一次 機械 問4 | (1)〜(5) | 5 | 電圧形インバータ、誘導性負荷、逆並列ダイオード、PWM、搬送波・スイッチング周波数 | PWMとスイッチング周波数の基礎を固定する |',
    '| R7 一次 機械 問4 | (1)〜(5) | 5 | 電圧形インバータ、誘導性負荷、逆並列ダイオード、自己消弧形スイッチング素子（IGBT/MOSFET）、PWM、搬送波・スイッチング周波数 | スイッチング素子の識別、PWM、スイッチング周波数の基礎を固定する |'
)
replace_once(
    main,
    '2. R7型として、正弦波変調波と三角搬送波の比較からPWMパルス列を生成し、搬送波周波数がスイッチング周波数を決めることを説明する。',
    '2. R7型として、自己消弧形スイッチング素子の代表例として IGBT と MOSFET を識別し、逆並列ダイオードは還流経路を与える別の素子であることを区別する。さらに、正弦波変調波と三角搬送波の比較からPWMパルス列を生成し、搬送波周波数がスイッチング周波数を決めることを説明する。'
)
replace_once(
    main,
    '電圧形インバータでは自己消弧できるスイッチング素子と逆並列ダイオードを組み合わせる構成が基本になる。代表的な自己消弧素子としてIGBT等があるが、本テーマでは素子種類ごとの詳細損失比較へ進まない。',
    '電圧形インバータでは自己消弧できるスイッチング素子と逆並列ダイオードを組み合わせる構成が基本になる。代表的な自己消弧形スイッチング素子には IGBT と MOSFET がある。逆並列ダイオードは、誘導性負荷の電流を継続させる還流経路を与える別の素子であり、IGBT や MOSFET と役割を混同しない。本テーマでは IGBT/MOSFET の素子別詳細損失比較へ進まない。'
)
replace_once(
    main,
    '5. PWMでは変調波と搬送波を区別し、搬送波周波数とスイッチング頻度を対応させる。',
    '5. 自己消弧形スイッチング素子の代表例として IGBT と MOSFET を識別し、逆並列ダイオードは還流用と区別する。\n6. PWMでは変調波と搬送波を区別し、搬送波周波数とスイッチング頻度を対応させる。'
)
replace_once(
    main,
    '- 誘導性負荷でスイッチOFFと同時に電流がゼロになると考える。',
    '- 誘導性負荷でスイッチOFFと同時に電流がゼロになると考える。\n- IGBT以外の自己消弧形スイッチング素子を問われたとき、還流用の逆並列ダイオードを選ぶ。代表例は MOSFET であり、役割が異なる。'
)
replace_once(
    main,
    '- 固定26答案要素の本文マッピング: `26 / 26 PASS`',
    '- 固定26答案要素の本文マッピング: `26 / 26 PASS`\n- blind再解答QA指摘の R7 一次「機械」問4 (3): `source補正済み / IGBT・MOSFET識別と逆並列ダイオードとの差を追加`'
)
replace_once(
    main,
    '固定EXAM_ALIGNMENTと本文を変更せず、解説PDFを制作する。完成後blind再解答まで正答記号・固定過去問の個別最終解をsourceへ保存しない。',
    '固定EXAM_ALIGNMENT、SPEC固定範囲、共通仮定モデルを変更せず、今回の最小補正を解説PDF・練習PDF・PowerPointへ同期する。同期後にblind再解答前ゲートを作り直す。'
)

# Practice source: repair the incorrect EXAM_ALIGNMENT mapping and train the missing identification explicitly.
replace_once(
    practice,
    '作成後、正答欄を参照せず式・数値・論理と一次問題の正答一意性を独立再計算し、数値・論理 `12 / 12 PASS`、一次正答一意性 `8 / 8 PASS` とした。',
    '作成後、正答欄を参照せず式・数値・論理と一次問題の正答一意性を独立再計算し、数値・論理 `12 / 12 PASS`、一次正答一意性 `8 / 8 PASS` とした。完成後blind再解答QAで判明した R7一次「機械」問4 (3) の誤マッピングを修正し、IGBT/MOSFETの識別と逆並列ダイオードとの役割差を一次1・二次1(d)へ最小追加した。固定問題数・正答・式系は変更していない。'
)
replace_once(
    practice,
    '| R7 一次 機械 問4 (3) | 一次1、二次1 | 逆並列ダイオードによる還流 |',
    '| R7 一次 機械 問4 (3) | 一次1、二次1(d) | 自己消弧形スイッチング素子（IGBT/MOSFET）の識別、逆並列ダイオードとの役割差 |'
)
replace_once(
    practice,
    '3. 誘導性負荷では主スイッチOFF後も電流が連続するため、逆並列ダイオード等の還流経路が必要になる。',
    '3. 誘導性負荷では主スイッチOFF後も電流が連続するため逆並列ダイオード等の還流経路が必要であり、電圧形インバータの代表的な自己消弧形スイッチング素子には IGBT や MOSFET がある。'
)
replace_once(
    practice,
    '上下スイッチの同時ONは直流電源短絡につながるため避ける。デッドタイムは、一方をOFFしてから他方をONするまでの休止時間を設け、上下同時導通を防ぐためのものである。',
    '上下スイッチの同時ONは直流電源短絡につながるため避ける。デッドタイムは、一方をOFFしてから他方をONするまでの休止時間を設け、上下同時導通を防ぐためのものである。IGBT と MOSFET は自己消弧形スイッチング素子の代表例である。一方、逆並列ダイオードは誘導性負荷の還流経路を担うため、スイッチング素子の識別問題で混同しない。'
)
replace_once(
    practice,
    '(d) 正弦波変調波と三角搬送波を用いるPWMで、搬送波周波数とスイッチング頻度の関係を説明せよ。',
    '(d) 正弦波変調波と三角搬送波を用いるPWMで、搬送波周波数とスイッチング頻度の関係を説明せよ。さらに、IGBT以外の代表的な自己消弧形スイッチング素子を1つ挙げ、逆並列ダイオードとの役割の違いを述べよ。'
)
replace_once(
    practice,
    '(d) PWMでは変調波と搬送波の大小比較でゲートパルスを作る。搬送波周波数を高くすると、一般に1秒当たりの代表スイッチング回数も増える。出力基本波周波数と搬送波周波数を混同しない。',
    '(d) PWMでは変調波と搬送波の大小比較でゲートパルスを作る。搬送波周波数を高くすると、一般に1秒当たりの代表スイッチング回数も増える。出力基本波周波数と搬送波周波数を混同しない。IGBT以外の代表的な自己消弧形スイッチング素子として MOSFET がある。逆並列ダイオードは誘導性負荷の還流経路を与える素子であり、自己消弧形スイッチング素子とは役割が異なる。'
)
replace_once(
    practice,
    '- 一次1: `PASS` — 誘導性負荷の電流連続、還流、デッドタイムに矛盾なし',
    '- 一次1: `PASS` — 誘導性負荷の電流連続、還流、デッドタイム、IGBT/MOSFET識別と逆並列ダイオードの役割差に矛盾なし'
)
replace_once(practice, 'current_status: `topic_16_practice_source_complete`', 'current_status: `topic_16_source_revision_complete`')
replace_once(
    practice,
    '次はこのsourceから練習PDFを制作する。固定EXAM_ALIGNMENT、SPEC固定範囲、共通仮定モデル、問題・正答・完全解説を変更しない。',
    '次は今回の最小補正を練習PDFへ同期する。固定EXAM_ALIGNMENT、SPEC固定範囲、共通仮定モデル、問題数・正答・式系は変更しない。'
)

# STATUS: source correction is one completed stage; binary artifacts remain pending.
replace_once(status, '- current_status: `topic_16_blind_reanswer_qa_needs_revision`', '- current_status: `topic_16_source_revision_complete`')
replace_once(
    status,
    '- next_start: 固定範囲を広げず、R7一次「機械」問4 (3) に必要な自己消弧形スイッチング素子の最小説明を教材へ補い、練習sourceの当該EXAM_ALIGNMENT対応を修正し、必要成果物へ同期する',
    '- next_start: sourceで補正した R7一次「機械」問4 (3) の最小説明を解説PDF・練習PDF・PowerPointへ同期し、表示QA後にblind再解答前ゲートを作り直す'
)
replace_once(status, '- [ ] 16 700系 多レベル変換器とPWM — BLIND_REANSWER_QA_NEEDS_REVISION / 制作中', '- [ ] 16 700系 多レベル変換器とPWM — SOURCE_REVISION_COMPLETE / 制作中')
replace_once(
    status,
    '## Topic 16 解説source\n- 解説本文: `完成 / blind QAで1答案要素の説明不足を検出`\n- 3段階例題: `3 / 3 PASS`\n- 固定5過去問・26答案要素の実効本文マッピング: `25 / 26 PASS`\n- 不足: `R7 一次 機械 問4 (3) 自己消弧形スイッチング素子の識別`\n- SPEC指定8項目: `8 / 8 covered`\n- SPEC指定3可視化の再生成条件: `3 / 3 PASS`\n- 固定EXAM_ALIGNMENT変更: `0件`\n- 判定: `NEEDS_REVISION`',
    '## Topic 16 解説source\n- 解説本文: `完成 / blind QA指摘1答案要素を最小補正済み`\n- 3段階例題: `3 / 3 PASS`\n- 固定5過去問・26答案要素の実効本文マッピング: `26 / 26 PASS`\n- 補正: `R7 一次 機械 問4 (3) — IGBT/MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードとの差を明記`\n- SPEC指定8項目: `8 / 8 covered`\n- SPEC指定3可視化の再生成条件: `3 / 3 PASS`\n- 固定EXAM_ALIGNMENT変更: `0件`\n- SPEC外追加: `0件`\n- 判定: `PASS / SOURCE_REVISION_COMPLETE`'
)
replace_once(
    status,
    '- 固定5過去問・26答案要素の実効接続: `25 / 26 PASS`\n- 不整合: `R7 一次 機械 問4 (3) を逆並列ダイオードへ誤マッピング`',
    '- 固定5過去問・26答案要素の実効接続: `26 / 26 PASS`\n- 補正: `R7 一次 機械 問4 (3) を自己消弧形スイッチング素子（IGBT/MOSFET）の識別へ正しく再マッピング`'
)
replace_once(
    status,
    '- 判定: `NEEDS_REVISION`\n\n## Topic 16 練習PDF',
    '- 判定: `PASS / SOURCE_REVISION_COMPLETE`\n\n## Topic 16 練習PDF'
)
replace_once(
    status,
    '## 次工程\n固定範囲を広げず、R7一次「機械」問4 (3) に必要な自己消弧形スイッチング素子の最小説明をmain sourceへ補い、練習sourceの当該EXAM_ALIGNMENT対応を修正する。必要なPDF・PowerPointにも同じ最小補正を同期する。その後、公式解答と本QAを先読み対象から外す再解答ゲートを作り直す。',
    '## 次工程\nsource補正は完了。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデルを変更せず、同じ最小補正を解説PDF・練習PDF・PowerPointへ同期して表示QAする。その後、公式解答と旧blind QAを先読み対象から外す再解答ゲートを作り直す。'
)

# HANDOFF: preserve the historical blind-QA result, but move current position to corrected sources.
replace_once(
    handoff,
    '現在地は `topic_16_blind_reanswer_qa_needs_revision`。Topic 16 `700系 多レベル変換器とPWM` は、固定5問・26答案要素の候補答案を公式解答・標準解答と照合し、内容としては `26 / 26 一致相当` を確認した。一方、EXAM_ALIGNMENT_SPECの「教材だけで独立再解答できること」を再監査した結果、R7一次「機械」問4 (3) の自己消弧形スイッチング素子の識別が完成教材だけでは導けず、教材内根拠は `25 / 26 PASS`。Topic 16はcompletedにせず `NEEDS_REVISION` とした。\n\n次工程は固定範囲を広げず、当該1答案要素に必要な最小説明をmain sourceへ補い、練習sourceの誤マッピングを修正し、必要成果物へ同期する。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデル、範囲境界は変更しない。',
    '現在地は `topic_16_source_revision_complete`。Topic 16 `700系 多レベル変換器とPWM` は、blind再解答QAで検出した R7一次「機械」問4 (3) の1答案要素不足について、公式問題文・解答群に基づき main source へ IGBT/MOSFET の識別と逆並列ダイオードとの役割差を最小補正した。練習sourceの誤マッピングも同じ論点へ修正し、一次1・二次1(d)で明示的に訓練できるようにした。source段階の固定5問・26答案要素は `26 / 26` へ復帰した。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデル、範囲境界は変更していない。Topic 16はPDF/PPTX同期とblind再試験が残るためcompletedにはしない。\n\n次工程は今回の最小補正を解説PDF・練習PDF・PowerPointへ同期し、表示QAを行う。その後、公式解答と旧blind QAを先読み対象から外した再解答ゲートを作り直す。'
)
replace_once(
    handoff,
    '## Topic 16 解説source\n- 解説本文: `完成 / blind QAで1答案要素の説明不足を検出`\n- 3段階例題: `3 / 3 PASS`\n- 固定5過去問・26答案要素の実効本文マッピング: `25 / 26 PASS`\n- 不足: `R7 一次 機械 問4 (3) 自己消弧形スイッチング素子の識別`\n- SPEC指定8項目: `8 / 8 covered`\n- SPEC指定3可視化の再生成条件: `3 / 3 PASS`\n- 共通仮定モデルの実車値誤認防止: `PASS`\n- 固定EXAM_ALIGNMENT変更: `0件`\n- 判定: `NEEDS_REVISION`',
    '## Topic 16 解説source\n- 解説本文: `完成 / blind QA指摘1答案要素を最小補正済み`\n- 3段階例題: `3 / 3 PASS`\n- 固定5過去問・26答案要素の実効本文マッピング: `26 / 26 PASS`\n- 補正: `R7 一次 機械 問4 (3) — IGBT/MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードとの差を明記`\n- SPEC指定8項目: `8 / 8 covered`\n- SPEC指定3可視化の再生成条件: `3 / 3 PASS`\n- 共通仮定モデルの実車値誤認防止: `PASS`\n- 固定EXAM_ALIGNMENT変更: `0件`\n- SPEC外追加: `0件`\n- 判定: `PASS / SOURCE_REVISION_COMPLETE`'
)
replace_once(
    handoff,
    '- 固定5過去問・26答案要素の実効接続: `25 / 26 PASS`\n- 不整合: `R7 一次 機械 問4 (3) を逆並列ダイオードへ誤マッピング`',
    '- 固定5過去問・26答案要素の実効接続: `26 / 26 PASS`\n- 補正: `R7 一次 機械 問4 (3) を自己消弧形スイッチング素子（IGBT/MOSFET）の識別へ正しく再マッピング`'
)
replace_once(
    handoff,
    '- 判定: `NEEDS_REVISION`\n\n## Topic 16 練習PDF',
    '- 判定: `PASS / SOURCE_REVISION_COMPLETE`\n\n## Topic 16 練習PDF'
)
replace_once(
    handoff,
    '## 次工程\n固定範囲を広げず、R7一次「機械」問4 (3) に必要な自己消弧形スイッチング素子の最小説明をmain sourceへ補い、練習sourceの当該EXAM_ALIGNMENT対応を修正する。必要なPDF・PowerPointにも同じ最小補正を同期する。その後、公式解答と本QAを先読み対象から外す再解答ゲートを作り直す。',
    '## 次工程\nsource補正は完了。固定範囲を広げず、同じ最小補正を解説PDF・練習PDF・PowerPointへ同期して表示QAする。その後、公式解答と旧blind QAを先読み対象から外す再解答ゲートを作り直す。'
)

print('Topic 16 source revision applied successfully.')
