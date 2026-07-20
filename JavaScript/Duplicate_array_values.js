function duplicateArrayValues(arr) {
  let dobleValues = [];
  for (let i = 0; i < arr.length; i++) {
    dobleValues.push(arr[i] * 2);
  }
  console.log(dobleValues);
}

duplicateArrayValues([1, 2, 3, 4, 5]); // Output: [2, 4, 6, 8, 10]
duplicateArrayValues([10, 20, 30]); // Output: [20, 40, 60]
