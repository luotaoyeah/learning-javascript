/*
 * 如果想创建一个空对象, 类似 {} 或者 new Object(), 参数应该指定为 Object.prototype；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
const obj02 = new Object();
const obj03 = Object.create(Object.prototype);
/* true */
console.log(obj01.__proto__ === Object.prototype);
/* true */
console.log(obj01.__proto__ === obj02.__proto__);
/* true */
console.log(obj01.__proto__ === obj03.__proto__);

export {};
