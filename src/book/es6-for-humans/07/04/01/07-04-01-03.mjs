/*
 * Arrays and Collections
 *     Set and WeakSet
 *         WeakSet
 */

console.log('\n-------------------------------------------------- 01');
/*
 * WeakSet 跟 WeakMap 类似
 * 只能存放 object 类型的数据,
 * 当某个元素没有被其它地方引用时, 该元素可以被垃圾回收,
 * 只支持3个方法：add(), delete(), has()
 */

const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true

export {};
