(() => {
  const unit = {
    id: "jh-history-kofun-yamato-001",
    title: "古墳時代と大和政権",
    subtitle: "古墳の広がりから、大和政権の勢力と古代社会を見る",
    schoolStage: "junior-high",
    field: "history",
    unit: "古代までの日本",
    practicalGradeGroup: "中学・歴史導入",
    factcheckStatus: "verified",
    keyPoint: "大きな古墳とその分布は、有力者の存在や大和政権の勢力の広がりを考える手がかりになる。",
    timeline: [
      { label: "3世紀後半ごろ", note: "大規模な古墳が築かれ始める" },
      { label: "4〜5世紀", note: "前方後円墳が各地に広がる" },
      { label: "6世紀", note: "人物などを表す埴輪も多く作られる" }
    ],
    sections: [
      {
        id: "kofun",
        heading: "古墳と有力者",
        lead: "巨大な墓の形や分布は、当時の政治的な力を知る重要な資料になる。",
        sentences: [
          {
            id: "kofun-01",
            template: "3世紀後半ごろから、有力者のための大きな{{古墳}}が各地に築かれるようになった。",
            terms: ["古墳"],
            importance: "A",
            sources: ["mext-social-commentary", "bunka-kofun"],
            factcheckStatus: "verified"
          },
          {
            id: "kofun-02",
            template: "古墳の代表的な形の一つが、前方部と後円部を組み合わせた{{前方後円墳}}である。",
            terms: ["前方後円墳"],
            importance: "A",
            sources: ["mext-social-commentary", "bunka-kofun"],
            factcheckStatus: "verified"
          },
          {
            id: "kofun-03",
            template: "古墳の周囲などには、人物・家・動物などをかたどった{{埴輪}}が置かれた。",
            terms: ["埴輪"],
            importance: "A",
            sources: ["bunka-haniwa"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "yamato",
        heading: "大和政権の広がり",
        lead: "大和地方を中心とした政治勢力は、豪族との結び付きを広げていった。",
        sentences: [
          {
            id: "yamato-01",
            template: "大和地方を中心に有力な豪族をまとめた政治勢力を{{大和政権}}と呼ぶ。",
            terms: ["大和政権"],
            importance: "A",
            sources: ["mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "yamato-02",
            template: "大和政権の勢力の広がりは、各地に分布する大きな{{前方後円墳}}などから考えることができる。",
            terms: ["前方後円墳"],
            importance: "A",
            sources: ["mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "yamato-03",
            template: "朝鮮半島や中国大陸などから日本列島へ移住し、技術や文化を伝えた人々を{{渡来人}}と呼ぶ。",
            terms: ["渡来人"],
            importance: "B",
            sources: ["mext-social-commentary"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "daisen-kofun",
        section: "kofun",
        label: "大仙陵古墳の全景",
        note: "大規模な前方後円墳の例",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daisenryo_Kofun_zenkei.JPG",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Daisenryo_Kofun_zenkei.JPG",
        credit: "Saigen Jiro / Wikimedia Commons",
        license: "CC0 1.0",
        factcheckStatus: "verified"
      },
      {
        id: "warrior-haniwa",
        section: "yamato",
        label: "武人を表した埴輪",
        note: "古墳時代6世紀の人物埴輪（東京国立博物館展示品の写真）",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Warrior_in_Keiko_Armor,_haniwa_(terracotta_tomb_figurine)_from_Niwatorizuka_Tumulus,_Mooka-shi,_Tochigi,_Kofun_period,_6th_century_-_Tokyo_National_Museum_-_DSC05626.JPG",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Warrior_in_Keiko_Armor,_haniwa_(terracotta_tomb_figurine)_from_Niwatorizuka_Tumulus,_Mooka-shi,_Tochigi,_Kofun_period,_6th_century_-_Tokyo_National_Museum_-_DSC05626.JPG",
        credit: "Daderot / Wikimedia Commons",
        license: "CC0 1.0",
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
        id: "bunka-kofun",
        label: "文化庁 文化遺産オンライン（古墳資料）",
        url: "https://bunka.nii.ac.jp/heritages/detail/430012"
      },
      {
        id: "bunka-haniwa",
        label: "文化庁 文化遺産オンライン『埴輪 家』",
        url: "https://bunka.nii.ac.jp/heritages/detail/540954"
      },
      {
        id: "commons-daisen",
        label: "Wikimedia Commons『Daisenryo Kofun zenkei.JPG』",
        url: "https://commons.wikimedia.org/wiki/File:Daisenryo_Kofun_zenkei.JPG"
      },
      {
        id: "commons-haniwa",
        label: "Wikimedia Commons『Warrior in Keiko Armor...DSC05626.JPG』",
        url: "https://commons.wikimedia.org/wiki/File:Warrior_in_Keiko_Armor,_haniwa_(terracotta_tomb_figurine)_from_Niwatorizuka_Tumulus,_Mooka-shi,_Tochigi,_Kofun_period,_6th_century_-_Tokyo_National_Museum_-_DSC05626.JPG"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
