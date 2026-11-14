function printArrayOfStrings(params: string[] = [""], separator = " "): void {
  console.log(params.join(separator));
}

function addZeroPadToNum(someNum: number): string {
  return String(someNum).padStart(2, "0");
}

function sanitizeInt(input: string | number): number {
  const parsed = Number.parseInt(String(input));
  const isGoodToGo = !Number.isNaN(parsed);
  if (!isGoodToGo) {
    throw new Error("Provided with not number");
  }
  return parsed;
}

function sanitizeFloat(input: string | number): number {
  const parsed = Number.parseFloat(String(input));
  const isGoodToGo = !Number.isNaN(parsed);
  if (!isGoodToGo) {
    throw new Error("Provided with not number");
  }
  return parsed;
}

class RichNumber extends Number {
  toAbsoluteFloor(): number {
    return Math.abs(Math.floor(this.valueOf()));
  }
  toAbsoluteRound(): number {
    return Math.abs(Math.round(this.valueOf()));
  }
  toAbsolute(): number {
    return Math.abs(this.valueOf());
  }
  remainderBy(numz: number): number {
    return this.valueOf() % numz;
  }
  substractBy(numz: number): number {
    return this.valueOf() / numz;
  }
  lessThan(numz: number): boolean {
    return this.valueOf() < numz;
  }
  lessThanOrEqual(numz: number): boolean {
    return this.valueOf() <= numz;
  }
  moreThan(numz: number): boolean {
    return this.valueOf() > numz;
  }
  moreThanOrEqual(numz: number): boolean {
    return this.valueOf() >= numz;
  }
  inRange(lower: number, higher: number): boolean {
    return this.lessThanOrEqual(higher) && this.moreThanOrEqual(lower);
  }
  isOdd(): boolean {
    return this.remainderBy(2) !== 0;
  }
  isEven(): boolean {
    return this.remainderBy(2) === 0;
  }
  static encodeInt(idk: string | number): RichNumber {
    return new RichNumber(sanitizeInt(idk));
  }
  static encodeFloat(idk: string | number): RichNumber {
    return new RichNumber(sanitizeFloat(idk));
  }
  static make(idk: number): RichNumber {
    return new RichNumber(idk);
  }
}

/**
 * Exercise 1
 * Create a function that can create a triangle pattern according to the height we provide like the following :
    01
    02  03
    04  05  06
    07  08  09  10

    Parameters : height → triangle height
 */
function trianglePattern(height = 4): void {
  const limits = Array.from({ length: height }, (_, i) => i + 1);
  let counter = 1;
  for (const limit of limits) {
    const words: number[] = [];
    for (let j = 0; j < limit; j++) {
      words.push(j + counter);
    }
    counter = counter + limit;
    printArrayOfStrings(words.map(addZeroPadToNum));
  }
}

trianglePattern();

/**
 * Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
 * Parameters : n → total looping
 * Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
 * Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
 */
function fizzBuzz(params: number): void {
  function decide(input: number): string | number {
    const checked = RichNumber.encodeFloat(input);
    if (checked.remainderBy(3) === 0 && checked.remainderBy(5) === 0) {
      return "FizzBuzz";
    } else if (checked.remainderBy(3) === 0) {
      return "Fizz";
    } else if (checked.remainderBy(5) === 0) {
      return "Buzz";
    } else {
      return checked.toAbsolute();
    }
  }
  const results: string[] = [];
  for (let i = 1; i <= params; i++) {
    results.push(decide(i).toString());
  }
  return printArrayOfStrings(results, ", ");
}

fizzBuzz(6);
fizzBuzz(15);

type BmiCategory =
  | "less weight"
  | "ideal"
  | "overweight"
  | "very overweight"
  | "obesity";

/**
 * Create a function to calculate Body Mass Index (BMI)
  Formula : BMI = weight (kg) / (height (meter))²
  Parameters : weight & height
  Return values :
  *< 18.5 return “less weight”
  *18.5 - 24.9 return “ideal”
  *25.0 - 29.9 return “overweight”
  *30.0 - 39.9 return “very overweight”
  *> 39.9 return “obesity”
 */

function bmi(weight: number, height: number): BmiCategory {
  const calculated = RichNumber.encodeFloat(weight / Math.pow(height, 2));
  if (calculated.lessThan(18.5)) return "less weight";
  if (calculated.lessThan(25)) return "ideal";
  if (calculated.lessThan(30)) return "overweight";
  if (calculated.lessThan(40)) return "very overweight";
  return "obesity";
}
console.log("\n");

console.log(bmi(70, 1.7));

console.log(bmi(90, 1.79));

/**
 * Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
 */

function oddNumberInArrayRemover(array: number[] = []): number[] {
  return array
    .map((n) => RichNumber.encodeInt(n))
    .filter((numz) => numz.isEven())
    .map((n) => n.toAbsolute());
}

console.log("\n");
console.log(oddNumberInArrayRemover([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”]
 */

function sentenceToWordsEasyWay(sentence = ""): string[] {
  return sentence.split(" ");
}

console.log("\n");
console.log(sentenceToWordsEasyWay("Hello World Yeah"));
