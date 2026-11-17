//1

function letterValue(letter: string) {
  return letter.charCodeAt(0) - 64;
}

function converSheetTitle(input: string) {
  return input
    .toUpperCase()
    .split("")
    .reduce((result, letter) => result * 26 + letterValue(letter), 0);
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
