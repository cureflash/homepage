(() => {
  const unit = {
    id: "jh-history-yayoi-states-yamatai-himiko-001",
    title: "弥生社会と小国・邪馬台国",
    subtitle: "小国の成立と、中国との交流から国家形成の流れを見る",
    schoolStage: "junior-high",
    field: "history",
    unit: "古代までの日本",
    practicalGradeGroup: "中学・歴史導入",
    factcheckStatus: "pending_factcheck",
    keyPoint: "弥生時代には各地に小国が生まれ、中国の史書から奴国や邪馬台国と中国との交流を知ることができる。",
    timeline: [
      { label: "57年", note: "奴国の使いが後漢へ" },
      { label: "3世紀", note: "邪馬台国と卑弥呼が中国史書に登場" },
      { label: "239年", note: "卑弥呼が魏へ使いを送る" }
    ],
    sections: [
      {
        id: "small-states",
        heading: "小国と中国との交流",
        lead: "稲作が広がった弥生社会では、地域をまとめる政治的なまとまりが現れた。",
        sentences: [
          {
            id: "yayoi-states-01",
            template: "弥生時代には各地に{{小国}}が生まれ、北部九州では王の墓と考えられる墓から中国鏡などが見つかっている。",
            terms: ["小国"],
            importance: "A",
            sources: ["fukuoka-excavation-history", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "yayoi-states-02",
            template: "57年、{{奴国}}の使いが中国の{{後漢}}に渡り、皇帝から印綬を授けられたと『後漢書』に記されている。",
            terms: ["奴国", "後漢"],
            importance: "A",
            sources: ["fukuoka-gold-seal", "fukuoka-excavation-history"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "yayoi-states-03",
            template: "福岡市の志賀島で見つかった金印には{{漢委奴国王}}と刻まれ、57年に授けられた印と考えられている。",
            terms: ["漢委奴国王"],
            importance: "A",
            sources: ["fukuoka-gold-seal"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "yamatai",
        heading: "邪馬台国と卑弥呼",
        lead: "3世紀の倭の様子は、中国の歴史書からも知ることができる。",
        sentences: [
          {
            id: "yamatai-01",
            template: "中国の『三国志』の倭人に関する記録は一般に{{魏志倭人伝}}と呼ばれ、{{邪馬台国}}やその女王{{卑弥呼}}について記している。",
            terms: ["魏志倭人伝", "邪馬台国", "卑弥呼"],
            importance: "A",
            sources: ["ndl-yamatai-exhibition", "kunaicho-kosho-2025"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "yamatai-02",
            template: "239年、卑弥呼は中国の{{魏}}に使いを送り、皇帝から{{親魏倭王}}の称号と印綬などを授けられた。",
            terms: ["魏", "親魏倭王"],
            importance: "A",
            sources: ["waseda-history-table", "kyohaku-mirror"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "yamatai-03",
            template: "{{邪馬台国}}がどこにあったかは現在も確定しておらず、代表的な説として九州説と畿内説がある。",
            terms: ["邪馬台国"],
            importance: "B",
            sources: ["rekihaku-yamatai-faq", "ndl-yamatai-exhibition"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "na-gold-seal-replica",
        section: "small-states",
        label: "金印『漢委奴国王』の印面（複製）",
        note: "左が印面、右が文字を読みやすく反転した像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/King_of_Na_gold_seal_faces.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:King_of_Na_gold_seal_faces.jpg",
        credit: "PHGCOM / Wikimedia Commons（Toi Museum replica）",
        license: "CC BY-SA 3.0",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "gishi-wajinden",
        section: "yamatai",
        label: "『魏志倭人伝』の本文資料",
        note: "『三国志』魏書東夷伝倭人条の本文資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gishiwajinden.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Gishiwajinden.jpg",
        credit: "Wikimedia Commons",
        license: "CC0 1.0",
        factcheckStatus: "pending_factcheck"
      }
    ],
    sources: [
      {
        id: "mext-social-commentary",
        label: "文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』",
        url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf"
      },
      {
        id: "fukuoka-gold-seal",
        label: "福岡市博物館『金印』",
        url: "https://museum.city.fukuoka.jp/sp/gold/"
      },
      {
        id: "fukuoka-excavation-history",
        label: "福岡市博物館『発掘が語る福岡の歴史』",
        url: "https://museum.city.fukuoka.jp/archives/leaflet/414/index.html"
      },
      {
        id: "ndl-yamatai-exhibition",
        label: "国立国会図書館『邪馬台国論争』",
        url: "https://dl.ndl.go.jp/view/download/digidepo_999426_po_85.pdf?contentNo=1"
      },
      {
        id: "kunaicho-kosho-2025",
        label: "宮内庁『講書始におけるご進講の内容（令和7年）』",
        url: "https://www.kunaicho.go.jp/learn/culture/kosyo/kosho-r07.html"
      },
      {
        id: "waseda-history-table",
        label: "早稲田大学図書館 古典籍総合データベース『日本史年表』",
        url: "https://www.wul.waseda.ac.jp/kotenseki/ga_jhistory/history_table.html"
      },
      {
        id: "kyohaku-mirror",
        label: "京都国立博物館『謎多き「三角縁神獣鏡」』",
        url: "https://www.kyohaku.go.jp/jp/learn/home/yomimono_data/0063/"
      },
      {
        id: "rekihaku-yamatai-faq",
        label: "国立歴史民俗博物館『よくあるご質問：邪馬台国はどこにあったのですか？』",
        url: "https://www.rekihaku.ac.jp/contact/faq/"
      },
      {
        id: "commons-gold-seal-replica",
        label: "Wikimedia Commons『King of Na gold seal faces.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:King_of_Na_gold_seal_faces.jpg"
      },
      {
        id: "commons-gishi-wajinden",
        label: "Wikimedia Commons『Gishiwajinden.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Gishiwajinden.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
