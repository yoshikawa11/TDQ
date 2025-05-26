function isOver10(num) {
  return num > 10;
}

function main() {
  let v = 11;
  if (isOver10(v)) {
    v = 10;
  }
  console.log(v);
}

main();
