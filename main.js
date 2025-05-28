function hoge(args) {
  const { id, name = "No name" } = args;

  console.log(id, name);
}

hoge({ id: 1, name: "test" }); // Outputs: 1 test
hoge({ id: 2 }); // Outputs: 2 No name
hoge({ id: 3, name: "example", student: true }); // Outputs: 3 example
