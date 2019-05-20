/*
 * Iterators and Generators
 *     Generators
 */

console.log("\n-------------------------------------------------- 01");
/*
 * generator 是一种特殊的 function, 用来创建一种特殊的 iterator
 *
 * 在形式上：
 *     function 跟函数名之间有一个 *, 如：function *gen(){}
 *     函数体中使用了 yield 语句
 * 在效果上：
 *     generator function 的执行可以被暂停和恢复,
 *     在这之间的状态会被保持
 */

function* gen() {
  yield "a";
  yield "b";
}

const iterator = gen();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

export {};
