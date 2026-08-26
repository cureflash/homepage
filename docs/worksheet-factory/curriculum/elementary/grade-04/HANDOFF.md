# 小学4年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 共通Factory指示を再確認し、小1〜小3の `STATUS.json` が `done`、小4が最初の未完了学年であることを確認した。
- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第4学年 A「数と計算」を再確認した。
  - 第4学年では億・兆までの整数、小数・分数、2位数などによる除法、四則混合式などを扱う。
  - 大きな整数については既習の十進位取り記数法と加減計算を活用して扱えるため、最初の反復教材として5桁・6桁の加減を実装した。
  - PLANにある `2桁×2桁 / 3桁×2桁` は、現行解説では第3学年の「2位数や3位数の乗法」に含まれるため、小4で同内容を重複公開するのは避ける。小4独自の次項目は2位数などによる除法とする。
- `scripts/publish_grade4_large_integer_add_sub.py` を追加した。
- 次の4技能を追加した。
  - 5桁のたし算
  - 6桁のたし算
  - 5桁のひき算
  - 6桁のひき算
- 各技能を seed=4101/4202/4303 の3variantで生成し、新規12PDFを公開した。
- 各プリントは20問。加法は全問に少なくとも1回の繰り上がり、減法は全問に少なくとも1回の繰り下がりを含む。
- 生成器が保持する答えとは別に `independent_answer()` で全問を再計算する。
- 問題番号は通常整数表記、解答ページは元の問題配置を再掲して赤字解答を追加する既存共通rendererを使用する。
- 正規化 `content_hash` でvariant間および既存カタログとの教材内容重複を拒否する。
- `tests/test_grade4_large_integer_add_sub_publisher.py` を追加し、決定性、桁範囲、繰り上がり/繰り下がり、独立解答、重複、PDF2ページ、カタログ、冪等性を検証するようにした。
- `.github/workflows/grade4-core-publish.yml` を追加し、latest mainを再取得して生成・Grade 4テスト・共通Factoryテストを通した後だけPDFとカタログをmainへ公開するcheckpointを作った。

## 現在の公開範囲

- 小4算数: 4技能。
- 4技能 × 3variant = 12PDF。
- 公開先: `materials/worksheets/elementary/grade-04/`。
- `worksheets/catalog.json` 登録済み。

## 検証

GitHub Actions `Grade 4 worksheet factory checkpoint` run `32921341950` が成功した。

- `python scripts/publish_grade4_large_integer_add_sub.py .` → 新規12PDF生成
- `python tests/test_grade4_large_integer_add_sub_publisher.py` → OK
- `python tests/test_worksheet_factory.py` → OK
- latest main再確認後に公開

公開コミットは `33ab3d4` (`Publish grade 4 worksheet checkpoint`)。

## 未完了

- 2位数などで割る整数のわり算
- 小数（1/100の位など）のたし算・ひき算
- 小数×整数
- 小数÷整数
- 同分母分数のたし算・ひき算
- 帯分数・仮分数の変換
- 四則計算の順序・かっこ付き計算
- 四則混合計算
- 億・兆の位取り
- 概数・四捨五入
- 学年総復習

`2桁×2桁 / 3桁×2桁` は第3学年範囲と重複するため、小4の新規技能としては追加しない。

## 次にやること

文部科学省の第4学年「2位数などによる除法」を再確認したうえで、**2桁の除数による整数のわり算**を実装する。まず「割り切れる」と「あまりあり」を別技能にし、商・余りを独立再計算できる構造、除数×商+余り=被除数の検証、決定的seed、問題内/教材間重複検査、問題と同位置への赤字解答、PDF/カタログ登録、Grade 4 checkpoint回帰テストまで通す。
