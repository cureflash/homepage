window.SOCIAL_WORKSHEET_DATA = {
  id: "jh-history-jomon-yayoi-001",
  title: "縄文時代と弥生時代",
  subtitle: "くらしの変化を、資料といっしょに覚える",
  schoolStage: "junior-high",
  field: "history",
  unit: "古代までの日本",
  practicalGradeGroup: "中学・歴史導入",
  factcheckStatus: "verified",
  timeline: [
    { label: "縄文時代", note: "定住し、狩り・採集・漁などを行う" },
    { label: "弥生時代", note: "水田稲作が広がり、社会が変化する" }
  ],
  sections: [
    {
      id: "jomon",
      heading: "縄文時代",
      lead: "自然の恵みを利用しながら、定住する生活が広がった。",
      sentences: [
        {
          id: "jomon-01",
          template: "人々は狩り・採集・漁などを行い、{{竪穴住居}}に住んで定住生活を送った。",
          terms: ["竪穴住居"],
          importance: "A",
          sources: ["rekihaku-room1", "rekihaku-pit-dwelling"],
          factcheckStatus: "verified"
        },
        {
          id: "jomon-02",
          template: "食べ物の煮炊きなどに{{縄文土器}}が使われ、食べた貝殻などが積もった{{貝塚}}も残された。",
          terms: ["縄文土器", "貝塚"],
          importance: "A",
          sources: ["bunka-jomon-pottery", "bunka-shell-mound"],
          factcheckStatus: "verified"
        },
        {
          id: "jomon-03",
          template: "人の形をした{{土偶}}も作られ、祈りなどに使われたと考えられている。",
          terms: ["土偶"],
          importance: "A",
          sources: ["bunka-dogu"],
          factcheckStatus: "verified"
        }
      ]
    },
    {
      id: "yayoi",
      heading: "弥生時代",
      lead: "水田稲作が広がり、食料の生産や集落の姿が大きく変わった。",
      sentences: [
        {
          id: "yayoi-01",
          template: "約3000年前、朝鮮半島から伝わった{{水田稲作}}が北部九州から日本列島へ広がっていった。",
          terms: ["水田稲作"],
          importance: "A",
          sources: ["rekihaku-room1", "rekihaku-kids-room1", "rekihaku-japan-korea"],
          factcheckStatus: "verified"
        },
        {
          id: "yayoi-02",
          template: "{{弥生土器}}が使われ、米などを保管するための{{高床倉庫}}も作られた。",
          terms: ["弥生土器", "高床倉庫"],
          importance: "A",
          sources: ["commons-yayoi-pottery", "yoshinogari-qa", "yoshinogari-storehouses"],
          factcheckStatus: "verified"
        },
        {
          id: "yayoi-03",
          template: "青銅器や鉄器などの金属器が使われ、祭りには{{銅鐸}}なども用いられた。",
          terms: ["銅鐸"],
          importance: "A",
          sources: ["rekihaku-room1", "rekihaku-kids-room1"],
          factcheckStatus: "verified"
        },
        {
          id: "yayoi-04",
          template: "周囲に壕をめぐらせた{{環濠集落}}が現れ、佐賀県の{{吉野ヶ里遺跡}}は代表的な遺跡の一つである。",
          terms: ["環濠集落", "吉野ヶ里遺跡"],
          importance: "A",
          sources: ["yoshinogari-history", "yoshinogari-south-village"],
          factcheckStatus: "verified"
        }
      ]
    }
  ],
  images: [
    {
      id: "dogu",
      section: "jomon",
      label: "遮光器土偶",
      note: "縄文時代を代表する土偶の一例",
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/%E9%81%AE%E5%85%89%E5%99%A8%E5%9C%9F%E5%81%B6.png",
      sourcePage: "https://commons.wikimedia.org/wiki/File:%E9%81%AE%E5%85%89%E5%99%A8%E5%9C%9F%E5%81%B6.png",
      credit: "東京国立博物館 / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      factcheckStatus: "verified"
    },
    {
      id: "yayoi-pottery",
      section: "yayoi",
      label: "弥生土器",
      note: "岡山県倉敷市・上東遺跡出土、弥生時代後期の器台形土器",
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/%E5%99%A8%E5%8F%B0%E5%BD%A2%E5%9C%9F%E5%99%A8%EF%BC%88%E5%BC%A5%E7%94%9F%E5%9C%9F%E5%99%A8%EF%BC%89.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:%E5%99%A8%E5%8F%B0%E5%BD%A2%E5%9C%9F%E5%99%A8%EF%BC%88%E5%BC%A5%E7%94%9F%E5%9C%9F%E5%99%A8%EF%BC%89.jpg",
      credit: "ColBase（国立博物館所蔵品統合検索システム） / 東京国立博物館 / Wikimedia Commons",
      license: "政府標準利用規約（第2.0版、CC BY 4.0互換）",
      factcheckStatus: "verified"
    },
    {
      id: "dotaku",
      section: "yayoi",
      label: "銅鐸",
      note: "東京国立博物館展示資料の一例",
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/%E6%9D%B1%E4%BA%AC%E5%9B%BD%E7%AB%8B%E5%8D%9A%E7%89%A9%E9%A4%A8%E5%B1%95%E7%A4%BA_%E9%8A%85%E9%90%B8.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:%E6%9D%B1%E4%BA%AC%E5%9B%BD%E7%AB%8B%E5%8D%9A%E7%89%A9%E9%A4%A8%E5%B1%95%E7%A4%BA_%E9%8A%85%E9%90%B8.JPG",
      credit: "Saigen Jiro / Wikimedia Commons",
      license: "Public Domain (PD-self)",
      factcheckStatus: "verified"
    },
    {
      id: "storehouse",
      section: "yayoi",
      label: "高床倉庫（復元）",
      note: "吉野ヶ里遺跡の復元高床倉庫",
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yoshinogari_site%2C_TAKAIYUKASOUKO_%28High-floored_Storehouse%29_1_360-degree.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Yoshinogari_site%2C_TAKAIYUKASOUKO_%28High-floored_Storehouse%29_1_360-degree.jpg",
      credit: "AsPJT / Wikimedia Commons",
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
      id: "rekihaku-room1",
      label: "国立歴史民俗博物館『第1展示室』",
      url: "https://www.rekihaku.ac.jp/exhibitions/room1/"
    },
    {
      id: "rekihaku-kids-room1",
      label: "国立歴史民俗博物館『こどもれきはく 第1展示室』",
      url: "https://www.rekihaku.ac.jp/kids/outline/guidance/room_01/index.html"
    },
    {
      id: "rekihaku-japan-korea",
      label: "国立歴史民俗博物館『先史から近代における日朝交流史像の再構築』",
      url: "https://www.rekihaku.ac.jp/research/list/2022_rekihaku_m_matsuda.html"
    },
    {
      id: "rekihaku-pit-dwelling",
      label: "国立歴史民俗博物館 khirin『竪穴住居跡』",
      url: "https://khirin.rekihaku.ac.jp/pid/nmjh_rekimin_a/20449002.html"
    },
    {
      id: "bunka-jomon-pottery",
      label: "文化遺産オンライン『深鉢形土器』",
      url: "https://online.bunka.go.jp/heritages/detail/522889"
    },
    {
      id: "bunka-shell-mound",
      label: "文化遺産オンライン『赤色顔料付着貝殻』",
      url: "https://online.bunka.go.jp/heritages/detail/466128"
    },
    {
      id: "bunka-dogu",
      label: "文化遺産オンライン『石棒』",
      url: "https://online.bunka.go.jp/heritages/detail/441897"
    },
    {
      id: "yoshinogari-history",
      label: "吉野ヶ里歴史公園『吉野ヶ里の歴史』",
      url: "https://www.yoshinogari.jp/introduction/history/"
    },
    {
      id: "yoshinogari-south-village",
      label: "吉野ヶ里歴史公園『南のムラ』",
      url: "https://www.yoshinogari.jp/introduction/restore/minaminomura/"
    },
    {
      id: "yoshinogari-storehouses",
      label: "吉野ヶ里歴史公園『倉と市』",
      url: "https://www.yoshinogari.jp/introduction/restore/kuratoichi/"
    },
    {
      id: "yoshinogari-qa",
      label: "吉野ヶ里歴史公園『弥生Q＆A』",
      url: "https://www.yoshinogari.jp/introduction/qa/"
    },
    {
      id: "commons-yayoi-pottery",
      label: "Wikimedia Commons『器台形土器（弥生土器）』ファイルページ",
      url: "https://commons.wikimedia.org/wiki/File:%E5%99%A8%E5%8F%B0%E5%BD%A2%E5%9C%9F%E5%99%A8%EF%BC%88%E5%BC%A5%E7%94%9F%E5%9C%9F%E5%99%A8%EF%BC%89.jpg"
    }
  ]
};

window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
window.SOCIAL_WORKSHEET_UNITS.push(window.SOCIAL_WORKSHEET_DATA);
