function delayOutput(delaySec, output) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(output);
    }, delaySec * 1000);
  });
}

async function main() {
  const r = await delayOutput(3, "hogehoge");
  console.log(r);
}

main();
