function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    console.log("The array is empty.");
  }
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  console.log(largest);
}

findLargestNumber([1, 2, 3]); // Output: 3
findLargestNumber([-10, -5, -1]); // Output: -1
findLargestNumber([5]); // Output: 5
findLargestNumber([]); // Output: "The array is empty."
