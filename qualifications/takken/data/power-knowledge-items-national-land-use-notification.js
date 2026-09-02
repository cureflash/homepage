(() => {
  "use strict";

  const nationalLandUseAct = Object.freeze({
    id: "egov-national-land-use-act-20260401",
    label: "e-Gov法令検索『国土利用計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/349AC0000000092?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitLandTransactionRegulation = Object.freeze({
    id: "mlit-national-land-use-land-transaction-regulation",
    label: "国土交通省『土地取引規制制度』",
    url: "https://www.mlit.go.jp/totikensangyo/totikensangyo_tk2_000019.html",
    sourceType: "official_guidance"
  });

  const mlit2026NotificationAmendment = Object.freeze({
    id: "mlit-national-land-use-notification-20260401-amendment",
    label: "国土交通省『大規模な土地取引の際の届出事項に法人代表者の国籍等を追加』",
    url: "https://www.mlit.go.jp/report/press/tochi_fudousan_kensetsugyo02_hh_000001_00106.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-national-land-use-notification",
    sourceUnitIds: ["national-land-use-notification", "legal-restrictions-comparison"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-post-contract-scope",
      claim: "国土利用計画法23条の事後届出は、法定面積以上の土地について、土地に関する権利の移転・設定が対価を伴い契約によって行われる「土地売買等の契約」を締結した場合に必要となる。",
      conditions: ["土地に関する権利の移転または設定であること", "対価の授受を伴うこと", "契約によって行われること", "原則として法定面積以上であること"],
      exceptions: ["注視区域・監視区域の事前届出制や規制区域の許可制とは区別する。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-rights-acquirer",
      claim: "国土利用計画法23条の事後届出を行う義務を負うのは、土地に関する権利を取得する権利取得者（買主）である。",
      conditions: ["国土利用計画法23条の事後届出の対象となる土地売買等の契約であること"],
      exceptions: ["売主だけ、媒介した宅建業者だけ、登記官が届出義務者となる制度ではない。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-threshold-urbanization-area-2000",
      claim: "市街化区域における国土利用計画法23条の事後届出の法定面積は2,000平方メートル以上である。",
      conditions: ["対象土地が市街化区域内にあること"],
      exceptions: ["一団の土地として判定される場合は、個々の取引面積が2,000平方メートル未満でも届出が必要となり得る。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-threshold-other-planning-area-5000",
      claim: "市街化区域以外の都市計画区域における国土利用計画法23条の事後届出の法定面積は5,000平方メートル以上である。",
      conditions: ["対象土地が都市計画区域内で市街化区域ではないこと"],
      exceptions: ["一団の土地として判定される場合は、個々の取引面積が5,000平方メートル未満でも届出が必要となり得る。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-threshold-outside-planning-area-10000",
      claim: "都市計画区域外における国土利用計画法23条の事後届出の法定面積は10,000平方メートル以上である。",
      conditions: ["対象土地が都市計画区域外にあること"],
      exceptions: ["一団の土地として判定される場合は、個々の取引面積が10,000平方メートル未満でも届出が必要となり得る。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-deadline-two-weeks",
      claim: "国土利用計画法23条の事後届出は、原則として土地売買等の契約を締結した日から起算して2週間以内に行う。",
      conditions: ["国土利用計画法23条の事後届出の対象となること"],
      exceptions: ["登記完了日を起算点とする制度ではない。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-route-municipality-prefecture",
      claim: "国土利用計画法23条の事後届出は、土地が所在する市町村の長を経由して都道府県知事等に提出する。",
      conditions: ["国土利用計画法23条の事後届出の対象となること"],
      exceptions: ["国土交通大臣や法務局へ直接提出して完了する制度ではない。", "指定都市では指定都市の長が届出先となる。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-buying-one-group",
      claim: "事後届出制では、権利取得者が一連の計画の下で取得する「買いの一団」が法定面積以上となる場合、個々の土地取引が法定面積未満でも最初の契約から届出が必要となる。",
      conditions: ["権利取得者が一連の計画の下で取得する土地であること", "土地利用上現に一体または一体利用が可能な一団の土地であること", "一団全体が法定面積以上となること"],
      exceptions: ["事後届出制では、売却側の『売りの一団』だけを理由に届出対象とする扱いではない。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-purpose-price-items",
      claim: "国土利用計画法23条の事後届出では、土地の利用目的や取引価格等を届け出る。",
      conditions: ["国土利用計画法23条の事後届出を行うこと"],
      exceptions: ["取引価格は届出事項ではあるが、通常の事後届出制では価格を理由とする勧告の審査対象とはされない。"],
      importance: "B",
      primarySources: [nationalLandUseAct, mlitLandTransactionRegulation],
      sourceFactIds: ["u73-f1", "u73-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-national-land-use-notification-2026-corporate-representative-nationality",
      claim: "2026年4月1日から、大規模な土地の権利取得者が法人である場合の国土利用計画法23条届出について、当該法人の代表者の国籍等が届出事項に追加された。",
      conditions: ["2026年4月1日以後の届出様式・届出事項を判定すること", "権利取得者が法人であること"],
      exceptions: ["2026年4月1日より前の届出事項と混同しない。"],
      importance: "B",
      primarySources: [nationalLandUseAct, mlit2026NotificationAmendment],
      sourceFactIds: ["u73-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate national-land-use-notification knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-national-land-use-notification") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u73-f1" || id === "u73-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 10) throw new Error(`Expected 10 national-land-use-notification knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsNationalLandUseNotification = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
