```js
import { expect } from "jsr:@std/expect";

Deno.test("test", () => {
  const obj1 = {};
  const obj2 = {};
  expect(obj1).toBe(obj2);
});
```
`toBe`は参照先が同じでなければテストをパスしない。オブジェクトを比較するなら`toEqual`を使う
```js
expect(obj1).toEqual(obj2);
```