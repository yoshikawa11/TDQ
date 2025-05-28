/**
 * 約50%の確率で0かnullを返す
 */
function selectZeroOrNull() {
  if (Math.random() > 0.5) {
    return 0;
  }

  return null;
}

console.log(selectZeroOrNull()); // 0またはnullがランダムに出力される
