function traverseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

traverseArray([1, 2, 3]); // Output: 1, 2, 3
traverseArray(["a", "b", "c"]); // Output: 'a', 'b', 'c'
traverseArray([]); // Output: (no output)
