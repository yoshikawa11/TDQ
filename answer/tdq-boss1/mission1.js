const file = "./answer/tdq-boss1/animal.json";
const context = `{
  "animals": [
    {
      "id": 1,
      "name": "ロバオ",
      "age": 37
    },
    {
      "id": 2,
      "name": "みみぞう",
      "age": 20
    },
    {
      "id": 3,
      "name": "セイキチ",
      "age": 17
    },
    {
      "id": 4,
      "name": "タツヲ",
      "age": 15
    },
    {
      "id": 5,
      "name": "マサハル",
      "age": 4
    }
  ]
}`;

await Deno.writeTextFile(file, context, { encoding: "utf8" });
