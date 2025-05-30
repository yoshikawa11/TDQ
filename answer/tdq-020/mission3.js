function createTasks(text) {
  const pattern = /- \[ \] (?<date>\d{4}-\d{2}-\d{2}) (?<name>.+)/g;
  const matches = text.matchAll(pattern);

  return Array.from(matches, ({ groups }) => ({
    date: groups.date,
    name: groups.name,
  }));
}

import { expect } from "jsr:@std/expect";

Deno.test("タスク文字列からタスクオブジェクトの配列を作成できる", () => {
  expect(createTasks(`
- [ ] 2025-02-18 task1
- [ ] 2025-02-19 task2
- [ ] 2025-02-19 task3
`)).toEqual(
    [
      { date: "2025-02-18", name: "task1" },
      { date: "2025-02-19", name: "task2" },
      { date: "2025-02-19", name: "task3" },
    ],
  );
});
