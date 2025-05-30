function hoge(args) {
  const { id, name = "No name" } = args;

  console.log(id, name);
}

function main() {
  const args = {
    id: 123,
  };

  const args2 = {
    id: 456,
    name: "Alice",
  };

  hoge(args);
  hoge(args2);
}

main();
