/*
 * Arrays and Collections
 *     Array.prototype.findIndex()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Array.prototype.findIndex() 方法跟 Array.prototype.find() 方法一样,
 * 区别在于：返回的是第一个满足条件的元素所在的索引,
 * 如果找不到, 则返回 -1
 */

const arr01 = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'oranges', quantity: 5 },
];

console.log(arr01.findIndex((i) => i.name === 'bananas')); // 1
console.log(arr01.findIndex((i) => i.name === 'foo')); // -1

export {};
