import { expect } from "jsr:@std/expect";

Deno.test("test", () => {
  const obj1 = { id: 1, name: "Ichi" };
  const obj2 = { ...obj1, name: "みみぞう" };

  expect(obj1.name).toBe("Ichi");
  expect(obj2.name).toBe("みみぞう");
});
