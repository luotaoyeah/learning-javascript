/*
 * Arrays and Collections
 *     Set and WeakSet
 *         Set
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 使用 for...of 遍历
 */

const set = new Set();
set.add('FOO');
set.add('BAR');
set.add('BAZ');

for (const i of set) {
  console.log(i);
}

console.log('\n-------------------------------------------------- 02');
/*
 * 使用 forEach() 方法遍历
 */
set.forEach((value) => console.log(value));

export {};
