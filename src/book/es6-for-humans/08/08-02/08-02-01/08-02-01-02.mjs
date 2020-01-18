/*
 * Iterators and Generators
 *     Iteration Protocols
 *         Iterator Protocol
 */

console.log('\n-------------------------------------------------- 01');
/*
 * iterator protocol 的内容：
 *     必须实现一个 next() 方法,
 *     方法没有参数, 返回一个对象, 对象有两个属性：done 和 value
 */

const obj = {
  0: 'FOO',
  1: 'BAR',
  2: 'BAZ',
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        const done = index > 2;
        const value = this[index++];
        return { value, done };
      },
    };
  },
};

for (let i of obj) {
  console.log(i);
}

export {};
