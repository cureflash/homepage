(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176?occasion_date=20260401",
    sourceType: "statute"
  });

  const feeNotice = Object.freeze({
    id: "mlit-brokerage-fee-notice-1552-20240701",
    label: "国土交通省『宅地建物取引業者が宅地又は建物の売買等に関して受けることができる報酬の額』（昭和45年建設省告示第1552号、最終改正令和6年国土交通省告示第949号）",
    url: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/content/001750143.pdf",
    sourceType: "ministerial_notice"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-brokerage-fees",
    sourceUnitIds: ["brokerage-fees"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-minister-sets-amount",
      claim: "宅建業者が宅地・建物の売買、交換または貸借の代理・媒介に関して受けることのできる報酬額は、国土交通大臣が定める。",
      conditions: ["宅建業者が宅地または建物の売買・交換・貸借の代理または媒介を行うこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-no-excess",
      claim: "宅建業者は、国土交通大臣が定める報酬額を超えて報酬を受けてはならない。",
      conditions: ["宅建業法46条の報酬規制が適用される代理または媒介であること"],
      exceptions: ["報酬告示が明示する依頼者の依頼による広告料金相当額などは、告示所定の範囲で別途扱われる。"],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-office-display",
      claim: "宅建業者は、国土交通大臣が定める報酬額を事務所ごとに公衆の見やすい場所へ掲示しなければならない。",
      conditions: ["宅建業者の事務所であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-sale-exchange-broker-progressive-rates",
      claim: "課税事業者である宅建業者の売買・交換の媒介報酬上限は、依頼者一方につき、200万円以下部分5.5%、200万円超400万円以下部分4.4%、400万円超部分3.3%を合計して計算する。",
      conditions: ["宅建業者が課税事業者であること", "売買または交換の媒介であること", "売買代金または交換価額は消費税等相当額を含めずに判定すること"],
      exceptions: ["低廉な空家等の売買・交換の媒介には報酬告示第七の特例がある。"],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-exchange-higher-value-base",
      claim: "交換の媒介報酬を計算するとき、交換対象の宅地・建物の価額に差がある場合は、いずれか高い方の価額を基礎にする。",
      conditions: ["宅地または建物の交換の媒介であること", "交換物件の価額に差があること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-sale-exchange-agency-double",
      claim: "売買・交換の代理で代理依頼者から受けられる報酬上限は、通常の売買・交換媒介の計算額の2倍以内であり、相手方からも報酬を受けるときは両者からの合計もその2倍以内でなければならない。",
      conditions: ["売買または交換の代理であること"],
      exceptions: ["低廉な空家等の売買・交換の代理には報酬告示第八の特例がある。"],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-lease-broker-total-one-point-one",
      claim: "貸借の媒介では、依頼者双方から受ける報酬合計は原則として借賃1か月分の1.1倍以内である。",
      conditions: ["宅地または建物の貸借の媒介であること", "借賃は消費税等相当額を含まない額を基礎とすること"],
      exceptions: ["長期の空家等の貸借の媒介には報酬告示第九の特例がある。", "非居住用で権利金の授受がある場合は権利金特例を選択できる。"],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-residential-lease-one-side-half",
      claim: "居住用建物の賃貸借の媒介では、依頼者一方から受ける報酬は原則として借賃1か月分の0.55倍以内であり、媒介依頼を受ける際にその依頼者の承諾を得た場合はこの一方当事者上限の例外となる。",
      conditions: ["居住用建物の賃貸借の媒介であること"],
      exceptions: ["媒介依頼を受ける際に当該依頼者の承諾を得ている場合", "長期の空家等については報酬告示第九の特例も確認する。"],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-lease-agency-one-point-one",
      claim: "貸借の代理で代理依頼者から受けられる報酬上限は原則として借賃1か月分の1.1倍以内であり、相手方からも報酬を受ける場合は両者からの合計も1.1倍以内である。",
      conditions: ["宅地または建物の貸借の代理であること"],
      exceptions: ["長期の空家等の貸借の代理には報酬告示第十の特例がある。", "非居住用で権利金の授受がある場合は権利金特例を選択できる。"],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-key-money-nonresidential-special",
      claim: "居住用建物を除く宅地・建物の賃貸借で返還されない権利金の授受がある場合、その権利金額を売買代金とみなして売買の媒介・代理の計算方法によることができる。",
      conditions: ["居住用建物以外の貸借であること", "権利設定の対価として支払われ返還されない権利金等の授受があること"],
      exceptions: ["居住用建物にはこの権利金特例を適用しない。"],
      importance: "B",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-low-price-vacant-sale-broker",
      claim: "代金または交換価額が800万円以下の低廉な空家等の売買・交換の媒介では、媒介費用を勘案して通常上限を超える報酬を受けられるが、依頼者一方から受ける額は30万円の1.1倍を超えられない。",
      conditions: ["売買代金または交換価額が800万円以下の低廉な空家等であること", "売買または交換の媒介であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-low-price-vacant-sale-agency",
      claim: "低廉な空家等の売買・交換の代理では、特例媒介上限の2倍以内が代理依頼者からの上限となり、相手方からも報酬を受ける場合は合計もその2倍以内でなければならない。",
      conditions: ["売買代金または交換価額が800万円以下の低廉な空家等であること", "売買または交換の代理であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-long-vacant-lease-broker",
      claim: "長期の空家等の貸借の媒介では、借主からの報酬が所定上限内であることを条件に、双方からの報酬合計を借賃1か月分の2.2倍以内まで受けることができる。",
      conditions: ["現に長期間使用されていない、または将来にわたり使用見込みがない長期の空家等の貸借であること", "借主から受ける報酬が原則として借賃1か月分の1.1倍以内であること", "居住用長期空家等で借主の事前承諾がない場合は借主からの報酬が0.55倍以内であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-long-vacant-lease-agency",
      claim: "長期の空家等の貸借の代理では、告示所定の場合に受ける報酬または代理依頼者と相手方から受ける報酬合計の上限は、借賃1か月分の2.2倍以内である。",
      conditions: ["長期の空家等の貸借の代理であること"],
      exceptions: ["相手方から報酬を受ける場合は、借主から受ける報酬が借賃1か月分の1.1倍以内であることが必要となる。"],
      importance: "B",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f1", "u32-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-fees-requested-advertising-cost",
      claim: "宅建業者は原則として報酬告示の規定以外の報酬を受けられないが、依頼者の依頼によって行う広告の料金に相当する額は別途受領できる。",
      conditions: ["依頼者の依頼によって行う広告であること", "広告料金に相当する額であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute, feeNotice],
      sourceFactIds: ["u32-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate brokerage-fees knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 15) throw new Error(`Expected 15 brokerage-fees knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBrokerageFees = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();