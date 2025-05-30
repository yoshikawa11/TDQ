import { expect } from "jsr:@std/expect";

// FIXME: 数字の数だけ要素を複製する
function repeatBySelf(...numbers) {
  return numbers.flatMap((num) => Array(num).fill(num));
}

Deno.test("数字の数だけ要素を複製する", () => {
  expect(repeatBySelf(1, 2, 3)).toEqual([1, 2, 2, 3, 3, 3]);
});
