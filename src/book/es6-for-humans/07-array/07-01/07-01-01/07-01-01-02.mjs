/*
 * Arrays and Collections
 *     Arrays and New Methods
 *         Array.from()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.from() 的方法签名为：
 *     from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
 * 第二个参数 mapFn 用于在转换的过程中, 对每个元素进行处理
 */
(function() {
  /* 在转换的同时, 将每个元素转换为小写 */
  console.log(Array.from(arguments, i => i.toLowerCase()));
})("A", "B", "C");
