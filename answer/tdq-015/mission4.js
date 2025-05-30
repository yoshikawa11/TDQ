function filterNegative(numbers) {
  return numbers.filter((num) => num < 0);
}

function main() {
  const nuumbers = [1, -2, 3, -4, 5];
  const result = filterNegative(nuumbers);
  console.log(result); // output: [-2, -4]
}

main();
