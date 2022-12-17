// ex 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.

const array = [1, 4, 9];

function getTheCountOfMissingNumbers (arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max - min - 1;
}

const result = getTheCountOfMissingNumbers(array);

console.log(result);
