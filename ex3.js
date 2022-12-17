// ex 3. Implement built in array sort method using bubble sort algorithm.

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function sort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num
      }
    }
  }

  return arr;
}

const result = sort(array);

console.log(result);
