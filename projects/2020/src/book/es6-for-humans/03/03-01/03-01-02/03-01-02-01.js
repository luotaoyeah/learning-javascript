/*
 * Destructuring
 *     Destructuring of Objects and Arrays
 *         Assignment Using Destructuring
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以声明变量的同时进行解构,
   * 也可以先声明变量再进行解构
   */

  const array = [1, 2, 3];
  const [, , a] = array;
  console.log(a); // 3

  let x = "a";
  [, x] = array;
  console.log(x); // 2
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 再使用对象解构时,
   * 如果是将对象解构到已经声明好的变量中, 需要使用圆括号将解构语句包裹起来,
   * 否则花括号会被当成代码块来解析；
   */

  let x;
  ({ a: x } = { a: 1 });
  console.log(x); // 1

  /*
   * 类似的, 当箭头函数返回一个 object literal 时,
   * 也需要使用圆括号包裹起来；
   */
  const fn01 = () => ({ a: 1 });
  console.log(fn01()); // { a: 1 }
}
