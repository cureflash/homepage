# Topic 23 N700S SiC主変換装置 — clean blind後 成果物同期QA

更新日: 2026-09-19

判定: `SYNC_REQUIRED / 3 ARTIFACTS`

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近worker成果を確認した。

- 初回clean blind候補固定: `17837d40774f12e8348e9b55f250d5573b35f901`
- 公式照合FAIL記録: `beadcbf4c1b11b81d0425303d559adbe181ed21b`
- 解説source補強: `c778f6afcdc0132824bc4321099e1257b78c979c`
- 練習source補強: `49758b6587fa8ce4bd2b6a8e27b0936d6c430871`
- source補強進捗同期: `bd1b9ca1522f891f8cb27b2fa363388a2002799d`、`7b6cf706ca24ee55f81cb34f1ebcc4252cf2f753`、`66022f87f3fad268d1dc8fe39a80c3e95fbbb799`

同一工程の重複実施はしない。初回候補・公式照合記録も上書きしない。

## 補強対象2点

1. R2一次「機械」問2 `(2)`
   - 問題図の電圧矢印極性を確認し、S ON / OFF状態表を作ってから平均化する。
   - 固定問では S ON中 `v=V_dc`、S OFF還流中 `v=0` なので `V=D V_dc`。
2. R2一次「機械」問2 `(4)`
   - `1/2` / `1/6` を暗記せず、与えられた `p(t)=v(t)i(t)` を積分する。
   - 固定問の図3では `p(t)=i_s v_s` 自体が三角波なので `W_off=(1/2)V_dc I_dc T_2`。
   - `VI t_s/6` は電圧・電流が相補的な直線ランプとなる別条件に限定する。

一般式 `E_sw=∫v(t)i(t)dt`、固定EXAM_ALIGNMENT、SPECは変更しない。

## 1. 解説PDF

既存QA `23_n700s_sic_main_converter_explanation_pdf_qa.md` は、補強前の解説sourceから生成したPDFを対象としている。既存QAは固定R2一次問2を `covered` としていたが、その後のclean blindで `(2),(4)` の誤答が実際に発生し、source側に必要説明不足が確定した。

したがって、補強前PDFを最終成果物として維持すると、修正済みsourceと内容が不一致となり、完成後独立試験の再発防止根拠をPDF側で満たせない。

判定: `REGENERATE_REQUIRED`

必要同期:
- 「矢印極性→状態表→平均値」と `V=D V_dc`
- `p(t)` 実波形積分、固定問の三角波 `1/2` と別条件 `1/6` の区別

## 2. 練習PDF

既存QA `23_n700s_sic_main_converter_practice_pdf_qa.md` は「sourceから問題条件・正答・計算値の変更0件」と記録しているため、補強前practice sourceの内容をそのまま反映した成果物である。

補強前sourceの一次問4は相補直線ランプから `VI t_s/6` を正しく導出していたが、「この係数は当該波形条件だけ」という固定R2問2との切り分け説明が不足していた。また、固定R2問2 `(2)` に必要な図の極性→状態表の読図ルールも欠けていた。

判定: `REGENERATE_REQUIRED`

必要同期:
- 共通読図ルール2点
- 一次問4の `1/6` を別波形へ一般化しない注記

問題数、正答、既存12問の数値は変更不要。

## 3. 解説画像PowerPoint

既存QA `23_n700s_sic_main_converter_powerpoint_qa.md` の内容一覧には、一般式 `p=vi`、`P_sw=f_s(E_on+E_off)`、H24二次の平均化、3可視化はあるが、今回の補強2点である

- 固定R2問2の「矢印極性→状態表→`D V_dc`」
- 三角形の `p(t)` なら `1/2`、相補直線ランプなら `1/6` という波形条件の区別

が明示されていない。一方、同QAはR2一次問2 `(1)〜(5)` を `5 / 5 covered` としていたため、clean blind結果を受けた品質ゲートとしては更新が必要。

判定: `REGENERATE_REQUIRED`

既存6枚構成を増やすこと自体は要求しない。固定内容を崩さず、補強2点を既存スライド内へ反映できるかを優先する。

## 総合判定

- 解説PDF: `SYNC REQUIRED`
- 練習PDF: `SYNC REQUIRED`
- PowerPoint: `SYNC REQUIRED`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- N700S未確認実車値の真値化: `0件`
- Topic 21 H26二次 問1(4)の一般式変更: `0件`
- 新たな確定不能事項: `0件`

3成果物とも補強前sourceを基に作成され、初回clean blindで不足が実証された2点を最終成果物へ反映する必要があるため、同期不要とは判定しない。

## 次工程

修正済みsourceを正本として、解説PDF・練習PDF・PowerPointの3成果物を必要最小限で再生成し、それぞれ表示QAと内容QAを更新する。初回clean blind候補・公式照合記録は変更しない。3成果物同期後に、別ファイルで修正後clean blind再試験を行う。
