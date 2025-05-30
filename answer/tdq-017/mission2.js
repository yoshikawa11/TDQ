const box = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatBox = box.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatBox); // output -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
