function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms}ms経ちました`);
    }, ms);
  });
}

import { expect } from "jsr:@std/expect";
Deno.test("test", () => {
  return delay(1000).then((x) => expect(x).toBe("1000ms経ちました"));
});
