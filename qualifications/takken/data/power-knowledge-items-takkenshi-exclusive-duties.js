(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const interpretation = Object.freeze({
    id: "mlit-takken-law-interpretation",
    label: "国土交通省『宅地建物取引業法 法令改正・解釈について』",
    url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000268.html",
    sourceType: "official_guidance"
  });
  const electronicGuidance = Object.freeze({
    id: "mlit-takken-electronic-doc-guidance",
    label: "国土交通省『重要事項説明書等の電磁的方法による提供に係る留意事項』",
    url: "https://www.mlit.go.jp/totikensangyo/const/content/001855526.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-takkenshi-exclusive-duties",
    sourceUnitIds: ["takken-shi-exclusive-duties"],
    sourceFactIds: ["u11-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-exclusive-duties-important-matters-explanation",
      claim: "宅建業者は、宅地・建物の取引について契約が成立するまでの間に、宅地建物取引士をして法35条の重要事項を説明させなければならない。",
      conditions: [
        "宅建業法35条の重要事項説明が必要となる取引であること",
        "説明は契約成立前に行うこと"
      ],
      exceptions: [
        "重要事項説明は宅建業者の一般従業者が宅地建物取引士に代わって行える業務ではない。",
        "ITを利用して重要事項説明を行う場合でも、説明主体が宅地建物取引士である点は変わらない。"
      ],
      importance: "A",
      primarySources: [statute, interpretation, electronicGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-exclusive-duties-article35-name",
      claim: "法35条の重要事項説明書には、宅地建物取引士の記名が必要である。",
      conditions: [
        "法35条に基づく重要事項説明書であること",
        "書面交付または法定要件を満たす電磁的方法による提供のいずれでも、宅地建物取引士の関与を示す記名が必要であること"
      ],
      exceptions: [
        "2022年5月18日施行のデジタル化対応後は押印は不要であり、記名と押印を混同しない。",
        "書面等を相手方へ交付・提供する法的義務の主体は宅建業者であり、交付行為そのものを宅地建物取引士だけの独占業務と扱わない。"
      ],
      importance: "A",
      primarySources: [statute, interpretation, electronicGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-exclusive-duties-article37-name",
      claim: "法37条の契約成立時書面には、宅地建物取引士の記名が必要である。",
      conditions: [
        "法37条に基づき契約成立後に交付または提供する書面であること"
      ],
      exceptions: [
        "2022年5月18日施行のデジタル化対応後は押印は不要であり、記名と押印を混同しない。",
        "37条書面について宅地建物取引士が行う法定関与は記名であり、35条重要事項説明のような説明行為まで37条で要求されるわけではない。",
        "書面等を相手方へ交付・提供する法的義務の主体は宅建業者である。"
      ],
      importance: "A",
      primarySources: [statute, interpretation, electronicGuidance]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate takkenshi-exclusive-duties knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 takkenshi-exclusive-duties knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsTakkenshiExclusiveDuties = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
