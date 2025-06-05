// deno test --allow-net --allow-read "....../answer/tdq-boss3/main.test.js"

import { fetchUsers } from "./main.js";
import { expect } from "jsr:@std/expect";

Deno.test("ユーザー名に 'E' を含むユーザーが返される", async () => {
  const result = await fetchUsers({ name: "E" });

  // レスポンスが配列であることを確認
  expect(Array.isArray(result)).toBe(true);

  // すべてのユーザーが 'E' を含んでいることを確認
  for (const user of result) {
    const fullName = `${user.first_name} ${user.last_name}`;
    expect(fullName.includes("E")).toBe(true);
  }
});

Deno.test("条件なしですべてのユーザーを取得できる", async () => {
  const result = await fetchUsers({});

  // 何件かユーザーが返ってくることを確認
  expect(result.length).toBeGreaterThan(0);
});

Deno.test("存在しないユーザー名でフィルタリングすると空配列が返る", async () => {
  const result = await fetchUsers({ name: "NonExistentUser" });

  // 空配列が返されることを確認
  expect(result).toEqual([]);
});

Deno.test("500エラー時に例外がthrowされる", async () => {
  // fetchを一時的にモック
  const originalFetch = globalThis.fetch;
  globalThis.fetch = () =>
    new Response(null, { status: 500, statusText: "Internal Server Error" });

  let errorCaught = false;
  try {
    await fetchUsers({});
  } catch (e) {
    errorCaught = true;
    // エラーメッセージの内容も確認
    expect(e.message).toContain("HTTP error: 500");
  } finally {
    globalThis.fetch = originalFetch; // モック解除
  }
  expect(errorCaught).toBe(true);
});
