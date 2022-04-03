/*
 * Iterators and Generators
 *     Communicating with Generators
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 因为 generator function 的特殊行为：可以暂停和恢复执行, 并保持状态数据
 * 可以用来实现：使用同步的方式, 编写异步的代码
 */

function asyncGetName() {
  setTimeout(() => {
    iterator.next('FOO');
  }, 1000);
}

function asyncGetAge() {
  setTimeout(() => {
    iterator.next(99);
  }, 1000);
}

function* gen() {
  const name = yield asyncGetName();
  const age = yield asyncGetAge();
  console.log(name, age); // FOO 99
}

const iterator = gen();
iterator.next();

export {};
