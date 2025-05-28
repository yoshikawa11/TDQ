```js
const r = selectZeroOrNull();
// 結果がnullの場合は例外を送出する
if (!r) {
  throw Error("nullが発生しました！");
}

// 結果がnullでなければ出力
console.log(`結果は ${r} でした`);
```
`!r` は `r` が `null` だけでなく、`undefined` や `0`、空文字列 ("") などの「falsy」な値も含めて評価される。そのため、 `selectZeroOrNull`の戻り値はすべて例外を送出する。