import { expect } from "jsr:@std/expect";

function add(x, y) {
  return x + y;
}

Deno.test("add function", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
  expect(add(100, 200)).toBe(300);
  expect(add(-50, -50)).toBe(-100);
});
