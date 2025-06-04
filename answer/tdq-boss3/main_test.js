// deno test --allow-net --allow-read "....../answer/tdq-boss3/main_test.js"

import { fetchUsersPromise } from "./main.js";
import { expect } from "jsr:@std/expect";

Deno.test("ユーザー名に 'E' を含むユーザーが返される", async () => {
  const result = await fetchUsersPromise({ name: "E" });

  // レスポンスが配列であることを確認
  expect(Array.isArray(result)).toBe(true);

  // すべてのユーザーが 'E' を含んでいることを確認
  for (const user of result) {
    const fullName = `${user.first_name} ${user.last_name}`;
    expect(fullName.includes("E")).toBe(true);
  }
});

Deno.test("条件なしですべてのユーザーを取得できる", async () => {
  const result = await fetchUsersPromise({});

  // 何件かユーザーが返ってくることを確認
  expect(result.length).toBeGreaterThan(0);
});
Deno.test("存在しないユーザー名でフィルタリングすると空配列が返る", async () => {
  const result = await fetchUsersPromise({ name: "NonExistentUser" });

  // 空配列が返されることを確認
  expect(result).toEqual([]);
});
