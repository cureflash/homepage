(() => {
  "use strict";

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-roads-frontage", sourceUnitIds: ["roads-frontage"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-roads-frontage-road-width-principle", claim: "建築基準法42条1項の道路は、原則として幅員4メートル以上のものをいう。", conditions: ["建築基準法42条1項各号の道路として扱うこと"], exceptions: ["特定行政庁が都道府県都市計画審議会の議を経て指定する区域内では、同項本文の幅員基準が6メートルとなる場合がある。", "42条2項・3項には幅員4メートル未満の道を道路とみなす特則がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-road-act-road", claim: "建築基準法42条1項1号は、道路法による道路を同法上の道路の一類型としている。", conditions: ["道路法による道路であること", "42条1項本文の幅員基準を満たすこと"], exceptions: [], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-statutory-project-road", claim: "建築基準法42条1項2号は、都市計画法、土地区画整理法など同号所定の法令によって築造された道路を同法上の道路の一類型としている。", conditions: ["42条1項2号が列挙する法令によって築造された道路であること", "42条1項本文の幅員基準を満たすこと"], exceptions: [], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-existing-road", claim: "建築基準法42条1項3号は、同法第3章の規定が適用されるに至った際に現に存在する道を、所定の幅員を満たす場合に同法上の道路として扱う。", conditions: ["建築基準法第3章の規定が適用されるに至った際に現に存在する道であること", "42条1項本文の幅員基準を満たすこと"], exceptions: ["幅員4メートル未満の既存の道については、一定の場合に42条2項の特則が適用される。"], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-planned-road", claim: "建築基準法42条1項4号は、道路法や都市計画法等による新設・変更の事業計画があり、2年以内に事業が執行される予定のものとして特定行政庁が指定した道路を同法上の道路として扱う。", conditions: ["42条1項4号所定の法令による新設または変更の事業計画があること", "2年以内にその事業が執行される予定であること", "特定行政庁の指定があること"], exceptions: [], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-position-designated-road", claim: "建築基準法42条1項5号は、土地を建築物の敷地として利用するため道路法等によらないで築造する、政令所定の基準に適合する道で、特定行政庁から位置の指定を受けたものを同法上の道路として扱う。", conditions: ["土地を建築物の敷地として利用するため築造する道であること", "政令で定める基準に適合すること", "特定行政庁から位置の指定を受けること"], exceptions: [], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-paragraph2-road", claim: "建築基準法42条2項は、同法第3章の規定が適用されるに至った際に現に建築物が立ち並んでいる幅員4メートル未満の道で、特定行政庁が指定したものを同法上の道路とみなす。", conditions: ["建築基準法第3章の規定が適用されるに至った際に現に建築物が立ち並んでいる道であること", "幅員が4メートル未満であること", "特定行政庁の指定があること"], exceptions: ["42条1項本文の幅員を6メートルとする指定区域では、2項の対象幅員にも法定の読み替えがある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-paragraph2-setback", claim: "42条2項道路では、原則として道の中心線から水平距離2メートルの線を道路の境界線とみなし、その線までの部分は道路として扱われる。", conditions: ["建築基準法42条2項の道路であること"], exceptions: ["道の中心線から水平距離2メートル未満で一方の側が川、がけ地等に沿う場合は、その川等との境界線から道側へ水平距離4メートルの線を道路境界線とみなす特則がある。", "42条3項により土地の状況上やむを得ない場合の水平距離について別の指定がされることがある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f1"] },
    { ...shared, knowledgeId: "takken-k-roads-frontage-frontage-two-meters", claim: "建築基準法43条1項は、都市計画区域等内の建築物の敷地について、原則として建築基準法上の道路に2メートル以上接することを求めている。", conditions: ["建築基準法第3章の規定が適用される区域内の建築物の敷地であること"], exceptions: ["43条2項には、交通上・安全上・防火上・衛生上支障がないものとして認定または許可を受ける場合等の例外がある。", "地方公共団体は特殊建築物等について条例で接道条件を付加できる場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u68-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate roads-frontage knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-roads-frontage") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u68-f1" || id === "u68-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 roads-frontage knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRoadsFrontage = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
