import { expect } from "jsr:@std/expect";

function hoge(box, target) {
  return box.every((array) => array.includes(target));
}

Deno.test("test", () => {
  expect(hoge([[1, 2, 3], [2, 4, 6]], 2)).toBe(true);
  expect(hoge([[1, 2, 3], [2, 3, 4]], 3)).toBe(true);
  expect(hoge([[1, 2, 3], [4, 5, 6]], 0)).toBe(false);
  expect(hoge([[1, 2, 3], [1, 2, 3]], 7)).toBe(false);
});
