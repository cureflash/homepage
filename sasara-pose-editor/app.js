import { readPsd } from 'https://esm.sh/ag-psd@31.0.2?bundle';

const $ = (id) => document.getElementById(id);
const ui = {
  openPsd: $('openPsd'),
  openPreset: $('openPreset'),
  resetStarter: $('resetStarter'),
  savePreset: $('savePreset'),
  exportPng: $('exportPng'),
  psdFallback: $('psdFallback'),
  jsonFallback: $('jsonFallback'),
  status: $('status'),
  presetList: $('presetList'),
  duplicatePreset: $('duplicatePreset'),
  deletePreset: $('deletePreset'),
  updatePreset: $('updatePreset'),
  canvas: $('preview'),
  emptyState: $('emptyState'),
  eye: $('eye'), brow: $('brow'), mouth: $('mouth'),
  backHand: $('backHand'), frontHand: $('frontHand'),
};

const ctx = ui.canvas.getContext('2d');
const CATEGORY_GROUPS = new Set(['目', '眉', '口']);
const BACK_HAND_PREFIX = '奥手';
const FRONT_HAND_PREFIX = '手前手';
const STORAGE_KEY = 'makemovie:sasara-presets:v2';

let starterConfig = null;
let config = null;
let psd = null;
let psdName = '';
let currentKey = 'normal';
let presetHandle = null;
let originalHidden = new WeakMap();
let optionNodes = { eye: [], brow: [], mouth: [], back_hand: [], front_hand: [] };
let tempCanvas = null;

function deepClone(value) { return JSON.parse(JSON.stringify(value)); }
function setStatus(text, isError = false) {
  ui.status.textContent = text;
  ui.status.style.color = isError ? '#9a2d2d' : '#5d554d';
}

async function loadStarter() {
  const response = await fetch('./default-presets.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`初期プリセットを読めません (${response.status})`);
  starterConfig = await response.json();
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try { config = JSON.parse(cached); } catch { config = deepClone(starterConfig); }
  } else {
    config = deepClone(starterConfig);
  }
  if (!config.presets?.[currentKey]) currentKey = Object.keys(config.presets || {})[0] || '';
  renderPresetList();
}

function walkLayers(children, fn, parent = null) {
  for (const layer of children || []) {
    fn(layer, parent);
    if (Array.isArray(layer.children)) walkLayers(layer.children, fn, layer);
  }
}

function findGroup(name) {
  let found = null;
  walkLayers(psd?.children || [], (layer) => {
    if (!found && Array.isArray(layer.children) && layer.name === name) found = layer;
  });
  return found;
}

function rememberVisibility() {
  originalHidden = new WeakMap();
  walkLayers(psd.children || [], (layer) => originalHidden.set(layer, Boolean(layer.hidden)));
}

function collectOptions() {
  const eyeGroup = findGroup('目');
  const browGroup = findGroup('眉');
  const mouthGroup = findGroup('口');
  optionNodes = {
    eye: (eyeGroup?.children || []).filter((x) => !Array.isArray(x.children)),
    brow: (browGroup?.children || []).filter((x) => !Array.isArray(x.children)),
    mouth: (mouthGroup?.children || []).filter((x) => !Array.isArray(x.children)),
    back_hand: [],
    front_hand: [],
  };
  walkLayers(psd.children || [], (layer) => {
    const name = String(layer.name || '');
    if (name.startsWith(BACK_HAND_PREFIX) && !Array.isArray(layer.children)) optionNodes.back_hand.push(layer);
    if (name.startsWith(FRONT_HAND_PREFIX) && !Array.isArray(layer.children)) optionNodes.front_hand.push(layer);
  });
  fillSelect(ui.eye, optionNodes.eye);
  fillSelect(ui.brow, optionNodes.brow);
  fillSelect(ui.mouth, optionNodes.mouth);
  fillSelect(ui.backHand, optionNodes.back_hand);
  fillSelect(ui.frontHand, optionNodes.front_hand);
}

function fillSelect(select, nodes) {
  select.innerHTML = '';
  for (const node of nodes) {
    const option = document.createElement('option');
    option.value = node.name || '';
    option.textContent = node.name || '(名称なし)';
    select.append(option);
  }
}

function currentParts() {
  return {
    eye: ui.eye.value,
    brow: ui.brow.value,
    mouth: ui.mouth.value,
    back_hand: ui.backHand.value,
    front_hand: ui.frontHand.value,
  };
}

function setParts(parts = {}) {
  setSelectValue(ui.eye, parts.eye);
  setSelectValue(ui.brow, parts.brow);
  setSelectValue(ui.mouth, parts.mouth);
  setSelectValue(ui.backHand, parts.back_hand);
  setSelectValue(ui.frontHand, parts.front_hand);
  renderPreview();
}

function setSelectValue(select, value) {
  if (!value) return;
  if ([...select.options].some((o) => o.value === value)) select.value = value;
}

function selectedPreset() { return config?.presets?.[currentKey] || null; }

function applyPreset(key) {
  if (!config?.presets?.[key]) return;
  currentKey = key;
  renderPresetList();
  if (psd) setParts(config.presets[key].parts || {});
}

function renderPresetList() {
  ui.presetList.innerHTML = '';
  for (const [key, preset] of Object.entries(config?.presets || {})) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `presetButton${key === currentKey ? ' active' : ''}`;
    const strong = document.createElement('strong');
    strong.textContent = preset.label || key;
    const span = document.createElement('span');
    span.textContent = key;
    button.append(strong, span);
    button.addEventListener('click', () => applyPreset(key));
    ui.presetList.append(button);
  }
}

function visibilityOverride(layer, parentName, parts) {
  const name = String(layer.name || '');
  if (parentName === '目') return name === parts.eye;
  if (parentName === '眉') return name === parts.brow;
  if (parentName === '口') return name === parts.mouth;
  if (name.startsWith(BACK_HAND_PREFIX) && !Array.isArray(layer.children)) return name === parts.back_hand;
  if (name.startsWith(FRONT_HAND_PREFIX) && !Array.isArray(layer.children)) return name === parts.front_hand;
  if (CATEGORY_GROUPS.has(name) && Array.isArray(layer.children)) return true;
  return null;
}

function isVisible(layer, parentName, parts) {
  const override = visibilityOverride(layer, parentName, parts);
  if (override !== null) return override;
  return !originalHidden.get(layer);
}

function imageSourceFor(layer) {
  if (layer.canvas) return layer.canvas;
  if (layer.imageData) {
    if (!tempCanvas) tempCanvas = document.createElement('canvas');
    tempCanvas.width = layer.imageData.width;
    tempCanvas.height = layer.imageData.height;
    const tctx = tempCanvas.getContext('2d');
    tctx.putImageData(layer.imageData, 0, 0);
    return tempCanvas;
  }
  return null;
}

function drawChildren(children, parentName, parts, parentVisible = true) {
  if (!parentVisible) return;
  const list = children || [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    const layer = list[i];
    const visible = isVisible(layer, parentName, parts);
    if (!visible) continue;
    const name = String(layer.name || '');
    if (Array.isArray(layer.children)) {
      ctx.save();
      const opacity = layer.opacity == null ? 255 : Number(layer.opacity);
      ctx.globalAlpha *= Math.max(0, Math.min(1, opacity / 255));
      drawChildren(layer.children, name, parts, true);
      ctx.restore();
      continue;
    }
    const source = imageSourceFor(layer);
    if (!source) continue;
    ctx.save();
    const opacity = layer.opacity == null ? 255 : Number(layer.opacity);
    ctx.globalAlpha *= Math.max(0, Math.min(1, opacity / 255));
    const left = Number(layer.left || 0);
    const top = Number(layer.top || 0);
    ctx.drawImage(source, left, top);
    ctx.restore();
  }
}

function renderPreview() {
  if (!psd) return;
  ui.canvas.width = psd.width;
  ui.canvas.height = psd.height;
  ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height);
  drawChildren(psd.children || [], '', currentParts(), true);
  ui.canvas.style.display = 'block';
  ui.emptyState.style.display = 'none';
}

async function readPsdFile(file) {
  setStatus(`${file.name} を読み込み中…`);
  const buffer = await file.arrayBuffer();
  psd = readPsd(buffer, { skipCompositeImageData: false, skipLayerImageData: false });
  psdName = file.name;
  rememberVisibility();
  collectOptions();
  const preset = selectedPreset();
  if (preset) setParts(preset.parts || {});
  setStatus(`${file.name} を読み込みました。初期プリセットを選んで微調整できます。`);
}

async function choosePsd() {
  try {
    if ('showOpenFilePicker' in window) {
      const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [{ description: 'Photoshop PSD', accept: { 'image/vnd.adobe.photoshop': ['.psd'] } }],
      });
      await readPsdFile(await handle.getFile());
    } else {
      ui.psdFallback.value = '';
      ui.psdFallback.click();
    }
  } catch (error) {
    if (error?.name !== 'AbortError') setStatus(`PSD読込エラー: ${error.message}`, true);
  }
}

function normalizeConfig(data) {
  if (!data || typeof data !== 'object' || !data.presets || typeof data.presets !== 'object') {
    throw new Error('presets を持つJSONではありません');
  }
  data.schema_version = 2;
  data.character = 'sasara';
  data.source_type = 'psd_semantic_parts';
  return data;
}

async function applyJsonFile(file, handle = null) {
  const data = normalizeConfig(JSON.parse(await file.text()));
  config = data;
  presetHandle = handle;
  currentKey = config.presets.normal ? 'normal' : Object.keys(config.presets)[0] || '';
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  renderPresetList();
  if (psd && currentKey) setParts(config.presets[currentKey].parts || {});
  setStatus(`${file.name} を設定として読み込みました。`);
}

async function choosePresetJson() {
  try {
    if ('showOpenFilePicker' in window) {
      const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [{ description: 'Sasara preset JSON', accept: { 'application/json': ['.json'] } }],
      });
      await applyJsonFile(await handle.getFile(), handle);
    } else {
      ui.jsonFallback.value = '';
      ui.jsonFallback.click();
    }
  } catch (error) {
    if (error?.name !== 'AbortError') setStatus(`JSON読込エラー: ${error.message}`, true);
  }
}

function updateCurrentPreset(showMessage = true) {
  if (!currentKey || !config?.presets?.[currentKey]) return;
  config.presets[currentKey].parts = currentParts();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  if (showMessage) setStatus(`${config.presets[currentKey].label || currentKey} を更新しました。`);
}

function encodedConfig() {
  return JSON.stringify(config, null, 2) + '\n';
}

async function saveConfig() {
  try {
    updateCurrentPreset(false);
    let handle = presetHandle;
    if (!handle && 'showSaveFilePicker' in window) {
      handle = await window.showSaveFilePicker({
        suggestedName: 'sasara.json',
        types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }],
      });
      presetHandle = handle;
    }
    if (handle?.createWritable) {
      const writable = await handle.createWritable();
      await writable.write(encodedConfig());
      await writable.close();
      setStatus('設定JSONを保存しました。このファイルを makemovie の config/character_presets/sasara.json に置けばそのまま使えます。');
      return;
    }
    const blob = new Blob([encodedConfig()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sasara.json';
    a.click();
    URL.revokeObjectURL(url);
    setStatus('sasara.json をダウンロードしました。');
  } catch (error) {
    if (error?.name !== 'AbortError') setStatus(`保存エラー: ${error.message}`, true);
  }
}

function duplicatePreset() {
  const source = selectedPreset();
  if (!source) return;
  const key = prompt('新しいプリセット名（台本の「表情」列で使う英数字名）', 'custom');
  if (!key) return;
  if (!/^[A-Za-z0-9_-]+$/.test(key)) {
    alert('プリセット名は半角英数字・_・- にしてください。');
    return;
  }
  if (config.presets[key] && !confirm(`${key} は既にあります。上書きしますか？`)) return;
  const label = prompt('画面に表示する名前', key) || key;
  config.presets[key] = deepClone(source);
  config.presets[key].label = label;
  config.presets[key].tags = [key];
  config.presets[key].parts = currentParts();
  currentKey = key;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  renderPresetList();
  setStatus(`${label} (${key}) を登録しました。`);
}

function deletePreset() {
  if (!currentKey || currentKey === 'normal') {
    alert('normal は基準プリセットなので削除しません。');
    return;
  }
  const preset = selectedPreset();
  if (!confirm(`${preset?.label || currentKey} を削除しますか？`)) return;
  delete config.presets[currentKey];
  currentKey = config.presets.normal ? 'normal' : Object.keys(config.presets)[0] || '';
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  renderPresetList();
  if (psd && currentKey) setParts(config.presets[currentKey].parts || {});
}

function resetStarter() {
  if (!starterConfig) return;
  if (!confirm('編集内容を破棄して、初期8パターンへ戻しますか？')) return;
  config = deepClone(starterConfig);
  currentKey = 'normal';
  presetHandle = null;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  renderPresetList();
  if (psd) setParts(config.presets.normal.parts);
  setStatus('初期8パターンへ戻しました。');
}

function exportPng() {
  if (!psd) { alert('先にPSDを開いてください。'); return; }
  renderPreview();
  ui.canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safe = currentKey || 'pose';
    a.href = url;
    a.download = `sasara_${safe}.png`;
    a.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}

ui.openPsd.addEventListener('click', choosePsd);
ui.openPreset.addEventListener('click', choosePresetJson);
ui.resetStarter.addEventListener('click', resetStarter);
ui.savePreset.addEventListener('click', saveConfig);
ui.exportPng.addEventListener('click', exportPng);
ui.updatePreset.addEventListener('click', () => updateCurrentPreset(true));
ui.duplicatePreset.addEventListener('click', duplicatePreset);
ui.deletePreset.addEventListener('click', deletePreset);
for (const select of [ui.eye, ui.brow, ui.mouth, ui.backHand, ui.frontHand]) {
  select.addEventListener('change', renderPreview);
}
ui.psdFallback.addEventListener('change', async () => {
  const file = ui.psdFallback.files?.[0];
  if (file) await readPsdFile(file);
});
ui.jsonFallback.addEventListener('change', async () => {
  const file = ui.jsonFallback.files?.[0];
  if (file) await applyJsonFile(file, null);
});

try {
  await loadStarter();
} catch (error) {
  setStatus(`初期化エラー: ${error.message}`, true);
}
