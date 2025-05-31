function filter(values, predicate) {
  if (values.length === 0) {
    throw new Error("filter: valuesの長さが0です");
  }

  return values.filter(predicate);
}

function filterMap(values, to) {
  try {
    return filter(values).map(to);
  } catch (e) {
    throw new Error("filterMap: 処理に失敗しました", { cause: e });
  }
}

filterMap([], (x) => x > 3);
