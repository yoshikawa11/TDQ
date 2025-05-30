// favoriteを除外したcoreを抽出
// favoriteは未使用のため、それが明示されるように_を付与する
const { _favorite, ...core } = {
  id: 2,
  name: "みみぞう",
  favorite: "こんにゃくゼリー",
};
// coreを利用する
console.log(core);
