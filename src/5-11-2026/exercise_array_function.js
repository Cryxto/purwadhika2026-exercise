function printArrayOfStrings(params = [""], separator = " ") {
  console.log(params.join(separator));
}

function addZeroPadToNum(someNum) {
  return String(someNum).padStart(2, "0");
}

function sanitizeInt(input) {
  const parsed = Number.parseInt(input);
  const isGoodToGo = !Number.isNaN(parsed);
  if (!isGoodToGo) {
    throw new Error("Provided with not number");
  }
  return parsed;
}

function sanitizeFloat(input) {
  const parsed = Number.parseFloat(input);
  const isGoodToGo = !Number.isNaN(parsed);
  if (!isGoodToGo) {
    throw new Error("Provided with not number");
  }
  return parsed;
}

class RichNumber extends Number {
  toAbsoluteFloor() {
    return Math.abs(Math.floor(this.valueOf()));
  }
  toAbsoluteRound() {
    return Math.abs(Math.round(this.valueOf()));
  }
  toAbsolute() {
    return Math.abs(this.valueOf());
  }
  remainderBy(numz) {
    return this.valueOf() % numz;
  }
  substractBy(numz) {
    return this.valueOf() / numz;
  }
  lessThan(numz) {
    return this.valueOf() < numz;
  }
  lessThanOrEqual(numz) {
    return this.valueOf() <= numz;
  }
  moreThan(numz) {
    return this.valueOf() > numz;
  }
  moreThanOrEqual(numz) {
    return this.valueOf() >= numz;
  }
  inRange(lower, higher) {
    return this.lessThanOrEqual(higher) && this.moreThanOrEqual(lower);
  }
  isOdd(numz) {
    return this.remainderBy(2) !== 0;
  }
  isEven(numz) {
    return this.remainderBy(2) === 0;
  }
  static encodeInt(idk) {
    return new RichNumber(sanitizeInt(idk));
  }
  static encodeFloat(idk) {
    return new RichNumber(sanitizeFloat(idk));
  }
  static make(idk) {
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
function trianglePattern(height = 4) {
  let limits = Array.from({ length: height }, (_, i) => i + 1);
  let counter = 1;
  for (let i = 0; i <= limits.length; i++) {
    let limit = limits[i];
    let words = [];
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
function fizzBuzz(params) {
  function decide(input) {
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
  const results = [];
  for (let i = 1; i <= params; i++) {
    results.push(decide(i).toString());
  }
  return printArrayOfStrings(results, ", ");
}

fizzBuzz(6);
fizzBuzz(15);

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

function bmi(weight, height) {
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

function oddNumberInArrayRemover(array = []) {
  return array.map(RichNumber.encodeInt).filter((numz) => numz.isEven()).map((n)=>n.toAbsolute());
}

console.log('\n')
console.log(oddNumberInArrayRemover([1,2,3,4,5,6,7,8,9,10]))

/**
 * Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”]
 */

function sentenceToWordsEasyWay(sentence = '') {
  return sentence.split(' ')
}

console.log('\n')
console.log(sentenceToWordsEasyWay('Hello World Yeah'))