function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1000) {
      reject(new Error("Delay time must be at least 1000ms"));
    } else {
      setTimeout(resolve, ms);
    }
  });
}
delay(2000);
delay(500);
