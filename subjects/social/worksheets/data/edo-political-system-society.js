(() => {
  const unit = {
    id: "jh-history-edo-political-system-society-001",
    title: "江戸幕府の政治と社会",
    subtitle: "幕府と藩の支配、大名統制、身分制と農村の仕組みをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近世の日本",
    era: "江戸時代前期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "江戸幕府は大名を統制しながら各藩に領内政治を担わせ、幕府と藩による支配を整えた。人々はそれぞれの身分や地域社会の中で役割を担い、農村は年貢を通じて幕府や藩の支配を支えた。",
    timeline: [
      { label: "1603年", note: "徳川家康が征夷大将軍となり江戸幕府を開く" },
      { label: "1615年", note: "武家諸法度が諸大名に示される" },
      { label: "1635年", note: "寛永の武家諸法度で参勤交代が制度化される" }
    ],
    sections: [
      {
        id: "bakufu-daimyo-control",
        heading: "江戸幕府と大名統制",
        lead: "徳川氏は江戸を政治の中心とし、大名を統制しながら全国支配の仕組みを整えた。",
        sentences: [
          {
            id: "edo-politics-01",
            template: "1603年、{{徳川家康}}は{{征夷大将軍}}に任じられ、江戸に幕府を開いた。",
            terms: ["徳川家康", "征夷大将軍"],
            importance: "A",
            sources: ["mext-social-commentary", "edo-tokyo-tokugawa"],
            factcheckStatus: "verified"
          },
          {
            id: "edo-politics-02",
            template: "江戸時代には、幕府が大名を統制する一方、大名はそれぞれの領地の政治を担い、{{幕府}}と{{藩}}による支配の仕組みが整えられた。",
            terms: ["幕府", "藩"],
            importance: "A",
            sources: ["mext-social-commentary", "national-archives-daimyo"],
            factcheckStatus: "verified"
          },
          {
            id: "edo-politics-03",
            template: "1615年、幕府は武家全体が守る基本法として{{武家諸法度}}を諸大名に示した。",
            terms: ["武家諸法度"],
            importance: "A",
            sources: ["mext-social-commentary", "national-archives-ieyasu-buke"],
            factcheckStatus: "verified"
          },
          {
            id: "edo-politics-04",
            template: "1635年の武家諸法度では大名の江戸への参勤などが規定され、{{参勤交代}}が制度化された。",
            terms: ["参勤交代"],
            importance: "A",
            sources: ["mext-social-commentary", "ndl-kanei-buke-shohatto", "ndl-sankin-reference"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "status-village",
        heading: "身分制と農村",
        lead: "人々は身分や地域社会の中で仕事と生活を営み、村は農民の生活と年貢納入の基盤になった。",
        sentences: [
          {
            id: "edo-society-01",
            template: "江戸時代の社会には{{武士}}・{{百姓}}・{{町人}}などの身分があり、人々はそれぞれの身分の中で職分を担った。",
            terms: ["武士", "百姓", "町人"],
            importance: "A",
            sources: ["mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "edo-society-02",
            template: "人口の多数を占めた農民は{{村}}を生活の基盤とし、農作業などで助け合いながら暮らしていた。",
            terms: ["村"],
            importance: "A",
            sources: ["mext-social-commentary", "nta-edo-village"],
            factcheckStatus: "verified"
          },
          {
            id: "edo-society-03",
            template: "江戸時代には、村が{{年貢}}と諸役を納める責任を負う{{村請制}}が用いられ、農村は幕府や藩の経済を支えた。",
            terms: ["年貢", "村請制"],
            importance: "A",
            sources: ["mext-social-commentary", "nta-nengu-shoeki", "nta-mitori-nengu"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "tokugawa-ieyasu-portrait",
        section: "bakufu-daimyo-control",
        label: "徳川家康像",
        note: "狩野探幽筆。大阪城天守閣を出典とする江戸時代前期の徳川家康肖像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tokugawa_Ieyasu2.JPG",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Tokugawa_Ieyasu2.JPG",
        credit: "狩野探幽 / Wikimedia Commons（原資料：大阪城天守閣）",
        license: "Public Domain (PD-Japan)",
        factcheckStatus: "verified"
      },
      {
        id: "sonobe-sankin-kotai-procession",
        section: "bakufu-daimyo-control",
        label: "園部藩参勤交代行列図",
        note: "南丹市文化博物館蔵。1904年制作で、嘉永年間ごろの園部藩の参勤交代行列を描いた資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sankiko01.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Sankiko01.jpg",
        credit: "園部藩参勤交代行列図・南丹市文化博物館蔵 / Wikimedia Commons",
        license: "Public Domain (PD-Japan)",
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
        id: "edo-tokyo-tokugawa",
        label: "東京都江戸東京博物館『徳川将軍家へようこそ』",
        url: "https://www.edo-tokyo-museum.or.jp/s-exhibition/house-of-tokugawa/"
      },
      {
        id: "national-archives-daimyo",
        label: "国立公文書館 デジタル展示『大名』",
        url: "https://www.archives.go.jp/exhibition/digital/daimyou/index.html"
      },
      {
        id: "national-archives-ieyasu-buke",
        label: "国立公文書館『家康の内政・外交―武家諸法度』",
        url: "https://www.archives.go.jp/exhibition/digital/ieyasu/contents3_02/03/"
      },
      {
        id: "ndl-kanei-buke-shohatto",
        label: "国立国会図書館サーチ『武家諸法度写』（寛永12年）",
        url: "https://ndlsearch.ndl.go.jp/books/R100000094-I1377368"
      },
      {
        id: "ndl-sankin-reference",
        label: "国立国会図書館 レファレンス協同データベース『参勤交代と大名行列の規定』",
        url: "https://crd.ndl.go.jp/reference/entry/index.php?id=1000024516&page=ref_view"
      },
      {
        id: "nta-edo-village",
        label: "国税庁 税務大学校『江戸時代の年貢の納期と領収書』",
        url: "https://www.nta.go.jp/about/organization/ntc/sozei/network/214.htm"
      },
      {
        id: "nta-nengu-shoeki",
        label: "国税庁 税務大学校『年貢と諸役』",
        url: "https://www.nta.go.jp/about/organization/ntc/sozei/shiryou/library/01.htm"
      },
      {
        id: "nta-mitori-nengu",
        label: "国税庁 税務大学校『見取場の年貢割付状』",
        url: "https://www.nta.go.jp/about/organization/ntc/sozei/network/153.htm"
      },
      {
        id: "commons-ieyasu",
        label: "Wikimedia Commons『Tokugawa Ieyasu2.JPG』",
        url: "https://commons.wikimedia.org/wiki/File:Tokugawa_Ieyasu2.JPG"
      },
      {
        id: "commons-sonobe-procession",
        label: "Wikimedia Commons『Sankiko01.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Sankiko01.jpg"
      }
    ],
    factcheckEvidence: [
      "MEXT commentary pp.106-107: Edo bakufu establishment/daimyo control, status groups and village life, and bakufu-domain rule.",
      "Edo-Tokyo Museum: Ieyasu was appointed Seii Taishogun in 1603 and opened the Edo bakufu.",
      "National Archives of Japan: the 1615 Buke Shohatto was promulgated to daimyo as the fundamental law for warrior houses.",
      "NDL Search: the Kanei Buke Shohatto is dated 1635-06-21; scholarly metadata identifies its provision regulating daimyo sankin and the institutionalization of sankin-kotai.",
      "National Tax College: villages bore responsibility for nengu and other dues under the mura-uke system.",
      "Exact Wikimedia Commons file pages independently confirm both image identities, metadata, and PD-Japan status."
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
