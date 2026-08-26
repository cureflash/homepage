import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";

const ROOT = process.cwd();
const pendingPath = path.join(ROOT, "qualifications/takken/data/pending-units.js");
const publicPath = path.join(ROOT, "qualifications/takken/data/public-catalog.js");
const appPath = path.join(ROOT, "qualifications/takken/assets/app.js");

function runBrowserData(file) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  return context.window;
}

const pendingWindow = runBrowserData(pendingPath);
const publicWindow = runBrowserData(publicPath);
const pending = pendingWindow.TAKKEN_PENDING_UNITS;
const published = publicWindow.TAKKEN_PUBLIC_UNITS;

assert.ok(Array.isArray(pending), "TAKKEN_PENDING_UNITS must be an array");
assert.ok(Array.isArray(published), "TAKKEN_PUBLIC_UNITS must be an array");
assert.ok(pending.length > 0, "pending catalog must contain generated units");

const unitIds = new Set();
const factIds = new Set();
const sentenceIds = new Set();

for (let i = 0; i < pending.length; i += 1) {
  const unit = pending[i];
  assert.equal(unit.examYear, 2026, `${unit.id}: examYear`);
  assert.equal(unit.lawAsOf, "2026-04-01", `${unit.id}: lawAsOf`);
  assert.equal(unit.factcheckStatus, "pending_factcheck", `${unit.id}: status`);
  assert.equal(unit.unitOrder, i + 1, `${unit.id}: sequential unitOrder`);
  assert.ok(unit.id && !unitIds.has(unit.id), `${unit.id}: duplicate unit id`);
  unitIds.add(unit.id);
  assert.ok(unit.title && unit.subtitle && unit.category && unit.chapter && unit.officialScope, `${unit.id}: required metadata`);
  assert.ok(Array.isArray(unit.facts) && unit.facts.length > 0, `${unit.id}: facts required`);
  assert.ok(Array.isArray(unit.sections) && unit.sections.length > 0, `${unit.id}: sections required`);
  assert.ok(Array.isArray(unit.sources) && unit.sources.length > 0, `${unit.id}: sources required`);

  const sourceIds = new Set(unit.sources.map((source) => source.id));
  assert.equal(sourceIds.size, unit.sources.length, `${unit.id}: duplicate source ids`);
  for (const source of unit.sources) {
    assert.ok(/^https:\/\//.test(source.url), `${unit.id}: source must use https`);
  }

  for (const fact of unit.facts) {
    assert.ok(fact.id && !factIds.has(fact.id), `${unit.id}: duplicate fact id ${fact.id}`);
    factIds.add(fact.id);
    assert.equal(fact.factcheckStatus, "pending_factcheck", `${fact.id}: status`);
    assert.ok(fact.claim && Array.isArray(fact.sources) && fact.sources.length > 0, `${fact.id}: claim/source`);
    for (const sourceId of fact.sources) assert.ok(sourceIds.has(sourceId), `${fact.id}: missing source ${sourceId}`);
  }

  for (const section of unit.sections) {
    assert.ok(section.id && section.heading && Array.isArray(section.sentences), `${unit.id}: section shape`);
    for (const sentence of section.sentences) {
      assert.ok(sentence.id && !sentenceIds.has(sentence.id), `${unit.id}: duplicate sentence id ${sentence.id}`);
      sentenceIds.add(sentence.id);
      assert.equal(sentence.factcheckStatus, "pending_factcheck", `${sentence.id}: status`);
      assert.ok(Array.isArray(sentence.terms) && Array.isArray(sentence.sources), `${sentence.id}: term/source arrays`);
      const placeholders = [...sentence.template.matchAll(/\{\{([^{}]+)\}\}/g)].map((match) => match[1]);
      assert.deepEqual([...sentence.terms].sort(), [...placeholders].sort(), `${sentence.id}: terms must exactly match template placeholders`);
      for (const sourceId of sentence.sources) assert.ok(sourceIds.has(sourceId), `${sentence.id}: missing source ${sourceId}`);
    }
  }
}

for (const unit of published) {
  assert.equal(unit.factcheckStatus, "verified", `${unit.id}: public catalog must be verified-only`);
}

const pendingIds = new Set(pending.map((unit) => unit.id));
for (const unit of published) {
  assert.ok(!pendingIds.has(unit.id), `${unit.id}: pending unit leaked into public catalog`);
}

const appSource = fs.readFileSync(appPath, "utf8");
assert.match(appSource, /factcheckStatus === "verified"/, "renderer must filter public units to verified-only");
assert.match(appSource, /0x6D2B79F5/, "renderer must retain deterministic seeded RNG");
assert.match(appSource, /window\.print\(\)/, "renderer must retain print/PDF path");

console.log(`Takken worksheet validation passed: ${pending.length} pending, ${published.length} public.`);
