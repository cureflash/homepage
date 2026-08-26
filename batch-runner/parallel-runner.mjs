import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, symlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const config = await readJson(path.join(scriptDir, "config.json"));
const projectConfig = await readJson(path.join(scriptDir, "projects.json"));
const defaultRepoRoot = path.resolve(scriptDir, config.repositoryPath ?? "..");
const completionFile = path.resolve(defaultRepoRoot, "..", ".homepage-batch-all-done.json");
const enabledProjects = (projectConfig.projects ?? []).filter((project) => project.enabled !== false);

if (enabledProjects.length === 0) {
  throw new Error("projects.json に enabled なプロジェクトがありません。");
}

const lanes = groupByLane(enabledProjects);
const runId = `${stamp()}-${process.pid}`;
const runRoot = path.join(scriptDir, "logs", "parallel-runtime", runId);
await mkdir(runRoot, { recursive: true });

console.log(`[parallel] lanes=${[...lanes.keys()].join(" | ")}`);
for (const [lane, projects] of lanes) {
  console.log(`[parallel] ${lane}: ${projects.map((project) => project.name).join(" -> ")}`);
}

const laneResults = await Promise.all(
  [...lanes.entries()].map(([lane, projects]) => runLane(lane, projects)),
);

const failedLanes = laneResults.filter((result) => result.code !== 0);
const allDone = await allProjectsDone(enabledProjects);

if (allDone && failedLanes.length === 0) {
  const completion = {
    completedAt: new Date().toISOString(),
    lanes: Object.fromEntries([...lanes.entries()].map(([lane, projects]) => [lane, projects.map((project) => project.name)])),
    projects: enabledProjects.map((project) => project.name),
  };
  await writeFile(completionFile, `${JSON.stringify(completion, null, 2)}\n`, "utf8");
  console.log(`[parallel] all projects done; completion marker=${completionFile}`);

  const result = spawnSync("sudo", ["-n", "systemctl", "disable", "--now", "homepage-batch.timer"], {
    cwd: defaultRepoRoot,
    encoding: "utf8",
    shell: false,
  });
  if (result.error || result.status !== 0) {
    console.warn(`[parallel] autostop warning: ${(result.stderr || result.stdout || result.error?.message || "unknown error").trim()}`);
  } else {
    console.log("[parallel] homepage-batch.timer disabled because all enabled projects are complete.");
  }
}

if (failedLanes.length > 0) {
  console.error(`[parallel] failed lanes: ${failedLanes.map((result) => `${result.lane}(${result.code})`).join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("[parallel] all lanes finished normally.");
}

async function runLane(lane, projects) {
  const laneDir = path.join(runRoot, safeName(lane));
  await mkdir(laneDir, { recursive: true });

  const runnerSource = await readFile(path.join(scriptDir, "runner.mjs"), "utf8");
  const autostopNeedle = "if (allDone && !hadFailure) {";
  if (!runnerSource.includes(autostopNeedle)) {
    throw new Error(`runner.mjs autostop seam not found for lane ${lane}`);
  }
  const childRunner = runnerSource.replace(autostopNeedle, "if (false && allDone && !hadFailure) {");

  const childConfig = {
    ...config,
    repositoryPath: defaultRepoRoot,
  };
  const childProjects = {
    projects: projects.map((project) => ({
      ...project,
      repositoryPath: absoluteProjectRepoPath(project),
    })),
  };

  await writeFile(path.join(laneDir, "runner.mjs"), childRunner, "utf8");
  await writeFile(path.join(laneDir, "config.json"), `${JSON.stringify(childConfig, null, 2)}\n`, "utf8");
  await writeFile(path.join(laneDir, "projects.json"), `${JSON.stringify(childProjects, null, 2)}\n`, "utf8");

  const sourceNodeModules = path.join(scriptDir, "node_modules");
  const laneNodeModules = path.join(laneDir, "node_modules");
  if (!existsSync(sourceNodeModules)) {
    throw new Error(`node_modules not found: ${sourceNodeModules}`);
  }
  if (!existsSync(laneNodeModules)) {
    await symlink(sourceNodeModules, laneNodeModules, "dir");
  }

  console.log(`[parallel] LANE START [${lane}]`);
  const code = await spawnLaneProcess(laneDir, lane);
  console.log(`[parallel] LANE END [${lane}] code=${code}`);
  return { lane, code };
}

function spawnLaneProcess(laneDir, lane) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ["runner.mjs"], {
      cwd: laneDir,
      env: {
        ...process.env,
        HOMEPAGE_BATCH_LANE: lane,
      },
      stdio: "inherit",
      shell: false,
    });

    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (signal) {
        console.error(`[parallel] lane ${lane} terminated by signal ${signal}`);
        resolve(1);
        return;
      }
      resolve(code ?? 1);
    });
  });
}

function absoluteProjectRepoPath(project) {
  if (!project.repositoryPath) return defaultRepoRoot;
  return path.isAbsolute(project.repositoryPath)
    ? path.resolve(project.repositoryPath)
    : path.resolve(scriptDir, project.repositoryPath);
}

async function allProjectsDone(projects) {
  for (const project of projects) {
    const repoRoot = absoluteProjectRepoPath(project);
    if (!existsSync(repoRoot)) return false;

    const statusPath = path.resolve(repoRoot, project.statusFile);
    if (!existsSync(statusPath)) return false;

    let status;
    try {
      status = await readJson(statusPath);
    } catch {
      return false;
    }

    const doneStatuses = new Set((project.doneStatuses ?? ["done", "completed", "complete"]).map(normalizeStatus));
    if (!doneStatuses.has(normalizeStatus(status?.status))) return false;
  }
  return true;
}

function groupByLane(projects) {
  const lanes = new Map();
  for (const project of projects) {
    const lane = String(project.lane ?? "default");
    if (!lanes.has(lane)) lanes.set(lane, []);
    lanes.get(lane).push(project);
  }
  return lanes;
}

async function readJson(filePath) {
  const text = await readFile(filePath, "utf8");
  return JSON.parse(text);
}

function normalizeStatus(value) {
  return String(value ?? "").trim().toLowerCase();
}

function safeName(value) {
  return String(value ?? "lane")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "lane";
}

function stamp() {
  return new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
}
