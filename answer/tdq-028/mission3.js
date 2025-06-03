function totalFare(obj) {
  return obj.items?.reduce((sum, item) => sum + (item.summary?.fare ?? 0), 0) ??
    0;
}

import { expect } from "jsr:@std/expect";
Deno.test("test1", () => {
  expect(totalFare({})).toBe(0);
});
Deno.test("test2", () => {
  expect(totalFare({
    items: [
      { summary: { fare: 100 } },
      { summary: { fare: 10 } },
      { summary: { fare: 0 } },
      { summary: {} },
      {},
    ],
  })).toBe(110);
});
