//1
const ALPHABET_SIZE = 26;

function letterValue(letter: string) {
  return letter.charCodeAt(0) - 64;
}

function converSheetTitle(input: string) {
  let total = 0;
  for (const letter of input.toUpperCase()) {
    // shift the total one "digit" left in base 26, then append the letter's value
    total = total * ALPHABET_SIZE + letterValue(letter);
  }
  return total;
}

console.log(converSheetTitle("B"));
console.log(converSheetTitle("AB"));

//2
function findSingle(nums: number[]) {
  const kv = new Map<number, number>();
  nums.forEach((e, i) => {
    if (kv.has(e)) {
      const curr = kv.get(e) || 0;
      kv.set(e, curr + 1);
    } else {
      kv.set(e, 1);
    }
  });
  const candidate = Array.from(kv.entries()).find(([nums, count], index) => count === 1);
  if (!candidate) {
    throw new Error("No candidate found!");
  }
  return candidate[0];
}

console.log(findSingle([2, 2, 1]));
console.log(findSingle([4, 1, 2, 1, 2]));
console.log(findSingle([1]));

//3

function letterMetadata(input: string) {
  const nums = input.split("");
  const kv = new Map<string, number>();
  nums.forEach((e, i) => {
    if (kv.has(e)) {
      const curr = kv.get(e) || 0;
      kv.set(e, curr + 1);
    } else {
      kv.set(e, 1);
    }
  });
  return kv;
}

function anagramCheck(s: string, t: string) {
  const anchor = letterMetadata(s);
  const candidate = letterMetadata(t);
  if (anchor.size !== candidate.size) {
    return false;
  }

  for (const [letter, count] of anchor.entries()) {
    if (candidate.get(letter) !== count) return false;
  }
  return true;
}

console.log(anagramCheck("anagram", "nagaram"));
console.log(anagramCheck("rat", "car"));

//4

function climbStairs(n: number) {
  let prev = 1; // ways to reach step 0
  let curr = 1; // ways to reach step 1
  for (let step = 2; step <= n; step++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
console.log(climbStairs(3));
console.log(climbStairs(5));

//5
// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function findMajorityNums(nums: number[]) {
  const kv = new Map<number, number>();
  nums.forEach((e, i) => {
    if (kv.has(e)) {
      const curr = kv.get(e) || 0;
      kv.set(e, curr + 1);
    } else {
      kv.set(e, 1);
    }
  });
  const numsSize = nums.length;
  const majorReq = Math.round(numsSize / 2);
  const candidate = Array.from(kv.entries()).filter(
    ([nums, count], index) => count >= majorReq,
  );
  return Object.keys(Object.fromEntries(candidate)).join(', ')
}

console.log(findMajorityNums([3,2,3]))
console.log(findMajorityNums([2,2,1,1,1,2,2]))

//6
// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//7
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

// 8
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no
