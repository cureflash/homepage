(() => {
  const unit = {
    id: "jh-history-heian-period-001",
    title: "平安時代",
    subtitle: "平安京・摂関政治・国風文化を一枚で整理する",
    schoolStage: "junior-high",
    field: "history",
    unit: "古代までの日本",
    practicalGradeGroup: "中学・歴史導入",
    factcheckStatus: "verified",
    keyPoint: "平安京を中心に貴族政治が展開し、日本独自の国風文化が発達した。",
    timeline: [
      { label: "794年", note: "平安京へ遷都" },
      { label: "10〜11世紀", note: "藤原氏の摂関政治が栄える" },
      { label: "1053年", note: "平等院鳳凰堂が建立" }
    ],
    sections: [
      {
        id: "politics",
        heading: "平安京と貴族政治",
        lead: "都が京都へ移り、やがて藤原氏が天皇との結び付きを背景に大きな力を持った。",
        sentences: [
          {
            id: "heian-01",
            template: "794年、{{桓武天皇}}が新しい都に移り、その都は{{平安京}}と名付けられた。",
            terms: ["桓武天皇", "平安京"],
            importance: "A",
            sources: ["kyoto-history", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "heian-02",
            template: "藤原氏は天皇の外戚として{{摂政}}や{{関白}}の地位につき、{{摂関政治}}を行った。",
            terms: ["摂政", "関白", "摂関政治"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-culture"],
            factcheckStatus: "verified"
          },
          {
            id: "heian-03",
            template: "{{藤原道長}}のころ、藤原氏による摂関政治は全盛期を迎えた。",
            terms: ["藤原道長"],
            importance: "A",
            sources: ["kyoto-culture"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "culture",
        heading: "国風文化",
        lead: "中国文化を基礎にしながら、日本の生活や感覚に合った文化が発達した。",
        sentences: [
          {
            id: "heian-04",
            template: "平安時代には{{かな文字}}が広まり、日本の風土や生活に合った{{国風文化}}が発達した。",
            terms: ["かな文字", "国風文化"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-history"],
            factcheckStatus: "verified"
          },
          {
            id: "heian-05",
            template: "{{紫式部}}は『{{源氏物語}}』を、{{清少納言}}は『{{枕草子}}』を書いた。",
            terms: ["紫式部", "源氏物語", "清少納言", "枕草子"],
            importance: "A",
            sources: ["kyoto-history", "kyoto-culture", "ndl-classics"],
            factcheckStatus: "verified"
          },
          {
            id: "heian-06",
            template: "1053年、関白{{藤原頼通}}が宇治に{{平等院鳳凰堂}}を建立し、当時広がった浄土信仰を今に伝えている。",
            terms: ["藤原頼通", "平等院鳳凰堂"],
            importance: "B",
            sources: ["byodoin-architecture", "byodoin-history"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "murasaki-shikibu",
        section: "culture",
        label: "紫式部を描いた肖像",
        note: "後世の画家・菊池容斎による紫式部像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Murasaki_Shikibu.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Murasaki_Shikibu.jpg",
        credit: "菊池容斎 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "verified"
      },
      {
        id: "byodoin",
        section: "culture",
        label: "平等院鳳凰堂",
        note: "1053年に藤原頼通が建立した阿弥陀堂",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Byodoin.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Byodoin.jpg",
        credit: "Cun Cun / Wikimedia Commons",
        license: "CC BY-SA 4.0",
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
        id: "kyoto-history",
        label: "京都市・京都観光推進協議会『京都の歴史』",
        url: "https://shugakuryoko.kyoto.travel/study/history/"
      },
      {
        id: "kyoto-culture",
        label: "京都市・京都観光推進協議会『京都の文化』",
        url: "https://shugakuryoko.kyoto.travel/study/culture/"
      },
      {
        id: "ndl-classics",
        label: "国立国会図書館 第127回常設展示（古典文学資料）",
        url: "https://dl.ndl.go.jp/view/download/digidepo_999380_po_127.pdf?contentNo=1"
      },
      {
        id: "byodoin-architecture",
        label: "平等院『建築 Architecture』",
        url: "https://www.byodoin.or.jp/learn/architecture/"
      },
      {
        id: "byodoin-history",
        label: "平等院『古今平等院』",
        url: "https://www.byodoin.or.jp/learn/history/"
      },
      {
        id: "commons-murasaki",
        label: "Wikimedia Commons『Murasaki Shikibu.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Murasaki_Shikibu.jpg"
      },
      {
        id: "commons-byodoin",
        label: "Wikimedia Commons『Byodoin.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Byodoin.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
