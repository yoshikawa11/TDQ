import { expect } from "jsr:@std/expect";

Deno.test("3番目の要素を除外してから文字数をキーとしてグルーピングする", () => {
  const xs = ["one", "two", "three", "four", "five"];

  const r = Object.groupBy(xs.toSpliced(2, 1), (x) => x.length);

  expect(r).toEqual({ 3: ["one", "two"], 4: ["four", "five"] });
  expect(xs).toEqual(["one", "two", "three", "four", "five"]);
});
