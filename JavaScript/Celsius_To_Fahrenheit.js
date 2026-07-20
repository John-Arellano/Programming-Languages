function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(
    celsius +
      " degrees Celsius is equal to " +
      fahrenheit +
      " degrees Fahrenheit.",
  );
}

celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
celsiusToFahrenheit(37);
