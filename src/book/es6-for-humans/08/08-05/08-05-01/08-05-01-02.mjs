/*
 * Iterators and Generators
 *     Generator Function
 */

console.log('\n-------------------------------------------------- 01');
/*
 * generator function 同样可以接受参数
 */

function* gen(name) {
  yield 1;
  yield name.toUpperCase();
  yield 3;
}

const iterator = gen('foo');
console.log(iterator.next());
console.log(iterator.next()); // { value: 'FOO', done: false }

export {};
