function compareArrays(arr1, arr2) {
  let result = (arr1.length === arr2.length) && arr1.every((item, ind) => item === arr2[ind]);

  return result; // boolean
}

function advancedFilter(arr) {
  let result = arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10)

  return result; // array
}