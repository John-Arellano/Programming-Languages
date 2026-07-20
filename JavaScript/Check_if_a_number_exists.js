function checkIfNumberExists(arr, num) {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result = true;
    }
  }
  console.log(result);
}

checkIfNumberExists([1, 2, 3, 4, 5], 3); // Output: true
checkIfNumberExists([10, 20, 30], 25); // Output: false
