/*
 * Array.prototype.flat()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 concat() + 数组解构 模拟 flat()
   */

  const arr01 = [1, 2, [3, 4]];
  console.log(arr01.flat()); // [ 1, 2, 3, 4 ]
  console.log([].concat(...arr01)); // [ 1, 2, 3, 4 ]
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 reduce() + concat() 模拟 flat()
   */

  const arr01 = [1, 2, [3, 4]];
  console.log(arr01.reduce((acc, value) => acc.concat(value), []));
}

export {};
