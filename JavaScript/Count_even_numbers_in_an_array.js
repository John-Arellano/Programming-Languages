function countEvenNumbers(numbers) {
  let sum = 0;
  let cont = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
      cont++;
    }
  }
  console.log("The sum of even numbers is: " + sum);
  console.log("The count of even numbers is: " + cont);
}

countEvenNumbers([1, 2, 3, 4, 5]); // Output: The sum of even numbers is: 6, The count of even numbers is: 2
countEvenNumbers([10, 15, 20, 25]); // Output: The sum of even numbers is: 30, The count of even numbers is: 2
countEvenNumbers([1, 3, 5]); // Output: The sum of even numbers is: 0, The count of even numbers is: 0
countEvenNumbers([]); // Output: The sum of even numbers is: 0, The count of even numbers is: 0
