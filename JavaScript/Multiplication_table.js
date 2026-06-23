function generateMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);
  }
}
generateMultiplicationTable(2);
generateMultiplicationTable(3);
