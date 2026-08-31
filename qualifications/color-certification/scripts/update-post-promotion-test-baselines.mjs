import { readFile, writeFile } from 'node:fs/promises';

const testsDir = new URL('../tests/', import.meta.url);
const files = [
  'color-authoring-late.test.js',
  'color-bank.test.js',
  'color-to-name-0057-0064.test.js',
  'name-to-color-0017-0024.test.js',
  'name-to-color-0025-0032.test.js',
  'name-to-color-0033-0040.test.js',
  'name-to-color-0041-0048.test.js',
  'name-to-color-0049-0056.test.js',
  'name-to-color-0057-0064.test.js',
  'name-to-color-0065-0072.test.js'
];

for (const name of files) {
  const url = new URL(name, testsDir);
  let source = await readFile(url, 'utf8');
  const skill = name.startsWith('name-to-color')
    ? 'pc3.conventional.name_to_color'
    : 'pc3.conventional.color_to_name';
  const longNeedle = `.filter((question) => question.skillId === '${skill}')`;
  const shortNeedle = `.filter((q) => q.skillId === '${skill}')`;
  const longCount = source.split(longNeedle).length - 1;
  const shortCount = source.split(shortNeedle).length - 1;
  if (longCount + shortCount !== 1) {
    throw new Error(`${name}: expected exactly one historical runtime-target filter, found ${longCount + shortCount}`);
  }
  if (longCount === 1) {
    source = source.replace(longNeedle, `.filter((question) => question.skillId === '${skill}' && Number(question.id.slice(-4)) <= 16)`);
  } else {
    source = source.replace(shortNeedle, `.filter((q) => q.skillId === '${skill}' && Number(q.id.slice(-4)) <= 16)`);
  }
  if (name === 'color-bank.test.js') {
    const countNeedle = 'assert.equal(runtime.questions.length, 16);';
    if (!source.includes(countNeedle)) throw new Error(`${name}: missing old runtime count assertion`);
    source = source.replace(countNeedle, 'assert.equal(runtime.questions.length, 127);');
  }
  await writeFile(url, source, 'utf8');
}
