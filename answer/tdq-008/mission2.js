const getLargerNumber = (number1, number2) =>
  number1 > number2 ? number1 : number2;

function main() {
  console.log(getLargerNumber(10, 20)); // Output: 20
  console.log(getLargerNumber(30, 15)); // Output: 30
  console.log(getLargerNumber(5, 5)); // Output: 5
  console.log(getLargerNumber(-10, -20)); // Output: -10
}

main();
