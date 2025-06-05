// deno test --allow-net --allow-read "....../answer/tdq-boss3/main_mission7.test.js"

import { fetchUsersPromise } from "./main_mission7.js"; // ← 修正ポイント
import { expect } from "jsr:@std/expect";

Deno.test("ユーザー名に 'E' を含むユーザーが返される", async () => {
  const result = await fetchUsersPromise({ name: "E" });

  expect(Array.isArray(result)).toBe(true);

  for (const user of result) {
    const fullName = `${user.first_name} ${user.last_name}`;
    expect(fullName.includes("E")).toBe(true);
  }
});

Deno.test("条件なしですべてのユーザーを取得できる", async () => {
  const result = await fetchUsersPromise({});

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

Deno.test("存在しないユーザー名でフィルタリングすると空配列が返る", async () => {
  const result = await fetchUsersPromise({ name: "NonExistentUser" });

  expect(result).toEqual([]);
});
