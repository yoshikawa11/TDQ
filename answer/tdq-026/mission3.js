function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1000) {
      reject(new Error("Delay time must be at least 1000ms"));
    } else {
      setTimeout(resolve, ms);
    }
  });
}

delay(500)
  .then(() => {
    console.log("0.5秒経過");
    return delay(1000);
  })
  .catch((error) => {
    console.error("エラー:", error.message);
  })
  .then(() => {
    console.log("1.5秒経過");
    return delay(1500);
  })
  .catch((error) => {
    console.error("エラー:", error.message);
  })
  .then(() => {
    console.log("3秒経過");
  })
  .catch((error) => {
    console.error("エラー:", error.message);
  });

console.log("まずはここが実行される");
