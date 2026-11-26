# Purwadhika 2026 Exercise

Bootcamp exercises in one pnpm package: Node scripts, browser pages (Vite), backend code (tsdown), Effect v4.

## Layout

- `src/<date>/`, `src/code_challenge_*/`: standalone exercises. Leave them untouched unless asked.
- `src/<folder>/index.html`: any folder with an `index.html` is a Vite page (vanilla TS/JS; React is not installed yet).
- `src/<folder>/server.ts`: any file named `server.ts` is a tsdown entry.
- `src/demo/`: working example (`shared.ts` Schema, `web/` page, `api/` server).
- `src/index.html`: list of web pages.

## Commands

```sh
pnpm dev          # Vite on :5173, proxies /api to :3000
pnpm dev:api      # demo API on :3000 with reload
pnpm build        # dist/web (Vite) and dist/server (tsdown)
pnpm start:api    # run the built demo API
pnpm typecheck    # tsc (TypeScript 7) with Effect diagnostics
pnpm exec tsx <file.ts>
```

There is no linter, formatter or test runner. Do not add oxlint.

## Effect

- Before writing Effect code, read `node_modules/effect/AGENTS.md`; the source is in `node_modules/effect/src`. Skill: `.claude/skills/effect-ts`.
- Keep `effect` and `@effect/platform-node` on the same exact version.
- Import `@effect/platform-node` by subpath (`@effect/platform-node/NodeRuntime`). The root barrel also loads the Redis module.
- `typescript` and `@effect/tsgo` are pinned together: check that tsgo supports the TypeScript version before bumping either.
- `prepare` runs `effect-tsgo patch`. If Effect diagnostics disappear, run `pnpm install` again.

## Agents

When the session runs under herdr (`HC_TERMINAL_ID` is set), `hc` can be used to spawn agents and run long jobs or servers. Run `hc --skill` for the manual (skill: `.claude/skills/herdr-core`).

`hc run` may not have nvm's `node` and `pnpm` on `PATH`. Pass a shell string that adds them: `hc run --bg --name web "export PATH=$(dirname "$(command -v node)"):\$PATH; exec pnpm dev"`.
