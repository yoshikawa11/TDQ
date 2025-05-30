import { expect } from "jsr:@std/expect";

/**
 * @param {Object} target - クローンの元となるオブジェクト
 * @param {Object} [source] - クローンにあたり上書きするプロパティのオブジェクト
 */
function cloneWith(target, source) {
  return source ? { ...source, ...target } : { ...target };
  // targetオブジェクトをクローンし、sourceオブジェクトで上書きする
}

Deno.test("test", async (t) => {
  const mimizou = { id: 33, name: "みみぞう" };

  await t.step("クローンできる", () => {
    const actual = cloneWith(mimizou);
    expect(actual).toEqual({ id: 33, name: "みみぞう" });
    expect(actual).not.toBe(mimizou); // クローンは元のオブジェクトとは異なる参照を持つ
  });
});
