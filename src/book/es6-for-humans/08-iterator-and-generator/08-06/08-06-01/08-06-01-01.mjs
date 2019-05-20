/*
 * Iterators and Generators
 *     Communicating with Generators
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 调用 generator function 返回一个 iterator
 * 调用该 iterator 的 next() 方法,
 * 通过 next() 方法的返回值, 可以将函数中的数据传递出来,
 * 通过 next() 方法的参数, 可以将数据传递到函数中去,
 *     具体传递规则：本次 next() 方法的参数, 会作为上次 next() 方法调用时的 yield 表达式的值
 *     即第一次调用 next() 方法时的参数是没有意义的
 */

function* gen() {
  const num01 = yield "FOO";
  const num02 = yield "BAR";
  console.log("SUM:", num01 + num02);
}

const iterator = gen();

console.log(iterator.next()); // { value: 'FOO', done: false }
console.log(iterator.next(1)); // { value: 'BAR', done: false }
iterator.next(2); // SUM: 3

export {};
