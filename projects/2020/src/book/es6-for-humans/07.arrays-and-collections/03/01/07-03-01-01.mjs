/*
 * Arrays and Collections
 *     Map and WeakMap
 *         Map
 */

console.log('\n-------------------------------------------------- 01');
/*
 * map 跟 object literal 很像, 存储的是键值对,
 * 区别在于：
 *     object literal 的 key 只能是 string 类型,
 *     map 的 key 可以是任意类型
 */

const keyString = 'SOME STRING';
const keyObject = {};
const keyFn = () => {};

const map = new Map();

/* 通过 set() 方法, 添加或者更新元素 */
map.set(keyString, 'FOO');
map.set(keyObject, 'BAR');
map.set(keyFn, 'BAZ');

/* 通过 size 属性, 获取元素个数 */
console.log(map.size); // 3

/* 通过 get() 方法, 获取元素的值 */
console.log(map.get(keyString)); // FOO
console.log(map.get(keyObject)); // BAR
console.log(map.get(keyFn)); // BAZ
