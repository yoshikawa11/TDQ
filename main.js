/**
 * 3つの文字列を結合します。
 * cは省略可能であり、その場合は"@"として結合します。
 *
 * @param {string} a
 * @param {string} b
 * @param {string} [c="@"]
 * @returns {string} 結合された文字列
 */
function join(a, b, c) {
  return a + b + (c ?? "@");
}

function main() {
  console.log(join("a", "b", "c")); // abc
  console.log(join("a", "b")); // ab@
  console.log(join("", "", "")); // ""
}

main();
