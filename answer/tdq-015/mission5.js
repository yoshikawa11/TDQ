import { expect } from "jsr:@std/expect";

/**
 * 最後の成人を返却する
 */
function findLastAdult(guests) {
  // FIXME: 実装
  const lastIndex = guests.findLastIndex((guest) => guest.age >= 20);
  return guests[lastIndex];
}

/**
 * 最後の成人を返却する
 */
function findLastAdultFilter(guests) {
  // FIXME: 実装
  return guests.filter((guest) => guest.age >= 20).at(-1);
}

const guests = [
  { id: 1, name: "Ichiro", age: 28 },
  { id: 2, name: "Jiro", age: 68 },
  { id: 3, name: "Saburo", age: 17 },
  { id: 4, name: "Shiro", age: 12 },
  { id: 5, name: "Goro", age: 21 },
];

Deno.test("test", () => {
  expect(findLastAdult(guests)).toEqual({ id: 5, name: "Goro", age: 21 });
  expect(findLastAdultFilter(guests)).toEqual({ id: 5, name: "Goro", age: 21 });
});
