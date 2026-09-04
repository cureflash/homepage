import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';

const runtimePath = 'qualifications/color-certification/data/grade1-runtime.json';
const authoringPath = 'qualifications/color-certification/data/grade1-authoring-xyz-p046-0001-0004.json';
const base = execFileSync('git', ['show', `origin/main:${runtimePath}`], { encoding: 'utf8' });
const authoring = JSON.parse(await readFile(authoringPath, 'utf8'));
const baseParsed = JSON.parse(base);
if (baseParsed.questions.length !== 85 || baseParsed.skills.length !== 16) throw new Error('unexpected main frontier');

const skillAnchor = '\n  ],\n  "questions": [';
const skillPos = base.indexOf(skillAnchor);
if (skillPos < 0) throw new Error('skill anchor not found');
const skillJson = JSON.stringify(authoring.skill);
let out = base.slice(0, skillPos) + `,\n    ${skillJson}` + base.slice(skillPos);

const questionClose = '\n  ]\n}\n';
const qPos = out.lastIndexOf(questionClose);
if (qPos < 0) throw new Error('question close anchor not found');
const questionJson = authoring.questions.map((q) => `    ${JSON.stringify(q)}`).join(',\n');
out = out.slice(0, qPos) + `,\n${questionJson}` + out.slice(qPos);
await writeFile(runtimePath, out);

const promoted = JSON.parse(out);
if (promoted.questions.length !== 89 || promoted.skills.length !== 17) throw new Error('wrong promoted counts');
if (JSON.stringify(promoted.questions.slice(-4)) !== JSON.stringify(authoring.questions)) throw new Error('questions not record-identical');
if (JSON.stringify(promoted.skills.at(-1)) !== JSON.stringify(authoring.skill)) throw new Error('skill not record-identical');
console.log('normalized runtime diff and preserved canonical p046 identity');
