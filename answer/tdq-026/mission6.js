function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms}ms経ちました`);
    }, ms);
  });
}

delay(1000)
  .then((resolve) => {
    console.log(resolve);
    return Promise.all([
      delay(500),
      delay(1500),
    ]);
  })
  .then((resolves) => {
    resolves.forEach((x) => console.log(x));
    return delay(1000);
  })
  .then((resolve) => {
    console.log(resolve);
  });
