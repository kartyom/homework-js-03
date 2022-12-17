// ex 1. Given an array of integers, find the pair of adjacent elements that has the largest product and
//return that product.

const array = [-2, 3, -7];

function getThePairOfLargestElements (arr) {
  let largestProduct = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];

    if (largestProduct < product)
      largestProduct = product;
  }
  return largestProduct;
}

const result = getThePairOfLargestElements(array);

console.log(result);
