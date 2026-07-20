function checkUserCredentials(username, password) {
  if (username === "admin" && password === "password123") {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password.");
  }
}

checkUserCredentials("admin", "password123"); // Output: Login successful!
checkUserCredentials("user", "password"); // Output: Invalid username or password.
