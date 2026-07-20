function calculateFactorial(n) {
  if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }

  if (n === 0 || n === 1) {
    console.log(`Factorial of ${n} is 1`);
    return;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  console.log(`Factorial of ${n} is ${factorial}`);
}

calculateFactorial(5); // Output: Factorial of 5 is 120
calculateFactorial(0); // Output: Factorial of 0 is 1
calculateFactorial(-3); // Output: Factorial is not defined for negative numbers.
