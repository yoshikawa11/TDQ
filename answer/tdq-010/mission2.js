import { expect } from "jsr:@std/expect";

function max(x, y) {
  return x > y ? x : y;
}

Deno.test("max function", () => {
  expect(max(1, 2)).toBe(2);
  expect(max(-1, 1)).toBe(1);
  expect(max(0, 0)).toBe(0);
  expect(max(100, 200)).toBe(200);
  expect(max(-50, -100)).toBe(-50);
});
