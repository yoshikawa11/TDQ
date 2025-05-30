import { expect } from "jsr:@std/expect";

function hoge(xs, predicate) {
  return xs.every(predicate);
}

Deno.test("test", () => {
  expect(hoge([1, 2, 3], (x) => x > 0)).toBe(true);
  expect(hoge([1, 2, 3], (x) => x > 2)).toBe(false);
});
