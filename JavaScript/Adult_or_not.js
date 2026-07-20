function isAdult(num) {
  let age = num;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are not an adult.");
  }
}

isAdult(20); // Output: You are an adult.
isAdult(15); // Output: You are not an adult.
isAdult(18); // Output: You are an adult.
