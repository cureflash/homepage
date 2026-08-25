(() => {
  const unit = {
    id: "jh-history-sengoku-azuchi-momoyama-001",
    title: "戦国時代と安土桃山時代",
    subtitle: "ヨーロッパ人の来航から織田・豊臣の統一事業までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近世の日本",
    era: "戦国時代・安土桃山時代",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "戦国の争乱が続く中でヨーロッパとの交流が始まり、織田信長と豊臣秀吉が軍事・経済・土地支配の政策を進めて全国統一へ向かった。",
    timeline: [
      { label: "1543年", note: "種子島に鉄砲が伝わる" },
      { label: "1549年", note: "ザビエルが鹿児島に上陸" },
      { label: "1568年", note: "織田信長が足利義昭を奉じて京都へ入る" },
      { label: "1576年", note: "信長が安土城の築城に着手" },
      { label: "1582年", note: "本能寺の変で信長が死去" },
      { label: "1588年", note: "秀吉が刀狩令を出す" },
      { label: "1590年", note: "小田原合戦を経て秀吉の全国統一が成る" }
    ],
    sections: [
      {
        id: "europe-contact-nobunaga",
        heading: "ヨーロッパとの交流と織田信長",
        lead: "16世紀、日本列島には新しい武器や宗教が伝わり、戦国大名の争いと社会の変化に影響を与えた。",
        sentences: [
          {
            id: "sengoku-01",
            template: "1543年、ポルトガル人を乗せた明国船が種子島に漂着し、日本に{{鉄砲}}が伝わった。",
            terms: ["鉄砲"],
            importance: "A",
            sources: ["mext-social-commentary", "nishinoomote-tanegashima-gun", "kagoshima-reimeikan-contact"],
            factcheckStatus: "verified"
          },
          {
            id: "sengoku-02",
            template: "1549年、イエズス会の宣教師{{フランシスコ・ザビエル}}が鹿児島に上陸し、日本で{{キリスト教}}布教の第一歩をしるした。",
            terms: ["フランシスコ・ザビエル", "キリスト教"],
            importance: "A",
            sources: ["mext-social-commentary", "kagoshima-christianity"],
            factcheckStatus: "verified"
          },
          {
            id: "sengoku-03",
            template: "{{織田信長}}は戦国大名との戦いを重ねて勢力を広げ、1568年には足利義昭を奉じて京都に入った。",
            terms: ["織田信長"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-bunpaku-nobunaga"],
            factcheckStatus: "verified"
          },
          {
            id: "sengoku-04",
            template: "信長は安土城下などで、一般に{{楽市楽座}}と呼ばれる商業政策を進め、商人が活動しやすい城下町づくりを進めた。",
            terms: ["楽市楽座"],
            importance: "A",
            sources: ["omihachiman-azuchi-town", "omihachiman-city-history"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "hideyoshi-unification-culture",
        heading: "豊臣秀吉の統一事業と桃山文化",
        lead: "信長の死後、豊臣秀吉が統一事業を引き継ぎ、土地と武器を把握する政策を進めた。",
        sentences: [
          {
            id: "sengoku-05",
            template: "信長の死後、{{豊臣秀吉}}が統一事業を進め、1590年の小田原合戦を経て全国統一を成し遂げた。",
            terms: ["豊臣秀吉"],
            importance: "A",
            sources: ["mext-social-commentary", "odawara-unification"],
            factcheckStatus: "verified"
          },
          {
            id: "sengoku-06",
            template: "秀吉は田畑の面積や等級を調べて石高を定め、耕作者を検地帳に登録する{{太閤検地}}を全国的に進めた。",
            terms: ["太閤検地"],
            importance: "A",
            sources: ["mext-social-commentary", "nagoya-taiko-kenchi", "nta-taiko-kenchi", "osaka-castle-kenchi"],
            factcheckStatus: "verified"
          },
          {
            id: "sengoku-07",
            template: "1588年、秀吉は百姓による刀・脇差・弓・やり・鉄砲などの所持を禁じ、武器を集める{{刀狩}}を命じた。",
            terms: ["刀狩"],
            importance: "A",
            sources: ["mext-social-commentary", "osaka-castle-katanagari", "rekihaku-katanagari"],
            factcheckStatus: "verified"
          },
          {
            id: "sengoku-08",
            template: "城郭や大寺院では金地を用いた大画面の{{障壁画}}なども発達し、武将や豪商の気風や経済力を背景とする豪壮・華麗な{{桃山文化}}が生み出された。",
            terms: ["障壁画", "桃山文化"],
            importance: "B",
            sources: ["mext-social-commentary", "tnm-momoyama", "tnm-momoyama-wall"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "oda-nobunaga-portrait",
        section: "europe-contact-nobunaga",
        label: "織田信長像",
        note: "狩野宗秀筆。1583年制作、長興寺蔵の肖像（画像はパブリックドメイン作品の忠実な複製）",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Odanobunaga.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Odanobunaga.jpg",
        credit: "狩野宗秀筆・長興寺蔵 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "verified"
      },
      {
        id: "toyotomi-hideyoshi-portrait",
        section: "hideyoshi-unification-culture",
        label: "豊臣秀吉像",
        note: "狩野光信筆とされる高台寺所蔵の肖像。1601年（慶長6年）の作（画像はパブリックドメイン作品の忠実な複製）",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyotomi_hideyoshi.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Toyotomi_hideyoshi.jpg",
        credit: "狩野光信筆・高台寺蔵 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "verified"
      }
    ],
    sources: [
      {
        id: "mext-social-commentary",
        label: "文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』",
        url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf"
      },
      {
        id: "nishinoomote-tanegashima-gun",
        label: "西之表市『種子島銃（ポルトガル初伝銃）』",
        url: "https://www.city.nishinoomote.lg.jp/admin/soshiki/kyouikuiinkai/rekishibunkaka/bunkazai/bunkazai/siseki/siteibunnkazai/kennsitei/8388.html"
      },
      {
        id: "kagoshima-reimeikan-contact",
        label: "鹿児島県歴史・美術センター黎明館『鉄砲とキリスト教の伝来』",
        url: "https://www.pref.kagoshima.jp/reimeikan/josetsu/theme/chusei/christ/"
      },
      {
        id: "kagoshima-christianity",
        label: "鹿児島県『キリスト教の伝来』",
        url: "https://www.pref.kagoshima.jp/ab23/pr/gaiyou/rekishi/tyuusei/christ2.html"
      },
      {
        id: "kyoto-bunpaku-nobunaga",
        label: "京都府京都文化博物館『信長上洛～京都・織田信長入京から450年～』",
        url: "https://www.bunpaku.or.jp/exhi_sogo_post/nobunagazyouraku450/"
      },
      {
        id: "omihachiman-azuchi-town",
        label: "近江八幡市『安土城下町の二面性』",
        url: "https://www.city.omihachiman.lg.jp/material/files/group/106/2019-12-1-all.pdf"
      },
      {
        id: "omihachiman-city-history",
        label: "近江八幡市『書籍案内（近江八幡の歴史）』",
        url: "https://www.city.omihachiman.lg.jp/kanko/rekishi/2/30189.html"
      },
      {
        id: "odawara-unification",
        label: "小田原市『小田原城について』",
        url: "https://www.city.odawara.kanagawa.jp/odawaracastle/about/"
      },
      {
        id: "nagoya-taiko-kenchi",
        label: "名古屋市博物館『豊臣秀次朱印状』",
        url: "https://www.museum.city.nagoya.jp/collection/data/data_59/index.html"
      },
      {
        id: "nta-taiko-kenchi",
        label: "国税庁 税務大学校『太閤検地』",
        url: "https://www.nta.go.jp/about/organization/ntc/sozei/quiz/1104/index.htm"
      },
      {
        id: "osaka-castle-kenchi",
        label: "大阪城天守閣『摂津国豊島郡熊野田村検地帳』",
        url: "https://osakacastle.net/library/collection/70/"
      },
      {
        id: "osaka-castle-katanagari",
        label: "大阪城天守閣『豊臣秀吉朱印刀狩条目』",
        url: "https://www.osakacastle.net/library/collection/62/"
      },
      {
        id: "rekihaku-katanagari",
        label: "国立歴史民俗博物館 khirin『刀狩令 複製』",
        url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-358.html"
      },
      {
        id: "tnm-momoyama",
        label: "東京国立博物館『桃山―天下人の100年』作品リスト",
        url: "https://www.tnm.jp/common/fckeditor/editor/filemanager/connectors/php/transfer.php?file=%2Fexhibition%2FSpecial%2F20201006Momoyama%2Fuid000318_6D6F6D6F79616D615F617274776F726B6C6973745F6A615F32303230313032362E706466"
      },
      {
        id: "tnm-momoyama-wall",
        label: "東京国立博物館 桃山時代金碧障屏画資料",
        url: "https://www.tnm.jp/uploads/r_press/212.pdf"
      },
      {
        id: "kodaiji-hideyoshi",
        label: "高台寺 掌美術館『豊臣秀吉像』",
        url: "https://www.kodaiji.com/museum/zoom/hide.html"
      },
      {
        id: "commons-nobunaga",
        label: "Wikimedia Commons『Odanobunaga.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Odanobunaga.jpg"
      },
      {
        id: "commons-hideyoshi",
        label: "Wikimedia Commons『Toyotomi hideyoshi.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Toyotomi_hideyoshi.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
