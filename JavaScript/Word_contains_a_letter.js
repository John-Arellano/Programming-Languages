function wordContainsLetter(word, letter) {
  let containsLetter = word.includes(letter);
  if (containsLetter) {
    console.log(`The word "${word}" contains the letter "${letter}".`);
  } else {
    console.log(`The word "${word}" does not contain the letter "${letter}".`);
  }
}

wordContainsLetter("programacion", "a");
wordContainsLetter("javascript", "z");
wordContainsLetter("hello", "o");
