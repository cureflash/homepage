import { AssetCatalog } from './asset-catalog.js';

function renderCharacter(container, { src, alt, fallbackText }) {
  if (!container) return;
  container.replaceChildren();
  if (src) {
    const image = container.ownerDocument.createElement('img');
    image.src = src;
    image.alt = alt;
    image.className = 'character-image';
    image.addEventListener('error', () => {
      container.replaceChildren();
      const fallback = container.ownerDocument.createElement('span');
      fallback.className = 'character-fallback';
      fallback.textContent = fallbackText;
      container.append(fallback);
    }, { once: true });
    container.append(image);
    return;
  }
  const fallback = container.ownerDocument.createElement('span');
  fallback.className = 'character-fallback';
  fallback.textContent = fallbackText;
  container.append(fallback);
}

export class CharacterPresenter {
  constructor({ sergeantEl, traineeEl, catalog = new AssetCatalog() } = {}) {
    this.sergeantEl = sergeantEl;
    this.traineeEl = traineeEl;
    this.catalog = catalog;
  }

  render({ traineeStage = 0, reaction = 'neutral' } = {}) {
    renderCharacter(this.sergeantEl, {
      src: this.catalog.resolveSergeant(reaction),
      alt: '鬼軍曹',
      fallbackText: '軍曹',
    });
    renderCharacter(this.traineeEl, {
      src: this.catalog.resolveTrainee(traineeStage, reaction),
      alt: `訓練生 ステージ${traineeStage}`,
      fallbackText: `訓練生 Lv.${traineeStage}`,
    });
  }
}
