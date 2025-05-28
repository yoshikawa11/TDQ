function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const nums = [1, 10, 100];

console.log(sum(...nums)); // Output: 111
