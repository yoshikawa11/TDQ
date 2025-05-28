/**
 * 約50%の確率で0かnullを返す
 */
function selectZeroOrNull() {
  return Math.random() > 0.5 ? 0 : null;
}

console.log(selectZeroOrNull()); // 0またはnullがランダムに出力される
