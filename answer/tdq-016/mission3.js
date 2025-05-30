const members = [
  { id: 1, name: "タツヲ", animal: "ゴリラ" },
  { id: 2, name: "マサハル", animal: "犬" },
  { id: 3, name: "みみこ", animal: "フクロウ" },
  { id: 4, name: "みみぞう", animal: "フクロウ" },
  { id: 5, name: "わんべえ", animal: "犬" },
];

function filterAsAnimals(animals) {
  return members.filter((members) => animals.includes(members.animal));
}

console.log(
  filterAsAnimals(["犬", "フクロウ"]),
);
