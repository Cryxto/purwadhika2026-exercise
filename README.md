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

### 5-11-2026: Array and function exercises

[exercise_array_function.js](src/5-11-2026/exercise_array_function.js) is the original, and [exercise-array-n-cuntion.ts](src/5-11-2026/exercise-array-n-cuntion.ts) is its typed port. Both define a small `RichNumber` helper class (extends `Number`) used by the exercises, and contain these functions:

| Function | What it does | Example |
| --- | --- | --- |
| `trianglePattern(height)` | Prints a number triangle with zero-padded numbers | `trianglePattern(4)` prints `01` / `02 03` / `04 05 06` / `07 08 09 10` |
| `fizzBuzz(n)` | Prints 1 to `n`, replacing multiples of 3 with `Fizz`, of 5 with `Buzz` and of both with `FizzBuzz` | `fizzBuzz(6)` prints `1, 2, Fizz, 4, Buzz, Fizz` |
| `bmi(weight, height)` | Returns the BMI category: `less weight`, `ideal`, `overweight`, `very overweight` or `obesity` | `bmi(70, 1.7)` returns `ideal` |
| `oddNumberInArrayRemover(array)` | Returns a new array with only the even numbers | `[1,2,3,4,5,6]` returns `[2,4,6]` |
| `sentenceToWordsEasyWay(sentence)` | Splits a sentence into an array of words | `"Hello World"` returns `["Hello", "World"]` |

[scratchpad1.js](src/5-11-2026/scratchpad1.js) is a scratch file for trying out the triangle loop.

### 13-11-2026: OOP exercises

[oop-exercise.ts](src/13-11-2026/oop-exercise.ts) holds both exercises:

- **Exercise 1: students.** Seeds random students with [Faker](https://fakerjs.dev/) and computes the highest, lowest and average age and score.
- **Exercise 2: transaction.** A `Product` class and a `Transaction` class with `addToCart`, `total`, `showBill` and `checkout`. Duplicate products are merged case-insensitively, amounts are formatted as IDR, and `checkout` prints a receipt with `console.table` and returns the transaction data.

## Tooling

- TypeScript with `strict`, `noUncheckedIndexedAccess` and `nodenext` modules (see [tsconfig.json](tsconfig.json))
- [@faker-js/faker](https://fakerjs.dev/) for seed data
