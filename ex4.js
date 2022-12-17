// ex 4. Insert a n positive number. Print the n-st prime number.

function getPrimeNumber (n) {
  let primeNumber = 2;

  if (n > 1) {
    for (let i = 1; i < n; i++) {
      primeNumber += 1;

      for (let j = 2; j < primeNumber; j++) {
        if (primeNumber % j === 0) {
          i -= 1;
          break;
        }
      }
    }
  }
  
  return primeNumber;
} 

const result = getPrimeNumber(25);

console.log(result);
