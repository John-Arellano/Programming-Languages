function filterNumbersGreaterThan10(numbers) {
  let count = 0;
  let mayores = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      mayores.push(numbers[i]);
    }
  }
  console.log("Count of numbers greater than 10:", mayores);
}

// Example usage:
filterNumbersGreaterThan10([5, 12, 8, 20, 3, 15]); // Output: Count of numbers greater than 10: [12, 20, 15]
filterNumbersGreaterThan10([1, 2, 3, 4, 5]); // Output: Count of numbers greater than 10: []
