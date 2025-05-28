/**
 * moneyを渡すとおつりを返却します。
 *
 * - moneyが未指定(またはundefined or null)の場合はundefinedを返却します
 * - moneyには数値型以外の値が入らないという前提があります
 * - moneyが50未満の場合におつりがマイナスになることは許容します
 *
 * @param {number} money
 * @returns {number|undefined} おつり
 */
function pay(money) {
  if (money == null) {
    return undefined;
  }

  return money - 50;
}

function main() {
  console.log(pay(100)); //output->50
  console.log(pay(undefined)); //output->undefined
  console.log(pay(null)); //output->undefined
  console.log(pay(0)); //output->-50
  console.log(pay(NaN)); //output->NaN
}

main();
