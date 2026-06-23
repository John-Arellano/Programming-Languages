function palindrome(palabra) {
  let invertida = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida = invertida + palabra[i];
  }

  if (palabra === invertida) {
    console.log("Es palíndromo");
  } else {
    console.log("No es palíndromo");
  }
}

palindrome("oso");
