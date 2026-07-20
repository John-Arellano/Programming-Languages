function addElements(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

addElements([1, 2, 3]); // Output: 6
addElements([10, 20, 30]); // Output: 60
addElements([]); // Output: 0
