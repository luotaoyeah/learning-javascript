/*
 * Arrays and Collections
 *     Array.prototype.values()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Array.prototype.vaues() 方法返回一个迭代器,
 * 该迭代器每次返回的数据为：元素值
 */

const values = ['a', 'b', 'c'].values();

console.log(values.next().value); // a
console.log(values.next().value); // b
console.log(values.next().value); // c
console.log(values.next().value); // undefined

export {};
