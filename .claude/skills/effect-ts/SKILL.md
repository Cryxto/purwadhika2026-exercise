---
name: effect-ts
description: Use this skill whenever working in a repository that uses Effect, even if the current task is in a new file or the user does not explicitly ask for Effect help. Apply it to any work that should follow the repository's Effect patterns, conventions, architecture, or supporting tooling. Also use it for questions about Effect patterns, services, layers, schemas, streams, runtimes, or typed error handling.
---

# Effect Expert

Expert guidance for programming with the Effect library, covering error handling, dependency injection, composability, and testing patterns.

## Prerequisite

Before writing Effect code, read `node_modules/effect/AGENTS.md` and follow the links it gives into `node_modules/effect/ai-docs/`. If `node_modules/effect` is missing, run `pnpm install`.

The `effect` package ships its own source in `node_modules/effect/src`. Nothing else is vendored. Where a reference file lists a `./.repos/effect/packages/<name>/...` path, that is a path in the Effect monorepo: use `node_modules/@effect/<name>/src` if that package is installed, otherwise look at https://github.com/Effect-TS/effect at the tag matching the installed version (tests are only there).

## Research Strategy

Effect has many ways to accomplish the same task. Proactively research best practices when working with Effect patterns, especially for moderate to high complexity tasks.

Use the local guides in `./references/` first. They are the preferred source for best practices, conventions, and common implementation patterns.

Only go directly to the Effect source when:

- the guides do not cover the question
- you need exact API details or signatures
- you need deeper implementation details
- you need to verify a behavior against the source

### Research Sources

1. Local skill guides first. Start with the relevant files in `./references/` before doing deeper research.
2. Codebase patterns second. Examine similar patterns in the current project before implementing. If Effect patterns already exist, follow them for consistency. If no patterns exist, skip this step.
3. Effect source code last. For gaps in the guides, complex type errors, unclear behavior, or implementation details, examine the installed Effect source at `node_modules/effect/src/`.

### When To Research

- Always research for services, layers, or complex dependency injection.
- Always research for error handling with multiple error types or complex error hierarchies.
- Always research for stream-based operations and reactive patterns.
- Always research for resource management with scoped effects and cleanup.
- Always research for concurrent or performance-critical code.
- Always research for unfamiliar testing patterns.
- Research when needed for complex refactors from promises or try/catch into Effect.
- Research when needed for new service dependencies or layer restructuring.
- Research when needed for custom error types or extensions of existing error hierarchies.
- Research when needed for integrations with external systems such as databases, APIs, or third-party services.

### Research Approach

- Focus on canonical, readable, and maintainable solutions rather than clever optimizations.
- Verify suggested approaches against existing codebase patterns when those patterns exist.
- When multiple approaches are possible, prefer the most idiomatic Effect solution supported by the codebase and the Effect source.

### Codebase Pattern Discovery

When working in a project that uses Effect, check for existing patterns before implementing new code:

1. Search for Effect imports and existing module usage to understand current conventions.
2. Identify how services and layers are structured in the project.
3. Note how errors are defined and propagated.
4. Examine how Effect code is tested in the project.

If no Effect patterns exist in the codebase, proceed using canonical patterns from the Effect source and examples. Do not block on missing codebase patterns.

### Feature Discovery

When you need to discover available Effect modules, packages, or capabilities, search `./references/features.md` first.

- Use it to identify the right package or module for a task.
- Use the listed repo paths to jump directly into the source under `node_modules/effect/src`.
- Use it before inventing custom abstractions when Effect may already provide the functionality.

### Guide Discovery

When the task touches one of these areas, consult the matching guide before implementing:

- `./references/guide-effect.md` for core `Effect` usage patterns, common constructors, composition, provisioning, and runtime boundaries
- `./references/guide-error-handling.md` for defining errors, schema-based errors, failure handling, defects, and interrupts
- `./references/guide-layers.md` for services, layer construction, composition, and provisioning patterns
- `./references/guide-observability.md` for `Effect.fn`, spans, logging, metrics, and telemetry wiring
- `./references/guide-retries.md` for retry policies, retry conditions, fallback strategies, and `ExecutionPlan`
- `./references/guide-schedule.md` for retries, repeats, backoff, polling, cron, and schedule composition
- `./references/guide-schema.md` for schema design, transformations, unions, recursion, opaque/branded types, and schema best practices
- `./references/guide-sql.md` for Effect SQL usage, transactions, resolvers, schema-aware SQL, and migrations
- `./references/guide-testing.md` for detailed `@effect/vitest` usage, layered test setup, property tests, and test services

These guides should be treated as the default implementation guidance. Do not skip them and jump straight to the source unless you need source-level confirmation or the guides do not answer the question.

## Effect Principles

Apply these core principles when writing Effect code.

## Installation

When installing Effect packages:

- use pnpm
- keep `effect` and every `@effect/*` runtime package on the same exact version as the one in `package.json`
- install only the packages needed for the runtime and the task (`@effect/platform-node`, `@effect/platform-browser`, `@effect/vitest`, ...)
- `@effect/tsgo` has its own version line, and each release supports specific `typescript` versions

### Error Handling

- Use Effect's typed error system instead of throwing exceptions.
- Define descriptive error types with proper error propagation.
- Prefer a schema-defined tagged error when the error can be schema-defined: the constructor is `Schema.TaggedError` (`Schema.TaggedErrorClass` was the beta-era name and does not exist in stable Effect v4).
- Use `Effect.fail`, `Effect.catchTag`, and `Effect.catch` for error control flow.

### Dependency Injection

- Implement dependency injection using services and layers.
- Define services with `Context.Service`, not `Context.Tag` or `Effect.Service`.
- Compose layers with `Layer.merge` and `Layer.provide`.
- Use `Effect.provide` to inject dependencies at the edge, avoid providing locally.
- Keep services encapsulated; avoid exporting trivial accessor wrappers that only forward to one service method.

### Composability

- Leverage Effect composability for complex operations.
- Use appropriate constructors such as `Effect.succeed`, `Effect.fail`, `Effect.tryPromise`, `Effect.try`, and `Effect.sync`.
- Apply proper resource management with scoped effects.
- Chain operations with `Effect.flatMap`, `Effect.map`, and `Effect.tap`.

### Business Logic Functions

- Prefer `Effect.fn` for reusable business-logic functions that return `Effect`.
- Prefer `Effect.fn` over raw `Effect.gen` definitions even when the function takes no arguments.
- If you do not want an explicit named span, use `Effect.fn` without a span name.
- Do not use `Effect.fnUntraced` as the default.
- Use `Effect.fnUntraced` only for edge cases with a concrete low-level reason, such as measured hot-path overhead.

### TypeScript Preferences

- Never use `any`.
- Never use `as` casts.
- Never use unsafe type assertions or escape hatches.
- Never use `namespace`.
- Prefer correct typing, schema-driven decoding, narrowing, and proper generic constraints instead of forcing types.
- If a value comes from an external boundary, validate or decode it instead of asserting its type.
- If a type is hard to express, simplify the design or introduce a properly typed helper instead of using unsafe TypeScript.
- For layers, do not hide them inside `namespace` blocks. Prefer either `static` members on the service class or plain exported layer constants.

### Code Quality

- Write type-safe code that leverages Effect's type system.
- Use `Effect.gen` for readable sequential code.
- Implement proper testing patterns using Effect testing utilities.
- Prefer existing Effect primitives before introducing custom helpers.
- Prefer `Schema.Class` / `Schema.TaggedClass` variants over plain `Schema.Struct` for named reusable schemas when possible.
- Use `Option` / `Match` for branching on absence, tags and literals (exhaustive), and `Effect.fromOption` / `Effect.filterOrFail` to turn a check into a typed failure.

### Explaining Solutions

When providing solutions, explain the Effect concepts being used and why they fit the specific use case. If you encounter patterns not covered in local references, prefer consistency with the codebase when possible and otherwise rely on the Effect source.

## References

- `./references/features.md`
- `./references/guide-effect.md`
- `./references/guide-error-handling.md`
- `./references/guide-layers.md`
- `./references/guide-observability.md`
- `./references/guide-retries.md`
- `./references/guide-schedule.md`
- `./references/guide-schema.md`
- `./references/guide-sql.md`
- `./references/guide-testing.md`
