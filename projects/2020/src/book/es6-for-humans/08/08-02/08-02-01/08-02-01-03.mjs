/*
 * Iterators and Generators
 *     Iteration Protocols
 *         Iterator as an Iterable
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 可以让一个对象同时实现 iterable protocol 和 iterator protocol
 * 即同时实现 [Symbol.iterator] 和 next 方法
 */

const obj = {
  index: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      value: this.index++,
      done: false,
    };
  },
};

const iterator = obj[Symbol.iterator]();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1

for (let i of obj) {
  if (i > 3) {
    break;
  }
  console.log(i);
}

export {};
