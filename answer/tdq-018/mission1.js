import { expect } from "jsr:@std/expect";

function hoge(xs, predicate) {
  return xs.some(predicate);
}

Deno.test("test1", () => {
  const xs = [1, 2, 3, 4, 5];
  const result = hoge(xs, (x) => x > 3);
  expect(result).toBe(true);
});

Deno.test("test2", () => {
  const xs = [1, 2, 3];
  const result = hoge(xs, (x) => x > 10);
  expect(result).toBe(false);
});
