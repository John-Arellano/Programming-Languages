function reverseaword(word) {
  let reserve = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reserve = reserve + word[i];
  }
  console.log(reserve);
}

reverseaword("hola");
reverseaword("palabra");
