import { expect } from "jsr:@std/expect";

Deno.test("元の配列の最後の要素は逆転配列の先頭と等しい", () => {
  const xs = [1, 2, 3, 4, 5];
  const reversedXs = xs.toReversed();

  expect(reversedXs.at(0)).toEqual(xs.at(-1));
});
