```js
import { expect } from "jsr:@std/expect";

Deno.test("test", () => {
  const obj1 = { id: 1, name: "Ichi" };
  const obj2 = Object.assign(obj1, { name: "みみぞう" });

  expect(obj1.name).toBe("Ichi");
  expect(obj2.name).toBe("みみぞう");
});
```
> `Object.assign(targetObj, sourceObj)` で `targetObj` に対して `sourceObj` のプロパティを追加/上書きします。このとき `targetObj` には破壊的変更 が加わります。  

obj1.nameが上書きされるため、テストが失敗する