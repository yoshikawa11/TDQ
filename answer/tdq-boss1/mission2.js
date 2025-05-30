import file from "./animal.json" with { type: "json" };

const animals = file.animals;

if (animals.length === 0) {
  console.error("animals is empty");
  console.error("Please check the animal.json file.");
  Deno.exit(1);
}

// CSV を構築
const header = Object.keys(animals[0]).join(",");
const rows = animals.map((values) => Object.values(values).join(","));
const csv = [header, ...rows].join("\n") + "\n";

// ファイル出力
const file = "./answer/tdq-boss1/animal.csv";
await Deno.writeTextFile(file, csv, {
  encoding: "utf8",
});
