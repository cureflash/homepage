export const WORLD_REGIONS = [
  { id: "east-asia", name: "東アジア", codes: ["JP","CN","MN","KP","KR","TW"], bounds: [70,150,15,56], markerCodes: [] },
  { id: "southeast-asia", name: "東南アジア", codes: ["BN","KH","ID","LA","MY","MM","PH","SG","TH","TL","VN"], bounds: [90,142,-12,29], markerCodes: ["BN","SG","TL"] },
  { id: "south-asia", name: "南アジア", codes: ["AF","BD","BT","IN","MV","NP","PK","LK"], bounds: [60,100,-2,38], markerCodes: ["MV"] },
  { id: "central-asia", name: "中央アジア", codes: ["KZ","KG","TJ","TM","UZ"], bounds: [45,90,34,57], markerCodes: [] },
  { id: "west-asia", name: "西アジア", codes: ["AE","AM","AZ","BH","CY","GE","IQ","IL","JO","KW","LB","OM","QA","SA","SY","TR","YE","PS"], bounds: [24,64,10,46], markerCodes: ["BH","CY","IL","KW","LB","PS","QA"] },
  { id: "northern-europe", name: "北ヨーロッパ", codes: ["DK","EE","FI","IS","IE","LV","LT","NO","SE","GB"], bounds: [-25,32,49,72], markerCodes: ["DK"] },
  { id: "western-europe", name: "西ヨーロッパ", codes: ["AT","BE","FR","DE","LI","LU","MC","NL","CH"], bounds: [-8,18,42,56], markerCodes: ["LI","LU","MC"] },
  { id: "southern-europe", name: "南ヨーロッパ", codes: ["AD","AL","BA","HR","GR","IT","MT","ME","MK","PT","SM","RS","SI","ES","VA","XK"], bounds: [-10,30,34,48], markerCodes: ["AD","MT","SM","VA","XK"] },
  { id: "eastern-europe", name: "東ヨーロッパ", codes: ["BY","BG","CZ","HU","MD","PL","RO","RU","SK","UA"], bounds: [18,62,40,72], markerCodes: ["MD"] },
  { id: "northern-africa", name: "北アフリカ", codes: ["DZ","EG","LY","MA","SD","TN"], bounds: [-20,42,10,38], markerCodes: [] },
  { id: "western-central-africa", name: "西・中部アフリカ", codes: ["BJ","BF","CM","CV","CF","TD","CG","CD","CI","GQ","GA","GM","GH","GN","GW","LR","ML","MR","NE","NG","ST","SN","SL","TG"], bounds: [-27,32,-15,25], markerCodes: ["CV","GQ","GM","GW","ST","TG"] },
  { id: "eastern-africa", name: "東アフリカ", codes: ["BI","KM","DJ","ER","ET","KE","MG","MU","RW","SC","SO","SS","TZ","UG"], bounds: [28,60,-15,20], markerCodes: ["BI","KM","DJ","MU","RW","SC"] },
  { id: "southern-africa", name: "南部アフリカ", codes: ["AO","BW","SZ","LS","MW","MZ","NA","ZA","ZM","ZW"], bounds: [10,42,-36,-6], markerCodes: ["SZ","LS"] },
  { id: "north-central-america", name: "北・中央アメリカ", codes: ["CA","US","MX","BZ","CR","SV","GT","HN","NI","PA"], bounds: [-170,-75,5,75], markerCodes: ["BZ","SV"] },
  { id: "caribbean", name: "カリブ海", codes: ["AG","BS","BB","CU","DM","DO","GD","HT","JM","KN","LC","VC","TT"], bounds: [-90,-58,8,28], markerCodes: ["AG","BS","BB","DM","GD","KN","LC","VC"] },
  { id: "south-america", name: "南アメリカ", codes: ["AR","BO","BR","CL","CO","EC","GY","PY","PE","SR","UY","VE"], bounds: [-83,-34,-58,14], markerCodes: ["GY","SR","UY"] },
  { id: "oceania", name: "オセアニア", codes: ["AU","FJ","KI","MH","FM","NR","NZ","PW","PG","WS","SB","TO","TV","VU"], bounds: [110,220,-50,15], markerCodes: ["FJ","KI","MH","FM","NR","PW","WS","SB","TO","TV","VU"], wrapLongitude: true }
];

export const WORLD_REGIONS_BY_ID = new Map(WORLD_REGIONS.map((region) => [region.id, region]));
export const WORLD_COUNTRY_CODES = [...new Set(WORLD_REGIONS.flatMap((region) => region.codes))];
