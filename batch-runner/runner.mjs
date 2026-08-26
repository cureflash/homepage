import { Codex } from "@openai/codex-sdk";
import { spawnSync } from "node:child_process";
import { mkdir, readFile, appendFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const config = await readJson(path.join(scriptDir, "config.json"));
const projectConfig = await readJson(path.join(scriptDir, "projects.json"));
const repoRoot = path.resolve(scriptDir, config.repositoryPath ?? "..");
const logsDir = path.join(scriptDir, "logs");
await mkdir(logsDir, { recursive: true });

const logFile = path.join(logsDir, `${localDateStamp()}-${safeTimeStamp()}.log`);
let hadFailure = false;

await log(`Repository: ${repoRoot}`);
await log(`Log: ${logFile}`);

try {
  verifyPrerequisites();

  if (config.requireCleanWorkingTree !== false) {
    assertCleanWorkingTree("起動前");
  }

  if (config.pullBeforeStart !== false) {
    await log("git pull --ff-only");
    runGit(["pull", "--ff-only"]);
  }

  if (config.requireCleanWorkingTree !== false) {
    assertCleanWorkingTree("git pull 後");
  }

  const projects = (projectConfig.projects ?? []).filter((project) => project.enabled !== false);
  if (projects.length === 0) {
    throw new Error("projects.json に enabled なプロジェクトがありません。");
  }

  for (const project of projects) {
    try {
      await runProject(project);
    } catch (error) {
      hadFailure = true;
      await log(`STOP [${project.name}]: ${formatError(error)}`);

      if (config.requireCleanWorkingTree !== false && !isWorkingTreeClean()) {
        await log(`ABORT QUEUE: [${project.name}] left the Git working tree dirty.`);
        break;
      }
    }
  }
} catch (error) {
  hadFailure = true;
  await log(`FATAL: ${formatError(error)}`);
}

await log(hadFailure ? "Batch runner finished with one or more project errors." : "Batch runner finished normally.");
process.exitCode = hadFailure ? 1 : 0;

async function runProject(project) {
  validateProject(project);

  const statusPath = path.resolve(repoRoot, project.statusFile);
  const initialStatus = await readStatus(statusPath);
  const doneStatuses = new Set((project.doneStatuses ?? ["done", "completed", "complete"]).map(normalizeStatus));

  await log(`PROJECT START [${project.name}] status=${initialStatus.status}`);

  if (doneStatuses.has(normalizeStatus(initialStatus.status))) {
    await log(`PROJECT SKIP [${project.name}] already done`);
    return;
  }

  const codex = new Codex();
  const thread = codex.startThread({
    workingDirectory: repoRoot,
    sandboxMode: config.codex?.sandboxMode ?? "workspace-write",
    approvalPolicy: config.codex?.approvalPolicy ?? "never",
    networkAccessEnabled: config.codex?.networkAccessEnabled ?? true,
    webSearchMode: config.codex?.webSearchMode ?? "live",
    modelReasoningEffort: config.codex?.modelReasoningEffort ?? "high",
  });

  const maxRuns = project.maxRuns ?? config.maxRunsPerProject ?? 1;
  const maxNoProgressRuns = project.maxNoProgressRuns ?? config.maxNoProgressRuns ?? 2;
  let noProgressRuns = 0;

  for (let runNumber = 1; runNumber <= maxRuns; runNumber += 1) {
    if (config.requireCleanWorkingTree !== false) {
      assertCleanWorkingTree(`ターン${runNumber}開始前`);
    }

    const beforeStatus = await readStatus(statusPath);
    if (doneStatuses.has(normalizeStatus(beforeStatus.status))) {
      await log(`PROJECT DONE [${project.name}] before turn ${runNumber}`);
      return;
    }

    const beforeFingerprint = statusFingerprint(beforeStatus);
    const beforeHead = runGit(["rev-parse", "HEAD"]).trim();
    const prompt = runNumber === 1 ? buildInitialPrompt(project) : (project.nextPrompt ?? "次を進めて");

    await log(`TURN START [${project.name}] #${runNumber} thread=${thread.id ?? "new"}`);
    await log(`STATUS BEFORE [${project.name}] #${runNumber}: ${compactJson(beforeStatus)}`);

    const turn = await runWithTimeout(
      thread,
      prompt,
      (project.turnTimeoutMinutes ?? config.turnTimeoutMinutes ?? 60) * 60_000,
    );

    await log(`TURN END [${project.name}] #${runNumber} thread=${thread.id ?? "unknown"}`);
    if (turn.finalResponse) {
      await log(`CODEX [${project.name}] #${runNumber}: ${singleLine(turn.finalResponse)}`);
    }

    // Codex workspace-write can intentionally leave .git read-only. The parent
    // runner is outside that sandbox, so if the turn produced a dirty tree it
    // safely commits exactly those changes here. Every turn starts clean, which
    // prevents unrelated pre-existing edits from being swept into this commit.
    if (!isWorkingTreeClean()) {
      await log(`PARENT COMMIT [${project.name}] #${runNumber}: Codex left uncommitted changes; committing from parent runner.`);
      runGit(["add", "-A"]);
      runGit(["diff", "--cached", "--check"]);
      runGit(["commit", "-m", `Batch: ${project.name} turn ${runNumber}`]);
    }

    if (config.requireCleanWorkingTree !== false) {
      assertCleanWorkingTree(`ターン${runNumber}終了後。親ランナーのcommit後もdirtyです`);
    }

    const afterHead = runGit(["rev-parse", "HEAD"]).trim();
    if (afterHead === beforeHead) {
      await log(`WARNING [${project.name}] #${runNumber}: Git HEAD did not change.`);
    }

    if (config.pushAfterTurn !== false && afterHead !== beforeHead) {
      await log(`git push [${project.name}] #${runNumber}`);
      runGit(["push"]);
    }

    const afterStatus = await readStatus(statusPath);
    const afterFingerprint = statusFingerprint(afterStatus);
    await log(`STATUS AFTER [${project.name}] #${runNumber}: ${compactJson(afterStatus)}`);

    if (doneStatuses.has(normalizeStatus(afterStatus.status))) {
      await log(`PROJECT DONE [${project.name}] after turn ${runNumber}`);
      return;
    }

    if (beforeFingerprint === afterFingerprint && afterHead === beforeHead) {
      noProgressRuns += 1;
      await log(`NO PROGRESS [${project.name}] ${noProgressRuns}/${maxNoProgressRuns}`);
    } else {
      noProgressRuns = 0;
    }

    if (noProgressRuns >= maxNoProgressRuns) {
      throw new Error(`STATUS/Git が ${maxNoProgressRuns} 回連続で実質的に進んでいません。無限ループ防止のためこのプロジェクトを停止します。`);
    }
  }

  const finalStatus = await readStatus(statusPath);
  if (doneStatuses.has(normalizeStatus(finalStatus.status))) {
    await log(`PROJECT DONE [${project.name}] after run budget`);
    return;
  }

  await log(`PROJECT YIELD [${project.name}] after ${maxRuns} turn(s), status=${finalStatus.status}`);
}

function buildInitialPrompt(project) {
  const files = [
    project.statusFile,
    project.handoffFile,
    ...(project.instructionFiles ?? []),
  ].filter(Boolean);

  return `
このリポジトリで「${project.name}」の継続バッチ処理を実行してください。

最初に以下のファイルを読み、現在の状態、正本ルール、直前の引き継ぎを確認してください。
${files.map((file) => `- ${file}`).join("\n")}

STATUS と HANDOFF が示す現在の未完了作業だけを進めてください。HANDOFF に「Exact next starting point」「次の開始地点」等がある場合はそこを正本として扱ってください。
STATUS に batch target / generation batch target など明示的な作業量がある場合は、その指定量をこのターンの単位として優先してください。勝手に別分野へ範囲を広げないでください。
作業本体、必要な調査、検証・テスト、実行計画、HANDOFF、STATUS の更新まで完了してください。
STATUS は必ず残し、作業継続中なら status=in_progress、プロジェクト全体が本当に完了した場合だけ status=done にしてください。
事実確認が必要な作業では、権威ある一次情報・公的資料を優先してください。

可能ならこのターンの変更をcommitしてください。ただし sandbox の制約で .git が読み取り専用なら、commitのために権限回避や破壊的操作を試みず、変更をそのまま残してください。親ランナーが安全にcommitしてpushします。
force push、reset --hard、既存の未関連変更の破棄、履歴改変は禁止です。
完了できない場合は成功したことにせず、状態を壊さずにブロッカーをSTATUS/HANDOFFへ記録してください。

作業終了時は簡潔な完了報告を返してください。
`.trim();
}

async function runWithTimeout(thread, prompt, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await thread.run(prompt, { signal: controller.signal });
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error(`Codexターンが ${Math.round(timeoutMs / 60_000)} 分を超えたため中断しました。`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

function verifyPrerequisites() {
  runGit(["rev-parse", "--is-inside-work-tree"]);
  const topLevel = path.resolve(runGit(["rev-parse", "--show-toplevel"]).trim());
  if (topLevel !== repoRoot) {
    throw new Error(`repositoryPath がGitルートを指していません。expected=${repoRoot} actual=${topLevel}`);
  }
}

function isWorkingTreeClean() {
  return !runGit(["status", "--porcelain"]).trim();
}

function assertCleanWorkingTree(stage) {
  const dirty = runGit(["status", "--porcelain"]);
  if (dirty.trim()) {
    throw new Error(`${stage}: Git作業ツリーがdirtyです。既存変更を保護するため停止します。\n${dirty.trim()}`);
  }
}

function runGit(args) {
  const result = spawnSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
    shell: false,
  });

  if (result.error) {
    throw new Error(`git ${args.join(" ")} を起動できません: ${result.error.message}`);
  }

  if (result.status !== 0) {
    const stderr = (result.stderr ?? "").trim();
    const stdout = (result.stdout ?? "").trim();
    throw new Error(`git ${args.join(" ")} failed (${result.status})\n${stderr || stdout}`);
  }

  return result.stdout ?? "";
}

async function readStatus(statusPath) {
  const status = await readJson(statusPath);
  if (!status || typeof status !== "object" || typeof status.status !== "string") {
    throw new Error(`${statusPath} に文字列の status がありません。`);
  }
  return status;
}

async function readJson(filePath) {
  const text = await readFile(filePath, "utf8");
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`JSONを読めません: ${filePath}: ${error.message}`);
  }
}

function validateProject(project) {
  if (!project?.name || !project?.statusFile) {
    throw new Error("projects.json の各プロジェクトには name と statusFile が必要です。");
  }
}

function statusFingerprint(status) {
  return canonicalJson(stripVolatileFields(status));
}

function stripVolatileFields(value) {
  if (Array.isArray(value)) {
    return value.map(stripVolatileFields);
  }
  if (value && typeof value === "object") {
    const result = {};
    for (const key of Object.keys(value).sort()) {
      if (key === "updated_at" || key === "updatedAt" || key === "last_updated") continue;
      result[key] = stripVolatileFields(value[key]);
    }
    return result;
  }
  return value;
}

function canonicalJson(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJson).join(",")}]`;
  }
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function normalizeStatus(value) {
  return String(value ?? "").trim().toLowerCase();
}

function compactJson(value) {
  return JSON.stringify(value);
}

function singleLine(value) {
  return String(value).replace(/\s+/g, " ").trim().slice(0, 2000);
}

async function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  await appendFile(logFile, `${line}\n`, "utf8");
}

function localDateStamp() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function safeTimeStamp() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  return `${h}${m}${s}`;
}

function formatError(error) {
  return error instanceof Error ? error.stack ?? error.message : String(error);
}
