
function combineArray(arr1 = [], arr2=[]) {
  return [...arr1,...arr2]}

function combineArray2(arr1 = [], arr2=[]) {
  arr1.push(arr2)
  return arr1.flat()
}

console.log(combineArray([1,2,3],[4,5,6]))
console.log(combineArray2([1,2,3],[4,5,6]))

