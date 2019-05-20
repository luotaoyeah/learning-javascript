/*
 * Arrays and Collections
 *     Array.prototype.find()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.find() 方法,
 * 查找满足条件的第一个元素,
 * 如果找不到, 则返回 undefined
 */

const arr01 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "oranges", quantity: 5 }
];

console.log(arr01.find(i => i.name === "bananas")); // { name: 'bananas', quantity: 0 }
console.log(arr01.find(i => i.name === "foo")); // undefined

export {};
