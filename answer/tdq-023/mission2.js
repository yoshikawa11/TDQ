function delayConsoleLog(delaySec, output) {
  setTimeout(() => {
    console.log(output);
  }, delaySec * 1000);
}

delayConsoleLog(2, "display output after 2 seconds");
