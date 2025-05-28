/**
 * 引数がすべて空文字ではないことを確認します
 * @param {string} str1
 * @param {string} str2
 * @param {string} str3
 * @returns {boolean} 結果
 */
function notIncludesEmpty(str1, str2, str3) {
  return str1 != "" && str2 != "" && str3 != "";
}

function main() {
  console.log(notIncludesEmpty("a", "b", "c")); // true
  console.log(notIncludesEmpty("a", "", "c")); // false
  console.log(notIncludesEmpty("", "", "")); // false
  console.log(notIncludesEmpty("a", "b", null)); // true
}

main();
