function findNegative(numbers) {
  return numbers.find((num) => num < 0);
}

function main() {
  const nuumbers = [1, -2, 3, -4, 5];
  const result = findNegative(nuumbers);
  console.log(result); // output: -2
}

main();
