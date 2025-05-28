function main() {
  const tdqResult = { data: [1, 2], error: null };
  const tdqData = tdqResult.data;
  const tdqError = tdqResult.error;
  console.log(tdqData, tdqError);

  const { data: newData, error: newError } = { data: [1, 2], error: null };
  console.log(newData, newError);
}

main();
