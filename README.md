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
| `src/17-11-2026/` | Algorithm and data structure exercises (TS) with the slide screenshots |
| `src/19-11-2026/` | TypeScript and Promise exercises (TS) with the slide screenshots |

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

### 17-11-2026: Algorithm and data structure exercises

[algo-n-ds.ts](src/17-11-2026/algo-n-ds.ts) holds eight exercises. Each has a `console.log` with the slide's examples at the bottom:

| # | Function | What it does | Example |
| --- | --- | --- | --- |
| 1 | `converSheetTitle(input)` | Converts an Excel column title to its column number (base 26 with letters as digits) | `"AB"` returns `28` |
| 2 | `findSingle(nums)` | Finds the number that appears only once | `[4,1,2,1,2]` returns `4` |
| 3 | `anagramCheck(s, t)` | Checks whether two strings are anagrams by comparing letter counts | `"anagram"`, `"nagaram"` returns `true` |
| 4 | `climbStairs(n)` | Counts the distinct ways to climb `n` steps taking 1 or 2 at a time (a Fibonacci loop, no recursion) | `5` returns `8` |
| 5 | `findMajorityNums(nums)` | Finds the element that appears at least half the time | `[2,2,1,1,1,2,2]` returns `2` |
| 6 | `convertRomanNumber(roman)` | Converts a Roman numeral to an integer, handling subtractive pairs like `IV` and `CM` | `"MCMXCIV"` returns `1994` |
| 7 | `pascalTriangle(n)` | Returns the first `n` rows of Pascal's triangle | `5` returns `[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]` |
| 8 | `findProfit(prices)` | Finds the best single buy-then-sell profit in one pass with a running minimum | `[7,1,5,3,6,4]` returns `5` |

### 19-11-2026: TypeScript and Promise exercises

[ts-n-promise.ts](src/19-11-2026/ts-n-promise.ts) holds three exercises so far:

| # | Function | What it does | Example |
| --- | --- | --- | --- |
| 1 | `mergeStudentsArray(...students)` | Merges arrays of students (`name`, `email`) and removes duplicates by name | Two overlapping lists give 3 unique students |
| 2 | `swapKV(arrayOfRecords)` | Swaps every property and value in each object | `[{ name: "David", age: 20 }]` returns `[{ David: "name", 20: "age" }]` |
| 3 | `factorial(n)` | Calculates a factorial with recursion | `5` returns `120` |

## Tooling

- TypeScript with `strict`, `noUncheckedIndexedAccess` and `nodenext` modules (see [tsconfig.json](tsconfig.json))
- [@faker-js/faker](https://fakerjs.dev/) for seed data
