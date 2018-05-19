/*
 * Object.prototype.hasOwnProperty()：
 *     判断对象上是否存在指定的 own property；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };
/* true */
console.log(obj01.hasOwnProperty("x"));
/* false */
console.log(obj01.hasOwnProperty("y"));
/* false */
console.log(obj01.hasOwnProperty("toString"));

export {};
