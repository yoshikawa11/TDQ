```js
import { expect } from "jsr:@std/expect";

Deno.test("test", () => {
  const mimizou = { id: 1, name: "みみぞう" };
  expect(() => {
    mimizou.name = "タツヲ";
  }).toThrow("Assignment to constant variable");
});
```
`const` は再代入を禁止するだけであり、プロパティの変更・追加を防ぐものではない。  
プロパティの変更・追加を禁止するなら `Object.freeze()` が必要だ。  
`expect(() => {...})` は 関数の実行時に例外（エラー）が発生するかどうかをテストするための構文です。主に `toThrow` という matcher と組み合わせて使います。