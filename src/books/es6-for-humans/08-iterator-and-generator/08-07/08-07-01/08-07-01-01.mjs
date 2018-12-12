/*
 * Iterators and Generators
 *     Completing Early
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 调用 iterator 的 return() 方法，会将返回的对象的 done 设置为 true
 * 从而提前中止遍历
 */

function* gen() {
  yield "FOO";
  yield "BAR";
  yield "BAZ";
}

const iterator = gen();
console.log(iterator.next()); // { value: 'FOO', done: false }
/*
 * 调用 return() 方法，返回的对象的 done 为 true，表示遍历结束，
 * value 就是 return() 方法的参数
 */
console.log(iterator.return("DONE")); // { value: 'DONE', done: true }
console.log(iterator.next()); // { value: undefined, done: true }

export {};
