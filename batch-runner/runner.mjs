import { Codex } from "@openai/codex-sdk";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, appendFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const config = await readJson(path.join(scriptDir, "config.json"));
const projectConfig = await readJson(path.join(scriptDir, "projects.json"));
const defaultRepoRoot = path.resolve(scriptDir, config.repositoryPath ?? "..");
const logsDir = path.join(scriptDir, "logs");
await mkdir(logsDir, { recursive: true });

const logFile = path.join(logsDir, `${localDateStamp()}-${safeTimeStamp()}.log`);
let hadFailure = false;
const blockedRepos = new Set();

await log(`Default repository: ${defaultRepoRoot}`);
await log(`Log: ${logFile}`);

try {
  const projects = (projectConfig.projects ?? []).filter((project) => project.enabled !== false);
  if (projects.length === 0) {
    throw new Error("projects.json に enabled なプロジェクトがありません。");
  }

  for (const project of projects) {
    const repoRoot = resolveProjectRepoRoot(project);
    if (blockedRepos.has(repoRoot)) {
      await log(`PROJECT SKIP [${project.name}] repository is blocked for this queue cycle: ${repoRoot}`);
      continue;
    }

    try {
      await runProject(project, repoRoot);
    } catch (error) {
      hadFailure = true;
      await log(`STOP [${project.name}]: ${formatError(error)}`);

      if (isGitRepository(repoRoot) && !isWorkingTreeClean(repoRoot)) {
        blockedRepos.add(repoRoot);
        await log(`REPO BLOCKED [${project.name}]: dirty tree remains in ${repoRoot}; other projects in this repository will skip this cycle.`);
      }
    }
  }
} catch (error) {
  hadFailure = true;
  await log(`FATAL: ${formatError(error)}`);
}

await log(hadFailure ? "Batch runner finished with one or more project errors." : "Batch runner finished normally.");
process.exitCode = hadFailure ? 1 : 0;

async function runProject(project, repoRoot) {
  validateProject(project);
  await prepareRepository(project, repoRoot);

  const statusPath = path.resolve(repoRoot, project.statusFile);
  const initialStatus = await readStatus(statusPath);
  const doneStatuses = new Set((project.doneStatuses ?? ["done", "completed", "complete"]).map(normalizeStatus));

  await log(`PROJECT START [${project.name}] repo=${repoRoot} status=${initialStatus.status}`);

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
      assertCleanWorkingTree(`ターン${runNumber}開始前`, repoRoot);
    }

    const beforeStatus = await readStatus(statusPath);
    if (doneStatuses.has(normalizeStatus(beforeStatus.status))) {
      await log(`PROJECT DONE [${project.name}] before turn ${runNumber}`);
      return;
    }

    const beforeFingerprint = statusFingerprint(beforeStatus);
    const beforeHead = runGit(["rev-parse", "HEAD"], repoRoot).trim();
    const prompt = runNumber === 1 ? buildInitialPrompt(project, repoRoot) : (project.nextPrompt ?? "次を進めて");

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

    if (!isWorkingTreeClean(repoRoot)) {
      await log(`PARENT COMMIT [${project.name}] #${runNumber}: Codex left uncommitted changes; committing from parent runner.`);
      runGit(["add", "-A"], repoRoot);
      runGit(["diff", "--cached", "--check"], repoRoot);
      runGit(["commit", "-m", `Batch: ${project.name} turn ${runNumber}`], repoRoot);
    }

    if (config.requireCleanWorkingTree !== false) {
      assertCleanWorkingTree(`ターン${runNumber}終了後。親ランナーのcommit後もdirtyです`, repoRoot);
    }

    const afterHead = runGit(["rev-parse", "HEAD"], repoRoot).trim();
    if (afterHead === beforeHead) {
      await log(`WARNING [${project.name}] #${runNumber}: Git HEAD did not change.`);
    }

    if (config.pushAfterTurn !== false && afterHead !== beforeHead) {
      await log(`git push [${project.name}] #${runNumber}`);
      pushProject(project, repoRoot);
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

async function prepareRepository(project, repoRoot) {
  if (!isGitRepository(repoRoot)) {
    if (!project.cloneUrl) {
      throw new Error(`Git repository not found for ${project.name}: ${repoRoot}`);
    }

    await mkdir(path.dirname(repoRoot), { recursive: true });
    const cloneArgs = ["clone"];
    if (project.branch) {
      cloneArgs.push("--branch", project.branch, "--single-branch");
    }
    cloneArgs.push(project.cloneUrl, repoRoot);
    await log(`git ${cloneArgs.join(" ")} [${project.name}]`);
    runCommand("git", cloneArgs, path.dirname(repoRoot));
  }

  verifyPrerequisites(repoRoot);

  if (!isWorkingTreeClean(repoRoot)) {
    if (project.recoverDirty === true) {
      await recoverDirtyRepository(project, repoRoot);
    } else if (config.requireCleanWorkingTree !== false) {
      assertCleanWorkingTree("起動前", repoRoot);
    }
  }

  const targetBranch = project.branch ?? runGit(["branch", "--show-current"], repoRoot).trim();
  if (targetBranch) {
    runGit(["fetch", "origin", targetBranch], repoRoot);
    const currentBranch = runGit(["branch", "--show-current"], repoRoot).trim();
    if (currentBranch !== targetBranch) {
      if (gitSucceeds(["show-ref", "--verify", `refs/heads/${targetBranch}`], repoRoot)) {
        runGit(["switch", targetBranch], repoRoot);
      } else {
        runGit(["switch", "-c", targetBranch, "--track", `origin/${targetBranch}`], repoRoot);
      }
    }
  }

  if (config.pullBeforeStart !== false) {
    await log(`git pull --ff-only [${project.name}]`);
    if (targetBranch) {
      runGit(["pull", "--ff-only", "origin", targetBranch], repoRoot);
    } else {
      runGit(["pull", "--ff-only"], repoRoot);
    }
  }

  if (config.requireCleanWorkingTree !== false) {
    assertCleanWorkingTree("git pull 後", repoRoot);
  }
}

async function recoverDirtyRepository(project, repoRoot) {
  const targetBranch = project.branch ?? runGit(["branch", "--show-current"], repoRoot).trim();
  if (!targetBranch) {
    throw new Error(`Cannot recover dirty repository without a target branch: ${repoRoot}`);
  }

  const stamp = recoveryStamp();
  const recoveryBranch = `recovery/auto-${slug(project.name)}-${stamp}`;
  await log(`RECOVERY [${project.name}]: preserving dirty tree as ${recoveryBranch}`);

  runGit(["switch", "-c", recoveryBranch], repoRoot);
  runGit(["add", "-A"], repoRoot);
  runGit(["diff", "--cached", "--check"], repoRoot);
  runGit(["commit", "-m", `WIP automatic recovery ${stamp}`], repoRoot);
  runGit(["push", "-u", "origin", recoveryBranch], repoRoot);
  runGit(["fetch", "origin", targetBranch], repoRoot);
  runGit(["switch", "--detach", `origin/${targetBranch}`], repoRoot);
  runGit(["branch", "-f", targetBranch, `origin/${targetBranch}`], repoRoot);
  runGit(["switch", targetBranch], repoRoot);
}

function buildInitialPrompt(project, repoRoot) {
  const files = [
    project.statusFile,
    project.handoffFile,
    ...(project.instructionFiles ?? []),
  ].filter(Boolean);
  const extraInstructions = project.extraInstructions ? `\n\n追加指示:\n${project.extraInstructions}` : "";

  return `
このリポジトリで「${project.name}」の継続バッチ処理を実行してください。
リポジトリ: ${repoRoot}
${project.branch ? `対象ブランチ: ${project.branch}` : ""}

最初に以下のファイルを読み、現在の状態、正本ルール、直前の引き継ぎを確認してください。
${files.map((file) => `- ${file}`).join("\n")}

STATUS と HANDOFF が示す現在の未完了作業だけを進めてください。
STATUS が HANDOFF より後の完了PR・commit・checkpointを明示している場合は、STATUS を新しい正本として扱い、古い HANDOFF の作業を繰り返さず、このターンで HANDOFF を最新化してください。
それ以外では、HANDOFF に「Exact next starting point」「次の開始地点」等がある場合はそこを正本として扱ってください。
STATUS に batch target / generation batch target など明示的な作業量がある場合は、その指定量をこのターンの単位として優先してください。勝手に別分野へ範囲を広げないでください。
作業本体、必要な調査、検証・テスト、実行計画、HANDOFF、STATUS の更新まで完了してください。
STATUS は必ず残し、作業継続中なら status=in_progress、プロジェクト全体が本当に完了した場合だけ status=done にしてください。
事実確認が必要な作業では、権威ある一次情報・公的資料を優先してください。

可能ならこのターンの変更をcommitしてください。ただし sandbox の制約で .git が読み取り専用なら、commitのために権限回避や破壊的操作を試みず、変更をそのまま残してください。親ランナーが安全にcommitしてpushします。
force push、reset --hard、既存の未関連変更の破棄、履歴改変は禁止です。
完了できない場合は成功したことにせず、状態を壊さずにブロッカーをSTATUS/HANDOFFへ記録してください。${extraInstructions}

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

function resolveProjectRepoRoot(project) {
  if (!project.repositoryPath) return defaultRepoRoot;
  return path.isAbsolute(project.repositoryPath)
    ? path.resolve(project.repositoryPath)
    : path.resolve(scriptDir, project.repositoryPath);
}

function verifyPrerequisites(repoRoot) {
  runGit(["rev-parse", "--is-inside-work-tree"], repoRoot);
  const topLevel = path.resolve(runGit(["rev-parse", "--show-toplevel"], repoRoot).trim());
  if (topLevel !== repoRoot) {
    throw new Error(`repositoryPath がGitルートを指していません。expected=${repoRoot} actual=${topLevel}`);
  }
}

function isGitRepository(repoRoot) {
  return existsSync(path.join(repoRoot, ".git"));
}

function isWorkingTreeClean(repoRoot) {
  return !runGit(["status", "--porcelain"], repoRoot).trim();
}

function assertCleanWorkingTree(stage, repoRoot) {
  const dirty = runGit(["status", "--porcelain"], repoRoot);
  if (dirty.trim()) {
    throw new Error(`${stage}: Git作業ツリーがdirtyです。既存変更を保護するため停止します。\n${dirty.trim()}`);
  }
}

function pushProject(project, repoRoot) {
  if (project.branch) {
    runGit(["push", "origin", `HEAD:${project.branch}`], repoRoot);
  } else {
    runGit(["push"], repoRoot);
  }
}

function gitSucceeds(args, repoRoot) {
  const result = spawnSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
    shell: false,
  });
  return !result.error && result.status === 0;
}

function runGit(args, repoRoot) {
  return runCommand("git", args, repoRoot);
}

function runCommand(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    shell: false,
  });

  if (result.error) {
    throw new Error(`${command} ${args.join(" ")} を起動できません: ${result.error.message}`);
  }

  if (result.status !== 0) {
    const stderr = (result.stderr ?? "").trim();
    const stdout = (result.stdout ?? "").trim();
    throw new Error(`${command} ${args.join(" ")} failed (${result.status})\n${stderr || stdout}`);
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

function slug(value) {
  return String(value ?? "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "project";
}

function recoveryStamp() {
  return new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
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
