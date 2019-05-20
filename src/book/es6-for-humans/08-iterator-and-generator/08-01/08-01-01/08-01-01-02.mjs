/*
 * Iterators and Generators
 *     Iterables and Iterators
 */

console.log("\n-------------------------------------------------- 01");
/*
 * iterable protocol 的内容是：
 *     实现 [Symbol.iterator] 方法
 *         每次调用该方法, 返回一个 iterator 对象
 */

/* 模拟实现 iterable protocol */
const obj = {
  0: "FOO",
  1: "BAR",
  2: "BAZ",
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        const done = index > 2;
        const value = this[index++];
        return { done, value };
      }
    };
  }
};

/*
 * 当使用 for...of 循环时, 会调用对象的 [Symbol.iterator] 方法,
 * 获取默认的 iterator
 */
for (const i of obj) {
  console.log(i);
}

export {};
