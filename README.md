# Purwadhika 2026 Exercise

Exercises and code challenges from the Purwadhika bootcamp, written in JavaScript and TypeScript.

## Requirements

- Node.js
- [pnpm](https://pnpm.io/) 10

## Setup

```sh
pnpm install
```

## Running an exercise

TypeScript files run directly with [tsx](https://tsx.is/), and JavaScript files run with Node:

```sh
pnpm exec tsx src/13-11-2026/oop-exercise.ts
node src/5-11-2026/exercise_array_function.js
```

Type-check the whole project with:

```sh
pnpm exec tsc --noEmit
```

## Project structure

| Folder | Contents |
| --- | --- |
| `src/code_challenge_1/` | Code challenge 1 (JS) with the challenge screenshots |
| `src/5-11-2026/` | Array and function exercises: triangle pattern, FizzBuzz, BMI, filtering even numbers, splitting a sentence (JS, plus a TS port) |
| `src/13-11-2026/` | Object-oriented programming exercises (TS) with the slide screenshots |

### 13-11-2026: OOP exercises

[oop-exercise.ts](src/13-11-2026/oop-exercise.ts) holds both exercises:

- **Exercise 1: students.** Seeds random students with [Faker](https://fakerjs.dev/) and computes the highest, lowest and average age and score.
- **Exercise 2: transaction.** A `Product` class and a `Transaction` class with `addToCart`, `total`, `showBill` and `checkout`. Duplicate products are merged case-insensitively, amounts are formatted as IDR, and `checkout` prints a receipt with `console.table` and returns the transaction data.

## Tooling

- TypeScript with `strict`, `noUncheckedIndexedAccess` and `nodenext` modules (see [tsconfig.json](tsconfig.json))
- [@faker-js/faker](https://fakerjs.dev/) for seed data
