/*
 * Iterators and Generators
 *     Iterables and Iterators
 */

console.log('\n-------------------------------------------------- 01');
/*
 * ES6 新增了 iterable protocol 和 iterator protocol
 * 实现 iterable protocol 的对象称之为 iterable
 * 实现 iterator protocol 的对象称之为 iterator
 */

/*
 * iterator protocol 的内容是：
 *     实现一个 next() 方法
 *     每次调用 next() 方法返回一个对象, 对象包含两个属性：done 和 value, 其中：
 *         done 为 true 或 false, 表示是否遍历完毕
 *         value 表示本次遍历返回的元素值, 如果遍历完毕, 则 value 为 undefined
 */

/**
 * 模拟实现 iterator protocol
 * @param arr
 * @return {*}
 */
function getMyIterator(arr) {
  let index = 0;

  return {
    next() {
      const done = index >= arr.length;
      const value = done ? undefined : arr[index++];

      return { done, value };
    },
  };
}

const arr01 = [1, 2, 3];
const myIterator = getMyIterator(arr01);

console.log(myIterator.next()); // { done: false, value: 1 }
console.log(myIterator.next()); // { done: false, value: 2 }
console.log(myIterator.next()); // { done: false, value: 3 }
console.log(myIterator.next()); // { done: true, value: undefined }

export {};
