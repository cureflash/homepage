import JSZip from 'https://esm.sh/jszip@3.10.1';
import { DRIVE_FILES, DRIVE_SCOPE, CLIENT_ID_STORAGE_KEY } from './drive-config.js';

const $ = (id) => document.getElementById(id);
const ui = {
  clientId: $('clientId'), rememberClientId: $('rememberClientId'), connectDrive: $('connectDrive'),
  reloadDrive: $('reloadDrive'), saveDrive: $('saveDrive'), downloadJson: $('downloadJson'),
  duplicatePreset: $('duplicatePreset'), deletePreset: $('deletePreset'), dirtyBadge: $('dirtyBadge'),
  status: $('status'), presetCount: $('presetCount'), emotionFilter: $('emotionFilter'),
  presetSearch: $('presetSearch'), presetList: $('presetList'), preview: $('preview'),
  emptyState: $('emptyState'), currentLabel: $('currentLabel'), currentKey: $('currentKey'),
  controls: $('controls'), presetLabel: $('presetLabel'), presetEmotion: $('presetEmotion'),
  emotionLabel: $('emotionLabel'), setEmotionDefault: $('setEmotionDefault'), applyPreset: $('applyPreset'),
  yukkuriLinkNote: $('yukkuriLinkNote'),
};

const ctx = ui.preview.getContext('2d');
const STANDARD_EMOTIONS = [
  ['normal', '通常'], ['explain', '説明'], ['smile', '笑顔'], ['surprised', '驚き'],
  ['thinking', '考え中'], ['serious', '真面目'], ['troubled', '困り'], ['excited', 'テンション高め'],
  ['annoyed', '不満・呆れ'], ['deadpan', '淡々'],
];
const STANDARD_EMOTION_LABELS = Object.fromEntries(STANDARD_EMOTIONS);
const KITSUNE_ORDER = ['後', '体', '顔', '髪', '眉', '目', '口', '他'];
const SASARA_CONTROL_ORDER = ['eye', 'brow', 'mouth', 'back_hand', 'front_hand'];
const YUKKURI_PAIR = { reimu: 'marisa', marisa: 'reimu' };
const YUKKURI_LINKED_PARTS = ['顔', '眉', '目', '口'];

const state = {
  token: '', tokenClient: null, currentCharacter: 'sasara', currentPresetKey: '',
  configs: {}, models: {}, dirty: { sasara: false, reimu: false, marisa: false },
  renderSerial: 0,
};

ui.clientId.value = localStorage.getItem(CLIENT_ID_STORAGE_KEY) || '';

function setStatus(message, error = false) {
  ui.status.textContent = message;
  ui.status.style.color = error ? '#a02c2c' : '#625a52';
}

function setLoading(flag) {
  document.body.classList.toggle('loading', flag);
}

function refreshDirtyBadge() {
  const currentDirty = Boolean(state.dirty[state.currentCharacter]);
  const peer = YUKKURI_PAIR[state.currentCharacter];
  const linkedDirty = peer ? Boolean(state.dirty[peer]) : false;
  ui.dirtyBadge.hidden = !(currentDirty || linkedDirty);
  if (!ui.dirtyBadge.hidden) {
    ui.dirtyBadge.textContent = linkedDirty && currentDirty ? '未保存（連動含む）' : '未保存';
  }
}

function markDirty(character = state.currentCharacter, value = true) {
  state.dirty[character] = value;
  refreshDirtyBadge();
}

function currentConfig() { return state.configs[state.currentCharacter]; }
function currentModel() { return state.models[state.currentCharacter]; }
function currentPreset() { return currentConfig()?.presets?.[state.currentPresetKey] || null; }
function driveInfo(character = state.currentCharacter) { return DRIVE_FILES[character]; }

function emotionDisplayName(config, key) {
  const raw = String(config?.emotion_labels?.[key] || '').trim();
  if (raw) return raw;
  return STANDARD_EMOTION_LABELS[key] || key;
}

function ensureEmotionLabels(config) {
  config.emotion_labels ||= {};
  for (const [key, label] of STANDARD_EMOTIONS) {
    if (!String(config.emotion_labels[key] || '').trim()) config.emotion_labels[key] = label;
  }
  for (const preset of Object.values(config.presets || {})) {
    const key = String(preset.emotion || '').trim();
    if (key && !String(config.emotion_labels[key] || '').trim()) config.emotion_labels[key] = key;
  }
}

async function waitForGoogleIdentity() {
  for (let i = 0; i < 100; i += 1) {
    if (window.google?.accounts?.oauth2) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Google Identity Servicesを読み込めませんでした。通信状態を確認してください。');
}

function rememberClientId() {
  const clientId = ui.clientId.value.trim();
  if (!clientId.endsWith('.apps.googleusercontent.com')) {
    setStatus('Web OAuthクライアントIDを入力してください。', true);
    return;
  }
  localStorage.setItem(CLIENT_ID_STORAGE_KEY, clientId);
  state.tokenClient = null;
  setStatus('この端末にOAuthクライアントIDを保存しました。');
}

async function connectDrive() {
  const clientId = ui.clientId.value.trim();
  if (!clientId.endsWith('.apps.googleusercontent.com')) {
    setStatus('先にGoogle OAuth Web クライアントIDを入力してください。', true);
    return;
  }
  localStorage.setItem(CLIENT_ID_STORAGE_KEY, clientId);
  await waitForGoogleIdentity();
  if (!state.tokenClient) {
    state.tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: DRIVE_SCOPE,
      callback: () => {},
      error_callback: () => {},
    });
  }
  return new Promise((resolve, reject) => {
    state.tokenClient.callback = async (response) => {
      if (response.error) {
        reject(new Error(response.error_description || response.error));
        return;
      }
      state.token = response.access_token;
      try {
        await loadCharacter(state.currentCharacter, true);
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    state.tokenClient.error_callback = (error) => reject(new Error(error?.message || 'Google認証に失敗しました'));
    state.tokenClient.requestAccessToken({ prompt: state.token ? '' : 'consent' });
  }).catch((error) => setStatus(`Google Drive接続エラー: ${error.message}`, true));
}

async function authorizedFetch(url, options = {}) {
  if (!state.token) throw new Error('Google Driveに接続してください。');
  const headers = new Headers(options.headers || {});
  headers.set('Authorization', `Bearer ${state.token}`);
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    state.token = '';
    throw new Error('Google認証の有効期限が切れました。もう一度「Google Driveに接続」を押してください。');
  }
  if (!response.ok) {
    let detail = '';
    try { detail = (await response.json())?.error?.message || ''; } catch { detail = await response.text(); }
    throw new Error(`${response.status} ${response.statusText}${detail ? `: ${detail}` : ''}`);
  }
  return response;
}

async function driveJson(fileId) {
  const response = await authorizedFetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`);
  return response.json();
}

async function driveArrayBuffer(fileId) {
  const response = await authorizedFetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`);
  return response.arrayBuffer();
}

async function saveJsonToDrive(fileId, data) {
  const body = JSON.stringify(data, null, 2) + '\n';
  await authorizedFetch(`https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(fileId)}?uploadType=media`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });
}

function validateConfig(data, character) {
  if (!data || typeof data !== 'object' || data.character !== character || !data.presets || typeof data.presets !== 'object') {
    throw new Error(`${character}.json の形式が不正です。`);
  }
  data.schema_version = Math.max(3, Number(data.schema_version || 0));
  data.emotion_defaults ||= {};
  ensureEmotionLabels(data);
  return data;
}

function baseCode(filename) {
  const stem = filename.split('/').pop().replace(/\.png$/i, '');
  const match = stem.match(/^(\d+)/);
  return match ? match[1] : stem;
}

function parseSetLine(rhs) {
  const result = {};
  for (const token of rhs.split('-')) {
    for (const category of ['顔', '眉', '目', '口', '体', '髪', '後', '他']) {
      if (token.startsWith(category)) {
        const value = token.slice(category.length).trim();
        if (value) result[category] = value;
        break;
      }
    }
  }
  return result;
}

async function buildZipModel(buffer, info) {
  const zip = await JSZip.loadAsync(buffer);
  const names = Object.keys(zip.files);
  const roots = [...new Set(names.filter((name) => name.includes('/')).map((name) => name.split('/')[0]).filter(Boolean))];
  const root = roots.includes(info.characterRoot) ? info.characterRoot : roots.length === 1 ? roots[0] : info.characterRoot;
  if (!root) throw new Error(`ZIP内のキャラクターフォルダを特定できません: ${roots.join(', ')}`);

  const index = Object.fromEntries(KITSUNE_ORDER.map((category) => [category, new Map()]));
  for (const name of names) {
    if (!name.toLowerCase().endsWith('.png')) continue;
    const parts = name.split('/');
    if (parts.length < 3 || parts[0] !== root || !index[parts[1]]) continue;
    const category = parts[1];
    const code = baseCode(parts.at(-1));
    if (!index[category].has(code)) index[category].set(code, []);
    index[category].get(code).push(name);
  }
  for (const map of Object.values(index)) {
    for (const files of map.values()) files.sort();
  }

  const sets = {};
  const setFile = zip.file(`${root}/全/セット.txt`);
  if (setFile) {
    const bytes = await setFile.async('uint8array');
    const text = new TextDecoder('shift-jis').decode(bytes);
    for (const line of text.split(/\r?\n/)) {
      if (!line.includes('=')) continue;
      const splitAt = line.indexOf('=');
      const key = line.slice(0, splitAt).trim();
      if (key) sets[key] = parseSetLine(line.slice(splitAt + 1));
    }
  }

  let manifest = null;
  const manifestFile = zip.file(`${root}/manifest.json`);
  if (manifestFile) {
    try { manifest = JSON.parse(await manifestFile.async('string')); } catch { manifest = null; }
  }

  const controls = [];
  const staticSelections = {};
  if (manifest?.parts_mapping) {
    const mapping = manifest.parts_mapping;
    const labels = { eye: '目', brow: '眉', mouth: '口', back_hand: '奥手', front_hand: '手前手' };
    for (const key of SASARA_CONTROL_ORDER) {
      const category = mapping[key];
      if (!category || !index[category]?.size) continue;
      controls.push({ key, category, label: labels[key] || key, options: [...index[category].keys()] });
    }
    const bodyCategory = mapping.body;
    if (bodyCategory && index[bodyCategory]?.size) staticSelections[bodyCategory] = [...index[bodyCategory].keys()][0];
  } else {
    for (const category of KITSUNE_ORDER) {
      if (!index[category].size) continue;
      controls.push({ key: category, category, label: category, options: [...index[category].keys()] });
    }
  }

  return { kind: 'zip', zip, root, index, sets, manifest, controls, staticSelections, imageCache: new Map() };
}

function presetParts(config, model, preset) {
  if (preset?.parts && typeof preset.parts === 'object') return { ...preset.parts };
  if (model?.sets && preset?.set && model.sets[preset.set]) return { ...model.sets[preset.set] };
  return {};
}

function optionFallback(def, requested) {
  if (requested && def.options.includes(String(requested))) return String(requested);
  return def.options[0] || '';
}

function normalizedParts(config, model, preset) {
  const parts = presetParts(config, model, preset);
  return Object.fromEntries(model.controls.map((def) => [def.key, optionFallback(def, parts[def.key])]));
}

function populateControls() {
  const config = currentConfig();
  const model = currentModel();
  const preset = currentPreset();
  ui.controls.innerHTML = '';
  if (!config || !model || !preset) return;
  const parts = normalizedParts(config, model, preset);
  for (const def of model.controls) {
    const row = document.createElement('label');
    row.className = 'controlRow';
    const title = document.createElement('span');
    title.textContent = def.label;
    const select = document.createElement('select');
    select.dataset.partKey = def.key;
    for (const value of def.options) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.append(option);
    }
    select.value = parts[def.key] || '';
    select.addEventListener('change', () => {
      persistCurrentPartsFromControls();
      renderPreview();
    });
    row.append(title, select);
    ui.controls.append(row);
  }
  ui.presetLabel.value = preset.label || state.currentPresetKey;
  ui.presetEmotion.value = preset.emotion || 'normal';
  ui.emotionLabel.value = emotionDisplayName(config, ui.presetEmotion.value);
  ui.setEmotionDefault.checked = config.emotion_defaults?.[ui.presetEmotion.value] === state.currentPresetKey;
  if (ui.yukkuriLinkNote) ui.yukkuriLinkNote.hidden = !YUKKURI_PAIR[state.currentCharacter];
}

function currentPartsFromControls() {
  const parts = {};
  for (const select of ui.controls.querySelectorAll('select[data-part-key]')) {
    parts[select.dataset.partKey] = select.value;
  }
  return parts;
}

function peerBaseParts(peerPreset, sourceModel) {
  if (peerPreset?.parts && typeof peerPreset.parts === 'object') return { ...peerPreset.parts };
  if (peerPreset?.set && sourceModel?.sets?.[peerPreset.set]) return { ...sourceModel.sets[peerPreset.set] };
  return {};
}

function mirrorYukkuriFaceParts(sourceCharacter, presetKey, sourceParts) {
  const peer = YUKKURI_PAIR[sourceCharacter];
  if (!peer) return false;
  const peerConfig = state.configs[peer];
  const peerPreset = peerConfig?.presets?.[presetKey];
  const sourceModel = state.models[sourceCharacter];
  if (!peerConfig || !peerPreset || !sourceModel) return false;

  const next = peerBaseParts(peerPreset, sourceModel);
  let changed = false;
  for (const partKey of YUKKURI_LINKED_PARTS) {
    const value = String(sourceParts[partKey] || '').trim();
    if (!value || next[partKey] === value) continue;
    next[partKey] = value;
    changed = true;
  }
  if (!changed) return false;
  peerPreset.parts = next;
  delete peerPreset.set;
  markDirty(peer, true);
  return true;
}

function persistCurrentPartsFromControls() {
  const preset = currentPreset();
  if (!preset) return;
  const parts = currentPartsFromControls();
  preset.parts = parts;
  delete preset.set;
  markDirty(state.currentCharacter, true);
  mirrorYukkuriFaceParts(state.currentCharacter, state.currentPresetKey, parts);
}

function emotionEntries(config) {
  const values = new Set(STANDARD_EMOTIONS.map(([key]) => key));
  for (const preset of Object.values(config?.presets || {})) {
    const emotion = String(preset.emotion || '').trim();
    if (emotion) values.add(emotion);
  }
  for (const key of Object.keys(config?.emotion_labels || {})) values.add(key);
  return [...values].map((key) => [key, emotionDisplayName(config, key)]);
}

function buildEmotionOptions() {
  const config = currentConfig();
  const oldFilter = ui.emotionFilter.value;
  const oldPresetEmotion = ui.presetEmotion.value;
  ui.emotionFilter.innerHTML = '<option value="">すべて</option>';
  ui.presetEmotion.innerHTML = '';
  for (const [key, label] of emotionEntries(config)) {
    const a = document.createElement('option'); a.value = key; a.textContent = label; ui.emotionFilter.append(a);
    const b = document.createElement('option'); b.value = key; b.textContent = `${label} (${key})`; ui.presetEmotion.append(b);
  }
  if ([...ui.emotionFilter.options].some((x) => x.value === oldFilter)) ui.emotionFilter.value = oldFilter;
  if ([...ui.presetEmotion.options].some((x) => x.value === oldPresetEmotion)) ui.presetEmotion.value = oldPresetEmotion;
}

function filteredPresetEntries() {
  const config = currentConfig();
  if (!config) return [];
  const emotion = ui.emotionFilter.value;
  const query = ui.presetSearch.value.trim().toLowerCase();
  return Object.entries(config.presets).filter(([key, preset]) => {
    if (emotion && String(preset.emotion || '') !== emotion) return false;
    if (query) {
      const emotionName = emotionDisplayName(config, preset.emotion || 'normal');
      const haystack = `${key} ${preset.label || ''} ${preset.emotion || ''} ${emotionName}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

function renderPresetList() {
  const config = currentConfig();
  ui.presetList.innerHTML = '';
  if (!config) { ui.presetCount.textContent = ''; return; }
  const entries = filteredPresetEntries();
  ui.presetCount.textContent = `${entries.length}/${Object.keys(config.presets).length}`;
  for (const [key, preset] of entries) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `presetButton${key === state.currentPresetKey ? ' active' : ''}`;
    const strong = document.createElement('strong'); strong.textContent = preset.label || key;
    const code = document.createElement('code'); code.textContent = key;
    const badge = document.createElement('span'); badge.textContent = emotionDisplayName(config, preset.emotion || 'normal');
    button.append(strong, code, badge);
    button.addEventListener('click', () => selectPreset(key));
    ui.presetList.append(button);
  }
}

function selectInitialPreset() {
  const config = currentConfig();
  const normal = config?.emotion_defaults?.normal;
  const key = normal && config.presets[normal] ? normal : Object.keys(config?.presets || {})[0] || '';
  selectPreset(key);
}

function selectPreset(key) {
  const config = currentConfig();
  if (!config?.presets?.[key]) return;
  state.currentPresetKey = key;
  buildEmotionOptions();
  renderPresetList();
  populateControls();
  ui.currentLabel.textContent = currentPreset().label || key;
  ui.currentKey.textContent = key;
  renderPreview();
}

function chooseZipPath(model, category, code) {
  const files = model.index[category]?.get(String(code)) || [];
  if (!files.length) return null;
  const exact = files.find((name) => name.split('/').pop().replace(/\.png$/i, '') === String(code));
  return exact || files[0];
}

async function zipImage(model, path) {
  if (model.imageCache.has(path)) return model.imageCache.get(path);
  const promise = (async () => {
    const file = model.zip.file(path);
    if (!file) throw new Error(`ZIP内にPNGがありません: ${path}`);
    const bytes = await file.async('uint8array');
    const blob = new Blob([bytes], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    try {
      const image = new Image();
      image.decoding = 'async';
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error(`PNGを読み込めません: ${path}`));
        image.src = url;
      });
      return image;
    } finally {
      URL.revokeObjectURL(url);
    }
  })();
  model.imageCache.set(path, promise);
  return promise;
}

async function renderZip(model, parts, serial) {
  const selections = [];
  for (const [category, code] of Object.entries(model.staticSelections || {})) {
    if (code) selections.push([category, code]);
  }
  for (const def of model.controls) {
    const code = parts[def.key];
    if (code) selections.push([def.category, code]);
  }

  const byCategory = new Map(selections);
  const layers = [];
  for (const category of KITSUNE_ORDER) {
    const code = byCategory.get(category);
    if (!code) continue;
    const path = chooseZipPath(model, category, code);
    if (!path) continue;
    layers.push(await zipImage(model, path));
  }
  if (serial !== state.renderSerial) return;
  if (!layers.length) throw new Error('表示できるPNGパーツがありません。');
  ui.preview.width = Math.max(...layers.map((image) => image.naturalWidth || image.width));
  ui.preview.height = Math.max(...layers.map((image) => image.naturalHeight || image.height));
  ctx.clearRect(0, 0, ui.preview.width, ui.preview.height);
  for (const image of layers) ctx.drawImage(image, 0, 0);
}

async function renderPreview() {
  const config = currentConfig();
  const model = currentModel();
  const preset = currentPreset();
  if (!config || !model || !preset) return;
  const parts = currentPartsFromControls();
  const serial = ++state.renderSerial;
  try {
    await renderZip(model, parts, serial);
    if (serial === state.renderSerial) {
      ui.preview.style.display = 'block';
      ui.emptyState.style.display = 'none';
    }
  } catch (error) {
    if (serial === state.renderSerial) setStatus(`プレビューエラー: ${error.message}`, true);
  }
}

async function ensureYukkuriPeerConfig(character, force = false) {
  const peer = YUKKURI_PAIR[character];
  if (!peer) return;
  if (!force && state.configs[peer]) return;
  state.configs[peer] = validateConfig(await driveJson(driveInfo(peer).presetFileId), peer);
  state.dirty[peer] = false;
}

async function loadCharacter(character, force = false) {
  if (!state.token) throw new Error('Google Driveに接続してください。');
  const info = DRIVE_FILES[character];
  setLoading(true);
  setStatus(`${info.label} の設定と素材をDriveから読み込んでいます…`);
  try {
    if (force || !state.configs[character]) {
      state.configs[character] = validateConfig(await driveJson(info.presetFileId), character);
      state.dirty[character] = false;
    }
    if (force || !state.models[character]) {
      const buffer = await driveArrayBuffer(info.assetFileId);
      state.models[character] = await buildZipModel(buffer, info);
    }
    await ensureYukkuriPeerConfig(character, false);
    state.currentCharacter = character;
    refreshDirtyBadge();
    buildEmotionOptions();
    renderPresetList();
    selectInitialPreset();
    setStatus(`${info.label}: Driveの設定JSONと元素材を読み込みました。`);
  } finally {
    setLoading(false);
  }
}

async function switchCharacter(character) {
  if (character === state.currentCharacter && currentConfig()) return;
  if (state.dirty[state.currentCharacter]) {
    const ok = confirm('現在のキャラクターにDrive未保存の変更があります。切り替えても変更内容はブラウザ内に保持します。続けますか？');
    if (!ok) return;
  }
  for (const button of document.querySelectorAll('[data-character]')) {
    button.classList.toggle('active', button.dataset.character === character);
  }
  state.currentCharacter = character;
  state.currentPresetKey = '';
  ui.preview.style.display = 'none';
  ui.emptyState.style.display = 'block';
  ui.emptyState.textContent = state.token ? '読み込み中…' : 'Google Driveに接続してください';
  refreshDirtyBadge();
  if (state.token) {
    try { await loadCharacter(character, false); } catch (error) { setStatus(`読込エラー: ${error.message}`, true); }
  } else {
    renderPresetList();
    populateControls();
  }
}

function updateMetadata() {
  const config = currentConfig();
  const preset = currentPreset();
  if (!config || !preset) return;
  const oldEmotion = String(preset.emotion || 'normal');
  const nextEmotion = ui.presetEmotion.value || 'normal';
  preset.label = ui.presetLabel.value.trim() || state.currentPresetKey;
  preset.emotion = nextEmotion;
  if (ui.setEmotionDefault.checked) {
    config.emotion_defaults[nextEmotion] = state.currentPresetKey;
  } else if (config.emotion_defaults[nextEmotion] === state.currentPresetKey) {
    delete config.emotion_defaults[nextEmotion];
  }
  if (oldEmotion !== nextEmotion && config.emotion_defaults[oldEmotion] === state.currentPresetKey) {
    delete config.emotion_defaults[oldEmotion];
  }
  markDirty(state.currentCharacter, true);
  buildEmotionOptions();
  renderPresetList();
  ui.currentLabel.textContent = preset.label;
}

function updateEmotionLabel() {
  const config = currentConfig();
  const preset = currentPreset();
  if (!config || !preset) return;
  const emotionKey = ui.presetEmotion.value || preset.emotion || 'normal';
  const label = ui.emotionLabel.value.trim() || emotionKey;
  if (config.emotion_labels[emotionKey] === label) return;
  config.emotion_labels[emotionKey] = label;
  markDirty(state.currentCharacter, true);
  buildEmotionOptions();
  ui.presetEmotion.value = emotionKey;
  ui.emotionLabel.value = label;
  renderPresetList();
}

function updateCurrentPreset() {
  persistCurrentPartsFromControls();
  updateMetadata();
  updateEmotionLabel();
  setStatus(`${currentPreset().label || state.currentPresetKey} をブラウザ内で更新しました。Drive保存はまだです。`);
}

function duplicatePreset() {
  const config = currentConfig();
  const preset = currentPreset();
  if (!config || !preset) return;
  const key = prompt('新しいポーズ名（CSVの「ポーズ」列で使う半角名）', `${preset.emotion || 'custom'}_05`);
  if (!key) return;
  if (!/^[A-Za-z0-9_-]+$/.test(key)) { alert('半角英数字・_・-だけを使ってください。'); return; }
  if (config.presets[key] && !confirm(`${key} は既にあります。上書きしますか？`)) return;
  config.presets[key] = JSON.parse(JSON.stringify(preset));
  config.presets[key].parts = currentPartsFromControls();
  delete config.presets[key].set;
  config.presets[key].label = prompt('表示名', `${preset.label || key} コピー`) || key;
  state.currentPresetKey = key;
  markDirty(state.currentCharacter, true);
  buildEmotionOptions();
  renderPresetList();
  selectPreset(key);
}

function deletePreset() {
  const config = currentConfig();
  if (!config || !state.currentPresetKey) return;
  if (Object.keys(config.presets).length <= 1) { alert('最後の1件は削除できません。'); return; }
  if (!confirm(`${state.currentPresetKey} を削除しますか？`)) return;
  const deleted = state.currentPresetKey;
  delete config.presets[deleted];
  for (const [emotion, key] of Object.entries(config.emotion_defaults || {})) {
    if (key === deleted) delete config.emotion_defaults[emotion];
  }
  markDirty(state.currentCharacter, true);
  buildEmotionOptions();
  renderPresetList();
  selectInitialPreset();
}

async function saveDrive() {
  const config = currentConfig();
  if (!config) { setStatus('先にDriveからキャラクター設定を読み込んでください。', true); return; }
  updateCurrentPreset();
  const targets = Object.keys(state.dirty).filter((character) => state.dirty[character] && state.configs[character]);
  if (!targets.length) { setStatus('保存する変更はありません。'); return; }
  setLoading(true);
  try {
    for (const character of targets) {
      await saveJsonToDrive(driveInfo(character).presetFileId, state.configs[character]);
      state.dirty[character] = false;
    }
    refreshDirtyBadge();
    const labels = targets.map((character) => driveInfo(character).label).join('・');
    setStatus(`${labels} の設定JSONをGoogle Driveへ保存しました。PC側のDrive同期後、そのままmakemovieが参照します。`);
  } catch (error) {
    setStatus(`Drive保存エラー: ${error.message}`, true);
  } finally {
    setLoading(false);
  }
}

function downloadJson() {
  const config = currentConfig();
  if (!config) return;
  updateCurrentPreset();
  const blob = new Blob([JSON.stringify(config, null, 2) + '\n'], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${state.currentCharacter}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function reloadDrive() {
  const dirty = Object.entries(state.dirty).filter(([, value]) => value).map(([key]) => key);
  if (dirty.length && !confirm('Drive未保存の変更を破棄して再読み込みしますか？')) return;
  try {
    await loadCharacter(state.currentCharacter, true);
    const peer = YUKKURI_PAIR[state.currentCharacter];
    if (peer) await ensureYukkuriPeerConfig(state.currentCharacter, true);
  } catch (error) {
    setStatus(`再読込エラー: ${error.message}`, true);
  }
}

ui.rememberClientId.addEventListener('click', rememberClientId);
ui.connectDrive.addEventListener('click', connectDrive);
ui.reloadDrive.addEventListener('click', reloadDrive);
ui.saveDrive.addEventListener('click', saveDrive);
ui.downloadJson.addEventListener('click', downloadJson);
ui.duplicatePreset.addEventListener('click', duplicatePreset);
ui.deletePreset.addEventListener('click', deletePreset);
ui.applyPreset.addEventListener('click', updateCurrentPreset);
ui.presetSearch.addEventListener('input', renderPresetList);
ui.emotionFilter.addEventListener('change', renderPresetList);
ui.presetLabel.addEventListener('change', updateMetadata);
ui.emotionLabel.addEventListener('change', updateEmotionLabel);
ui.presetEmotion.addEventListener('change', () => {
  const config = currentConfig();
  const next = ui.presetEmotion.value || 'normal';
  ui.emotionLabel.value = emotionDisplayName(config, next);
  ui.setEmotionDefault.checked = config?.emotion_defaults?.[next] === state.currentPresetKey;
  updateMetadata();
});
ui.setEmotionDefault.addEventListener('change', updateMetadata);
for (const button of document.querySelectorAll('[data-character]')) {
  button.addEventListener('click', () => switchCharacter(button.dataset.character));
}

window.addEventListener('beforeunload', (event) => {
  if (Object.values(state.dirty).some(Boolean)) {
    event.preventDefault();
    event.returnValue = '';
  }
});

setStatus('OAuthクライアントIDを入力し、「Google Driveに接続」を押してください。');
