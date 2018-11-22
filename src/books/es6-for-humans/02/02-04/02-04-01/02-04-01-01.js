/*
 * New Syntax in ES6
 *     Rest and Spread Operators
 *         rest operator
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ES6 提供的 rest parameter 支持了可变参数，即参数的个数在定义函数的时候是不确定的；
   */

  /*
   * 参数 collection 前面的 ... 称之为 rest symbol，
   * 它的作用是：将余下的参数全部装到 collection 这个数组参数里面；
   */
  (function(id, ...collection) {
    console.log(collection instanceof Array);
  })("01", "A", "B", "C"); // true

  (function(id, ...collection) {
    console.log(collection);
  })("01", "A", "B", "C"); // [ 'A', 'B', 'C' ]
}
