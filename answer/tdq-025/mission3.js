function createCapRamenPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("ラーメンができました");
        return;
      }
      reject(new Error("ラーメンはうまくできませんでした"));
    }, 3 * 1000);
  });
}

console.log("Before createCapRamenPromise");

createCapRamenPromise()
  .then((result) => {
    // 成功時の処理はthenで受ける
    console.log(result); // "ラーメンができました"
  })
  // 失敗時の処理はthenではなくcatchで受ける
  .catch((err) => {
    // err には createCapRamenPromise で reject(...) に指定した値が渡ってくる
    console.error(err, { cause: err });
  });

console.log("After createCapRamenPromise");
