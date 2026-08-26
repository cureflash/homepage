(() => {
  const commonsImage = (fileName) =>
    `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}`;
  const commonsPage = (fileName) =>
    `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName)}`;

  const figures = {
    himiko: { name: "卑弥呼", era: "弥生時代・3世紀", file: "Yayoi people attires.JPG", credit: "Abasaa / Wikimedia Commons", license: "Public Domain", note: "卑弥呼本人の肖像は現存しないため、吉野ヶ里の弥生人衣装復元展示を学習用イメージとして使用。" },
    shotoku: { name: "聖徳太子", era: "飛鳥時代・6〜7世紀", file: "Portrait_of_Prince_Shōtoku_and_Two_Princes.jpg", credit: "伝・阿佐太子 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "聖徳太子を描いたものとして伝えられてきた肖像。" },
    imoko: { name: "小野妹子", era: "飛鳥時代・7世紀", file: "Ono no Imoko.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "後世に描かれた小野妹子像。" },
    tenji: { name: "中大兄皇子（天智天皇）", era: "飛鳥時代・7世紀", file: "Emperor Tenji.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "中大兄皇子は即位後の天智天皇として描かれた後世の肖像を使用。" },
    kamatari: { name: "中臣鎌足（藤原鎌足）", era: "飛鳥時代・7世紀", file: "Taishokkan portrait of Fujiwara no Kamatari, Kamakura period.jpg", credit: "談山神社蔵 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "鎌倉時代に描かれた藤原鎌足像。" },
    shomu: { name: "聖武天皇", era: "奈良時代・8世紀", file: "Shōmu Ten'nō Zō Mikenji.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "後世に伝わる聖武天皇像。" },
    kanmu: { name: "桓武天皇", era: "奈良末〜平安初期・8〜9世紀", file: "Portrait of Emperor Kanmu.png", credit: "Wikimedia Commons", license: "Public Domain", note: "後世に描かれた桓武天皇像。" },
    michinaga: { name: "藤原道長", era: "平安時代・10〜11世紀", file: "Fujiwara Michinaga.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "後世に描かれた藤原道長像。" },
    murasaki: { name: "紫式部", era: "平安時代・10〜11世紀", file: "Murasaki_Shikibu.jpg", credit: "菊池容斎 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "後世の画家・菊池容斎による紫式部像。" },
    shonagon: { name: "清少納言", era: "平安時代・10〜11世紀", file: "Sei Shonagon3.jpg", credit: "『枕草子絵巻』 / Wikimedia Commons", license: "Public Domain", note: "13世紀の『枕草子絵巻』に描かれた清少納言。" },
    yorimichi: { name: "藤原頼通", era: "平安時代・11世紀", file: "Fujiwara Yorimichi.JPG", credit: "ラッチキング / Wikimedia Commons", license: "Public Domain", note: "2010年に作成され公開された藤原頼通の学習用肖像。" },
    yoritomo: { name: "源頼朝", era: "鎌倉時代・12世紀", file: "Minamoto no Yoritomo.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "源頼朝像として広く知られる伝承肖像。" },
    gotoba: { name: "後鳥羽上皇", era: "鎌倉時代・12〜13世紀", file: "Emperor Go-Toba.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "後鳥羽上皇を描いた肖像。" },
    yasutoki: { name: "北条泰時", era: "鎌倉時代・13世紀", file: "Hōjō Yasutoki.jpg", credit: "Wikimedia Commons", license: "Public Domain", note: "後世に描かれた北条泰時像。" },
    suenaga: { name: "竹崎季長", era: "鎌倉時代・13世紀", file: "Takezaki Suenaga.jpg", credit: "『蒙古襲来絵詞』 / Wikimedia Commons", license: "Public Domain", note: "『蒙古襲来絵詞』に描かれた竹崎季長。" },
    godaigo: { name: "後醍醐天皇", era: "鎌倉末〜南北朝時代・14世紀", file: "Emperor Godaigo (cropped).jpg", credit: "清浄光寺蔵 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "14世紀の後醍醐天皇肖像。" },
    takauji: { name: "足利尊氏", era: "南北朝〜室町時代・14世紀", file: "Ashikaga Takauji Jōdo-ji.jpg", credit: "浄土寺蔵 / Wikimedia Commons", license: "Public Domain", note: "足利尊氏像として伝わる肖像。" },
    yoshimitsu: { name: "足利義満", era: "室町時代・14〜15世紀", file: "Yoshimitsu_Ashikaga_cropped.jpg", credit: "鹿苑寺蔵 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "15世紀初頭の足利義満像。" },
    xavier: { name: "フランシスコ・ザビエル", era: "戦国時代・16世紀", file: "Xabier face.jpg", credit: "神戸市立博物館所蔵作品 / Wikimedia Commons", license: "Public Domain", note: "17世紀初期に日本で描かれたフランシスコ・ザビエル像。" },
    nobunaga: { name: "織田信長", era: "戦国〜安土桃山時代・16世紀", file: "Odanobunaga.jpg", credit: "狩野宗秀筆・長興寺蔵 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "1583年制作の織田信長像。" },
    yoshiaki: { name: "足利義昭", era: "室町末〜安土桃山時代・16世紀", file: "Ashikaga Yoshiaki.jpg", credit: "等持院霊光殿安置像 / Wikimedia Commons", license: "Public Domain", note: "足利義昭坐像の写真資料。" },
    hideyoshi: { name: "豊臣秀吉", era: "安土桃山時代・16世紀", file: "Toyotomi_hideyoshi.jpg", credit: "高台寺蔵 / Wikimedia Commons", license: "Public Domain Mark 1.0", note: "豊臣秀吉を描いた肖像。" },
    ieyasu: { name: "徳川家康", era: "戦国末〜江戸初期・16〜17世紀", file: "Tokugawa_Ieyasu2.JPG", credit: "狩野探幽 / Wikimedia Commons", license: "Public Domain (PD-Japan)", note: "江戸時代前期の徳川家康肖像。" },
    hiroshige: { name: "歌川広重", era: "江戸時代後期・19世紀", file: "Memorial Portrait of Hiroshige, by Kunisada.jpg", credit: "歌川国貞 / Wikimedia Commons", license: "Public Domain / CC0 digital image", note: "1858年に歌川国貞が制作した広重の死絵（追善肖像）。" },
    perry: { name: "ペリー", era: "幕末・19世紀", file: "Commodore Matthew Calbraith Perry.jpg", credit: "Mathew B. Brady / Wikimedia Commons", license: "Public Domain (US)", note: "1856年ごろに撮影されたマシュー・ペリーの肖像写真。" },
    yoshinobu: { name: "徳川慶喜", era: "幕末〜明治・19世紀", file: "TOKUGAWA Yoshinobu.jpg", credit: "国立国会図書館資料 / Wikimedia Commons", license: "Public Domain", note: "徳川慶喜の肖像写真。" }
  };

  Object.values(figures).forEach((figure) => {
    figure.image = commonsImage(figure.file);
    figure.sourcePage = commonsPage(figure.file);
  });

  const specs = [
    ["himiko", "shotoku", "nobunaga"],
    ["shotoku", "imoko", "perry"],
    ["imoko", "kamatari", "hiroshige"],
    ["tenji", "kamatari", "yoshinobu"],
    ["kamatari", "tenji", "ieyasu"],
    ["shomu", "kanmu", "nobunaga"],
    ["kanmu", "shomu", "perry"],
    ["michinaga", "yorimichi", "ieyasu"],
    ["murasaki", "shonagon", "perry"],
    ["shonagon", "murasaki", "nobunaga"],
    ["yorimichi", "michinaga", "yoshinobu"],
    ["yoritomo", "yasutoki", "himiko"],
    ["gotoba", "yasutoki", "ieyasu"],
    ["yasutoki", "gotoba", "perry"],
    ["suenaga", "yoritomo", "himiko"],
    ["godaigo", "takauji", "perry"],
    ["takauji", "godaigo", "himiko"],
    ["yoshimitsu", "takauji", "yoshinobu"],
    ["xavier", "nobunaga", "himiko"],
    ["nobunaga", "hideyoshi", "himiko"],
    ["yoshiaki", "nobunaga", "himiko"],
    ["hideyoshi", "nobunaga", "himiko"],
    ["ieyasu", "hideyoshi", "himiko"],
    ["hiroshige", "yoshinobu", "shotoku"],
    ["perry", "yoshinobu", "himiko"],
    ["yoshinobu", "perry", "shotoku"]
  ].map(([target, plausible, absolute]) => ({ target, plausible, absolute }));

  const questions = specs.map((spec, index) => {
    const orderedKeys = [spec.target, spec.plausible, spec.absolute];
    const rotation = index % 3;
    const rotatedKeys = orderedKeys.slice(rotation).concat(orderedKeys.slice(0, rotation));
    const target = figures[spec.target];
    const absolute = figures[spec.absolute];

    return {
      id: `social-history-figure-${String(index + 1).padStart(2, "0")}`,
      prompt: spec.target === "himiko"
        ? "「卑弥呼」の学習用イメージはどれ？"
        : `「${target.name}」はどれ？`,
      choices: rotatedKeys.map((key) => figures[key]),
      answer: rotatedKeys.indexOf(spec.target),
      absoluteWrong: rotatedKeys.indexOf(spec.absolute),
      explanation: `正解は${target.name}。${target.era}の人物です。絶対アカンは${absolute.name}（${absolute.era}）で、時代が大きくずれています。`
    };
  });

  window.RANKING_CONFIG = {
    questionCount: 7,
    ranks: [
      "一流中学生",
      "上級中学生",
      "普通中学生",
      "見習い中学生",
      "要復習中学生",
      "中学社会そっくりさん",
      "映す価値なし"
    ],
    resultCopy: "社会・歴史人物編の7問が終了しました。",
    gameOverCopy: "映す価値なしになったため、社会・歴史人物編はここで終了です。"
  };

  window.RANKING_QUESTIONS = questions;
  window.SOCIAL_RANKING_FIGURE_COUNT = Object.keys(figures).length;
})();
