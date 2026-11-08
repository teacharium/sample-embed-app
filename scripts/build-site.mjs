#!/usr/bin/env node
// Build every sample as a static site under a shared prefix, so they can all be
// hosted together (the Teacharium docs site serves them at /samples/<name>/).
//
//   npm run build:site                      -> site/<name>/ with base /samples/<name>/
//   npm run build:site -- --prefix /demos   -> base /demos/<name>/
//   npm run build:site -- --out ../dist     -> write somewhere else
//
// Each sample is any folder in samples/ with a package.json and a vite build.

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 ? args[index + 1] : fallback;
};

const prefix = `/${option("prefix", "/samples").replace(/^\/+|\/+$/g, "")}`;
const outDir = resolve(root, option("out", "site"));

const samples = readdirSync(join(root, "samples"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(root, "samples", name, "package.json")));

rmSync(outDir, { recursive: true, force: true });

for (const name of samples) {
  const base = `${prefix}/${name}/`;
  const sampleOut = join(outDir, name);
  console.log(`\n▶ ${name} → ${sampleOut} (base ${base})`);
  execFileSync(
    "npx",
    ["vite", "build", "--outDir", sampleOut, "--emptyOutDir"],
    {
      cwd: join(root, "samples", name),
      stdio: "inherit",
      env: { ...process.env, BASE_PATH: base },
    },
  );
}

writeFileSync(
  join(outDir, "samples.json"),
  JSON.stringify({ prefix, samples }, null, 2) + "\n",
);
console.log(`\n✓ Built ${samples.length} sample(s) into ${outDir}`);
