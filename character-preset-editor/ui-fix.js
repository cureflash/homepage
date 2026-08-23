// app.js rebuilds the emotion <select> after metadata edits. Preserve the
// user's current selection across those rebuilds so a later save cannot
// accidentally use the first (normal) option only because the UI was rebuilt.
const emotionSelect = document.getElementById('presetEmotion');
let preservedEmotion = '';

const metadataChangeIds = new Set(['presetLabel', 'presetEmotion', 'setEmotionDefault']);
const metadataClickIds = new Set(['applyPreset', 'saveDrive', 'downloadJson']);

function rememberEmotion() {
  preservedEmotion = emotionSelect?.value || '';
}

function restoreEmotionSoon() {
  const value = preservedEmotion;
  queueMicrotask(() => {
    if (!value || !emotionSelect) return;
    const exists = [...emotionSelect.options].some((option) => option.value === value);
    if (exists) emotionSelect.value = value;
  });
}

document.addEventListener('change', (event) => {
  if (metadataChangeIds.has(event.target?.id)) rememberEmotion();
}, true);

document.addEventListener('change', (event) => {
  if (metadataChangeIds.has(event.target?.id)) restoreEmotionSoon();
});

document.addEventListener('click', (event) => {
  if (metadataClickIds.has(event.target?.id)) rememberEmotion();
}, true);

document.addEventListener('click', (event) => {
  if (metadataClickIds.has(event.target?.id)) restoreEmotionSoon();
});
