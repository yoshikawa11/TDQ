// FIXME: 引数は変更せず、関数名と実装を変更する
function delayConsoleLog(delaySec, output) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(output);
    }, delaySec * 1000);
  });
}

// FIXME: 必要に応じて変更する
delayConsoleLog(3, "hogehoge").then((result) => console.log(result));
