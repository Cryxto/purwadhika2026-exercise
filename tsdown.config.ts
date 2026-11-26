import { globSync } from "node:fs";
import { relative } from "node:path";
import { defineConfig } from "tsdown";

// Every `server.ts` under `src/` is built, keeping its folder:
// `src/demo/api/server.ts` -> `dist/server/demo/api/server.mjs`
const entry = Object.fromEntries(
  globSync("src/**/server.ts").map((file) => [relative("src", file).replace(/\.ts$/, ""), file]),
);

export default defineConfig({
  entry,
  format: "esm",
  platform: "node",
  target: "node24",
  outDir: "dist/server",
  clean: true,
});
