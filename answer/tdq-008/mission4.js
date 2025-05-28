function max(...args) {
  const [a = 0, b = 0] = args;
  return a > b ? a : b;
}

function main() {
  console.log(max()); // Output: 0
  console.log(max(1)); // Output: 1
  console.log(max(1, 2)); // Output: 2
  console.log(max(1, 2, 3)); // Output: 2
}

main();
