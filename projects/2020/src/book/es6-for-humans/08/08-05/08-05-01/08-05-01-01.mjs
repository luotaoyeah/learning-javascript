/*
 * Iterators and Generators
 *     Generator Function
 */

console.log('\n-------------------------------------------------- 01');

/*
 * generator function 跟普通的 function 的区别：
 * 调用 generator function 不会执行函数体中的代码, 而是会返回一个 iterator
 * 每调用一次该 iterator 的 next() 方法, 就会执行函数体中的代码,
 * 直到遇到一个 yield 语句, 就会暂定执行, 并将 yield 后面的表达式的值作为迭代结果的 value 值,
 * 以此类推, 直到所有代码执行完毕
 */

function* gen() {
  yield 1;
  /*
   * 当 yield 后面没有表达式时, 返回结果为 undefined
   */
  yield;
  yield 3;
}

const iterator01 = gen();
console.log(iterator01.next()); // { value: 1, done: false }
console.log(iterator01.next()); // { value: undefined, done: false }
console.log(iterator01.next()); // { value: 3, done: false }

export {};
