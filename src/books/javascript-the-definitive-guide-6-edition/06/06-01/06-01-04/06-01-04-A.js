/*
 * 6.1.4 Object.create()
 */

/*
 * 创建一个对象，并指定对象的 prototype 对象；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1, y: 2 };
const obj02 = Object.create(obj01);
/* true */
console.log(obj02.__proto__ === obj01);

export {};
