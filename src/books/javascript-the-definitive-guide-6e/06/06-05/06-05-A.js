/*
 * 6.5 Enumerating Properties
 */

/*
 * for/in 遍历对象的 enumerable 为 true 的 own properties 和 inherited properties；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1, y: 2 };
/* false */
console.log(obj01.propertyIsEnumerable("toString"));

for (let key in obj01) {
  console.log(key);
}

export {};
