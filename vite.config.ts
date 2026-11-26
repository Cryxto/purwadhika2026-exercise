import { globSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = resolve(import.meta.dirname, "src");

export default defineConfig({
  root,
  // Multi-page app: every folder under `src/` with an `index.html` is a page.
  appType: "mpa",
  server: {
    port: 5173,
    // `/api` goes to the backend dev server, so the page needs no CORS setup.
    proxy: { "/api": "http://127.0.0.1:3000" },
  },
  build: {
    outDir: resolve(import.meta.dirname, "dist/web"),
    emptyOutDir: true,
    rolldownOptions: {
      input: globSync("**/index.html", { cwd: root }).map((file) => resolve(root, file)),
    },
  },
});
