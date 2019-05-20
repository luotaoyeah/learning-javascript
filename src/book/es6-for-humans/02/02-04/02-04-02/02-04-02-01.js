/*
 * New Syntax in ES6
 *     Rest and Spread Operators
 *         The Spread Operator
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * rest parameter 中的 ... 表示 rest operator,
   *     作用是：将任意多个参数装到一个数组参数中；
   * 在其他地方（非 rest parameter）, ... 表示 spread operator,
   *     作用是：将数组拆分为元素序列, 类似于 rest operator 的反向操作；
   */

  const values = [200, 300, 400];
  const newValues = [100, ...values, 500];
  console.log(newValues); // [ 100, 200, 300, 400, 500 ]
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * spread operator 的一个常见用途：
   *     调用 Function.call() 方法时, 将数组参数拆分之后进行传递；
   */

  function fn01(...collection) {
    console.log(collection);
  }

  const values = ["a", "b", "c"];
  fn01.apply(null, values); // [ 'a', 'b', 'c' ]
  fn01.call(null, ...values); // [ 'a', 'b', 'c' ]
}
