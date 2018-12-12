/*
 * Iterators and Generators
 *     Completing Early
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在 generator function 中使用 return 语句，
 * 同样可以将返回的对象的 done 设置为 true
 * 从而提前中止遍历
 */

function* gen() {
  yield "FOO";
  return "DONE";
  yield "BAR";
  yield "BAZ";
}

const iterator = gen();

console.log(iterator.next()); // { value: 'FOO', done: false }
console.log(iterator.next()); // { value: 'DONE', done: true }
console.log(iterator.next()); // { value: undefined, done: true }

console.log("\n-------------------------------------------------- 02");
/*
 * 由于 for...of 循环不会遍历 done 为 true 的迭代，
 * 因此 return 语句返回的数据不会被 for...of 遍历
 */

for (const i of gen()) {
  console.log(i);
}

export {};
