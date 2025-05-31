console.log("A");
setTimeout(() => {
  console.log("B");
}, 2 * 1000);
console.log("C");

// Output:
// A
// C
// B
