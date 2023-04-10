// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers1(numbers) {
  const firstNumber = Math.min(...numbers);
  const index = numbers.indexOf(firstNumber);
  numbers.splice(index, 1);
  const secondNumber = Math.min(...numbers);
  return firstNumber + secondNumber;
}

function sumTwoSmallestNumbers2(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers1([5, 8, 12, 19, 22]); //the result should be 13
sumTwoSmallestNumbers2([5, 8, 12, 19, 22]); //the result should be 13
