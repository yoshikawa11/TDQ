/**
 * 約50%の確率で0かnullを返す
 */
function selectZeroOrNull() {
  return Math.random() > 0.5 ? 0 : null;
}

const r = selectZeroOrNull();
// 結果がnullの場合は例外を送出する
if (r === null) {
  throw Error("nullが発生しました！");
}

// 結果がnullでなければ出力
console.log(`結果は ${r} でした`);
