(() => {
  "use strict";

  const shared = Object.freeze({
    concept_id: "takken-concept-business-definition",
    exam_year: 2026,
    law_as_of: "2026-04-01",
    primary_source_refs: Object.freeze(["egov-takken-act", "mlit-license"]),
    generation_status: "generated",
    validation_status: "verified"
  });

  const rows = [
    ["001", ["takken-k-business-definition-self-sale-exchange"], "宅地建物取引業法上の宅地建物取引業に含まれる行為はどれか。", ["自己所有の宅地を反復継続して売却すること", "自己所有の建物を自ら貸主として賃貸すること", "自己所有建物の清掃を自ら行うこと", "自己所有土地の測量を自ら依頼すること"], 0, "宅地または建物を自ら売買または交換する行為を業として行うことは、宅地建物取引業法2条2号の宅地建物取引業に含まれる。", ["自ら行う売買を業とするため宅建業に含まれる。", "自ら貸主として行う賃貸そのものは宅建業の定義に含まれない。", "清掃は売買・交換・貸借の代理または媒介ではない。", "測量の依頼は法2条2号の取引行為ではない。"]],
    ["002", ["takken-k-business-definition-self-lease-exclusion"], "Aが自己所有の建物を多数の入居者に自ら賃貸している。Aのこの賃貸行為そのものについて、宅地建物取引業法上の扱いとして正しいものはどれか。", ["建物の貸借なので必ず宅建業に当たる", "反復継続していれば自ら貸主でも宅建業に当たる", "自ら貸主として行う賃貸そのものは宅建業に含まれない", "賃料を受領する場合だけ宅建業に当たる"], 2, "所有者が自ら貸主となって宅地または建物を賃貸する行為そのものは、宅地建物取引業法2条2号の宅地建物取引業には含まれない。", ["貸借のすべてが宅建業なのではなく、自ら貸主として行う賃貸は除かれる。", "反復継続性があっても、自ら貸主として行う賃貸という行為類型自体は法2条2号の定義に含まれない。", "正しい。自ら貸主として行う賃貸は宅建業の定義外である。", "賃料受領の有無で宅建業該当性が決まるわけではない。"]],
    ["003", ["takken-k-business-definition-agency-brokerage"], "他人が所有する建物の賃貸借について、借主を探して契約成立を媒介する行為を業として行う場合の説明として正しいものはどれか。", ["貸借は宅建業の対象外なので含まれない", "建物の貸借の媒介を業として行うため宅建業に含まれる", "自ら貸主でない限り宅建業にはならない", "売買の媒介だけが宅建業に含まれる"], 1, "宅地または建物の貸借について代理または媒介を業として行うことは宅建業に含まれる。自ら貸主として賃貸する場合との区別が重要である。", ["貸借そのものが一律に対象外なのではなく、貸借の代理・媒介は対象となる。", "正しい。建物貸借の媒介を業とする行為は宅建業に含まれる。", "自ら貸主でないことは除外理由にならず、他人の貸借の媒介が対象である。", "売買・交換だけでなく貸借の代理・媒介も対象である。"]],
    ["004", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "宅地建物取引業法2条2号の定義に照らし、組合せとして正しいものはどれか。\nア 自己所有宅地の売買を業として行う\nイ 自己所有建物を自ら貸主として賃貸する\nウ 他人の建物賃貸借を媒介することを業として行う", ["アのみ", "イのみ", "アとウ", "イとウ"], 2, "自ら行う宅地・建物の売買または交換は宅建業に含まれ、他人の売買・交換・貸借の代理・媒介も含まれる。一方、自ら貸主として行う賃貸そのものは含まれない。", ["アだけでなくウも含まれる。", "イは自ら貸主として行う賃貸なので含まれない。", "正しい。アとウが宅建業に含まれる。", "イは含まれず、アが漏れている。"]],
    ["005", ["takken-k-business-definition-self-sale-exchange"], "自己所有の宅地を別の者の宅地と交換する行為を業として行う場合、宅地建物取引業法上の説明として正しいものはどれか。", ["自ら行う交換は宅建業に含まれない", "交換は媒介した場合だけ宅建業に含まれる", "宅地の交換は売買ではないため規制対象外である", "自ら宅地の交換を業として行うことも宅建業に含まれる"], 3, "宅地または建物について、自ら売買する場合だけでなく、自ら交換を業として行う場合も宅建業に含まれる。", ["法2条2号は自ら行う交換も対象としている。", "交換は代理・媒介だけでなく、自ら行う場合も対象となる。", "交換は明示的に定義の対象である。", "正しい。自ら行う宅地の交換を業とする場合も宅建業に含まれる。"]],
    ["006", ["takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "次のうち、同じ『貸借』でも宅地建物取引業に含まれるものはどれか。", ["所有者が自己所有建物を自ら賃貸する行為", "所有者が自己所有宅地を自ら賃貸する行為", "他人の建物の貸借を代理して契約することを業として行う行為", "自己所有建物の賃料を自ら受領する行為"], 2, "自ら貸主として行う賃貸そのものは宅建業の定義外だが、他人の宅地・建物の貸借について代理または媒介を業として行うことは宅建業に含まれる。", ["自ら貸主として行う賃貸は含まれない。", "宅地でも自ら貸主として行う賃貸は含まれない。", "正しい。他人の建物貸借の代理を業とする行為は含まれる。", "賃料受領は貸主としての自己賃貸に付随する行為で、これだけで宅建業になるものではない。"]],
    ["007", ["takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "B社は所有するマンションを自ら賃貸する一方、別の所有者Cのマンションについて入居者募集と賃貸借契約の媒介を業として行っている。宅建業に含まれる行為はどれか。", ["B社自身のマンションの賃貸だけ", "Cのマンションの賃貸借の媒介だけ", "両方とも含まれない", "両方とも含まれる"], 1, "自己所有物件を自ら貸主として賃貸する行為そのものは宅建業に含まれない。一方、他人の建物の貸借を媒介する行為を業として行うことは宅建業に含まれる。", ["自己賃貸は定義外である。", "正しい。他人の賃貸借媒介だけが宅建業に含まれる。", "Cの物件の貸借媒介は宅建業に含まれる。", "自己賃貸は含まれないため両方ではない。"]],
    ["008", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "宅地建物取引業の定義について誤っているものはどれか。", ["宅地の売買を自ら業として行う行為は含まれる", "建物の交換を自ら業として行う行為は含まれる", "建物の貸借を媒介することを業として行う行為は含まれる", "建物を自ら貸主として賃貸する行為は必ず含まれる"], 3, "自ら行う売買・交換、および売買・交換・貸借の代理・媒介を業とする行為は宅建業に含まれるが、自ら貸主として行う賃貸そのものは含まれない。", ["正しい説明である。", "正しい説明である。", "正しい説明である。", "誤り。自ら貸主として行う賃貸そのものは宅建業の定義に含まれない。"]],
    ["009", ["takken-k-business-definition-agency-brokerage"], "Dが他人所有の宅地について、売主を代理して買主との売買契約を締結することを業として行う場合、正しいものはどれか。", ["売買の代理を業として行うため宅建業に含まれる", "D自身が所有者でないので宅建業には含まれない", "媒介ではなく代理なので宅建業には含まれない", "宅地ではなく建物だけが代理の対象になる"], 0, "宅地または建物の売買・交換・貸借について、代理または媒介を業として行うことは宅建業に含まれる。", ["正しい。他人の宅地売買の代理を業とする行為は含まれる。", "他人の取引を代理・媒介する行為も定義の対象となる。", "代理も媒介と並んで定義に含まれる。", "宅地も建物も対象である。"]],
    ["010", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-self-lease-exclusion"], "宅地建物取引業法上、『自ら行う行為』として宅建業の定義に含まれる取引類型の組合せはどれか。", ["売買・交換", "売買・貸借", "交換・貸借", "売買・交換・貸借"], 0, "法2条2号は、自ら当事者として行うものについては宅地・建物の売買または交換を対象とする。自ら貸主として行う貸借は含まれない。", ["正しい。自ら行うものでは売買・交換が対象である。", "自ら行う貸借は含まれない。", "自ら行う貸借は含まれず、売買が漏れている。", "貸借まで含めるのは誤りである。"]],
    ["011", ["takken-k-business-definition-agency-brokerage"], "宅地建物取引業法上、『代理または媒介』として宅建業の定義に含まれ得る取引類型の組合せはどれか。", ["売買のみ", "売買・交換のみ", "売買・貸借のみ", "売買・交換・貸借"], 3, "代理または媒介については、宅地・建物の売買、交換、貸借のいずれも、業として行えば宅建業の定義に含まれる。", ["交換と貸借も含まれる。", "貸借も含まれる。", "交換も含まれる。", "正しい。売買・交換・貸借のすべてが代理・媒介の対象となる。"]],
    ["012", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "E社が行う次の行為のうち、宅地建物取引業の定義に含まれないものはどれか。", ["自己所有の宅地を業として売却する", "自己所有の建物を業として交換する", "他人所有の宅地売買を業として媒介する", "自己所有の建物を自ら貸主として賃貸する"], 3, "自ら行う売買・交換と、他人の売買・交換・貸借の代理・媒介は宅建業に含まれる。自己所有物件を自ら貸主として賃貸する行為そのものは含まれない。", ["自ら売買を業とするので含まれる。", "自ら交換を業とするので含まれる。", "売買の媒介を業とするので含まれる。", "正しい選択肢。自己賃貸は定義外である。"]],
    ["013", ["takken-k-business-definition-self-sale-exchange"], "Fは自己所有の宅地を複数区画に分け、自ら買主と売買契約を締結して販売する事業を行う。宅地建物取引業の定義との関係で最も適切なものはどれか。", ["自分の宅地の売却なので定義上は含まれない", "自ら宅地の売買を業として行うため定義上含まれる", "媒介業者を使わない限り定義上含まれない", "貸借ではないので定義上含まれない"], 1, "自己所有物であっても、宅地または建物を自ら売買する行為を業として行えば宅建業の定義に含まれる。", ["自己所有であることは自ら売買を除外する理由ではない。", "正しい。自ら宅地売買を業として行う場合は含まれる。", "媒介業者の利用有無は自ら売買の該当性を左右しない。", "売買は定義の対象である。"]],
    ["014", ["takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "G社は自己所有のビルを自らテナントに貸し、その一方で他社所有ビルの売買を媒介している。宅建業の定義上、正しい説明はどれか。", ["自己所有ビルの賃貸だけが含まれる", "他社所有ビルの売買媒介だけが含まれる", "両方とも含まれる", "両方とも含まれない"], 1, "自ら貸主として行う賃貸は宅建業の定義外である。他方、他人の建物売買の媒介を業として行うことは宅建業に含まれる。", ["自己賃貸は含まれない。", "正しい。他人の建物売買の媒介は含まれる。", "自己賃貸は含まれないため両方ではない。", "売買媒介は含まれるため両方とも除外ではない。"]],
    ["015", ["takken-k-business-definition-agency-brokerage"], "宅地建物取引業の定義に関し、次の記述のうち正しいものはどれか。", ["代理は含まれるが媒介は含まれない", "媒介は含まれるが代理は含まれない", "貸借については代理・媒介も含まれない", "貸借についても代理または媒介を業として行えば含まれる"], 3, "宅地・建物の貸借については、自ら貸主として行う賃貸は除外される一方、代理または媒介を業として行う場合は宅建業に含まれる。", ["代理だけでなく媒介も含まれる。", "媒介だけでなく代理も含まれる。", "貸借も代理・媒介なら対象となる。", "正しい。貸借の代理・媒介を業とすれば含まれる。"]],
    ["016", ["takken-k-business-definition-self-sale-exchange"], "Hが自己所有宅地を別の宅地と交換する取引を事業として継続的に行う場合、宅建業の定義上の根拠として最も適切なものはどれか。", ["自ら行う宅地の交換が対象に含まれるから", "交換は貸借と同じく常に対象外だから", "所有者本人の行為はすべて対象外だから", "代理・媒介をしなければ対象外だから"], 0, "宅地・建物について自ら交換を業として行うことは、法2条2号の宅建業の定義に含まれる。", ["正しい。自ら行う交換も対象である。", "交換は自ら行う場合も対象である。", "所有者本人でも自ら売買・交換を業とすれば対象となる。", "自ら売買・交換する類型は代理・媒介を伴わなくても対象となる。"]],
    ["017", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-self-lease-exclusion"], "『自己所有物件を扱うなら宅建業にはならない』という説明について、最も適切な評価はどれか。", ["正しい。自己所有物件はすべて除外される", "誤り。自己所有の宅地・建物でも、自ら売買または交換を業として行えば含まれる", "正しい。ただし建物だけは例外である", "誤りだが、自己所有物件の貸借だけは常に宅建業に含まれる"], 1, "自己所有かどうかだけで決まらない。自己所有の宅地・建物でも自ら売買・交換を業とすれば含まれる一方、自ら貸主として賃貸する行為そのものは含まれない。", ["自己所有でも自ら売買・交換は対象である。", "正しい。自己所有物件の自ら売買・交換は対象となる。", "宅地・建物のいずれも同じ区分で判断する。", "自己賃貸は逆に定義外である。"]],
    ["018", ["takken-k-business-definition-agency-brokerage"], "I社は、他人所有の宅地同士の交換について当事者間を取り持ち、交換契約の成立を媒介することを業としている。この行為はどう扱われるか。", ["交換の媒介は宅建業に含まれる", "交換は自ら行う場合だけ宅建業に含まれる", "媒介は売買に限って宅建業に含まれる", "他人所有物の取引なので宅建業に含まれない"], 0, "宅地・建物の交換についても、代理または媒介を業として行うことは宅建業に含まれる。", ["正しい。交換の媒介も対象である。", "交換は自ら行う場合だけでなく代理・媒介も対象である。", "媒介の対象は売買だけでなく交換・貸借にも及ぶ。", "他人所有物の交換を媒介する行為が対象となる。"]],
    ["019", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "次の取引を、宅建業に『含まれる』ものと『含まれない』ものに分けた組合せとして正しいものはどれか。\nア 自ら建物を売買することを業とする\nイ 自ら建物を賃貸する\nウ 建物の賃貸借を媒介することを業とする", ["含まれる: ア・イ / 含まれない: ウ", "含まれる: ア・ウ / 含まれない: イ", "含まれる: イ・ウ / 含まれない: ア", "含まれる: ア・イ・ウ / 含まれない: なし"], 1, "自ら行う建物売買と建物貸借の媒介は宅建業に含まれる。自ら貸主として行う建物賃貸そのものは含まれない。", ["イは含まれず、ウは含まれる。", "正しい。ア・ウが含まれ、イが含まれない。", "アは含まれ、イは含まれない。", "イは含まれない。"]],
    ["020", ["takken-k-business-definition-self-lease-exclusion"], "Jは所有するアパートを自ら貸主として賃貸するだけで、他人の売買・交換・貸借の代理や媒介は行っていない。宅建業の定義に関する説明として正しいものはどれか。", ["賃貸戸数にかかわらず、この自己賃貸行為そのものは宅建業の定義に含まれない", "建物の貸借なので必ず宅建業に含まれる", "他人の取引を媒介しなくても、貸主なら必ず宅建業に含まれる", "自己所有建物でも賃貸なら自ら売買と同じ扱いになる"], 0, "自ら貸主として自己所有の宅地・建物を賃貸する行為そのものは、法2条2号の宅建業には含まれない。", ["正しい。自己賃貸は定義外である。", "貸借でも自ら貸主の場合は除外される。", "他人の貸借の代理・媒介とは区別される。", "自ら売買・交換と自ら貸借は定義上の扱いが異なる。"]],
    ["021", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-self-lease-exclusion"], "K社が行う次の行為のうち、宅地建物取引業の定義上『自ら行う取引』として対象になるものはどれか。", ["自己所有建物の賃貸", "自己所有宅地の交換", "他人所有建物の貸借の媒介", "他人所有宅地の売買の代理"], 1, "設問は『自ら行う取引』としての対象を問うている。自ら行う売買・交換は対象だが、自ら行う貸借は対象外。代理・媒介は別の対象類型である。", ["自ら行う貸借は対象外である。", "正しい。自己所有宅地の交換は自ら行う対象取引である。", "宅建業には含まれるが、『自ら行う取引』ではなく媒介類型である。", "宅建業には含まれるが、『自ら行う取引』ではなく代理類型である。"]],
    ["022", ["takken-k-business-definition-agency-brokerage"], "L社が行う次の行為のうち、宅地建物取引業の定義上『代理または媒介』の類型として対象になるものはどれか。", ["自己所有建物を自ら売却する", "自己所有宅地を自ら交換する", "他人所有建物の貸借を媒介する", "自己所有建物を自ら賃貸する"], 2, "他人の宅地・建物の売買・交換・貸借について代理または媒介を業とする行為が、代理・媒介類型として宅建業に含まれる。", ["宅建業には含まれ得るが、自ら売買する類型である。", "宅建業には含まれ得るが、自ら交換する類型である。", "正しい。他人の建物貸借の媒介は代理・媒介類型として対象である。", "自ら貸主として行う賃貸は宅建業の定義外である。"]],
    ["023", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "宅地建物取引業の定義について、取引の主体と類型の対応として正しいものはどれか。", ["自ら行う場合は売買・交換・貸借のすべてが対象", "自ら行う場合は売買・交換が対象で、代理・媒介の場合は売買・交換・貸借が対象", "自ら行う場合は貸借だけが対象で、代理・媒介の場合は売買だけが対象", "自ら行う場合は対象外で、代理・媒介の場合だけ対象"], 1, "自ら行う場合は売買・交換が対象で、自ら貸借は除外される。代理・媒介の場合は売買・交換・貸借が対象となる。", ["自ら貸借まで含める点が誤り。", "正しい。法2条2号の類型区分を正確に示している。", "自ら行う対象と代理・媒介の対象が逆である。", "自ら売買・交換も対象となる。"]],
    ["024", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage"], "M社は、自己所有建物を交換する事業と、他人所有建物の貸借を媒介する事業を行っている。宅地建物取引業の定義上、正しいものはどれか。", ["前者だけが含まれる", "後者だけが含まれる", "両方とも含まれる", "両方とも含まれない"], 2, "自ら建物を交換する行為を業とする場合も、他人の建物の貸借を媒介する行為を業として行う場合も、いずれも宅建業に含まれる。", ["貸借媒介も含まれる。", "自ら交換も含まれる。", "正しい。両方とも宅建業に含まれる。", "両方とも法2条2号の対象類型である。"]],
    ["025", ["takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "宅建業に該当するかを判断する際、『自ら貸主として行う賃貸』と区別すべきものとして最も適切なのはどれか。", ["自ら貸主として受け取る賃料の管理", "自己所有建物の維持修繕", "他人の宅地・建物の貸借を代理または媒介することを業として行う行為", "自己所有建物の入居者から敷金を受け取る行為"], 2, "自己賃貸そのものは宅建業の定義外だが、他人の宅地・建物の貸借を代理または媒介することを業として行う場合は宅建業に含まれる。", ["自己賃貸に付随する賃料管理であり、ここで問う代理・媒介とは異なる。", "維持修繕は売買・交換・貸借の代理・媒介ではない。", "正しい。自己賃貸と異なり、他人の貸借の代理・媒介は対象である。", "自己賃貸に付随する行為で、他人の貸借の代理・媒介ではない。"]]
  ];

  const questions = rows.map(([serial, knowledge_refs, stem, choices, answer_index, detailed_explanation, choice_explanations]) => Object.freeze({
    ...shared,
    question_id: `takken-power-q-business-definition-${serial}`,
    knowledge_refs: Object.freeze(knowledge_refs),
    stem,
    choices: Object.freeze(choices),
    answer_index,
    detailed_explanation,
    choice_explanations: Object.freeze(choice_explanations)
  }));

  const ids = new Set();
  const stems = new Set();
  const allowedKnowledgeIds = new Set([
    "takken-k-business-definition-self-sale-exchange",
    "takken-k-business-definition-agency-brokerage",
    "takken-k-business-definition-self-lease-exclusion"
  ]);
  const allowedSourceIds = new Set(["egov-takken-act", "mlit-license"]);
  const answerCounts = [0, 0, 0, 0];
  const normalize = (value) => value.replace(/\s+/g, "").toLowerCase();

  for (const q of questions) {
    if (ids.has(q.question_id)) throw new Error(`Duplicate Power Takken question id: ${q.question_id}`);
    ids.add(q.question_id);
    const normalizedStem = normalize(q.stem);
    if (stems.has(normalizedStem)) throw new Error(`Duplicate Power Takken stem: ${q.question_id}`);
    stems.add(normalizedStem);
    if (q.concept_id !== "takken-concept-business-definition") throw new Error(`Unexpected concept: ${q.question_id}`);
    if (!Array.isArray(q.knowledge_refs) || q.knowledge_refs.length === 0 || q.knowledge_refs.some((id) => !allowedKnowledgeIds.has(id))) throw new Error(`Invalid knowledge refs: ${q.question_id}`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4) throw new Error(`Invalid choices: ${q.question_id}`);
    if (!Number.isInteger(q.answer_index) || q.answer_index < 0 || q.answer_index > 3) throw new Error(`Invalid answer index: ${q.question_id}`);
    answerCounts[q.answer_index] += 1;
    if (!Array.isArray(q.choice_explanations) || q.choice_explanations.length !== 4 || q.choice_explanations.some((reason) => !reason.trim())) throw new Error(`Invalid choice explanations: ${q.question_id}`);
    if (!Array.isArray(q.primary_source_refs) || q.primary_source_refs.length === 0 || q.primary_source_refs.some((id) => !allowedSourceIds.has(id))) throw new Error(`Invalid source refs: ${q.question_id}`);
    if (q.exam_year !== 2026 || q.law_as_of !== "2026-04-01") throw new Error(`Invalid legal version: ${q.question_id}`);
    if (q.validation_status !== "verified") throw new Error(`Unexpected validation status: ${q.question_id}`);
  }
  if (Math.max(...answerCounts) - Math.min(...answerCounts) > 3) throw new Error(`Answer-position skew: ${answerCounts.join("/")}`);

  window.PowerTakkenQuestionsBusinessDefinition = Object.freeze(questions);
})();