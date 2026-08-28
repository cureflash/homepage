(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const regulation = Object.freeze({
    id: "egov-takken-enforcement-regulation",
    label: "e-Gov法令検索『宅地建物取引業法施行規則』",
    url: "https://laws.e-gov.go.jp/law/332M50004000012",
    sourceType: "statute"
  });
  const mlitElectronic = Object.freeze({
    id: "mlit-takken-electronic-documents",
    label: "国土交通省『ITを活用した重要事項説明及び書面の電子化について』",
    url: "https://www.mlit.go.jp/totikensangyo/const/sosei_const_tk3_000092.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-brokerage-contract-document",
    sourceUnitIds: ["brokerage-contract-basics"],
    sourceFactIds: ["u15-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-delivery-duty",
      claim: "宅建業者が宅地・建物の売買または交換の媒介契約を締結したときは、遅滞なく法定事項を記載した書面を作成して記名押印し、依頼者に交付しなければならない。",
      conditions: ["宅地または建物の売買・交換の媒介契約を締結した場合であること"],
      exceptions: ["貸借の媒介契約は宅建業法34条の2第1項のこの書面交付義務の対象ではない。", "依頼者から請求された場合だけ交付すればよい制度ではない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-property-identification",
      claim: "媒介契約書面には、対象宅地の所在・地番等または対象建物の所在・種類・構造等、目的物を特定するために必要な表示を記載する。",
      conditions: ["宅建業法34条の2第1項の媒介契約書面を作成する場合であること"],
      exceptions: ["物件名だけを記載すれば常に足りるというルールではない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-price-or-valuation",
      claim: "媒介契約書面には、対象宅地・建物を売買すべき価額または交換の場合の評価額を記載する。",
      conditions: ["宅建業法34条の2第1項の媒介契約書面を作成する場合であること"],
      exceptions: ["宅建業者がその価額・評価額について意見を述べる場合の根拠明示義務は、別のknowledge itemとして扱う。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-multiple-broker-permission",
      claim: "媒介契約書面には、依頼者が他の宅建業者へ重ねて媒介・代理を依頼できるかどうか、および許す場合に他業者を明示する義務があるかどうかを記載する。",
      conditions: ["宅建業法34条の2第1項の媒介契約書面を作成する場合であること"],
      exceptions: ["一般・専任・専属専任の具体的効果や有効期間は各媒介類型conceptで扱う。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-inspection-arrangement",
      claim: "既存建物の媒介契約書面には、依頼者に対する建物状況調査を実施する者のあっせんに関する事項を記載する。",
      conditions: ["媒介対象が既存の建物であること"],
      exceptions: ["新築建物や宅地だけの媒介について同じ記載事項を要求するものではない。"],
      importance: "A",
      primarySources: [statute, regulation]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-validity-termination",
      claim: "媒介契約書面には、媒介契約の有効期間および解除に関する事項を記載する。",
      conditions: ["宅建業法34条の2第1項の媒介契約書面を作成する場合であること"],
      exceptions: ["専任媒介・専属専任媒介の3か月上限そのものは各媒介類型conceptで扱う。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-reins-and-remuneration",
      claim: "媒介契約書面には、指定流通機構への登録に関する事項および報酬に関する事項を記載する。",
      conditions: ["宅建業法34条の2第1項の媒介契約書面を作成する場合であること"],
      exceptions: ["REINSへの具体的な登録義務・期限はREINS conceptで扱う。", "報酬額の法定上限は報酬額conceptで扱う。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-regulation-additional-items",
      claim: "媒介契約書面には省令所定の追加事項として、専任・専属専任等で依頼者が契約上の制限に反した場合の措置や、標準媒介契約約款に基づく契約か否かの別を記載する。",
      conditions: ["各媒介契約類型について宅建業法施行規則15条の9に該当する場合であること"],
      exceptions: ["契約類型に関係なく同一の違反措置を一律記載するという意味ではない。"],
      importance: "B",
      primarySources: [statute, regulation]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-contract-document-electronic-provision",
      claim: "媒介契約書面は、依頼者の承諾を得て法令所定の電磁的方法により記載事項を提供した場合、書面を記名押印して交付したものとみなされる。",
      conditions: ["依頼者の承諾を得ること", "政令・省令所定の電磁的方法および措置を用いること"],
      exceptions: ["宅建業者が一方的に電子化を選べるわけではない。"],
      importance: "B",
      primarySources: [statute, regulation, mlitElectronic]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate brokerage-contract-document knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 brokerage-contract-document knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBrokerageContractDocument = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
