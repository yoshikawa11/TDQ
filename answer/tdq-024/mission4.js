// FIXME: 引数をなしにする
function randomDelay() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), Math.random() * 3000);
  });
}

randomDelay().then(() => {
  console.log("1");
  return randomDelay();
}).then(() => {
  console.log("2");
  return randomDelay();
}).then(() => {
  console.log("3");
  return randomDelay();
});
