import { expect } from "jsr:@std/expect";

/**
 * 引数がすべて空文字ではないことを確認します
 * @param {string} str1
 * @param {string} str2
 * @param {string} str3
 * @returns {boolean} 結果
 */
function notIncludesEmpty(str1, str2, str3) {
  return str1 && str2 && str3;
}

Deno.test("notIncludesEmpty function", () => {
  expect(typeof notIncludesEmpty("Hello", "World", "Deno")).toBe("boolean");
  expect(notIncludesEmpty("Hello", "World", "Deno")).toBe(true);
  expect(notIncludesEmpty("", "", "")).toBe(false);
  expect(notIncludesEmpty("Hello", "", "World")).toBe(false);
  expect(notIncludesEmpty("Hello", "World", "")).toBe(false);
  expect(notIncludesEmpty("", "World", "Deno")).toBe(false);
});
