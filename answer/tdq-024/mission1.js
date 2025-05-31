const promise = new Promise((resolve) => {
  setTimeout(() => resolve("3秒経った"), 3 * 1000);
});

console.log("Before");

promise.then((result) => console.log(result));

console.log("After");
