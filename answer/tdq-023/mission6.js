function randomDelay(callback) {
  const delay = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    console.log(`Delay: ${delay}ms`);
    callback();
  }, delay);
}

randomDelay(() => {
  console.log("1");
  randomDelay(() => {
    console.log("2");
    randomDelay(() => {
      console.log("3");
    });
  });
});
