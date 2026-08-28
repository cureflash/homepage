(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const regulation = Object.freeze({
    id: "egov-takken-regulation",
    label: "e-Gov法令検索『宅地建物取引業法施行規則』",
    url: "https://laws.e-gov.go.jp/law/332M50004000012",
    sourceType: "regulation"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-reins-registration",
    sourceUnitIds: ["brokerage-reins-reporting"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-reins-registration-exclusive-and-sole-duty",
      claim: "専任媒介契約および専属専任媒介契約では、宅建業者は対象物件に関する所定事項を指定流通機構へ登録しなければならない。",
      conditions: ["宅地または建物の売買・交換について専任媒介契約または専属専任媒介契約を締結していること"],
      exceptions: ["一般媒介契約には、宅建業法34条の2第5項による指定流通機構への法定登録義務はない。"],
      importance: "A",
      primarySources: [statute, regulation],
      sourceFactIds: ["u17-f1", "u17-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-reins-registration-exclusive-seven-days",
      claim: "専任媒介契約では、宅建業者は媒介契約締結の日から7日以内に指定流通機構へ登録しなければならない。",
      conditions: ["専属専任媒介契約ではない専任媒介契約について法定登録期限を判定する場合であること"],
      exceptions: ["専属専任媒介契約の法定登録期限は5日以内である。", "登録期間の計算では休業日数を算入しない。"],
      importance: "A",
      primarySources: [statute, regulation],
      sourceFactIds: ["u17-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-reins-registration-sole-five-days",
      claim: "専属専任媒介契約では、宅建業者は媒介契約締結の日から5日以内に指定流通機構へ登録しなければならない。",
      conditions: ["専属専任媒介契約について法定登録期限を判定する場合であること"],
      exceptions: ["専属専任でない専任媒介契約の法定登録期限は7日以内である。", "登録期間の計算では休業日数を算入しない。"],
      importance: "A",
      primarySources: [statute, regulation],
      sourceFactIds: ["u17-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-reins-registration-holidays-excluded",
      claim: "専任媒介契約および専属専任媒介契約の指定流通機構への登録期間を計算するときは、休業日数を算入しない。",
      conditions: ["宅建業法施行規則15条の10が定める7日または5日の登録期間を計算する場合であること"],
      exceptions: [],
      importance: "A",
      primarySources: [regulation],
      sourceFactIds: ["u17-f1", "u17-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate REINS registration knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute") && item.knowledgeId !== "takken-k-reins-registration-holidays-excluded") throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "regulation")) throw new Error(`Missing regulation source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 REINS registration knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsReinsRegistration = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
