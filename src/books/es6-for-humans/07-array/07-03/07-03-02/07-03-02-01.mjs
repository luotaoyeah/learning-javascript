/*
 * Arrays and Collections
 *     Map and WeakMap
 *         WeakMap
 */

console.log("\n-------------------------------------------------- 01");
/*
 * WeakMap 跟 Map 的区别：
 *     key 必须是 object 类型
 *     当 key object 没有被其他地方引用时，key object 可以被垃圾回收
 *     不能被遍历
 *     不能获取大小
 *     WeakMap 只支持下面的方法：
 *         set()
 *         get()
 *         has()
 *         delete()
 */

const weakMap = new WeakMap();
/*
  weakMap.set(1, "FOO"); // TypeError: Invalid value used as weak map key
*/
const obj01 = {};
const obj02 = () => {};
const obj03 = class {};

weakMap.set(obj01, "FOO");
weakMap.set(obj02, "BAR");
weakMap.set(obj03, "BAZ");

console.log(weakMap.get(obj02)); // BAR
console.log(weakMap.has({})); // false

weakMap.delete(obj03);
console.log(weakMap.has(obj03)); // false
