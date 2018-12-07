/*
 * Arrays and Collections
 *     Arrays and New Methods
 *         Array.from()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.from() 的方法签名为：
 *     from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
 * 第三个参数 thisArg 用于设置 mapFn 中的 this 对象
 */

const arrayLike = {
  0: "A",
  1: "B",
  2: "C",
  length: 3
};

const obj = {
  a: "FOO",
  b: "BAR",
  c: "BAZ"
};

console.log(
  Array.from(
    arrayLike,
    function(i) {
      return this[i.toLowerCase()];
    },
    obj
  )
); // [ 'FOO', 'BAR', 'BAZ' ]
