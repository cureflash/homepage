import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';

const root = fileURLToPath(new URL('../../../../', import.meta.url));
const bank = JSON.parse(await readFile(new URL('../js/data/runtime/pilot-bank.json', import.meta.url), 'utf8'));
const mime = { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.mp3': 'audio/mpeg' };
const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const path = resolve(root, '.' + decodeURIComponent(pathname), pathname.endsWith('/') ? 'index.html' : '');
    if (!path.startsWith(root.endsWith(sep) ? root : root + sep)) throw new Error('outside repository');
    const body = await readFile(path.endsWith(sep) ? path + 'index.html' : path);
    response.writeHead(200, { 'Content-Type': mime[extname(path)] ?? (path.endsWith(sep) ? 'text/html' : 'application/octet-stream') });
    response.end(body);
  } catch { response.writeHead(404); response.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/subjects/english/power-toeic/`);
  await page.locator('[data-home-mode="training"]').click();
  assert.equal(await page.locator('[data-home-skill]').count(), 0);
  await page.locator('[data-home-category="connectors-prepositions"]').click();
  assert.equal(await page.locator('[data-home-skill]').count(), 3);
  await page.locator('[data-home-skill="p5.conn.because_vs_because_of"]').click();
  assert.ok(await page.locator('[data-view="workout-editor"]').isVisible());
  assert.match(await page.locator('[data-role="editor-availability"]').innerText(), /10問/);
  await page.locator('[data-editor="size"][data-size="50"]').click();
  assert.equal(await page.locator('[data-editor="total"]').inputValue(), '50');
  await page.locator('[data-editor="endless"]').check();
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  await page.locator('[data-editor="start"]').click();
  for (let i = 0; i < 12; i++) {
    const sentence = await page.locator('[data-role="sentence"]').innerText();
    const question = bank.questions.find(q => q.sentence === sentence);
    assert.equal(question.skillId, 'p5.conn.because_vs_because_of');
    await page.locator('[data-role="choices"] button').nth(question.correctIndex).click();
    if (i < 11) await page.locator('[data-action="next"]').click();
  }
  await page.locator('[data-action="end-workout"]').click();
  assert.ok(await page.locator('[data-view="result"]').isVisible());
  assert.match(await page.locator('[data-view="result"]').innerText(), /12/);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('power-toeic.app-state')));
  assert.equal(saved.attempts.length, 12);
  assert.equal(saved.progression.stage, 1);
  await page.reload();
  await page.locator('[data-home-mode="weakness"]').click();
  assert.ok(await page.locator('[data-view="workout-editor"]').isVisible());
  assert.ok(await page.locator('[data-view="quiz"]').isHidden());
  await page.locator('[data-action="home"]').click();
  await page.locator('[data-home-mode="test"]').click();
  await page.locator('[data-home-test-category]').uncheck();
  assert.ok(await page.locator('[data-home-action="edit-test"]').isDisabled());
  await page.locator('[data-home-test-category]').check();
  await page.locator('[data-home-action="edit-test"]').click();
  await page.locator('[data-editor="start"]').click();
  const context = await page.locator('[data-role="question-context"]').innerText();
  assert.ok(!context.includes('because') && !context.includes('despite') && !context.includes('during'));
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  assert.deepEqual(errors, []);
  console.log('PASS: category drill-down, scope, presets, endless continuation/results, persistence/growth, pre-start editor, test labels, mobile layout');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
