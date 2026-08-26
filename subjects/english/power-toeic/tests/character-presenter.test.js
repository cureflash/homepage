import test from 'node:test';
import assert from 'node:assert/strict';
import { AssetCatalog, ASSET_IDS } from '../js/ui/asset-catalog.js';
import { CharacterPresenter } from '../js/ui/character-presenter.js';

function element(documentRef) {
  return {
    ownerDocument: documentRef,
    children: [],
    replaceChildren(...children) { this.children = children; },
    append(child) { this.children.push(child); },
  };
}

function fakeDocument() {
  return {
    createElement(tag) {
      return {
        tag,
        className: '',
        textContent: '',
        src: '',
        alt: '',
        listeners: {},
        addEventListener(type, handler) { this.listeners[type] = handler; },
      };
    },
  };
}

test('presenter renders text fallbacks when character assets are absent', () => {
  const doc = fakeDocument();
  const sergeantEl = element(doc);
  const traineeEl = element(doc);
  const presenter = new CharacterPresenter({ sergeantEl, traineeEl, catalog: new AssetCatalog() });
  presenter.render({ traineeStage: 2, reaction: 'correct' });
  assert.equal(sergeantEl.children[0].textContent, '軍曹');
  assert.equal(traineeEl.children[0].textContent, '訓練生 Lv.2');
});

test('presenter uses available semantic images without changing quiz state', () => {
  const doc = fakeDocument();
  const sergeantEl = element(doc);
  const traineeEl = element(doc);
  const catalog = new AssetCatalog({
    [ASSET_IDS.SERGEANT_NEUTRAL]: '/s.webp',
    [ASSET_IDS.TRAINEE_STAGE_3]: '/t3.webp',
  });
  const presenter = new CharacterPresenter({ sergeantEl, traineeEl, catalog });
  presenter.render({ traineeStage: 3, reaction: 'wrong' });
  assert.equal(sergeantEl.children[0].src, '/s.webp');
  assert.equal(traineeEl.children[0].src, '/t3.webp');
});
