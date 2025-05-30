function swapColumns(text) {
  return text.replaceAll(
    /^(\|[^|]+\|)([^|]+\|)([^|]+\|)/gm,
    (_, col1, col2, col3) => `${col1}${col3}${col2}`,
  );
}

import { expect } from "jsr:@std/expect";

Deno.test("テーブルの2列目と3列目を入れ替える", () => {
  expect(swapColumns(`
| col1 | col2 | col3 | col4 |
| ---- | ---- | ---- | ---- |
| val1 | val2 | val3 | val4 |
| val1 | val2 | val3 | val4 |
`)).toBe(`
| col1 | col3 | col2 | col4 |
| ---- | ---- | ---- | ---- |
| val1 | val3 | val2 | val4 |
| val1 | val3 | val2 | val4 |
`);
});
