function delayConsoleLog(delaySec, output) {
  setTimeout(() => {
    console.log(output);
  }, delaySec * 1000);
}

function main() {
  for (let i = 1; i <= 3; i++) {
    delayConsoleLog(1, `${i} 秒後に結果を表示`);
  }
}

main();
