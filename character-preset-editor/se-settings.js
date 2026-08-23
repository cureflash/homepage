import { DRIVE_FILES, DRIVE_SCOPE, CLIENT_ID_STORAGE_KEY } from './drive-config.js';

const $ = (id) => document.getElementById(id);
const ui = {
  clientId: $('clientId'),
  rememberClientId: $('rememberClientId'),
  connectDrive: $('connectDrive'),
  reloadDrive: $('reloadDrive'),
  applyRecommended: $('applyRecommended'),
  saveDrive: $('saveDrive'),
  dirtyBadge: $('dirtyBadge'),
  status: $('status'),
  characterTitle: $('characterTitle'),
  seRows: $('seRows'),
};

const STANDARD_EMOTIONS = [
  ['normal', '通常'], ['explain', '説明'], ['smile', '笑顔'], ['surprised', '驚き'],
  ['thinking', '考え中'], ['serious', '真面目'], ['troubled', '困り'], ['excited', 'テンション高め'],
  ['annoyed', '不満・呆れ'], ['deadpan', '淡々'],
];
const STANDARD_LABELS = Object.fromEntries(STANDARD_EMOTIONS);
const CHARACTER_LABELS = { sasara: 'ささら', reimu: '霊夢', marisa: '魔理沙' };
const RECOMMENDED = {
  smile: { file: 'sparkle.wav', volume: 55 },
  surprised: { file: 'surprise.wav', volume: 85 },
  thinking: { file: 'question.wav', volume: 65 },
  troubled: { file: 'shock.wav', volume: 55 },
  excited: { file: 'pop.wav', volume: 70 },
};

const state = {
  token: '',
  tokenClient: null,
  currentCharacter: 'sasara',
  configs: {},
  dirty: { sasara: false, reimu: false, marisa: false },
};

ui.clientId.value = localStorage.getItem(CLIENT_ID_STORAGE_KEY) || '';

function setStatus(message, error = false) {
  ui.status.textContent = message;
  ui.status.style.color = error ? '#a02c2c' : '#625a52';
}

function setLoading(flag) {
  document.body.classList.toggle('loading', flag);
}

function currentConfig() {
  return state.configs[state.currentCharacter];
}

function markDirty(value = true) {
  state.dirty[state.currentCharacter] = value;
  ui.dirtyBadge.hidden = !value;
}

function driveInfo(character = state.currentCharacter) {
  return DRIVE_FILES[character];
}

async function waitForGoogleIdentity() {
  for (let i = 0; i < 100; i += 1) {
    if (window.google?.accounts?.oauth2) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Google Identity Servicesを読み込めませんでした。');
}

function rememberClientId() {
  const value = ui.clientId.value.trim();
  if (!value.endsWith('.apps.googleusercontent.com')) {
    setStatus('Web OAuthクライアントIDを入力してください。', true);
    return;
  }
  localStorage.setItem(CLIENT_ID_STORAGE_KEY, value);
  state.tokenClient = null;
  setStatus('OAuthクライアントIDをこの端末に保存しました。');
}

async function authorizedFetch(url, options = {}) {
  if (!state.token) throw new Error('Google Driveに接続してください。');
  const headers = new Headers(options.headers || {});
  headers.set('Authorization', `Bearer ${state.token}`);
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    state.token = '';
    throw new Error('Google認証の有効期限が切れました。もう一度接続してください。');
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

async function saveJson(fileId, data) {
  const body = JSON.stringify(data, null, 2) + '\n';
  await authorizedFetch(`https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(fileId)}?uploadType=media`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });
}

function validateConfig(data, character) {
  if (!data || typeof data !== 'object' || data.character !== character || !data.presets) {
    throw new Error(`${character}.json の形式が不正です。`);
  }
  data.emotion_labels ||= {};
  data.emotion_se ||= {};
  return data;
}

function emotionEntries(config) {
  const keys = new Set(STANDARD_EMOTIONS.map(([key]) => key));
  for (const key of Object.keys(config?.emotion_labels || {})) keys.add(key);
  for (const key of Object.keys(config?.emotion_defaults || {})) keys.add(key);
  for (const preset of Object.values(config?.presets || {})) {
    const key = String(preset?.emotion || '').trim();
    if (key) keys.add(key);
  }
  return [...keys].map((key) => [key, String(config?.emotion_labels?.[key] || STANDARD_LABELS[key] || key)]);
}

function normalizeSeEntry(value) {
  if (!value) return { file: '', volume: 80 };
  if (typeof value === 'string') return { file: value, volume: 80 };
  return {
    file: String(value.file || value.se || '').trim(),
    volume: Number.isFinite(Number(value.volume)) ? Number(value.volume) : 80,
  };
}

function persistRow(key, fileInput, volumeInput) {
  const config = currentConfig();
  if (!config) return;
  const file = fileInput.value.trim();
  let volume = Number(volumeInput.value || 80);
  if (!Number.isFinite(volume)) volume = 80;
  volume = Math.max(0, Math.min(200, volume));
  volumeInput.value = String(volume);
  config.emotion_se ||= {};
  if (!file) delete config.emotion_se[key];
  else config.emotion_se[key] = { file, volume };
  markDirty(true);
}

function renderRows() {
  const config = currentConfig();
  ui.seRows.innerHTML = '';
  ui.characterTitle.textContent = CHARACTER_LABELS[state.currentCharacter] || state.currentCharacter;
  if (!config) return;

  for (const [key, label] of emotionEntries(config)) {
    const current = normalizeSeEntry(config.emotion_se?.[key]);
    const tr = document.createElement('tr');

    const labelTd = document.createElement('td');
    labelTd.textContent = label;

    const keyTd = document.createElement('td');
    const code = document.createElement('code');
    code.textContent = key;
    keyTd.append(code);

    const fileTd = document.createElement('td');
    const fileInput = document.createElement('input');
    fileInput.type = 'text';
    fileInput.setAttribute('list', 'seChoices');
    fileInput.placeholder = '未設定（鳴らさない）';
    fileInput.value = current.file;
    fileTd.append(fileInput);

    const volumeTd = document.createElement('td');
    const volumeInput = document.createElement('input');
    volumeInput.type = 'number';
    volumeInput.min = '0';
    volumeInput.max = '200';
    volumeInput.step = '1';
    volumeInput.value = String(current.volume);
    volumeInput.disabled = !current.file;
    volumeTd.append(volumeInput);

    const commit = () => {
      volumeInput.disabled = !fileInput.value.trim();
      persistRow(key, fileInput, volumeInput);
    };
    fileInput.addEventListener('change', commit);
    volumeInput.addEventListener('change', commit);

    tr.append(labelTd, keyTd, fileTd, volumeTd);
    ui.seRows.append(tr);
  }
}

async function loadCharacter(character, force = false) {
  if (!state.token) throw new Error('Google Driveに接続してください。');
  setLoading(true);
  try {
    if (force || !state.configs[character]) {
      state.configs[character] = validateConfig(await driveJson(DRIVE_FILES[character].presetFileId), character);
      state.dirty[character] = false;
    }
    state.currentCharacter = character;
    markDirty(state.dirty[character]);
    renderRows();
    setStatus(`${CHARACTER_LABELS[character]} の表情SE設定を読み込みました。`);
  } finally {
    setLoading(false);
  }
}

async function connectDrive() {
  const clientId = ui.clientId.value.trim();
  if (!clientId.endsWith('.apps.googleusercontent.com')) {
    setStatus('先にOAuthクライアントIDを入力してください。', true);
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
      if (response.error) return reject(new Error(response.error_description || response.error));
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

async function switchCharacter(character) {
  if (character === state.currentCharacter && currentConfig()) return;
  if (state.dirty[state.currentCharacter]) {
    const ok = confirm('現在のキャラクターに未保存の変更があります。切り替えてもブラウザ内には保持します。続けますか？');
    if (!ok) return;
  }
  for (const button of document.querySelectorAll('[data-character]')) {
    button.classList.toggle('active', button.dataset.character === character);
  }
  state.currentCharacter = character;
  markDirty(state.dirty[character]);
  if (state.token) {
    try { await loadCharacter(character, false); } catch (error) { setStatus(`読込エラー: ${error.message}`, true); }
  } else {
    renderRows();
  }
}

function applyRecommended() {
  const config = currentConfig();
  if (!config) {
    setStatus('先にDriveへ接続してください。', true);
    return;
  }
  config.emotion_se ||= {};
  for (const [key, value] of Object.entries(RECOMMENDED)) {
    config.emotion_se[key] = { ...value };
  }
  markDirty(true);
  renderRows();
  setStatus('控えめな初期SE設定をブラウザ内に適用しました。Drive保存はまだです。');
}

async function saveDrive() {
  const config = currentConfig();
  if (!config) {
    setStatus('先にDriveへ接続してください。', true);
    return;
  }
  setLoading(true);
  try {
    await saveJson(driveInfo().presetFileId, config);
    markDirty(false);
    setStatus(`${CHARACTER_LABELS[state.currentCharacter]} の表情SE設定をGoogle Driveへ保存しました。`);
  } catch (error) {
    setStatus(`Drive保存エラー: ${error.message}`, true);
  } finally {
    setLoading(false);
  }
}

async function reloadDrive() {
  if (state.dirty[state.currentCharacter] && !confirm('未保存の変更を破棄して再読み込みしますか？')) return;
  try { await loadCharacter(state.currentCharacter, true); } catch (error) { setStatus(`再読込エラー: ${error.message}`, true); }
}

ui.rememberClientId.addEventListener('click', rememberClientId);
ui.connectDrive.addEventListener('click', connectDrive);
ui.reloadDrive.addEventListener('click', reloadDrive);
ui.applyRecommended.addEventListener('click', applyRecommended);
ui.saveDrive.addEventListener('click', saveDrive);
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
