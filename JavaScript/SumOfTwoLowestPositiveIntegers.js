function sumTwoSmallestNumbers(numbers) {
  const firstNumber = Math.min(...numbers);
  const index = numbers.indexOf(firstNumber);
  numbers.splice(index, 1);
  const secondNumber = Math.min(...numbers);
  return firstNumber + secondNumber;
}

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
