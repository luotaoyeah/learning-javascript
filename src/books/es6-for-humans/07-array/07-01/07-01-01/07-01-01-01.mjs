/*
 * Arrays and Collections
 *     Arrays and New Methods
 *         Array.from()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在 ES5 时期，
 * 要将 array-like object 转换为 array
 * 需要使用 Array.prototype.slice() 方法
 */

(function() {
  console.log(arguments instanceof Array); // false
  const args = Array.prototype.slice.call(arguments);
  console.log(args instanceof Array); // true
})("A", "B", "C");

console.log("\n-------------------------------------------------- 02");
/*
 * 在 ES6 时期，
 * 可以使用 Array.from() 静态方法
 * 将 array-like object 或者其他的 iterable object 转换为 array
 */

(function() {
  console.log(arguments); // [Arguments] { '0': 'A', '1': 'B', '2': 'C' }
  const args = Array.from(arguments);
  console.log(args); // [ 'A', 'B', 'C' ]
})("A", "B", "C");
