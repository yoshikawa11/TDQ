function createCapRamenPromise() {
  return new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error("ラーメンはうまくできませんでした")),
      3 * 1000,
    );
  });
}

console.log("Before createCapRamenPromise");

createCapRamenPromise()
  .catch((err) => {
    console.error(err);
  });

console.log("After createCapRamenPromise");
