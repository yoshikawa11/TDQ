function getUsers(empty) {
  return empty
    ? { users: [] }
    : { users: [{ id: 1, name: "tadashi" }, { id: 2, name: "masaharu" }] };
}

function getSecondUserLength(empty) {
  // FIXME: getUsersを使ってテストが通るように実装する
  const users = getUsers(empty).users;
  return users[1]?.name?.length;
}

import { expect } from "jsr:@std/expect";
Deno.test("getUsers()で取得した2人目のユーザー名の文字数を返す", () => {
  expect(getSecondUserLength(false)).toBe(8);
});
Deno.test("存在しない場合はundefinedを返す", () => {
  expect(getSecondUserLength(true)).toBeUndefined();
});
