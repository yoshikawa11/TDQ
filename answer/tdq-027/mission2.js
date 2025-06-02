async function createCapRamenPromise() {
  try {
    await new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("ラーメンはうまくできませんでした"));
      }, 3 * 1000);
    });
  } catch (err) {
    console.error(err);
  }
}

createCapRamenPromise();
