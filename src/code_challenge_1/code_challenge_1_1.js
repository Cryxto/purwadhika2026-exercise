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
 * 1.
 */

function lowestHighestAndAvg(numbers = []) {
  const sorted = numbers.sort((a, b) => a - b);
  // console.log(sorted)
  const highest = sorted[sorted.length - 1];

  const lowest = sorted[0];
  const total = sorted.reduce((prev, curr) => prev + curr, 0);

  const avg = total / sorted.length;

  console.log({ lowest, highest, avg });
}

function lowestHighestAndAvgWithoutSort(numbers = []) {
  let lowest = numbers[0];
  let highest = numbers[numbers.length - 1];
  for (const num of numbers) {
    if (num <= lowest) {
      lowest = num;
    } else if (num >= highest) {
      highest = num;
    }
  }
  const total = numbers.reduce((prev, curr) => prev + curr, 0);

  const avg = total / numbers.length;
  console.log({ lowest, highest, avg });

}
lowestHighestAndAvg([12, 5, 23, 18, 4, 45, 32]);
lowestHighestAndAvgWithoutSort([12, 5, 23, 18, 4, 45, 32])

/**
 * 2
 */

function concatWords(words = ['']) {
  const edited = words.map((word,i)=>{
    if (i!==words.length-1) {
      return word
    }
    return ` and ${word}`
  })
  const result = edited.join(',')
  return console.log(result)
}

concatWords(["apple","banana","cherry","date"])

/**
 * 3. 
 */

function secondSmallest(numbers = []) {
  const sorted = numbers.sort((a, b) => a - b);
  // console.log(sorted)

  const lowest = sorted[1];

  console.log(lowest)
  return lowest
}

secondSmallest([5,3,1,7,2,6])

/**
 * 4.
 */

function sumFromSamePairOfArrays(arr1=[],arr2=[]) {
  const result = arr1.map((num,i)=>num+arr2[i])
  console.log(result)
  return result
}

sumFromSamePairOfArrays([1,2,3],[3,2,1])

/**
 * 5.
 */

function addElement(array = [], addition ) {
  const resultWithSetMethod = Array.from(new Set([...array,addition]))

  console.log({resultWithSetMethod})

  const isThere = array.find((val)=>val === addition)

  isThere ?  void 0 : array.push(addition)

  const resultWithNonSet = array

  console.log({resultWithNonSet})

  return {
    resultWithNonSet,resultWithSetMethod
  }
}

addElement([1,2,3,4],4)
addElement([1,2,3,4],7)