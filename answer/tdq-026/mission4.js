function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.time("log");
console.timeLog("log", "開始");

delay(1000)
  .then(() => {
    console.timeLog("log", "1秒経過");

    // 並行処理開始
    console.timeLog("log", "並行処理開始");
    return Promise.all([
      delay(500),
      delay(1500),
    ]);
  })
  .then(() => {
    // 並行処理完了（最大1500ms経過）
    console.timeLog("log", "並行処理完了");

    // さらに1秒待つ
    return delay(1000);
  })
  .then(() => {
    console.timeLog("log", "終了");
  });
