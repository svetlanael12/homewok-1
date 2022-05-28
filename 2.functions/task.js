// Задание 1
function getArrayParams(arr) {
  let min = max = arr[0];
  let sum = 0;
  let count = 0;
  let avg;

  while (count < arr.length) {
    if (min > arr[count]) {
      min = arr[count];
    }

    if (max < arr[count]) {
      max = arr[count];
    }

    sum += arr[count];
    count += 1;
  }

  avg = Number((sum / count).toFixed(2))

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return Math.abs(max - min);
}
