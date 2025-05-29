```js
import { expect } from "jsr:@std/expect";

Deno.test("xsの各要素を2倍にする", () => {
  const xs = [10, 20, 30];
  for (let x of xs) {
    x = x * 2;
  }

  expect(xs).toEqual([20, 40, 60]);
});
```
`x` は `xs` の値を参照せず、値をコピーしただけなので、元の配列 `xs` の値は変更されない。　　
テストをパスするには　`xs` のインデックスでアクセスして要素の値を変更する必要がある。
```js
for (let i = 0; i < xs.length; i++) {
    xs[i] = xs[i] * 2;
  }
```