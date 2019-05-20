/*
 * Arrays and Collections
 *     Set and WeakSet
 *         Set
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Set 用来存放不重复的数据
 */

const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set); // Set { 1, 2, 3 }

/*
 * 使用 add() 方法添加元素,
 * 当元素已经存在时, 不做任何操作
 */
set.add(2);
console.log(set); // Set { 1, 2, 3 }

set.delete(2);
console.log(set.size); // 2
console.log(set.has(1)); // true
