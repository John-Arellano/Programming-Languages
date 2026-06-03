function greaterOfThree(Num_1, Num_2, Num_3) {
  let A = Num_1;
  let B = Num_2;
  let C = Num_3;

  if (A > B && A > C) {
    console.log("A is the greatest number");
  } else if (B > A && B > C) {
    console.log("B is the greatest number");
  } else {
    console.log("C is the greatest number");
  }
}

greaterOfThree(5, 10, 15);
greaterOfThree(20, 30, 10);
greaterOfThree(10, 8, 9);
