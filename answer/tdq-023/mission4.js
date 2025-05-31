function randomDelay(callback) {
  const delay = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    console.log(`Delay: ${delay}ms`);
    callback();
  }, delay);
}

randomDelay(() => console.log("Random delay completed"));
randomDelay(() =>
  randomDelay(() => console.log("Nested random delay completed"))
);
