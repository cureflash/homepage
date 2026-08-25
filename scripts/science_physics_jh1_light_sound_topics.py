"""Structured junior-high grade-1 physics retrieval facts for light and sound.

These definitions are content-only. Generation, independent validation, PDF rendering,
and catalog publication stay in the shared worksheet infrastructure.
"""

JH1_LIGHT_SOUND_SEEDS = (6301, 6302, 6303)
# Ten problems deliberately keep these text-heavy sheets in the renderer's first
# column, giving each concise prompt the full printable page width.
JH1_LIGHT_SOUND_PROBLEM_COUNT = 10

_LIGHT_FORWARD = [
    {"template": "反射：入射角と反射角は{answer}。", "answer": ["等しい"]},
    {"template": "空気→ガラス：屈折角は{answer}。", "answer": ["入射角より小さい"]},
    {"template": "ガラス→空気：屈折角は{answer}。", "answer": ["入射角より大きい"]},
    {"template": "全反射：光は境界面で{answer}。", "answer": ["すべて反射する"]},
    {"template": "焦点：平行光線が{answer}。", "answer": ["集まる点"]},
    {"template": "実像：{answer}に映せる像。", "answer": ["スクリーン"]},
    {"template": "虚像：{answer}には映せない像。", "answer": ["スクリーン"]},
    {"template": "焦点内の物体：{answer}が見える。", "answer": ["拡大した虚像"]},
    {"template": "白色光＋プリズム：{answer}。", "answer": ["いろいろな色に分かれる"]},
    {"template": "凸レンズ：物体の位置で像の{answer}が変わる。", "answer": ["位置・大きさ・向き"]},
]

_LIGHT_REVERSE = [
    {"template": "入射角＝反射角という規則：{answer}", "answer": ["反射の規則"]},
    {"template": "境界面で光が曲がる現象：{answer}", "answer": ["屈折"]},
    {"template": "境界面で光が全部反射：{answer}", "answer": ["全反射"]},
    {"template": "平行光線が凸レンズで集まる点：{answer}", "answer": ["焦点"]},
    {"template": "スクリーンに映せる像：{answer}", "answer": ["実像"]},
    {"template": "スクリーンに映せない像：{answer}", "answer": ["虚像"]},
    {"template": "焦点内で見える拡大像：{answer}", "answer": ["虚像"]},
    {"template": "白色光を色に分ける道具の例：{answer}", "answer": ["プリズム"]},
    {"template": "空気→ガラスで小さくなる角：{answer}", "answer": ["屈折角"]},
    {"template": "鏡へ入る光が法線となす角：{answer}", "answer": ["入射角"]},
]

_LIGHT_FILL = [
    {"template": "反射の規則：入射角{answer}反射角。", "answer": ["＝", "="]},
    {"template": "空気→水：屈折角は入射角より{answer}。", "answer": ["小さい"]},
    {"template": "水→空気：屈折角は入射角より{answer}。", "answer": ["大きい"]},
    {"template": "入射角を大きくすると{answer}が起こる場合がある。", "answer": ["全反射"]},
    {"template": "凸レンズの平行光線が集まる点を{answer}という。", "answer": ["焦点"]},
    {"template": "スクリーンに映る像を{answer}という。", "answer": ["実像"]},
    {"template": "スクリーンに映らない像を{answer}という。", "answer": ["虚像"]},
    {"template": "物体が焦点の内側：{answer}した虚像が見える。", "answer": ["拡大"]},
    {"template": "白色光はプリズムで{answer}に分かれる。", "answer": ["いろいろな色"]},
    {"template": "凸レンズの像は物体の{answer}で変化する。", "answer": ["位置"]},
]

_SOUND_FORWARD = [
    {"template": "音：物体の{answer}で生じる。", "answer": ["振動"]},
    {"template": "音：振動が{answer}などを伝わる。", "answer": ["空気中"]},
    {"template": "音を伝えるには{answer}が必要。", "answer": ["空気などの物質"]},
    {"template": "空気中の音：{answer}として伝わる。", "answer": ["波"]},
    {"template": "音の大きさ：発音体の{answer}に関係。", "answer": ["振幅"]},
    {"template": "振幅が大きい：音は{answer}。", "answer": ["大きい"]},
    {"template": "振幅が小さい：音は{answer}。", "answer": ["小さい"]},
    {"template": "音の高さ：発音体の{answer}に関係。", "answer": ["振動数"]},
    {"template": "振動数が大きい：音は{answer}。", "answer": ["高い"]},
    {"template": "振動数が小さい：音は{answer}。", "answer": ["低い"]},
]

_SOUND_REVERSE = [
    {"template": "音を生じさせる物体の動き：{answer}", "answer": ["振動"]},
    {"template": "音を伝える物質の例：{answer}", "answer": ["空気"]},
    {"template": "空気中での音の伝わり方：{answer}", "answer": ["波"]},
    {"template": "音の大きさに関係する量：{answer}", "answer": ["振幅"]},
    {"template": "大きい音で大きい量：{answer}", "answer": ["振幅"]},
    {"template": "小さい音で小さい量：{answer}", "answer": ["振幅"]},
    {"template": "音の高さに関係する量：{answer}", "answer": ["振動数"]},
    {"template": "高い音で大きい量：{answer}", "answer": ["振動数"]},
    {"template": "低い音で小さい量：{answer}", "answer": ["振動数"]},
    {"template": "真空で音が伝わらない理由：伝える{answer}がない。", "answer": ["物質"]},
]

_SOUND_FILL = [
    {"template": "物体が{answer}すると音が生じる。", "answer": ["振動"]},
    {"template": "音は空気中などを{answer}として伝わる。", "answer": ["波"]},
    {"template": "真空では音を伝える{answer}がない。", "answer": ["物質"]},
    {"template": "音が大きいほど振幅は{answer}。", "answer": ["大きい"]},
    {"template": "音が小さいほど振幅は{answer}。", "answer": ["小さい"]},
    {"template": "音が高いほど振動数は{answer}。", "answer": ["大きい"]},
    {"template": "音が低いほど振動数は{answer}。", "answer": ["小さい"]},
    {"template": "音の大小は発音体の{answer}に関係する。", "answer": ["振幅"]},
    {"template": "音の高低は発音体の{answer}に関係する。", "answer": ["振動数"]},
    {"template": "音の振動は空気中などを{answer}。", "answer": ["伝わる"]},
]


def _mode(label, worksheet_mode, description, items):
    return {
        "label": label,
        "worksheet_mode": worksheet_mode,
        "description": description,
        "spec": {"mode": "fill", "items": items},
    }


JH1_PHYSICS_LIGHT_SOUND_TOPICS = {
    "light": {
        "title": "中1理科 光の基本事項",
        "unit": "光と音",
        "skill": "light-basic-retrieval",
        "modes": {
            "forward": _mode("事項→性質", "retrieval-forward", "反射・屈折・凸レンズ・像の基本事項を、事項から性質へ取り出す反復です。", _LIGHT_FORWARD),
            "reverse": _mode("性質→用語", "retrieval-reverse", "光の性質や像の説明から、対応する用語を逆向きに取り出す反復です。", _LIGHT_REVERSE),
            "fill": _mode("関係穴埋め", "retrieval-fill", "反射・屈折・凸レンズの定性的な関係を短い穴埋めで確認します。", _LIGHT_FILL),
        },
    },
    "sound": {
        "title": "中1理科 音の基本事項",
        "unit": "光と音",
        "skill": "sound-basic-retrieval",
        "modes": {
            "forward": _mode("事項→性質", "retrieval-forward", "音の発生・伝わり方・振幅・振動数の基本事項を、事項から性質へ取り出す反復です。", _SOUND_FORWARD),
            "reverse": _mode("性質→用語", "retrieval-reverse", "音の大小・高低や伝わり方の説明から、振幅・振動数などを逆向きに取り出す反復です。", _SOUND_REVERSE),
            "fill": _mode("関係穴埋め", "retrieval-fill", "音の発生・伝達と、音の大小・高低の関係を短い穴埋めで確認します。", _SOUND_FILL),
        },
    },
}
