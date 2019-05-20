/*
 * __proto__：
 *     在 Firefox 中可以通过对象的 __proto__ 属性访问和设置对象的 prototype；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
const obj02 = {};
const obj03 = Object.create(obj01);
/* true */
console.log(Object.getPrototypeOf(obj03) === obj03.__proto__);
obj03.__proto__ = obj02;
/* true */
console.log(Object.getPrototypeOf(obj03) === obj02);

export {};
