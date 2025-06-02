function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.time("log");
  console.timeLog("log", "開始");

  await delay(1000);
  console.timeLog("log", "並列処理開始");

  await Promise.all([delay(500), delay(1500)]);
  console.timeLog("log", "並列処理終了");

  await delay(1000);
  console.timeLog("log", "終了");
}

run();
