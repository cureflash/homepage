'use strict';

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const ASSET_URLS = new Map();

function assetMime(name) {
  if (name.endsWith('.webp')) return 'image/webp';
  if (name.endsWith('.mp3')) return 'audio/mpeg';
  return 'application/octet-stream';
}

async function loadAssetBundle() {
  let response;
  try { response = await fetch('assets.tar.gz', { cache: 'force-cache' }); } catch (_) { return false; }
  if (!response.ok || !('DecompressionStream' in window)) return false;
  const decompressed = response.body.pipeThrough(new DecompressionStream('gzip'));
  const buffer = await new Response(decompressed).arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const decoder = new TextDecoder();
  let offset = 0;
  while (offset + 512 <= bytes.length) {
    const header = bytes.subarray(offset, offset + 512);
    if (header.every((v) => v === 0)) break;
    const rawName = decoder.decode(header.subarray(0, 100)).replace(/\0.*$/, '');
    const rawSize = decoder.decode(header.subarray(124, 136)).replace(/\0.*$/, '').trim();
    const size = parseInt(rawSize || '0', 8) || 0;
    const start = offset + 512;
    const end = start + size;
    if (end > bytes.length) throw new Error('素材アーカイブが壊れています。');
    if (rawName.startsWith('assets/') && size > 0) {
      const name = rawName.slice('assets/'.length);
      const blob = new Blob([bytes.slice(start, end)], { type: assetMime(name) });
      ASSET_URLS.set(name, URL.createObjectURL(blob));
    }
    offset = start + Math.ceil(size / 512) * 512;
  }
  return true;
}

function assetURL(name) {
  return ASSET_URLS.get(name) || '';
}


const CONFIG = {
  build: 'WEB 2026.08.14',
  ble: {
    name: 'prarail-controller',
    service: '7beb2d00-4a65-4aa1-9d8a-5b6011e0a001',
    command: '7beb2d01-4a65-4aa1-9d8a-5b6011e0a001',
    telemetry: '7beb2d02-4a65-4aa1-9d8a-5b6011e0a001',
  },
  motor: {
    stopDuty: 0,
    notch: {
      N:  { duty: 400, speed: 20,  gauge: 1 },
      P1: { duty: 500, speed: 70,  gauge: 2 },
      P2: { duty: 600, speed: 100, gauge: 3 },
      P3: { duty: 700, speed: 180, gauge: 4 },
      P4: { duty: 800, speed: 230, gauge: 5 },
      P5: { duty: 900, speed: 270, gauge: 6 },
      P6: { duty: 1000, speed: 300, gauge: 7 },
    },
    startupFirstDuty: 400,
    startupSecondDuty: 700,
    startupFirstDuration: 0.5,
    startupSecondDuration: 6.0,
    manualMillisecondsPerPermille: 15,
  },
  stop: {
    preTargetDuty: 700,
    preTargetSpeed: 180,
    preDuration: 10,
    finalBrakeDelay: 2,
    finalBrakeDuration: 7,
    zeroThreshold: 0.5,
  },
  audio: {
    hikariIntermediate: 1000,
    hikariTerminal: 1001,
    nozomiIntermediate: 1002,
    nozomiTerminal: 1003,
    ambitiousIntermediate: 1004,
    ambitiousTerminal: 1005,
    ainiIkou: 1007,
    iiHiIntermediate: 1010,
    iiHiTerminal: 1011,
    defaultDepartureFirst: 1009,
    tokyoDownboundFirst: 1003,
    otome: 1008,
    horn: 2000,
    atc: 2004,
    departureAnnouncement: {
      uh:101, dh:101, uc:102, dc:102, ur:103, dr:103, ua:104, da:104, ub:105, db:105,
      uo:106, uk:107, un:108, uy:109, us:110, ut:111,
      dt:201, ds:202, dy:203, dn:204, dk:205, do:206,
    },
    arrivalApproach: {
      uh:301, dh:301, uc:302, dc:302, ur:303, dr:303, ua:304, da:304, ub:305, db:305,
      uo:306, uk:307, un:308, uy:309, us:310, ut:311,
      dt:401, ds:402, dy:403, dn:404, dk:405, do:406,
    },
    arrivalStation: { tokyo:501, shinagawa:502, shinYokohama:503, nagoya:504, kyoto:505, shinOsaka:506 },
  },
  scene: {
    canvasWidth: 1366,
    canvasHeight: 1024,
    scale: 0.8,
    offsetX: 0,
    offsetY: -30,
    nearY: 700,
    nearWidth: 2000,
    nearPhase: 1000,
    midY: 700,
    midWidth: 170,
    farY: 600,
    farWidth: 5000,
    stationX: 480,
    stationY: 680,
    stationWidth: 1300,
    stationTextOffsetX: 0,
    stationTextOffsetY: -201,
    stationTextSize: 88,
    trainX: 351,
    trainY: 682,
    trainWidth: 900,
    infraY: 754,
    infraWidth: 520,
    maxGaugeSpeed: 300,
    maxAnimationSpeed: 2000,
  },
};

const STATIONS = [
  { key:'hakata', title:'博多', en:'Hakata', code:'h' },
  { key:'kokura', title:'小倉', en:'Kokura', code:'c' },
  { key:'hiroshima', title:'広島', en:'Hiroshima', code:'r' },
  { key:'okayama', title:'岡山', en:'Okayama', code:'a' },
  { key:'shinKobe', title:'新神戸', en:'Shin-Kobe', code:'b' },
  { key:'shinOsaka', title:'新大阪', en:'Shin-Osaka', code:'o' },
  { key:'kyoto', title:'京都', en:'Kyoto', code:'k' },
  { key:'nagoya', title:'名古屋', en:'Nagoya', code:'n' },
  { key:'shinYokohama', title:'新横浜', en:'Shin-Yokohama', code:'y' },
  { key:'shinagawa', title:'品川', en:'Shinagawa', code:'s' },
  { key:'tokyo', title:'東京', en:'Tokyo', code:'t' },
];

const DESTINATIONS = {
  tokyo: { title:'東京', code:'TOKYO', terminal:'tokyo', defaultOrigin:'shinOsaka' },
  shinOsaka: { title:'新大阪', code:'SHIN-OSAKA', terminal:'shinOsaka', defaultOrigin:'tokyo' },
  okayama: { title:'岡山', code:'OKAYAMA', terminal:'okayama', defaultOrigin:'tokyo' },
  hiroshima: { title:'広島', code:'HIROSHIMA', terminal:'hiroshima', defaultOrigin:'tokyo' },
  hakata: { title:'博多', code:'HAKATA', terminal:'hakata', defaultOrigin:'tokyo' },
};

const SERVICES = {
  nozomi: { title:'のぞみ', code:'NOZOMI', bg:'#ffd000', fg:'#000' },
  hikari: { title:'ひかり', code:'HIKARI', bg:'#e82828', fg:'#fff' },
  kodama: { title:'こだま', code:'KODAMA', bg:'#246cff', fg:'#fff' },
};

const CHIMES = {
  hikari: { title:'ひかりチャイム', intermediate:1000, terminal:1001 },
  nozomi: { title:'のぞみチャイム', intermediate:1002, terminal:1003 },
  ambitious: { title:'AMBITIOUS JAPAN!', intermediate:1004, terminal:1005 },
  ainiIkou: { title:'会いにいこう', intermediate:1007, terminal:1007 },
  iiHi: { title:'いい日旅立ち', intermediate:1010, terminal:1011 },
};

const PASSING = {
  'nagoya>shinYokohama': ['三河安城','豊橋','浜松','掛川','静岡','新富士','三島','熱海','小田原'],
  'shinYokohama>nagoya': ['小田原','熱海','三島','新富士','静岡','掛川','浜松','豊橋','三河安城'],
  'kyoto>nagoya': ['米原','岐阜羽島'],
  'nagoya>kyoto': ['岐阜羽島','米原'],
};

const AVAILABLE_AUDIO = new Set([106,107,108,307,308,309,310,311,1000,1001,1002,1003,1004,1005,1008,1009,1010,1011,2000,2003,2004]);

const AUDIO_LIBRARY = [
  [106,'発車後案内・上り・新大阪'], [107,'発車後案内・上り・京都'], [108,'発車後案内・上り・名古屋'],
  [307,'停車前案内・上り・京都'], [308,'停車前案内・上り・名古屋'], [309,'停車前案内・上り・新横浜'],
  [310,'停車前案内・上り・品川'], [311,'停車前案内・上り・東京'],
  [1000,'ひかりチャイム・途中駅'], [1001,'ひかりチャイム・終着駅'],
  [1002,'のぞみチャイム・途中駅'], [1003,'のぞみチャイム・終着駅'],
  [1004,'AMBITIOUS JAPAN!・途中駅'], [1005,'AMBITIOUS JAPAN!・終着駅'],
  [1008,'乙女の祈り'], [1009,'発車ベル'], [1010,'いい日旅立ち・途中駅'], [1011,'いい日旅立ち・終着駅'],
  [2000,'警笛／接続音'], [2003,'ドアチャイム'], [2004,'ATC確認音'],
];

function stationIndex(key) { return STATIONS.findIndex((s) => s.key === key); }
function stationByKey(key) { return STATIONS[stationIndex(key)] || null; }
function nowSec() { return performance.now() / 1000; }

