function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log(count);
}

// Example usage:
countVowels("Hello World!"); // Output: 3
countVowels("JavaScript is awesome!"); // Output: 8
