(() => {
  "use strict";
  const source = Object.freeze({ id: "egov-takken-act", label: "e-Gov法令検索『宅地建物取引業法』", url: "https://laws.e-gov.go.jp/law/327AC1000000176", sourceType: "statute" });
  const official = Object.freeze({ id: "kinki-mlit-takken-license-requirements", label: "国土交通省近畿地方整備局『宅地建物取引業の範囲・免許権者・免許の要件等・有効期間について』", url: "https://www-2.kkr.mlit.go.jp/kensei/kensetsu/fudousanjyounado/torihikigyou/copy_of_takken.html", sourceType: "official_guidance" });
  const osaka = Object.freeze({ id: "osaka-exclusive-takkenshi", label: "大阪府『専任の宅地建物取引士の常勤・専任の確認方法』", url: "https://www.pref.osaka.lg.jp/o130200/kenshin/takuchitatemonotorih/sentori-jyoukin.html", sourceType: "official_guidance" });
  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-exclusive-takkenshi", sourceUnitIds: ["takken-shi-exclusive"], sourceFactIds: ["u10-f1"] });
  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-exclusive-takkenshi-office-one-fifth", claim: "宅建業者の事務所には、その事務所で宅建業に従事する者の数の5分の1以上の割合で、成年者である専任の宅地建物取引士を置かなければならない。", conditions: ["宅建業者の事務所であること", "人数計算の基礎はその事務所で宅建業に従事する者であること"], exceptions: ["5人につき1人ちょうどではなく、5分の1以上を満たす人数が必要である。"], importance: "A", primarySources: [source, official, osaka] },
    { ...shared, knowledgeId: "takken-k-exclusive-takkenshi-adult-exclusive-status", claim: "法定数として配置する宅地建物取引士は、成年者であり、かつ当該事務所等に専任する宅地建物取引士でなければならない。", conditions: ["法31条の3の法定配置数に算入する者であること", "有効な宅地建物取引士証を有すること"], exceptions: ["宅地建物取引士資格を有するだけで、専任性を満たさない者は法定配置数には算入できない。"], importance: "A", primarySources: [source, official, osaka] },
    { ...shared, knowledgeId: "takken-k-exclusive-takkenshi-exclusivity-meaning", claim: "専任の宅地建物取引士には、その事務所等に常勤して専ら宅建業の業務に従事できる状態という常勤性・専従性が求められる。", conditions: ["専任の宅地建物取引士として法定配置される者であること"], exceptions: ["他業者との兼務や他職への常勤従事など、常勤性または専従性を欠く状態は原則として専任とは認められない。"], importance: "B", primarySources: [source, osaka] },
    { ...shared, knowledgeId: "takken-k-exclusive-takkenshi-shortage-two-weeks", claim: "既存の事務所等が専任の宅地建物取引士の法定配置基準を満たさなくなったとき、宅建業者は2週間以内に基準へ適合させるため必要な措置をとらなければならない。", conditions: ["既存の事務所等が法31条の3第1項の配置基準に抵触するに至った場合であること"], exceptions: ["新たに基準不適合の事務所等を開設することはできず、既存事務所等の不足を30日以内まで放置できるわけではない。"], importance: "A", primarySources: [source] }
  ];
  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate exclusive-takkenshi knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 exclusive-takkenshi knowledge items, got ${knowledgeItems.length}`);
  window.PowerTakkenKnowledgeItemsExclusiveTakkenshi = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();